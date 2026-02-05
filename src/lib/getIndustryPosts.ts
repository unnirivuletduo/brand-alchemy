export async function getIndustryPosts(categoryId: number) {
  const res = await fetch(
    `https://api.brandalchemy.co.nz/wp-json/wp/v2/industry?_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const filtered = data.filter((post: any) =>
    post.industry_category?.includes(categoryId)
  );

  return filtered.map((post: any) => ({
    title: post.title.rendered,
    slug: post.slug,
    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
  }));
}
