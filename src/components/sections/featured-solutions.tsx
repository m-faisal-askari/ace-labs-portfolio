import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getAllSolutions } from "@/data/solutions";
import { solutions as solutionsCopy } from "@/config/home";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SolutionGrid } from "@/components/solutions/solution-grid";

/**
 * Featured Solutions (homepage section). Consumes the shared `solutions` data
 * layer — the SAME source as the /solutions page and detail pages — so nothing
 * is duplicated. Section copy lives in `config/home.ts`; the cards are data.
 */
export function FeaturedSolutions() {
  const solutions = getAllSolutions();

  return (
    <Section id="solutions" spacing="lg">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow={solutionsCopy.eyebrow}
          title={solutionsCopy.title}
          description={solutionsCopy.description}
          className="max-w-2xl"
        />
        <Button asChild variant="outline" className="w-fit shrink-0">
          <Link href="/solutions">
            View all solutions
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-12">
        <SolutionGrid solutions={solutions} />
      </div>
    </Section>
  );
}
