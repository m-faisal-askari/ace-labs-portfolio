import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Hexagon,
  KeyRound,
  Leaf,
  Layers,
  Route,
  Server,
  ShieldCheck,
  Triangle,
  Webhook,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Skills — structured data source for the Skills page. The page renders
 * dynamically from this file; no cards are hardcoded. Only technologies Ace
 * Labs actually works with are listed (no invented tools/certs). The `level`
 * is a qualitative, editable assessment — not a percentage or a
 * years-of-experience claim.
 */

/** Category keys in canonical display order. Empty categories are skipped. */
export const SKILL_CATEGORIES = [
  "frontend",
  "backend",
  "databases",
  "cloud",
  "authentication",
  "ai",
  "testing",
  "devops",
  "tools",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  cloud: "Cloud",
  authentication: "Authentication",
  ai: "AI",
  testing: "Testing",
  devops: "DevOps",
  tools: "Tools",
};

/** Qualitative experience level (no numbers). */
export type SkillLevel = "core" | "proficient" | "familiar";

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  core: "Core",
  proficient: "Proficient",
  familiar: "Familiar",
};

/** Fill weight for the level meter (out of 3). */
export const SKILL_LEVEL_WEIGHT: Record<SkillLevel, number> = {
  core: 3,
  proficient: 2,
  familiar: 1,
};

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  level: SkillLevel;
  icon: LucideIcon;
}

const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "frontend", level: "core", icon: Layers, description: "App Router, server components, and static rendering." },
  { name: "React", category: "frontend", level: "core", icon: Atom, description: "Component-driven UIs with hooks and composition." },
  { name: "TypeScript", category: "frontend", level: "core", icon: Braces, description: "Type-safe application code across the stack." },
  { name: "Tailwind CSS", category: "frontend", level: "core", icon: Wind, description: "Utility-first styling and design tokens." },
  // Backend
  { name: "Node.js", category: "backend", level: "core", icon: Hexagon, description: "Server-side JavaScript runtime for APIs and services." },
  { name: "Express.js", category: "backend", level: "proficient", icon: Route, description: "Lightweight routing and middleware for REST services." },
  { name: "REST APIs", category: "backend", level: "proficient", icon: Webhook, description: "Designing and consuming resource-based HTTP APIs." },
  // Databases
  { name: "PostgreSQL", category: "databases", level: "core", icon: Database, description: "Relational data modeling and queries." },
  { name: "MongoDB", category: "databases", level: "proficient", icon: Leaf, description: "Document storage for flexible data shapes." },
  { name: "Prisma", category: "databases", level: "core", icon: Boxes, description: "Type-safe ORM and schema-driven data access." },
  // Cloud
  { name: "Vercel", category: "cloud", level: "proficient", icon: Triangle, description: "Deployment and hosting for Next.js apps." },
  // Authentication
  { name: "Authentication", category: "authentication", level: "proficient", icon: KeyRound, description: "Auth flows and access control for protected data." },
  // DevOps
  { name: "Docker", category: "devops", level: "proficient", icon: Container, description: "Containerized, reproducible environments." },
  // Tools
  { name: "Git", category: "tools", level: "core", icon: GitBranch, description: "Version control and collaborative workflows." },
];

/** Icon per category (used by section headers). */
export const SKILL_CATEGORY_ICONS: Record<SkillCategory, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  authentication: ShieldCheck,
  ai: Braces,
  testing: Braces,
  devops: Container,
  tools: Wrench,
};

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  icon: LucideIcon;
  skills: Skill[];
}

/** Skills grouped by category, in canonical order, skipping empty groups. */
export function getSkillGroups(): SkillGroup[] {
  return SKILL_CATEGORIES.map((category) => ({
    category,
    label: SKILL_CATEGORY_LABELS[category],
    icon: SKILL_CATEGORY_ICONS[category],
    skills: skills.filter((s) => s.category === category),
  })).filter((group) => group.skills.length > 0);
}
