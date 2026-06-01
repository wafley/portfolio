import { SITE_CONFIG } from "@/constants";
import HomePage from "@/modules/home";

export const metadata = {
  title: `Home - ${SITE_CONFIG.name}`,
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
