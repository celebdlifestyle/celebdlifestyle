"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Layers,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  useUser,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      exact: true,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: Package,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: Layers,
      gradient: "from-purple-500 to-fuchsia-500",
    },
  ];

  const isActive = (item: (typeof menuItems)[0]) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 backdrop-blur-xl border-r border-white/10 z-50 transition-all duration-300 shadow-2xl ${
          isSidebarOpen ? "w-72" : "w-20"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo & Toggle */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 bg-gradient-to-r from-orange-500/5 to-transparent">
          {isSidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                Admin Panel
              </h1>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden lg:flex p-2 hover:bg-white/5 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight
              className={`text-gray-400 transition-transform duration-300 ${
                isSidebarOpen ? "rotate-180" : ""
              }`}
              size={20}
              strokeWidth={2.5}
            />
          </button>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        {/* User Profile */}
        <SignedIn>
          <div
            className={`mx-4 mt-4 mb-6 p-4 rounded-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-300 ${
              isSidebarOpen
                ? "opacity-100"
                : "opacity-0 h-0 p-0 m-0 overflow-hidden"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-orange-500/30 shadow-lg">
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={user.firstName || "User"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                      {user?.firstName?.[0] || "U"}
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg shadow-emerald-500/50" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-400 truncate font-medium">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <div
            className={`mx-4 mt-4 mb-6 transition-all duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <SignInButton>
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold text-sm h-11 px-4 cursor-pointer hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  active
                    ? "bg-gradient-to-r from-white/10 to-white/5 text-white shadow-lg"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {/* Active gradient background */}
                {active && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10`}
                  />
                )}

                {/* Icon with gradient on active */}
                <div className="relative z-10">
                  {active ? (
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={2.5}
                        className="text-white"
                      />
                    </div>
                  ) : (
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                {isSidebarOpen && (
                  <span className="font-semibold text-sm relative z-10">
                    {item.name}
                  </span>
                )}

                {active && isSidebarOpen && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 shadow-lg shadow-orange-400/50 relative z-10 animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {isSidebarOpen && (
          <div className="absolute bottom-6 left-4 right-4 p-4 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              <p className="text-xs text-gray-400 font-semibold">
                System Online
              </p>
            </div>
            <p className="text-xs text-gray-500 font-medium">
              Admin Dashboard v1.0
            </p>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:pl-72" : "lg:pl-20"
        }`}
      >
        {/* Top Bar */}
        <header className="h-20 bg-gradient-to-r from-zinc-900/95 to-zinc-950/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30 shadow-xl">
          <div className="h-full px-6 flex items-center justify-between">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 hover:scale-110"
            >
              <Menu className="text-gray-400" size={24} strokeWidth={2} />
            </button>

            <div className="flex-1 lg:flex-none" />

            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold text-sm h-10 px-5 cursor-pointer hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="hidden sm:block text-right">
                    <p className="text-xs font-bold text-white">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      Administrator
                    </p>
                  </div>
                  <div className="relative">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox:
                            "w-10 h-10 rounded-xl ring-2 ring-orange-500/30",
                        },
                      }}
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg shadow-emerald-500/50" />
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
