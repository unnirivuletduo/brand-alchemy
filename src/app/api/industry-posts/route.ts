import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const res = await fetch(
    `https://api.brandalchemy.co.nz/wp-json/wp/v2/industry?_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const posts = data
    .filter((post: any) => {
      const terms = post._embedded?.["wp:term"] || [];

      // find the industry_category terms
      const industryTerms = terms.find(
        (t: any) => t[0]?.taxonomy === "industry_category"
      );

      if (!industryTerms) return false;

      return industryTerms.some(
        (term: any) => term.id === Number(id)
      );
    })
    .map((post: any) => ({
      title: post.title.rendered,
      slug: post.slug,
      image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    }));

  return NextResponse.json(posts);
}
