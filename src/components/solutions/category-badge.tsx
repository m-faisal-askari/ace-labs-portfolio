import { CATEGORY_LABELS, type Category } from "@/data/solutions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * CategoryBadge — renders a healthcare category label as a subtle badge.
 * Reads the human label from the data layer so labels stay single-sourced.
 */
export function CategoryBadge({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Badge variant="teal" className={cn(className)}>
      {CATEGORY_LABELS[category]}
    </Badge>
  );
}
