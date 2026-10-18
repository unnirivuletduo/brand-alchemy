import type { Metadata } from "next";

// Public Next.js domain, and the headless WordPress origin Yoast runs on.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://brandalchemy.co.nz"
).replace(/\/$/, "");
export const WP_URL = "https://api.brandalchemy.co.nz";

export const SITE_NAME = "Brand Alchemy";

// Shape of the `yoast_head_json` field Yoast adds to WordPress REST responses.
export type YoastHead = {
  title?: string;
  description?: string;
  robots?: { index?: string; follow?: string };
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_type?: string;
  og_site_name?: string;
  og_locale?: string;
  og_image?: { url: string; width?: number; height?: number; type?: string }[];
  article_published_time?: string;
  article_modified_time?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  schema?: Record<string, unknown>;
};

type Fallback = {
  title: string;
  description?: string;
  image?: string | null;
};

// Points WordPress URLs at the public site. Media under /wp-content/ is
// only served by WordPress, so those URLs are left alone.
const WP_PAGE_URL = /https?:\/\/api\.brandalchemy\.co\.nz(?!\/wp-content\/)/g;

export function toSiteUrls(text: string) {
  return text.replace(WP_PAGE_URL, SITE_URL);
}

// WordPress titles arrive HTML-encoded (e.g. "&#8217;").
function decodeEntities(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

export function stripHtml(html: string) {
  return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

// Shortens text for a meta description without cutting a word in half.
export function truncate(text: string, max = 160) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[\s,.;:–-]+$/, "") + "…";
}

/**
 * Converts Yoast's SEO data into Next.js metadata. Anything Yoast leaves
 * empty (or Yoast not being installed yet) falls back to `fallback`.
 * The canonical is always the Next.js route, because WordPress permalinks
 * don't necessarily match the frontend routes.
 */
export function buildMetadata(
  path: string,
  yoast: YoastHead | null | undefined,
  fallback: Fallback
): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  // Yoast titles already include the "– Brand Alchemy" suffix, so bypass the layout template.
  // Nested layouts drop the root title template, so add the suffix here.
  // The home page fallback is already a full title.
  const title = {
    absolute: yoast?.title
      ? decodeEntities(yoast.title)
      : path === "/"
        ? fallback.title
        : `${fallback.title} – ${SITE_NAME}`,
  };
  const description = yoast?.description || fallback.description;

  const ogTitle = decodeEntities(yoast?.og_title || yoast?.title || fallback.title);
  const ogDescription = yoast?.og_description || description;
  const ogImages = yoast?.og_image?.length
    ? yoast.og_image.map(({ url, width, height }) => ({ url, width, height }))
    : fallback.image
      ? [{ url: fallback.image }]
      : undefined;

  const metadata: Metadata = {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: yoast?.og_locale || "en_NZ",
      type: yoast?.og_type === "article" ? "article" : "website",
      images: ogImages,
      ...(yoast?.og_type === "article" && {
        publishedTime: yoast.article_published_time,
        modifiedTime: yoast.article_modified_time,
      }),
    },
    twitter: {
      card: yoast?.twitter_card === "summary" ? "summary" : "summary_large_image",
      title: yoast?.twitter_title ? decodeEntities(yoast.twitter_title) : ogTitle,
      description: yoast?.twitter_description || ogDescription,
      images: yoast?.twitter_image ? [yoast.twitter_image] : ogImages?.map((image) => image.url),
    },
  };

  if (yoast?.robots) {
    metadata.robots = {
      index: yoast.robots.index !== "noindex",
      follow: yoast.robots.follow !== "nofollow",
    };
  }

  return metadata;
}

/**
 * Yoast SEO data for a WordPress page with the given slug. Static Next.js
 * routes (About, Services, ...) read their SEO from a matching WordPress
 * page, so the SEO team can manage them in Yoast. Returns null when no
 * such page exists yet.
 */
export async function getPageYoast(slug: string): Promise<YoastHead | null> {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=yoast_head_json`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.[0]?.yoast_head_json ?? null;
  } catch {
    return null;
  }
}

export async function pageMetadata(slug: string, path: string, fallback: Fallback) {
  return buildMetadata(path, await getPageYoast(slug), fallback);
}

// Metadata for old hard-coded pages that aren't linked anywhere: keep them out of search results.
export function hiddenPageMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: false } };
}
