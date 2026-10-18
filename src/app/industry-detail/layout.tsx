import { hiddenPageMetadata } from "@/lib/seo";

export const metadata = hiddenPageMetadata("Industry");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
