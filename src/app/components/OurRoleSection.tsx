"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurRoleSection({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image?: string | null;
}) {
  if (!title && !content) return null;

  return (
    <motion.section
      className="w-full px-6 md:px-20 pb-[100px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:gap-12">

        {/* Left */}
        <div className="md:w-[40%] w-full space-y-6 mb-10 md:mb-0">
          <h3 className="text-4xl font-light">{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Right */}
        {image && (
          <div className="md:w-[60%] w-full">
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </motion.section>
  );
}
