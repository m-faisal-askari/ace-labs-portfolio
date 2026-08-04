import { constructMetadata } from "@/lib/seo";
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
} from "@/components/shared/json-ld";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { FeaturedSolutions } from "@/components/sections/featured-solutions";
import { CoreCapabilities } from "@/components/sections/core-capabilities";
import { HowIWork } from "@/components/sections/how-i-work";
import { TechStack } from "@/components/sections/tech-stack";
import { AboutPreview } from "@/components/sections/about-preview";
import { CallToAction } from "@/components/sections/call-to-action";
import { FooterCta } from "@/components/sections/footer-cta";

export const metadata = constructMetadata({ pathname: "/" });

/**
 * Homepage — composes the section components in reading order. All copy lives
 * in `src/config/home.ts`; layout/spacing come from the design system. Section
 * ids (`solutions`, `process`, `skills`, `about`, `contact`) drive the nav
 * scroll-spy and in-page anchors.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <Hero />
      <TrustBar />
      <FeaturedSolutions />
      <CoreCapabilities />
      <HowIWork />
      <TechStack />
      <AboutPreview />
      <CallToAction />
      <FooterCta />
    </>
  );
}
