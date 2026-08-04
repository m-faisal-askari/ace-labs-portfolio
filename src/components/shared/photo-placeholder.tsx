import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * PhotoPlaceholder — a framed, accessible stand-in for a professional photo.
 * Shows initials + a subtle icon and label so it reads as an intentional
 * placeholder (not a broken image). Swap for a `next/image` when a real photo
 * is available. Decorative marks are hidden from assistive tech; the visible
 * label conveys intent.
 */
interface PhotoPlaceholderProps {
  /** Full name — initials are derived from it. */
  name: string;
  className?: string;
  /** Tailwind aspect ratio utility, e.g. "aspect-square" (default) or "aspect-[4/5]". */
  aspect?: string;
}

function initialsFrom(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function PhotoPlaceholder({
  name,
  className,
  aspect = "aspect-square",
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Professional photo placeholder for ${name}`}
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-muted",
        aspect,
        className,
      )}
    >
      <span
        aria-hidden
        className="flex size-20 items-center justify-center rounded-full border border-border bg-card font-heading text-2xl font-semibold tracking-tight text-foreground"
      >
        {initialsFrom(name)}
      </span>
      <span
        aria-hidden
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
      >
        <ImageIcon className="size-3.5" />
        Photo coming soon
      </span>
    </div>
  );
}
