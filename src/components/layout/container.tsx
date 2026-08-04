import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Container — centered, max-width content wrapper with responsive gutters.
 * `size` controls the max line/measure width; large spacing by default to
 * keep the layout airy and premium.
 */
const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-2xl", // long-form prose / narrow forms
      md: "max-w-4xl",
      lg: "max-w-5xl", // default site content
      xl: "max-w-6xl",
      full: "max-w-none",
    },
    gutter: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    gutter: true,
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

export function Container({
  as: Comp = "div",
  size,
  gutter,
  className,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(containerVariants({ size, gutter }), className)}
      {...props}
    />
  );
}

export { containerVariants };
