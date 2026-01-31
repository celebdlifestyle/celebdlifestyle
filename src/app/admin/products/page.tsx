"use client";

import { useState, useEffect } from "react";
import { Plus, Search, X, Trash2, Package, Loader2 } from "lucide-react";
import type { Product } from "@/types/product.type";
import ImageUploader from "@/components/admin/ImageUploader";
import { useProductStore } from "@/store/product.store";

export default function ProductsPage() {
  const { products, loading, fetchProducts, deleteProduct } = useProductStore();

  const [showPanel, setShowPanel] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter(
    (p) =>
      p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Products</h1>
          <p className="text-sm text-gray-400">
            Manage your product inventory ({products.length} total)
          </p>
        </div>

        <button
          onClick={() => {
            setActiveProduct(null);
            setShowPanel(true);
          }}
          className="flex items-center gap-2 px-5 py-3 text-white transition-all duration-200 bg-orange-500 shadow-lg rounded-xl hover:bg-orange-600 hover:shadow-orange-500/50 active:scale-95"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search
          className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2"
          size={18}
        />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, category, or brand..."
          className="w-full pl-11 pr-4 py-3 bg-[#13131a] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
            <p className="text-gray-400">Loading products...</p>
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Package className="w-16 h-16 mb-4 text-gray-600" />
          <h3 className="mb-2 text-xl font-semibold text-white">
            {searchTerm ? "No products found" : "No products yet"}
          </h3>
          <p className="mb-6 text-gray-400">
            {searchTerm
              ? "Try adjusting your search"
              : "Get started by adding your first product"}
          </p>
          {!searchTerm && (
            <button
              onClick={() => {
                setActiveProduct(null);
                setShowPanel(true);
              }}
              className="flex items-center gap-2 px-5 py-3 text-white transition-all bg-orange-500 rounded-xl hover:bg-orange-600"
            >
              <Plus size={18} />
              Add Your First Product
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onEdit={() => {
                setActiveProduct(p);
                setShowPanel(true);
              }}
              onDelete={() => {
                if (
                  confirm(
                    `Are you sure you want to delete "${p.name}"? This action cannot be undone.`,
                  )
                ) {
                  deleteProduct(p._id.toString());
                }
              }}
            />
          ))}
        </div>
      )}

      {/* Right Panel */}
      {showPanel && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowPanel(false)}
          />

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-4xl bg-[#0f0f14] shadow-2xl animate-slideFromRight overflow-y-auto">
            <AddEditPanel
              product={activeProduct}
              onClose={() => setShowPanel(false)}
              onSaved={() => {
                setShowPanel(false);
                fetchProducts();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

/* ================= ADD / EDIT PANEL ================= */

function AddEditPanel({ product, onClose, onSaved }: any) {
  const { createProduct, updateProduct } = useProductStore();

  const [images, setImages] = useState<string[]>(product?.images || []);
  const [loading, setLoading] = useState(false);
  const [editingImageIndex, setEditingImageIndex] = useState<number | null>(
    null,
  );

  const [form, setForm] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    description: product?.description || "",
    brand: product?.brand || "",
    price: product?.price?.toString() || "",
    category: product?.category || "",
    stock: product?.stock?.toString() || "",
    tags: product?.tags?.join(", ") || "",
    istrending: product?.istrending || false,
    isbestselling: product?.isbestselling || false,
  });

  const handleImageChange = (newImages: string[]) => {
    if (editingImageIndex !== null && editingImageIndex >= 0) {
      const updatedImages = [...images];
      updatedImages[editingImageIndex] = newImages[0];
      setImages(updatedImages);
      setEditingImageIndex(null);
    } else {
      setImages((prev) => [...prev, ...newImages]);
      setEditingImageIndex(null);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  async function submit(e: any) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...form,
        images: images,
        thumbnail: images[0] || "",
        image: images[0] || "",
        price: Number(form.price),
        stock: Number(form.stock),
        tags: form.tags
          .split(",")
          .map((t: any) => t.trim())
          .filter(Boolean),
      };

      if (product) {
        await updateProduct(product._id.toString(), payload);
      } else {
        await createProduct(payload);
      }

      onSaved();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative h-full p-8 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {product ? "Edit Product" : "Add New Product"}
          </h2>
          <p className="text-sm text-gray-400">
            {product
              ? "Update product information"
              : "Fill in the details below"}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white/5 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex gap-3 bg-[#13131a] p-6 rounded-xl border border-white/10 shadow-2xl">
            <Loader2 className="w-6 h-6 text-orange-500 animate-spin" />
            <span className="text-white">
              {product ? "Updating product..." : "Creating product..."}
            </span>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={submit} className="space-y-6">
        {/* Image Section - Compact */}
        <div className="p-4 bg-[#13131a] border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-white">
              Product Images ({images.length})
            </h3>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-5 gap-3">
            {/* Existing Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-gray-900 rounded-lg group aspect-square"
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full p-2"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 transition-opacity duration-200 opacity-0 bg-black/70 backdrop-blur-sm group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => setEditingImageIndex(index)}
                    className="px-3 py-1 text-xs font-medium text-white transition-all bg-orange-500 rounded hover:bg-orange-600"
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="px-3 py-1 text-xs font-medium text-white transition-all bg-red-500 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>

                {/* Primary Badge */}
                {index === 0 && (
                  <div className="absolute top-1 left-1">
                    <span className="px-1.5 py-0.5 text-[10px] font-semibold text-white bg-orange-500 rounded">
                      Main
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* Add New Image Button */}
            {images.length < 10 && (
              <button
                type="button"
                onClick={() => setEditingImageIndex(-1)}
                className="flex flex-col items-center justify-center gap-1 transition-all border-2 border-dashed rounded-lg aspect-square border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5"
              >
                <Plus className="text-gray-500" size={20} />
                <span className="text-[10px] text-gray-500">Add Image</span>
              </button>
            )}
          </div>

          {/* Image Uploader Modal */}
          {editingImageIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="bg-[#13131a] border border-white/10 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {editingImageIndex === -1
                      ? "Add New Image"
                      : `Change Image ${editingImageIndex + 1}`}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setEditingImageIndex(null)}
                    className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white/5 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <ImageUploader
                  onPresetGet={() => "Celebd_Product_Upload_Preset"}
                  onImagesChange={(newImages) => {
                    handleImageChange(newImages);
                  }}
                />

                <button
                  type="button"
                  onClick={() => setEditingImageIndex(null)}
                  className="w-full py-2 mt-4 text-white cursor-pointer transition-all border border-white/10 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Helper Text */}
          {images.length === 0 && (
            <p className="mt-3 text-xs text-center text-gray-500">
              Click "Add Image" to upload product images
            </p>
          )}
          {images.length > 0 && (
            <p className="mt-3 text-xs text-center text-gray-500">
              The first image will be used as the main product image. Hover over
              images to change or remove.
            </p>
          )}
        </div>

        {/* Product Details */}
        <div className="p-6 bg-[#13131a] border border-white/5 rounded-2xl space-y-4">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Product Details
          </h3>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Product Name *
              </label>
              <input
                required
                className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                value={form.name}
                placeholder="e.g., Premium Hoodie"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Slug (URL-friendly name) *
              </label>
              <input
                required
                className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                value={form.slug}
                placeholder="e.g., premium-hoodie"
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Description
              </label>
              <textarea
                className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                rows={4}
                value={form.description}
                placeholder="Describe your product..."
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            {/* Brand & Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Brand
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={form.brand}
                  placeholder="e.g., Nike"
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Category *
                </label>
                <input
                  required
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={form.category}
                  placeholder="e.g., Clothing"
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Price & Stock */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Price (₹) *
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={form.price}
                  placeholder="e.g., 1999"
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Stock Quantity *
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={form.stock}
                  placeholder="e.g., 50"
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Tags (comma separated)
              </label>
              <input
                className="w-full px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                value={form.tags}
                placeholder="e.g., summer, casual, trending"
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
              />
            </div>

            {/* Trending & Bestselling Toggles */}
            <div className="grid grid-cols-2 gap-4">
              {/* Trending Toggle */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-white">Trending</p>
                  <p className="text-xs text-gray-500">
                    Mark as trending product
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setForm({ ...form, istrending: !form.istrending })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                    form.istrending ? "bg-orange-500" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      form.istrending ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Bestselling Toggle */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f0f14] border border-white/5 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-white">Bestselling</p>
                  <p className="text-xs text-gray-500">
                    Mark as bestselling product
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setForm({ ...form, isbestselling: !form.isbestselling })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                    form.isbestselling ? "bg-orange-500" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      form.isbestselling ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 cursor-pointer text-white transition-all border border-white/10 rounded-xl bg-white/5 hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-3 text-white cursor-pointer transition-all bg-orange-500 shadow-lg rounded-xl hover:bg-orange-600 hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            {loading
              ? "Saving..."
              : product
                ? "Update Product"
                : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({
  product,
  onEdit,
  onDelete,
}: {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className="bg-[#13131a] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-200 group"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Image */}
      <div className="relative">
        {product.images?.[0] || product.thumbnail ? (
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.name}
            className="object-cover w-full h-48"
          />
        ) : (
          <div className="flex items-center justify-center h-48 bg-white/5">
            <Package className="text-gray-600" size={40} />
          </div>
        )}

        {/* Stock badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
            product.stock < 10
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {product.stock} in stock
        </span>

        {/* Trending / Bestselling badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.istrending && (
            <span className="px-2 py-0.5 text-xs font-semibold text-white bg-orange-500 rounded-full shadow-lg">
              🔥 Trending
            </span>
          )}
          {product.isbestselling && (
            <span className="px-2 py-0.5 text-xs font-semibold text-white bg-yellow-600 rounded-full shadow-lg">
              ⭐ Bestselling
            </span>
          )}
        </div>

        {/* Action buttons overlay */}
        {showActions && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all bg-black/60 backdrop-blur-sm animate-fadeIn">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="px-4 py-2 cursor-pointer text-sm font-medium text-white transition-all bg-orange-500 rounded-lg hover:bg-orange-600 active:scale-95"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="px-4 py-2 cursor-pointer text-sm font-medium text-white transition-all bg-red-500 rounded-lg hover:bg-red-600 active:scale-95"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-white truncate">{product.name}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description || "No description"}
        </p>

        {product.brand && (
          <p className="text-xs text-gray-600">Brand: {product.brand}</p>
        )}

        <div className="flex items-center justify-between pt-2">
          {/* Price */}
          <span className="text-lg font-bold text-white">
            ₹{product.price.toLocaleString()}
          </span>

          {/* Category */}
          <span className="px-2 py-1 text-xs text-gray-400 border rounded-md bg-white/5 border-white/10">
            {product.category}
          </span>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2">
            {product.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20"
              >
                {tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded-full">
                +{product.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
