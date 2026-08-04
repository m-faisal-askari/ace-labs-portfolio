import { values } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { FeatureCard } from "@/components/shared/feature-card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Core Values — four value cards. Reuses the shared `FeatureCard` in static
 * mode (no href), exactly like the homepage Core Capabilities section, for a
 * consistent design language.
 */
export function AboutValues() {
  return (
    <Section spacing="lg">
      <SectionHeader eyebrow={values.eyebrow} title={values.title} />
      <Reveal stagger className="mt-12">
        <Grid cols={4} gap="md">
          {values.items.map((value) => (
            <RevealItem key={value.title}>
              <FeatureCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </RevealItem>
          ))}
        </Grid>
      </Reveal>
    </Section>
  );
}
