import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return pageMetadata("branding", "/services/branding", {
    title: "Branding",
    description:
      "Brand strategy, identity design and brand guidelines from Brand Alchemy, a New Zealand branding agency.",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
