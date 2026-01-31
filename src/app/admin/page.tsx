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
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dashboard
            </h1>
            <p className="text-sm text-gray-400 sm:text-base">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>
          <div className="inline-flex items-center self-start gap-2 px-4 py-2 text-xs font-medium border rounded-lg sm:self-auto bg-orange-500/10 border-orange-500/20 text-orange-400">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:gap-6">
          <SecondaryStatCard
            icon={<ShoppingBag size={18} strokeWidth={2} />}
            label="In Stock Items"
            value={loading ? "..." : products.filter((p) => p.stock > 0).length}
            trendIcon={<TrendingUp size={16} />}
            iconColor="text-green-400"
            iconBg="bg-green-500/10"
            borderColor="border-green-500/20"
            trendColor="text-green-400"
          />

          <SecondaryStatCard
            icon={<BarChart3 size={18} strokeWidth={2} />}
            label="Average Price"
            value={
              loading
                ? "..."
                : `₹${Math.round(stats.averagePrice).toLocaleString()}`
            }
            badgeText="AVG"
            iconColor="text-orange-400"
            iconBg="bg-orange-500/10"
            borderColor="border-orange-500/20"
          />

          <SecondaryStatCard
            icon={<TrendingDown size={18} strokeWidth={2} />}
            label="Out of Stock"
            value={loading ? "..." : stats.outOfStockCount}
            trendIcon={<AlertTriangle size={16} />}
            iconColor="text-red-400"
            iconBg="bg-red-500/10"
            borderColor="border-red-500/20"
            trendColor="text-red-400"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:gap-8">
          {/* Recent Products */}
          <div className="lg:col-span-2 bg-[#13131a] border border-white/5 rounded-2xl p-6 xl:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Recent Products</h2>
              <span className="px-3 py-1.5 text-xs font-medium text-gray-400 border rounded-lg bg-white/5 border-white/10">
                Latest {recentProducts.length}
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-12 h-12 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
              </div>
            ) : recentProducts.length === 0 ? (
              <EmptyState
                icon={<Package size={32} strokeWidth={1.5} />}
                title="No products yet"
                description="Start by adding your first product"
              />
            ) : (
              <div className="space-y-3">
                {recentProducts.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-4 p-4 transition-all border rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-orange-500/30 group"
                  >
                    {product.images?.[0] ||
                    product.thumbnail ||
                    product.images[0] ? (
                      <div className="relative flex-shrink-0 overflow-hidden bg-gray-900 rounded-lg w-16 h-16">
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
                      <div className="flex items-center justify-center flex-shrink-0 bg-gray-800 rounded-lg w-16 h-16">
                        <Package size={24} className="text-gray-600" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white truncate transition-colors group-hover:text-orange-400">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-gray-400 font-medium">
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
                        className={`text-xs mt-1.5 font-semibold px-2 py-1 rounded-md ${
                          product.stock === 0
                            ? "text-red-400 bg-red-500/10"
                            : product.stock < 10
                              ? "text-yellow-400 bg-yellow-500/10"
                              : "text-green-400 bg-green-500/10"
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
          <div className="bg-[#13131a] border border-white/5 rounded-2xl p-6 xl:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Low Stock Alert</h2>
              <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-red-500/10 border-red-500/20">
                <AlertTriangle className="text-red-400" size={18} />
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-12 h-12 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
              </div>
            ) : lowStockProducts.length === 0 ? (
              <EmptyState
                icon={<Package size={32} strokeWidth={1.5} />}
                title="All Good!"
                description="No low stock items"
                variant="success"
              />
            ) : (
              <div className="space-y-3">
                {lowStockProducts.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-red-500/5 border-red-500/20 hover:bg-red-500/10"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white truncate">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="px-3 py-1.5 text-xs font-bold text-red-400 border rounded-lg bg-red-500/20 border-red-500/30">
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
        <div className="bg-[#13131a] border border-white/5 rounded-2xl p-6 xl:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">
              Category Distribution
            </h2>
            <span className="px-3 py-1.5 text-xs font-medium text-gray-400 border rounded-lg bg-white/5 border-white/10">
              Top {topCategories.length}
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-12 h-12 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
            </div>
          ) : topCategories.length === 0 ? (
            <EmptyState
              icon={<Layers size={32} strokeWidth={1.5} />}
              title="No categories yet"
              description="Add products to see distribution"
            />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {topCategories.map(([category, count], index) => {
                const percentage = (count / products.length) * 100;
                const colors = [
                  {
                    bg: "bg-orange-500/10",
                    border: "border-orange-500/30",
                    bar: "from-orange-500 to-orange-600",
                    text: "text-orange-400",
                  },
                  {
                    bg: "bg-blue-500/10",
                    border: "border-blue-500/30",
                    bar: "from-blue-500 to-blue-600",
                    text: "text-blue-400",
                  },
                  {
                    bg: "bg-purple-500/10",
                    border: "border-purple-500/30",
                    bar: "from-purple-500 to-purple-600",
                    text: "text-purple-400",
                  },
                  {
                    bg: "bg-green-500/10",
                    border: "border-green-500/30",
                    bar: "from-green-500 to-green-600",
                    text: "text-green-400",
                  },
                  {
                    bg: "bg-pink-500/10",
                    border: "border-pink-500/30",
                    bar: "from-pink-500 to-pink-600",
                    text: "text-pink-400",
                  },
                ];
                const color = colors[index % colors.length];

                return (
                  <div
                    key={category}
                    className={`${color.bg} border ${color.border} rounded-xl p-5 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-black/20 rounded-lg">
                        <Layers size={20} className={color.text} />
                      </div>
                      <span className={`text-sm font-bold ${color.text}`}>
                        {count}
                      </span>
                    </div>
                    <h3 className="mb-3 text-sm font-bold text-white truncate">
                      {category}
                    </h3>
                    <div className="h-2 mb-3 overflow-hidden rounded-full bg-black/30">
                      <div
                        className={`h-full bg-gradient-to-r ${color.bar} rounded-full transition-all duration-700 ease-out`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-400">
                      {percentage.toFixed(1)}% of total
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
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
      className={`bg-[#13131a] border ${borderColor} rounded-2xl p-6 hover:bg-white/[0.02] hover:border-opacity-60 transition-all duration-300 group`}
    >
      <div className="flex items-center justify-between mb-5">
        <div
          className={`${iconBg} ${iconColor} w-12 h-12 rounded-xl flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        {change && (
          <div
            className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg ${
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
      <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        {label}
      </p>
      <p className="text-2xl font-bold text-white">
        {loading ? (
          <span className="inline-block w-24 h-8 rounded animate-pulse bg-white/10" />
        ) : (
          value
        )}
      </p>
      {subValue && (
        <p className="mt-2 text-xs font-medium text-gray-500">{subValue}</p>
      )}
    </div>
  );
}

// Secondary Stat Card Component
interface SecondaryStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trendIcon?: React.ReactNode;
  badgeText?: string;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  trendColor?: string;
}

function SecondaryStatCard({
  icon,
  label,
  value,
  trendIcon,
  badgeText,
  iconColor,
  iconBg,
  borderColor,
  trendColor,
}: SecondaryStatCardProps) {
  return (
    <div
      className={`bg-[#13131a] border border-white/5 rounded-2xl p-6 hover:border-opacity-60 hover:${borderColor} transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`flex items-center justify-center w-11 h-11 ${iconBg} border ${borderColor} rounded-xl`}
        >
          <span className={iconColor}>{icon}</span>
        </div>
        {trendIcon && (
          <span className={trendColor || "text-gray-400"}>{trendIcon}</span>
        )}
        {badgeText && (
          <span className="text-xs font-semibold text-gray-400">
            {badgeText}
          </span>
        )}
      </div>
      <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        {label}
      </p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

// Empty State Component
interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "default" | "success";
}

function EmptyState({
  icon,
  title,
  description,
  variant = "default",
}: EmptyStateProps) {
  const bgColor =
    variant === "success"
      ? "bg-green-500/10 border-green-500/20"
      : "bg-gray-800";
  const iconColor = variant === "success" ? "text-green-400" : "text-gray-600";

  return (
    <div className="py-16 text-center">
      <div
        className={`flex items-center justify-center w-20 h-20 mx-auto mb-5 ${bgColor} border rounded-2xl`}
      >
        <span className={iconColor}>{icon}</span>
      </div>
      <p className="mb-2 text-base font-semibold text-white">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
