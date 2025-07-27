"use client";

import React from "react";

import { MainCarousel } from "../reusable/MainCarousel";

export const LandingPage = () => {

  return (
    <div className="flex justify-center w-full">
      <MainCarousel
        carouselItems={[1, 2, 3, 4, 5].map((indexSample) => ({
          image: "",
          title: indexSample.toString(),
        }))}
      />
    </div>
  );
};
