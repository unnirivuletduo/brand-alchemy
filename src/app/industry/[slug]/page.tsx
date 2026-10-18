import Header from "../../components/Header";
import IndustriesBanner from "../../components/IndustriesBanner";
import IndustryOverviewSection from "../../components/IndustryOverviewSection";
import OurRoleSection from "../../components/OurRoleSection";
import BrandIdentitySection from "../../components/BrandIdentitySection";
import PrintPackagingSection from "../../components/PrintPackagingSection";
import DigitalExperienceSection from "../../components/DigitalExperienceSection";
import ProductMockupsSection from "../../components/ProductMockupsSection";
import ResultSection from "../../components/ResultSection";
import Footer from "../../components/Footer";
import FloatingButton from "../../components/FloatingButton";
import { getIndustryPost } from "@/lib/getIndustryPost";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { buildMetadata, stripHtml, truncate } from "@/lib/seo";
import type { Metadata } from "next";
import { motion, Variants } from 'framer-motion';


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getIndustryPost(slug);

  if (!post) {
    return { title: "Not found", robots: { index: false } };
  }

  return buildMetadata(`/industry/${post.slug}`, post.yoast, {
    title: stripHtml(post.title ?? ""),
    description: truncate(stripHtml(post.excerpt ?? post.overview?.content ?? "")),
    image: post.image,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getIndustryPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd schema={post.yoast?.schema} wpLink={post.link} path={`/industry/${post.slug}`} />
      <Header />

      <IndustriesBanner
        title={post.title}
        image={post.image}
        categories={post.categories}
      />

      {post.enableOverview && (
  <IndustryOverviewSection
    overview={post.overview}
    liveSite={post.liveSite}
  />
)}
      {post.enableOurRole && (
<OurRoleSection
  title={post.ourRole.title}
  content={post.ourRole.content}
  image={post.ourRole.image}
/>
)}
      {post.enableBrandIdentity && (
  <BrandIdentitySection
    data={post.brandIdentity}
  />
)}
{post.enablePrintPackaging && (
  <PrintPackagingSection data={post.printPackaging} />
)}
{post.enableDigitalExperience && (
  <DigitalExperienceSection
    data={post.digitalExperience}
  />
)}
{post.enableProductMockups && (
  <ProductMockupsSection
    data={post.productMockups}
  />
)}
{post.enableResult && (
  <ResultSection data={post.result} />
)}


    <FloatingButton />
    <Footer />
      </>
    );
}