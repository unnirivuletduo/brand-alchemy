import { motion } from "framer-motion";

// Image animation variant with delay based on index
const imageVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const images = [
  "/images/webdevelopment.jpg",
  "/images/softwaredevelopment.jpg",
];

const objectives = [
  {
    title: "Enhance Design & Visual Consistency",
    description:
      "The key focus was laid on implementing the same colour scheme, fonts, and visual appeal of the Turtle Wax global website with specific improvements in the design elements for high end user experience. It also demanded content and image modifications to resonate with the offerings and products of the brand.",
  },
  {
    title: "Responsive Design",
    description:
      "A flexible layout that adapts according to the screen size is essential for an optimised browsing experience. To ensure that the Turtle Wax website works well across different devices and configurations, the client proposed the need for a responsive web design.",
  },
  {
    title: "Integration of ‘Book a Car Care’ Service",
    description:
      "The client wished to integrate the ‘book a car care’ option to the website so that the users can schedule care care services via online. This was keenly focused on making the lead generation simpler.",
  },
];

export default function ObjectiveSection() {
  return (
    <section className="w-full px-6 md:px-20 pb-[100px]">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-light mb-6"
      >
        Challenges
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mb-16"
      >
        The key objective of Turtle Wax was to make an overall revamp to the website
        without a compromise in the website quality. The client wanted a customised
        approach towards integrating the services to incorporate better design elements,
        adopt responsive design, and facilitate improved functionality.
      </motion.p>

      {/* Objectives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {objectives.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-normal text-lg">{item.title}</h3>
            <p className="leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[80px]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
            className="w-full overflow-hidden"
          >
            <img
              src={src}
              alt={`grid-image-${i}`}
              className="w-full h-[480px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
