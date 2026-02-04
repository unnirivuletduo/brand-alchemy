import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wordpress";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ REQUIRED in Next 15
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-light">404 | Blog post not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/placeholder.jpg";

  return (
    <>
      <Header />

      <div className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={post.title.rendered}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div
          className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-20 py-16">
        <div className="text-gray-500 text-sm mb-6">
          {new Date(post.date).toDateString()}
        </div>

        <article
  className="
    blog-content
    prose prose-lg max-w-none

    [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
    [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
    [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2
    [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mt-6 [&_h5]:mb-2
    [&_h6]:text-base [&_h6]:font-semibold [&_h6]:mt-6 [&_h6]:mb-2

    [&_p]:leading-8 [&_p]:mb-5 [&_p]:text-gray-700

    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6
    [&_li]:mb-2

    [&_strong]:font-semibold [&_strong]:text-black

    [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800

    [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300
    [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-600
    [&_blockquote]:my-8

    [&_img]:rounded-xl [&_img]:my-8 [&_img]:shadow-md

    [&_video]:w-full [&_video]:rounded-xl [&_video]:my-8
  "
  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
/>

      </div>

      <Footer />
    </>
  );
}
