import { skillAreas } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Skills Overview — competency areas (what the work is), distinct from the
 * named-tools Technology Stack (which lists the specific technologies).
 * Two-column cards keep this readable and executive in tone.
 */
export function AboutSkills() {
  return (
    <Section spacing="lg" bleed="muted" divider="both">
      <SectionHeader
        eyebrow={skillAreas.eyebrow}
        title={skillAreas.title}
        description={skillAreas.description}
      />
      <Reveal stagger className="mt-12">
        <Grid cols={2} gap="md">
          {skillAreas.items.map((item) => (
            <RevealItem key={item.title}>
              <Card className="h-full">
                <CardContent className="flex h-full gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {item.description}
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
