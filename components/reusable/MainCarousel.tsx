"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

type CarouselItems = {
  title: string;
  image: string;
  description: string;
};

export const MainCarousel = ({
  carouselItems,
}: {
  carouselItems: CarouselItems[];
}) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoPlayConfiguration = 5000;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="w-full flex justify-center">
      <Carousel
        className="w-[90%] sm:w-[80%] h-[30vh] sm:h-[50vh]"
        plugins={[
          Autoplay({
            delay: autoPlayConfiguration,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="w-full h-full cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent
                  className="flex flex-col items-center justify-start p-3 sm:p-5 h-full"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative w-full aspect-[16/9] mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain rounded-md"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-yellow-600 text-center">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={carouselItems.map((item) => ({
          src: item.image,
          title: item.title,
        }))}
        plugins={[Zoom, Fullscreen]}
      />
    </div>
  );
};
