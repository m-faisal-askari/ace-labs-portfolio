/**
 * Shared, app-wide TypeScript types.
 * Keep these framework-agnostic and free of runtime code.
 */

import type { LucideIcon } from "lucide-react";

/** A single navigation entry used by the header, footer and mobile nav. */
export interface NavItem {
  title: string;
  href: string;
  /** Opens in a new tab when true (external links). */
  external?: boolean;
  /** Optionally disable an item without removing it from the nav. */
  disabled?: boolean;
}

/** A social/contact link, optionally rendered with a Lucide icon. */
export interface SocialLink {
  title: string;
  href: string;
  icon?: LucideIcon;
}

/** The single source of truth describing the site, consumed by SEO + layout. */
export interface SiteConfig {
  name: string;
  /** Short handle/author name, e.g. for author metadata. */
  author: string;
  description: string;
  /** Absolute base URL, no trailing slash. */
  url: string;
  /** Path (or absolute URL) to the Open Graph image. */
  ogImage: string;
  keywords: string[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}
