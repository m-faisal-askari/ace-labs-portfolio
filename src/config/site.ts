import type { NavItem, SiteConfig } from "@/types";

/**
 * Single source of truth for site-wide metadata.
 * Referenced by SEO helpers, the root layout, sitemap/robots/manifest,
 * and the shared header/footer. Update values here — not in components.
 */

/** Prefer an env-provided canonical URL in production; fall back to localhost in dev. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "Ace Labs",
  author: "Ace Labs",
  description:
    "Ace Labs is a healthcare software agency specializing in modern, full-stack systems. We build secure, scalable software for clinics, hospitals, laboratories, pharmacies, and telemedicine teams.",
  url: siteUrl,
  ogImage: `${siteUrl}/og.png`,
  keywords: [
    "healthcare software agency",
    "healthcare software development company",
    "full-stack development agency",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "clinic management system",
    "hospital management system",
    "telemedicine",
    "Karachi",
  ],
  links: {
    // TODO: replace with real contact details before launch.
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    email: "mailto:you@example.com",
  },
};

/** Primary navigation, shared by the header and mobile nav. */
export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Solutions", href: "/solutions" },
  { title: "Skills", href: "/skills" },
  { title: "Contact", href: "/contact" },
];
