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
  Sparkles,
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

  const recentProducts = products
    .sort(
      (a, b) =>
        new Date(b.createdAt || 0).getTime() -
        new Date(a.createdAt || 0).getTime(),
    )
    .slice(0, 6);

  const lowStockProducts = products
    .filter((p) => p.stock > 0 && p.stock < 10)
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 5);

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
    <div className="min-h-screen">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center gap-3">
              Dashboard
              <Sparkles className="w-6 h-6 text-orange-400" />
            </h1>
            <p className="text-sm text-gray-400 sm:text-base">
              Monitor your store performance and inventory
            </p>
          </div>
          <div className="inline-flex items-center self-start gap-2 px-4 py-2.5 text-xs font-semibold border rounded-xl sm:self-auto bg-gradient-to-r from-orange-500/10 to-pink-500/10 border-orange-500/20 text-orange-400 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-lg shadow-orange-400/50" />
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5">
          <StatCard
            icon={<Package size={22} strokeWidth={2.5} />}
            label="Total Products"
            value={stats.totalProducts.toString()}
            change={stats.productsChange}
            changeType="increase"
            gradient="from-cyan-500 to-blue-500"
            loading={loading}
          />
          <StatCard
            icon={<IndianRupee size={22} strokeWidth={2.5} />}
            label="Inventory Value"
            value={`₹${stats.totalRevenue.toLocaleString()}`}
            change={stats.revenueChange}
            changeType="increase"
            gradient="from-orange-500 to-pink-500"
            highlight
            loading={loading}
          />
          <StatCard
            icon={<Layers size={22} strokeWidth={2.5} />}
            label="Categories"
            value={stats.totalCategories.toString()}
            gradient="from-purple-500 to-indigo-500"
            loading={loading}
          />
          <StatCard
            icon={<AlertTriangle size={22} strokeWidth={2.5} />}
            label="Low Stock Alert"
            value={stats.lowStockCount.toString()}
            subValue={`${stats.outOfStockCount} out of stock`}
            gradient="from-red-500 to-rose-500"
            alert
            loading={loading}
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:gap-5">
          <SecondaryStatCard
            icon={<ShoppingBag size={20} strokeWidth={2.5} />}
            label="In Stock Items"
            value={loading ? "..." : products.filter((p) => p.stock > 0).length}
            trendIcon={<TrendingUp size={16} />}
            gradient="from-emerald-500 to-green-500"
          />

          <SecondaryStatCard
            icon={<BarChart3 size={20} strokeWidth={2.5} />}
            label="Average Price"
            value={
              loading
                ? "..."
                : `₹${Math.round(stats.averagePrice).toLocaleString()}`
            }
            badgeText="AVG"
            gradient="from-amber-500 to-orange-500"
          />

          <SecondaryStatCard
            icon={<TrendingDown size={20} strokeWidth={2.5} />}
            label="Out of Stock"
            value={loading ? "..." : stats.outOfStockCount}
            trendIcon={<AlertTriangle size={16} />}
            gradient="from-red-500 to-pink-500"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 xl:gap-6">
          {/* Recent Products */}
          <div className="lg:col-span-2 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 xl:p-7 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Recent Products
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </h2>
              <span className="px-3 py-1.5 text-xs font-bold text-gray-300 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                Latest {recentProducts.length}
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
                  <div className="absolute inset-0 w-16 h-16 border-4 border-cyan-500/20 border-b-cyan-500 rounded-full animate-spin animation-delay-150" />
                </div>
              </div>
            ) : recentProducts.length === 0 ? (
              <EmptyState
                icon={<Package size={36} strokeWidth={1.5} />}
                title="No products yet"
                description="Start by adding your first product"
              />
            ) : (
              <div className="space-y-3">
                {recentProducts.map((product, idx) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-4 p-4 transition-all border rounded-xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.04] border-white/10 hover:border-orange-500/40 group cursor-pointer"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {product.images?.[0] ||
                    product.thumbnail ||
                    product.images[0] ? (
                      <div className="relative flex-shrink-0 overflow-hidden rounded-lg w-16 h-16 bg-zinc-800/50 ring-2 ring-white/5 group-hover:ring-orange-500/30 transition-all">
                        <img
                          src={
                            product.images?.[0] ||
                            product.thumbnail ||
                            product.images[0]
                          }
                          alt={product.name}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center flex-shrink-0 rounded-lg w-16 h-16 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80">
                        <Package size={24} className="text-gray-500" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white truncate transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-300 font-semibold">
                          {product.category}
                        </span>
                        {product.brand && (
                          <span className="text-xs text-gray-500 font-medium">
                            • {product.brand}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-white">
                        ₹{product.price.toLocaleString()}
                      </p>
                      <p
                        className={`text-xs mt-1.5 font-bold px-2.5 py-1 rounded-lg border ${
                          product.stock === 0
                            ? "text-red-400 bg-red-500/10 border-red-500/30"
                            : product.stock < 10
                              ? "text-amber-400 bg-amber-500/10 border-amber-500/30"
                              : "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                        }`}
                      >
                        {product.stock === 0 ? "Out" : `${product.stock}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Low Stock Alert */}
          <div className="bg-gradient-to-br from-red-950/40 to-zinc-900/60 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 xl:p-7 shadow-2xl shadow-red-500/5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Stock Alert</h2>
              <div className="flex items-center justify-center w-11 h-11 border rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 border-red-500/30 shadow-lg shadow-red-500/10">
                <AlertTriangle
                  className="text-red-400"
                  size={20}
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-12 h-12 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
              </div>
            ) : lowStockProducts.length === 0 ? (
              <EmptyState
                icon={<Package size={36} strokeWidth={1.5} />}
                title="All Good!"
                description="No low stock items"
                variant="success"
              />
            ) : (
              <div className="space-y-3">
                {lowStockProducts.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-3 p-3.5 transition-all border rounded-xl bg-gradient-to-r from-red-500/5 to-transparent border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10 cursor-pointer group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white truncate group-hover:text-red-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5 font-medium">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="px-3 py-1.5 text-xs font-bold text-red-300 border rounded-lg bg-red-500/20 border-red-500/40 shadow-lg shadow-red-500/10">
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
        <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 xl:p-7 shadow-2xl">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Category Distribution
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </h2>
            <span className="px-3 py-1.5 text-xs font-bold text-gray-300 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              Top {topCategories.length}
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-pink-500/20 border-b-pink-500 rounded-full animate-spin animation-delay-150" />
              </div>
            </div>
          ) : topCategories.length === 0 ? (
            <EmptyState
              icon={<Layers size={36} strokeWidth={1.5} />}
              title="No categories yet"
              description="Add products to see distribution"
            />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {topCategories.map(([category, count], index) => {
                const percentage = (count / products.length) * 100;
                const gradients = [
                  {
                    from: "from-cyan-500",
                    to: "to-blue-500",
                    glow: "shadow-cyan-500/20",
                    text: "text-cyan-400",
                    border: "border-cyan-500/30",
                  },
                  {
                    from: "from-orange-500",
                    to: "to-pink-500",
                    glow: "shadow-orange-500/20",
                    text: "text-orange-400",
                    border: "border-orange-500/30",
                  },
                  {
                    from: "from-purple-500",
                    to: "to-fuchsia-500",
                    glow: "shadow-purple-500/20",
                    text: "text-purple-400",
                    border: "border-purple-500/30",
                  },
                  {
                    from: "from-emerald-500",
                    to: "to-teal-500",
                    glow: "shadow-emerald-500/20",
                    text: "text-emerald-400",
                    border: "border-emerald-500/30",
                  },
                  {
                    from: "from-rose-500",
                    to: "to-pink-500",
                    glow: "shadow-rose-500/20",
                    text: "text-rose-400",
                    border: "border-rose-500/30",
                  },
                ];
                const color = gradients[index % gradients.length];

                return (
                  <div
                    key={category}
                    className={`bg-gradient-to-br from-white/[0.03] to-white/[0.01] border ${color.border} rounded-xl p-5 hover:from-white/[0.08] hover:to-white/[0.04] hover:scale-[1.03] hover:shadow-xl ${color.glow} transition-all duration-300 cursor-pointer group backdrop-blur-sm`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex items-center justify-center w-11 h-11 bg-gradient-to-br ${color.from} ${color.to} rounded-xl shadow-lg ${color.glow} group-hover:shadow-xl transition-all`}
                      >
                        <Layers
                          size={20}
                          strokeWidth={2.5}
                          className="text-white"
                        />
                      </div>
                      <span className={`text-base font-bold ${color.text}`}>
                        {count}
                      </span>
                    </div>
                    <h3 className="mb-3 text-sm font-bold text-white truncate">
                      {category}
                    </h3>
                    <div className="h-2.5 mb-3 overflow-hidden rounded-full bg-white/5 shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${color.from} ${color.to} rounded-full transition-all duration-1000 ease-out shadow-lg ${color.glow}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-400">
                      {percentage.toFixed(1)}% of inventory
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
  gradient: string;
  highlight?: boolean;
  alert?: boolean;
  loading?: boolean;
}

function StatCard({
  icon,
  label,
  value,
  subValue,
  change,
  changeType,
  gradient,
  highlight,
  alert,
  loading,
}: StatCardProps) {
  const gradientParts = gradient.split(" ");
  const glowColor = gradientParts[0]
    .replace("from-", "")
    .replace("-500", "-500/20");

  return (
    <div
      className={`relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border ${
        highlight
          ? "border-orange-500/30"
          : alert
            ? "border-red-500/20"
            : "border-white/10"
      } rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300 group overflow-hidden shadow-xl ${
        highlight ? "shadow-orange-500/10" : ""
      }`}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg shadow-${glowColor} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
          >
            <span className="text-white">{icon}</span>
          </div>
          {change && (
            <div
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm ${
                changeType === "increase"
                  ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                  : "text-red-400 bg-red-500/10 border border-red-500/30"
              }`}
            >
              {changeType === "increase" ? (
                <ArrowUp size={13} strokeWidth={3} />
              ) : (
                <ArrowDown size={13} strokeWidth={3} />
              )}
              {change}%
            </div>
          )}
        </div>
        <p className="mb-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
          {label}
        </p>
        <p className="text-3xl font-bold text-white">
          {loading ? (
            <span className="inline-block w-28 h-9 rounded-lg animate-pulse bg-white/10" />
          ) : (
            value
          )}
        </p>
        {subValue && (
          <p className="mt-2 text-xs font-semibold text-gray-500">{subValue}</p>
        )}
      </div>
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
  gradient: string;
}

function SecondaryStatCard({
  icon,
  label,
  value,
  trendIcon,
  badgeText,
  gradient,
}: SecondaryStatCardProps) {
  const gradientParts = gradient.split(" ");
  const glowColor = gradientParts[0]
    .replace("from-", "")
    .replace("-500", "-500/20");

  return (
    <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group overflow-hidden shadow-xl">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl shadow-lg shadow-${glowColor} group-hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-white">{icon}</span>
          </div>
          {trendIcon && <span className="text-gray-400">{trendIcon}</span>}
          {badgeText && (
            <span className="text-xs font-bold text-gray-400 px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">
              {badgeText}
            </span>
          )}
        </div>
        <p className="mb-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
          {label}
        </p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
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
  const colors =
    variant === "success"
      ? {
          bg: "from-emerald-500/10 to-green-500/5",
          border: "border-emerald-500/30",
          icon: "text-emerald-400",
          glow: "shadow-emerald-500/20",
        }
      : {
          bg: "from-zinc-800/50 to-zinc-900/30",
          border: "border-white/10",
          icon: "text-gray-500",
          glow: "shadow-none",
        };

  return (
    <div className="py-20 text-center">
      <div
        className={`flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-2xl shadow-xl ${colors.glow}`}
      >
        <span className={colors.icon}>{icon}</span>
      </div>
      <p className="mb-2 text-lg font-bold text-white">{title}</p>
      <p className="text-sm text-gray-400 font-medium">{description}</p>
    </div>
  );
}
