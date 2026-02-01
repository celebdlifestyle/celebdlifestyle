"use client";

import { X, Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useProductStore } from "@/store/product.store";
import Image from "next/image";
import Link from "next/link";

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    if (isOpen) {
      fetchProducts();
    }
  }, [isOpen, fetchProducts]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query),
    );
  }, [products, searchQuery]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Search Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-black border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <h2 className="text-xl font-semibold text-white">
              Search Products
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                autoFocus
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto p-4">
            {!searchQuery.trim() ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Search className="w-16 h-16 text-gray-600 mb-4" />
                <p className="text-gray-400 text-lg">Start typing to search</p>
                <p className="text-gray-600 text-sm mt-2">
                  Search by product name, description, or category
                </p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Search className="w-16 h-16 text-gray-600 mb-4" />
                <p className="text-gray-400 text-lg">No products found</p>
                <p className="text-gray-600 text-sm mt-2">
                  Try searching with different keywords
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-400 text-sm mb-4">
                  {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""} found
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product._id}
                      href={`/products/${product._id}`}
                      onClick={onClose}
                      className="group cursor-pointer"
                    >
                      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all">
                        {/* Product Image */}
                        <div className="relative aspect-square bg-zinc-800">
                          <Image
                            src={product.images[0] || "/placeholder.png"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="p-2">
                          <h3 className="text-white text-xs font-medium truncate mb-1">
                            {product.name}
                          </h3>
                          <p className="text-orange-500 text-xs font-semibold">
                            ₹{product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
