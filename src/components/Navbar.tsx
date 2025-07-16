"use client";

import Link from "next/link";
import { ShoppingBag, Heart, User, Search } from "lucide-react";
import { dedot_title } from "@/app/fonts/font";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavButtons from "@/components/NavButtons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="h-10 text-center font-bold hidden py-2 bg-[#B5D0E5]">
        Free Shipping over Rs. 6,900
      </div>

      <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-3 bg-black">
        <Menu
          className="md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
            console.log(showMenu);
          }}
        />
        {showMenu && <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />}

        <Link
          className={`${dedot_title.className} h-16 py-4 md:hidden font-semibold text-4xl md:text-5xl`}
          href={"/"}
        >
          CELEBD LIFESTYLE
        </Link>

        <div className="items-center justify-center hidden gap-2 md:flex md:gap-10">
          <div>
            <Link
              className={`${dedot_title.className} font-semibold text-4xl md:text-5xl`}
              href={"/"}
            >
              CELEBD
            </Link>
          </div>

          <NavButtons />
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-5">
          <Search strokeWidth={1} className="hidden cursor-pointer md:block" />
          <Link href={"/profile"}>
            <User strokeWidth={1} className="cursor-pointer" />
          </Link>
          <Link href={"/wishlist"}>
            <Heart strokeWidth={1} className="cursor-pointer" />
          </Link>
          <Link href={"/cart"}>
            <ShoppingBag strokeWidth={1} className="cursor-pointer" />
          </Link>
        </div>
      </nav>
    </>
  );
}
