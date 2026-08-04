import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { type Solution } from "@/data/solutions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { CategoryBadge } from "@/components/solutions/category-badge";
import { StatusBadge } from "@/components/solutions/status-badge";
import { SolutionImage } from "@/components/solutions/solution-image";
import { TechnologyList } from "@/components/solutions/technology-badge";

/**
 * SolutionCard — one reusable card for a healthcare solution. Renders entirely
 * from a `Solution` record: image (or placeholder), category + status badges,
 * title, summary, tech stack, and actions. External links (GitHub / live demo)
 * appear only when present in the data — never fabricated.
 *
 * Enterprise styling, obsidian theme, subtle hover lift (shadow + border, no
 * transforms). The whole card is NOT a single link (it contains multiple
 * actions); the title links to the case study for a clear primary target.
 */
export function SolutionCard({
  solution,
  className,
}: {
  solution: Solution;
  className?: string;
}) {
  const caseStudyHref = `/solutions/${solution.slug}`;

  return (
    <article
      className={cn(
        "group/card flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[box-shadow,border-color] duration-200 hover:border-emerald/30 hover:shadow-md",
        className,
      )}
    >
      <div className="p-3">
        <SolutionImage
          src={solution.image}
          title={solution.title}
          icon={solution.icon}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 pt-2">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={solution.category} />
          <StatusBadge status={solution.projectStatus} />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            <Link
              href={caseStudyHref}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {solution.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground text-pretty">
            {solution.shortDescription}
          </p>
        </div>

        <TechnologyList technologies={solution.technologies} />

        {/* Actions pinned to the bottom for consistent card heights. */}
        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Button asChild size="sm">
            <Link href={caseStudyHref}>
              Read Case Study
              <ArrowRight />
            </Link>
          </Button>
          {solution.liveDemo ? (
            <Button asChild size="sm" variant="outline">
              <Link
                href={solution.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink />
                Live Demo
              </Link>
            </Button>
          ) : null}
          {solution.github ? (
            <Button
              asChild
              size="icon-sm"
              variant="ghost"
              aria-label={`${solution.title} on GitHub`}
            >
              <Link
                href={solution.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.gitHub />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
