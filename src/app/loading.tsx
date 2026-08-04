import { Spinner } from "@/components/shared/spinner";

/**
 * Route-level loading UI (App Router `loading.tsx`).
 * Rendered instantly via Suspense while a route segment's data/JS resolves.
 * Sized to fill the space between the sticky header and footer.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4">
      <Spinner size="lg" label="Loading page" />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}
