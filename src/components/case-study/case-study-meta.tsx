import Link from "next/link";
import { ExternalLink } from "lucide-react";

import type { Solution } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { TechnologyList } from "@/components/solutions/technology-badge";
import {
  CaseStudySection,
  CaseStudyPlaceholder,
} from "@/components/case-study/case-study-section";

/** Technology Stack — reuses the shared technology chips. */
export function CaseStudyTechStack({ solution }: { solution: Solution }) {
  return (
    <CaseStudySection id="technology-stack" title="Technology Stack">
      <TechnologyList technologies={solution.technologies} />
    </CaseStudySection>
  );
}

/** Project Links — live demo + code; placeholder when neither exists yet. */
export function CaseStudyLinks({ solution }: { solution: Solution }) {
  const hasLinks = Boolean(solution.liveDemo || solution.github);
  return (
    <CaseStudySection id="project-links" title="Project Links">
      {hasLinks ? (
        <div className="flex flex-wrap gap-3">
          {solution.liveDemo ? (
            <Button asChild>
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
            <Button asChild variant="outline">
              <Link
                href={solution.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.gitHub />
                View Code
              </Link>
            </Button>
          ) : null}
        </div>
      ) : (
        <CaseStudyPlaceholder label="Links will be added when the project is published." />
      )}
    </CaseStudySection>
  );
}
