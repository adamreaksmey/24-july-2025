"use client";

import { Intro } from "@/components/contents/Intro";
import { LandingPage } from "@/components/contents/Landing";
import { Footer } from "@/components/footer/Footer";
import { NavigationMenuBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="body-card pt-2 flex flex-col gap-5">
      <div className="w-full flex justify-center">
        <NavigationMenuBar />
      </div>
      <Intro />
      <LandingPage />
      <Footer />
    </div>
  );
}
