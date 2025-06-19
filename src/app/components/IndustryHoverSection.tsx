'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
type Brand = {
  title: string;
  image: string;
};
type Industry = {
  name: string;
  image: string;
  description: string;
  brands?: Brand[];
};

const industries: Industry[] = [
  {
    name: 'Beauty',
    image: '/images/softwaredevelopment.jpg',
    description: 'We empower beauty brands to shine in a highly competitive and ever-evolving industry by creating digital experiences that are as captivating as the products they offer. From stunning e-commerce platforms to seamless booking systems, personalized customer journeys, and bold branding strategies — we combine elegance, innovation, and performance to elevate beauty businesses across every digital touchpoint.',
    brands: [
      { title: 'Glowora', image: '/images/service.jpeg' },
      { title: 'Angana', image: '/images/service.jpeg' },
    ],
  },
  {
    name: 'Healthcare',
    image: '/images/printing.jpg',
    description: 'We help healthcare providers, clinics, and wellness brands embrace digital transformation with secure, user-friendly, and compliant solutions. From appointment systems and patient portals to health-tracking apps and virtual consultations, we design tools that improve patient experiences, streamline operations, and build trust in a digitally connected world.',
    brands: [
      { title: 'Earthy', image: '/images/service.jpeg' },
      { title: 'VitalWell', image: '/images/service.jpeg' },
    ],
  },
  {
    name: 'Fashion',
    image: '/images/softwaredevelopment.jpg',
    description: 'We partner with fashion brands to create bold, immersive digital experiences that reflect their unique identity and trends. From stylish e-commerce storefronts and lookbook galleries to personalized shopping journeys and influencer integrations, we blend aesthetics with technology to help fashion businesses thrive and inspire in the digital age.',
    brands: [
      { title: 'Weavique', image: '/images/service.jpeg' },
      { title: 'Paceon', image: '/images/service.jpeg' },
    ],
  },
  {
    name: 'Electronics',
    image: '/images/webdevelopment.jpg',
    description: 'We support electronics brands in delivering sleek, high-performance digital experiences that match the innovation of their products. From scalable e-commerce platforms and product configurators to technical support systems and after-sales tools, we build solutions that enhance customer confidence, drive conversions, and reflect the cutting-edge nature of the electronics industry.',
    brands: [
      { title: 'Powervac', image: '/images/service.jpeg' },
    ],
  },
  {
    name: 'Retail',
    image: '/images/printing.jpg',
    description: "We help retail businesses modernize and scale by crafting seamless, omnichannel digital solutions that connect with customers at every touchpoint. Whether it's building fast, intuitive online stores, integrating inventory systems, or enabling personalized shopping experiences, we combine functionality and design to drive growth and customer loyalty in the dynamic world of retail.",
    brands: [
      { title: 'Baby Cart', image: '/images/service.jpeg' },
      { title: 'Mossfell Reserve', image: '/images/service.jpeg' },
    ],
  },
  {
    name: 'Real Estate',
    image: '/images/webdevelopment.jpg',
    description: "We empower real estate companies to showcase properties and connect with buyers through modern, interactive digital platforms. From immersive property listings and virtual tours to lead management tools and booking systems, we create solutions that simplify the buying journey, build credibility, and help real estate businesses close deals faster in a competitive market.",

    brands: [
      { title: 'Rental Hub', image: '/images/service.jpeg' },
    ],
  },
   {
    name: 'Construction',
    image: '/images/softwaredevelopment.jpg',
    description: "We support construction companies in building a powerful digital presence that reflects the strength and precision of their work. From project showcase websites and contractor portals to workflow management tools and on-site collaboration systems, we deliver solutions that streamline operations, boost visibility, and foster trust across clients, partners, and teams.",

    brands: [
      { title: 'Bworth', image: '/images/service.jpeg' },
      { title: 'Craft Shed', image: '/images/service.jpeg' },
    ],
  },
  {
    name: 'Manufacturing',
    image: '/images/printing.jpg',
    description: "We help manufacturing businesses embrace digital transformation with platforms that improve efficiency, visibility, and customer engagement. From smart product catalogs and supply chain integrations to order tracking systems and partner portals, we build robust solutions that support production workflows, strengthen B2B relationships, and drive operational growth in a competitive global market.",

    brands: [
      { title: 'Chem Power', image: '/images/service.jpeg' },
    ],
  },
];

export default function IndustrySection() {
  const [selected, setSelected] = useState<Industry | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverY, setHoverY] = useState<number>(0);

const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const y = e.clientY - rect.top;
  setHovered(index);
  setHoverY(y); // Move exactly as mouse Y
};

  const handleMouseLeave = () => {
    setHovered(null);
    setHoverY(0);
  };

  return (
    <div className="w-full min-h-screen bg-white py-20 px-4 flex justify-center relative">
      {/* Title list */}
      <div className="ba-container z-10">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            >
        <p className="text-center max-w-full text-[clamp(1.2rem,2vw,2rem)] w-[1000] ml-auto mr-auto font-light mb-10">We work with a diverse range of industries to deliver digital solutions that solve real problems and drive growth. From healthcare and beauty to real estate, fashion, and beyond — our work is shaped by deep understanding and a focus on meaningful results.</p>
        </motion.div>
        {industries.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelected(item)}
            className="border-b border-black py-6 cursor-pointer"
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center justify-between text-[clamp(1.5rem,3vw,4rem)] font-light group gap-4 relative">
              {/* Title */}
              <span className="transition-all duration-200 group-hover:pl-2">
                {item.name}
              </span>

              {/* Show image only on hover of this row */}
              <div className="w-[380px] h-[80px] absolute top-1/2 left-1/2 -translate-y-2/2">
                <AnimatePresence>
                  {hovered === index && (
                   <motion.img
                        key={item.name}
                        src={item.image}
                        alt={item.name}
                        initial={{ opacity: 0, y: hoverY, rotate: 3 }}
                        animate={{ opacity: 1, y: hoverY, rotate: 3 }}
                        exit={{ opacity: 0,}}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="absolute inset-0 w-[380px] h-[280px] object-cover rounded-md shadow-md"
                        />
                  )}
                </AnimatePresence>
              </div>

              {/* Arrow */}
              <span className="transition-all duration-200 group-hover:pr-2 text-xl">
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
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup on click */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="popup"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed right-0 top-0 h-full w-full lg:w-1/2 bg-white shadow-2xl z-[1000] px-6 md:px-10 py-10 md:py-12 overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="text-lg mb-6 underline absolute top-2 right-2"
            >
             <svg
  width="32px"
  height="32px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
    fill="#000"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
    fill="#000"
  />
</svg>

            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-[clamp(300px,50vh,600px)] object-cover rounded-xl mb-6"
            />
            <h2 className="text-3xl font-light mb-4">{selected.name}</h2>
            <p className="">{selected.description}</p>
            {selected.brands && selected.brands.length > 0 && (
  <div className="mt-6">
    <h3 className="text-xl font-light mb-4">Brands We’ve Worked With</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {selected.brands.map((brand, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={brand.image}
            alt={brand.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-2 text-center   text-black">
            {brand.title}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
