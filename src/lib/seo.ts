import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  /** Path or absolute URL to a page-specific OG/Twitter image. */
  image?: string;
  /** Canonical path for this page, e.g. "/projects". */
  pathname?: string;
  /** Set true to exclude a page from search indexing. */
  noIndex?: boolean;
}

/** Descriptive default document title (home + fallback). */
export const defaultTitle = `${siteConfig.name}: Healthcare Software Agency`;

/**
 * Factory for per-page `Metadata`. Pages export:
 *   export const metadata = constructMetadata({ title: "About" })
 *
 * The document `title` is emitted BARE (e.g. "About"); the root layout's title
 * template (`%s · <name>`) appends the name exactly once. When no title is
 * given, the title key is omitted so the layout's default title applies.
 * OpenGraph/Twitter titles don't use templates, so they get the full title.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image,
  pathname = "/",
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  // Full title for social cards (no template is applied to these).
  const socialTitle = title ? `${title} · ${siteConfig.name}` : defaultTitle;

  const canonical = absoluteUrl(pathname);
  // Only set explicit social images when a page provides one; otherwise the
  // root `opengraph-image` / `twitter-image` route conventions supply them.
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : undefined;

  return {
    metadataBase: new URL(siteConfig.url),
    // Bare title → layout template adds the name once. Omitted when absent.
    ...(title ? { title } : {}),
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630, alt: socialTitle }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    manifest: "/manifest.webmanifest",
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
