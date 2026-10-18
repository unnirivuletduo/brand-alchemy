import { pageMetadata } from "@/lib/seo";
import { PageSchema } from "@/app/components/JsonLd";

export function generateMetadata() {
  return pageMetadata("careers", "/careers", {
    title: "Careers",
    description:
      "Join Brand Alchemy. See open positions at our creative design and branding agency in New Zealand.",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema slug="careers" path="/careers" />
      {children}
    </>
  );
}
