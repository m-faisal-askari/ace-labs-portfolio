import { siteConfig } from "@/config/site";

/**
 * Renders a JSON-LD structured-data script. Safe for a Server Component; the
 * object is serialized once. Reused across the site for different schema types.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — the agency, for rich results / knowledge panel. */
export function organizationSchema() {
  const sameAs = [
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    knowsAbout: siteConfig.keywords,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** WebSite schema — the site itself. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@type": "Organization", name: siteConfig.author },
  };
}

/** BreadcrumbList for a solution detail page. */
export function solutionBreadcrumb(title: string, slug: string) {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Solutions", item: `${base}/solutions` },
      { "@type": "ListItem", position: 2, name: title, item: `${base}/solutions/${slug}` },
    ],
  };
}

/** CreativeWork schema for a solution/case-study. */
export function solutionSchema(input: {
  title: string;
  description: string;
  slug: string;
  technologies: string[];
}) {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    headline: input.title,
    description: input.description,
    url: `${base}/solutions/${input.slug}`,
    keywords: input.technologies.join(", "),
    author: { "@type": "Organization", name: siteConfig.author, url: siteConfig.url },
    about: "Healthcare software",
  };
}
