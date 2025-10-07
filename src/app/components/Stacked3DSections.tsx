'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Fa from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 1,
    title: 'Branding',
    video: '/videos/branding-new.mp4',
    description: 'We craft logos, visual identities, and full brand experiences that resonate and build lasting recognition.',
    items: [
      { icon: 'FaPenNib', label: 'Logo Design' },
      { icon: 'FaPlay', label: 'Logo Animation' },
      { icon: 'FaDraftingCompass', label: 'Brand Design' },
      { icon: 'FaLightbulb', label: 'Brand Strategy' },
      { icon: 'FaRocket', label: 'Start-up Packages' },
      { icon: 'FaPencilRuler', label: 'Graphic Design' },
      { icon: 'FaSyncAlt', label: 'Rebranding & Refresh' },
      { icon: 'FaBookOpen', label: 'Brand Guidelines' },
      { icon: 'FaBoxes', label: 'Brand Collateral & Assets' },
      { icon: 'FaSearch', label: 'Brand Audits & Assessments' },
      { icon: 'FaCube', label: '2D / 3D Visualisation' },
    ],
  },
  {
    id: 2,
    title: 'Marketing',
    video: '/videos/marketing.mp4',
    description: 'Smart marketing strategies, content, and campaigns that align with your business goals and drive results.',
    items: [
      { icon: 'FaChartLine', label: 'Marketing Strategy' },
      { icon: 'FaImages', label: 'Content & Creatives' },
      { icon: 'FaGlobe', label: 'Digital Marketing Strategy' },
      { icon: 'FaUsers', label: 'Social Media Marketing' },
      { icon: 'FaShoppingCart', label: 'E-commerce Marketing' },
      { icon: 'FaEnvelope', label: 'Email Marketing' },
      { icon: 'FaBullhorn', label: 'Paid Advertising' },
      { icon: 'FaLink', label: 'Off-page SEO' },
      { icon: 'FaProjectDiagram', label: 'CRM Setup & Integration' },
    ],
  },
  {
    id: 3,
    title: 'Ads',
    video: '/videos/ads.mp4',
    description: 'High-performance ad campaigns and creatives across all major platforms to reach and convert your audience.',
    items: [
      { icon: 'FaFacebook', label: 'Facebook Ads' },
      { icon: 'FaInstagram', label: 'Instagram Ads' },
      { icon: 'FaTiktok', label: 'TikTok Ads' },
      { icon: 'FaLinkedin', label: 'LinkedIn Ads' },
      { icon: 'FaGoogle', label: 'Google Ads' },
      { icon: 'FaYoutube', label: 'YouTube Ads' },
      { icon: 'FaPenFancy', label: 'Ad Creatives & Copywriting' },
    ],
  },
  {
    id: 4,
    title: 'Website',
    video: '/videos/ecommerce.mp4',
    description: 'Custom websites, web apps, and software solutions that are functional, beautiful, and conversion-optimized.',
    items: [
      { icon: 'FaLaptopCode', label: 'Custom Website Designs' },
      { icon: 'FaUserCircle', label: 'UI/UX Design' },
      { icon: 'FaRocket', label: 'Website Performance & SEO' },
      { icon: 'FaShopify', label: 'Shopify Store' },
      { icon: 'FaShoppingBag', label: 'E-commerce Development' },
      { icon: 'FaTools', label: 'Website Maintenance' },
      { icon: 'FaServer', label: 'Hosting & Domain Setup' },
      { icon: 'FaCode', label: 'Software Development' },
      { icon: 'FaCogs', label: 'CRM/ERP Development' },
      { icon: 'FaDesktop', label: 'Web Applications Development' },
      { icon: 'FaMobileAlt', label: 'Mobile App Development' },
      { icon: 'FaPlug', label: 'API Development & Integration' },
      { icon: 'FaLifeRing', label: 'Ongoing Support & Maintenance' },
    ],
  },
  {
    id: 5,
    title: 'Print',
    video: '/videos/printing.mp4',
    description: 'Professional print collateral that supports your brand at every touchpoint, from business cards to banners.',
    items: [
      { icon: 'FaAddressCard', label: 'Business Cards' },
      { icon: 'FaBook', label: 'Brochures' },
      { icon: 'FaBookOpen', label: 'Booklets' },
      { icon: 'FaBoxOpen', label: 'Packaging' },
      { icon: 'FaFileAlt', label: 'Flyers & Pamphlets' },
      { icon: 'FaFile', label: 'Posters' },
      { icon: 'FaClipboard', label: 'Menus' },
      { icon: 'FaSign', label: 'Signage' },
      { icon: 'FaFlag', label: 'Banners' },
      { icon: 'FaBuilding', label: 'Trade Show Materials' },
    ],
  },
  {
    id: 6,
    title: 'Video Commercial',
    video: '/videos/videocommercial.mp4',
    description: 'Engaging video content that communicates your brand story and drives attention across multiple channels.',
    items: [
      { icon: 'FaFilm', label: 'Brand Story Videos' },
      { icon: 'FaPlayCircle', label: 'Product Explainers' },
      { icon: 'FaVideo', label: 'Social Media Video Ads' },
      { icon: 'FaMagic', label: 'Animation & Motion Graphics' },
      { icon: 'FaCommentDots', label: 'Testimonial Videos' },
      { icon: 'FaYoutube', label: 'YouTube Ads' },
      { icon: 'FaMicrophone', label: 'Voiceover & Scriptwriting' },
    ],
  },
  {
  id: 7,
  title: 'Software Development',
  video: '/videos/webdevelopment.mp4',
  description: 'We craft scalable, secure, and intelligent software solutions that power your ideas. From dynamic websites to enterprise-grade systems, our code is clean, efficient, and future-proof — built to adapt and grow with your business.',
  items: [
    { icon: 'FaCode', label: 'Creative Code' },
    { icon: 'FaMagic', label: 'Digital Alchemy' },
    { icon: 'FaRocket', label: 'Launch Ready' },
    { icon: 'FaPuzzlePiece', label: 'Modular Design' },
    { icon: 'FaBolt', label: 'Performance' },
    { icon: 'FaCogs', label: 'Automation' },
    { icon: 'FaEye', label: 'Visual Strategy' }, 
  ],
}
];


export default function Stacked3DSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stack-panel').forEach((panel) => {
        const element = panel as HTMLElement;
        const title = element.querySelector('h2');
        const paragraph = element.querySelector('p');
        const items = element.querySelectorAll('.list-items');
        const video = element.querySelector('video');

        if (!element || !video) return;

        gsap.fromTo(
          video,
          { scale: 1.5 },
          {
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          }
        );

        gsap.from([title, paragraph, ...Array.from(items)], {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        });

        ScrollTrigger.create({
          trigger: element,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {sections.map((section) => (
        <section
          key={section.id}
          className="stack-panel h-screen w-full relative overflow-hidden flex items-center justify-center text-white service-stack"
          style={{ perspective: '1000px' }}
        >
          <video
            className="absolute inset-0 object-cover w-full h-full -z-10"
            src={section.video}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/30 -z-10" />

          <div
            className="z-10 text-center px-6 max-w-4xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-2">
              {section.title}
            </h2>
            <p className="text-sm md:text-lg mb-2">{section.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {section.items.map((item, idx) => {
                const Icon = Fa[item.icon as keyof typeof Fa];
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 border border-white rounded-4xl px-5 py-1 list-items"
                  >
                    {Icon && <Icon className="text-xl" />}
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
