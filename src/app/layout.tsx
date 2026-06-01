import "./globals.css";

import { metadata } from "@/config/metadata";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { SplashScreen } from "@/components/shared/splash-screen";
import { Footer } from "@/components/shared/footer";
import { fontVariables } from "@/config/fonts";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export { metadata };

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
