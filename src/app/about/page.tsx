import { constructMetadata } from "@/lib/seo";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutMission } from "@/components/about/about-mission";
import { AboutPhilosophy } from "@/components/about/about-philosophy";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutValues } from "@/components/about/about-values";
import { AboutTeam } from "@/components/about/about-team";
import { HowIWork } from "@/components/sections/how-i-work";
import { TechStack } from "@/components/sections/tech-stack";
import { AboutSkills } from "@/components/about/about-skills";
import { AboutFaq } from "@/components/about/about-faq";
import { CallToAction } from "@/components/sections/call-to-action";

export const metadata = constructMetadata({
  title: "About",
  description:
    "About Ace Labs, a healthcare software agency specializing in full-stack systems for clinics, hospitals, laboratories, pharmacies, and telemedicine providers.",
  pathname: "/about",
});

/**
 * About page — an executive profile for Ace Labs. Sections in order:
 * professional introduction, mission, philosophy, agency journey, core values,
 * team, development process, technology stack, skills overview, FAQ, and
 * contact CTA.
 *
 * Reuses homepage sections where identical (HowIWork, TechStack, CallToAction)
 * and shared primitives throughout; About-specific copy lives in
 * `src/config/about.ts`. No fabricated experience, statistics, or history.
 */
export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutMission />
      <AboutPhilosophy />
      <AboutJourney />
      <AboutValues />
      <AboutTeam />
      {/* Development Process — reused from the homepage. */}
      <HowIWork />
      {/* Technology Stack — reused from the homepage. */}
      <TechStack />
      <AboutSkills />
      <AboutFaq />
      <CallToAction />
    </>
  );
}
