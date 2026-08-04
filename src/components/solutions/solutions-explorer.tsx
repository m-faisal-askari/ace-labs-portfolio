"use client";

import * as React from "react";

import { type Category } from "@/data/solutions";
import {
  CategoryFilter,
  type FilterValue,
} from "@/components/solutions/category-filter";

/**
 * SolutionsExplorer — interactive filter island.
 *
 * IMPORTANT (RSC boundary): solution records contain `icon` (a component
 * function), which is NOT serializable across the server→client boundary. So
 * we do NOT pass solutions here. Instead the Server Component pre-renders each
 * card and hands us:
 *   - `categories`     : serializable list for the filter chips
 *   - `items`          : { slug, category } pairs (serializable) for filtering
 *   - `renderedCards`  : a map of slug → server-rendered card element
 * This keeps the cards (and their icons) on the server and ships only the
 * small filter interaction as client JS.
 */
export function SolutionsExplorer({
  categories,
  items,
  renderedCards,
}: {
  categories: Category[];
  items: { slug: string; category: Category }[];
  renderedCards: Record<string, React.ReactNode>;
}) {
  const [active, setActive] = React.useState<FilterValue>("all");

  const visible = React.useMemo(
    () =>
      active === "all"
        ? items
        : items.filter((item) => item.category === active),
    [items, active],
  );

  return (
    <div className="flex flex-col gap-8">
      <CategoryFilter
        categories={categories}
        active={active}
        onChange={setActive}
      />
      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No solutions in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div key={item.slug}>{renderedCards[item.slug]}</div>
          ))}
        </div>
      )}
    </div>
  );
}
