import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { H2, Overline, P } from "@/components/ui/typography";
import { Reveal } from "@/components/shared/reveal";

/**
 * CTASection — a reusable, centered call-to-action band. Content is fully
 * parameterized so every page (homepage, Solutions, future pages) can render a
 * consistent CTA without duplicating markup. Primary button defaults to email
 * (from `siteConfig`); an optional secondary link can be supplied.
 */
interface CTASectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Anchor id for in-page linking (e.g. "contact"). */
  id?: string;
  primary?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
}

export function CTASection({
  eyebrow,
  title,
  description,
  id,
  primary,
  secondary,
}: CTASectionProps) {
  const email = siteConfig.links.email;
  // Default primary → email if not explicitly provided.
  const primaryCta =
    primary ??
    (email
      ? { label: email.replace("mailto:", ""), href: email }
      : undefined);
  // Default secondary → LinkedIn if available and none provided.
  const secondaryCta =
    secondary ??
    (siteConfig.links.linkedin
      ? {
          label: "Connect on LinkedIn",
          href: siteConfig.links.linkedin,
          external: true,
        }
      : undefined);

  return (
    <Section id={id} spacing="lg" bleed="accent" divider="top">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        {eyebrow ? <Overline className="text-emerald">{eyebrow}</Overline> : null}
        <H2 className="mt-3">{title}</H2>
        {description ? (
          <P className="mt-4 max-w-xl text-muted-foreground">{description}</P>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {primaryCta ? (
            <Button asChild size="lg">
              <Link
                href={primaryCta.href}
                target={primaryCta.external ? "_blank" : undefined}
                rel={primaryCta.external ? "noopener noreferrer" : undefined}
              >
                {primaryCta.href.startsWith("mailto:") ? <Mail /> : null}
                {primaryCta.label}
              </Link>
            </Button>
          ) : null}
          {secondaryCta ? (
            <Button asChild size="lg" variant="outline">
              <Link
                href={secondaryCta.href}
                target={secondaryCta.external ? "_blank" : undefined}
                rel={secondaryCta.external ? "noopener noreferrer" : undefined}
              >
                {secondaryCta.label}
                <ArrowRight />
              </Link>
            </Button>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
