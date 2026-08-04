"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { mainNav, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useNavActive } from "@/hooks/use-nav-active";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Mobile navigation drawer (shown below the `md` breakpoint).
 * Closes on navigation via controlled open state and mirrors the desktop
 * active indicator (a left accent bar + filled row). Items come from `mainNav`.
 */
export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const isActive = useNavActive();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-1 px-4" aria-label="Mobile">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-base font-medium transition-colors",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  item.disabled && "pointer-events-none opacity-50",
                )}
              >
                {item.title}
              </Link>
            );
          })}
          <Button asChild className="mt-4">
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
