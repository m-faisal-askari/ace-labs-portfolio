import { faq } from "@/config/about";
import { Section, SectionHeader } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/reveal";

/**
 * FAQ — an accessible accordion of common questions. Answers state only
 * verifiable facts (services, clients, availability, stack, location, process)
 * with no invented statistics or achievements. The shadcn Accordion handles
 * keyboard interaction and ARIA out of the box.
 */
export function AboutFaq() {
  return (
    <Section spacing="lg">
      <SectionHeader eyebrow={faq.eyebrow} title={faq.title} align="center" />
      <Reveal>
        <Container size="md" gutter={false} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-pretty">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Reveal>
    </Section>
  );
}
