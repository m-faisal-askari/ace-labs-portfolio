import type { Metadata, Viewport } from "next";

import { fontVariables } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { constructMetadata, defaultTitle } from "@/lib/seo";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/shared/page-transition";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

/** Site-wide default metadata; pages override via `constructMetadata()`. */
export const metadata: Metadata = {
  ...constructMetadata(),
  title: {
    default: defaultTitle,
    template: `%s · ${siteConfig.name}`,
  },
};

/** Theme-color adapts to light/dark; keeps mobile browser chrome in sync. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="flex min-h-dvh flex-col antialiased">
        {/* Keyboard/screen-reader skip link — first focusable element. */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-md focus:outline-2 focus:outline-ring"
        >
          Skip to content
        </a>

        <ThemeProvider>
          <MotionProvider>
            <Header />
            <main id="content" className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <Toaster />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
