import { journey } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Career Journey — a clean vertical timeline of Ace Labs milestones, rendered
 * from `journey.items` in config order.
 */
export function AboutJourney() {
  return (
    <Section spacing="lg" bleed="muted" divider="both">
      <SectionHeader eyebrow={journey.eyebrow} title={journey.title} />

      <Reveal stagger className="mt-12">
        <div
          role="list"
          className="relative mx-auto max-w-2xl border-l border-border"
        >
          {journey.items.map((item) => (
            <RevealItem
              key={`${item.period}-${item.title}`}
              role="listitem"
              className="relative ms-6 pb-10 last:pb-0"
            >
              {/* Node */}
              <span
                aria-hidden
                className="absolute -start-[1.9rem] top-1 flex size-3.5 items-center justify-center rounded-full border-2 border-background bg-emerald"
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-1 font-heading text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
