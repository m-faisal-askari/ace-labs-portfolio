import { type Solution } from "@/data/solutions";
import { Grid } from "@/components/layout/grid";
import { SolutionCard } from "@/components/solutions/solution-card";
import { Reveal, RevealItem } from "@/components/shared/reveal";

/**
 * SolutionGrid — renders a responsive grid of SolutionCards from data.
 * Never hardcodes cards; maps over whatever `solutions` array it's given
 * (all, or a filtered subset). Shows a small empty state if none match.
 */
export function SolutionGrid({
  solutions,
  animate = true,
}: {
  solutions: Solution[];
  /** Wrap items in staggered reveals (disable when re-rendering on filter). */
  animate?: boolean;
}) {
  if (solutions.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        No solutions in this category yet.
      </p>
    );
  }

  if (!animate) {
    return (
      <Grid cols={3} gap="md">
        {solutions.map((solution) => (
          <SolutionCard key={solution.slug} solution={solution} />
        ))}
      </Grid>
    );
  }

  return (
    <Reveal stagger>
      <Grid cols={3} gap="md">
        {solutions.map((solution) => (
          <RevealItem key={solution.slug}>
            <SolutionCard solution={solution} />
          </RevealItem>
        ))}
      </Grid>
    </Reveal>
  );
}
