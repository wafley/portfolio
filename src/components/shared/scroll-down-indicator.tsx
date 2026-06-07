import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Lottie, { LottieComponentProps } from "lottie-react";
import { cn } from "@/lib/utils";

import MouseSvg from "@/assets/animation/mouse.json";

const lottieOptions: LottieComponentProps = {
  loop: true,
  autoplay: true,
  animationData: MouseSvg,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface ScrollDownProps {
  className?: string;
}

export function ScrollDownIndicator({ className = "" }: ScrollDownProps) {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", () => {
    if (!isScrolling) {
      setIsScrolling(true);
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  });

  return (
    <AnimatePresence>
      {!isScrolling && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className={cn("sticky bottom-5 z-50 flex justify-center", className)}
        >
          <div className="text-foreground flex items-center text-xl capitalize">
            scroll
            <Lottie {...lottieOptions} style={{ height: 50, width: 50 }} />
            down
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
