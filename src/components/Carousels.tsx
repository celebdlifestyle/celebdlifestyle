import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Collections } from "@/assets/data";

import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/product";

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
        <CarouselItem className="basis-1/1">
          <img
            src="https://cdn.shopify.com/s/files/1/2185/2813/files/SITE_5.14_Mens_Limestone_LP_DESKTOP_NoCTA_1_2000x2000.jpg?v=1748475033"
            alt="image"
          />
        </CarouselItem>
        <CarouselItem className="basis-1/1">
          <img
            src="https://www.aloyoga.com/cdn/shop/files/DESKTOP_CR_BIS_02-1_ee2f9f88-bd2a-46f2-ba56-87d88445700a_1944x.progressive.jpg?v=1750275472"
            alt="image"
          />
        </CarouselItem>
        <CarouselItem className="basis-1/1">
          <img
            src="https://www.aloyoga.com/cdn/shop/files/DESKTOP_SB_TENNIS_CLUB-1_1944x.progressive.jpg?v=1750451798"
            alt="image"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export function CollectionsCarousel() {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {Collections.slice(0, 6).map((collection) => (
            <CarouselItem
              key={collection.id}
              className="basis-1/2 lg:basis-1/4"
            >
              <img
                src={collection.image}
                alt="product image"
                className="h-52 md:h-[25rem] w-full object-cover"
              />
              <p className="w-full mt-2 text-sm font-semibold tracking-widest text-center md:text-lg">
                {collection.name}
              </p>
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
              key={product.id}
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
