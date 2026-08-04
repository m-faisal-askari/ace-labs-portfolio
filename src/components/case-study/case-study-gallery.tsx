import type { Solution } from "@/data/solutions";
import {
  CaseStudySection,
  CaseStudyPlaceholder,
} from "@/components/case-study/case-study-section";
import { SolutionImage } from "@/components/solutions/solution-image";

/** Reusable media grid for Wireframes and Gallery sections. */
export function CaseStudyGallery({
  id,
  title,
  description,
  items,
  solution,
  bleed,
}: {
  id: string;
  title: string;
  description?: string;
  items?: { title: string; image: string | null }[];
  solution: Solution;
  bleed?: "muted";
}) {
  return (
    <CaseStudySection id={id} title={title} description={description} bleed={bleed}>
      {items?.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure key={item.title} className="flex flex-col gap-2">
              <SolutionImage
                src={item.image}
                title={item.title}
                icon={solution.icon}
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <figcaption className="text-sm text-muted-foreground">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <CaseStudyPlaceholder />
      )}
    </CaseStudySection>
  );
}
