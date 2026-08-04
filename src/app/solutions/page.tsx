import {
  getAllSolutions,
  getFeaturedSolution,
  getUsedCategories,
} from "@/data/solutions";
import { constructMetadata } from "@/lib/seo";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { SolutionCard } from "@/components/solutions/solution-card";
import { SolutionsExplorer } from "@/components/solutions/solutions-explorer";
import { FeaturedSolution } from "@/components/solutions/featured-solution";

export const metadata = constructMetadata({
  title: "Healthcare Solutions",
  description:
    "A collection of healthcare software solutions — clinic and hospital management, telemedicine, pharmacy inventory, laboratory management, and patient portals — designed and built by Ace Labs.",
  pathname: "/solutions",
});

/**
 * Solutions listing page. All content is derived from the `solutions` data
 * layer (single source of truth): the grid maps over `getAllSolutions()`,
 * filters use `getUsedCategories()`, and the featured block uses the
 * `featured` boolean via `getFeaturedSolution()` — nothing is hardcoded.
 *
 * Cards are rendered here (Server Component) so their icon components never
 * cross the RSC boundary; the client `SolutionsExplorer` only toggles which
 * pre-rendered cards are visible per category.
 */
export default function SolutionsPage() {
  const solutions = getAllSolutions();
  const categories = getUsedCategories();
  const featured = getFeaturedSolution();

  const items = solutions.map((s) => ({ slug: s.slug, category: s.category }));
  const renderedCards = Object.fromEntries(
    solutions.map((s) => [s.slug, <SolutionCard key={s.slug} solution={s} />]),
  );

  return (
    <>
      <PageHero
        badge="Healthcare Software Portfolio"
        eyebrow="Solutions"
        title="Software built for how healthcare actually operates."
        description="A collection of healthcare applications — spanning clinical operations, patient care, laboratories, pharmacies, and telemedicine. Each one demonstrates the design and development of secure, scalable systems for the teams that deliver care."
      />

      <Section spacing="lg">
        <SolutionsExplorer
          categories={categories}
          items={items}
          renderedCards={renderedCards}
        />
      </Section>

      <FeaturedSolution solution={featured} />

      <CTASection
        eyebrow="Get in touch"
        title="Have a healthcare project in mind?"
        description="Whether it's a new build or an existing system that needs to scale, we'd be glad to talk it through."
        id="contact"
      />
    </>
  );
}
