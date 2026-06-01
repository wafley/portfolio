import * as React from "react";
import { Navbar } from "@/components/shared/navbar";
import { SplashScreen } from "@/components/shared/splash-screen";
import { Footer } from "@/components/shared/footer";
import { Noise } from "@/components/shared/noise";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Noise />
      <SplashScreen />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
