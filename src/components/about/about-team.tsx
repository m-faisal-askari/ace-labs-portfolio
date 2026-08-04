import { team } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Grid } from "@/components/layout/grid";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/** Two-letter initials derived from a full name, for the avatar stand-in. */
function initialsFrom(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Meet the Team — the people behind Ace Labs. Each card pairs an initials
 * avatar (a clear placeholder for a real photo) with name, role, and a concise
 * bio. Reuses the shared Section/Grid/Card/Reveal primitives for visual and
 * motion consistency with the rest of the About page.
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
                  <span
                    aria-hidden
                    className="flex size-14 items-center justify-center rounded-full border border-border bg-muted font-heading text-lg font-semibold tracking-tight text-foreground"
                  >
                    {initialsFrom(member.name)}
                  </span>
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
