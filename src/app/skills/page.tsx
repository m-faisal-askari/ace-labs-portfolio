import { getSkillGroups } from "@/data/skills";
import { constructMetadata } from "@/lib/seo";
import { Section } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { SkillCard } from "@/components/skills/skill-card";

export const metadata = constructMetadata({
  title: "Skills",
  description:
    "The technologies Ace Labs works with across the stack — frontend, backend, databases, cloud, authentication, and tooling.",
  pathname: "/skills",
});

/**
 * Skills page. Renders dynamically from the `skills` data source, grouped by
 * category. No cards are hardcoded; empty categories are skipped by the data
 * selector.
 */
export default function SkillsPage() {
  const groups = getSkillGroups();

  return (
    <>
      <PageHero
        badge="Technical Skills"
        eyebrow="Skills"
        title="The tools we build healthcare software with."
        description="A full-stack toolkit spanning the frontend, backend, data, and delivery — the technologies we reach for to design and ship reliable healthcare applications."
      />

      <Section spacing="lg">
        <div className="flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                  <group.icon className="size-5" />
                </span>
                <h2 className="font-heading text-xl font-semibold tracking-tight">
                  {group.label}
                </h2>
              </div>

              <Reveal stagger>
                <Grid cols={3} gap="md">
                  {group.skills.map((skill) => (
                    <RevealItem key={skill.name}>
                      <SkillCard skill={skill} />
                    </RevealItem>
                  ))}
                </Grid>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Get in touch"
        title="Have a project that needs these skills?"
        description="We'd be glad to talk through what you're building."
        id="contact"
        secondary={{ label: "View solutions", href: "/solutions" }}
      />
    </>
  );
}
