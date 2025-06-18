"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Escolhe a zona",
    text: "Ajudamos na escolha da área e melhor solução para instalar a sua Grab&Go, e damos-lhe exclusividade total, onde pode desenvolver a sua atividade e abrir mais lojas. Só necessita de 30 m2.",
    image: "/images/service.jpeg",
  },
  {
    title: "Escolhe o pack",
    text: "Ajudamos na escolha da área e melhor solução para instalar a sua Grab&Go, e damos-lhe exclusividade total, onde pode desenvolver a sua atividade e abrir mais lojas. Só necessita de 30 m2.",
    image: "/images/service.jpeg",
  },
  {
    title: "Loja pronta em 1 mês",
    text: "Ajudamos na escolha da área e melhor solução para instalar a sua Grab&Go, e damos-lhe exclusividade total, onde pode desenvolver a sua atividade e abrir mais lojas. Só necessita de 30 m2.",
    image: "/images/service.jpeg",
  },
];

export default function ScrollSteps() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Fade in entire section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate mobile cards one by one
    const cards = gsap.utils.toArray(".fade-card") as HTMLElement[];
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.1,
      });
    });

    // Desktop scroll pin only if screen is xl and above
    if (window.innerWidth >= 1280) {
      const imageTriggers = gsap.utils.toArray(".step-image") as HTMLElement[];

      imageTriggers.forEach((img, index) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (steps.length - 1)}`,
        pin: true,
        scrub: true,
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  }, []);

  return (
    <section
      id="section3"
      ref={sectionRef}
      className="relative text-black ba-steps py-12"
    >
      {/* Mobile & tablet cards */}
      <div className="xl:hidden px-4 space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="fade-card rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop scroll section */}
      <div className="hidden xl:grid xl:grid-cols-2 gap-10 ba-container">
        {/* Left images */}
        <div className="flex flex-col space-y-20 pt-[100px] pb-[100px] image-step mr-[-100px]">
          {steps.map((step, index) => (
            <figure key={index}>
              <img
                src={step.image}
                alt={step.title}
                className={`step-image w-full transition-opacity duration-500 ease-in-out ${
                  activeStep === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </figure>
          ))}
        </div>

        {/* Right text */}
        <div
          className="sticky top-0 h-screen flex items-center xl:pl-[100px]"
          ref={textRef}
        >
          <div className="space-y-12 p-4 text-step">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${
                  activeStep === index ? "opacity-100" : "opacity-30"
                }`}
              >
                <h3 className="text-4xl font-light text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-black max-w-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
