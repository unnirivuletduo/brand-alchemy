"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Industry } from "@/lib/getIndustries";

export default function IndustrySection({
  industries,
}: {
  industries: Industry[];
}) {
  const [selected, setSelected] = useState<Industry | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverY, setHoverY] = useState<number>(0);

  const handleSelectIndustry = async (item: Industry) => {
    setSelected(item);

    const res = await fetch(`/api/industry-posts?id=${item.id}`);
    const data = await res.json();

    setPosts(data);
  };

  const handleMouseMove = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setHovered(index);
    setHoverY(y);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    setHoverY(0);
  };

  return (
    <div className="w-full min-h-screen bg-white py-20 px-4 flex justify-center relative">
      <div className="ba-container z-10">
        <p className="text-center max-w-full text-[clamp(1.2rem,2vw,2rem)] w-[1000] ml-auto mr-auto font-light mb-10">
          We work with a diverse range of industries to deliver digital
          solutions that solve real problems and drive growth.
        </p>

        {industries.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleSelectIndustry(item)}  // ✅ important
            className="border-b border-black py-6 cursor-pointer"
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center justify-between text-[clamp(1.5rem,3vw,4rem)] font-light group gap-4 relative">
              <span className="transition-all duration-200 group-hover:pl-2">
                {item.name}
              </span>

              <div className="w-[380px] h-[80px] absolute top-1/2 left-1/2 -translate-y-2/2">
                <AnimatePresence>
                  {hovered === index && (
                    <motion.img
                      key={item.name}
                      src={item.image}
                      alt={item.name}
                      initial={{ opacity: 0, y: hoverY, rotate: 3 }}
                      animate={{ opacity: 1, y: hoverY, rotate: 3 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="absolute inset-0 w-[380px] h-[280px] object-cover rounded-md shadow-md"
                    />
                  )}
                </AnimatePresence>
              </div>

              <span className="text-xl">→</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="popup"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed right-0 top-0 h-full w-full lg:w-1/2 bg-white shadow-2xl z-[1000] px-6 md:px-10 py-10 md:py-12 overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 underline"
            >
              Close
            </button>

            <Image
              width={1000}
              height={1000}
              src={selected.image}
              alt={selected.name}
              className="w-full h-[clamp(300px,50vh,600px)] object-cover rounded-xl mb-6"
            />

            <h2 className="text-3xl font-light mb-4">
              {selected.name}
            </h2>

            <p>{selected.description}</p>

            {posts.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-light mb-4">
                  Brands We’ve Worked With
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {posts.map((post, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-sm"
                    >
                      <Image
                        width={1000}
                        height={1000}
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-2 text-center text-black">
                        <Link href={`/industry/${post.slug}`}>
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
