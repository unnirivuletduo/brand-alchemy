# Yoast SEO setup (headless WordPress)

The Next.js site reads SEO data from Yoast through the WordPress REST API
(`yoast_head_json`), so no GraphQL plugins are needed. Anything Yoast leaves
empty falls back to the titles and descriptions written in the code.

## Where to check SEO

Always check SEO tags, schema and sitemaps on **brandalchemy.co.nz**, not
api.brandalchemy.co.nz. WordPress itself will always show `api.` URLs on its own
domain. The Next.js site changes them to the public domain:

- Sitemap: `https://brandalchemy.co.nz/sitemap_index.xml`
- robots.txt: `https://brandalchemy.co.nz/robots.txt`

## WordPress (api.brandalchemy.co.nz)

1. **Yoast SEO is installed.** Check it's working:
   `https://api.brandalchemy.co.nz/wp-json/wp/v2/posts?_fields=slug,yoast_head_json`
   should return a `yoast_head_json` object.
2. **Edit SEO for static routes in their WordPress pages.** These slugs map to these routes:
   `home` → `/`, `about`, `services`, `branding` → `/services/branding`, `contact`,
   `careers`, `blog`, `industry`. The page content isn't shown on the site. Only the Yoast fields are used.
   Set `home` as the homepage (Settings > Reading > A static page).
3. **Site title** (Settings > General): set it to "Brand Alchemy". Yoast's default
   titles end with it, and it's currently "brandalchemy.co.nz". Set the site language
   to English (New Zealand) too.
4. **Author display name** (Users > Profile > "Display name publicly as"): set a real name.
   It's currently an email address, and Yoast publishes it in the blog post schema.
5. **Social images:** set a default image in Yoast > Settings > Site basics, and set an
   image per post or page in the Yoast "Social" tab.
6. **Delete the default "Hello world!" post.** It's in the blog sitemap.
7. **Keep the API domain out of search results.** Only brandalchemy.co.nz should be indexed.
   Add this to the theme's `functions.php` (or a code snippets plugin):

   ```php
   // Headless site: keep api.brandalchemy.co.nz out of search results.
   add_action('send_headers', function () {
       if (!is_admin()) {
           header('X-Robots-Tag: noindex', true);
       }
   });
   ```

   Don't tick "Discourage search engines" in WordPress, because it can stop Yoast's sitemaps and robots settings from working.

Blog post URLs no longer depend on the WordPress permalink setting. The sitemap
proxy maps each post to `/blog/<slug>`.

## What the Next.js site does

| Doc requirement | Where it's handled |
| --- | --- |
| Title, meta description, robots | `generateMetadata` → `buildMetadata()` in `src/lib/seo.ts` |
| Open Graph and Twitter cards | `src/lib/seo.ts`, with site defaults in `src/app/layout.tsx` |
| Canonical on the public domain | Built from the Next.js route, so it always uses `brandalchemy.co.nz` |
| Yoast JSON-LD schema | `src/app/components/JsonLd.tsx` on every page, with URLs changed to the public routes |
| XML sitemaps | `next.config.ts` rewrites `/sitemap_index.xml` and `/*-sitemap.xml` to `src/app/api/sitemap/[file]/route.ts`. It keeps the post, page and industry sitemaps and maps each URL to its Next.js route. Category, author and service sitemaps are dropped, because the site has no pages for them. |
| robots.txt | `src/app/robots.ts` |
| Cache revalidation | WordPress data is re-fetched every 60 seconds, so Yoast edits show up within a minute without a redeploy |

Set `NEXT_PUBLIC_SITE_URL` if the public domain ever changes (it defaults to `https://brandalchemy.co.nz`).
