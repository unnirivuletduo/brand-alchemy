"use client";

import Image from "next/image";

interface Item {
  image: string | null;
  title: string;
  content: string;
}

interface Props {
  data: {
    title: string;
    content: string;
    items: Item[];
  };
}

export default function PrintPackagingSection({ data }: Props) {
  if (!data) return null;

  return (
    <section className="w-full px-6 md:px-20 pb-[100px]">
      <h3 className="text-3xl font-light leading-snug mb-4">
        {data.title}
      </h3>

      <div
        className="mb-10"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[40px]">
        {data.items.map((item, index) => (
          <div key={index} className="w-full overflow-hidden">
            {item.image && (
              <Image
                width={1000}
                height={1000}
                src={item.image}
                className="w-full h-auto object-cover rounded-lg mb-4"
                alt={item.title}
              />
            )}

            <h4 className="text-2xl font-light leading-snug mb-4">
              {item.title}
            </h4>

            <div
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
