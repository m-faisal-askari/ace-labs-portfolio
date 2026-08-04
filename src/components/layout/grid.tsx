import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Grid — responsive layout grid with sensible enterprise defaults.
 * Column counts use fixed, mobile-first breakpoints (1 → n) rather than
 * auto-fit, so cards line up predictably across the site. Pair with `GridItem`
 * for spans, or drop children in directly for an even grid.
 */
const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
      12: "grid-cols-12",
    },
    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "lg",
  },
});

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  as?: React.ElementType;
}

export function Grid({
  as: Comp = "div",
  cols,
  gap,
  className,
  ...props
}: GridProps) {
  return (
    <Comp className={cn(gridVariants({ cols, gap }), className)} {...props} />
  );
}

/** Column span helper for the 12-col grid (e.g. sidebar + content layouts). */
const gridItemVariants = cva("", {
  variants: {
    span: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
      full: "col-span-full",
    },
  },
});

interface GridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemVariants> {
  as?: React.ElementType;
}

export function GridItem({
  as: Comp = "div",
  span,
  className,
  ...props
}: GridItemProps) {
  return (
    <Comp className={cn(gridItemVariants({ span }), className)} {...props} />
  );
}

export { gridVariants, gridItemVariants };
