"use client";

import { CATEGORY_LABELS, type Category } from "@/data/solutions";
import { cn } from "@/lib/utils";

export type FilterValue = Category | "all";

/**
 * CategoryFilter — reusable, data-driven filter chips. Renders "All" plus any
 * provided categories, using labels from the data layer. Controlled: the
 * parent owns the active value. Implemented as an accessible tablist-style
 * radio group of buttons.
 */
export function CategoryFilter({
  categories,
  active,
  onChange,
  className,
}: {
  categories: Category[];
  active: FilterValue;
  onChange: (value: FilterValue) => void;
  className?: string;
}) {
  const options: { value: FilterValue; label: string }[] = [
    { value: "all", label: "All" },
    ...categories.map((c) => ({ value: c, label: CATEGORY_LABELS[c] })),
  ];

  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="group"
      aria-label="Filter solutions by category"
    >
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-emerald/30 hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
