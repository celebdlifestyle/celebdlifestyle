"use client";
import Link from "next/link";
import { CircleUser, Search, ShieldUser } from "lucide-react";
import { dedot_title } from "@/app/fonts/font";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavButtons from "./NavButtons";
import SearchPanel from "./SearchPanel";
import {
  SignInButton,
  useUser,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <>
      <div className="h-10 text-center font-bold hidden py-2 bg-[#B5D0E5]">
        Free Shipping over Rs. 6,900
      </div>
      <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-5 bg-black">
        <Menu
          className="md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Link
          className={`${dedot_title.className} h-16 pt-5 md:hidden font-semibold text-xl`}
          href={"/"}
        >
          CELEBD LIFESTYLE
        </Link>
        <div className="items-center justify-center hidden gap-2 md:flex md:gap-10">
          <Link
            className={`${dedot_title.className} font-semibold text-4xl`}
            href={"/"}
          >
            CELEBD LIFESTYLE
          </Link>
          <NavButtons />
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-5">
          <span
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 cursor-pointer group"
            onClick={() => setShowSearch(true)}
          >
            <Search
              strokeWidth={1.5}
              className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300 transition-colors"
            />
            <span className="hidden md:block text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Search
            </span>
          </span>

          {isAdmin && (
            <Link href="/admin">
              <button className="hidden md:flex items-center gap-2 px-6 h-10 rounded-md bg-zinc-900 text-white text-sm font-semibold tracking-wide transition-all hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
                <ShieldUser />
                <span>Admin Dashboard</span>
              </button>
            </Link>
          )}

          <SignedOut>
            <SignInButton>
              <CircleUser className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {/* Search Panel */}
      <SearchPanel isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}
