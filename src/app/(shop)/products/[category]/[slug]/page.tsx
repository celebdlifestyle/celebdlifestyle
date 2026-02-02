"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/shop/ProductCard";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useProductStore } from "@/store/product.store";
import Link from "next/link";
import { ProductPageSkeleton } from "@/components/shop/Skeletons";

const Product = () => {
  const { products, fetchProducts } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await fetchProducts();
      setIsLoading(false);
    };
    loadProducts();
  }, [fetchProducts]);

  const [mainImage, setMainImage] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(5);
  const params = useParams();
  const { slug } = params;

  const productData = products.find((p) => p.slug.toString() === slug);

  // Set initial main image when product loads
  useEffect(() => {
    if (productData?.images?.[0]) {
      setMainImage(productData.images[0]);
    }
  }, [productData]);

  // Show skeleton while loading
  if (isLoading) {
    return <ProductPageSkeleton />;
  }

  if (!productData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="mb-2 text-2xl font-bold text-gray-200">
          Product not found
        </h2>
        <p className="text-gray-400">
          The product you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-3 md:py-7 mx-auto md:px-8">
      {/* Product Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image - 4:5 aspect ratio */}
          <div
            className="relative w-full overflow-hidden bg-gray-900 rounded-lg"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={mainImage}
              alt={productData.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Thumbnails - 4:5 aspect ratio */}
          {productData.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`relative overflow-hidden bg-gray-900 rounded-lg cursor-pointer transition-all duration-200 group ${
                    mainImage === image
                      ? "ring-2 ring-orange-400 scale-95"
                      : "hover:ring-2 hover:ring-gray-600"
                  }`}
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand */}
          {productData.brand && (
            <p className="text-sm font-medium tracking-wider text-orange-400 uppercase">
              {productData.brand}
            </p>
          )}

          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-100 md:text-4xl">
            {productData.name}
          </h1>

          {/* Price */}
          <p className="text-3xl font-bold text-orange-400">
            ₹{productData.price.toLocaleString()}
          </p>

          {/* Description */}
          {productData.description && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-200">
                Description
              </h2>
              <p className="leading-relaxed text-gray-400">
                {productData.description}
              </p>
            </div>
          )}

          {/* Product Details */}
          <div className="p-6 space-y-4 border border-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-200">
              Product Details
            </h3>

            {productData.brand && (
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Brand</span>
                <span className="font-medium text-gray-200">
                  {productData.brand}
                </span>
              </div>
            )}

            {productData.category && (
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Category</span>
                <span className="font-medium text-gray-200">
                  {productData.category}
                </span>
              </div>
            )}

            {productData.stock !== undefined && productData.stock <= 10 && (
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Stock</span>
                <span
                  className={`font-medium ${
                    productData.stock === 0
                      ? "text-red-400"
                      : productData.stock <= 2
                        ? "text-orange-400"
                        : "text-yellow-400"
                  }`}
                >
                  {productData.stock === 0
                    ? "Out of stock"
                    : productData.stock <= 2
                      ? `Hurry! Only ${productData.stock} Left`
                      : productData.stock <= 5
                        ? "Selling fast — Limited stock"
                        : `${productData.stock} left in Stock`}
                </span>
              </div>
            )}

            {productData.gender && (
              <div className="flex items-center justify-between">
                <span className="text-gray-400">For</span>
                <span className="font-medium text-gray-200">
                  {productData.gender}
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          {productData.tags && productData.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-200">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {productData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-gray-300 bg-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Link
            href={`/products/${productData.category.toLocaleLowerCase()}/${productData.slug}/ownit`}
            className="mt-10 h-14 w-full rounded-xl bg-orange-500 flex items-center justify-center
             text-lg font-bold text-white cursor-pointer
             transition-all duration-200
             hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]"
          >
            OWN IT
          </Link>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-10">
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-100">
          Similar Products
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleProducts((prev) => prev + 5)}
              className="px-8 py-3 font-medium text-gray-200 transition-all duration-200 border border-gray-700 rounded-lg hover:bg-gray-900 hover:border-orange-500 hover:text-orange-400"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
