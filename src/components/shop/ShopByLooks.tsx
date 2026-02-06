import Image from "next/image";
import Link from "next/link";
import image1 from "@/assets/images_1_1/1_1_Look1.jpg";
import image2 from "@/assets/images_1_1/1_1_Look2.jpg";

export default function ShopByLook() {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl md:py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
        {/* First Look */}
        <div className="group">
          <div className="relative overflow-hidden">
            <Image
              src={image1}
              alt="Vacation Mode Collection"
              width={600}
              height={600}
              className="object-cover w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 w-full ">
              <div className="w-full text-right text-md">
                <h3 className="inline-block bg-black px-4 py-2 font-bold tracking-[0.2em] text-white md:text-xs">
                  VACATION MODE ACTIVATED
                </h3>
              </div>
              <Link
                href="#"
                className="block border border-neutral-400 bg-neutral-950 px-4 py-5 text-white transition-all duration-300 hover:bg-neutral-900 md:px-6 md:py-6"
              >
                <p className="mb-3 text-lg transition-opacity md:text-xl lg:text-2xl group-hover:opacity-80">
                  Your packing list has never looked better.
                </p>
                <p className="inline-block text-[10px] font-semibold tracking-wider transition-transform border-b border-white md:text-xs group-hover:translate-x-2">
                  OWN THE TRAVEL LOOK AT CELEBD →
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Look */}
        <div className="group">
          <div className="relative overflow-hidden">
            <Image
              src={image2}
              alt="Trend Report Collection"
              width={600}
              height={600}
              className="object-cover w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 w-full">
              <div className="w-full text-right text-md">
                <h3 className="inline-block bg-black px-4 py-2 font-bold tracking-[0.2em] text-white md:text-xs">
                  TREND REPORT
                </h3>
              </div>
              <Link
                href="#"
                className="block border border-neutral-400 bg-neutral-950 px-4 py-5 text-white transition-all duration-300 hover:bg-neutral-900 md:px-6 md:py-6"
              >
                <p className="mb-3 text-lg transition-opacity md:text-xl lg:text-2xl group-hover:opacity-80">
                  Seasons shift & so does the opportunity to reset your closet.
                </p>
                <p className="inline-block text-[10px] font-semibold tracking-wider transition-transform border-b border-white md:text-xs group-hover:translate-x-2">
                  OWN SUMMER LOOK AT CELEBD →
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
