"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarSell = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, loop: true }) // Ensures continuous looping
  );

  return (
    <div className="m-auto w-full">
      <div className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {index === 0 ? (
                        <img
                          src="https://i.ebayimg.com/images/g/mrQAAOSww5Rj9PFp/s-l1600.webp"
                          alt="Car"
                          className="object-cover w-full h-full"
                        />
                      ) : index === 1 ? (
                        <img
                          src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                          alt="Burger"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
