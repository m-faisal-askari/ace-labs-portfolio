import { capabilities } from "@/config/home";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { FeatureCard } from "@/components/shared/feature-card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Core Capabilities — four principle cards. Reuses `FeatureCard` in static
 * mode (no href/arrow) so it reads as a statement of qualities, not links.
 */
export function CoreCapabilities() {
  return (
    <Section spacing="lg" bleed="muted" divider="both">
      <SectionHeader
        eyebrow={capabilities.eyebrow}
        title={capabilities.title}
      />
      <Reveal stagger className="mt-12">
        <Grid cols={4} gap="md">
          {capabilities.items.map((item) => (
            <RevealItem key={item.title}>
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </RevealItem>
          ))}
        </Grid>
      </Reveal>
    </Section>
  );
}
