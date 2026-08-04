"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

import { fadeInUp, inViewOnce, staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Reveal — declarative scroll-into-view animation wrapper.
 * Uses the restrained house variants and animates once. Respects reduced
 * motion via the app-level MotionProvider. Keep usage sparing — reveal
 * section entrances, not every element.
 *
 *   <Reveal>…</Reveal>                     // single element fade-up
 *   <Reveal stagger>                        // stagger direct children
 *     <Reveal.Item>…</Reveal.Item>
 *     <Reveal.Item>…</Reveal.Item>
 *   </Reveal>
 */
interface RevealProps extends React.ComponentProps<typeof motion.div> {
  /** Stagger direct <Reveal.Item> children instead of animating as one block. */
  stagger?: boolean;
  variants?: Variants;
  /** Delay before this reveal starts (seconds). */
  delay?: number;
}

function Reveal({
  stagger = false,
  variants,
  delay = 0,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      variants={variants ?? (stagger ? staggerContainer : fadeInUp)}
      transition={delay ? { delayChildren: delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function RevealItem({ children, ...props }: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}

Reveal.Item = RevealItem;

export { Reveal, RevealItem };
