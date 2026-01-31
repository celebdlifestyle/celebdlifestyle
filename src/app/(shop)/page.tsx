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

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 lg:h-80 rounded-md bg-zinc-800" />
      <div className="mt-3 mx-auto w-24 h-4 rounded-full bg-zinc-800" />
    </div>
  );
}

function ProductSkeletonRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default function Homepage() {
  const router = useRouter();
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const trendingProducts = products.filter((p) => p.istrending);
  const bestSellingProducts = products.filter((p) => p.isbestselling);

  return (
    <div className="min-h-screen pb-5">
      <ImageCarousel />

      {/* TRENDING */}
      <div className="mx-3">
        <h1 className="gap-5 my-8 text-lg font-semibold tracking-widest flex justify-between">
          <span>TRENDING</span>
          <span
            onClick={() => router.push("/products")}
            className="cursor-pointer hover:border-b-1 border-b-white flex justify-between"
          >
            SHOW MORE →
          </span>
        </h1>
        {loading ? (
          <ProductSkeletonRow />
        ) : (
          <ProductCarousel products={trendingProducts} />
        )}
      </div>

      {/* SHADES OF CELEBD */}
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

      {/* BEST SELLINGS */}
      <div className="mx-3">
        <h1 className="gap-5 my-8 text-2xl font-semibold">BEST SELLINGS</h1>
        {loading ? (
          <ProductSkeletonRow />
        ) : (
          <ProductCarousel products={bestSellingProducts} />
        )}
      </div>

      <Banner />
      <ShopByLooks />
      <NewHereBanner />
    </div>
  );
}
