import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Display, Lead, Overline } from "@/components/ui/typography";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * PageHero — a reusable hero for interior pages (Solutions, and future pages).
 * Small badge + eyebrow + large headline + supporting paragraph, matching the
 * homepage visual language. Optional `children` slot for actions/extras.
 */
interface PageHeroProps {
  badge?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  badge,
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className,
}: PageHeroProps) {
  const centered = align === "center";
  return (
    <section
      className={cn(
        "border-b border-border/60 py-16 sm:py-20 lg:py-24",
        className,
      )}
    >
      <Container size="xl">
        <Reveal
          stagger
          className={cn(
            "flex max-w-3xl flex-col",
            centered && "mx-auto items-center text-center",
          )}
        >
          {badge ? (
            <RevealItem>
              <Badge variant="teal">{badge}</Badge>
            </RevealItem>
          ) : null}
          {eyebrow ? (
            <RevealItem>
              <Overline className="mt-5 text-emerald">{eyebrow}</Overline>
            </RevealItem>
          ) : null}
          <RevealItem>
            <Display className="mt-4 text-4xl sm:text-5xl">{title}</Display>
          </RevealItem>
          {description ? (
            <RevealItem>
              <Lead className="mt-5 max-w-2xl">{description}</Lead>
            </RevealItem>
          ) : null}
          {children ? <RevealItem>{children}</RevealItem> : null}
        </Reveal>
      </Container>
    </section>
  );
}
