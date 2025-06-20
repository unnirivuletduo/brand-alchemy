import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function CaseStudySection() {
  return (
    <section className="w-full px-6 md:px-20 py-[100px]">
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Left: Services Provided */}
        <motion.div
          {...fadeInUp}
          className="md:w-[35%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
        >
          <h2 className="text-2xl font-light">Services Provided</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "UI/UX Design",
              "Web Development",
              "E-commerce",
              "Content Management System (CMS)",
            ].map((service, i) => (
              <span
                key={i}
                className="border border-black px-4 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Case Study Content */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="md:w-[65%] w-full space-y-6"
        >
          <h3 className="text-3xl font-light leading-snug">
            Giving Turtle Wax an Incredible Digital Shift with a Complete Website Revamp
          </h3>
          <p>
            Turtle Wax wanted a comprehensive ecommerce website revamp for its Indian
            website. The core focus of the website was to portray and list the Turtle Wax
            products along with incorporating a ‘Book a Car Care’ service feature and lead
            collection module. The project aimed at a complete Shopify ecommerce website
            revamp to build an engaging, modern, and well-optimised website. Our team at
            WAC did extensive competitor and marketing research to help the website get a
            booking system that organises the users’ needs with a highly promising user
            experience.
          </p>


          {/* Link */}
         
          <Link href="#" className="inline-flex items-center gap-3 arrow-btn-black">
                View Live Website <img src="/arrow_right_white.svg" alt="arrow" />
              </Link>
        </motion.div>
      </div>
    </section>
  );
}
