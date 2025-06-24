"use client";

import Link from "next/link";
import { ShoppingBag, Heart, User, Search } from "lucide-react";
// import { dedot } from "@/app/fonts/font";
import { dedot_title } from "@/app/fonts/font";

export default function Navbar() {
  return (
    <>
      <div className="h-10 text-center py-2 bg-[#B5D0E5]">
        Free Shipping over Rs. 6,900
      </div>

      <nav className="sticky top-0 z-50 bg-white flex items-center justify-between w-full h-16 px-3 border-b border-white">
        <div className="flex items-center justify-center gap-10">
          <div>
            <Link
              className={`${dedot_title.className} font-semibold text-5xl`}
              href={"/"}
            >
              CELEBD
            </Link>
          </div>

          <div>
            <ul className="flex text-md gap-5 font-[500] tracking-widest">
              <li>
                <Link className="hover:border-b-2" href={"/collections/mens"}>
                  MENS
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-2" href={"/collections/womens"}>
                  WOMENS
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2"
                  href={"/collections/accesories"}
                >
                  TEENS
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2"
                  href={"/collections/accesories"}
                >
                  BLOGS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 ">
          <Search className="cursor-pointer" />
          <div className="flex items-end gap-1 py-1 text-sm border-b-2 cursor-pointer">
            <User />
            <p className="font-semibold">SIGN IN TO BECOME CELEBD</p>
          </div>
          <Heart className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />
        </div>
      </nav>
    </>
  );
}
