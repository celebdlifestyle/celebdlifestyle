"use client";

import { useEffect } from "react";

export default function ImageGuard() {
  useEffect(() => {
    const contextHandler = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    const dragHandler = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", contextHandler);
    document.addEventListener("dragstart", dragHandler);

    return () => {
      document.removeEventListener("contextmenu", contextHandler);
      document.removeEventListener("dragstart", dragHandler);
    };
  }, []);

  return null;
}
