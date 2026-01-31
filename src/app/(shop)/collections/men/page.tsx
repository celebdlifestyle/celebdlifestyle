"use client";

import { useEffect, useMemo } from "react";
import { useProductStore } from "@/store/product.store";
import ProductCard from "@/components/shop/ProductCard";

export default function Men() {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const menProducts = useMemo(() => {
    return products.filter((p) => p.gender === "men" || p.gender === "unisex");
  }, [products]);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-widest mb-8">
        MEN’S COLLECTION
      </h1>

      {menProducts.length === 0 && (
        <p className="text-gray-400">No products found.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
