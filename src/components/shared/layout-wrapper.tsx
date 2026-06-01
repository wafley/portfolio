import * as React from "react";
import { Navbar } from "@/components/shared/navbar";
import { SplashScreen } from "@/components/shared/splash-screen";
import { Footer } from "@/components/shared/footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
