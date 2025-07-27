"use client";
import { LandingPage } from "@/components/contents/landing";
import { NavigationMenuBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="body-card pt-2">
      <div className="w-full flex justify-center">
        <NavigationMenuBar />
      </div>
      <LandingPage />
    </div>
  );
}
