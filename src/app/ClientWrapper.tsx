"use client";

import { useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const oldRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      try {
        return oldRemoveChild.call(this, child);
      } catch {
        return child; // just ignore errors
      }
    };
  }, []);

  return <>{children}</>;
}
