"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * App-wide theme provider (next-themes).
 * - `attribute="class"` toggles the `.dark` class shadcn tokens target.
 * - `defaultTheme="system"` + `enableSystem` follow the OS preference.
 * - `disableTransitionOnChange` prevents a color-flash when switching.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
