"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import useSpeedScrollElement from "@/hooks/useScrollProgress";
import ParallaxMarquee from "@/components/effect/parallax-marquee";
import { ArrowRight, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const MotionMarquee = motion(ParallaxMarquee);
const MARQUEE_TEXTS = ["FULLSTACK DEVELOPER", "WEB DESIGNER", "UI/UX DESIGNER"];

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

        <div className="relative container flex h-screen flex-col items-center justify-center gap-3 overflow-hidden px-24">
          <MotionMarquee
            style={{
              y: useTransform(scrollYProgress, [0, 0.3], [-500, 0]),
            }}
            baseVelocity={-3}
          >
            <div className="flex items-center gap-3">
              <span className="text-foreground font-heading text-4xl lg:text-7xl">
                EXPLORE
              </span>
              <Search className="text-primary mx-8 h-12 w-12" />
            </div>
          </MotionMarquee>

          <MotionMarquee
            style={{
              y: useTransform(scrollYProgress, [0, 0.3], [-500, 0]),
            }}
            baseVelocity={3}
            speed={3500}
            className="-rotate-1"
          >
            {MARQUEE_TEXTS.map((text) => (
              <div key={text} className="flex items-center gap-3">
                <Card className="bg-background text-primary py-y inline-block px-4 text-4xl lg:text-7xl">
                  <span>{text}</span>
                </Card>
                <div className="group border-primary hover:bg-primary mx-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-solid transition-colors">
                  <ArrowRight className="text-5xl transition-transform duration-200 group-hover:text-white hover:scale-150" />
                </div>
              </div>
            ))}
          </MotionMarquee>

          <MotionMarquee
            style={{
              y: useTransform(scrollYProgress, [0, 0.3], [-500, 0]),
            }}
            baseVelocity={-3}
          >
            <div className="flex items-center gap-3">
              <span className="text-foreground font-heading text-4xl lg:text-7xl">
                EXPLORE
              </span>
              <Search className="text-primary mx-8 h-12 w-12" />
            </div>
          </MotionMarquee>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ExploreSection);
