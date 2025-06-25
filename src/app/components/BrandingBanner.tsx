'use client';

import {  useRef } from 'react';
import { motion } from 'framer-motion';

const title = 'Branding Services';


export default function IndustryBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/industry-banner.jpg"
          alt="Industry Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Title Animation */}
      <motion.div
        className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center flex flex-wrap justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
      >
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
