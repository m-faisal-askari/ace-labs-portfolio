import type { Variants, Transition } from "framer-motion";

/**
 * Motion system — restrained, enterprise-grade.
 *
 * Principles (see DESIGN_SYSTEM.md → Animation guidelines):
 *  - Motion clarifies, never decorates. No bounce, no spin, no parallax.
 *  - Short durations (150–400ms) and gentle easing only.
 *  - Small travel distances (≤ 16px). Opacity + a few px of Y is the house style.
 *  - `MotionProvider` sets `reducedMotion="user"`, so these are auto-disabled
 *    for users who prefer reduced motion.
 *
 * Durations/easings mirror the CSS motion tokens in `globals.css`.
 */

export const DURATION = { fast: 0.15, base: 0.22, slow: 0.4 } as const;

/** House easing — a soft, professional ease-out. */
export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeInOut: Transition["ease"] = [0.65, 0, 0.35, 1];

/** Fade + small rise. The default section/element entrance. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: easeOut },
  },
};

/** Plain opacity fade — for overlays and low-emphasis reveals. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: easeOut },
  },
};

/** Very subtle scale-in for cards/popovers. Barely perceptible on purpose. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: easeOut },
  },
};

/** Parent that staggers children — for lists, grids, nav items. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

/** Child item to pair with `staggerContainer`. */
export const staggerItem: Variants = fadeInUp;

/** Shared viewport config for scroll-triggered `whileInView` reveals. */
export const inViewOnce = { once: true, amount: 0.2 } as const;
