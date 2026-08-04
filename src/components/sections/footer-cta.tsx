import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { footerCta } from "@/config/home";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";

/**
 * Footer CTA — the closing band that bridges the page into the global footer.
 * Distinct from the main CTA: this leads with an availability status and an
 * oversized closing line, acting as a visual sign-off. Full-bleed muted band.
 */
export function FooterCta() {
  return (
    <section className="border-t border-border bg-muted">
      <Container className="py-16 sm:py-20">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-success" aria-hidden />
            {footerCta.status}
          </span>
          <Link
            href={siteConfig.links.email ?? "#contact"}
            className="group flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <span className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {footerCta.title}
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-base font-medium text-primary transition-opacity group-hover:opacity-80">
              {footerCta.linkLabel}
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
