import * as React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

/**
 * FeatureCard — reusable icon + title + description card.
 *
 * Two modes, one component (no duplication):
 *  - Static (Core Capabilities): omit `href` → renders a plain card.
 *  - Actionable (Featured Solutions): pass `href` → whole card is a link with
 *    a trailing arrow that animates on hover, plus a subtle shadow lift.
 *
 * Emerald accent is used sparingly: the icon tile picks it up on hover.
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** When set, the card becomes a link and shows a trailing arrow. */
  href?: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: FeatureCardProps) {
  const interactive = Boolean(href);

  const inner = (
    <Card
      className={cn(
        "h-full transition-[box-shadow,border-color] duration-200",
        interactive &&
          "group-hover/feature:border-emerald/30 group-hover/feature:shadow-md",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between">
          <span
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground transition-colors",
              interactive &&
                "group-hover/feature:border-emerald/30 group-hover/feature:bg-emerald-subtle group-hover/feature:text-emerald-subtle-foreground",
            )}
          >
            <Icon className="size-5" />
          </span>
          {interactive ? (
            <ArrowRight className="size-4 text-muted-foreground transition-[transform,color] group-hover/feature:translate-x-0.5 group-hover/feature:text-emerald" />
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-base font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground text-pretty">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      className="group/feature block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {inner}
    </Link>
  );
}
