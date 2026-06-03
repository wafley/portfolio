"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, TerminalSquare, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 3.2, ease: "easeOut" }}
        className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-border bg-background/60 dark:bg-background/60 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <TerminalSquare className="text-primary h-8 w-8" />
            <span className="text-2xl tracking-tight">{SITE_CONFIG.name}.</span>
          </Link>

          <div className="flex items-center gap-2 md:gap-6">
            {/* Desktop Navigation */}
            <ul className="text-muted-foreground hidden items-center gap-6 text-base font-medium md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors ${
                        isActive
                          ? "text-primary font-bold"
                          : "hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              className="text-foreground p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-background border-border fixed top-16 right-0 left-0 z-40 border-b shadow-lg md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              <ul className="flex flex-col gap-4 text-base font-medium">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block w-full py-2 transition-colors ${
                          isActive
                            ? "text-primary font-bold"
                            : "hover:text-primary text-muted-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-border flex flex-col gap-2 border-t pt-4">
                <Button variant="outline" className="w-full">
                  Masuk
                </Button>
                <Button className="w-full">Daftar</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
