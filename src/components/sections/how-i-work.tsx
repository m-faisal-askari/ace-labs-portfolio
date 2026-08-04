import { process } from "@/config/home";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * How We Work — an honest, four-step delivery process. Describes methodology
 * (not achievements or metrics), so it communicates competence without any
 * unverifiable claims. Numbered cards with a subtle icon per step.
 */
export function HowIWork() {
  return (
    <Section id="process" spacing="lg">
      <SectionHeader
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
      />
      <Reveal stagger className="mt-12">
        <Grid cols={4} gap="md">
          {process.steps.map((step, i) => (
            <RevealItem key={step.title}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {step.description}
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
