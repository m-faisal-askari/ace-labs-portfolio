import { MapPin } from "lucide-react";

import { intro } from "@/config/about";
import { Container } from "@/components/layout/container";
import { Display, Lead, Overline } from "@/components/ui/typography";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/shared/reveal";
import { PhotoPlaceholder } from "@/components/shared/photo-placeholder";

/**
 * About Intro — the executive header. Photo placeholder alongside name, title,
 * specialization, location, availability, and a concise positioning statement.
 * Reads as a professional profile, not a personal bio.
 */
export function AboutIntro() {
  return (
    <section className="border-b border-border/60 py-16 sm:py-20 lg:py-24">
      <Container size="xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:mx-0">
            <PhotoPlaceholder name={intro.name} aspect="aspect-[4/5]" />
          </Reveal>

          <Reveal stagger>
            <Overline className="text-emerald">{intro.eyebrow}</Overline>
            <Display className="mt-4 text-4xl sm:text-5xl">{intro.name}</Display>
            <p className="mt-3 font-heading text-xl font-medium text-foreground">
              {intro.title}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Tag variant="brand">{intro.specialization}</Tag>
              <Tag variant="soft">
                <MapPin className="size-3" />
                {intro.location}
              </Tag>
            </div>
            <Lead className="mt-6 max-w-xl">{intro.statement}</Lead>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald" />
              </span>
              {intro.availability}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
