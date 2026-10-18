import { SITE_URL, WP_URL, getPageYoast, toSiteUrls } from "@/lib/seo";

/**
 * Renders Yoast's structured data (JSON-LD) with links pointed at the public
 * site. `wpLink` is the WordPress permalink of the content and `path` its
 * Next.js route, so the page's own URL is right even when they differ.
 */
export default function JsonLd({
  schema,
  wpLink,
  path,
}: {
  schema?: Record<string, unknown> | null;
  wpLink?: string | null;
  path?: string;
}) {
  if (!schema) return null;

  let json = JSON.stringify(withoutWpOnlyLinks(schema));
  // Swapping the bare WordPress domain would also move media URLs; toSiteUrls covers it.
  if (wpLink && path && wpLink !== `${WP_URL}/`) {
    json = json.split(wpLink).join(path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);
  }
  json = toSiteUrls(json).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

// Removes links to WordPress pages the Next.js site doesn't have: the
// search page (?s=...) and author archives.
function withoutWpOnlyLinks(schema: Record<string, unknown>) {
  const graph = schema["@graph"];
  if (!Array.isArray(graph)) return schema;

  return {
    ...schema,
    "@graph": graph.map((node) => {
      if (node?.["@type"] === "WebSite") {
        const { potentialAction: _search, ...rest } = node;
        return rest;
      }
      if (node?.["@type"] === "Person" && String(node.url).includes("/author/")) {
        const { url: _author, ...rest } = node;
        return rest;
      }
      return node;
    }),
  };
}

// JSON-LD for a static route, from the WordPress page with the same slug.
export async function PageSchema({ slug, path }: { slug: string; path: string }) {
  const yoast = await getPageYoast(slug);
  return <JsonLd schema={yoast?.schema} wpLink={yoast?.canonical} path={path} />;
}
