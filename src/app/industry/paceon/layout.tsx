import { hiddenPageMetadata } from "@/lib/seo";

export const metadata = hiddenPageMetadata("Paceon");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
