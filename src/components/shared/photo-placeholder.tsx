import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * PhotoPlaceholder — a framed photo slot. When `src` is provided it renders the
 * real photo with `next/image`; otherwise it shows an accessible stand-in
 * (initials + a subtle icon and label) that reads as an intentional placeholder
 * rather than a broken image. Decorative marks are hidden from assistive tech;
 * the visible label conveys intent.
 */
interface PhotoPlaceholderProps {
  /** Full name — initials are derived from it, and it labels a real photo. */
  name: string;
  className?: string;
  /** Tailwind aspect ratio utility, e.g. "aspect-square" (default) or "aspect-[4/5]". */
  aspect?: string;
  /** Path to a real photo. When set, an image is rendered instead of the placeholder. */
  src?: string | null;
  /** `next/image` sizes hint for the rendered photo. */
  sizes?: string;
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
  src,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: PhotoPlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-border bg-muted",
          aspect,
          className,
        )}
      >
        <Image
          src={src}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

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
