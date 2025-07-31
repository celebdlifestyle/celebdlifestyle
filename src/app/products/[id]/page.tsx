"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { Products, ProductReviews } from "@/assets/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import RenderStarts from "@/components/RenderStarts";

const Product = () => {
  const router = useRouter();

  const [mainImage, setMainImage] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [newReview, setNewReview] = useState("");

  const params = useParams();
  const { id } = params;
  console.log(id);

  const productData = Products.find((p) => p.id.toString() === id);

  if (!productData) {
    return (
      <div className="min-h-screen p-12 text-white">Product not found</div>
    );
  }

  const reviews =
    ProductReviews.find((r) => r.productId === Number(id))?.reviews || [];

  if (!reviews) {
    return (
      <div className="min-h-screen p-12 text-white">Reviews not found</div>
    );
  }

  const handleAddReview = () => {
    if (!newReview.trim()) return; // Don't add empty review

    const newReviewObj = {
      user: "Guest User",
      rating: 5, // You can make this dynamic later if needed
      comment: newReview,
    };

    // Push to current reviews array
    reviews.push(newReviewObj);
    setNewReview("");
  };

  return (
    <div className="min-h-screen px-4 py-12 text-white bg-black md:px-12 lg:px-24">
      {/* Product Section */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex flex-col items-center">
          <img
            src={mainImage || productData.images[0]}
            alt={productData.title}
            className="object-cover w-full max-w-xl rounded-xl"
          />
          {/* Thumbnails */}
          <div className="grid w-full max-w-xl grid-cols-4 gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setMainImage(image)}
                className="overflow-hidden transition bg-gray-700 rounded-lg cursor-pointer hover:ring-2 hover:ring-orange-400"
              >
                <img
                  src={image}
                  alt={`thumbnail-${index}`}
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start">
          <h1 className="mb-3 text-3xl font-bold">{productData.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            {RenderStarts(productData.rating.average)}
            <span className="text-sm text-gray-300">
              ({productData.rating.average}) • {productData.rating.count}{" "}
              reviews
            </span>
          </div>

          <p className="mb-4 text-gray-300">{productData.description}</p>

          {/* Price */}
          <p className="mb-6 text-3xl font-bold text-orange-400">
            ₹{productData.discountPrice.toLocaleString()}
          </p>

          <hr className="mb-6 border-gray-700" />

          {/* Specs Table */}
          <table className="mb-6 text-sm text-gray-300">
            <tbody>
              <tr>
                <td className="pr-6 font-medium text-gray-400">Brand</td>
                <td>{productData.brand}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-400">Category</td>
                <td>{productData.category}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-400">Material</td>
                <td>{productData.specifications.material}</td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-4 sm:flex-row">
            {/* <button className="flex-1 py-3.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition">
              Add to Cart
            </button> */}
            <button
              onClick={() => router.push(`/products/${id}/ownit`)}
              className="flex-1 cursor-pointer py-3.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              OWN IT
            </button>
          </div>

          {/* Product Reviews Section */}
          <div className="w-full h-full mt-12 ">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Customer <span className="text-orange-500">Reviews</span>
            </h2>

            <ScrollArea className="w-full bg-gray-900 p-4 border border-gray-700 rounded-lg shadow-lg md:h-[27rem]">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-4 mb-4 rounded-lg shadow-sm last:mb-0"
                  >
                    {/* User + Rating */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {/* Avatar Initial */}
                        <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-orange-500 rounded-full">
                          {review.user[0]}
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            {review.user}
                          </p>
                          <p className="text-xs text-gray-400">2 days ago</p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center text-orange-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < review.rating
                                ? "fill-orange-400"
                                : "opacity-20"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-sm leading-relaxed text-gray-300">
                      {review.comment}
                    </p>
                  </div>
                ))
              ) : (
                <p className="py-10 text-center text-gray-400">
                  No reviews yet. Be the first to review!
                </p>
              )}
            </ScrollArea>

            {/* Add Review Input */}
            <div className="w-full p-4 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg ">
              <h3 className="mb-2 text-xl font-semibold text-white">
                <span className="text-orange-500">Rate</span> this Product
              </h3>

              {/* Textarea */}
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your experience here..."
                className="w-full p-3 mb-2 text-sm text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={3}
              />

              {/* Submit Button */}
              <button
                onClick={handleAddReview}
                className="w-full py-3 font-medium text-white transition bg-orange-500 rounded-md hover:bg-orange-600"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="flex flex-col items-center mt-20">
        <h2 className="mb-2 text-3xl font-semibold">
          Featured <span className="text-orange-500">Products</span>
        </h2>
        <div className="w-24 h-0.5 bg-orange-500 mb-8" />

        <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-14">
          {Products.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {visibleProducts < Products.length && (
          <button
            onClick={() => setVisibleProducts((prev) => prev + 5)}
            className="px-8 py-2 mb-16 font-medium text-gray-300 transition border rounded-lg cursor-pointer hover:bg-gray-800"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
