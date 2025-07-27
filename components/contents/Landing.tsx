"use client";

import React from "react";

import { MainCarousel } from "../reusable/MainCarousel";
import { carouselImages } from "@/assets/images/carouselImages";

export const LandingPage = () => {
  const mappedImages = structuredClone(carouselImages);

  return (
    <div className="flex justify-center w-full">
      <MainCarousel
        carouselItems={mappedImages.map((data) => ({
          image: data.image,
          title: data.title,
        }))}
      />
    </div>
  );
};
