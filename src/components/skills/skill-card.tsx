import {
  SKILL_LEVEL_LABELS,
  SKILL_LEVEL_WEIGHT,
  type Skill,
} from "@/data/skills";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

/**
 * SkillCard — one reusable card for a single skill: icon, name, short
 * description, and a qualitative experience-level indicator (a 3-segment
 * meter with an accessible text label; no numbers or percentages).
 */
export function SkillCard({ skill }: { skill: Skill }) {
  const filled = SKILL_LEVEL_WEIGHT[skill.level];
  const label = SKILL_LEVEL_LABELS[skill.level];

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
            <skill.icon className="size-5" />
          </span>
          <LevelMeter filled={filled} label={label} />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-base font-semibold">{skill.name}</h3>
          <p className="text-sm text-muted-foreground text-pretty">
            {skill.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

/** Three-segment level indicator. Label is exposed to assistive tech. */
function LevelMeter({ filled, label }: { filled: number; label: string }) {
  return (
    <span className="flex items-center gap-1.5" title={label}>
      <span className="sr-only">Experience level: {label}</span>
      <span aria-hidden className="flex items-center gap-1">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-4 rounded-full",
              i <= filled ? "bg-emerald" : "bg-border",
            )}
          />
        ))}
      </span>
    </span>
  );
}
