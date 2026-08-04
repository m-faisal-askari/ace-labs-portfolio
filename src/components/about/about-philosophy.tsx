import { philosophy } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Professional Philosophy — three principle cards describing how Ace Labs
 * approaches building software. Statements of approach, not claims or metrics.
 */
export function AboutPhilosophy() {
  return (
    <Section spacing="lg">
      <SectionHeader eyebrow={philosophy.eyebrow} title={philosophy.title} />
      <Reveal stagger className="mt-12">
        <Grid cols={3} gap="md">
          {philosophy.points.map((point) => (
            <RevealItem key={point.title}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
                    <point.icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </Grid>
      </Reveal>
    </Section>
  );
}
