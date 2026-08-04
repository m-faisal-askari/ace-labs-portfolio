import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Container, type containerVariants } from "@/components/layout/container";

/**
 * Section — the vertical rhythm primitive for page composition.
 * Provides consistent, generous top/bottom spacing (the "large spacing" goal)
 * and an optional built-in Container so sections read as one system.
 *
 *   <Section spacing="lg" bleed="muted">
 *     <SectionHeader eyebrow="Work" title="Selected projects" />
 *     …
 *   </Section>
 */
const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "py-0",
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20",
      lg: "py-20 sm:py-28", // default section rhythm
      xl: "py-28 sm:py-36",
    },
    /** Full-bleed background band behind the (still-constrained) content. */
    bleed: {
      none: "",
      muted: "bg-muted",
      card: "bg-card",
      accent: "bg-info-subtle",
    },
    /** Hairline separators between stacked sections. */
    divider: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
      both: "border-y border-border",
    },
  },
  defaultVariants: {
    spacing: "lg",
    bleed: "none",
    divider: "none",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /** Wrap children in a Container. Set false for custom inner layouts. */
  container?: boolean;
  /** Container width when `container` is true. */
  containerSize?: VariantProps<typeof containerVariants>["size"];
}

export function Section({
  className,
  spacing,
  bleed,
  divider,
  container = true,
  containerSize = "lg",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ spacing, bleed, divider }), className)}
      {...props}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

/**
 * SectionHeader — standardized eyebrow + title + description block.
 * Keeps heading hierarchy and spacing consistent across every section.
 */
interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Heading level for correct document outline (styling stays constant). */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-heading text-3xl font-semibold tracking-tight text-balance">
        {title}
      </Heading>
      {description ? (
        <p className="text-lg text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { sectionVariants };
