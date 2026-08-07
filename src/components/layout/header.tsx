import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

/**
 * Sticky site header: brand (left) · primary nav (center) · CTA + theme
 * toggle + mobile trigger (right). Translucent with a subtle backdrop blur and
 * a thin bottom border. Content is driven by `mainNav`/`siteConfig`.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55">
      <Container
        as="div"
        size="xl"
        className="flex h-16 items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="rounded-md transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Logo />
        </Link>

        {/* Centered primary nav (absolute so the brand/actions stay balanced). */}
        <div className="pointer-events-none absolute inset-x-0 hidden justify-center md:flex">
          <div className="pointer-events-auto">
            <MainNav />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#contact">Let&apos;s Talk</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
