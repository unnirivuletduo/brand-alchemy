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

  // Extract Industry taxonomy terms
let industryCategories: string[] = [];

if (post._embedded?.["wp:term"]) {
  const allTerms = post._embedded["wp:term"].flat();

  industryCategories = allTerms
    .filter((term: any) => term.taxonomy === "industry_category")
    .map((term: any) => term.name);
}


  // Main featured image (still using _embed)
  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // ✅ Helper to fetch media by ID
  async function getImageUrl(id: number | null) {
    if (!id) return null;

    const res = await fetch(
      `https://api.brandalchemy.co.nz/wp-json/wp/v2/media/${id}`
    );
    const data = await res.json();

    return data?.source_url ?? null;
  }

  // ✅ Resolve ACF our_role image properly
  const roleImageId = post?.acf?.our_role?.image ?? null;
  const roleImageUrl = await getImageUrl(roleImageId);
  const brandImageId = post?.acf?.brand_identity?.image ?? null;
  const brandImageUrl = await getImageUrl(brandImageId);
  const printData = post?.acf?.["print_&_packaging_collateral"];
  const printImage1 = await getImageUrl(printData?.sub_image_1 ?? null);
  const printImage2 = await getImageUrl(printData?.sub_image_2 ?? null);
  const printImage3 = await getImageUrl(printData?.sub_image_3 ?? null);
  const digitalData = post?.acf?.digital_experience;
  const digitalImageUrl = await getImageUrl(
    digitalData?.image ?? null
  );
  // Product Mockups
  const mockupData = post?.acf?.product_mockups;

  const mockupImageUrl = await getImageUrl(
    mockupData?.image ?? null
  );

  // The Result section
const resultData = post?.acf?.the_result;

const resultImages = [
  await getImageUrl(resultData?.image_1 ?? null),
  await getImageUrl(resultData?.image_2 ?? null),
  await getImageUrl(resultData?.image_3 ?? null),
  await getImageUrl(resultData?.image_4 ?? null),
].filter(Boolean);









  return {
    title: post?.title?.rendered || null,
    content: post?.content?.rendered || null,
    image: featuredImage,
    categories: industryCategories,

    // ACF
    enableOverview: post.acf?.enable_overview ?? false,
    liveSite: post.acf?.live_site_url ?? null,
    overview: post.acf?.overview ?? null,
    enableOurRole: post.acf?.enable_our_role ?? false,
    ourRole: {
      title: post.acf?.our_role?.title ?? "",
      content: post.acf?.our_role?.content ?? "",
      image: roleImageUrl, // ✅ now using ACF image
    },
  enableBrandIdentity: post.acf?.enable_brand_identity ?? false,
  brandIdentity: {
    title: post.acf?.brand_identity?.title ?? "",
    content: post.acf?.brand_identity?.content ?? "",
    image: brandImageUrl,
    subTitle: post.acf?.brand_identity?.sub_title ?? "",
    subContent: post.acf?.brand_identity?.sub_content ?? "",
    subTitle2: post.acf?.brand_identity?.sub_title_2 ?? "",
    subContent2: post.acf?.brand_identity?.sub_content_2 ?? "",
  },
  enablePrintPackaging:
  post.acf?.enable_print_and_packaging_collateral ?? false,

  printPackaging: {
    title: printData?.title ?? "",
    content: printData?.content ?? "",

    items: [
      {
        image: printImage1,
        title: printData?.sub_title_1 ?? "",
        content: printData?.sub_content_1 ?? "",
      },
      {
        image: printImage2,
        title: printData?.sub_title_2 ?? "",
        content: printData?.sub_content_2 ?? "",
      },
      {
        image: printImage3,
        title: printData?.sub_title_3 ?? "",
        content: printData?.sub_content_3 ?? "",
      },
    ],
  },
  enableDigitalExperience:
  post.acf?.enable_digital_experience ?? false,
  digitalExperience: {
    title: digitalData?.title ?? "",
    content: digitalData?.content ?? "",
    image: digitalImageUrl,

    subTitle: digitalData?.sub_title ?? "",
    subContent: digitalData?.sub_content ?? "",

    subTitle2: digitalData?.sub_title_2 ?? "",
    subContent2: digitalData?.sub_content_2 ?? "",
  },
  enableProductMockups:
    post.acf?.enable_product_mockups ?? false,

  productMockups: {
    title: mockupData?.title ?? "",
    content: mockupData?.content ?? "",
    image: mockupImageUrl,

    subTitle: mockupData?.sub_title ?? "",
    subContent: mockupData?.sub_content ?? "",

    subTitle2: mockupData?.sub_title_2 ?? "",
    subContent2: mockupData?.sub_content_2 ?? "",

    subTitle3: mockupData?.sub_title_3 ?? "",
    subContent3: mockupData?.sub_content_3 ?? "",
  },
  enableResult: post.acf?.enable_the_result ?? false,

  result: {
    title: resultData?.title ?? "",
    content: resultData?.content ?? "",
    images: resultImages,

    websiteLink: {
      title: resultData?.website_link?.title ?? "View Live Website",
      url: resultData?.website_link?.url ?? "#",
      target: resultData?.website_link?.target ?? "_self",
    },
  },






  };
}
