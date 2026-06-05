"use client";

import React from "react";
import { useTransform } from "framer-motion";
import useSpeedScrollElement from "@/hooks/useScrollProgress";
import { withNeoBrutalist } from "@/modules/home/components";

const NeoBrutalistSpan = withNeoBrutalist("span");

const ExploreSection = () => {
  const { ref: containerRef, scrollYProgress } =
    useSpeedScrollElement<HTMLElement>({
      offset: ["start end", "end start"],
    });

  return (
    <section ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <NeoBrutalistSpan
          style={{
            scale: useTransform(scrollYProgress, [0, 0.35, 0.6], [200, 1.2, 1]),
            x: useTransform(scrollYProgress, [0, 0.35], [-2000, 0]),
            y: useTransform(scrollYProgress, [0, 0.35], [-100, 0]),
          }}
          className="z-20 mb-2 inline-block rotate-2"
        >
          Explore
        </NeoBrutalistSpan>
      </div>
    </section>
  );
};

export default React.memo(ExploreSection);
