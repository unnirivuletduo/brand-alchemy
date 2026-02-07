"use client";

import Image from "next/image";

interface Props {
  data: {
    title: string;
    content: string;
    image: string | null;
    subTitle?: string;
    subContent?: string;
    subTitle2?: string;
    subContent2?: string;
    subTitle3?: string;
    subContent3?: string;
  };
}

export default function ProductMockupsSection({ data }: Props) {
  if (!data) return null;

  return (
    <section className="w-full px-6 md:px-20 pb-[100px]">
      <div className="flex flex-col md:flex-row md:gap-12">

        {/* Left Image */}
        {data.image && (
          <div className="md:w-[60%] w-full">
            <Image
              width={1000}
              height={1000}
              src={data.image}
              className="w-full h-auto object-cover rounded-lg"
              alt={data.title}
            />
          </div>
        )}

        {/* Right Text */}
        <div className="md:w-[40%] w-full flex flex-col space-y-6 mb-10 md:mb-0">

          <h3 className="text-4xl font-light leading-snug">
            {data.title}
          </h3>

          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {data.subTitle && (
            <>
              <h4 className="text-2xl font-light leading-snug mb-4">
                {data.subTitle}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: data.subContent || "" }}
              />
            </>
          )}

          {data.subTitle2 && (
            <>
              <h4 className="text-2xl font-light leading-snug mb-4">
                {data.subTitle2}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: data.subContent2 || "" }}
              />
            </>
          )}

          {data.subTitle3 && (
            <>
              <h4 className="text-2xl font-light leading-snug mb-4">
                {data.subTitle3}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: data.subContent3 || "" }}
              />
            </>
          )}

        </div>

      </div>
    </section>
  );
}
