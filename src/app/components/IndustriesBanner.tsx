"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustryBanner({
  title,
  image,
  categories,
}: {
  title?: string;
  image?: string | null;
  categories?: string[];
}) {
  return (
    <div className="relative">
    <div className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]">

      <div className="absolute inset-0 z-0">
        {image && (
          <Image
            src={image}
            alt={title || "Industry banner"}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

     
      <div className="absolute bottom-10 w-full   left-0 text-2xl"><div className="ba-container"><p className="text-white  ">Industry</p><p className="text-white text-lg">
        {categories?.join(" / ")}
      </p>
      </div>
      </div>
    </div>

     <div className="absolute top-1/2 -translate-y-1/2 z-10 text-5xl font-light text-white w-full">
      <div className="ba-container">
        <h1 className="text-4xl md:text-6xl font-light pt-10 mx-auto leading-tight">{title}</h1>
      </div>
      </div>
      </div>


  );
}

