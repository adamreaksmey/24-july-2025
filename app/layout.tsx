import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenuBar } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "24/07/2025 — Cambodia Remembers",
  description:
    "On July 24th, 2025, the world changed. Thailand fired the first shot. Cambodia responds with truth, resistance, and code.",
  icons: {
    icon: "/favicon/Flag.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white">
        <div className="w-full flex justify-center py-1">
          <NavigationMenuBar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
