import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { Logo } from "@/components/shared/logo";

/** Icon links derived from the configured social/contact URLs. */
const socials = [
  { title: "GitHub", href: siteConfig.links.github, Icon: Icons.gitHub },
  { title: "LinkedIn", href: siteConfig.links.linkedin, Icon: Icons.linkedIn },
  { title: "Email", href: siteConfig.links.email, Icon: Icons.mail },
].filter((s): s is { title: string; href: string; Icon: typeof Icons.gitHub } =>
  Boolean(s.href),
);

/**
 * Minimal footer shell: copyright + social icon links.
 * Structure only; content comes from `siteConfig`.
 */
export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link
            href="/"
            className="rounded-md transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <Logo />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-1" aria-label="Social links">
          {socials.map(({ title, href, Icon }) => (
            <Button
              key={title}
              asChild
              variant="ghost"
              size="icon"
              aria-label={title}
            >
              <Link
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                <Icon className="size-5" />
              </Link>
            </Button>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
