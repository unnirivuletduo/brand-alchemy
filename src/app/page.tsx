import { PageSchema } from "./components/JsonLd";

import Header from "./components/Header";
import Banner from "./components/Banner"; 
import InteractiveHome from "./components/InteractiveHome";
import Stacked3DSections from "./components/Stacked3DSections";
// import CaseStudiesScroll from "./components/CasestudiesScroll";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";
import { pageMetadata } from "@/lib/seo";

// The WordPress page set as the front page in Settings > Reading should use the slug "home".
export function generateMetadata() {
  return pageMetadata("home", "/", {
    title: "Brand Alchemy - Creative. Design. Brand Agency New Zealand",
    description:
      "Brand Alchemy is a creative design and branding agency in New Zealand, offering branding, web development, digital marketing and print.",
  });
}

export default function Home() {
  return (
   <>
      <PageSchema slug="home" path="/" />
<Header />
<Banner />
<InteractiveHome />
<Stacked3DSections />
{/*<CaseStudiesScroll />*/}
<OurStory />
<Footer />
   </>
  );
}
