import { STATUS_LABELS, type ProjectStatus } from "@/data/solutions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Map lifecycle status to a semantic badge variant + dot color. */
const STATUS_STYLES: Record<
  ProjectStatus,
  { variant: React.ComponentProps<typeof Badge>["variant"]; dot: string }
> = {
  concept: { variant: "outline", dot: "bg-muted-foreground" },
  "in-development": { variant: "warning", dot: "bg-warning" },
  live: { variant: "success", dot: "bg-success" },
};

/**
 * StatusBadge — shows a project's current lifecycle status with a small dot.
 * Labels/variants are data-driven so status presentation stays consistent.
 */
export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const { variant, dot } = STATUS_STYLES[status];
  return (
    <Badge variant={variant} className={cn("gap-1.5", className)}>
      <span className={cn("size-1.5 rounded-full", dot)} aria-hidden />
      {STATUS_LABELS[status]}
    </Badge>
  );
}
