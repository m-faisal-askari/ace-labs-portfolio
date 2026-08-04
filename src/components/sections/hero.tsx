import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { hero } from "@/config/home";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Display, Lead, Overline } from "@/components/ui/typography";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";

/**
 * Hero — the primary statement. Left: availability badge, label, large
 * headline, supporting paragraph, and two CTAs. Right: a layered healthcare
 * dashboard mock (HeroVisual) that signals expertise without stealing focus.
 */
export function Hero() {
  return (
    <section className="flex flex-col justify-center border-b border-border/60 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:min-h-[calc(100svh-4rem)] lg:py-8">
      <Container size="xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
          <Reveal stagger>
            <RevealItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald" />
                </span>
                {hero.availability}
              </span>
            </RevealItem>

            <RevealItem>
              <Overline className="mt-4 text-emerald">{hero.eyebrow}</Overline>
            </RevealItem>

            <RevealItem>
              <Display className="mt-3 text-[2rem] sm:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]">
                {hero.title}
              </Display>
            </RevealItem>

            <RevealItem>
              <Lead className="mt-4 max-w-xl">{hero.description}</Lead>
            </RevealItem>

            <RevealItem>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={hero.secondaryCta.href}>
                    {hero.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </RevealItem>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-[88%]">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
