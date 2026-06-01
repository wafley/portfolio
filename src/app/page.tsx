import { HeroSection } from "@/components/sections/HeroSection";
import { SITE_CONFIG } from "@/constants";

export const metadata = {
  title: `Home - ${SITE_CONFIG.name}`,
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
