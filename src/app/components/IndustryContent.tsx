"use client";

import { motion } from "framer-motion";

export default function IndustryContent({ post }: any) {
  return (
    <motion.section
      className="w-full px-6 md:px-20 py-[100px]"
      initial="hidden"
      whileInView="visible"
    >
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </motion.section>
  );
}
