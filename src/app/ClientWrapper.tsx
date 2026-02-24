// app/ClientWrapper.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./utils/patchRemoveChild"; // keep your patch import here (optional)

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "root";

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname]);

  // The key forces React to remount children on route change
  return (
    <div key={pathname} className="ba-wrapper">
      {children}
    </div>
  );
}