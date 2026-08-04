import { cta } from "@/config/home";
import { CTASection } from "@/components/shared/cta-section";

/**
 * Call To Action — the primary conversion moment (also the #contact anchor).
 * Thin wrapper over the reusable `CTASection` with the homepage's copy, so the
 * CTA markup lives in exactly one place.
 */
export function CallToAction() {
  return (
    <CTASection
      id="contact"
      eyebrow={cta.eyebrow}
      title={cta.title}
      description={cta.description}
    />
  );
}
