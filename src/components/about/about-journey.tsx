import { journey } from "@/config/about";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/layout/section";
import { Tag } from "@/components/ui/tag";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Career Journey — a clean vertical timeline. Employment history is NOT
 * invented: entries flagged `placeholder` render in a muted, clearly-unfinished
 * style with a "Placeholder" tag, ready to be replaced with real milestones.
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
                className={cn(
                  "absolute -start-[1.9rem] top-1 flex size-3.5 items-center justify-center rounded-full border-2 border-background",
                  item.placeholder ? "bg-border" : "bg-emerald",
                )}
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {item.period}
                </span>
                {item.placeholder ? (
                  <Tag variant="outline" size="sm">
                    Placeholder
                  </Tag>
                ) : null}
              </div>
              <h3
                className={cn(
                  "mt-1 font-heading text-base font-semibold",
                  item.placeholder && "text-muted-foreground",
                )}
              >
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {journey.note}
      </p>
    </Section>
  );
}
