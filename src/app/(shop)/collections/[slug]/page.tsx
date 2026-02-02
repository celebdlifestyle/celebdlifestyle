"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useProductStore } from "@/store/product.store";
import ProductCard from "@/components/shop/ProductCard";
import { ProductCardSkeleton } from "@/components/shop/Skeletons";
import { ArrowLeft, Package } from "lucide-react";
import Link from "next/link";

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const { products, loading, fetchProducts } = useProductStore();
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    fetchProducts();

    // Minimum loading time of 500ms
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [fetchProducts]);

  // Filter products whose categorySlug matches the [id] route param
  const collectionProducts = useMemo(
    () => products.filter((p) => p.categorySlug === slug),
    [products, slug],
  );

  // Derive the display name from the first matched product's category field,
  // fall back to the slug (capitalised) if nothing matched yet
  const categoryName =
    collectionProducts[0]?.category ||
    slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

  // Show loading only if either API is loading OR minimum time hasn't passed
  const isLoading = loading || !minLoadingComplete;

  // ── Empty state ──────────────────────────────────────────────────────────
  if (!isLoading && collectionProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f0f14] flex flex-col items-center justify-center gap-4 px-4">
        <Package className="w-16 h-16 text-gray-600" />
        <h2 className="text-xl font-semibold text-white">
          No products in this collection
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-sm">
          This collection doesn't have any products yet. Check back soon or
          browse other collections.
        </p>
        <Link
          href={"/collections"}
          className="mt-2 flex items-center gap-2 px-5 py-2.5 text-sm text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Collections
        </Link>
      </div>
    );
  }

  // ── Main page ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0f0f14]">
      {/* Hero / Header */}
      <div className="relative w-full bg-[#13131a] border-b border-white/5">
        {/* Subtle top-image banner using the first product's image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={
              collectionProducts[0]?.images?.[0] ||
              collectionProducts[0]?.thumbnail ||
              ""
            }
            alt=""
            className="w-full h-full object-cover opacity-10 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#13131a]/40 via-[#13131a]/80 to-[#13131a]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
          {/* Back link */}
          <Link
            href={"/collections"}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-400 transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Collections
          </Link>

          <h1 className="text-4xl font-bold text-white">{categoryName}</h1>
          <p className="mt-1.5 text-gray-400 text-sm">
            {collectionProducts.length}{" "}
            {collectionProducts.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {collectionProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
