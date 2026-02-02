"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "@/store/product.store";
import ProductCard from "@/components/shop/ProductCard";
import { ProductCardSkeleton } from "@/components/shop/Skeletons";

export default function ProductsPage() {
  const { products, loading, fetchProducts } = useProductStore();
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    fetchProducts();

    // Minimum loading time of 2 seconds
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [fetchProducts]);

  // Show loading only if either API is loading OR minimum time hasn't passed
  const isLoading = loading || !minLoadingComplete;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-5 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            All <span className="text-orange-500">Products</span>
          </h1>
          <div className="w-24 h-1 mx-auto mt-3 bg-orange-500 rounded-full" />
          {!isLoading && products.length > 0 && (
            <p className="text-gray-500 text-sm mt-3">
              {products.length} product{products.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          )}
        </div>

        {/* Loading State - Skeleton Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {/* No Products State */}
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24">
                <p className="text-gray-500 text-lg">
                  No products available yet.
                </p>
              </div>
            ) : (
              /* Product Grid */
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
