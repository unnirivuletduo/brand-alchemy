'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {  useRef, useState } from 'react';
import { motion } from 'framer-motion';

const title = 'About Us';

const jobs = [
  {
    title: 'Brand Strategist',
    description:
      'Work with clients to define their brand voice, positioning, and visual personality. Ideal candidates should have strong communication and research skills.',
  },
  {
    title: 'UI/UX Designer',
    description:
      'Design intuitive, beautiful interfaces for web and mobile. You’ll collaborate with developers and strategists to turn ideas into real-world digital experiences.',
  },
  {
    title: 'Frontend Developer',
    description:
      'We’re looking for a React/Next.js developer who loves clean code, animation libraries, and creative digital storytelling.',
  },
];

  

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
      const [openIndex, setOpenIndex] = useState<number | null>(null);


const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
};
  return (
    <>
      <Header />











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


<section className="pt-24 bg-white text-center px-6 lg:px-20">
  <h1 className="text-3xl lg:text-4xl font-light mb-6">Behind Every Brand, There&apos;s a Story</h1>
  <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
    At Alchemy Project, we believe in more than just design — we believe in transformation.
    Our mission is to turn ideas into soulful experiences, blending strategy, creativity,
    and human connection to create brands that truly resonate.
  </p>
  <p className="text-xl mt-6 text-green-600 italic font-medium">
    “Because great design doesn&apos;t just look good — it feels right.”
  </p>
</section>



      <main className="bg-white text-black px-6 lg:px-20 pt-5 pb-16 space-y-20">
 {/* founders */}
<section id="founders" className="pt-16 pb-5">
  <h2 className="text-3xl lg:text-4xl font-light text-center mb-12">Meet Our Founders</h2>
  
  <div className="flex flex-col lg:flex-row items-center gap-12">
    <div className="w-full lg:w-1/2">
      <img
        src="/images/team/founder.jpg"
        alt="Founder Name"
        className="rounded-2xl w-full h-auto object-cover shadow-md"
      />
    </div>

    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h3 className="text-2xl font-light">Ananya Pillai</h3>
      <p className="font-medium mb-4">Co-Founder & Brand Strategist</p>
      <p className="leading-relaxed">
        With a deep love for storytelling and design, Ananya brings the soul of Alchemy Project to life.
        Her vision is to help brands transform from ordinary to extraordinary through emotional connection,
        visual identity, and strategic clarity. Every project begins with curiosity and ends with magic.
        <br /><br />
        Ananya believes that every brand has a hidden spark waiting to be discovered. Her approach combines
        intuition with strategy, ensuring that every identity feels human, honest, and powerful. Whether it&apos;s
        launching a startup or refreshing an established business, she crafts experiences that don&apos;t just look
        good — they feel right. Through collaboration, research, and creative soul, she leads brands into their
        most authentic, magnetic form.
      </p>
    </div>
  </div>
</section>

<section className="pb-16">
  
  <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
    <div className="w-full lg:w-1/2">
      <img
        src="/images/team/founder.jpg"
        alt="Founder Name"
        className="rounded-2xl w-full h-auto object-cover shadow-md"
      />
    </div>

    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h3 className="text-2xl font-light">Ananya Pillai</h3>
      <p className=" font-medium mb-4">Co-Founder & Brand Strategist</p>
      <p className="leading-relaxed">
        With a deep love for storytelling and design, Ananya brings the soul of Alchemy Project to life.
        Her vision is to help brands transform from ordinary to extraordinary through emotional connection,
        visual identity, and strategic clarity. Every project begins with curiosity and ends with magic.
        <br /><br />
        Ananya believes that every brand has a hidden spark waiting to be discovered. Her approach combines
        intuition with strategy, ensuring that every identity feels human, honest, and powerful. Whether it&apos;s
        launching a startup or refreshing an established business, she crafts experiences that don&apos;t just look
        good — they feel right. Through collaboration, research, and creative soul, she leads brands into their
        most authentic, magnetic form.
      </p>
    </div>
  </div>
</section>

        {/* Our Team Section */}
       <section id="our-team">
  <h2 className="text-3xl lg:text-4xl font-light text-center mb-12">Meet Our Team</h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        name: 'Arjun Menon',
        title: 'Creative Director',
        image: '/images/team/team1.jpg',
      },
      {
        name: 'Meera S.',
        title: 'UI/UX Designer',
        image: '/images/team/team2.jpg',
      },
      {
        name: 'Rahul Das',
        title: 'Lead Developer',
        image: '/images/team/team1.jpg',
      },
    ].map((member, index) => (
      <div
        key={index}
        className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-light">{member.name}</h3>
          <p className="mt-2">{member.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Why Brands Trust Us Section */}
        <section id="why-trust-us" className="py-10">
  <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-light mb-4">Why Brands Trust Us</h2>
    <p className="max-w-3xl mx-auto mb-12">
      Trust is earned — not claimed. At Alchemy Project, we blend strategy, creativity, and clarity to create
      brands that are not only seen but remembered. Here&apos;s why we&apos;ve become the creative partner of choice for many.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
      <div className="p-6 bg-gray-100  rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div className="text-3xl text-indigo-600 mb-4">🎯</div>
        <h3 className="text-xl font-light mb-2">Strategy-First Thinking</h3>
        <p>
          Every design choice is backed by research and purpose. We start with strategy to make sure your brand connects deeply and grows sustainably.
        </p>
      </div>

      <div className="p-6 bg-gray-100  rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div className="text-3xl text-indigo-600 mb-4">💡</div>
        <h3 className="text-xl font-light mb-2">Creative Soul</h3>
        <p>
          We don&apos;t do generic. Our work is emotionally rich, visually bold, and uniquely you — always custom-built, never templated.
        </p>
      </div>

      <div className="p-6 bg-gray-100  rounded-2xl shadow hover:shadow-lg transition duration-300">
        <div className="text-3xl text-indigo-600 mb-4">🤝</div>
        <h3 className="text-xl font-light mb-2">Collaborative Process</h3>
        <p>
          From kickoff to final delivery, we listen, adapt, and co-create with you. You&apos;re not just a client — you&apos;re a creative partner.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* What Makes Us Different Section */}
      <section id="what-makes-us-different" className="pb-20">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl lg:text-4xl font-light text-center mb-4">What Makes Us Different?</h2>
    <p className="text-center max-w-3xl mx-auto mb-12">
      We don&apos;t just design brands — we create emotional experiences that stick. Here&apos; how Alchemy Project does things a little differently.
    </p>

    <div className="flex flex-col-reverse lg:flex-row gap-12">
      {/* Left – List of Differentiators */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h3 className="text-xl font-light mb-1">Human-Centered Branding</h3>
          <p className="text-gray-600">
            Every brand is built around emotion, empathy, and real people — not just logos and colors.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-light mb-1">Depth Over Trends</h3>
          <p className="text-gray-600">
            We don&apos;t chase aesthetics. We craft timeless identities that evolve with purpose, not hype.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-light mb-1">Immersive Client Experience</h3>
          <p className="text-gray-600">
            From first call to final delivery, we walk with you — listening, reflecting, creating side by side.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-light mb-1">A Touch of Alchemy</h3>
          <p className="text-gray-600">
            We mix insight, intuition, and imagination to turn ideas into magnetic brand experiences.
          </p>
        </div>
      </div>

      {/* Right – Visual */}
      <div className="w-full lg:w-1/2 flex">
        <video
          src="/videos/different.mp4"
          className="rounded-2xl w-full h-full object-cover shadow-md"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  </div>
</section>


<section id="careers" className="">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-4">Careers</h2>
        <p className="text-gray-600 text-center mb-12">
          We&apos;re always on the lookout for curious minds and kind collaborators. Explore open roles below.
        </p>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-light text-gray-800 flex justify-between items-center"
              >
                {job.title}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>

              {openIndex === index && (
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {job.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Values, Mission & Vision Section */}
        <section id="values-mission-vision">
          {/* To be added */}
        </section>
      </main>

      <Footer />
    </>
  );
}
