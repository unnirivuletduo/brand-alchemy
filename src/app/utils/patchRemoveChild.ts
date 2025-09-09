"use client";

if (typeof window !== "undefined") {
  const oldRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    try {
      return oldRemoveChild.call(this, child);
    } catch (e) {
      console.error("removeChild error on:", this, child);
      return child; // safe fallback instead of throwing
    }
  };
}
