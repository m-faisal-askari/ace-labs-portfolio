"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";
import { useNavActive } from "@/hooks/use-nav-active";

/**
 * Desktop primary navigation with an animated active indicator.
 * A shared `layoutId` pill slides between items as the active section changes
 * (restrained, ~220ms). Hidden below `md`; the mobile drawer takes over there.
 */
export function MainNav() {
  const isActive = useNavActive();

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
      {mainNav.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={cn(
              "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
              item.disabled && "pointer-events-none opacity-50",
            )}
          >
            {active && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-md bg-muted"
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
