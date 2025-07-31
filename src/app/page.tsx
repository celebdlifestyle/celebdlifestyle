"use client";
import {
  ImageCarousel,
  CollectionsCarousel,
  ProductCarousel,
} from "@/components/Carousels";
import { Products, FinishingTouches } from "@/assets/data";
import Banner from "@/components/Banner";
import ShopByLooks from "@/components/ShopByLooks";
import { NewHereBanner } from "@/components/Banner";

export default function Homepage() {
  return (
    <div className="min-h-screen pb-5">
      <ImageCarousel />

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-lg font-semibold tracking-widest">
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

      <ShopByLooks />

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-2xl font-semibold ">
          FINISHING TOUCHES
        </h1>
        <ProductCarousel products={FinishingTouches} />
      </div>

      <NewHereBanner />
    </div>
  );
}
