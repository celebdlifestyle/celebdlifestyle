"use client";
import {
  ImageCarousel,
  CollectionsCarousel,
  ProductCarousel,
} from "@/components/shop/Carousels";
import { ShopMen } from "@/components/shop/Banner";
import { ShopWomen } from "@/components/shop/Banner";
import ShopByLooks from "@/components/shop/ShopByLooks";
import { NewHereBanner } from "@/components/shop/Banner";
import { useEffect } from "react";
import { useProductStore } from "@/store/product.store";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Homepage() {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const trendingProducts = products.filter((p) => p.isTrending);
  const bestSellingProducts = products.filter((p) => p.isBestSelling);
  const celebdGoldPlatedProducts = products.filter((p) => p.isCelebdGoldPlated);
  const celebdSilverPlatedProducts = products.filter(
    (p) => p.isCelebdSilverPlated,
  );
  const celebdWhitePlatedProducts = products.filter(
    (p) => p.isCelebdWhitePlated,
  );
  const celebdBlackPlatedProducts = products.filter(
    (p) => p.isCelebdBlackPlated,
  );

  return (
    <div className="min-h-screen pb-5 ">
      <ImageCarousel />

      {/* TRENDING */}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-widest">
            TRENDING
          </h1>
          <Link
            href={"/products/trending"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ProductCarousel products={trendingProducts} loading={loading} />
      </div>

      {/* ShopMen Banner */}

      <ShopWomen />

      {/* SHADES OF CELEBD - Categories*/}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-widest">
            SHADES OF CELEBD
          </h1>
          <Link
            href={"/collections"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <CollectionsCarousel />
      </div>

      {/* BEST SELLINGS */}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-widest">
            BEST SELLINGS
          </h1>
          <Link
            href={"/products/bestsellings"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ProductCarousel products={bestSellingProducts} loading={loading} />
      </div>

      {/* ShopMen Banner */}

      <ShopMen />

      {/* Black Plated */}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-wide md:tracking-widest">
            CELEBD BLACK PLATED
          </h1>
          <Link
            href={"/products/celebd-black-plated"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ProductCarousel
          products={celebdBlackPlatedProducts}
          loading={loading}
        />
      </div>

      {/* Gold Plated */}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-wide md:tracking-widest">
            CELEBD GOLD PLATED
          </h1>
          <Link
            href={"/products/celebd-gold-plated"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ProductCarousel
          products={celebdGoldPlatedProducts}
          loading={loading}
        />
      </div>

      {/* Shop by look - links not working */}

      <ShopByLooks />

      {/* WHITE Plated */}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-wide md:tracking-widest">
            CELEBD WHITE PLATED
          </h1>
          <Link
            href={"/products/celebd-white-plated"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ProductCarousel
          products={celebdWhitePlatedProducts}
          loading={loading}
        />
      </div>

      {/* SILVER Plated */}

      <div className="mx-3 md:px-5">
        <div className="my-8 flex items-center justify-between gap-3">
          <h1 className="text-lg sm:text-lg font-semibold tracking-wide md:tracking-widest">
            CELEBD SILVER PLATED
          </h1>
          <Link
            href={"/products/celebd-silver-plated"}
            className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
          >
            <span>SHOW MORE</span>
            <ChevronRight size={14} />
          </Link>
        </div>
        <ProductCarousel
          products={celebdSilverPlatedProducts}
          loading={loading}
        />
      </div>
      <NewHereBanner />
    </div>
  );
}
