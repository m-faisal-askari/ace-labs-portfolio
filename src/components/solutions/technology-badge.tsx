import { Tag } from "@/components/ui/tag";

/**
 * TechnologyBadge — a single technology chip. Thin wrapper over the shared Tag
 * so the technology-stack presentation is consistent and centrally styled.
 */
export function TechnologyBadge({ name }: { name: string }) {
  return (
    <Tag variant="soft" size="sm">
      {name}
    </Tag>
  );
}

/** Convenience: render a list of technologies as a wrapped row of chips. */
export function TechnologyList({
  technologies,
  className,
}: {
  technologies: string[];
  className?: string;
}) {
  return (
    <ul className={className ?? "flex flex-wrap gap-2"}>
      {technologies.map((tech) => (
        <li key={tech}>
          <TechnologyBadge name={tech} />
        </li>
      ))}
    </ul>
  );
}
