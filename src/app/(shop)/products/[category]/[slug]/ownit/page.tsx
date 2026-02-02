"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useProductStore } from "@/store/product.store";
import { ArrowLeft } from "lucide-react";

const OwnItForm = () => {
  const { fetchProducts, products } = useProductStore();
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const productData = products.find((p) => p.slug.toString() === slug);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const instaRegex =
      /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._%-]+\/?$/;

    if (!instaRegex.test(instagram)) {
      setError("Please enter a valid Instagram profile URL.");
      return;
    }

    setError("");
    alert(`Form submitted for ${productData?.name || "Product ID " + slug}!`);
  };

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-2 text-gray-400">Unable to load product details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 text-white bg-black sm:px-6 md:px-12 lg:px-16 xl:px-24">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto mb-8">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Own It <span className="text-orange-500">Now</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-2 bg-orange-500 rounded-full" />
          <p className="text-sm text-gray-400">
            Fill out the form below to purchase this product
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Product Preview (Desktop Only) */}
        <div
          onClick={() =>
            router.push(`/products/${productData.category}/${productData.slug}`)
          }
          className="hidden lg:flex flex-col justify-between h-full p-8 transition-all duration-200 bg-gray-900 border border-gray-800 cursor-pointer rounded-2xl hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10"
        >
          <div>
            {/* Product Images Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {productData.images.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-gray-800 rounded-xl aspect-square"
                >
                  <Image
                    src={image}
                    alt={`${productData.name} - ${index + 1}`}
                    fill
                    className="object-cover p-3 transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">{productData.name}</h3>

              <p className="text-3xl font-bold text-orange-400">
                ₹{productData.price.toLocaleString()}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="px-2 py-1 bg-gray-800 rounded">
                  Product ID: {productData._id}
                </span>
                {productData.brand && (
                  <span className="px-2 py-1 bg-gray-800 rounded">
                    {productData.brand}
                  </span>
                )}
              </div>

              {productData.description && (
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {productData.description}
                </p>
              )}

              {productData.tags && productData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {productData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Click to view hint */}
          <div className="flex items-center justify-center gap-2 pt-6 mt-6 text-sm text-gray-500 border-t border-gray-800">
            <span>Click to view full details</span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between h-full p-6 bg-gray-900 border border-gray-800 shadow-xl sm:p-8 rounded-2xl"
          >
            {/* Mobile Product Preview */}
            <div
              onClick={() =>
                router.push(
                  `/products/${productData.category}/${productData.slug}`,
                )
              }
              className="flex items-center gap-4 p-4 mb-6 transition-all duration-200 bg-gray-800 cursor-pointer lg:hidden rounded-xl hover:bg-gray-700"
            >
              <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-900 rounded-lg sm:w-24 sm:h-24">
                <Image
                  src={productData.images[0]}
                  alt={productData.name}
                  fill
                  className="object-cover p-2"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">
                  {productData.name}
                </p>
                <p className="text-lg font-bold text-orange-400">
                  ₹{productData.price.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  ID: {productData._id}
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex-1 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Product ID
                </label>
                <input
                  type="text"
                  value={productData._id || ""}
                  readOnly
                  className="w-full px-4 py-3 text-sm text-gray-400 bg-gray-800 border border-gray-700 rounded-lg cursor-not-allowed focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Your Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Your Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Phone Number <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Instagram Profile URL{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <input
                  type="url"
                  placeholder="https://instagram.com/username"
                  value={instagram}
                  onChange={(e) => {
                    setInstagram(e.target.value);
                    setError("");
                  }}
                  className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {error && (
                <div className="p-3 text-sm text-center text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg">
                  {error}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/50 active:scale-[0.98]"
            >
              Complete Purchase
            </button>

            <p className="mt-4 text-xs text-center text-gray-500">
              By submitting this form, you agree to our terms and conditions
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OwnItForm;
