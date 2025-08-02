"use client";

import React from "react";

import { MainCarousel } from "../reusable/MainCarousel";
import { carouselImages } from "@/assets/images/carouselImages";
import { Separator } from "../ui/separator";
import { BlockQuote } from "./BlockQuote";
import { ConflictAlert } from "./ConflictAlert";

export const LandingPage = () => {
  const mappedImages = structuredClone(carouselImages);
  const quotes = [
    {
      word: '"ជីវិតជូនជាតិ ធាតុជូនម្តាយ។" - My Life for My Country, My Ashes for My Mother.',
      author: "Cambodian Frontline Soldiers",
    },
    {
      word: '"អាចនឹងមិនជឿ 89 នាក់ ទប់នឹង 1000នាក់ជាង! នេះជារឿងពិត បើមិនពិតឱ្យ ខ្ញុំទៅជាយ៉ាងណាក៏បានព្រោះខ្ញុំ ប្រយុទ្ធ ផ្ទាល់🙏❤️🇰🇭" - Believe it or not—89 of us held back 1000. I don’t care if you doubt it. I was there. I fought. 🙏❤️🇰🇭',
      author: "A Cambodian Soldier",
    },
  ];

  return (
    <div>
      <div className="max-w-4xl mx-auto  mb-4">
        <ConflictAlert />
      </div>
      <div className="flex justify-center w-full" style={{ maxHeight: "80vh" }}>
        <MainCarousel
          carouselItems={mappedImages.map((data) => ({
            image: data.image,
            title: data.title,
            description: data.description,
          }))}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center mt-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-red-700 mb-6 tracking-tight">
          Against the Odds
        </h2>

        <Separator className="my-6 bg-black w-16 mx-auto" />

        <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
          Cambodia stood firm against overwhelming pressure. While Thailand
          brought in wealth, modern weaponry, and global influence — we brought
          spirit, unity, and the unshakable will to protect our land and
          dignity.
        </p>

        <p className="text-md sm:text-lg text-gray-700 dark:text-gray-400 italic mb-10">
          &ldquo;They had the money, the media, the machines. We had the
          heart.&rdquo;
        </p>

        <div className="space-y-8 max-w-3xl mx-auto">
          {quotes.map((data, index) => (
            <BlockQuote key={index} quote={data.word} author={data.author} />
          ))}
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
            The Ta Moan temple — part of our heritage — lies at the heart of the
            conflict. Thailand pushes with power and ambition, fighting and
            dying to seize what was never theirs. We fight and bleed not for
            conquest, but to keep what’s rightfully ours — our soil, our spirit,
            our sovereignty.
          </p>
        </div>
      </div>
    </div>
  );
};
