
'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustriesBanner from '../components/IndustriesBanner';
import IndustriesContent from '../components/IndustriesContent';
import ExpandingVideoSection from '../components/ExpandingVideoSection';
import DescriptionSection from '../components/DescriptionSection';
import ObjectiveSection from '../components/ObjectiveSection';
import ChallengesSection from '../components/ChallengesSection';
import ProductFinderFeature from '../components/ProductFinderFeature';

export default function IndustryPage() {
  return (
    <>
      <Header />
      <IndustriesBanner />
      <IndustriesContent />
      <ExpandingVideoSection />
      <DescriptionSection />
      <ObjectiveSection />
      <ChallengesSection />
      <ProductFinderFeature />
      <Footer />
    </>
  );
}