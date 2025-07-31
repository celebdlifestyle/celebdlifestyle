import Link from "next/link";

export default function Page() {
  return (
    <div className="relative my-5">
      <img
        src="https://cdn.shopify.com/s/files/1/2185/2813/files/SITE_5.14_CandyRed_Split_Hero_DESKTOP-1_2000x2000.jpg?v=1750793975"
        alt="banner"
      />
      <div className="absolute bottom-5 md:bottom-20 grid md:flex gap-2 items-center justify-center md:left-[35%] left-[30%]">
        <Link href={"/collections/women"}>
          <h1 className="px-6 py-2 font-bold text-black bg-white cursor-pointer text-nowrap md:px-10 md:py-3">
            SHOP WOMEN
          </h1>
        </Link>

        <Link href={"/collections/men"}>
          <h1 className="px-6 py-2 font-bold text-black bg-white cursor-pointer text-nowrap md:px-10 md:py-3">
            SHOP MEN
          </h1>
        </Link>
      </div>
    </div>
  );
}

export function NewHereBanner() {
  return (
    <div className="relative md:p-20">
      <img
        src="https://cdn.shopify.com/s/files/1/2185/2813/files/00_NewToAlo_Hero_Desktop_f9ccd18c-2759-4e46-a29f-dbdf833522e9_2000x2000.jpg?v=1746056193"
        alt="banner-image"
      />

      <div className="absolute bottom-[20%] left-[25%] md:bottom-[40%] md:left-[36%]">
        <h1 className="text-2xl font-bold text-white md:text-5xl">
          NEW TO CELEBD?
        </h1>
        <div className="px-6 py-2 mt-1 font-bold text-center text-black bg-white cursor-pointer md:mt-16 text-nowrap md:px-10 md:py-3">
          START HERE
        </div>
      </div>
    </div>
  );
}
