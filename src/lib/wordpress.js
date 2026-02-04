export async function getPosts() {
  const res = await fetch(
    'https://api.brandalchemy.co.nz/wp-json/wp/v2/posts?_embed',
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error('Failed to fetch posts');

  return res.json();
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

