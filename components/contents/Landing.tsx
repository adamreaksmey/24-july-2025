"use client";

import React from "react";

import { MainCarousel } from "../reusable/MainCarousel";
import { carouselImages } from "@/assets/images/carouselImages";

export const LandingPage = () => {
  const mappedImages = structuredClone(carouselImages);

  return (
    <div>
      <div className="flex justify-center w-full" style={{ maxHeight: '80vh' }}>
        <MainCarousel
          carouselItems={mappedImages.map((data) => ({
            image: data.image,
            title: data.title,
            description: data.description,
          }))}
        />
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
          Against the Odds
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
          Cambodia stood firm against overwhelming pressure. While Thailand
          brought in wealth, advanced weaponry, and global influence — we
          brought spirit, unity, and the will to protect our land and dignity.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-400 italic">
          &quot;They had the money. We had the heart.&quot;
        </p>
      </div>
    </div>
    );
};
