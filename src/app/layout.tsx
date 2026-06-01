import "./globals.css";

import { metadata } from "@/config/metadata";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { LayoutWrapper } from "@/components/shared/layout-wrapper";
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
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
