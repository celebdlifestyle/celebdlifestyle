"use client";

import { useEffect } from "react";
import { useCategoryStore } from "@/store/categories.store";
import CategoryCard from "@/components/shop/CategoryCard";
import { Loader2 } from "lucide-react";

export default function CollectionsPage() {
  const { categories, fetchCategories, loading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
          <p className="text-gray-400">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Shop by <span className="text-orange-500">Category</span>
          </h1>
          <div className="w-24 h-1 mx-auto mt-3 bg-orange-500 rounded-full" />
          {categories.length > 0 && (
            <p className="text-gray-500 text-sm mt-3">
              {categories.length} categor{categories.length !== 1 ? "ies" : "y"}{" "}
              available
            </p>
          )}
        </div>

        {/* Categories Grid */}
        {categories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <p className="text-gray-500 text-lg">
              No categories available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {categories.map((cat) => (
              <CategoryCard
                key={cat._id}
                _id={cat._id}
                image={cat.image}
                title={cat.name}
                slug={cat.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
