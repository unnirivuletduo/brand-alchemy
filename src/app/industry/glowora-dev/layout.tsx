import { hiddenPageMetadata } from "@/lib/seo";

export const metadata = hiddenPageMetadata("Glowora");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
