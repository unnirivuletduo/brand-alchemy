'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BandingBanner from '../../components/BrandingBanner';
import { FaPalette, FaFilm, FaPenNib, FaLightbulb, FaRocket, FaShapes, FaSyncAlt, FaBookOpen, FaFolderOpen, FaSearch, FaCubes } from 'react-icons/fa';

const services = [
  {
    title: 'Logos',
    description:
      'Your logo is the face of your brand. At Alchemy, we believe in designing logos that go beyond aesthetics — they become a powerful symbol of your business values and identity. Our design process involves deep research, creative iterations, and feedback cycles to ensure your logo stands out across all mediums, from websites and packaging to social media and signage.',
    image: '/images/service.jpeg',
    icon: <FaPalette className="text-3xl text-black" />,
  },
  {
    title: 'Logo Animation',
    description:
      'Motion adds dimension to your brand. We create professional animated versions of your logo that enhance your brand storytelling across digital platforms. Whether for intros, transitions, or social media content, animated logos help you engage audiences and communicate your personality more dynamically.',
    image: '/images/service.jpeg',
    icon: <FaFilm className="text-3xl text-black" />,
  },
  {
    title: 'Brand Design',
    description:
      'From color palettes and typography to visual patterns and imagery, we create cohesive design systems that define your brand’s aesthetic.',
    image: '/images/service.jpeg',
    icon: <FaPenNib className="text-3xl text-black" />,
  },
  {
    title: 'Brand Strategy',
    description:
      'We help define your brand’s purpose, positioning, tone, and messaging — building a strategy that connects deeply with your audience.',
    image: '/images/service.jpeg',
    icon: <FaLightbulb className="text-3xl text-black" />,
  },
  {
    title: 'Start-up Packages',
    description:
      'Launching a new venture? Our tailored branding packages give startups everything they need — from logos and visuals to key brand assets.',
    image: '/images/service.jpeg',
    icon: <FaRocket className="text-3xl text-black" />,
  },
  {
    title: 'Graphic Design',
    description:
      'Visual storytelling matters. We create compelling graphics for digital and print — ensuring your brand is consistently striking everywhere it appears.',
    image: '/images/service.jpeg',
    icon: <FaShapes className="text-3xl text-black" />,
  },
  {
    title: 'Rebranding & Brand Refresh',
    description:
      'If your brand feels outdated or misaligned, we guide you through rebranding or a subtle refresh to keep you relevant and competitive.',
    image: '/images/service.jpeg',
    icon: <FaSyncAlt className="text-3xl text-black" />,
  },
  {
    title: 'Brand Guidelines',
    description:
      'We build comprehensive brand books — documenting logo usage, colors, fonts, and tone — to ensure consistency across all your touchpoints.',
    image: '/images/service.jpeg',
    icon: <FaBookOpen className="text-3xl text-black" />,
  },
  {
    title: 'Brand Collateral & Assets',
    description:
      'From business cards and brochures to pitch decks and email signatures, we design professional, on-brand materials that support your goals.',
    image: '/images/service.jpeg',
    icon: <FaFolderOpen className="text-3xl text-black" />,
  },
  {
    title: 'Brand Audits & Assessments',
    description:
      'We analyze how your brand is perceived and pinpoint opportunities for growth, refinement, or repositioning.',
    image: '/images/service.jpeg',
    icon: <FaSearch className="text-3xl text-black" />,
  },
  {
    title: '2D / 3D Visualisation',
    description:
      'We transform concepts into captivating visuals. Whether it’s mockups, packaging, or spatial designs — we make your brand tangible.',
    image: '/images/service.jpeg',
    icon: <FaCubes className="text-3xl text-black" />,
  },
];

const faqs = [
  {
    question: 'What is included in your branding service?',
    answer:
      'Our branding service includes logo design, brand strategy, brand guidelines, collateral design, and more depending on your package.',
  },
  {
    question: 'Do you work with startups?',
    answer:
      'Absolutely! We offer special start-up packages that help you build a brand from the ground up.',
  },
  {
    question: 'How long does a branding project take?',
    answer:
      'Typically, a full branding project takes 3–6 weeks depending on complexity and your feedback cycle.',
  },
  {
    question: 'Can I get only a logo?',
    answer:
      'Yes, we offer standalone logo design services, but we recommend including it as part of a larger branding effort for better impact.',
  },
];

export default function BrandingPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <Header />
      <BandingBanner />
   
<section className="px-6 lg:px-20 pt-25 pb-10 bg-white">
  {/* Title */}


  {/* Image + Paragraph Row */}
  <motion.div
    className="flex flex-col lg:flex-row items-center gap-10 mt-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Left Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="/images/branding/image2.jpg"
        alt="Branding visual"
        className="rounded-xl object-cover w-full h-[400px]"
      />
    </div>

    {/* Right Text */}
    <div className="w-full lg:w-1/2">
      <motion.h2
    className="text-2xl lg:text-3xl font-light mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Build a brand that speaks before you do.
  </motion.h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-5">
        At Alchemy, our branding services are crafted to transform your vision into a distinct and memorable identity. From logo creation and brand design to comprehensive brand strategies and guidelines, we ensure every element speaks your story with clarity and impact.</p>

       <p className="text-lg text-gray-700 leading-relaxed">We dive deep into understanding your business goals, audience, and market positioning to create branding that feels authentic and purposeful. Whether you're launching a new startup or refreshing an existing brand, our creative team works closely with you to build a cohesive identity that resonates across platforms. Every detail—from visual style to tone of voice—is carefully considered to build recognition, trust, and emotional connection.
      </p>
    </div>
  </motion.div>
</section>


  <section className="px-6 lg:px-20 py-20 bg-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="border-b pb-6 mb-6 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
        >
          <div className="flex flex-col items-start">
            {service.icon}
            <h3 className="text-2xl font-light mb-4 mt-4">{service.title}</h3>
            <p className="text-base mb-4">{service.description}</p>
           <Link
        href="#"
        className="inline-flex items-center gap-3 arrow-btn-black mt-5"
      >
        Explore {service.title}{' '}
        <img src="/arrow_right_white.svg" alt="arrow" />
      </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>


     <section className="px-6 lg:px-20 pb-[100px] bg-white">
  <h2 className="text-3xl lg:text-4xl font-light text-center mb-10">Our Process</h2>
  <div className="flex flex-col lg:flex-row items-center gap-12">
    {/* Left: Steps */}
    <div className="w-full lg:w-1/2 space-y-8">
      {[
        'Discovery & Research – We begin with understanding your business, goals, competitors, and audience.',
        'Strategy Development – We define your brand positioning, values, and messaging.',
        'Visual Design – This includes crafting your logo, visual identity, and core brand elements.',
        'Asset Creation – We develop branded materials, guidelines, and supporting assets.',
        'Launch & Support – We help roll out your brand with clarity and provide ongoing guidance as needed.',
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="w-10 min-w-[2.5rem] h-10 flex items-center justify-center rounded-full bg-black text-white text-lg font-medium">
            {index + 1}
          </div>
          <p className="text-base lg:text-lg text-gray-800">{step}</p>
        </motion.div>
      ))}
    </div>

    {/* Right: Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/2"
    >
    <video
    src="/videos/designing.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="rounded-xl object-cover w-full h-[500]"
    />
    </motion.div>
  </div>
</section>








      {/* FAQ Section */}
       <section className="px-6 lg:px-20 pb-[100px]">
        <h2 className="text-3xl lg:text-4xl font-light text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white py-4 border-b cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-light">{faq.question}</h3>
                <span className="text-2xl transform transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="text-gray-700 mt-4 text-base"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-20 pb-25">
  <motion.h2
    className="text-3xl lg:text-4xl font-light text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Related Case Studies
  </motion.h2>

  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: 'Glowora – Beauty Branding',
        description: 'We crafted a complete brand identity for Glowora, including logo, packaging design, and a Shopify website.',
        image: '/images/glowora/image1.jpeg',
      },
      {
        title: 'Luminex – Lighting Website',
        description: 'We designed a clean and modern UI for Luminex’s lighting product website with custom illustrations and smooth UX.',
        image: '/images/service.jpeg',
      },
      {
        title: 'NatureNook – Eco Design',
        description: 'NatureNook approached us for brand design, eco-friendly packaging, and a product showcase landing page.',
        image: '/images/service.jpeg',
      },
    ].map((caseStudy, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-xl shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
          <p className="text-gray-700 mb-4">{caseStudy.description}</p>
         
          <Link
        href="#"
        className="inline-flex items-center gap-3 arrow-btn-black"
      >
        View Case Study{' '}
        <img src="/arrow_right_white.svg" alt="arrow" />
      </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      <Footer />
    </>
  );
}
