import { useScroll, UseScrollOptions } from "framer-motion";
import { useRef } from "react";

export default function useSpeedScrollElement<
  T extends HTMLElement = HTMLDivElement,
>(scrollOptions?: UseScrollOptions) {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    ...scrollOptions,
  });

  return { ref, scrollYProgress };
}
