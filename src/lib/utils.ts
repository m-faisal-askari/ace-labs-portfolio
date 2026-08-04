import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { siteConfig } from "@/config/site"

/** Merge conditional class names and de-duplicate conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve a path against the site's canonical base URL (for OG images, canonicals, etc.). */
export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "")
  const suffix = path ? `/${path.replace(/^\//, "")}` : ""
  return `${base}${suffix}`
}

/** Format a date (or ISO string) as a human-readable, locale-aware label. */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date))
}

