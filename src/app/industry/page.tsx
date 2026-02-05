import Header from "../components/Header";
import Footer from "../components/Footer";
import IndustryHoverSection from "../components/IndustryHoverSection";
import IndustryBanner from "../components/IndustryBanner";
import OurStory from "../components/OurStory";
import { getIndustries } from "@/lib/getIndustries";

export default async function IndustryPage() {
  const industries = await getIndustries();

  return (
    <>
      <Header />
      <IndustryBanner />
      <IndustryHoverSection industries={industries} />
      <OurStory />
      <Footer />
    </>
  );
}
