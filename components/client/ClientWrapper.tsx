"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: [0.17, 0.67, 0.83, 0.67],
            },
          },
          exit: {
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.3,
              ease: [0.32, 0, 0.67, 0],
            },
          },
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
