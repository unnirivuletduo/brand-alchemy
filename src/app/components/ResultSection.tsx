"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    title: string;
    content: string;
    images: string[];
    websiteLink: {
      title: string;
      url: string;
      target?: string;
    };
  };
}

export default function ResultSection({ data }: Props) {
  if (!data) return null;

  return (
    <section className="w-full px-6 md:px-20 pb-[100px]">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-light mb-6">
          {data.title}
        </h2>

        <div
          className="mb-6"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        {/* Images Grid */}
       <div
  className="p-5 pb-1 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg mt-5"
  style={{ backgroundColor: "#b04f84" }}
>
  {/* Left Column */}
  <div className="w-full overflow-hidden">
    {data.images[0] && (
      <Image
        width={1000}
        height={1000}
        src={data.images[0]}
        className="w-full h-auto object-cover mb-4 rounded-lg"
        alt="Result Image 1"
      />
    )}

    {data.images[1] && (
      <Image
        width={1000}
        height={1000}
        src={data.images[1]}
        className="w-full h-auto object-cover mb-4 rounded-lg"
        alt="Result Image 2"
      />
    )}
  </div>

  {/* Right Column */}
  <div className="w-full overflow-hidden">
    {data.images[2] && (
      <Image
        width={1000}
        height={1000}
        src={data.images[2]}
        className="w-full h-auto object-cover mb-4 rounded-lg"
        alt="Result Image 3"
      />
    )}

    {data.images[3] && (
      <Image
        width={1000}
        height={1000}
        src={data.images[3]}
        className="w-full h-auto object-cover mb-4 rounded-lg"
        alt="Result Image 4"
      />
    )}

    {data.websiteLink?.url && (
      <Link
        href={data.websiteLink.url}
        target={data.websiteLink.target}
        className="inline-flex items-center gap-3 arrow-btn-white text-white mt-5"
      >
        {data.websiteLink.title || "View Live Website"}
        <Image
          width={24}
          height={24}
          src="/arrow_right_white.svg"
          alt="arrow"
        />
      </Link>
    )}
  </div>
</div>


      </div>
    </section>
  );
}
