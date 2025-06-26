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
      <div className="h-10 text-center font-bold py-2 bg-[#B5D0E5]">
        Free Shipping over Rs. 6,900
      </div>

      <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-3 bg-white border-b border-white">
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
          CELEBD
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

        <div className="flex items-center justify-center gap-2">
          <Search className="hidden cursor-pointer md:block" />
          <div className="items-end hidden gap-1 py-1 text-sm border-b-2 cursor-pointer md:flex">
            <User />
            <p className="font-semibold">SIGN IN TO BECOME CELEBD</p>
          </div>
          <User className="md:hidden" />
          <Heart className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex justify-between px-1 py-2 text-sm text-center text-white bg-black md:hidden h-9 flex-center ">
        <div>
          SIGN IN TO BECOME{" "}
          <span className={`${dedot_title.className} text-lg mx-1`}>
            CELEBD
          </span>
        </div>
        <div className="mx-2 text-sm font-bold tracking-widest border-b">
          SIGN IN
        </div>
      </div>
    </>
  );
}
