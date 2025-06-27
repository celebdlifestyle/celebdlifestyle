import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Collections } from "@/app/data";
import { useState } from "react";

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

// You can define a type like this for better TypeScript support:
type Product = {
  id: number;
  slug: string;
  title: string;
  color: string;
  price: number;
  image1: string;
  image2: string;
};

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-2/5 md:basis-1/5 cursor-pointer"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div>
                <img
                  src={
                    hoveredProductId === product.id
                      ? product.image2
                      : product.image1
                  }
                  alt={product.slug}
                  className="h-52 md:h-96 transition-all duration-300"
                />
                <div className="text-sm font-bold md:font-semibold md:text-[1rem] grid gap-1 my-1">
                  <p className="hover:underline">
                    {product.title} - {product.color}
                  </p>
                  <p>₹{product.price}</p>
                </div>
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
