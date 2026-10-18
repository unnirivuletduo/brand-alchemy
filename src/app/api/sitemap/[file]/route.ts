import { SITE_URL, WP_URL, toSiteUrls } from "@/lib/seo";

// Serves Yoast's XML sitemaps from WordPress on the public domain.
// next.config.ts rewrites /sitemap_index.xml and /*-sitemap.xml here.
const SITEMAP_FILE = /^(sitemap_index|[a-z0-9_-]+-sitemap\d*)\.xml$/;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;

  if (!SITEMAP_FILE.test(file)) {
    return new Response("Not found", { status: 404 });
  }

  const res = await fetch(`${WP_URL}/${file}`, { next: { revalidate: 300 } });

  if (!res.ok) {
    return new Response("Not found", { status: 404 });
  }

  const xml = toSiteUrls(await res.text())
    // Yoast's stylesheet link is protocol-relative; serve it from this domain too.
    .replace(/\/\/api\.brandalchemy\.co\.nz\/main-sitemap\.xsl/g, "/main-sitemap.xsl")
    // WordPress URLs end in "/", but Next.js routes don't.
    .replace(
      new RegExp(`<loc>(${SITE_URL.replace(/[.]/g, "\\.")}/[^<]*?)/</loc>`, "g"),
      "<loc>$1</loc>"
    );

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
