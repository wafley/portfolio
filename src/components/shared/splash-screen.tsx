"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextCursor, CheckCircle } from "lucide-react";
import { FarGrid } from "@/components/shared/far-grid";

import { SITE_CONFIG } from "@/constants";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while splash is active
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "auto";
          }, 1500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="bg-background text-primary fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, top: "-100%", filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Retro Grid Background */}
          <FarGrid className="z-0 opacity-50" />

          {/* Scanline overlay */}
          <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

          <div className="relative z-10 flex flex-col items-center gap-12">
            <motion.div
              className="font-heading flex items-center justify-center text-6xl font-black tracking-tighter md:text-8xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {SITE_CONFIG.name}
              <span className="ml-2 animate-pulse">
                <TextCursor className="h-[0.8em] w-[0.8em]" strokeWidth={3} />
              </span>
            </motion.div>

            {/* Retro Loading Bar */}
            <div className="flex flex-col items-center gap-4">
              <div className="border-primary bg-background h-6 w-64 border-2 p-1 md:w-80">
                <motion.div
                  className="bg-primary h-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="text-muted-foreground flex h-5 w-full justify-between px-1 font-mono text-sm tracking-widest uppercase">
                {progress >= 100 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary flex w-full items-center justify-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Successfully Rendered</span>
                  </motion.div>
                ) : (
                  <>
                    <span>SYSTEM BOOT</span>
                    <span>{Math.min(progress, 100)}%</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
