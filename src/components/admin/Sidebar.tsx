"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Layers,
  Menu,
  X,
  ChevronRight,
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

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: Layers,
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#13131a] border-r border-white/5 z-50 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo & Toggle */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold text-white tracking-tight">
              Admin Panel
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden lg:flex p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            <ChevronRight
              className={`text-gray-400 transition-transform duration-300 ${
                isSidebarOpen ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  active
                    ? "bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/5"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  className={active ? "text-cyan-400" : ""}
                />
                {isSidebarOpen && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
                {active && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {isSidebarOpen && (
          <div className="absolute bottom-6 left-4 right-4 p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-xs text-gray-500 font-medium">
              Admin Dashboard v1.0
            </p>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:pl-64" : "lg:pl-20"
        }`}
      >
        {/* Top Bar */}
        <header className="h-20 bg-[#13131a]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-30">
          <div className="h-full px-6 flex items-center justify-between">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-xl transition-colors"
            >
              <Menu className="text-gray-400" size={24} />
            </button>

            <div className="flex-1 lg:flex-none" />

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                <SignedOut>
                  <SignInButton>
                    <button className="bg-orange-500 text-white rounded-md font-medium text-sm sm:text-base h-10 sm:h-10 px-4 sm:px-5 cursor-pointer">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
