"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

type CarouselItems = {
  title: string;
  image: string;
};

export const MainCarousel = ({
  carouselItems,
}: {
  carouselItems: CarouselItems[];
}) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="w-full flex justify-center">
      <Carousel className="w-[80%] h-[30vh]">
        <CarouselContent className="flex">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full flex justify-center"
            >
              <Card className="w-full h-full cursor-pointer">
                <CardContent
                  className="flex flex-col items-center justify-center p-4 h-[30vh]"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="max-h-[25vh] object-contain mb-2 rounded"
                    style={{ width: "100%" }}
                  />
                  <span>{item.title}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
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
