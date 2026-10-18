import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return pageMetadata("about", "/about", {
    title: "About Us",
    description:
      "Meet the team behind Brand Alchemy, a creative design and branding agency in New Zealand, and learn how we build brands with purpose.",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
