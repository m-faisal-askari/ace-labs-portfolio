import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Solution } from "@/data/solutions";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CategoryBadge } from "@/components/solutions/category-badge";
import { StatusBadge } from "@/components/solutions/status-badge";
import { SolutionImage } from "@/components/solutions/solution-image";
import { Reveal } from "@/components/shared/reveal";

/** Case-study hero: back link, badges, title, summary, and lead image. */
export function CaseStudyHero({ solution }: { solution: Solution }) {
  return (
    <section className="border-b border-border/60 py-14 sm:py-20">
      <Container size="xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Button asChild variant="ghost" size="sm" className="-ml-2 mb-6">
              <Link href="/solutions">
                <ArrowLeft />
                All solutions
              </Link>
            </Button>
            <div className="flex flex-wrap items-center gap-2">
              <CategoryBadge category={solution.category} />
              <StatusBadge status={solution.projectStatus} />
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
              {solution.longDescription}
            </p>
          </Reveal>
          <Reveal className="lg:pl-4">
            <SolutionImage
              src={solution.image}
              title={solution.title}
              icon={solution.icon}
              aspect="aspect-[16/10]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
