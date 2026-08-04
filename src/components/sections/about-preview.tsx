import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { about } from "@/config/home";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { H2, Overline, P } from "@/components/ui/typography";
import { Reveal } from "@/components/shared/reveal";

/**
 * About Preview — a condensed intro + mission, with a list of core strengths
 * and a CTA to the full About page. Two-column on desktop.
 */
export function AboutPreview() {
  return (
    <Section id="about" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Overline className="text-emerald">{about.eyebrow}</Overline>
          <H2 className="mt-3">{about.title}</H2>
          <div className="mt-5 flex flex-col gap-4">
            {about.paragraphs.map((paragraph, i) => (
              <P key={i} className="text-muted-foreground">
                {paragraph}
              </P>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link href={about.cta.href}>
              {about.cta.label}
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>

        <Reveal className="lg:pt-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Core strengths
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {about.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-subtle text-emerald-subtle-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-pretty">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
