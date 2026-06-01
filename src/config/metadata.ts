import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Elgin Al-wafi Dauliyah",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
    "Software Engineer",
    "Indonesia",
  ],
  authors: [
    {
      name: SITE_CONFIG.fullName,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.fullName,
  metadataBase: new URL(SITE_CONFIG.url),

  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.shortDescription,
    url: SITE_CONFIG.url,
    siteName: `${SITE_CONFIG.fullName} Portfolio`,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `Preview Portfolio ${SITE_CONFIG.fullName}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.shortDescription,
    images: [SITE_CONFIG.ogImage],
    creator: SITE_CONFIG.twitterHandle,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
