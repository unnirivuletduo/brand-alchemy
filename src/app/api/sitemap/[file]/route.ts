import { SITE_URL, WP_URL, wpUrlToPath } from "@/lib/seo";

// Serves Yoast's XML sitemaps from WordPress on the public domain.
// next.config.ts rewrites /sitemap_index.xml and /*-sitemap.xml here.

// Only these sitemaps have matching routes on the Next.js site. Others Yoast
// makes (categories, authors, services, ...) would list pages that 404.
const SITEMAP_TYPES = ["post", "page", "industry"] as const;
type SitemapType = (typeof SITEMAP_TYPES)[number];

const SITEMAP_FILE = /^(sitemap_index|([a-z0-9_]+)-sitemap\d*)\.xml$/;

function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}

// Yoast's stylesheet is on the WordPress domain, which browsers won't load
// for a sitemap on this domain, so it's proxied as /main-sitemap.xsl.
function fixStylesheet(xml: string) {
  return xml.replace(/href="[^"]*main-sitemap\.xsl"/, 'href="/main-sitemap.xsl"');
}

// Keeps the sub-sitemaps that have routes here, pointed at this domain.
function rewriteIndex(xml: string) {
  return xml.replace(/<sitemap>[\s\S]*?<\/sitemap>/g, (entry) => {
    const loc = entry.match(/<loc>([^<]*)<\/loc>/)?.[1] ?? "";
    const file = loc.split("/").pop() ?? "";
    const type = file.match(SITEMAP_FILE)?.[2];

    if (!SITEMAP_TYPES.includes(type as SitemapType)) return "";
    return entry.replace(loc, `${SITE_URL}/${file}`);
  });
}

// Points each URL at its Next.js route and drops ones the site doesn't have.
function rewriteUrls(xml: string, type: SitemapType) {
  const seen = new Set<string>();

  return xml.replace(/<url>[\s\S]*?<\/url>/g, (entry) => {
    const loc = entry.match(/<loc>([^<]*)<\/loc>/)?.[1];
    const path = loc && wpUrlToPath(type, loc);

    if (!path || seen.has(path)) return "";
    seen.add(path);
    return entry.replace(`<loc>${loc}</loc>`, `<loc>${path === "/" ? SITE_URL : SITE_URL + path}</loc>`);
  });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const match = file.match(SITEMAP_FILE);
  const type = match?.[2] as SitemapType | undefined;

  if (!match || (type && !SITEMAP_TYPES.includes(type))) {
    return new Response("Not found", { status: 404 });
  }

  const res = await fetch(`${WP_URL}/${file}`, { next: { revalidate: 300 } });

  if (!res.ok) {
    return new Response("Not found", { status: 404 });
  }

  const xml = fixStylesheet(await res.text());

  return xmlResponse(type ? rewriteUrls(xml, type) : rewriteIndex(xml));
}
