import { PageSchema } from "../components/JsonLd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IndustryHoverSection from "../components/IndustryHoverSection";
import IndustryBanner from "../components/IndustryBanner";
import OurStory from "../components/OurStory";
import { getIndustries } from "@/lib/getIndustries";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return pageMetadata("industry", "/industry", {
    title: "Industries",
    description:
      "See Brand Alchemy's branding, design and web work across the industries we serve.",
  });
}

export default async function IndustryPage() {
  const industries = await getIndustries();

  return (
    <>
      <PageSchema slug="industry" path="/industry" />
      <Header />
      <IndustryBanner />
      <IndustryHoverSection industries={industries} />
      <OurStory />
      <Footer />
    </>
  );
}
