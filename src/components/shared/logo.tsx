import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Ace Labs brand mark, inlined from `public/brand/logo.svg` so it inherits
 * `currentColor` and themes with the UI. The source export pads the mark inside
 * a 1080² canvas; the viewBox here is cropped to the mark's actual geometry so
 * it fills its box instead of rendering tiny and off-center.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="300 638 480 344"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <polygon points="759.89,911.6 721.03,961.76 571.81,961.76 475.53,790.85 538.88,790.85 608.14,912.17 608.55,911.6" />
      <polygon points="381.77,923.46 320.11,923.46 459.47,658.24 522.82,658.24" />
    </svg>
  );
}

/**
 * Brand lockup: the mark plus the wordmark. Reused by the header, footer, and
 * mobile nav so branding stays consistent. `showText={false}` renders the mark
 * alone. The visible wordmark doubles as the accessible label.
 */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className="h-6 w-auto shrink-0" />
      {showText ? (
        <span className="font-heading text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </span>
      ) : (
        <span className="sr-only">{siteConfig.name}</span>
      )}
    </span>
  );
}
