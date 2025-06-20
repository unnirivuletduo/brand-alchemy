import { motion } from "framer-motion";

export default function ProductFinderFeature() {
  return (
    <section className="w-full px-6 md:px-20 pb-[100px]">
      <div className="max-w-5xl mx-auto ">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base font-light text-black mb-4"
        >
          Features
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-light mb-6"
        >
          Product Finder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="tleading-relaxed"
        >
          We helped the client organise the products in the ecommerce website into relevant
          categories to facilitate navigation. With the product finder section, we could also
          display high-quality images and use concise descriptions for each product while
          maintaining uniformity. Besides this, user-friendly filters and sorting options were
          also added to enable product discovery.
        </motion.p>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-[480px] overflow-hidden rounded-lg pt-[80px]"
        >
          <img
            src="/images/printing.jpg"
            alt="Product Finder"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
