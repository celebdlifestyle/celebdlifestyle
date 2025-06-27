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
