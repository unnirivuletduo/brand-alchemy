import { toSiteUrls } from "@/lib/seo";

// Renders Yoast's structured data (JSON-LD) with links pointed at the public site.
export default function JsonLd({ schema }: { schema?: Record<string, unknown> | null }) {
  if (!schema) return null;

  const json = toSiteUrls(JSON.stringify(schema)).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
