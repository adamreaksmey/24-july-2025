"use client";

import { LandingPage } from "@/components/contents/Landing";
import { NavigationMenuBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="body-card pt-2 flex flex-col gap-5">
      <div className="w-full flex justify-center">
        <NavigationMenuBar />
      </div>
      <div className="text-center px-4 mt-4">
        <h1 className="text-4xl font-bold text-red-600">WAR HAS BROKEN OUT</h1>
        <p className="mt-2 text-gray-800 max-w-2xl mx-auto">
          On July 24, 2025, Thailand launched an unprovoked attack that marked
          the beginning of a devastating conflict. We will not stay silent.
        </p>
      </div>
      <div className="bg-black text-white p-3 text-center text-sm font-mono">
        Civilians affected: 1,204 | Heritage Sites Destroyed: 3 | Days since
        conflict began: 3
      </div>

      <LandingPage />
    </div>
  );
}
