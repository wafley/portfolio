"use client";

import React from "react";
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

const ParallaxMarquee = ({
  children,
  baseVelocity = 5,
  speed = 1000,
  className,
  ...props
}: ParallaxProps) => {
  const { scrollY } = useScroll();
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -20, v)}%`);

  const directionFactor = React.useRef<number>(1);
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
      className={cn(
        "border-foreground flex flex-nowrap overflow-x-hidden overflow-y-visible border-y-4 py-4 whitespace-nowrap",
        className,
      )}
      {...props}
    >
      <motion.div
        className="flex flex-nowrap items-center gap-8 pr-8 whitespace-nowrap md:gap-16 md:pr-16"
        style={{ x }}
      >
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center">{children}</span>
        <span className="flex shrink-0 items-center">{children}</span>
      </motion.div>
    </div>
  );
};

export { ParallaxMarquee };
