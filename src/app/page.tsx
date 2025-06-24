"use client";
import { ImageCarousel, CollectionsCarousel } from "@/components/MyCarousels";

export default function Homepage() {
  return (
    <div className="min-h-[200vh]">
      <ImageCarousel />

      <div>
        <h1 className="text-lg font-semibold mx-6 my-8 gap-5 tracking-widest">
          SHADES OF CELEBD
        </h1>
        <CollectionsCarousel />
      </div>

      <div>
        <h1 className="text-lg font-semibold mx-6 my-8 gap-5 tracking-widest">
          SHOP BY CATEGORIES
        </h1>
        <CollectionsCarousel />
      </div>
    </div>
  );
}
