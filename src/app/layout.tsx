import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { SplashScreen } from "@/components/shared/splash-screen";
import { Footer } from "@/components/shared/footer";
import { fontVariables } from "@/config/fonts";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Modern Portfolio Website",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(fontVariables, "h-full antialiased")}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
