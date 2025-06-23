'use client';
import Header from '../../components/Header';
import IndustriesBanner from '../../components/IndustriesBanner';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function IndustryPage() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <>
      <Header />

<IndustriesBanner />

   <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}


     className="w-full px-6 md:px-20 pt-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">Overview</h3>
             <p>
              Glowora entered the market with a bold ambition — to redefine beauty and wellness through a premium yet accessible brand. But the brand needed clarity, emotional connection, and visual consistency. That&rsquo;s when the Alchemy team partnered with them to build a fully integrated brand identity and experience — one that resonates both digitally and in the real world.
            </p>
            <h2 className="text-2xl font-light mt-5">Services Provided</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Full-Scale Brand Identity",
                "Visual Rollout",
                "Digital Marketing",
                "Business Card",
                "Web Development"
              ].map((service, i) => (
                <span
                  key={i}
                  className="border border-black px-4 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
            {/* Link */}
            <Link href="#" className="inline-flex items-center gap-3 arrow-btn-black mt-5">
              View Live Website <img src="/arrow_right_white.svg" alt="arrow" />
            </Link>
          </div>
          {/* Right: Case Study Content */}
          <div className="md:w-[60%] w-full space-y-6">
            <figure className="w-full">
            <img 
            className='rounded-lg' src="/images/glowora/image2.jpeg" 
            />
            </figure> 
          </div>
        </div>
      </motion.section>

       <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }} className="w-full px-6 md:px-20 pt-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">Our Role</h3>
              <p>
          From the very first spark of inspiration, the journey with Glowora was one of deep collaboration and creative alignment. Alchemy immersed itself in understanding the brand&rsquo;s core values, aspirations, and personality. Together with the Glowora team, we explored every nuance of the brand&rsquo;s identity — from conceptual sketches and color palettes to typography choices, packaging design, and digital presence. Our goal was to not only create a visually appealing brand but also to craft an experience that would emotionally resonate with their audience. Every detail, from the curves of the logo to the tone of voice used on social media, was carefully refined to reflect Glowora&rsquo;s essence. Through open communication and a shared passion for excellence, what began as an idea transformed into a glowing, full-fledged brand — unified across physical and digital platforms, leaving a lasting impression wherever it appears.
        </p> 
          </div>
          {/* Right: Case Study Content */}
          <div className="md:w-[60%] w-full space-y-6">
             <figure className="w-full">
            <img className='rounded-lg' src="/images/glowora/image4.jpeg" />
          </figure>  
          </div>
        </div>
      </motion.section>

       <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }} className="w-full px-6 md:px-20 py-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">Brand Identity</h3>
           <p>Brand identity is how a brand visually and emotionally connects with its audience. It includes the logo, colors, typography, imagery, and tone — all working together to create a consistent and memorable presence that builds trust and recognition. </p>
          <h4 className="text-2xl font-light leading-snug mb-4">Logo Design</h4>
            <p>
              The logo design phase focused on creating a mark that would be both timeless and flexible — capable of living on packaging, digital screens, and even large outdoor displays. We explored several visual directions before finalizing a clean, modern logo that subtly incorporates themes of light and clarity — the essence of Glowora&rsquo;s name.
            </p>
          <h4 className="text-2xl font-light leading-snug mb-4">Color Palette & Typography</h4>
            <p>
              Glowora&rsquo;s brand colors were chosen to reflect elegance and femininity — soft neutrals balanced with confident accent tones. We paired these with a typographic system that blends a luxurious serif with a functional modern sans-serif, allowing versatility across both formal and casual brand expressions.
            </p>
          </div>
 <div className="md:w-[60%] w-full space-y-6">

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg" style={{ backgroundColor: '#f896c5' }}>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image5.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image10.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
        </div>

          </div>
        </div>
      </motion.section>

       <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }} className="w-full px-6 md:px-20 pb-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">Print & Packaging Collateral</h3>
           <p>Print and packaging collateral brings a brand’s identity into the physical world, creating tangible touchpoints that leave a lasting impression. From business cards and brochures to product boxes and labels, each element is thoughtfully designed to reflect the brand’s personality, ensure clarity, and enhance the overall customer experience. Well-crafted print and packaging not only communicate information but also build trust and elevate brand perception.</p>
          <h4 className="text-2xl font-light leading-snug mb-4">Business Card</h4>
             <p>
              We crafted a tactile experience with textured finishes and a minimalist layout, ensuring the card feels like a premium extension of the brand. The design reflects professionalism while adding a hint of creativity through its subtle embossing.
            </p>
            <h4 className="text-2xl font-light leading-snug mb-4">Bag & Packaging</h4>
           <p>
              Product packaging was given a clean, minimal makeover — prioritizing user experience, shelf appeal, and brand recognizability. Custom shopping bags with embossed logos and color-matched ribbons were designed to elevate Glowora&rsquo;s retail and gifting experience.
            </p>
          </div>
          {/* Right: Case Study Content */}
          <div className="md:w-[60%] w-full space-y-6">
           <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg" style={{ backgroundColor: '#9b0250' }}>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image3.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image4.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
        </div>
          </div>
        </div>
      </motion.section>

       <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }} className="w-full px-6 md:px-20 pb-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">Digital Experience</h3>
           <p>
          Digital experience is how users interact with a brand across websites, apps, and other online platforms. It combines design, usability, and technology to create smooth, engaging, and intuitive interactions. A well-crafted digital experience ensures that users feel connected, informed, and inspired at every digital touchpoint, strengthening brand loyalty and satisfaction.
        </p>
         <h4 className="text-2xl font-light leading-snug mb-4">Instagram Visual Strategy</h4>
            <p>
              We developed a content grid system for Instagram that maintains visual consistency while supporting a variety of post types — from product launches to behind-the-scenes moments. A mix of bold typography, curated lifestyle photography, and branded icons helped establish Glowora&rsquo;s aesthetic on social.
            </p>
             <h4 className="text-2xl font-light leading-snug mb-4">Web – Desktop & Mobile View</h4>
            <p>
              For Glowora&rsquo;s web presence, we designed responsive mockups focusing on clean navigation, conversion-focused product sections, and storytelling visuals. Special care was taken to ensure consistency across mobile and desktop layouts — preserving UX clarity across all screens.
            </p>
          </div>
          {/* Right: Case Study Content */}
          <div className="md:w-[60%] w-full space-y-6">
           <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg" style={{ backgroundColor: '#b04f84'}}>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image8.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image2.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
        </div>
          </div>
        </div>
      </motion.section>

       <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }} className="w-full px-6 md:px-20 pb-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">Product Mockups</h3>
         <p>
          Product mockups are realistic visual representations that showcase how a brand&rsquo;s designs will look on actual products. Whether it&apos;s packaging, merchandise, or digital screens, mockups help bring ideas to life before production. They are essential for presentations, marketing, and refining the design, giving clients and customers a clear vision of the final outcome.
        </p>
       <h4 className="text-2xl font-light leading-snug mb-4">Product Mockup 1</h4>
<p>
  Showcased Glowora’s hero product with minimal labels and eco-friendly packaging, captured in soft, calming light.
</p>

<h4 className="text-2xl font-light leading-snug mb-4">Product Mockup 2</h4>
<p>
  Highlighted a vibrant variant with color-rich packaging that grabs attention while staying on-brand.
</p>

<h4 className="text-2xl font-light leading-snug mb-4">Product Mockup 3</h4>
<p>
  Placed products in everyday settings like bathrooms and travel kits to boost relatability and shareability.
</p>

          </div>
          {/* Right: Case Study Content */}
          <div className="md:w-[60%] w-full space-y-6">
           <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 pt-[150px] pb-[150px] rounded-lg" style={{ backgroundColor: 'rgb(228, 135, 189)'}}>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image4.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
          <div className="w-full overflow-hidden">
            <img src="/images/glowora/image2.jpeg" className="w-full h-auto object-cover mb-4 rounded-lg" />
          
          </div>
        </div>
          </div>
        </div>
      </motion.section>

       <motion.section

   initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }} className="w-full px-6 md:px-20 pb-[100px]">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left: Services Provided */}
          <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">
            <h3 className="text-4xl font-light leading-snug">The Result</h3>
<p> Glowora&rsquo;s brand journey went from fragmented and generic to cohesive and premium. Whether viewed on a smartphone, in a customer&rsquo;s hand, or on a 20-foot billboard — the brand now tells one consistent story:</p>
       <p className='text-3xl font-light mt-5'>
          Glowora is a modern beauty brand that inspires confidence through clarity, quality, and design.
        </p>
        <Link href="#" className="inline-flex items-center gap-3 arrow-btn-black mt-5">
              View Live Website <img src="/arrow_right_white.svg" alt="arrow" />
            </Link>

          </div>
          {/* Right: Case Study Content */}
          <div className="md:w-[60%] w-full space-y-6">
             <figure className="w-full">
            <img className='rounded-lg' src="/images/glowora/image2.jpeg" />
          </figure>  
          </div>
        </div>
      </motion.section>






      

      <Footer />
    </>
  );
}
