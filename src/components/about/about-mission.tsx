import { mission } from "@/config/about";
import { Section } from "@/components/layout/section";
import { H2, Lead, Overline, P } from "@/components/ui/typography";
import { Reveal } from "@/components/shared/reveal";

/**
 * Mission — a focused statement band. The mission is presented as a large,
 * confident lead line with a short supporting paragraph. Muted surface to set
 * it apart from surrounding sections.
 */
export function AboutMission() {
  return (
    <Section spacing="lg" bleed="muted" divider="both">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Overline className="text-emerald">{mission.eyebrow}</Overline>
        <H2 className="mt-3">{mission.title}</H2>
        <Lead className="mt-6 text-foreground">{mission.statement}</Lead>
        <P className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {mission.supporting}
        </P>
      </Reveal>
    </Section>
  );
}
