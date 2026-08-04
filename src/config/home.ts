import {
  Activity,
  Code2,
  Database,
  Globe,
  HeartPulse,
  Layers,
  MapPin,
  PencilRuler,
  Rocket,
  Server,
  ShieldCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Homepage content — single source of truth for all section copy.
 *
 * Identity: Ace Labs (see also `siteConfig`). Content is written to be honest
 * and verifiable: no invented metrics, testimonials, client logos, or
 * years-of-experience claims. Projects are framed as systems Ace Labs builds /
 * specializes in, not as claimed completed client engagements. Where a real
 * detail is unknown, a clearly-marked placeholder is used instead of a fact.
 */

export interface Fact {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TechGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

/* --------------------------------- Hero --------------------------------- */
export const hero = {
  eyebrow: "Healthcare Software Agency · Full-Stack",
  title:
    "Modern healthcare software that improves efficiency and patient experience.",
  description:
    "Ace Labs is a full-stack software agency focused on healthcare. We help clinics, hospitals, laboratories, pharmacies, and telemedicine teams turn manual, fragmented workflows into clean, reliable web software — built with Next.js, TypeScript, and Node.js.",
  availability: "Available for new projects & partnerships",
  primaryCta: { label: "View Our Solutions", href: "#solutions" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
};

/* --------- Trust bar: verifiable facts only (no invented stats) --------- */
export const facts: Fact[] = [
  { icon: HeartPulse, label: "Specialization", value: "Healthcare Software" },
  { icon: Layers, label: "Focus", value: "Full-Stack Development" },
  { icon: MapPin, label: "Based in", value: "Karachi, Pakistan" },
  { icon: Globe, label: "Engagements", value: "Remote & On-site" },
];

/* --- Featured solutions (homepage section header copy only) ---
 * The solution CARDS come from the data layer (`src/data/solutions.ts`), the
 * single source of truth shared with /solutions and the detail pages. Only the
 * section's heading text lives here. */
export const solutions = {
  eyebrow: "Solutions",
  title: "Healthcare systems we build.",
  description:
    "The kinds of platforms we design and develop across the care and operations workflow — each built for clarity, security, and day-to-day reliability.",
};

/* --------------------------- Core capabilities -------------------------- */
export const capabilities = {
  eyebrow: "Capabilities",
  title: "Principles we build on.",
  items: [
    {
      icon: ShieldCheck,
      title: "Secure by Design",
      description:
        "Authentication, access control, and security best practices built in from the start.",
    },
    {
      icon: Rocket,
      title: "Scalable",
      description:
        "Architected to grow from a single clinic to a larger network without a rewrite.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Accessible, low-friction interfaces designed around real day-to-day workflows.",
    },
    {
      icon: Activity,
      title: "Reliable",
      description:
        "Written to be maintainable and dependable, because software supports real operations.",
    },
  ] satisfies Feature[],
};

/* ----------------- How we work (honest process, not claims) ------------- */
export const process = {
  eyebrow: "How we work",
  title: "A clear, dependable delivery process.",
  description:
    "A straightforward way of working that keeps projects predictable from first conversation to launch.",
  steps: [
    {
      icon: Users,
      title: "Understand",
      description:
        "Learn the workflow, the people using it, and the outcome that matters most.",
    },
    {
      icon: PencilRuler,
      title: "Design",
      description:
        "Plan the architecture, data model, and interface before writing production code.",
    },
    {
      icon: Code2,
      title: "Build",
      description:
        "Develop in small, reviewed increments with a focus on quality and clarity.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description:
        "Deploy, document, and support — with room to iterate as needs evolve.",
    },
  ] satisfies ProcessStep[],
};

/* ------------------- Tech stack (Ace Labs' core stack) ------------------ */
export const techStack = {
  eyebrow: "Skills",
  title: "Tools we work with.",
  description: "Our core stack, grouped by where it fits in a project.",
  groups: [
    {
      icon: Code2,
      title: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      icon: Database,
      title: "Database",
      items: ["PostgreSQL", "MongoDB", "Prisma"],
    },
    {
      icon: Wrench,
      title: "Other",
      items: ["REST APIs", "Authentication", "Git", "Docker", "Vercel"],
    },
  ] satisfies TechGroup[],
};

/* ------------------------------- About ---------------------------------- */
export const about = {
  eyebrow: "About",
  title: "Building healthcare software that earns its place.",
  paragraphs: [
    "Ace Labs is a full-stack software agency based in Karachi, focused on healthcare. Our goal is to design and build secure, scalable, and user-friendly healthcare software that improves operational efficiency for the teams delivering care.",
    "We work with clinics, hospitals, healthcare startups, laboratories, pharmacies, and telemedicine companies — building web applications with Next.js, TypeScript, and Node.js.",
  ],
  strengths: [
    "Full-stack development (Next.js · React · Node.js)",
    "Type-safe, maintainable TypeScript codebases",
    "REST APIs, authentication, and data modeling",
    "Accessible, responsive interfaces with Tailwind CSS",
  ],
  cta: { label: "More about us", href: "/about" },
};

/* -------------------------------- CTA ----------------------------------- */
export const cta = {
  eyebrow: "Get in touch",
  title: "Let's build something that improves care.",
  description:
    "Have a healthcare product, an internal tool, or a project in mind? We'd be glad to hear about it.",
};

/* ----------------------------- Footer CTA ------------------------------- */
export const footerCta = {
  status: "Available for new projects & partnerships",
  title: "Let's build better healthcare software, together.",
  linkLabel: "Start a conversation",
};
