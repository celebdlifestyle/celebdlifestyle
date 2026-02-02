import Link from "next/link";
import Image from "next/image";
import Banner from "@/assets/images/banner.jpg";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function CategoriesBanner() {
  return (
    <div className="relative my-10 py-5">
      <Image
        src={Banner}
        alt="banner"
        className="object-cover w-full h-full md:h-96"
      />
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-2 items-center justify-center w-full px-4">
        <Link href={"/collections/women"}>
          <h1 className="px-6 py-2 font-bold text-black bg-white cursor-pointer text-nowrap md:px-10 md:py-3 hover:bg-gray-100 transition-colors">
            SHOP WOMEN
          </h1>
        </Link>
        <Link href={"/collections/men"}>
          <h1 className="px-6 py-2 font-bold text-black bg-white cursor-pointer text-nowrap md:px-10 md:py-3 hover:bg-gray-100 transition-colors">
            SHOP MEN
          </h1>
        </Link>
      </div>
    </div>
  );
}

export function NewHereBanner() {
  return (
    <div className="relative md:p-20  border-gray-200 ">
      <Image
        src="https://cdn.shopify.com/s/files/1/2185/2813/files/00_NewToAlo_Hero_Desktop_f9ccd18c-2759-4e46-a29f-dbdf833522e9_2000x2000.jpg?v=1746056193"
        alt="banner-image"
        width={2000}
        height={800}
        className="object-cover w-full"
        priority
      />

      <div className="absolute bottom-[20%] left-[25%] md:bottom-[40%] md:left-[36%]">
        <h1 className="text-2xl font-bold text-white md:text-5xl">
          NEW TO CELEBD?
        </h1>

        <SignedIn>
          <div className="px-6 py-2 mt-1 font-bold text-center text-black bg-white cursor-pointer md:mt-16 text-nowrap md:px-10 md:py-3">
            SHOP HERE
          </div>
        </SignedIn>

        <SignedOut>
          <SignUpButton>
            <div
              className="px-6 py-2 mt-1 font-bold text-center text-black bg-white cursor-pointer md:mt-16 text-nowrap md:px-10 md:py-3
                            shadow-md hover:shadow-lg transition-all"
            >
              START HERE
            </div>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  );
}
