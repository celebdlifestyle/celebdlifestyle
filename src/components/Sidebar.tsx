"use client";

import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = {
  women: [
    { label: "WOMEN'S CLOTHING", image: "/images/women1.jpg" },
    { label: "BEST SELLERS", image: "/images/women2.jpg" },
    { label: "ACCESSORIES", image: "/images/women3.jpg" },
    { label: "SHOP BY ACTIVITY", image: "/images/women4.jpg" },
    { label: "NEW ARRIVALS", image: "/images/women5.jpg" },
    { label: "SHOES", image: "/images/women6.jpg" },
    { label: "SPOTLIGHT ON", image: "/images/women7.jpg" },
    { label: "WELLNESS", image: "/images/women8.jpg" },
  ],
  Men: [
    { label: "WOMEN'S CLOTHING", image: "/images/women1.jpg" },
    { label: "BEST SELLERS", image: "/images/women2.jpg" },
    { label: "ACCESSORIES", image: "/images/women3.jpg" },
    { label: "SHOP BY ACTIVITY", image: "/images/women4.jpg" },
    { label: "NEW ARRIVALS", image: "/images/women5.jpg" },
    { label: "SHOES", image: "/images/women6.jpg" },
    { label: "SPOTLIGHT ON", image: "/images/women7.jpg" },
    { label: "WELLNESS", image: "/images/women8.jpg" },
  ],
  Teen: [
    { label: "WOMEN'S CLOTHING", image: "/images/women1.jpg" },
    { label: "BEST SELLERS", image: "/images/women2.jpg" },
    { label: "ACCESSORIES", image: "/images/women3.jpg" },
    { label: "SHOP BY ACTIVITY", image: "/images/women4.jpg" },
    { label: "NEW ARRIVALS", image: "/images/women5.jpg" },
    { label: "SHOES", image: "/images/women6.jpg" },
    { label: "SPOTLIGHT ON", image: "/images/women7.jpg" },
    { label: "WELLNESS", image: "/images/women8.jpg" },
  ],
  ACCESSORIES: [
    { label: "WOMEN'S CLOTHING", image: "/images/women1.jpg" },
    { label: "BEST SELLERS", image: "/images/women2.jpg" },
    { label: "ACCESSORIES", image: "/images/women3.jpg" },
    { label: "SHOP BY ACTIVITY", image: "/images/women4.jpg" },
    { label: "NEW ARRIVALS", image: "/images/women5.jpg" },
    { label: "SHOES", image: "/images/women6.jpg" },
    { label: "SPOTLIGHT ON", image: "/images/women7.jpg" },
    { label: "WELLNESS", image: "/images/women8.jpg" },
  ],
};

export default function Sidebar({ showMenu, setShowMenu }: MenuProps) {
  const [activeTab] = useState<keyof typeof categories>("women");

  return (
    <div className="absolute top-0 left-0 w-screen h-screen p-4 space-y-4 overflow-y-auto text-white bg-black">
      <X
        className="absolute top-3 right-3"
        onClick={() => setShowMenu(!showMenu)}
      />
      {/* Sign In */}
      <div className="flex items-center gap-2 pb-3 text-sm font-medium border-b border-white/20">
        <span className="text-white">👤 SIGN IN TO GET REWARDS</span>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 pl-10 text-white rounded-md bg-zinc-900 placeholder-white/50"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="women" className="w-full">
        <TabsList className="flex w-full gap-5 mb-2 overflow-y-auto text-white rounded-md bg-zinc-800">
          {Object.keys(categories).map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-white data-[state=active]:text-black tracking-widest"
            >
              {cat.toUpperCase()}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-3">
          {categories[activeTab].map((item) => (
            <div key={item.label} className="space-y-1 text-center">
              <div className="relative w-full h-24 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.label}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="text-xs font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </Tabs>

      <div className="pt-10 text-white border-t"> Select Your Language </div>
    </div>
  );
}
