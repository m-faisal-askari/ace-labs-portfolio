import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

/**
 * ContactCard — reusable card for a single contact method (email, GitHub,
 * LinkedIn, availability, location, résumé). Renders as a link when `href` is
 * provided (with a hover arrow), or a static info card otherwise.
 */
interface ContactCardProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  download?: boolean;
}

export function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
  download,
}: ContactCardProps) {
  const inner = (
    <Card
      className={cn(
        "h-full transition-[box-shadow,border-color] duration-200",
        href && "group-hover/contact:border-emerald/30 group-hover/contact:shadow-md",
      )}
    >
      <CardContent className="flex h-full items-center gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="truncate text-sm font-medium">{value}</p>
        </div>
        {href ? (
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-[transform,color] group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 group-hover/contact:text-emerald" />
        ) : null}
      </CardContent>
    </Card>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      className="group/contact block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {inner}
    </Link>
  );
}
