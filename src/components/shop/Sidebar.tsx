"use client";

import { X, ChevronRight, ShieldUser } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProductStore } from "@/store/product.store";
import { useCategoryStore } from "@/store/categories.store";
import { useRouter } from "next/navigation";
import { useUser, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import type { Product } from "@/types/product.type";
import {
  SidebarCategoryCardSkeleton,
  SidebarProductCardSkeleton,
} from "./Skeletons";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ showMenu, setShowMenu }: MenuProps) {
  const router = useRouter();
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";
  const {
    products,
    fetchProducts,
    loading: productsLoading,
  } = useProductStore();
  const {
    categories,
    fetchCategories,
    loading: categoriesLoading,
  } = useCategoryStore();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();

    // Minimum loading time of 2 seconds
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [fetchProducts, fetchCategories]);

  useEffect(() => {
    let filtered = products;

    if (activeTab !== "all") {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === activeTab.toLowerCase(),
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredProducts(filtered);
  }, [activeTab, searchQuery, products]);

  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.category)),
  ).filter(Boolean);

  const handleCategoryClick = (categoryId: string, slug: string) => {
    router.push(`/collections/${slug}/${categoryId}`);
    setShowMenu(false);
  };

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId.toString()}`);
    setShowMenu(false);
  };

  // Show loading if either data is loading OR minimum time hasn't passed
  const isLoading = productsLoading || categoriesLoading || !minLoadingComplete;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full p-4 space-y-4 overflow-y-auto text-white bg-black">
        {/* Auth Section & Close Button  */}
        <div className="flex flex-row-reverse w-full gap-5  items-center border-b border-white/10 pb-2">
          {/* Close Button  */}
          <button
            onClick={() => setShowMenu(false)}
            className="  transition-colors mb-2  rounded-lg hover:bg-white/10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Auth Section  */}
          <div className="pt-2 pb-4  w-full">
            <SignedIn>
              <div className="flex items-center gap-3">
                {user?.imageUrl && (
                  <img
                    src={user.imageUrl}
                    alt={user.firstName || "User"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {user?.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="w-full h-10  bg-orange-500 text-white rounded-md font-bold text-sm cursor-pointer transition-all hover:bg-orange-600 active:bg-orange-700">
                  SIGN IN
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {isAdmin && (
          <button
            onClick={() => {
              router.push("/admin");
              setShowMenu(false);
            }}
            className="flex items-center justify-center gap-2 px-6 w-full h-14 rounded-md bg-zinc-900 text-white text-lg font-bold tracking-wide transition-all hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <ShieldUser size={25} />
              Admin Dashboard
            </span>
            <ChevronRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
        )}

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 text-white transition-all border rounded-lg bg-zinc-900 placeholder-white/50 border-white/10 focus:border-orange-500/50 focus:outline-none"
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-white/50" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3.5 text-white/50 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Results Count */}
        {searchQuery && !isLoading && (
          <div className="text-xs text-white/60">
            Found {filteredProducts.length} result
            {filteredProducts.length !== 1 ? "s" : ""}
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div
            className="w-full mb-4 overflow-x-auto scrollbar-hide overscroll-x-none touch-pan-x"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            <TabsList className="inline-flex min-w-full text-white rounded-lg bg-zinc-900 h-auto p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white tracking-widest px-4 py-2 rounded-md transition-all"
              >
                ALL
              </TabsTrigger>
              {!isLoading &&
                uniqueCategories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat.toLowerCase()}
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white tracking-widest px-4 py-2 rounded-md transition-all whitespace-nowrap"
                  >
                    {cat.toUpperCase()}
                  </TabsTrigger>
                ))}
            </TabsList>
          </div>

          {/* Category/Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            {isLoading ? (
              // Loading State - Show Skeletons
              <>
                {activeTab === "all" && !searchQuery
                  ? // Category Skeletons
                    Array.from({ length: 8 }).map((_, index) => (
                      <SidebarCategoryCardSkeleton key={index} />
                    ))
                  : // Product Skeletons
                    Array.from({ length: 6 }).map((_, index) => (
                      <SidebarProductCardSkeleton key={index} />
                    ))}
              </>
            ) : (
              <>
                {activeTab === "all" && !searchQuery ? (
                  categories.length === 0 ? (
                    <div className="col-span-2 py-12 text-center">
                      <p className="text-white/60">No categories available</p>
                    </div>
                  ) : (
                    categories.slice(0, 8).map((category) => (
                      <button
                        key={category._id}
                        onClick={() =>
                          handleCategoryClick(category._id, category.slug)
                        }
                        className="space-y-2 text-left transition-transform hover:scale-105"
                      >
                        <div className="relative w-full overflow-hidden rounded-lg h-28">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-2">
                            <div className="text-xs font-bold text-white">
                              {category.name}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))
                  )
                ) : filteredProducts.length === 0 ? (
                  <div className="col-span-2 py-12 text-center">
                    <p className="text-white/60">
                      {searchQuery
                        ? "No products found matching your search"
                        : "No products in this category"}
                    </p>
                  </div>
                ) : (
                  filteredProducts.slice(0, 6).map((product) => (
                    <button
                      key={product._id}
                      onClick={() => handleProductClick(product._id)}
                      className="space-y-2 text-left transition-transform hover:scale-105"
                    >
                      <div className="relative w-full overflow-hidden rounded-lg h-28">
                        <Image
                          src={
                            product.images[0] ||
                            "https://res.cloudinary.com/dhydrnckd/image/upload/v1769857248/Placeholder_m6whpi.png"
                          }
                          alt={product.name}
                          fill
                          className="object-cover transition-transform hover:scale-110"
                        />
                        {product.stock === 0 && (
                          <div className="absolute top-2 right-2 px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-white line-clamp-1">
                          {product.name}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-orange-400">
                            ₹{product.price.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-white/50">
                            {product.category}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </>
            )}
          </div>
        </Tabs>

        {/* Bottom Links */}
        <div className="pt-4 mt-2 border-t border-white/10 space-y-1">
          <button
            onClick={() => {
              router.push("/collections");
              setShowMenu(false);
            }}
            className="flex items-center justify-center gap-2 px-6 w-full h-10 rounded-md bg-zinc-900 text-white text-md font-semibold tracking-wide transition-all hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer"
          >
            <span>All Collections</span>
            <ChevronRight size={14} />
          </button>

          <button
            onClick={() => {
              router.push("/products");
              setShowMenu(false);
            }}
            className="flex items-center justify-center gap-2 px-6 w-full h-10 rounded-md bg-zinc-900 text-white text-md font-semibold tracking-wide transition-all hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer"
          >
            <span>All Products</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
