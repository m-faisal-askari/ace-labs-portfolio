import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import type { CaseStudyStep } from "@/data/solutions";

/**
 * CaseStudySection — shared wrapper for every case-study section. Provides
 * consistent spacing, an anchor id, and a standard header, then renders its
 * children. Keeps all case-study sections visually uniform.
 */
export function CaseStudySection({
  id,
  title,
  description,
  bleed,
  className,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  bleed?: "muted";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Section id={id} spacing="md" bleed={bleed} containerSize="lg">
      <SectionHeader as="h2" title={title} description={description} />
      <Reveal className={cn("mt-8", className)}>{children}</Reveal>
    </Section>
  );
}

/** Dashed placeholder shown when a section has no content yet. */
export function CaseStudyPlaceholder({ label }: { label?: string }) {
  return (
    <p className="rounded-lg border border-dashed border-border bg-muted/30 px-4 py-8 text-center text-sm text-muted-foreground">
      {label ?? "Content coming soon."}
    </p>
  );
}

/** Reusable check-list (Users, Requirements, Goals, Security, etc.). */
export function CaseStudyList({ items }: { items?: string[] }) {
  if (!items?.length) return <CaseStudyPlaceholder />;
  return (
    <ul className="grid max-w-3xl gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          <Check className="mt-0.5 size-4 shrink-0 text-emerald" />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Reusable title/description card grid (Journey, Decisions, Challenges). */
export function CaseStudyCards({
  items,
  numbered = false,
}: {
  items?: CaseStudyStep[];
  numbered?: boolean;
}) {
  if (!items?.length) return <CaseStudyPlaceholder />;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Card key={item.title} className="h-full">
          <CardContent className="flex flex-col gap-2">
            {numbered ? (
              <span className="font-mono text-xs font-semibold text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : null}
            <h3 className="font-heading text-base font-semibold">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground text-pretty">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

/** Reusable prose block for text sections (Database, API, Architecture). */
export function CaseStudyProse({ body }: { body?: string }) {
  if (!body) return <CaseStudyPlaceholder />;
  return (
    <p className="max-w-2xl text-muted-foreground text-pretty">{body}</p>
  );
}
