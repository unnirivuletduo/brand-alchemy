'use client';
import Header from '../../components/Header';
import IndustriesBanner from '../../components/IndustriesBanner';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import FloatingButton from '../../components/FloatingButton';


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
      <IndustriesBanner /> 

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
              Glowora entered the market with a bold ambition — to redefine beauty and wellness through a premium yet accessible brand. But the brand needed clarity, emotional connection, and visual consistency. That&rsquo;s when the Alchemy team partnered with them to build a fully integrated brand identity and experience — one that resonates both digitally and in the real world.
            </motion.p>

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
                <img src="/arrow_right_white.svg" alt="arrow" />
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
        Our Role
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        From the very first spark of inspiration, the journey with Glowora was one of deep collaboration and creative alignment. Alchemy immersed itself in understanding the brand&rsquo;s core values, aspirations, and personality. Together with the Glowora team, we explored every nuance of the brand&rsquo;s identity — from conceptual sketches and color palettes to typography choices, packaging design, and digital presence. Our goal was to not only create a visually appealing brand but also to craft an experience that would emotionally resonate with their audience. Every detail, from the curves of the logo to the tone of voice used on social media, was carefully refined to reflect Glowora&rsquo;s essence. Through open communication and a shared passion for excellence, what began as an idea transformed into a glowing, full-fledged brand — unified across physical and digital platforms, leaving a lasting impression wherever it appears.
      </motion.p>
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
        <img className="rounded-lg" src="/images/glowora/image4.jpeg" alt="Glowora project" />
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
  <div className="flex flex-col md:flex-row md:gap-12">
    
    {/* Left: Images */}
    <motion.div
      className="md:w-[60%] w-full space-y-6"
      variants={fadeInUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg"
        style={{ backgroundColor: '#f896c5' }}
        variants={fadeInUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/glowora/image5.jpeg"
            className="w-full h-auto object-cover mb-4 rounded-lg"
            alt="Glowora visual 1"
          />
        </motion.div>

        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/glowora/image10.jpeg"
            className="w-full h-auto object-cover mb-4 rounded-lg"
            alt="Glowora visual 2"
          />
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right: Text Content */}
    <motion.div
      className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
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
        Brand identity is how a brand visually and emotionally connects with its audience. It includes the logo, colors, typography, imagery, and tone — all working together to create a consistent and memorable presence that builds trust and recognition.
      </motion.p>

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
        The logo design phase focused on creating a mark that would be both timeless and flexible — capable of living on packaging, digital screens, and even large outdoor displays. We explored several visual directions before finalizing a clean, modern logo that subtly incorporates themes of light and clarity — the essence of Glowora&rsquo;s name.
      </motion.p>

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
        Glowora&rsquo;s brand colors were chosen to reflect elegance and femininity — soft neutrals balanced with confident accent tones. We paired these with a typographic system that blends a luxurious serif with a functional modern sans-serif, allowing versatility across both formal and casual brand expressions.
      </motion.p>
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
    Print and packaging collateral brings a brand&rsquo;s identity into the physical world, creating tangible touchpoints that leave a lasting impression. From business cards and brochures to product boxes and labels, each element is thoughtfully designed to reflect the brand&rsquo;s personality, ensure clarity, and enhance the overall customer experience. Well-crafted print and packaging not only communicate information but also build trust and elevate brand perception.
  </motion.p>

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
      <img src="/images/glowora/image3.jpeg" className="w-full h-auto object-cover rounded-lg mb-4" alt="Business Card" />
      <h4 className="text-2xl font-light leading-snug mb-4">Business Card</h4>
      <p>
        We crafted a tactile experience with textured finishes and a minimalist layout, ensuring the card feels like a premium extension of the brand. The design reflects professionalism while adding a hint of creativity through its subtle embossing.
      </p>
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
      <img src="/images/glowora/image2.jpeg" className="w-full h-auto object-cover rounded-lg mb-4" alt="Newspaper Ad" />
      <h4 className="text-2xl font-light leading-snug mb-4">Newspaper Ad & Bill Sticker</h4>
      <p>
        For traditional media, we created layouts that command attention even in dense, content-rich environments. The ad design combines strong headlines, product visuals, and brand language that convert passive readers into curious prospects.
      </p>
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
      <img src="/images/glowora/image4.jpeg" className="w-full h-auto object-cover rounded-lg mb-4" alt="Packaging" />
      <h4 className="text-2xl font-light leading-snug mb-4">Bag & Packaging</h4>
      <p>
        Product packaging was given a clean, minimal makeover — prioritizing user experience, shelf appeal, and brand recognizability. Custom shopping bags with embossed logos and color-matched ribbons were designed to elevate Glowora&rsquo;s retail and gifting experience.
      </p>
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
        Digital experience is how users interact with a brand across websites, apps, and other online platforms. It combines design, usability, and technology to create smooth, engaging, and intuitive interactions. A well-crafted digital experience ensures that users feel connected, informed, and inspired at every digital touchpoint, strengthening brand loyalty and satisfaction.
      </motion.p>

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
        We developed a content grid system for Instagram that maintains visual consistency while supporting a variety of post types — from product launches to behind-the-scenes moments. A mix of bold typography, curated lifestyle photography, and branded icons helped establish Glowora&rsquo;s aesthetic on social.
      </motion.p>

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
        For Glowora&rsquo;s web presence, we designed responsive mockups focusing on clean navigation, conversion-focused product sections, and storytelling visuals. Special care was taken to ensure consistency across mobile and desktop layouts — preserving UX clarity across all screens.
      </motion.p>
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
        className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg"
        style={{ backgroundColor: '#b04f84' }}
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
          <img
            src="/images/glowora/image8.jpeg"
            className="w-full h-auto object-cover mb-4 rounded-lg"
            alt="Instagram Visual"
          />
        </motion.div>

        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={10}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/glowora/image2.jpeg"
            className="w-full h-auto object-cover mb-4 rounded-lg"
            alt="Web Design"
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
      className="md:w-[60%] w-full space-y-6"
      variants={fadeInUp}
      custom={0}
    >
      <motion.div
        className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg"
        style={{ backgroundColor: 'rgb(228, 135, 189)' }}
        variants={fadeInUp}
        custom={1}
      >
        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={2}
        >
          <img
            src="/images/glowora/image4.jpeg"
            className="w-full h-auto object-cover mb-4 rounded-lg"
            alt="Product Mockup 1"
          />
        </motion.div>

        <motion.div
          className="w-full overflow-hidden"
          variants={fadeInUp}
          custom={3}
        >
          <img
            src="/images/glowora/image2.jpeg"
            className="w-full h-auto object-cover mb-4 rounded-lg"
            alt="Product Mockup 2"
          />
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right - Text */}
    <motion.div
      className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
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
        Product mockups are realistic visual representations that showcase how a brand&rsquo;s designs will look on actual products. Whether it&apos;s packaging, merchandise, or digital screens, mockups help bring ideas to life before production. They are essential for presentations, marketing, and refining the design, giving clients and customers a clear vision of the final outcome.
      </motion.p>

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
        Showcased Glowora’s hero product with minimal labels and eco-friendly packaging, captured in soft, calming light.
      </motion.p>

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
        Highlighted a vibrant variant with color-rich packaging that grabs attention while staying on-brand.
      </motion.p>

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
        Placed products in everyday settings like bathrooms and travel kits to boost relatability and shareability.
      </motion.p>
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
      Glowora&rsquo;s brand journey went from fragmented and generic to cohesive and premium.
      Whether viewed on a smartphone, in a customer&rsquo;s hand, or on a 20-foot billboard — the brand now tells one consistent story:
      <strong>
        Glowora is a modern beauty brand that inspires confidence through clarity, quality, and design.
      </strong>
    </motion.p>

    {/* Images */}
    <motion.div
      className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg mt-5"
      style={{ backgroundColor: '#b04f84' }}
      variants={fadeInUp}
      custom={3}
    >
      <motion.div
        className="w-full overflow-hidden"
        variants={fadeInUp}
        custom={4}
      >
        <img
          src="/images/glowora/image8.jpeg"
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Result Image 1"
        />
      </motion.div>

      <motion.div
        className="w-full overflow-hidden"
        variants={fadeInUp}
        custom={5}
      >
        <img
          src="/images/glowora/image2.jpeg"
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Result Image 2"
        />
      </motion.div>
    </motion.div>
  </motion.div>
</motion.section>
    <FloatingButton />
    <Footer />
      </>
    );
}