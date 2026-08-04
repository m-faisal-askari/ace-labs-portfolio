"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * PageTransition — subtle enter animation on route change.
 *
 * CSS-only: the animation is a `@keyframes page-in` in globals.css, applied via
 * a class that is re-keyed on `pathname` so it replays on each navigation. This
 * avoids shipping a JS animation library on the always-mounted wrapper.
 * `prefers-reduced-motion` neutralizes it globally (see globals.css).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
}
