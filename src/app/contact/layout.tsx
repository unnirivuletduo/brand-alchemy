import { pageMetadata } from "@/lib/seo";
import { PageSchema } from "@/app/components/JsonLd";

export function generateMetadata() {
  return pageMetadata("contact", "/contact", {
    title: "Contact Us",
    description:
      "Get in touch with Brand Alchemy to talk about your brand, website or marketing project.",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema slug="contact" path="/contact" />
      {children}
    </>
  );
}
