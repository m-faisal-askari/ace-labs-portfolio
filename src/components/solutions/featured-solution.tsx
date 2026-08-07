import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { type Solution } from "@/data/solutions";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CategoryBadge } from "@/components/solutions/category-badge";
import { SolutionImage } from "@/components/solutions/solution-image";
import { TechnologyList } from "@/components/solutions/technology-badge";
import { Reveal } from "@/components/shared/reveal";

/**
 * FeaturedSolution — a large showcase for the `featured` solution. The project
 * is chosen from the data (`featured` boolean), never hand-picked here. Shows
 * image, overview, problem, approach, tech stack, key features, and a link to
 * the full case study. Renders nothing if no solution is flagged featured.
 */
export function FeaturedSolution({ solution }: { solution: Solution | undefined }) {
  if (!solution) return null;

  const href = `/solutions/${solution.slug}`;
  const { caseStudy } = solution;

  return (
    <Section spacing="lg" bleed="muted" divider="both">
      <SectionHeader
        eyebrow="Featured solution"
        title={solution.title}
        description={solution.longDescription}
      />

      <Reveal className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-4">
          <SolutionImage
            src={solution.image}
            title={solution.title}
            icon={solution.icon}
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge category={solution.category} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <FeaturedRow label="Overview" body={caseStudy.overview} />
            <FeaturedRow label="Healthcare problem" body={caseStudy.problem} />
            <FeaturedRow label="Approach" body={caseStudy.approach} />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Key features
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {caseStudy.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald" />
                  <span className="text-pretty">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Technology stack
            </p>
            <TechnologyList technologies={solution.technologies} />
          </div>

          <div>
            <Button asChild>
              <Link href={href}>
                Read Full Case Study
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function FeaturedRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid gap-1 border-l-2 border-border pl-4">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm text-muted-foreground text-pretty">{body}</p>
    </div>
  );
}
