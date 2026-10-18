import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return pageMetadata("services", "/services", {
    title: "Services",
    description:
      "Branding, web development, digital marketing, video and print services from Brand Alchemy, a creative agency in New Zealand.",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
