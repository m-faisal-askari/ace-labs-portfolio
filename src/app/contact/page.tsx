import Link from "next/link";
import { Download, MapPin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { contactHero, contactInfo, contactFaq } from "@/config/contact";
import { constructMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Overline } from "@/components/ui/typography";
import { Icons } from "@/components/shared/icons";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { AvailabilityBadge } from "@/components/contact/availability-badge";
import { ContactCard } from "@/components/contact/contact-card";
import { SocialLinks } from "@/components/contact/social-links";
import { ContactForm } from "@/components/contact/contact-form";
import { FAQAccordion } from "@/components/contact/faq-accordion";

export const metadata = constructMetadata({
  title: "Contact",
  description:
    "Get in touch with Ace Labs to discuss healthcare software projects — new builds and long-term partnerships welcome.",
  pathname: "/contact",
});

/** Contact-method cards, built from the single `siteConfig`/contact sources. */
const email = siteConfig.links.email?.replace("mailto:", "");

const contactCards = [
  email
    ? {
        icon: Icons.mail,
        label: "Email",
        value: email,
        href: siteConfig.links.email,
      }
    : null,
  siteConfig.links.github
    ? {
        icon: Icons.gitHub,
        label: "GitHub",
        value: "View profile",
        href: siteConfig.links.github,
        external: true,
      }
    : null,
  siteConfig.links.linkedin
    ? {
        icon: Icons.linkedIn,
        label: "LinkedIn",
        value: "Connect",
        href: siteConfig.links.linkedin,
        external: true,
      }
    : null,
  { icon: MapPin, label: "Location", value: contactInfo.location },
].filter((c): c is NonNullable<typeof c> => c !== null);

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge={contactHero.badge}
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        description={contactHero.description}
      />

      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: contact information */}
          <section aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="sr-only">
              Contact information
            </h2>
            <Reveal className="flex flex-col gap-6">
              <AvailabilityBadge label={contactInfo.availability} />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => (
                <ContactCard key={card.label} {...card} />
              ))}
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <Overline className="text-emerald">Company profile</Overline>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Download a copy of our company profile.
                  </p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={contactInfo.profileUrl} download>
                    <Download />
                    Profile
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Find us on</span>
              <SocialLinks />
            </div>
            </Reveal>
          </section>

          {/* Right: contact form */}
          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="sr-only">
              Send a message
            </h2>
            <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </Reveal>
          </section>
        </div>
      </Section>

      <Section spacing="lg" bleed="muted" divider="both">
        <SectionHeader
          eyebrow={contactFaq.eyebrow}
          title={contactFaq.title}
          align="center"
        />
        <Reveal>
          <Container size="md" gutter={false} className="mt-10">
            <FAQAccordion items={contactFaq.items} />
          </Container>
        </Reveal>
      </Section>
    </>
  );
}
