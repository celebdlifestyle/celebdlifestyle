import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Collections } from "@/app/data";

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
    <div className="relative px-6">
      <Carousel>
        <CarouselContent className="pl-2 pr-2">
          {Collections.slice(0, 6).map((collection) => (
            <CarouselItem
              key={collection.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <img
                src={collection.image}
                alt="product image"
                className="h-[25rem] w-full object-cover rounded-sm"
              />
              <p className="text-lg font-semibold text-center w-full tracking-widest mt-2">
                {collection.name}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 " />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
