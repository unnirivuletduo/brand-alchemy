import { hiddenPageMetadata } from "@/lib/seo";

export const metadata = hiddenPageMetadata("Vitalwell");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
