"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity?: number;
  speed?: number;
}

const ParallaxMarquee = React.forwardRef<HTMLDivElement, ParallaxProps>(
  ({ children, baseVelocity = 5, speed = 1000, className, ...props }, ref) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 300,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-10, 0, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / speed);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-nowrap overflow-hidden px-2 py-2 whitespace-nowrap",
          className,
        )}
        {...props}
      >
        <motion.div
          className="flex w-max flex-nowrap whitespace-nowrap"
          style={{ x }}
        >
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
        </motion.div>
      </div>
    );
  },
);
ParallaxMarquee.displayName = "ParallaxMarquee";

export default ParallaxMarquee;
