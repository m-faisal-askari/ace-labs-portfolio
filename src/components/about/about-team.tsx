import { team } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { PhotoPlaceholder } from "@/components/shared/photo-placeholder";

/**
 * Meet the Team — the people behind Ace Labs. Each card pairs a small photo
 * placeholder (a clear stand-in for a real headshot) with name, role, and a
 * concise bio. Reuses the shared Section/Grid/Card/Reveal primitives and the
 * PhotoPlaceholder for visual and motion consistency with the rest of the page.
 */
export function AboutTeam() {
  return (
    <Section spacing="lg">
      <SectionHeader
        eyebrow={team.eyebrow}
        title={team.title}
        description={team.description}
      />
      <Reveal stagger className="mt-12">
        <Grid cols={4} gap="md">
          {team.members.map((member) => (
            <RevealItem key={member.name}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-4">
                  <PhotoPlaceholder
                    name={member.name}
                    aspect="aspect-square"
                    src={member.image}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-base font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-emerald">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {member.bio}
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
