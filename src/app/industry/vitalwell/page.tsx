'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import FloatingButton from '../../components/FloatingButton';
import Image from "next/image";


const title =
    "VitalWell – A Brand Reimagined";

  const words = title.split(" ");


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function IndustryPage() {
  return (
    <>
      <Header />
     <div
      className="relative h-[500px] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/vitalwell/01.jpg')", // replace with your image path
      }}
    >
      {/* Overlay (optional for darkening) */}
      <div className="absolute w-full inset-0 bg-black" style={{opacity:.5}} />

      {/* Main Content */}
      <div className="relative ba-container">
        <h1 className="text-4xl md:text-6xl font-light pt-10 mx-auto leading-tight">
          {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0,
                ease: "easeOut",
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
    </h1>
  
      </div>

      {/* Industry Text at bottom left */}
      <div className="absolute bottom-10 w-full   left-0 text-2xl">
        <div className="ba-container">
        <p className="text-white  ">Industry</p>
        <p className="text-white text-lg ">Beauty / Wellness / Health</p>
        </div>
      </div>
    </div>

      <motion.section
        className="w-full px-6 md:px-20 py-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row md:gap-12">

          {/* Left: Services Provided */}
          <motion.div
            className="md:w-[35%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl font-light"
              variants={fadeInUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Services Provided
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Full-Scale Brand Identity",
                "Visual Rollout",
                "Digital Marketing",
                "Business Card",
                "Web Development"
              ].map((service, i) => (
                <motion.span
                  key={i}
                  className="border border-black px-4 py-1 rounded-full text-sm"
                  variants={fadeInUp}
                  custom={i + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Case Study Content */}
          <motion.div
            className="md:w-[65%] w-full space-y-6"
            variants={fadeInUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-light leading-snug"
              variants={fadeInUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Overview
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            VitalWell stepped into the market with a bold vision — to redefine wellness and confidence through effective, high-quality fat-loss and body-shaping solutions that are accessible to everyone. But the brand needed clarity, emotional connection, and visual consistency. That’s when the Brand Alchemy team partnered with them to craft a fully integrated brand identity and experience — one that inspires users both online and in the real world.            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-3 arrow-btn-black"
              >
                View Live Website{" "}
                <Image width="64" height="64" src="/arrow_right_white.svg" alt="arrow" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


     <motion.section
  className="w-full px-6 md:px-20 pb-[100px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="flex flex-col md:flex-row md:gap-12 items-center">
    {/* Left Content */}
    <motion.div
      className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
      variants={fadeInUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-4xl font-light leading-snug"
        variants={fadeInUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Role
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
       From the very first spark of inspiration, the journey with VitalWell was one of close collaboration and creative synergy. Brand Alchemy immersed itself in understanding the brand’s core values, wellness goals, and personality. Together with the VitalWell team, we explored every detail of the brand’s identity — from conceptual sketches and color schemes to typography, packaging, and digital presence. Our aim was not just to create a visually striking brand but to craft an experience that connects emotionally with users seeking fat-loss and body-shaping solutions. Every element, from the clean lines of the logo to the encouraging tone used across social media, was carefully refined to capture VitalWell’s essence. Through open communication and a shared passion for excellence, what started as an idea transformed into a cohesive, fully realized brand — consistent across both physical products and digital platforms, leaving a lasting impression.      </motion.p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="md:w-[60%] w-full space-y-6"
      variants={fadeInUp}
      custom={3}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.figure
        className="w-full"
        variants={fadeInUp}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image width="1000" height="1000" className="rounded-lg" src="/images/vitalwell/02.png" alt="Glowora project" />
      </motion.figure>
    </motion.div>
  </div>
</motion.section>



      <motion.section
  className="w-full px-6 md:px-20 pb-[100px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="flex flex-col md:flex-row md:gap-12 items-center">
    
    {/* Left: Images */}
    <motion.div
      className="md:w-[30%] w-full space-y-6"
      variants={fadeInUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="rounded-lg"
        variants={fadeInUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image width="1000" height="1000" 
            src="/images/vitalwell/06.jpg"
            className="w-full h-auto object-cover rounded-lg"
            alt="Glowora visual 2"
          />
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right: Text Content */}
    <motion.div
      className="md:w-[70%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
      variants={fadeInUp}
      custom={4}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-4xl font-light leading-snug"
        variants={fadeInUp}
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Brand Identity
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        custom={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      Brand identity is how VitalWell visually and emotionally connects with users seeking fat-loss and body-shaping solutions. It includes the logo, colors, typography, imagery, and tone — all working together to create a consistent and memorable presence that conveys wellness, trust, and confidence.      </motion.p>

      <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={7}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Logo Design
      </motion.h4>

      <motion.p
        variants={fadeInUp}
        custom={8}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      The logo design phase focused on creating a mark that would be both timeless and versatile — able to shine on packaging, digital platforms, and wellness products. We explored multiple visual directions before finalizing a clean, modern logo that conveys health, confidence, and transformation — reflecting the empowering spirit of VitalWell.      </motion.p>

      <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={9}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Color Palette & Typography
      </motion.h4>

      <motion.p
        variants={fadeInUp}
        custom={10}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
VitalWell&rsquo;s brand colors were chosen to reflect vitality and wellness — vibrant, uplifting tones balanced with calm neutrals for versatility. These were paired with a typographic system that combines a clean, modern sans-serif with a functional typeface, ensuring clarity and impact across both digital and physical brand expressions.      </motion.p>
    </motion.div>
  </div>
</motion.section>

      <motion.section
  className="w-full px-6 md:px-20 pb-[100px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h3
    className="text-3xl font-light leading-snug mb-4"
    variants={fadeInUp}
    custom={0}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    Print & Packaging Collateral
  </motion.h3>

  <motion.p
    variants={fadeInUp}
    custom={1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
  Print and packaging collateral brings VitalWell&rsquo;s identity into the physical world, creating tangible touchpoints that leave a lasting impression. From product boxes and labels to promotional materials and wellness kits, each element is carefully designed to reflect the brand&rsquo;s supportive and empowering personality, ensure clarity, and enhance the overall customer experience. Well-crafted print and packaging not only communicate essential information but also reinforce trust, effectiveness, and brand credibility.  </motion.p>

  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[80px]"
    variants={fadeInUp}
    custom={2}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {/* Card 1 */}
    <motion.div
      className="w-full overflow-hidden"
      variants={fadeInUp}
      custom={3}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Image width="1000" height="1000" src="/images/vitalwell/04.jpg" className="w-full h-auto object-cover rounded-lg mb-4" alt="Business Card" />
      <h4 className="text-2xl font-light leading-snug mb-4">Business Card</h4>
      <p>
      We crafted a tactile experience with textured finishes and a sleek, minimalist layout, ensuring each item feels like a premium extension of the VitalWell brand. The design reflects wellness and professionalism while adding a hint of energy and motivation through subtle embossing and thoughtful details.      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="w-full overflow-hidden"
      variants={fadeInUp}
      custom={4}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Image width="1000" height="1000" src="/images/vitalwell/05.png" className="w-full h-auto object-cover rounded-lg mb-4" alt="Newspaper Ad" />
      <h4 className="text-2xl font-light leading-snug mb-4">Newspaper Ad & Bill Sticker</h4>
      <p>
      For traditional media, we created layouts that stand out even in content-rich environments. The ad design combines bold headlines, clear visuals, and motivating brand language that capture attention and engage users seeking fat-loss and body-shaping solutions, turning passive viewers into curious and inspired clients.      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="w-full overflow-hidden"
      variants={fadeInUp}
      custom={5}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Image width="1000" height="1000" src="/images/vitalwell/02.png" className="w-full h-auto object-cover rounded-lg mb-4" alt="Packaging" />
      <h4 className="text-2xl font-light leading-snug mb-4">Bag & Packaging</h4>
      <p>
       Product packaging was given a clean, minimalist makeover — prioritizing user experience, shelf appeal, and brand recognizability. Custom product boxes, bags, and packaging details were designed with embossed logos and subtle color accents to elevate VitalWell’s retail and gifting experience.      </p>
    </motion.div>
  </motion.div>
</motion.section>


     <motion.section
  className="w-full px-6 md:px-20 pb-[100px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="flex flex-col md:flex-row md:gap-12">
    {/* Left Content */}
    <motion.div
      className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
      variants={fadeInUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-4xl font-light leading-snug"
        variants={fadeInUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Digital Experience
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
Digital experience is how users interact with VitalWell across websites, apps, and other online platforms. It combines design, usability, and technology to create smooth, engaging, and intuitive interactions. A well-crafted digital experience ensures that clients feel supported, informed, and motivated at every digital touchpoint, strengthening trust and brand loyalty.      </motion.p>

      <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Instagram Visual Strategy
      </motion.h4>

      <motion.p
        variants={fadeInUp}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
We developed a content grid system for Instagram that maintains visual consistency while supporting a variety of post types — from product launches to behind-the-scenes usage tips and client transformations. A mix of bold typography, motivational imagery, and branded icons helped establish VitalWell’s energetic and inspiring aesthetic on social media.      </motion.p>

      <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Web – Desktop & Mobile View
      </motion.h4>

      <motion.p
        variants={fadeInUp}
        custom={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
For VitalWell&rsquo;s web presence, we designed responsive mockups focusing on clean navigation, conversion-focused product sections, and engaging storytelling visuals. Special care was taken to ensure consistency across mobile and desktop layouts — preserving a smooth and motivating user experience on all screens.      </motion.p>
    </motion.div>

    {/* Right: Images */}
    <motion.div
      className="md:w-[60%] w-full space-y-6"
      variants={fadeInUp}
      custom={7}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="rounded-lg overflow-hidden"
        variants={fadeInUp}
        custom={8}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image width="1000" height="1000" 
            src="/images/vitalwell/01.jpg"
            className="w-full h-auto object-cover rounded-lg"
            alt="Instagram Visual"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</motion.section>


      <motion.section
  className="w-full px-6 md:px-20 pb-[100px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="flex flex-col md:flex-row md:gap-12">

    {/* Left - Images */}
    <motion.div
      className="md:w-[35%] w-full space-y-6"
      variants={fadeInUp}
      custom={0}
    >
      <motion.div
        className="rounded-lg"
        variants={fadeInUp}
        custom={1}
      >

        <motion.div
          className="w-full overflow-hidden  shadow-sm"
          variants={fadeInUp}
          custom={3}
        >
          <Image width="1000" height="1000" 
            src="/images/vitalwell/03.jpg"
            className="w-full h-auto object-cover rounded-lg  shadow-sm"
            alt="Product Mockup 2"
          />
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right - Text */}
    <motion.div
      className="md:w-[65%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
      variants={fadeInUp}
      custom={4}
    >
      <motion.h3
        className="text-4xl font-light leading-snug"
        variants={fadeInUp}
        custom={5}
      >
        Product Mockups
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        custom={6}
      >
Product mockups are realistic visuals that show how VitalWell&rsquo;s designs appear on medicine packaging, bottles, and digital screens. They help bring ideas to life, refine designs, and give clients and customers a clear vision of the final product.      </motion.p>

      <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={7}
      >
        Product Mockup 1
      </motion.h4>
      <motion.p
        variants={fadeInUp}
        custom={8}
      >
Showcased VitalWell&rsquo;s flagship fat-loss and body-shaping product with carefully designed, clean, and minimal branding. The packaging emphasizes clarity, trust, and premium quality, while the visual presentation highlights the product&rsquo;s effectiveness and health benefits. Each shot was captured in soft, focused lighting that conveys professionalism and wellness, ensuring that the product stands out both online and in marketing materials, creating a strong and lasting impression on potential customers.      </motion.p>

      <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={9}
      >
        Product Mockup 2
      </motion.h4>
      <motion.p
        variants={fadeInUp}
        custom={10}
      >
Highlighted a vibrant VitalWell product variant with eye-catching, health-focused packaging that immediately draws attention while staying true to the brand&rsquo;s core values of wellness, effectiveness, and trust. The design uses color accents to communicate energy and vitality, while maintaining a clean, professional aesthetic. Each visual emphasizes the product’s benefits, helping customers instantly understand its purpose and appeal, making it a standout item in both digital campaigns and retail displays.      </motion.p>

       <motion.h4
        className="text-2xl font-light leading-snug mb-4"
        variants={fadeInUp}
        custom={11}
      >
        Product Mockup 3
      </motion.h4>
      <motion.p
        variants={fadeInUp}
        custom={12}
      >
Placed VitalWell products in relatable, everyday settings such as bathrooms, gym bags, and travel kits to create a sense of familiarity and practicality. These contextual placements help customers visualize the product as part of their daily routine, enhancing engagement and shareability on social media. By showcasing the product in real-life scenarios, the visuals communicate convenience, effectiveness, and lifestyle integration, making VitalWell feel accessible, trustworthy, and essential for health-conscious users.      </motion.p>

      
    </motion.div>
  </div>
</motion.section>


      <motion.section
  className="w-full px-6 md:px-20 pb-[100px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    className="max-w-5xl mx-auto"
    variants={fadeInUp}
    custom={0}
  >
    <motion.h2
      className="text-4xl font-light mb-6"
      variants={fadeInUp}
      custom={1}
    >
      The Result
    </motion.h2>

    <motion.p
      variants={fadeInUp}
      custom={2}
    >

      VitalWell&rsquo;s brand journey evolved from being fragmented and generic to cohesive, credible, and inspiring. Whether seen on a smartphone, in a customer’s hands, or featured in promotional campaigns — the brand now communicates one consistent story: VitalWell is a cutting-edge fat-loss and body-shaping solution that empowers users to achieve their health goals with confidence, effectiveness, and trust. Every touchpoint, from packaging to digital presence, reinforces the brand’s promise of transformation, wellness, and reliability.
    </motion.p>

    {/* Images */}
    <motion.div
      className="p-5 pb-1 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg mt-5"
      style={{ backgroundColor: '#721412' }}
      variants={fadeInUp}
      custom={3}
    >
      <motion.div
        className="w-full overflow-hidden"
        variants={fadeInUp}
        custom={4}
      >
        <Image width="1000" height="1000" 
          src="/images/vitalwell/01.jpg"
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Result Image 1"
        />
        <Image width="1000" height="1000" 
          src="/images/vitalwell/02.png"
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Result Image 1"
        />
        
      </motion.div>

      <motion.div
        className="w-full overflow-hidden"
        variants={fadeInUp}
        custom={5}
      >
      <Image width="1000" height="1000" 
          src="/images/vitalwell/04.jpg"
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Result Image 2"
        />
        <video
  width="1000"
  height="1000"
  className="w-full h-auto object-cover mb-4 rounded-lg"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/images/vitalwell/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <Link
                href="#"
                className="inline-flex items-center gap-3 arrow-btn-white text-white mt-2"
              >
                View Live Website{" "}
                <Image width="64" height="64" src="/arrow_right_white.svg" alt="arrow" />
              </Link>
      </motion.div>
    </motion.div>
  </motion.div>
</motion.section>
    <FloatingButton />
    <Footer />
      </>
    );
}