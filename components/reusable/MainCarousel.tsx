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

  const autoPlayConfiguration = 10000;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="w-full flex justify-center">
      <Carousel
        className="w-[90%] sm:w-[80%] h-4/4"
        plugins={[
          Autoplay({
            delay: autoPlayConfiguration,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="w-full h-4/5 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-start p-3 sm:p-5 h-full">
                  <div className="w-full max-h-[80%] flex items-center justify-center mb-3">
                    <Image
                      onClick={() => handleImageClick(index)}
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="w-full h-auto max-h-full object-contain rounded-md"
                    />
                  </div>

                  <div className="w-full text-center px-2">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-yellow-600 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="scale-125 cursor-pointer" />
        <CarouselNext className="scale-125 cursor-pointer" />
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
