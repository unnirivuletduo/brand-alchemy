export async function getIndustryPost(slug: string) {
  const res = await fetch(
    `https://api.brandalchemy.co.nz/wp-json/wp/v2/industry?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();

  if (!data || data.length === 0) {
    return null;
  }

  const post = data[0];

  // Based on your image, this is the correct path to the image URL
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return {
    title: post?.title?.rendered || null, // Extracting the string 'Glowora'
    content: post?.content?.rendered || null,
    image,

    // ✅ ACF Overview
    overview: post.acf?.overview ?? null,
    enableOverview: post.acf?.enable_overview ?? false,
    liveSite: post.acf?.live_site_url ?? null,

     ourRole: {
      title: post.acf?.our_role?.title ?? "",
      content: post.acf?.our_role?.content ?? "",
      image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null, 
        // ⚠ we will improve this below
    },

    
  };
}