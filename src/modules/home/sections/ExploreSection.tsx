"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import useSpeedScrollElement from "@/hooks/useScrollProgress";

const ExploreSection = () => {
  const { ref: containerRef, scrollYProgress } =
    useSpeedScrollElement<HTMLElement>({
      offset: ["start start", "end end"],
    });

  return (
    <section ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 0.3], [0, 1000]),
          }}
          className="bg-foreground absolute top-0 z-10 h-screen w-full"
        />
      </div>
    </section>
  );
};

export default React.memo(ExploreSection);
