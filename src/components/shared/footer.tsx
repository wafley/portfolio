import * as React from "react";

export function Footer() {
  return (
    <footer className="border-border/40 border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-8">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          Built by <span className="text-foreground font-medium">Wafley</span>.
          The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground font-medium underline underline-offset-4 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
