import * as React from "react";
import Link from "next/link";
import { TerminalSquare } from "lucide-react";

import {
  GithubIcon,
  XIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/shared/icons";

export function Footer() {
  return (
    <footer className="border-border before:bg-border relative mt-20 border-t-4 py-8 before:absolute before:top-1 before:right-0 before:left-0 before:h-[2px]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-8">
        {/* Left Section - Branding */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <TerminalSquare className="text-primary h-6 w-6" />
            <span className="text-2xl tracking-tight">Wafley.</span>
          </Link>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            (C) {new Date().getFullYear()}
          </p>
        </div>

        {/* Right Section - Links & Status */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <span className="tracking-widest uppercase">
                [ <GithubIcon className="inline h-4 w-4" /> ]
              </span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <span className="tracking-widest uppercase">
                [ <XIcon className="inline h-4 w-4" /> ]
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <span className="tracking-widest uppercase">
                [ <InstagramIcon className="inline h-4 w-4" /> ]
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <span className="tracking-widest uppercase">
                [ <LinkedinIcon className="inline h-4 w-4" /> ]
              </span>
            </a>
          </div>
          <p className="text-muted-foreground flex items-center gap-2 text-sm tracking-widest uppercase">
            <span>STATUS:</span>
            <span className="border-primary/50 bg-primary/10 text-primary border px-2 py-0.5 font-bold">
              ONLINE
            </span>
            <span className="text-primary animate-pulse font-bold">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
