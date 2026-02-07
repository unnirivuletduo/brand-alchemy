"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function IndustryOverviewSection({
  overview,
  liveSite,
}: {
  overview?: {
    title?: string;
    content?: string;
    services_provided?: string; // ✅ added this
  } | null;
  liveSite?: {
    title?: string;
    url?: string;
    target?: string;
  } | null;
}) {
  if (!overview) return null;

  // ✅ Move services logic INSIDE component
  const services =
    overview.services_provided
      ?.split(",")
      .map((service) => service.trim())
      .filter(Boolean) || [];

  return (
    <motion.section
      className="w-full px-6 md:px-20 py-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row md:gap-12">

        {/* LEFT SIDE */}
        <motion.div
          className="md:w-[35%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl font-light"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Services Provided
          </motion.h2>

          <div className="flex flex-wrap gap-3">
            {services.map((service, i) => (
              <span
                key={i}
                className="border border-black px-4 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="md:w-[65%] w-full space-y-6"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          {overview.title && (
            <motion.h3
              className="text-3xl font-light leading-snug"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              {overview.title}
            </motion.h3>
          )}

          {overview.content && (
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              dangerouslySetInnerHTML={{ __html: overview.content }}
            />
          )}

          {liveSite?.url && (
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
            >
              <Link
                href={liveSite.url}
                target={liveSite.target || "_self"}
                className="inline-flex items-center gap-3 arrow-btn-black"
              >
                {liveSite.title || "View Live Website"}
                <Image
                  width={24}
                  height={24}
                  src="/arrow_right_white.svg"
                  alt="arrow"
                />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
