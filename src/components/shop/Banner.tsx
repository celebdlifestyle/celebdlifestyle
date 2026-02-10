import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import MenBanner from "@/assets/images_21_9/21_9_Mens.jpg";
import WomenBanner from "@/assets/images_21_9/21_9_Womens.jpg";
import MenBanner_mobile from "@/assets/images_16_9/16_9_Mens.jpg";
import WomenBanner_mobile from "@/assets/images_16_9/16_9_Womens.jpg";
import NewHereBannerImage from "@/assets/images_21_9/21_9_NewHere.jpg";
import NewHereBannerImage_mobile from "@/assets/images_16_9/16_9_NewHere.jpg";

import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from "react";

export function ShopMen() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative mx-3 md:px-5 ">
      {/*Heading*/}
      <div className="my-8 flex items-center justify-between gap-3">
        <h2 className="text-lg sm:text-lg font-semibold tracking-widest">
          MR. CELEBD LOOK
        </h2>
        <Link
          href={"/collections/men"}
          className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
        >
          <span>SHOP</span>
          <ChevronRight size={14} />
        </Link>
      </div>

      {/* Desktop */}
      <Link
        href="/collections/men"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden md:block relative w-full aspect-[21/9] overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        >
          <Image
            src={MenBanner}
            alt="banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>

      {/* Mobile */}
      <Link
        href={"/collections/men"}
        className="md:hidden relative w-full aspect-[16/9]"
      >
        <Image
          src={MenBanner_mobile}
          alt="banner"
          fill
          className="object-cover"
        />
      </Link>
    </div>
  );
}

export function ShopWomen() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mx-3 md:px-5">
      {/* Heading */}
      <div className="my-8 flex items-center justify-between gap-3">
        <h2 className="text-lg sm:text-lg font-semibold tracking-widest">
          MISS CELEBD LOOK
        </h2>
        <Link
          href="/collections/women"
          className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors whitespace-nowrap"
        >
          <span>SHOP</span>
          <ChevronRight size={14} />
        </Link>
      </div>

      {/* Desktop */}
      <Link
        href="/collections/women"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden md:block relative w-full aspect-[21/9] overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        >
          <Image
            src={WomenBanner}
            alt="banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>

      {/* Mobile (no hover nonsense here) */}
      <div className="md:hidden relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={WomenBanner_mobile}
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function NewHereBanner() {
  return (
    <div className="relative md:p-20 py-12 border-gray-800 ">
      {/* Mobile */}
      <div className="md:hidden relative w-full aspect-[16/9]">
        <Image
          src={NewHereBannerImage_mobile}
          alt="banner-image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative w-full aspect-[21/9]">
        <Image
          src={NewHereBannerImage}
          alt="banner-image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:mb-10 font-bold text-white md:text-5xl">
            NEW TO CELEBD?
          </h1>

          <SignedIn>
            <div className="px-6 py-2 mt-4 font-bold text-center text-black bg-white cursor-pointer md:mt-10 md:px-10 md:py-3">
              ENTER THE CELEBD CLASS
            </div>
          </SignedIn>

          <SignedOut>
            <SignUpButton>
              <div className="px-6 py-2 mt-4 font-bold text-center text-black bg-white cursor-pointer md:mt-10 md:px-10 md:py-3 shadow-md hover:shadow-lg transition-all">
                ENTER THE CELEBD CLASS
              </div>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
