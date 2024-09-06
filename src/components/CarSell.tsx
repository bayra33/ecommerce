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
import Image from "next/image";

export const CarSell = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) // Ensures continuous looping
  );

  return (
    <div className="m-auto w-full">
      <div className="flex justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="fit-content" // Set the carousel container to 1040px x 446px
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      {index === 0 ? (
                        <div className="relative w-[1040px] h-[446px]"> {/* Set the image container to 1040px x 446px */}
                          <Image
                            src="/hoode.jpg"
                            alt="Hoodie"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      ) : index === 1 ? (
                        <div className="relative w-[1040px] h-[446px]"> {/* Set the image container to 1040px x 446px */}
                          <Image 
                          className="rounded-lg"
                            src="/hoode.jpg"
                            alt="Burger"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      ) :  (
                        <div className="relative w-[1040px] h-[446px]"> {/* Set the image container to 1040px x 446px */}
                        <Image 
                        className="rounded-lg"
                          src="/hoode.jpg"
                          alt="Burger"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
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
