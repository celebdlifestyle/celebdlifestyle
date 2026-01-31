"use client";

import { useState, useEffect } from "react";
import {
  Package,
  IndianRupee,
  Layers,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  ShoppingBag,
  AlertTriangle,
  BarChart3,
  TrendingDown,
} from "lucide-react";
import type { Product } from "@/types/product.type";
import { useProductStore } from "@/store/product.store";
import { useCategoryStore } from "@/store/categories.store";

interface DashboardStats {
  totalProducts: number;
  totalRevenue: number;
  totalCategories: number;
  lowStockCount: number;
  outOfStockCount: number;
  averagePrice: number;
  revenueChange: number;
  productsChange: number;
}

export default function DashboardPage() {
  const { products, fetchProducts } = useProductStore();
  const { categories, fetchCategories } = useCategoryStore();
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalRevenue: 0,
    totalCategories: 0,
    lowStockCount: 0,
    outOfStockCount: 0,
    averagePrice: 0,
    revenueChange: 12.5,
    productsChange: 8.3,
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchProducts(), fetchCategories()]);
      setLoading(false);
    };
    loadData();
  }, [fetchProducts, fetchCategories]);

  useEffect(() => {
    if (products.length > 0) {
      calculateStats(products);
    }
  }, [products, categories]);

  const calculateStats = (products: Product[]) => {
    const totalRevenue = products.reduce(
      (sum, p) => sum + p.price * p.stock,
      0,
    );
    const lowStock = products.filter((p) => p.stock > 0 && p.stock < 10).length;
    const outOfStock = products.filter((p) => p.stock === 0).length;
    const averagePrice =
      products.length > 0
        ? products.reduce((sum, p) => sum + p.price, 0) / products.length
        : 0;

    setStats((prev) => ({
      ...prev,
      totalProducts: products.length,
      totalRevenue: totalRevenue,
      totalCategories: categories.length,
      lowStockCount: lowStock,
      outOfStockCount: outOfStock,
      averagePrice: averagePrice,
    }));
  };

  // Get recent products (last 6)
  const recentProducts = products
    .sort(
      (a, b) =>
        new Date(b.createdAt || 0).getTime() -
        new Date(a.createdAt || 0).getTime(),
    )
    .slice(0, 6);

  // Get low stock products
  const lowStockProducts = products
    .filter((p) => p.stock > 0 && p.stock < 10)
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 5);

  // Get category distribution
  const categoryData = products.reduce(
    (acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const topCategories = Object.entries(categoryData)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-gray-400">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <div className="px-4 py-2 text-xs font-medium text-orange-400 border rounded-lg bg-orange-500/10 border-orange-500/20">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Package size={20} strokeWidth={2} />}
          label="Total Products"
          value={stats.totalProducts.toString()}
          change={stats.productsChange}
          changeType="increase"
          iconColor="text-blue-400"
          iconBg="bg-blue-500/10"
          borderColor="border-blue-500/20"
          loading={loading}
        />
        <StatCard
          icon={<IndianRupee size={20} strokeWidth={2} />}
          label="Total Inventory Value"
          value={`₹${stats.totalRevenue.toLocaleString()}`}
          change={stats.revenueChange}
          changeType="increase"
          iconColor="text-orange-400"
          iconBg="bg-orange-500/10"
          borderColor="border-orange-500/20"
          loading={loading}
        />
        <StatCard
          icon={<Layers size={20} strokeWidth={2} />}
          label="Categories"
          value={stats.totalCategories.toString()}
          iconColor="text-purple-400"
          iconBg="bg-purple-500/10"
          borderColor="border-purple-500/20"
          loading={loading}
        />
        <StatCard
          icon={<AlertTriangle size={20} strokeWidth={2} />}
          label="Low Stock Alert"
          value={stats.lowStockCount.toString()}
          subValue={`${stats.outOfStockCount} out of stock`}
          changeType="decrease"
          iconColor="text-red-400"
          iconBg="bg-red-500/10"
          borderColor="border-red-500/20"
          loading={loading}
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="bg-[#13131a] border border-white/5 rounded-2xl p-5 hover:border-orange-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center justify-center w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-xl">
              <ShoppingBag
                className="text-green-400"
                size={18}
                strokeWidth={2}
              />
            </div>
            <TrendingUp className="text-green-400" size={16} />
          </div>
          <p className="mb-1 text-xs font-medium tracking-wider text-gray-400 uppercase">
            In Stock Items
          </p>
          <p className="text-2xl font-bold text-white">
            {loading ? "..." : products.filter((p) => p.stock > 0).length}
          </p>
        </div>

        <div className="bg-[#13131a] border border-white/5 rounded-2xl p-5 hover:border-orange-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <BarChart3
                className="text-orange-400"
                size={18}
                strokeWidth={2}
              />
            </div>
            <span className="text-xs font-medium text-gray-400">AVG</span>
          </div>
          <p className="mb-1 text-xs font-medium tracking-wider text-gray-400 uppercase">
            Average Price
          </p>
          <p className="text-2xl font-bold text-white">
            {loading
              ? "..."
              : `₹${Math.round(stats.averagePrice).toLocaleString()}`}
          </p>
        </div>

        <div className="bg-[#13131a] border border-white/5 rounded-2xl p-5 hover:border-orange-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center justify-center w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl">
              <TrendingDown
                className="text-red-400"
                size={18}
                strokeWidth={2}
              />
            </div>
            <AlertTriangle className="text-red-400" size={16} />
          </div>
          <p className="mb-1 text-xs font-medium tracking-wider text-gray-400 uppercase">
            Out of Stock
          </p>
          <p className="text-2xl font-bold text-white">
            {loading ? "..." : stats.outOfStockCount}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Products */}
        <div className="lg:col-span-2 bg-[#13131a] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Recent Products</h2>
            <span className="px-2 py-1 text-xs font-medium text-gray-400 border rounded-lg bg-white/5 border-white/10">
              Latest {recentProducts.length}
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
            </div>
          ) : recentProducts.length === 0 ? (
            <div className="py-12 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full">
                <Package
                  className="text-gray-600"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <p className="mb-2 font-medium text-white">No products yet</p>
              <p className="text-sm text-gray-500">
                Start by adding your first product
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center gap-4 p-4 transition-all border rounded-xl bg-white/5 hover:bg-white/[0.07] border-white/5 hover:border-orange-500/30 group"
                >
                  {product.images?.[0] ||
                  product.thumbnail ||
                  product.thumbnail ? (
                    <div className="relative flex-shrink-0 overflow-hidden bg-gray-900 rounded-lg w-14 h-14">
                      <img
                        src={
                          product.images?.[0] ||
                          product.thumbnail ||
                          product.images[0]
                        }
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center flex-shrink-0 bg-gray-800 rounded-lg w-14 h-14">
                      <Package size={24} className="text-gray-600" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-gray-400">
                        {product.category}
                      </span>
                      {product.brand && (
                        <span className="text-xs text-gray-500">
                          • {product.brand}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-white">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p
                      className={`text-xs mt-1 font-medium ${
                        product.stock === 0
                          ? "text-red-400"
                          : product.stock < 10
                            ? "text-yellow-400"
                            : "text-green-400"
                      }`}
                    >
                      {product.stock === 0
                        ? "Out of Stock"
                        : `Stock: ${product.stock}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Low Stock Alert */}
        <div className="bg-[#13131a] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Low Stock Alert</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-lg">
              <AlertTriangle className="text-red-400" size={16} />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
            </div>
          ) : lowStockProducts.length === 0 ? (
            <div className="py-12 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500/10 border border-green-500/20 rounded-full">
                <Package
                  className="text-green-400"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <p className="mb-1 font-medium text-white">All Good!</p>
              <p className="text-sm text-gray-500">No low stock items</p>
            </div>
          ) : (
            <div className="space-y-3">
              {lowStockProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center gap-3 p-3 transition-all border rounded-lg bg-red-500/5 border-red-500/20 hover:bg-red-500/10"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="px-2 py-1 text-xs font-bold text-red-400 bg-red-500/20 border border-red-500/30 rounded">
                      {product.stock} left
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-[#13131a] border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">
            Category Distribution
          </h2>
          <span className="px-2 py-1 text-xs font-medium text-gray-400 border rounded-lg bg-white/5 border-white/10">
            Top {topCategories.length}
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
          </div>
        ) : topCategories.length === 0 ? (
          <div className="py-12 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full">
              <Layers className="text-gray-600" size={32} strokeWidth={1.5} />
            </div>
            <p className="mb-2 font-medium text-white">No categories yet</p>
            <p className="text-sm text-gray-500">
              Add products to see distribution
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {topCategories.map(([category, count], index) => {
              const percentage = (count / products.length) * 100;
              const colors = [
                {
                  bg: "bg-orange-500/10",
                  border: "border-orange-500/30",
                  bar: "from-orange-500 to-orange-600",
                },
                {
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/30",
                  bar: "from-blue-500 to-blue-600",
                },
                {
                  bg: "bg-purple-500/10",
                  border: "border-purple-500/30",
                  bar: "from-purple-500 to-purple-600",
                },
                {
                  bg: "bg-green-500/10",
                  border: "border-green-500/30",
                  bar: "from-green-500 to-green-600",
                },
                {
                  bg: "bg-pink-500/10",
                  border: "border-pink-500/30",
                  bar: "from-pink-500 to-pink-600",
                },
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={category}
                  className={`${color.bg} border ${color.border} rounded-xl p-4 hover:scale-105 transition-transform`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Layers size={20} className="text-white/70" />
                    <span className="text-xs font-bold text-white">
                      {count}
                    </span>
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-white truncate">
                    {category}
                  </h3>
                  <div className="h-2 overflow-hidden bg-black/20 rounded-full">
                    <div
                      className={`h-full bg-gradient-to-r ${color.bar} rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-400">
                    {percentage.toFixed(1)}% of total
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
  change?: number;
  changeType?: "increase" | "decrease";
  iconColor: string;
  iconBg: string;
  borderColor: string;
  loading?: boolean;
}

function StatCard({
  icon,
  label,
  value,
  subValue,
  change,
  changeType,
  iconColor,
  iconBg,
  borderColor,
  loading,
}: StatCardProps) {
  return (
    <div
      className={`bg-[#13131a] border ${borderColor} rounded-2xl p-6 hover:bg-white/[0.02] hover:border-opacity-50 transition-all group`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`${iconBg} ${iconColor} w-12 h-12 rounded-xl flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>
        {change && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
              changeType === "increase"
                ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                : "text-red-400 bg-red-500/10 border border-red-500/20"
            }`}
          >
            {changeType === "increase" ? (
              <ArrowUp size={12} strokeWidth={2.5} />
            ) : (
              <ArrowDown size={12} strokeWidth={2.5} />
            )}
            {change}%
          </div>
        )}
      </div>
      <p className="mb-2 text-xs font-medium tracking-wider text-gray-400 uppercase">
        {label}
      </p>
      <p className="text-2xl font-bold text-white">
        {loading ? (
          <span className="inline-block w-20 h-8 bg-white/10 rounded animate-pulse"></span>
        ) : (
          value
        )}
      </p>
      {subValue && <p className="mt-1 text-xs text-gray-500">{subValue}</p>}
    </div>
  );
}
