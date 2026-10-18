import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return pageMetadata("contact", "/contact", {
    title: "Contact Us",
    description:
      "Get in touch with Brand Alchemy to talk about your brand, website or marketing project.",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
