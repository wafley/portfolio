"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <motion.header
      className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block text-xl font-bold tracking-tight">
              Portfolio
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
