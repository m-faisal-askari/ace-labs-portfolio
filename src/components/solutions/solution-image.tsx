import Image from "next/image";
import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SolutionImage — renders a project's image, or an on-brand placeholder built
 * from the solution's icon when no image is available yet. Keeps the layout
 * stable (fixed aspect ratio) and swaps to `next/image` automatically once a
 * real `src` is provided. Decorative placeholder marks are hidden from AT.
 */
interface SolutionImageProps {
  src: string | null;
  title: string;
  icon: LucideIcon;
  /** Tailwind aspect ratio utility. Default 16/9. */
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function SolutionImage({
  src,
  title,
  icon: Icon,
  aspect = "aspect-[16/9]",
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: SolutionImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border bg-muted",
        aspect,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${title} interface preview`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,var(--color-accent),transparent_70%)]"
        >
          <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-foreground">
            <Icon className="size-7" />
          </span>
        </div>
      )}
    </div>
  );
}
