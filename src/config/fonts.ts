import { Geist, Geist_Mono } from "next/font/google";

/**
 * Self-hosted fonts via `next/font` (zero layout shift, no network round-trip).
 * The CSS variables here are consumed by Tailwind's theme in `globals.css`
 * (`--font-sans`, `--font-mono`). Wire both onto <html> in the root layout.
 */

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/** Convenience: all font CSS-variable classes joined for the <html> element. */
export const fontVariables = `${fontSans.variable} ${fontMono.variable}`;
