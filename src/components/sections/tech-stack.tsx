import { techStack } from "@/config/home";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * Tech Stack — technologies grouped by role (Frontend, Backend, Database,
 * Cloud, AI, Testing, Tools) rather than one long list. Each group is a
 * compact card with an icon header and tag chips. Anchors the #skills nav.
 */
export function TechStack() {
  return (
    <Section id="skills" spacing="lg" bleed="muted" divider="both">
      <SectionHeader
        eyebrow={techStack.eyebrow}
        title={techStack.title}
        description={techStack.description}
      />
      <Reveal
        stagger
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {techStack.groups.map((group) => (
          <RevealItem key={group.title}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                    <group.icon className="size-4" />
                  </span>
                  <h3 className="font-heading text-sm font-semibold">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag variant="outline" size="sm">
                        {item}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
