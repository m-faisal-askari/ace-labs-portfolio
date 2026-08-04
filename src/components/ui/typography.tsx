import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Typography system.
 *
 * A single `<Text>` primitive drives every text style through the `variant`
 * prop, plus thin named wrappers (H1–H4, Lead, P, Muted, …) for ergonomics.
 * Sizes come from the fluid type scale in `globals.css`, so display styles
 * scale with the viewport automatically. Use `asChild` to keep semantics
 * (e.g. render a section heading as an <h2> while using the H1 style).
 */

const textVariants = cva("", {
  variants: {
    variant: {
      display:
        "font-heading text-5xl font-bold tracking-tighter text-balance md:text-6xl",
      h1: "font-heading text-4xl font-bold tracking-tight text-balance",
      h2: "font-heading text-3xl font-semibold tracking-tight text-balance",
      h3: "font-heading text-2xl font-semibold tracking-tight text-balance",
      h4: "font-heading text-xl font-semibold tracking-tight",
      lead: "text-lg text-muted-foreground text-pretty md:text-xl",
      p: "text-base text-pretty leading-relaxed",
      large: "text-lg font-medium",
      small: "text-sm leading-none font-medium",
      muted: "text-sm text-muted-foreground",
      subtle: "text-sm text-muted-foreground",
      // All-caps section eyebrow — signals structure without shouting
      overline:
        "text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase",
      code: "font-mono text-sm bg-muted rounded-md px-[0.4em] py-[0.2em]",
      blockquote: "border-l-2 border-border pl-4 italic text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

/** Default HTML element for each variant when `asChild` is not used. */
const variantElement: Record<
  NonNullable<VariantProps<typeof textVariants>["variant"]>,
  React.ElementType
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  p: "p",
  large: "div",
  small: "small",
  muted: "p",
  subtle: "p",
  overline: "p",
  code: "code",
  blockquote: "blockquote",
};

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

function Text({
  className,
  variant = "p",
  asChild = false,
  as,
  ...props
}: TextProps) {
  const Comp = asChild
    ? Slot.Root
    : (as ?? variantElement[variant ?? "p"]);
  return (
    <Comp className={cn(textVariants({ variant }), className)} {...props} />
  );
}

/* ---- Ergonomic named wrappers (semantic by default, overridable) ---- */
type Div = React.HTMLAttributes<HTMLElement> & { asChild?: boolean };

const Display = (p: Div) => <Text variant="display" {...p} />;
const H1 = (p: Div) => <Text variant="h1" {...p} />;
const H2 = (p: Div) => <Text variant="h2" {...p} />;
const H3 = (p: Div) => <Text variant="h3" {...p} />;
const H4 = (p: Div) => <Text variant="h4" {...p} />;
const Lead = (p: Div) => <Text variant="lead" {...p} />;
const P = (p: Div) => <Text variant="p" {...p} />;
const Muted = (p: Div) => <Text variant="muted" {...p} />;
const Small = (p: Div) => <Text variant="small" {...p} />;
const Overline = (p: Div) => <Text variant="overline" {...p} />;
const InlineCode = (p: Div) => <Text variant="code" {...p} />;
const Blockquote = (p: Div) => <Text variant="blockquote" {...p} />;

export {
  Text,
  textVariants,
  Display,
  H1,
  H2,
  H3,
  H4,
  Lead,
  P,
  Muted,
  Small,
  Overline,
  InlineCode,
  Blockquote,
};
