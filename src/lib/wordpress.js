import { PHASE_PRODUCTION_BUILD } from 'next/constants';

export async function getPosts() {
  try {
    const res = await fetch(
      'https://api.brandalchemy.co.nz/wp-json/wp/v2/posts?_embed',
      { next: { revalidate: 60 }, signal: AbortSignal.timeout(10000) }
    );

    if (!res.ok) throw new Error(`Failed to fetch posts (HTTP ${res.status})`);

    return await res.json();
  } catch (error) {
    // A slow or unavailable WordPress API must not fail the whole deploy.
    // During the build, render the blog with no posts; the page revalidates
    // every 60 seconds and picks the posts up once the API responds.
    // Outside the build, rethrow so Next.js keeps serving the last good page.
    if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
      console.warn(`[wordpress] ${error.message} – building /blog without posts`);
      return [];
    }
    throw error;
  }
}

export async function getPostBySlug(slug) {
  const cleanSlug = Array.isArray(slug) ? slug[0] : slug;

  const res = await fetch(
    `https://api.brandalchemy.co.nz/wp-json/wp/v2/posts?slug=${cleanSlug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error('Failed to fetch post');

  const data = await res.json();
  return data.length ? data[0] : null;
}

