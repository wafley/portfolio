import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elgin Al-wafi Dauliyah | Full-Stack Developer",
  description:
    "Official portfolio of Elgin Al-wafi Dauliyah, a Full-Stack Developer experienced in designing and building modern, scalable, and efficient web applications.",
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
      name: "Elgin Al-wafi Dauliyah",
      url: "https://wafley.vercel.app",
    },
  ],
  creator: "Elgin Al-wafi Dauliyah",
  metadataBase: new URL("https://wafley.vercel.app"),

  openGraph: {
    title: "Elgin Al-wafi Dauliyah | Full-Stack Developer",
    description:
      "Explore my projects, experiences, and skills in modern web development.",
    url: "https://wafley.vercel.app",
    siteName: "Elgin Al-wafi Dauliyah Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Elgin Al-wafi Dauliyah",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elgin Al-wafi Dauliyah | Full-Stack Developer",
    description:
      "Explore my projects, experiences, and skills in modern web development.",
    images: ["/og-image.jpg"],
    creator: "@wafley_",
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
