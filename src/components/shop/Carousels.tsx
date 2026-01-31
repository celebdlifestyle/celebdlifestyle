import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/product.type";

import Slider1 from "@/assets/images/slider-1.jpg";
import Slider2 from "@/assets/images/slider-2.jpg";
import Slider3 from "@/assets/images/slider-3.jpg";
import Slider4 from "@/assets/images/slider-4.jpg";

import { useEffect } from "react";
import { useCategoryStore } from "@/store/categories.store";
import { useRouter } from "next/navigation";

export const Sliders = [
  {
    id: 1,
    title: "Streetwear Collection",
    image: Slider1,
  },
  {
    id: 2,
    title: "Hoodies & Sweatshirts",
    image: Slider2,
  },
  {
    id: 3,
    title: "Casual Summer Fits",
    image: Slider3,
  },
  {
    id: 4,
    title: "Trending Accessories",
    image: Slider4,
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
          <CarouselItem key={slide.id} className="basis-1/1">
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-auto object-cover object-top md:h-[35rem]"
              priority={slide.id === 1} // first image loads faster
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function CollectionsCarousel() {
  const router = useRouter();
  const { categories, fetchCategories, loading } = useCategoryStore();
  useEffect(() => {
    fetchCategories();
  }, []);
  if (loading) return <div className="p-6">Loading categories...</div>;
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {categories.slice(0, 6).map((collection) => (
            <CarouselItem
              onClick={() =>
                router.push(`/collections/${collection.slug}/${collection._id}`)
              }
              key={collection._id}
              className="basis-1/2 lg:basis-1/4 cursor-pointer"
            >
              {/* Pop-in wrapper: scales up + adds shadow on hover */}
              <div className="transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1">
                <div className="w-full h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="w-full mt-2 text-sm font-semibold tracking-widest text-center md:text-lg">
                  {collection.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}

export function ProductCarousel({ products }: ProductProps) {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product._id}
              className="cursor-pointer basis-2/5 md:basis-1/5"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
