/**
 * Contact page content — hero copy, contact-method cards, and FAQ.
 * Links reuse `siteConfig.links` where available and fall back to clearly
 * marked placeholders. No fabricated details.
 */

export const contactHero = {
  badge: "Contact",
  eyebrow: "Get in touch",
  title: "Let's discuss your healthcare software project.",
  description:
    "Whether you're planning a new build or improving an existing system, we'd be glad to hear about it. Send a message and we'll get back to you.",
};

export const contactInfo = {
  availability: "Available for new projects & partnerships",
  location: "Karachi, Pakistan",
  /** Placeholder — replace with a real company profile file in /public when available. */
  profileUrl: "/company-profile.pdf",
};

export const contactFaq = {
  eyebrow: "FAQ",
  title: "Before you reach out.",
  items: [
    {
      question: "What kinds of projects do you take on?",
      answer:
        "Web-based healthcare software — clinic and hospital management, telemedicine, pharmacy inventory, laboratory management, and patient portals — for clinics, hospitals, startups, laboratories, pharmacies, and telemedicine teams.",
    },
    {
      question: "Are you available for new work?",
      answer:
        "Yes — we're available for new healthcare software projects and long-term partnerships.",
    },
    {
      question: "How soon will you respond?",
      answer:
        "We aim to reply to project inquiries within a couple of business days.",
    },
    {
      question: "Which technologies do you prefer?",
      answer:
        "Next.js, React, TypeScript, and Tailwind CSS on the frontend; Node.js and Express.js on the backend; PostgreSQL, MongoDB, and Prisma for data.",
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes. We work remotely with local and international clients, and adapt to your team's schedule and tools.",
    },
  ],
};
