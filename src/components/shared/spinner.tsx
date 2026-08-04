import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Spinner — accessible loading indicator.
 * Announces itself to assistive tech via a visually-hidden label and honors
 * reduced-motion (the spin is a plain CSS animation, neutralized globally).
 */
interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeMap = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
} as const;

export function Spinner({
  size = "md",
  label = "Loading",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span role="status" className={cn("inline-flex", className)} {...props}>
      <Loader2
        className={cn("animate-spin text-muted-foreground", sizeMap[size])}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
