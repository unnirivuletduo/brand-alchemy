import Header from "../../components/Header";
import IndustriesBanner from "../../components/IndustriesBanner";
import IndustryOverviewSection from "../../components/IndustryOverviewSection";
import OurRoleSection from "../../components/OurRoleSection";
import Footer from "../../components/Footer";
import FloatingButton from "../../components/FloatingButton";
import { getIndustryPost } from "@/lib/getIndustryPost";
import { notFound } from "next/navigation";
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
      <Header />

      <IndustriesBanner
        title={post.title}
        image={post.image}
      />

      {post.enableOverview && (
  <IndustryOverviewSection
    overview={post.overview}
    liveSite={post.liveSite}
  />
)}
<OurRoleSection
  title={post.ourRole.title}
  content={post.ourRole.content}
  image={post.ourRole.image}
/>

    <FloatingButton />
    <Footer />
      </>
    );
}