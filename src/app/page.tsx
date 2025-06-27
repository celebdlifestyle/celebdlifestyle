"use client";
import {
  ImageCarousel,
  CollectionsCarousel,
  ProductCarousel,
} from "@/components/MyCarousels";
import { Products, FinishingTouches } from "@/app/data";
import Banner from "@/components/Banner";
import CollectionBanner from "@/components/CollectionBanner";
import NewHere from "@/components/NewHere";

export default function Homepage() {
  return (
    <div className="min-h-screen pb-5">
      <ImageCarousel />

      <div className="mx-3">
        <h1 className="gap-5 mx-6 my-8 text-lg font-semibold tracking-widest">
          TRENDING NOW
        </h1>
        <CollectionsCarousel />
      </div>

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-lg font-semibold tracking-widest">
          SHADES OF CELEBD
        </h1>
        <ProductCarousel products={Products} />
      </div>

      <Banner />

      <div className="mx-3">
        <h1 className="gap-5 mx-6 my-8 text-lg font-semibold tracking-widest">
          SHOP BY CATEGORIES
        </h1>
        <CollectionsCarousel />
      </div>

      <CollectionBanner />

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-2xl font-semibold ">
          FINISHING TOUCHES
        </h1>
        <ProductCarousel products={FinishingTouches} />
      </div>

      <NewHere />
    </div>
  );
}
