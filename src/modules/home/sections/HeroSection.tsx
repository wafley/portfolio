"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FarGrid } from "@/components/shared/far-grid";
import { SITE_CONFIG } from "@/constants";
import useSpeedScrollElement from "@/hooks/useScrollProgress";
import { withNeoBrutalist } from "@/modules/home/components";

const NeoBrutalistSpan = withNeoBrutalist("span");

const HeroSection = () => {
  const delay = 3.2;
  const { ref: containerRef, scrollYProgress } =
    useSpeedScrollElement<HTMLElement>({
      offset: ["start start", "end end"],
    });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-[200vh]"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        {/* Background Parallax Elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Parallax Element 1 - Far Grid */}
          <motion.div
            style={{
              x: useTransform(() => smoothX.get() * -30),
              y: useTransform(
                () => smoothY.get() * -30 + scrollYProgress.get() * -200,
              ),
            }}
            className="absolute -top-10 -right-10 h-[120%] w-[120%] opacity-80"
          >
            <FarGrid />
          </motion.div>

          {/* Parallax Element 2 - Floating Circle */}
          <motion.div
            initial={{
              x: -1000,
              y: -1000,
            }}
            animate={{
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay,
              ease: "easeOut",
            }}
            style={{
              x: useTransform(
                () => smoothX.get() * 80 + scrollYProgress.get() * -200,
              ),
              y: useTransform(
                () => smoothY.get() * 80 + scrollYProgress.get() * -500,
              ),
            }}
            className="border-foreground bg-primary absolute top-20 left-4 h-16 w-16 rounded-full border-4 shadow-[4px_4px_0_0_var(--color-foreground)] md:top-1/4 md:left-32 md:h-24 md:w-24"
          />

          {/* Parallax Element 3 - Floating Square */}
          <motion.div
            initial={{
              x: -1000,
              y: -1000,
              rotate: -90,
            }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.6,
              delay,
              ease: "easeOut",
            }}
            style={{
              x: useTransform(
                () => smoothX.get() * -90 + scrollYProgress.get() * 300,
              ),
              y: useTransform(
                () => smoothY.get() * -90 + scrollYProgress.get() * 600,
              ),
              rotate: useTransform(
                () => smoothX.get() * 25 + scrollYProgress.get() * 90,
              ),
            }}
            className="border-foreground bg-secondary absolute right-4 bottom-32 h-20 w-20 border-4 shadow-[6px_6px_0_0_var(--color-foreground)] md:right-40 md:bottom-1/4 md:h-32 md:w-32"
          />

          {/* Parallax Element 4 - Cross/Star */}
          <motion.div
            initial={{
              x: 1000,
              y: -1000,
              rotate: 180,
            }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.6,
              delay,
              ease: "easeOut",
            }}
            style={{
              x: useTransform(
                () => smoothX.get() * 120 + scrollYProgress.get() * 400,
              ),
              y: useTransform(
                () => smoothY.get() * 120 + scrollYProgress.get() * -800,
              ),
              rotate: useTransform(() => scrollYProgress.get() * 180),
            }}
            className="text-foreground absolute top-[60%] left-[80%] text-4xl font-black md:top-1/2 md:left-3/4 md:text-6xl"
          >
            +
          </motion.div>

          {/* Parallax Element 5 - Pill */}
          <motion.div
            initial={{
              x: 1000,
              y: 1000,
              rotate: -90,
            }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.6,
              delay,
              ease: "easeOut",
            }}
            style={{
              x: useTransform(
                () => smoothX.get() * 100 + scrollYProgress.get() * -500,
              ),
              y: useTransform(
                () => smoothY.get() * -100 + scrollYProgress.get() * 400,
              ),
              rotate: useTransform(() => -25 + scrollYProgress.get() * -45),
            }}
            className="border-foreground absolute bottom-16 left-8 h-8 w-24 rounded-full border-4 bg-transparent shadow-[4px_4px_0_0_var(--color-foreground)] md:bottom-1/3 md:left-20 md:h-12 md:w-32"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container flex flex-col items-center justify-center text-center">
          <motion.div
            className="flex max-w-6xl flex-col items-center space-y-6 md:space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
          >
            <motion.div
              initial={{ y: -100, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay, ease: "easeOut" }}
              style={{
                y: useTransform(scrollYProgress, [0, 0.7], [0, -500]),
              }}
              className="border-foreground bg-background mb-2 inline-block border-2 px-4 py-1 shadow-[4px_4px_0_0_var(--color-foreground)] md:mb-4"
            >
              <span className="text-primary font-bold tracking-widest uppercase">
                {SITE_CONFIG.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay, ease: "easeOut" }}
              style={{
                x: useTransform(scrollYProgress, [0, 0.7], [0, -500]),
                opacity: useTransform(scrollYProgress, [0, 0.7], [1, 0]),
              }}
              className="text-foreground mb-2 text-4xl font-extrabold lg:text-7xl"
            >
              {SITE_CONFIG.fullName}
            </motion.h1>

            <NeoBrutalistSpan
              initial={{ scale: 3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay, ease: "easeOut" }}
              style={{
                scale: useTransform(scrollYProgress, [0, 0.6, 1], [1, 5, 300]),
              }}
              className="relative z-20 mb-2 inline-block rotate-2"
            >
              {SITE_CONFIG.name}
            </NeoBrutalistSpan>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay, ease: "easeOut" }}
              style={{
                opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]),
                scale: useTransform(scrollYProgress, [0.5, 1], [1, 0.5]),
              }}
              className="text-foreground/80 max-w-3xl text-lg leading-relaxed font-medium sm:text-xl"
            >
              {SITE_CONFIG.shortDescription}
            </motion.p>

            <motion.div
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay, ease: "easeOut" }}
              style={{
                y: useTransform(scrollYProgress, [0, 0.7], [0, 500]),
              }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Button size="lg" className="h-14 px-10 text-lg">
                START A PROJECT
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background h-14 px-10 text-lg"
              >
                VIEW ARCHIVE
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(HeroSection);
