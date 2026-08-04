import {
  Boxes,
  Compass,
  Gauge,
  Handshake,
  Layers,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * About page content — single source of truth for the /about route.
 *
 * Honest by design: no fabricated experience, statistics, achievements, or
 * company history. Where real detail isn't available yet (agency journey),
 * the structure ships with clearly-marked placeholders to be filled in — not
 * invented facts. Identity/skills come from `siteConfig` and `home.ts`.
 */

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
  /** Placeholder entries render in a muted, clearly-unfinished style. */
  placeholder?: boolean;
}

export interface SkillArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

/* ------------------------- Professional intro --------------------------- */
export const intro = {
  eyebrow: "About",
  name: "Ace Labs",
  title: "Healthcare Software Agency",
  specialization: "Healthcare Software Development",
  location: "Karachi, Pakistan",
  availability: "Available for new projects & partnerships",
  statement:
    "We build web software for the healthcare sector — the systems clinics, hospitals, laboratories, pharmacies, and telemedicine providers rely on to run day to day. Our focus is turning complex operational requirements into secure, scalable, and genuinely usable applications.",
};

/* -------------------------------- Mission ------------------------------- */
export const mission = {
  eyebrow: "Mission",
  title: "Software that improves how healthcare operates.",
  statement:
    "Design and build secure, scalable, and user-friendly healthcare software that improves operational efficiency for clinics, hospitals, laboratories, pharmacies, and telemedicine providers.",
  supporting:
    "Healthcare teams spend too much time on manual, fragmented tools. Our work is to replace that friction with software that is dependable, clear, and built to scale as an organization grows.",
};

/* ---------------------------- Philosophy -------------------------------- */
export const philosophy = {
  eyebrow: "Philosophy",
  title: "How we think about building software.",
  points: [
    {
      icon: ShieldCheck,
      title: "Security is not optional",
      description:
        "In healthcare, protecting data and access is a baseline requirement — designed in from the start, never added later.",
    },
    {
      icon: Gauge,
      title: "Clarity over cleverness",
      description:
        "Maintainable, readable code and simple interfaces outlast clever shortcuts. Software should be easy to operate and to extend.",
    },
    {
      icon: Compass,
      title: "Built around the workflow",
      description:
        "The best system fits how people already work. We start from the real operational process, then shape the software to it.",
    },
  ],
};

/* -------------------------- Agency journey ------------------------------ *
 * NOTE: company history is intentionally NOT fabricated. These are clean
 * placeholder entries to be replaced with real milestones when provided.     */
export const journey = {
  eyebrow: "Our journey",
  title: "A focused path in healthcare software.",
  note: "Timeline entries below are placeholders — replace with real milestones.",
  items: [
    {
      period: "Focus",
      title: "Healthcare software specialization",
      description:
        "Concentrated on full-stack development for clinical and operational healthcare systems.",
    },
    {
      period: "Placeholder",
      title: "Milestone to be added",
      description:
        "A concise, verifiable milestone will go here (a launch, partnership, or scope).",
      placeholder: true,
    },
    {
      period: "Placeholder",
      title: "Milestone to be added",
      description:
        "Another verifiable milestone will go here once details are confirmed.",
      placeholder: true,
    },
    {
      period: "Now",
      title: "New projects & partnerships",
      description:
        "Available for healthcare software work with clinics, hospitals, startups, laboratories, pharmacies, and telemedicine companies.",
    },
  ] satisfies JourneyItem[],
};

/* ------------------------------ Core values ----------------------------- */
export const values = {
  eyebrow: "Core values",
  title: "The standards behind the work.",
  items: [
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Security, privacy, and reliability treated as fundamental, not features.",
    },
    {
      icon: Sparkles,
      title: "Craft",
      description:
        "Clean, maintainable code and thoughtful, accessible interfaces.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "Clear communication and dependable delivery throughout a project.",
    },
    {
      icon: Lightbulb,
      title: "Purpose",
      description:
        "Every build aimed at real operational improvement for healthcare teams.",
    },
  ] satisfies Value[],
};

/* --------------------------------- Team --------------------------------- *
 * The people behind Ace Labs. Bios are concise and role-focused — no invented
 * tenure, titles, or credentials beyond each person's stated role.            */
export const team = {
  eyebrow: "Team",
  title: "The people behind Ace Labs.",
  description:
    "A close-knit team that pairs engineering depth with clear communication — collaborating end to end to ship healthcare software that delivers real results.",
  members: [
    {
      name: "Faisal Askari",
      role: "Operations Manager & Full-Stack Developer",
      bio: "Leads delivery and engineering end to end, turning operational requirements into secure, production-ready systems while keeping every project aligned and on schedule.",
    },
    {
      name: "Muhammad Mustafa",
      role: "Sales Manager",
      bio: "Guides new partners from first conversation to a clear, realistic scope, making sure each engagement starts with shared goals and the right expectations.",
    },
    {
      name: "Hamid Raza",
      role: "AI Automation Engineer",
      bio: "Designs AI-driven automation and integrations that remove manual, repetitive work from clinical and operational workflows.",
    },
    {
      name: "Shumaila Parveen",
      role: "Head of Marketing & SEO",
      bio: "Shapes how Ace Labs communicates and gets discovered, pairing clear messaging with technical SEO that reaches the teams we build for.",
    },
  ] satisfies TeamMember[],
};

/* --------------------------- Skills overview ---------------------------- */
export const skillAreas = {
  eyebrow: "Skills overview",
  title: "Where we focus across the stack.",
  description:
    "Competency areas that describe the work — the specific tools are listed in the technology stack.",
  items: [
    {
      icon: Layers,
      title: "Full-stack web development",
      description:
        "End-to-end applications with Next.js, React, and Node.js — from interface to API.",
    },
    {
      icon: Boxes,
      title: "APIs & data modeling",
      description:
        "REST APIs, relational and document databases, and type-safe data access with Prisma.",
    },
    {
      icon: ShieldCheck,
      title: "Authentication & security",
      description:
        "Authentication flows and access control appropriate for sensitive healthcare data.",
    },
    {
      icon: Gauge,
      title: "Performance & delivery",
      description:
        "Responsive, accessible UIs and reliable deployment with Docker and Vercel.",
    },
  ] satisfies SkillArea[],
};

/* --------------------------------- FAQ ---------------------------------- */
export const faq = {
  eyebrow: "FAQ",
  title: "Frequently asked questions.",
  items: [
    {
      question: "What kind of software do you build?",
      answer:
        "Web-based healthcare systems — including clinic and hospital management systems, telemedicine platforms, pharmacy inventory, laboratory management, and patient portals.",
    },
    {
      question: "Who do you work with?",
      answer:
        "Clinics, hospitals, healthcare startups, laboratories, pharmacies, and telemedicine companies.",
    },
    {
      question: "Are you taking on new projects?",
      answer:
        "Yes. We're available for new healthcare software projects and long-term partnerships, and we work with teams across different locations.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Primarily Next.js, React, TypeScript, and Tailwind CSS on the frontend; Node.js and Express.js on the backend; PostgreSQL, MongoDB, and Prisma for data; plus REST APIs, authentication, Git, Docker, and Vercel.",
    },
    {
      question: "Where are you based?",
      answer:
        "Karachi, Pakistan — working with local and international clients remotely.",
    },
    {
      question: "How do we start a project?",
      answer:
        "Reach out through the contact section with a short description of your goals. From there we can discuss scope, approach, and next steps.",
    },
  ] satisfies Faq[],
};
