import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Display, Lead, Overline } from "@/components/ui/typography";

/**
 * Global 404 page (App Router `not-found.tsx`).
 * Rendered inside the root layout, so it keeps the header, footer and theme.
 * Uses design-system typography/buttons for a calm, on-brand dead-end.
 */
export default function NotFound() {
  return (
    <Container
      size="md"
      className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center"
    >
      <Overline className="text-primary">Error 404</Overline>
      <Display className="mt-3">Page not found</Display>
      <Lead className="mt-4 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </Lead>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">
            <Home />
            Back to home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/#projects">
            <ArrowLeft />
            View projects
          </Link>
        </Button>
      </div>
    </Container>
  );
}
