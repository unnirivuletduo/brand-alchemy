import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPosts } from '@/lib/wordpress';

const title = 'Insights & Articles';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />

      {/* Banner (unchanged) */}
      <div className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={600}
            src="/images/industry-banner.jpg"
            alt="Industry Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center">
          {title}
        </div>
      </div>

      {/* Blog Posts */}
      <section className="px-6 lg:px-24 py-16 bg-white text-gray-800">
        <h1 className="text-4xl font-light mb-10 text-center">
          Insights & Articles
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post: any) => {
            const image =
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              '/images/placeholder.jpg';

            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="block"
              >
                <div className="border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <Image
                    className="w-full h-[300px] object-cover"
                    width={1000}
                    height={1000}
                    alt={post.title.rendered}
                    src={image}
                  />

                  <footer className="p-6">
                    <h2
                      className="text-2xl font-medium mb-2"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />
                    <p className="text-gray-500 text-sm mb-4">
                      {new Date(post.date).toDateString()}
                    </p>
                    <div
                      className="text-gray-600 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                    <span className="inline-flex items-center gap-3 arrow-btn-black">
                      Read More
                    </span>
                  </footer>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
