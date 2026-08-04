import { notFound } from "next/navigation";

import {
  getAllSolutions,
  getSolutionBySlug,
} from "@/data/solutions";
import { constructMetadata } from "@/lib/seo";
import {
  JsonLd,
  solutionBreadcrumb,
  solutionSchema,
} from "@/components/shared/json-ld";
import { CaseStudyTemplate } from "@/components/case-study/case-study-template";
import { CTASection } from "@/components/shared/cta-section";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Statically prerender a detail page for every solution slug. */
export function generateStaticParams() {
  return getAllSolutions().map((s) => ({ slug: s.slug }));
}

/** The solution set is fixed data — any slug outside it should 404. */
export const dynamicParams = false;

/** Per-slug SEO, derived from the same data record. */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return constructMetadata({ title: "Solution not found" });

  return constructMetadata({
    title: solution.title,
    description: solution.shortDescription,
    pathname: `/solutions/${solution.slug}`,
  });
}

/**
 * Solution detail / case-study page. Consumes the SAME `solutions` data layer
 * as the homepage and listing — no duplicated content. Adding a solution to
 * the data source makes its detail page and SEO exist automatically.
 */
export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      <JsonLd data={solutionBreadcrumb(solution.title, solution.slug)} />
      <JsonLd
        data={solutionSchema({
          title: solution.title,
          description: solution.shortDescription,
          slug: solution.slug,
          technologies: solution.technologies,
        })}
      />
      <CaseStudyTemplate solution={solution} />

      <CTASection
        eyebrow="Get in touch"
        title="Interested in a system like this?"
        description="We'd be glad to discuss how a solution like this could fit your organization."
        id="contact"
        secondary={{ label: "View all solutions", href: "/solutions" }}
      />
    </>
  );
}
