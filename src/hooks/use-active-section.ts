"use client";

import * as React from "react";

/**
 * Scroll-spy: given a list of section element IDs, returns the ID of the
 * section currently nearest the vertical center of the viewport (or `null`
 * when the page is scrolled above the first section — i.e. "top / home").
 *
 * Powers active navigation indicators on single-page layouts. Gracefully
 * no-ops when the sections don't exist yet (so it works before pages exist).
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  // Stable key so the effect doesn't re-run on every render from a new array.
  const key = sectionIds.join("|");

  React.useEffect(() => {
    const ids = key ? key.split("|") : [];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      setActiveId(null);
      return;
    }

    // Track ratios so we can always pick the most-visible section.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        // At the very top nothing meaningfully intersects the center band.
        setActiveId(bestRatio > 0 ? best : null);
      },
      {
        // A thin band across the vertical middle of the viewport.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
