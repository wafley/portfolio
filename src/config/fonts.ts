import { Bungee_Shade, DotGothic16, Sixtyfour } from "next/font/google";

const bungeeInline = Bungee_Shade({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

const dotGothic = DotGothic16({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gothic",
});

const sixtyfour = Sixtyfour({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sixtyfour",
});

export const fonts = {
  bungeeInline,
  dotGothic,
  sixtyfour,
} as const;

export const fontVariables = Object.values(fonts)
  .map((font) => font.variable)
  .join(" ");
