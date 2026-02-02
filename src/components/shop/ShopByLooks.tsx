import Image from "next/image";
import Link from "next/link";

export default function ShopByLook() {
  return (
    <div className="grid items-center justify-center h-full gap-10 my-10 md:gap-5 md:flex ">
      <div className="md:w-[35rem]">
        <div className="relative cursor-pointer ">
          <Image
            src="https://cdn.shopify.com/s/files/1/2185/2813/files/ssb_editorial_1200x1200.jpg?v=1750102499"
            alt="category-1"
            width={300}
            height={300}
            className="object-cover w-full"
          />

          <h3 className="absolute bg-black text-white w-[20rem] px-2 md:w-[28rem] h-10 flex items-end justify-end bottom-0 right-0 font-semibold tracking-widest text-md ">
            VACATIONS MODE ACTIVATED
          </h3>
        </div>

        <Link
          href={"#"}
          className="block md:ml-28 px-2 text-right md:w-[28rem] bg-black text-white cursor-pointer"
        >
          <p className="text-2xl md:text-3xl hover:underline curso-pointer">
            Your packing list has never looked better.
          </p>

          <p className="mt-4 text-sm font-semibold underline ">
            Shop Travel at CELEBD
          </p>
        </Link>
      </div>

      <div className="md:w-[35rem]">
        <div className="relative cursor-pointer ">
          <Image
            src="https://cdn.shopify.com/s/files/1/2185/2813/files/editorial_trending_1200x1200.jpg?v=1750706203"
            alt="category-1"
            width={600}
            height={600}
            className="object-cover"
          />
          <h3 className="absolute bg-black text-white w-[20rem] px-2 md:w-[28rem] h-10 flex items-end justify-end bottom-0 right-0 font-semibold tracking-widest text-md ">
            TREND REPORT
          </h3>
        </div>

        <Link
          href={"#"}
          className="block md:ml-28 px-2 text-right md:w-[28rem] cursor-pointer bg-black text-white"
        >
          <p className="text-2xl md:text-3xl hover:underline curso-pointer">
            Seasons shift & so does the opportunuty to reset your closet.
          </p>

          <p className="mt-4 text-sm font-semibold underline ">
            Shop Summer at CELEBD
          </p>
        </Link>
      </div>
    </div>
  );
}
