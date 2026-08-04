import { facts } from "@/config/home";
import { Container } from "@/components/layout/container";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Trust Bar — a horizontal band of verifiable facts directly below the hero.
 * Deliberately shows attributes (specialization, focus, location, availability)
 * rather than invented statistics. Minimal styling, equal spacing.
 */
export function TrustBar() {
  return (
    <section className="border-b border-border bg-muted/40">
      <Container size="xl" className="py-8 sm:py-10">
        <Reveal
          stagger
          className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-border"
        >
          {facts.map((fact) => (
            <RevealItem key={fact.label}>
              <div className="flex items-center gap-3 lg:justify-center">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                  <fact.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                    {fact.label}
                  </p>
                  <p className="font-heading text-sm font-semibold tracking-tight text-pretty">
                    {fact.value}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
