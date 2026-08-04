"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";

/**
 * Wraps the app in a Framer Motion config that honors the user's
 * `prefers-reduced-motion` setting globally (`reducedMotion="user"`).
 * Individual components can still opt into animations via motion variants.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
