"use client";

import { useEffect } from "react";
import { useCategoryStore } from "@/store/categories.store";
import CategoryCard from "@/components/shop/CategoryCard";

export default function CollectionsPage() {
  const { categories, fetchCategories, loading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <div className="p-6">Loading categories...</div>;

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-widest mb-8">
        SHOP BY CATEGORY
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
    </div>
  );
}
