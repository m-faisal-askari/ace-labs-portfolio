"use client";

import { usePathname } from "next/navigation";

import { mainNav } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";

/** Section IDs referenced by hash nav items (e.g. "/#projects" → "projects"). */
const sectionIds = mainNav
  .map((item) => item.href.split("#")[1])
  .filter((id): id is string => Boolean(id));

/**
 * Returns an `isActive(href)` predicate shared by desktop and mobile nav.
 * - Hash links (`/#projects`) are active on their page when the matching
 *   section is scrolled into view (scroll-spy).
 * - The home link (`/`) is active at the top of the page (no section spotlighted).
 * - Plain route links are active by pathname match.
 */
export function useNavActive(): (href: string) => boolean {
  const pathname = usePathname();
  const onHome = pathname === "/";
  // Only run scroll-spy on the home page where the sections live.
  const activeSection = useActiveSection(onHome ? sectionIds : []);

  return (href: string) => {
    const [rawPath, hash] = href.split("#");
    const targetPath = rawPath || "/";

    if (hash) {
      return onHome && activeSection === hash;
    }
    if (targetPath === "/") {
      return onHome && activeSection === null;
    }
    return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
  };
}
