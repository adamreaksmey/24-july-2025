"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type CarouselItems = {
  title: string;
  image: string;
};

export const MainCarousel = ({
  carouselItems,
}: {
  carouselItems: CarouselItems[];
}) => {
  return (
    <div className="w-full flex justify-center">
      <Carousel className="w-[80%] h-[30vh]">
        <CarouselContent className="flex">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-full flex justify-center">
              <Card className="w-full h-full">
                <CardContent className="flex items-center justify-center h-full p-4">
                  <span className="text-2xl font-semibold text-center">{item.title}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
