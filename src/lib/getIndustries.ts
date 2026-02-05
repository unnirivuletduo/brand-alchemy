export type Industry = {
  id: number;   // ⭐ add
  name: string;
  image: string;
  description: string;
};

async function getImageUrl(id: number) {
  const res = await fetch(
    `https://api.brandalchemy.co.nz/wp-json/wp/v2/media/${id}`
  );
  const data = await res.json();
  return data.source_url;
}

export async function getIndustries(): Promise<Industry[]> {
  const res = await fetch(
    "https://api.brandalchemy.co.nz/wp-json/wp/v2/industry_category",
    { cache: "no-store" }
  );

  const terms = await res.json();

  const industries = await Promise.all(
    terms.map(async (term: any) => {
      const imageUrl = await getImageUrl(term.acf.featured_image);

      return {
          id: term.id,            // ⭐ ADD THIS
          name: term.name,
          description: term.description,
          image: imageUrl,
        };

    })
  );

  return industries;
}
