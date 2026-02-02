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
import { ChevronRight } from "lucide-react";

export default function Homepage() {
  const router = useRouter();
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const trendingProducts = products.filter((p) => p.istrending);
  const bestSellingProducts = products.filter((p) => p.isbestselling);

  return (
    <div className="min-h-screen pb-5">
      <ImageCarousel />

      {/* TRENDING */}
      <div className="mx-3">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-widest">
            TRENDING
          </h1>
          <button
            onClick={() => router.push("/products")}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </button>
        </div>
        <ProductCarousel products={trendingProducts} loading={loading} />
      </div>

      {/* SHADES OF CELEBD */}
      <div className="mx-3">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-widest">
            SHADES OF CELEBD
          </h1>
          <button
            onClick={() => router.push("/collections")}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </button>
        </div>
        <CollectionsCarousel />
      </div>

      {/* BEST SELLINGS */}
      <div className="mx-3">
        <h1 className="my-8 text-xl sm:text-2xl font-semibold tracking-wide">
          BEST SELLINGS
        </h1>
        <ProductCarousel products={bestSellingProducts} loading={loading} />
      </div>

      <Banner />
      <ShopByLooks />
      <NewHereBanner />
    </div>
  );
}
