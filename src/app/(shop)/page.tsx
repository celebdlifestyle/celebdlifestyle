"use client";
import {
  ImageCarousel,
  CollectionsCarousel,
  ProductCarousel,
} from "@/components/shop/Carousels";
import Banner from "@/components/shop/Banner";
import ShopByLooks from "@/components/shop/ShopByLooks";
import { NewHereBanner } from "@/components/shop/Banner";
import { useEffect } from "react";
import { useProductStore } from "@/store/product.store";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);

  const trendingProducts = products.filter((p) => p.istrending);
  const bestSellingProducts = products.filter((p) => p.isbestselling);

  return (
    <div className="min-h-screen pb-5">
      <ImageCarousel />

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-lg font-semibold tracking-widest">
          TRENDING NOW
        </h1>
        <ProductCarousel products={trendingProducts} />
      </div>

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-lg font-semibold tracking-widest flex justify-between">
          <span>SHADES OF CELEBD</span>
          <span
            onClick={() => router.push("/collections")}
            className="cursor-pointer hover:border-b-1 border-b-white flex justify-between"
          >
            SHOW MORE →
          </span>
        </h1>
        <CollectionsCarousel />
      </div>

      <div className="mx-3">
        <h1 className="gap-5 my-8 text-2xl font-semibold ">BEST SELLINGS</h1>
        <ProductCarousel products={bestSellingProducts} />
      </div>

      <Banner />

      {/* <div className="mx-3">
        <span>
          <h1 className="gap-5 mx-6 my-8 text-lg font-semibold tracking-widest flex justify-between">
            <span> SHOP BY CATEGORIES</span>
            <span
              onClick={() => router.push("/collections")}
              className="cursor-pointer hover:border-b-1 border-b-white"
            >
              SHOW MORE →
            </span>
          </h1>
        </span>
        <CollectionsCarousel />
      </div> */}

      <ShopByLooks />

      <NewHereBanner />
    </div>
  );
}
