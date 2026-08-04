import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Tag / chip — for technologies, skills, and filters.
 * Distinct from `Badge` (status signalling): tags are neutral, list-like,
 * slightly larger, and optionally removable. Default style is a thin-bordered
 * pill that reads as "metadata", keeping the enterprise, understated tone.
 */
const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border text-xs font-medium whitespace-nowrap transition-colors [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Hairline outline — the default, quiet metadata look
        outline: "border-border bg-background text-foreground",
        // Filled neutral surface
        soft: "border-transparent bg-muted text-foreground",
        // Brand-tinted
        brand: "border-transparent bg-info-subtle text-info-subtle-foreground",
        teal: "border-transparent bg-teal-subtle text-teal-subtle-foreground",
      },
      size: {
        sm: "h-6 px-2",
        md: "h-7 px-2.5",
      },
      interactive: {
        true: "cursor-pointer hover:border-foreground/20 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        false: "",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      interactive: false,
    },
  }
);

interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "onClick">,
    VariantProps<typeof tagVariants> {
  /** Show a trailing remove (×) button and fire this when it's pressed. */
  onRemove?: () => void;
  /** Optional leading icon (e.g. a tech logo or Lucide glyph). */
  icon?: React.ReactNode;
}

function Tag({
  className,
  variant,
  size,
  interactive,
  onRemove,
  icon,
  children,
  ...props
}: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(
        tagVariants({
          variant,
          size,
          interactive: interactive ?? Boolean(onRemove) ? true : interactive,
        }),
        className
      )}
      {...props}
    >
      {icon}
      {children}
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="-mr-0.5 ml-0.5 inline-flex size-3.5 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
        >
          <X />
        </button>
      ) : null}
    </span>
  );
}

export { Tag, tagVariants };
