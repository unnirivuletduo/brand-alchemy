# Yoast SEO setup (headless WordPress)

The Next.js site reads SEO data from Yoast through the WordPress REST API
(`yoast_head_json`), so no GraphQL plugins are needed. Until the steps below
are done, every page uses the fallback titles and descriptions written in the code.

## WordPress (api.brandalchemy.co.nz)

1. **Install and activate Yoast SEO.** Check it's working:
   `https://api.brandalchemy.co.nz/wp-json/wp/v2/posts?_fields=slug,yoast_head_json`
   should return a `yoast_head_json` object.
2. **Permalinks** (Settings > Permalinks): set a custom structure of `/blog/%postname%/`
   so blog post URLs match the Next.js `/blog/<slug>` route. Make sure the `industry`
   post type keeps the URL `/industry/<slug>/` (in CPT UI, set "With Front" to false).
3. **Create a page for each static route** so it can be edited in Yoast. The slugs must match:
   `home`, `about`, `services`, `branding`, `contact`, `careers`, `blog`, `industry`.
   Set `home` as the homepage (Settings > Reading > A static page).
   The page content isn't shown on the site. Only the Yoast fields are used.
4. **Social images:** set a default image in Yoast > Settings > Site basics, and set an
   image per post or page in the Yoast "Social" tab.
5. **Keep the API domain out of search results:** search engines should only index
   brandalchemy.co.nz. A redirect or noindex rule on the api subdomain is the safest option.
   Don't tick "Discourage search engines" in WordPress, because it can stop Yoast's sitemaps and robots settings from working.

## What the Next.js site does

| Doc requirement | Where it's handled |
| --- | --- |
| Title, meta description, robots | `generateMetadata` → `buildMetadata()` in `src/lib/seo.ts` |
| Open Graph and Twitter cards | `src/lib/seo.ts`, with site defaults in `src/app/layout.tsx` |
| Canonical on the public domain | Built from the Next.js route, so it always uses `brandalchemy.co.nz` |
| Yoast JSON-LD schema | `src/app/components/JsonLd.tsx` on blog posts and industry case studies |
| XML sitemaps | `/sitemap_index.xml` and `/*-sitemap.xml` are rewritten in `next.config.ts` to `src/app/api/sitemap/[file]/route.ts`, which changes WordPress URLs to the public domain |
| robots.txt | `src/app/robots.ts` |
| Cache revalidation | WordPress data is re-fetched every 60 seconds, so Yoast edits show up within a minute without a redeploy |

Set `NEXT_PUBLIC_SITE_URL` if the public domain ever changes (it defaults to `https://brandalchemy.co.nz`).
