import { cn } from "@/lib/utils";

/**
 * AvailabilityBadge — a small pill with a pulsing emerald dot indicating the
 * agency is open to work. Reusable wherever availability is surfaced.
 */
export function AvailabilityBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald" />
      </span>
      {label}
    </span>
  );
}
