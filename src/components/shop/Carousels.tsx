import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/product.type";
import { CategoryCardSkeleton, ProductCardSkeleton } from "./Skeletons";

import Slider1 from "@/assets/images_21_9/21_9_Slider1.jpg";
import Slider2 from "@/assets/images_21_9/21_9_Slider2.jpg";
import Slider3 from "@/assets/images_21_9/21_9_Slider3.jpg";
import Slider4 from "@/assets/images_21_9/21_9_Slider4.jpg";

import Slider1_mobile from "@/assets/images_16_9/16_9_Slider1.jpg";
import Slider2_mobile from "@/assets/images_16_9/16_9_Slider2.jpg";
import Slider3_mobile from "@/assets/images_16_9/16_9_Slider3.jpg";
import Slider4_mobile from "@/assets/images_16_9/16_9_Slider4.jpg";

import { useEffect, useState } from "react";
import { useCategoryStore } from "@/store/categories.store";

export const Sliders = [
  {
    id: 1,
    title: "Streetwear Collection",
    image: Slider1,
    mobileImage: Slider1_mobile,
  },
  {
    id: 2,
    title: "Hoodies & Sweatshirts",
    image: Slider2,
    mobileImage: Slider2_mobile,
  },
  {
    id: 3,
    title: "Casual Summer Fits",
    image: Slider3,
    mobileImage: Slider3_mobile,
  },
  {
    id: 4,
    title: "Casual Summer Fits",
    image: Slider4,
    mobileImage: Slider4_mobile,
  },
];

export function ImageCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="z-0"
    >
      <CarouselContent>
        {Sliders.map((slide) => (
          <CarouselItem key={slide.id} className="basis-full">
            {/* Desktop */}
            <div className="hidden md:block relative w-full aspect-[21/9] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title || "Carousel image"}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Mobile */}
            <div className="md:hidden relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={slide.mobileImage}
                alt={slide.title || "Carousel image"}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function CollectionsCarousel() {
  const { categories, fetchCategories, loading } = useCategoryStore();
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    fetchCategories();
    // Minimum loading time of 1.2 seconds
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [fetchCategories]);

  // Show loading only if either API is loading OR minimum time hasn't passed
  const isLoading = loading || !minLoadingComplete;

  return (
    <div className="relative w-full">
      <Carousel opts={{ align: "start", loop: false }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <CategoryCardSkeleton />
              </CarouselItem>
            ))
          ) : categories.length === 0 ? (
            <div className="w-full py-12 text-center">
              <p className="text-gray-500">No collections available yet.</p>
            </div>
          ) : (
            categories.slice(0, 6).map((collection) => (
              <CarouselItem
                key={collection._id}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link href={`/collections/${collection.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden rounded-md transition-all duration-300 ease-out group-hover:shadow-xl group-hover:shadow-black/40">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="w-full mt-3 text-sm font-semibold tracking-widest text-center md:text-base lg:text-lg transition-transform duration-300 group-hover:-translate-y-0.5">
                      {collection.name}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        {!isLoading && categories.length > 0 && (
          <>
            <CarouselPrevious className="left-2 -translate-x-0" />
            <CarouselNext className="right-2 translate-x-0" />
          </>
        )}
      </Carousel>
    </div>
  );
}

export function ProductCarousel({
  products,
  loading,
}: ProductProps & { loading?: boolean }) {
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);

  useEffect(() => {
    // Minimum loading time of 1.2 seconds
    const timer = setTimeout(() => {
      setMinLoadingComplete(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Show loading only if either API is loading OR minimum time hasn't passed
  const isLoading = loading || !minLoadingComplete;

  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i} className="basis-2/5 md:basis-1/5">
                <ProductCardSkeleton />
              </CarouselItem>
            ))
          ) : products.length === 0 ? (
            <div className="w-full h-72 py-12 text-center flex items-center justify-center">
              <p className="text-gray-500 text-xl font-semibold">
                No products available yet.
              </p>
            </div>
          ) : (
            products.map((product) => (
              <CarouselItem
                key={product._id}
                className="cursor-pointer basis-2/5 md:basis-1/5"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))
          )}
        </CarouselContent>

        {!isLoading && products.length > 0 && (
          <>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </>
        )}
      </Carousel>
    </div>
  );
}
