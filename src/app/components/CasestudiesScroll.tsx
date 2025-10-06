"use client";

import { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "Glowora",
    desc: "We create custom digital presences that engage your audience with responsive design, seamless user experience, and optimized performance to ensure your website stands out in today’s competitive market.",
    image: "/images/webdevelopment.jpg",
  },
  {
    id: 2,
    title: "Angana",
    desc: "Providing tailored business solutions through innovative software development that streamlines operations, enhances productivity, and meets your unique enterprise needs.",
    image: "/images/softwaredevelopment.jpg",
  },
  {
    id: 3,
    title: "Earthy",
    desc: "Delivering creative printed marketing materials including business cards, flyers, and posters that capture your brand’s essence and leave a lasting impression.",
    image: "/images/printing.jpg",
  },
  {
    id: 4,
    title: "VitalWell",
    desc: "We create custom digital presences that engage your audience with responsive design, seamless user experience, and optimized performance to ensure your website stands out in today’s competitive market.",
    image: "/images/webdevelopment.jpg",
  },
  {
    id: 5,
    title: "Weavique",
    desc: "Providing tailored business solutions through innovative software development that streamlines operations, enhances productivity, and meets your unique enterprise needs.",
    image: "/images/softwaredevelopment.jpg",
  },
  {
    id: 6,
    title: "Paceon",
    desc: "Delivering creative printed marketing materials including business cards, flyers, and posters that capture your brand’s essence and leave a lasting impression.",
    image: "/images/printing.jpg",
  },
];

export default function CaseStudiesScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    const title = titleRef.current;

    if (!horizontal || !section || !title) return;

    const scrollWidth = horizontal.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollLength = scrollWidth - windowWidth;

    const ctx = gsap.context(() => {
      gsap.set(horizontal, { x: window.innerWidth });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollLength * 2}`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(title, { opacity: 0, letterSpacing: "0.5em", duration: 0.2, ease: "none" });
      tl.to(horizontal, { x: `-${scrollLength}px`, ease: "none" }, ">-0.1");
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".ba-service-card");

    cards.forEach((card, i) => {
      gsap.to(card, {
        rotationY: 20,
        rotationX: 5,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        transformOrigin: "center center",
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <>
   <section
  id="section2"
  ref={sectionRef}
  className="relative w-full h-screen bg-white text-black overflow-hidden ba-service-scroll hidden sm:block"
>
      {/* Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
        <h2
          ref={titleRef}
          className="text-[clamp(2rem,8vw,5rem)] font-light text-center whitespace-nowrap"
        >
          Some of our works
        </h2>
      </div>

      {/* Horizontally Scrolling Cards */}
      <div
        ref={horizontalRef}
        className="flex h-full items-center px-20 absolute  top-0 left-0"
        // style={{ width: `${caseStudies.length * 35}vw` }}
      >
        {caseStudies.map((study) => (
          <ServiceCard key={study.id} study={study} />
        ))}
    
      </div>
    </section>
     <section className="block bg-white sm:hidden px-4 py-8 pt-150vh">
      <h2 className="font-light text-[clamp(2rem,8vw,5rem)] text-center mb-6">Some of our works</h2>
      <div className="grid grid-cols-1 gap-6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-black mb-4"
          >
            <Image width="1000" height="1000" src={study.image} alt={study.title} className="rounded-lg mb-3" />
            <h3 className="text-xl font-light mb-1">{study.title}</h3>
            <p className="text-sm opacity-80 mb-2">{study.desc}</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm text-white mt-auto arrow-btn-black"
            >
              Read More <Image className="h-1remw-1rem" width="32" height="32" src="/arrow_right_white.svg" alt="arrow" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}

type ServiceCardProps = {
  study: {
    title: string;
    desc: string;
    image: string;
  };
};

function ServiceCard({ study }: ServiceCardProps) {

  return (
    <div className="ba-service-card text-white">
      <div className="face face-front p-4 bg-primaryrounded-2xl shadow-xl h-full flex flex-col justify-between">
        <figure className="mb-4">
          <Image width="1000" height="1000" src={study.image} alt={study.title} className="rounded-xl" />
        </figure>
        <h2 className="text-2xl font-light text-white mb-2">{study.title}</h2>
        <p className="text-sm opacity-80 text-white mb-4">{study.desc}</p>
        <Link
          href="#"
          className="mt-auto inline-flex items-center gap-3 text-sm arrow-btn"
        >
          Read More <Image className="h-1remw-1rem" width="64" height="64" src="/arrow_right_white.svg" alt="arrow" />
        </Link>
      </div>
    </div>
  );
}
