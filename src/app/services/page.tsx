'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesBanner from '../components/ServicesBanner';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OurStory from '../components/OurStory';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const sectionData = [
  {
    title: 'Branding',
    description:
      'At Alchemy, our branding services are crafted to transform your vision into a distinct and memorable identity. From logo creation and brand design to comprehensive brand strategies and guidelines, we ensure every element speaks your story with clarity and impact.',
    services: [
      'Logo Design',
      'Logo Animation',
      'Brand Design',
      'Brand Strategy',
      'Start-up Packages',
      'Graphic Design',
      'Rebranding & Refresh',
      'Brand Guidelines',
      'Brand Collateral & Assets',
      'Brand Audits & Assessments',
      '2D / 3D Visualisation',
    ],
    video: '/videos/branding-new.mp4',
  },
  {
    title: 'Marketing',
    description:
      'Our marketing services are designed to amplify your brand’s visibility and build lasting engagement. We use a data-driven approach combined with creative strategy to connect your message with the right audience across platforms.',
    services: [
      'Marketing Strategy',
      'Content & Creatives',
      'Digital Marketing Strategy',
      'Social Media Marketing',
      'E-commerce Marketing',
      'Email Marketing',
      'Paid Advertising',
      'Off-page SEO',
      'CRM Setup & Integration',
    ],
    video: '/videos/marketing.mp4',
  },
  {
    title: 'Ads',
    description:
      'We create performance-focused advertising campaigns tailored to your brand goals. From social platforms to search engines, our ad solutions ensure visibility, engagement, and conversion.',
    services: [
      'Facebook Ads',
      'Instagram Ads',
      'TikTok Ads',
      'LinkedIn Ads',
      'Google Ads',
      'YouTube Ads',
      'Ad Creatives & Copywriting',
    ],
    video: '/videos/ads.mp4',
  },
  {
    title: 'Website',
    description:
      'Custom websites, web apps, and software solutions that are functional, beautiful, and conversion-optimized.',
    services: [
      'Custom Website Designs',
      'UI/UX Design',
      'Website Performance & SEO',
      'Shopify Store',
      'E-commerce Development',
      'Website Maintenance',
      'Hosting & Domain Setup',
      'Software Development',
      'CRM/ERP Development',
      'Web Applications Development',
      'Mobile App Development',
      'API Development & Integration',
      'Ongoing Support & Maintenance',
    ],
    video: '/videos/ecommerce.mp4',
  },
  {
    title: 'Software Development',
    description:
      'Alchemy offers end-to-end software development services to power your business. Whether you need a mobile app, CRM, or full-scale web application, our team delivers reliable, scalable tech.',
    services: [
      'Creative Code',
      'Digital Alchemy',
      'Launch Ready',
      'Modular Design',
      'Performance',
      'Automation',
      'Visual Strategy',
    ],
    video: '/videos/webdevelopment.mp4',
  },
  {
    title: 'Print',
    description:
      'Print is still powerful — and we bring it to life with compelling, high-quality designs. From business cards to large banners, we make sure every physical touchpoint speaks your brand.',
    services: [
      'Business Cards',
      'Brochures',
      'Booklets',
      'Packaging',
      'Flyers & Pamphlets',
      'Posters',
      'Menus',
      'Signage',
      'Banners',
      'Trade Show Materials',
    ],
    video: '/videos/printing.mp4',
  },
  {
    title: 'Video Commercial',
    description:
      'We produce high-impact video content that brings your brand to life. Whether it’s storytelling, animation, or ads, our videos are crafted to capture attention and inspire action.',
    services: [
      'Brand Story Videos',
      'Product Explainers',
      'Social Media Video Ads',
      'Animation & Motion Graphics',
      'Testimonial Videos',
      'YouTube Ads',
      'Voiceover & Scriptwriting',
    ],
    video: '/videos/videocommercial.mp4',
  },
];



export default function IndustryPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        const video = videoRefs.current[index];
        if (section && video) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            pin: video,
            pinSpacing: false,
            scrub: false,
          });
        }
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <>
      <Header />
      <ServicesBanner />

     {sectionData.map((section, i) => (
  <section
    key={i}
    ref={(el) => { sectionRefs.current[i] = el; }}
    className={`relative w-full flex flex-col video-service-section ${
      i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    } justify-between px-6 lg:px-20 sm:pt-[150px] pt-[50px] bg-white`}
  >
    {/* Text Side */}
    <motion.div
      className="w-full lg:w-1/2 mb-10 lg:mb-0 px-[50px]"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl lg:text-4xl font-light mb-8">{section.title}</h2>
      <p className='text-lg'>{section.description}</p>
      <Link
        href="#"
        className="inline-flex items-center gap-3 arrow-btn-black mt-5"
      >
        Explore {section.title}{' '}
        <Image width="64" height="64" src="/arrow_right_white.svg" alt="arrow" />
      </Link>
      <ul className="space-y-6 text-lg lg:text-2xl mt-7">
        {section.services.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            viewport={{ once: true }}
            className="border-b  border-gray-300 pb-5"
          >
            <Link
  href="#"
  className="flex items-center justify-between group transition-all duration-300"
>
  <span>{item}</span>
  <span
    className="ml-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
  >
    <svg
  className=""
  style={{ display: 'inline-block', verticalAlign: 'middle' }}
  width="32"
  height="32"
  viewBox="0 0 1538 1024"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z" />
  <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z" />
</svg>
  </span>
</Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Video Side */}
    <div
      ref={(el) => { videoRefs.current[i] = el; }}
      className="w-full lg:w-1/2 relative flex rounded-xl overflow-hidden sticky h-fit"
    >
      <video
        src={section.video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[500px] object-cover rounded-xl"
      />
    </div>
  </section>
))}

<div className='pt-[150px]'></div>
<OurStory />
      <Footer />
    </>
  );
}
