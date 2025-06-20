'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustryHoverSection from '../components/IndustryHoverSection';
import IndustryBanner from '../components/IndustryBanner';
import OurStory from '../components/OurStory';

export default function IndustryPage() {
  return (
    <>
      <Header />
      <IndustryBanner />
      <IndustryHoverSection />
      <OurStory />
      <Footer />
    </>
  );
}
