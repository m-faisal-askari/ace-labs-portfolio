import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

/** Social/contact links derived from `siteConfig`; only rendered when present. */
const links = [
  { title: "Email", href: siteConfig.links.email, Icon: Icons.mail, external: false },
  { title: "GitHub", href: siteConfig.links.github, Icon: Icons.gitHub, external: true },
  { title: "LinkedIn", href: siteConfig.links.linkedin, Icon: Icons.linkedIn, external: true },
].filter((l): l is { title: string; href: string; Icon: typeof Icons.mail; external: boolean } =>
  Boolean(l.href),
);

/**
 * SocialLinks — a compact row of icon buttons for the agency's profiles.
 * Reusable; reads from the single `siteConfig.links` source.
 */
export function SocialLinks() {
  return (
    <nav className="flex items-center gap-1" aria-label="Social links">
      {links.map(({ title, href, Icon, external }) => (
        <Button
          key={title}
          asChild
          variant="ghost"
          size="icon"
          aria-label={title}
        >
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon className="size-5" />
          </Link>
        </Button>
      ))}
    </nav>
  );
}
