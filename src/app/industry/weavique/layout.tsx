import { hiddenPageMetadata } from "@/lib/seo";

export const metadata = hiddenPageMetadata("Weavique");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
