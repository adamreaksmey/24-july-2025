"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Timeline", href: "/timeline" },
  { title: "Evidence", href: "/evidence" },
  { title: "Destructions", href: "/destructions" },
  { title: "News & Updates", href: "/news" },
  { title: "How to Help", href: "/help" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
  { title: "Donate / Support", href: "/donate" },
];

export function NavigationMenuBar() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link, index) => (
          <NavigationMenuItem
            key={link.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className="relative text-sm px-4 py-2 transition-colors hover:text-primary/80 group"
              >
                {link.title}
                <span
                  className={`pointer-events-none fs-1 absolute left-[20%] bottom-1 h-[2px] w-[60%] origin-left scale-x-0 bg-primary ${
                    hoveredIndex === index
                      ? "transition-transform duration-300 group-hover:scale-x-100"
                      : ""
                  }`}
                  aria-hidden="true"
                />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
