"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` only after the component has mounted on the client.
 * Use to guard theme-aware / browser-only UI and avoid hydration mismatches
 * (e.g. rendering the correct sun/moon icon for the active theme).
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
