"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/shop/ProductCard";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useProductStore } from "@/store/product.store";
import { useRouter } from "next/navigation";

const Product = () => {
  const { products, fetchProducts } = useProductStore();
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const [mainImage, setMainImage] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(5);

  const params = useParams();
  const { id } = params;

  const productData = products.find((p) => p._id.toString() === id);

  // Set initial main image when product loads
  useEffect(() => {
    if (productData?.images?.[0]) {
      setMainImage(productData.images[0]);
    }
  }, [productData]);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-2 text-gray-400">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 text-white bg-black sm:px-6 md:px-12 lg:px-16 xl:px-24">
      {/* Product Section */}
      <div className="grid max-w-[1400px] mx-auto grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 mb-16">
        {/* Product Images */}
        <div className="flex flex-col space-y-4">
          {/* Main Image - 4:5 aspect ratio */}
          <div
            className="relative w-full overflow-hidden bg-gray-900 rounded-2xl hover:border-orange-500 hover:shadow-orange-500/10 cursor-pointer group"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={mainImage || productData.images[0]}
              alt={productData.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              priority
            />
          </div>

          {/* Thumbnails - 4:5 aspect ratio */}
          {productData.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 ">
              {productData.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`relative overflow-hidden bg-gray-900 rounded-lg cursor-pointer transition-all duration-200 group
                    ${mainImage === image ? "ring-2 ring-orange-400 scale-95" : "hover:ring-2 hover:ring-gray-600"}
                  `}
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={image}
                    alt={`thumbnail-${index}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Brand */}
          {productData.brand && (
            <p className="mb-2 text-sm font-medium tracking-wider text-gray-400 uppercase">
              {productData.brand}
            </p>
          )}

          {/* Product Name */}
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {productData.name}
          </h1>

          {/* Price */}
          <div className="mb-6">
            <p className="text-4xl font-bold text-orange-400 sm:text-5xl">
              ₹{productData.price.toLocaleString()}
            </p>
          </div>

          <hr className="mb-6 border-gray-800" />

          {/* Description */}
          {productData.description && (
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Description
              </h3>
              <p className="leading-relaxed text-gray-300">
                {productData.description}
              </p>
            </div>
          )}

          <hr className="mb-6 border-gray-800" />

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Product Details
            </h3>

            <div className="space-y-3 text-sm">
              {productData.brand && (
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="font-medium text-gray-400">Brand</span>
                  <span className="text-gray-200">{productData.brand}</span>
                </div>
              )}

              {productData.category && (
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="font-medium text-gray-400">Category</span>
                  <span className="text-gray-200">{productData.category}</span>
                </div>
              )}

              {productData.stock !== undefined && productData.stock <= 10 && (
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="font-medium text-gray-400">Stock</span>

                  <span
                    className={`font-medium ${
                      productData.stock === 0
                        ? "text-red-400"
                        : productData.stock <= 2
                          ? "text-red-400"
                          : productData.stock <= 5
                            ? "text-yellow-400"
                            : "text-orange-400"
                    }`}
                  >
                    {productData.stock === 0
                      ? "Out of stock"
                      : productData.stock <= 2
                        ? `Hurry! Only ${productData.stock} left`
                        : productData.stock <= 5
                          ? "Selling fast — limited stock"
                          : `${productData.stock} left in stock`}
                  </span>
                </div>
              )}

              {productData.gender && (
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="font-medium text-gray-400">For</span>

                  <span className="font-medium capitalize">
                    {productData.gender}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          {productData.tags && productData.tags.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {productData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => router.push(`/products/${productData._id}/ownit`)}
            className="h-14 w-full bg-orange-500 mt-10 rounded-xl cursor-pointer"
          >
            <span className="font-bold text-xl"> OWN IT</span>
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-[1400px] mx-auto mt-20">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-orange-500">Products</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange-500 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="flex justify-center mt-10">
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
