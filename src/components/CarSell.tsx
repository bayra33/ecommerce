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
    Autoplay({ delay: 3000, stopOnInteraction: false }) // Continuous looping autoplay
  );

  // Store image data in an array for easy mapping
  const images = [
    { src: "/hoode.jpg", alt: "Hoodie Image" },
    { src: "/hoode.jpg", alt: "Second Hoodie Image" },
    { src: "/hoode.jpg", alt: "Third Hoodie Image" },
    { src: "/hoode.jpg", alt: "Fourth Hoodie Image" },
    { src: "/hoode.jpg", alt: "Fifth Hoodie Image" },
  ];

  return (
    <div className="m-auto max-w-[1080px] w-full mt-6 mb-6">
      <div className="flex justify-center">
        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="flex items-center justify-center">
                      <div className="relative w-full h-[446px] ">
                        <Image
                          className="rounded-lg flex items-center"
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-0 z-10">
            <CarouselPrevious className="text-white bg-black rounded-full p-2 m-2 hover:bg-gray-800 transition" />
          </div>
          <div className="absolute top-1/2 right-0 z-10">
            <CarouselNext className="text-white bg-black rounded-full p-2 m-2 hover:bg-gray-800 transition" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
