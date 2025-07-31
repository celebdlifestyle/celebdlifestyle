"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Products } from "@/assets/data";
import RenderStarts from "@/components/RenderStarts";

const OwnItForm = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const productData = Products.find((p) => p.id.toString() === id);

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
    alert(`Form submitted for ${productData?.title || "Product ID " + id}!`);
  };

  return (
    <div className="flex flex-col min-h-screen px-4 pt-4 pb-10 text-white bg-black md:px-12 lg:px-24">
      <h2 className="mb-5 text-3xl font-bold text-center">
        Own It <span className="text-orange-500">Now</span>
      </h2>

      <div className="grid flex-1 grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left: Product Preview */}
        {productData && (
          <div
            onClick={() => router.push(`/products/${id}`)}
            className="flex-col justify-between hidden w-full h-full p-6 bg-gray-900 border border-gray-700 shadow-xl cursor-pointer md:flex rounded-2xl"
          >
            <div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {productData.images.slice(0, 3).map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`${productData.title} - ${index}`}
                      className="object-cover w-full h-80 rounded-xl"
                    />
                  </div>
                ))}
              </div>

              <h3 className="mb-2 text-xl font-semibold">
                {productData.title}
              </h3>
              <p className="mb-2 text-lg font-bold text-orange-400">
                ₹{productData.discountPrice.toLocaleString()}
              </p>
              <p className="mb-3 text-xs text-gray-400">
                Product ID: {productData.id}
              </p>
              {RenderStarts(productData.rating.average)}
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {productData.description}
              </p>
            </div>
          </div>
        )}

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between w-full h-full p-6 bg-gray-900 border border-gray-700 shadow-xl rounded-2xl"
        >
          {/* Product Preview */}
          {productData && (
            <div className="flex items-center gap-4 p-4 mb-6 bg-gray-800 md:hidden rounded-xl">
              <img
                src={productData.images[0]}
                alt={productData.title}
                className="object-cover w-20 h-20 rounded-lg"
              />
              <div>
                <p className="font-medium text-white">{productData.title}</p>
                <p className="font-semibold text-orange-400">
                  ₹{productData.discountPrice.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">Product ID: {id}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Product ID</label>
              <input
                type="text"
                value={productData?.id || ""}
                readOnly
                className="w-full px-4 py-3 text-sm text-gray-400 bg-gray-800 border border-gray-700 rounded-lg cursor-not-allowed focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Your Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">
                Instagram Profile URL
              </label>
              <input
                type="url"
                placeholder="https://instagram.com/username"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-center text-red-500">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium text-white transition rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            Own It
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnItForm;
