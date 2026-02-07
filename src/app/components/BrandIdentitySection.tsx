"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BrandIdentityProps {
  data: {
    title: string;
    content: string;
    image: string | null;
    subTitle?: string;
    subContent?: string;
    subTitle2?: string;
    subContent2?: string;
  };
}


export default function BrandIdentitySection({
  data,
}: BrandIdentityProps) {
  if (!data) return null;

  return (
    <motion.section
      className="w-full px-6 md:px-20 pb-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row md:gap-12">

        {/* Left: Image */}
        {data.image && (
          <motion.div
            className="md:w-[60%] w-full space-y-6"
          
            custom={0}
          >
            <motion.div
              className="rounded-lg"
   
              custom={1}
            >
              <motion.div
                className="w-full overflow-hidden"
   
                custom={3}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={data.image}
                  className="w-full h-auto object-cover rounded-lg"
                  alt={data.title || "Brand Identity Image"}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Right: Text Content */}
        <motion.div
          className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
   
          custom={4}
        >
          {data.title && (
            <motion.h3
              className="text-4xl font-light leading-snug"
    
              custom={5}
            >
              {data.title}
            </motion.h3>
          )}

          {data.content && (
            <motion.div
         
              custom={6}
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          )}

          {data.subTitle && (
            <motion.h4
              className="text-2xl font-light leading-snug mb-4"
         
              custom={7}
            >
              {data.subTitle}
            </motion.h4>
          )}

          {data.subContent && (
            <motion.div
    
              custom={8}
              dangerouslySetInnerHTML={{ __html: data.subContent }}
            />
          )}

          {data.subTitle2 && (
            <motion.h4
              className="text-2xl font-light leading-snug mb-4"
        
              custom={9}
            >
              {data.subTitle2}
            </motion.h4>
          )}

          {data.subContent2 && (
            <motion.div
         
              custom={10}
              dangerouslySetInnerHTML={{ __html: data.subContent2 }}
            />
          )}
        </motion.div>

      </div>
    </motion.section>
  );
}
