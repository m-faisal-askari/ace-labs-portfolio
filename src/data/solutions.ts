import {
  Building2,
  FlaskConical,
  Pill,
  Stethoscope,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

/**
 * ============================================================================
 * HEALTHCARE SOLUTIONS — SINGLE SOURCE OF TRUTH
 * ============================================================================
 * Every healthcare project shown anywhere on the site (homepage section,
 * /solutions listing, and /solutions/[slug] detail pages) is derived from this
 * file. Add or edit a solution here and it propagates everywhere.
 *
 * Honesty: these describe the systems Ace Labs builds/specializes in — not
 * claimed completed client engagements. No invented clients, metrics, or
 * deployments. `github`/`liveDemo` are null until a real link exists; their
 * buttons only render when present.
 */

/** Category slugs used by the filter chips. Kept as a const union for safety. */
export const CATEGORIES = [
  "clinical-operations",
  "patient-care",
  "laboratory",
  "pharmacy",
  "telemedicine",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Human-readable label per category (used by filter chips + card badges). */
export const CATEGORY_LABELS: Record<Category, string> = {
  "clinical-operations": "Clinical Operations",
  "patient-care": "Patient Care",
  laboratory: "Laboratory",
  pharmacy: "Pharmacy",
  telemedicine: "Telemedicine",
};

/** A titled step / decision used by several case-study sections. */
export interface CaseStudyStep {
  title: string;
  description: string;
}

/** A titled media item (wireframe / gallery image). */
export interface CaseStudyMedia {
  title: string;
  image: string | null;
}

/** Structured content for a solution's case-study / detail view. */
export interface SolutionCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  keyFeatures: string[];
  /* Optional extended case-study sections. Rendered as placeholders when
   * absent, so existing records remain valid without changes. */
  users?: string[];
  requirements?: string[];
  goals?: string[];
  /** User-needs / workflow analysis that informed the design. */
  research?: string;
  userJourney?: CaseStudyStep[];
  wireframes?: CaseStudyMedia[];
  designDecisions?: CaseStudyStep[];
  databaseDesign?: string;
  apiArchitecture?: string;
  frontendArchitecture?: string;
  backendArchitecture?: string;
  security?: string[];
  challenges?: CaseStudyStep[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  gallery?: CaseStudyMedia[];
}

/** A single healthcare solution — the core record type. */
export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: Category;
  featured: boolean;
  technologies: string[];
  /** Path to a project cover image; null renders an on-brand placeholder. */
  image: string | null;
  /** Path to a wide lead image for the case-study hero; falls back to `image`. */
  heroImage: string | null;
  github: string | null;
  liveDemo: string | null;
  caseStudy: SolutionCaseStudy;
  icon: LucideIcon;
  /** Sort order (ascending) for listings. */
  order: number;
}

/** The data. Order controls default listing sequence. */
const solutions: Solution[] = [
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    shortDescription:
      "Appointments, patient records, and billing in one streamlined workflow for outpatient practices.",
    longDescription:
      "A management system for outpatient clinics that unifies scheduling, patient records, and billing so front-desk and clinical staff work from one consistent source of information.",
    category: "clinical-operations",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    image: "/solutions/clinic-management-system/cover.webp",
    heroImage: "/solutions/clinic-management-system/hero.webp",
    github: null,
    liveDemo: null,
    caseStudy: {
      overview:
        "A web application that gives small and mid-sized outpatient clinics a single operational surface for appointments, patient records, and billing. Front-desk staff, clinicians, and administrators work from one shared data model instead of stitching together spreadsheets, paper charts, and disconnected invoicing tools.",
      problem:
        "Independent clinics typically run scheduling, clinical notes, and invoicing in separate systems that never reconcile. The result is predictable: double-booked slots, patient details re-keyed three times, encounters that are billed late or not at all, and a front desk that spends its day on the phone chasing information. None of these tools share a source of truth, so every hand-off is a chance to lose data.",
      approach:
        "A role-based application built on a type-safe stack, where scheduling, records, and billing all reference the same patient and encounter entities. An appointment, the clinical note attached to it, and the invoice it generates are three views of one record, so data entered once stays consistent from the booking screen through to the ledger.",
      keyFeatures: [
        "Appointment scheduling with real-time conflict detection",
        "Structured, versioned patient records",
        "Encounter-driven billing and invoice generation",
        "Role-based access for reception, clinicians, and admins",
      ],
      users: [
        "Receptionists managing the daily schedule and check-in",
        "Physicians reviewing history and recording encounters",
        "Billing staff generating and reconciling invoices",
        "Clinic administrators overseeing staff and reporting",
      ],
      goals: [
        "Establish one source of truth for appointments, records, and billing",
        "Eliminate duplicate data entry across the front and back office",
        "Make each patient's history available at the point of care",
        "Keep encounters and their invoices reconciled automatically",
      ],
      requirements: [
        "Calendar-based appointment scheduling with conflict detection",
        "Electronic patient records with encounter history",
        "Invoice generation tied to completed encounters",
        "Role-based permissions per staff function",
        "Searchable patient directory",
        "Daily schedule and revenue reporting",
      ],
      research:
        "The design began from a workflow analysis of a typical outpatient front desk, where the highest-friction moments are check-in, locating a returning patient's history, and closing out an encounter for billing. Mapping these tasks showed that most delays came from context-switching between tools rather than from any single slow step, which is why the data model was kept unified rather than optimizing each screen in isolation.",
      userJourney: [
        {
          title: "Authenticate",
          description:
            "A staff member signs in and lands on a role-specific dashboard: reception sees the day's schedule, clinicians see their patient queue.",
        },
        {
          title: "Locate or register",
          description:
            "Reception searches the patient directory or registers a new patient, capturing demographics and contact details once.",
        },
        {
          title: "Book or check in",
          description:
            "An open slot is selected; conflict detection prevents overlaps. Existing appointments move to a checked-in state on arrival.",
        },
        {
          title: "Record the encounter",
          description:
            "The clinician opens the appointment, reviews prior history, and documents the visit against the same patient record.",
        },
        {
          title: "Generate the invoice",
          description:
            "Completing the encounter produces a draft invoice pre-filled from the visit, which billing reviews and finalizes.",
        },
      ],
      designDecisions: [
        {
          title: "Calendar as the primary surface",
          description:
            "Reception lives in the schedule all day, so the calendar (not a menu) is the home screen, with check-in and booking reachable in a single click.",
        },
        {
          title: "Encounter-centric records",
          description:
            "Patient history is modeled as a timeline of encounters rather than free-form notes, keeping records structured and billable events traceable.",
        },
        {
          title: "Progressive disclosure",
          description:
            "Dense clinical and billing detail is hidden behind expandable panels so routine tasks stay uncluttered while full context remains one click away.",
        },
      ],
      databaseDesign:
        "The relational model centers on Patient, Appointment, Encounter, Invoice, and User (staff) entities. A Patient has many Appointments; each Appointment belongs to a Provider (User) and, once seen, is linked one-to-one with an Encounter that stores the clinical note. An Encounter produces one Invoice, which has many InvoiceLine items. Roles and permissions are normalized into Role and Permission tables referenced by User, so access rules are data-driven rather than hard-coded.",
      apiArchitecture:
        "A REST API organized around resource collections: /api/patients, /api/appointments, /api/encounters, and /api/invoices, each supporting standard CRUD with filtering and pagination. Nested reads such as /api/patients/:id/appointments expose relationships without over-fetching. Authentication uses JWT access tokens with short lifetimes and refresh tokens; every route passes through role-checking middleware that authorizes the action against the caller's permissions before the handler runs.",
      frontendArchitecture:
        "A Next.js App Router frontend using server components for data-heavy views (patient lists, schedules) and client components for interactive surfaces like the calendar and forms. Shared primitives (buttons, cards, tables, dialogs) come from a common design-system layer, and feature areas (scheduling, records, billing) are organized as self-contained route segments. Data fetching is colocated with the server components that need it, keeping client bundles small.",
      backendArchitecture:
        "A Node.js and Express.js service layered into routes, controllers, and services, with data access isolated behind a repository layer over PostgreSQL (via Prisma). Business rules (conflict detection, invoice generation) live in the service layer so they are reusable and independently testable. Request validation and error handling are applied as middleware, giving every endpoint consistent input checking and error shapes.",
      security: [
        "JWT-based authentication with short-lived access and refresh tokens",
        "Role-based authorization enforced in middleware on every route",
        "Server-side input validation and schema checks on all writes",
        "Password hashing with bcrypt and per-user salts",
        "Parameterized queries via the ORM to prevent SQL injection",
        "HTTPS-only transport with secure, HTTP-only session cookies",
      ],
      challenges: [
        {
          title: "Preventing scheduling conflicts",
          description:
            "Detecting overlaps across providers, rooms, and appointment durations required careful transaction handling so two concurrent bookings could not claim the same slot.",
        },
        {
          title: "Keeping billing in sync",
          description:
            "Ensuring an invoice always reflected the encounter it came from meant modeling the two as tightly coupled while still allowing billing corrections without rewriting clinical data.",
        },
        {
          title: "Granular access control",
          description:
            "Different staff need different slices of the same record; expressing that as data-driven roles rather than scattered conditionals took deliberate schema design.",
        },
      ],
      lessonsLearned: [
        "Modeling a unified domain up front avoids costly reconciliation logic later",
        "Role-based access is far cleaner when permissions are data, not code",
        "Transactional integrity matters most at the points where workflows converge",
        "Structured records pay off the moment reporting and billing are added",
      ],
      futureImprovements: [
        "Configurable appointment types and provider availability rules",
        "Patient-facing self-booking that writes into the same schedule",
        "Insurance claim generation from finalized invoices",
        "Automated appointment reminders via email and SMS",
        "An analytics dashboard for utilization and revenue trends",
      ],
      wireframes: [
        { title: "Reception dashboard: daily schedule", image: "/solutions/clinic-management-system/wireframe-1.webp" },
        { title: "Patient record: encounter timeline", image: "/solutions/clinic-management-system/wireframe-2.webp" },
        { title: "Invoice builder", image: "/solutions/clinic-management-system/wireframe-3.webp" },
      ],
      gallery: [
        { title: "Appointment calendar view", image: "/solutions/clinic-management-system/gallery-1.webp" },
        { title: "Patient directory and search", image: "/solutions/clinic-management-system/gallery-2.webp" },
        { title: "Billing and invoice screen", image: "/solutions/clinic-management-system/gallery-3.webp" },
      ],
    },
    icon: Stethoscope,
    order: 1,
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    shortDescription:
      "Admissions, departments, staff, and records coordinated through a single, auditable system.",
    longDescription:
      "A platform for coordinating hospital operations (admissions, departments, staff, and records) with an emphasis on auditability and reliable data across teams.",
    category: "clinical-operations",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    image: "/solutions/hospital-management-system/cover.webp",
    heroImage: "/solutions/hospital-management-system/hero.webp",
    github: null,
    liveDemo: null,
    caseStudy: {
      overview:
        "A multi-department platform that coordinates hospital operations from admission through discharge. Wards, clinical staff, and administrators share a single patient identity and a common set of records, while each department retains a workspace tuned to its own workflow. Sensitive actions are captured in an audit trail so responsibility for every change is traceable.",
      problem:
        "Larger facilities span dozens of departments, each with its own staff, roles, and record-keeping habits. Without a shared system, a single patient accumulates fragments of information across admissions, wards, and clinics that never join up. Coordination breaks down at the seams: beds are double-allocated, transfers lose context, and there is no reliable audit of who changed what, when.",
      approach:
        "A modular architecture with clearly bounded department modules over a shared identity and access-control core. Each module owns its own workflow but reads and writes against one canonical patient record, and every state change on sensitive data is written to an append-only audit log.",
      keyFeatures: [
        "Admission, transfer, and discharge workflow",
        "Bed and ward capacity management",
        "Department and staff coordination on one record",
        "Append-only audit trail on sensitive actions",
      ],
      users: [
        "Admitting clerks managing intake and bed assignment",
        "Ward nurses and physicians coordinating inpatient care",
        "Department heads overseeing staff and capacity",
        "Hospital administrators reviewing operations and audit logs",
      ],
      goals: [
        "Maintain one canonical patient identity across every department",
        "Coordinate admissions, transfers, and discharges without lost context",
        "Give each department a workflow suited to its role",
        "Make every sensitive change auditable and attributable",
      ],
      requirements: [
        "Patient admission, transfer, and discharge management",
        "Bed and ward allocation with live availability",
        "Departmental modules sharing a common patient record",
        "Staff and role management across departments",
        "Audit logging on record changes",
        "Operational reporting on occupancy and throughput",
      ],
      research:
        "Workflow analysis focused on the transitions between departments (admission to ward, ward to ward, ward to discharge), since these hand-offs are where inpatient information is most often lost. The study confirmed that the unit of coordination is the patient's journey through the facility, not any single department's view, which drove the decision to make patient identity and the record shared while keeping the surrounding workflows modular.",
      userJourney: [
        {
          title: "Admit the patient",
          description:
            "An admitting clerk registers or looks up the patient, records the reason for admission, and assigns an available bed from live ward capacity.",
        },
        {
          title: "Assign to a ward",
          description:
            "The patient appears on the receiving ward's board with their shared record, giving nursing staff immediate context on arrival.",
        },
        {
          title: "Coordinate care",
          description:
            "Clinicians across departments read and update the same record; orders and notes accumulate on one timeline rather than in silos.",
        },
        {
          title: "Transfer if needed",
          description:
            "Moving a patient between wards releases the old bed, reserves the new one, and carries the full record forward without re-entry.",
        },
        {
          title: "Discharge and audit",
          description:
            "On discharge the bed is freed and the episode is closed; every change made during the stay remains in the audit log.",
        },
      ],
      designDecisions: [
        {
          title: "Modular department workspaces",
          description:
            "Rather than one generic screen, each department gets a focused workspace, reducing cognitive load while still writing to the shared record underneath.",
        },
        {
          title: "Bed board as a live surface",
          description:
            "Capacity is shown as an at-a-glance ward board so admitting and transfer decisions are made against real-time availability, not stale counts.",
        },
        {
          title: "Audit visible, not hidden",
          description:
            "Change history is surfaced within records so accountability is part of the workflow rather than a separate compliance tool.",
        },
      ],
      databaseDesign:
        "Core entities are Patient, Admission, Ward, Bed, Department, Staff (User), and AuditLog. A Patient has many Admissions; each Admission references a current Bed within a Ward, and Beds belong to Wards which belong to Departments. Staff are linked to Departments through role assignments. Clinical activity (Orders, Notes) attaches to an Admission rather than directly to the Patient, preserving the context of each episode. Every mutation on sensitive tables writes an AuditLog row capturing the actor, action, entity, and timestamp.",
      apiArchitecture:
        "A REST API partitioned by domain: /api/admissions, /api/wards, /api/beds, /api/departments, and /api/staff, with transfer and discharge modeled as explicit state-changing endpoints (e.g. POST /api/admissions/:id/transfer) rather than raw field updates. This keeps clinical state transitions validated and auditable. Authentication is token-based, and authorization is scoped both by role and by department so staff only reach the modules they belong to.",
      frontendArchitecture:
        "A Next.js frontend where each department module is a route segment composed from shared UI primitives, so a ward board, an admissions desk, and an admin console feel consistent while serving different tasks. Server components render record and capacity data; client components handle the interactive bed board and transfer flows. Cross-cutting concerns like the patient header and audit panel are shared components reused across modules.",
      backendArchitecture:
        "A Node.js and Express.js backend structured as domain services (admissions, capacity, staffing) over PostgreSQL. State transitions run inside database transactions so a transfer atomically frees one bed and reserves another. An audit-logging concern is applied as a service-layer wrapper, guaranteeing that sensitive writes and their log entries commit together.",
      security: [
        "Token-based authentication for all staff accounts",
        "Role- and department-scoped authorization",
        "Append-only audit logging of sensitive record changes",
        "Server-side validation of every state transition",
        "Password hashing with bcrypt",
        "HTTPS transport and hardened session handling",
      ],
      challenges: [
        {
          title: "Atomic bed transfers",
          description:
            "Moving a patient must free and reserve beds together; doing this safely under concurrent admissions required transactional guarantees to avoid capacity races.",
        },
        {
          title: "Balancing modularity and sharing",
          description:
            "Each department needed autonomy without fragmenting the patient record, resolved by isolating workflows while keeping identity and records canonical.",
        },
        {
          title: "Trustworthy audit trails",
          description:
            "Guaranteeing that no sensitive change could occur without a corresponding log entry meant coupling the audit write to the data write at the service layer.",
        },
      ],
      lessonsLearned: [
        "Modeling clinical state transitions explicitly makes them auditable and safe",
        "Shared identity with modular workflows scales better than one monolith screen",
        "Transactions are essential wherever shared capacity is allocated",
        "Auditability is a design property, not an afterthought",
      ],
      futureImprovements: [
        "Real-time ward dashboards via server-sent events or WebSockets",
        "Integration with laboratory and pharmacy modules over shared APIs",
        "Configurable clinical workflows per department",
        "Capacity forecasting from historical admission patterns",
        "Standards-based interoperability (HL7 / FHIR) for external systems",
      ],
      wireframes: [
        { title: "Admissions desk: intake and bed assignment", image: "/solutions/hospital-management-system/wireframe-1.webp" },
        { title: "Ward board: live capacity", image: "/solutions/hospital-management-system/wireframe-2.webp" },
        { title: "Patient record with audit panel", image: "/solutions/hospital-management-system/wireframe-3.webp" },
      ],
      gallery: [
        { title: "Department module overview", image: "/solutions/hospital-management-system/gallery-1.webp" },
        { title: "Bed and ward management", image: "/solutions/hospital-management-system/gallery-2.webp" },
        { title: "Audit trail view", image: "/solutions/hospital-management-system/gallery-3.webp" },
      ],
    },
    icon: Building2,
    order: 2,
  },
  {
    slug: "telemedicine-platform",
    title: "Telemedicine Platform",
    shortDescription:
      "Online consultations, scheduling, and secure messaging for remote care teams.",
    longDescription:
      "A telemedicine platform supporting online consultations, scheduling, and secure messaging, designed with privacy and accessibility at its core.",
    category: "telemedicine",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/solutions/telemedicine-platform/cover.webp",
    heroImage: "/solutions/telemedicine-platform/hero.webp",
    github: null,
    liveDemo: null,
    caseStudy: {
      overview:
        "A platform that connects patients and providers for remote care, bringing consultation scheduling, secure messaging, and visit history into one accessible interface. It is built mobile-first, since a large share of remote-care sessions begin on a phone, and it treats communication and record-keeping as parts of the same encounter rather than separate tools.",
      problem:
        "Remote care only works when scheduling, communication, and record-keeping stay coordinated and secure, yet these are often bolted together from generic video and messaging tools. Patients end up juggling links and apps, providers lose the thread of a conversation between visits, and sensitive exchanges happen in places never designed to hold health information. The friction discourages exactly the patients remote care is meant to reach.",
      approach:
        "A mobile-first, accessible interface over a secure messaging and scheduling core, where each consultation ties together its booking, its conversation, and its notes. Availability is modeled against the provider's own calendar so patients only ever see bookable time.",
      keyFeatures: [
        "Consultation scheduling against real provider availability",
        "Secure, threaded patient–provider messaging",
        "Accessible, mobile-first interface",
        "Per-encounter visit and session history",
      ],
      users: [
        "Patients booking and attending remote consultations",
        "Physicians running virtual visits and follow-ups",
        "Care coordinators managing provider availability",
        "Administrators overseeing accounts and access",
      ],
      goals: [
        "Reduce the friction of starting and attending a remote visit",
        "Keep scheduling, messaging, and notes tied to one encounter",
        "Meet accessibility standards so care reaches more patients",
        "Preserve a clear, secure history of every consultation",
      ],
      requirements: [
        "Provider availability and consultation booking",
        "Secure patient–provider messaging",
        "Visit and session history per patient",
        "Notifications for upcoming and requested consultations",
        "Accessible, responsive interface across devices",
        "Account management for patients and providers",
      ],
      research:
        "Analysis of the remote-care workflow highlighted two drop-off points: patients abandoning a booking when availability is unclear, and conversations losing continuity between sessions. Because many patients arrive on small screens and with a range of accessibility needs, the interface was designed mobile-first and to WCAG guidance from the outset, and messaging was modeled as a persistent thread per encounter so context survives between visits.",
      userJourney: [
        {
          title: "Sign in",
          description:
            "A patient authenticates and sees upcoming consultations and any unread messages on a single, uncluttered home screen.",
        },
        {
          title: "Find availability",
          description:
            "They browse a provider's bookable slots, drawn live from that provider's calendar so no unavailable time is ever shown.",
        },
        {
          title: "Book the consultation",
          description:
            "Selecting a slot reserves it and creates the encounter; both patient and provider receive a confirmation and reminders.",
        },
        {
          title: "Attend and message",
          description:
            "At the appointment the patient joins the visit and exchanges secure messages, all attached to that consultation's thread.",
        },
        {
          title: "Review history",
          description:
            "Afterwards the visit, its messages, and any shared notes remain available in the patient's history for follow-up.",
        },
      ],
      designDecisions: [
        {
          title: "Mobile-first, accessible by default",
          description:
            "Layouts, contrast, and touch targets were designed for small screens and assistive technology first, so the hardest case shapes the baseline.",
        },
        {
          title: "Availability as the source of truth",
          description:
            "Patients pick from slots derived directly from provider calendars, removing the back-and-forth of proposing and rejecting times.",
        },
        {
          title: "Conversation tied to encounter",
          description:
            "Messages live inside the consultation they belong to, so neither party has to reconstruct context from a generic inbox.",
        },
      ],
      databaseDesign:
        "A document model in MongoDB suits the flexible, evolving shape of consultations and message threads. Core collections are Users (with a patient/provider discriminator), Availability, Consultations, and Messages. A Consultation references a patient and a provider and embeds its scheduling details; Messages reference their parent Consultation so a thread is retrieved as a single query. Provider Availability is stored as bookable windows that the booking flow reads and marks as reserved, keeping slot state consistent.",
      apiArchitecture:
        "A REST API over resources such as /api/consultations, /api/availability, /api/messages, and /api/users, with booking exposed as an explicit action that reserves a slot atomically. Message retrieval is paginated per consultation thread. Authentication is JWT-based with refresh tokens; authorization ensures a patient can only read their own consultations and messages, and a provider only those they are party to.",
      frontendArchitecture:
        "A Next.js frontend composed of shared, accessible UI primitives, with route segments for booking, the consultation thread, and history. Client components drive real-time-feeling messaging and the booking calendar, while server components render history and availability. Responsive layout utilities and a consistent design-system layer keep the experience coherent from phone to desktop.",
      backendArchitecture:
        "A Node.js and Express.js backend over MongoDB, layered into routes, controllers, and services, with data access behind a repository layer. Booking and messaging logic live in services so slot reservation and thread creation are validated and reusable. Validation and authentication run as middleware, and consultation state changes are guarded to prevent double-booking under concurrency.",
      security: [
        "JWT authentication with refresh-token rotation",
        "Authorization scoping messages and visits to their participants",
        "Input validation and schema enforcement on every request",
        "Password hashing with bcrypt",
        "Encrypted transport over HTTPS for all traffic",
        "Protection against injection and cross-site scripting on inputs",
      ],
      challenges: [
        {
          title: "Preventing double-booking",
          description:
            "Two patients could target the same slot at once; reserving availability atomically without a relational lock required careful document-level update conditions.",
        },
        {
          title: "Accessibility on mobile",
          description:
            "Meeting contrast, focus, and touch-target guidance on small screens while keeping the interface calm demanded iteration on the component library.",
        },
        {
          title: "Coherent message threads",
          description:
            "Keeping a conversation attached to the right encounter, and fast to load, shaped how messages were referenced and paginated.",
        },
      ],
      lessonsLearned: [
        "A document model fits loosely-structured, evolving conversation data well",
        "Designing for accessibility first raises quality for every user",
        "Concurrency safety is needed even without a relational database",
        "Tying communication to encounters keeps remote care coherent",
      ],
      futureImprovements: [
        "Integrated video consultations with WebRTC",
        "End-to-end encryption for message threads",
        "Automated reminders and waitlist backfill for cancelled slots",
        "E-prescribing and post-visit document sharing",
        "Provider-side analytics on consultation volume and no-shows",
      ],
      wireframes: [
        { title: "Patient home: upcoming visits", image: "/solutions/telemedicine-platform/wireframe-1.webp" },
        { title: "Booking flow: provider availability", image: "/solutions/telemedicine-platform/wireframe-2.webp" },
        { title: "Consultation thread", image: "/solutions/telemedicine-platform/wireframe-3.webp" },
      ],
      gallery: [
        { title: "Mobile consultation view", image: "/solutions/telemedicine-platform/gallery-1.webp" },
        { title: "Secure messaging interface", image: "/solutions/telemedicine-platform/gallery-2.webp" },
        { title: "Visit history", image: "/solutions/telemedicine-platform/gallery-3.webp" },
      ],
    },
    icon: Video,
    order: 3,
  },
  {
    slug: "pharmacy-inventory-system",
    title: "Pharmacy Inventory System",
    shortDescription:
      "Stock, dispensing, and expiry tracking with alerts that help prevent shortages and waste.",
    longDescription:
      "An inventory system for pharmacies covering stock levels, dispensing, and expiry tracking, with alerting to reduce both shortages and waste.",
    category: "pharmacy",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    image: "/solutions/pharmacy-inventory-system/cover.webp",
    heroImage: "/solutions/pharmacy-inventory-system/hero.webp",
    github: null,
    liveDemo: null,
    caseStudy: {
      overview:
        "An inventory system that keeps a pharmacy's stock accurate in real time, tracking receipts, dispensing, and expiry across every product and batch. Automated thresholds surface low stock and approaching expiry before they become shortages or waste, and each dispensing event adjusts counts immediately so the recorded quantity matches the shelf.",
      problem:
        "Manual stock tracking drifts out of sync the moment a shelf and a spreadsheet disagree. The consequences carry real cost and safety weight: essential medicines run out unnoticed, over-ordered stock ties up capital, and expired products sit undetected until someone reaches for them. Batch-level detail (which lot expires when) is exactly what manual methods handle worst.",
      approach:
        "A batch-aware inventory model where every product is tracked by lot with its own expiry, and dispensing draws down specific batches. Configurable reorder points and expiry windows drive an alerting layer, turning stock management from periodic stocktakes into continuous, event-driven bookkeeping.",
      keyFeatures: [
        "Real-time, batch-level stock tracking",
        "Dispensing records that adjust counts on each transaction",
        "Configurable low-stock and expiry alerts",
        "Reporting on inventory movement and valuation",
      ],
      users: [
        "Pharmacists dispensing medication and reviewing stock",
        "Pharmacy technicians receiving and shelving deliveries",
        "Inventory managers setting reorder points and reviewing alerts",
        "Administrators overseeing reporting and suppliers",
      ],
      goals: [
        "Keep recorded stock continuously reconciled with physical stock",
        "Prevent shortages of essential medicines through timely alerts",
        "Reduce waste by flagging expiry at the batch level",
        "Provide a clear audit of stock movement over time",
      ],
      requirements: [
        "Product and batch catalog with expiry dates",
        "Goods-in receiving that increments batch quantities",
        "Dispensing that decrements the correct batch",
        "Configurable low-stock and expiry thresholds with alerts",
        "Stock adjustment and stocktake reconciliation",
        "Movement, valuation, and expiry reporting",
      ],
      research:
        "Workflow analysis of dispensing and restocking showed that inventory error accumulates at the transaction level (a dispense not recorded, a delivery logged in bulk without batch detail) rather than in periodic counts. It also confirmed that expiry risk is inherently per-batch, not per-product. These findings drove a model that records every stock movement as it happens and tracks quantity and expiry at the lot level.",
      userJourney: [
        {
          title: "Sign in",
          description:
            "A pharmacy staff member authenticates and sees a dashboard of low-stock and expiring items needing attention.",
        },
        {
          title: "Receive stock",
          description:
            "Incoming deliveries are recorded against products with batch numbers and expiry dates, incrementing lot-level quantities.",
        },
        {
          title: "Dispense",
          description:
            "When medication is dispensed, the system draws down the appropriate batch and updates the live stock count instantly.",
        },
        {
          title: "Act on alerts",
          description:
            "Items crossing a reorder point or nearing expiry appear as alerts, prompting reordering or removal before they cause harm.",
        },
        {
          title: "Review reports",
          description:
            "Managers review movement, valuation, and expiry reports to inform purchasing and identify slow-moving stock.",
        },
      ],
      designDecisions: [
        {
          title: "Batch as the unit of tracking",
          description:
            "Quantity and expiry are held per batch, not per product, because that is the only level at which expiry and recalls can be handled correctly.",
        },
        {
          title: "Alerts over dashboards",
          description:
            "Rather than expecting staff to scan reports, the system pushes actionable low-stock and expiry alerts so problems find the user.",
        },
        {
          title: "Event-driven counts",
          description:
            "Every receipt and dispense is an immutable movement record; current stock is derived from movements, keeping history and totals consistent.",
        },
      ],
      databaseDesign:
        "The relational model centers on Product, Batch, StockMovement, Supplier, and User. A Product has many Batches, each with its own quantity and expiry date; a Batch belongs to a Supplier via its receipt. Every receipt, dispense, and adjustment is recorded as a StockMovement referencing a Batch, so current quantity is the sum of movements and full history is preserved. Alert thresholds are stored per Product, letting reorder points and expiry windows be tuned individually.",
      apiArchitecture:
        "A REST API over /api/products, /api/batches, /api/movements, and /api/suppliers, where dispensing and receiving are modeled as movement-creating endpoints (POST /api/movements) rather than direct quantity edits, so stock can never change without an auditable record. Alert queries expose items below threshold or nearing expiry. Authentication is JWT-based, with role-based authorization distinguishing dispensing, receiving, and management permissions.",
      frontendArchitecture:
        "A Next.js frontend with route segments for catalog, receiving, dispensing, and reporting, composed from a shared component library (tables, forms, alert cards). Server components render inventory and report data; client components handle the dispensing and receiving forms with immediate validation. An alerts panel is a shared component surfaced across relevant screens.",
      backendArchitecture:
        "A Node.js and Express.js backend over PostgreSQL (via Prisma), organized into routes, controllers, and services. Stock calculations and threshold evaluation live in the service layer; movement creation runs in transactions so concurrent dispenses cannot corrupt counts. A scheduled job evaluates expiry and reorder thresholds to generate alerts, keeping that logic out of request handlers.",
      security: [
        "JWT authentication for all pharmacy accounts",
        "Role-based authorization for dispensing, receiving, and admin actions",
        "Server-side validation on all stock movements",
        "Password hashing with bcrypt",
        "Parameterized ORM queries preventing SQL injection",
        "HTTPS transport with secure session cookies",
      ],
      challenges: [
        {
          title: "Deriving accurate live counts",
          description:
            "Computing current stock from an append-only movement log required efficient aggregation so real-time counts stayed fast as history grew.",
        },
        {
          title: "Concurrent dispensing",
          description:
            "Two simultaneous dispenses against the same batch had to be serialized transactionally to prevent negative or inconsistent quantities.",
        },
        {
          title: "Meaningful, non-noisy alerts",
          description:
            "Tuning thresholds so alerts were timely without overwhelming staff took careful defaults and per-product configuration.",
        },
      ],
      lessonsLearned: [
        "Event-sourced movements give both accurate totals and a full audit trail",
        "Batch-level modeling is essential for expiry and recall handling",
        "Transactional writes protect shared quantities under concurrency",
        "Pushing alerts beats expecting users to monitor dashboards",
      ],
      futureImprovements: [
        "Barcode scanning for faster receiving and dispensing",
        "Automated purchase-order generation from reorder points",
        "Supplier integration for electronic ordering",
        "Demand forecasting from historical dispensing data",
        "Controlled-substance register and compliance reporting",
      ],
      wireframes: [
        { title: "Inventory dashboard: alerts", image: "/solutions/pharmacy-inventory-system/wireframe-1.webp" },
        { title: "Goods-in / receiving form", image: "/solutions/pharmacy-inventory-system/wireframe-2.webp" },
        { title: "Dispensing screen", image: "/solutions/pharmacy-inventory-system/wireframe-3.webp" },
      ],
      gallery: [
        { title: "Batch and expiry tracking", image: "/solutions/pharmacy-inventory-system/gallery-1.webp" },
        { title: "Low-stock alerts", image: "/solutions/pharmacy-inventory-system/gallery-2.webp" },
        { title: "Inventory movement report", image: "/solutions/pharmacy-inventory-system/gallery-3.webp" },
      ],
    },
    icon: Pill,
    order: 4,
  },
  {
    slug: "laboratory-management-system",
    title: "Laboratory Management System",
    shortDescription:
      "Test orders, specimen tracking, and result delivery from request through to report.",
    longDescription:
      "A laboratory management system covering the full path from test order and specimen tracking to result entry and report delivery.",
    category: "laboratory",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/solutions/laboratory-management-system/cover.webp",
    heroImage: "/solutions/laboratory-management-system/hero.webp",
    github: null,
    liveDemo: null,
    caseStudy: {
      overview:
        "A system that manages the laboratory workflow end to end, from test ordering and specimen collection through result entry, validation, and report delivery. Each specimen carries a unique identity from the moment it is collected, so its position in the pipeline is always known and results are bound to the correct patient and order.",
      problem:
        "A lab processes many orders and specimens at once, and manual tracking makes mix-ups, delays, and transcription errors almost inevitable. The most dangerous failure is a specimen or result attached to the wrong patient; the most common is simply not knowing where a sample is in the pipeline. Both stem from the same gap: no reliable, unbroken chain of identity from collection to report.",
      approach:
        "A workflow modeled on the real order-to-result path, with each specimen assigned a unique, trackable identity (accession) at collection. Status transitions are explicit and recorded, and results are entered against the accession and validated before any report is released.",
      keyFeatures: [
        "Test ordering with patient and test catalog linkage",
        "Specimen accessioning and status tracking",
        "Structured result entry with validation",
        "Report generation and delivery",
      ],
      users: [
        "Physicians ordering tests and receiving reports",
        "Phlebotomists and collection staff accessioning specimens",
        "Laboratory technicians processing samples and entering results",
        "Lab supervisors validating and releasing reports",
      ],
      goals: [
        "Preserve an unbroken chain of identity from collection to report",
        "Make every specimen's pipeline status visible at a glance",
        "Reduce transcription error through structured result entry",
        "Ensure results are validated before release",
      ],
      requirements: [
        "Test ordering against a configurable test catalog",
        "Specimen accessioning with unique identifiers",
        "Status tracking across the processing pipeline",
        "Structured result entry with reference ranges",
        "Supervisor validation before report release",
        "Report generation and delivery to ordering providers",
      ],
      research:
        "Analysis of the order-to-result pipeline identified specimen identity and result validation as the two points where errors are both most likely and most consequential. It also showed that technicians need to see pipeline status continuously, not on request. These insights drove accessioning at the point of collection, explicit recorded status transitions, and a mandatory validation step before results leave the lab.",
      userJourney: [
        {
          title: "Order a test",
          description:
            "A clinician selects tests from the catalog for a patient, creating an order that the lab can act on.",
        },
        {
          title: "Accession the specimen",
          description:
            "On collection, the specimen is assigned a unique accession identifier and linked to its order, entering the pipeline in a known state.",
        },
        {
          title: "Process and record",
          description:
            "Technicians advance the specimen through processing, updating its status, and enter results against the accession with reference ranges applied.",
        },
        {
          title: "Validate",
          description:
            "A supervisor reviews entered results, flags anomalies, and validates them; only validated results can be released.",
        },
        {
          title: "Deliver the report",
          description:
            "Validated results are compiled into a report and delivered to the ordering provider, closing the loop on the order.",
        },
      ],
      designDecisions: [
        {
          title: "Accession-centric identity",
          description:
            "Every specimen gets a unique identifier at collection that all subsequent steps reference, making misattribution structurally hard.",
        },
        {
          title: "Explicit pipeline states",
          description:
            "Specimen status is a defined state machine rather than a free-text field, so progress is unambiguous and transitions can be validated.",
        },
        {
          title: "Validation gate before release",
          description:
            "Results cannot reach a report without passing an explicit supervisor validation step, encoding lab safety practice into the workflow.",
        },
      ],
      databaseDesign:
        "Core entities are Patient, TestOrder, TestCatalog, Specimen, Result, and User. A TestOrder references a Patient and one or more catalog tests; each ordered test yields a Specimen with a unique accession identifier and a status. Results reference their Specimen and the specific test, and carry reference ranges and a validation state. A supervisor's validation is recorded on the Result with the validating User and timestamp, preserving accountability for released values.",
      apiArchitecture:
        "A REST API over /api/orders, /api/specimens, /api/results, and /api/catalog, where status changes and validation are explicit endpoints (e.g. POST /api/specimens/:id/status, POST /api/results/:id/validate) so clinical state is always transitioned deliberately. Report generation is exposed per order. Authentication is JWT-based; authorization separates ordering, result-entry, and validation permissions so only supervisors can release results.",
      frontendArchitecture:
        "A Next.js frontend with route segments for ordering, the specimen worklist, result entry, and validation, built from shared UI primitives. The worklist and status board are client components for responsive interaction; result entry uses structured forms with inline reference-range feedback. Server components render orders, catalog, and reports.",
      backendArchitecture:
        "A Node.js and Express.js backend over PostgreSQL, organized into routes, controllers, and services. The specimen state machine and validation rules live in the service layer so transitions are centrally enforced and testable. Result entry and validation run in transactions, and report generation reads only validated results, guaranteeing that unvalidated data never reaches a provider.",
      security: [
        "JWT authentication for all laboratory accounts",
        "Role-based authorization gating result entry and validation",
        "Server-side validation of results and state transitions",
        "Password hashing with bcrypt",
        "Parameterized ORM queries to prevent SQL injection",
        "HTTPS transport and secure session management",
      ],
      challenges: [
        {
          title: "Guaranteeing specimen identity",
          description:
            "Ensuring an accession, once assigned, unambiguously followed a specimen through every step required a strict identity model and careful UI reinforcement.",
        },
        {
          title: "Modeling the pipeline as a state machine",
          description:
            "Capturing the real lab workflow (including reruns and rejections) as valid, enforceable status transitions took iteration with the workflow analysis.",
        },
        {
          title: "Enforcing the validation gate",
          description:
            "Making it impossible for unvalidated results to appear in a report meant threading that rule through both the data model and the report query.",
        },
      ],
      lessonsLearned: [
        "Encoding a workflow as an explicit state machine prevents whole error classes",
        "Unique specimen identity is the backbone of laboratory correctness",
        "Validation gates belong in the data model, not just the UI",
        "Structured entry with reference ranges reduces transcription error",
      ],
      futureImprovements: [
        "Barcode-based specimen accessioning and tracking",
        "Analyzer integration for automated result capture",
        "Delta checks and automated flagging of abnormal results",
        "Standards-based result exchange (HL7 / FHIR) with EHRs",
        "Turnaround-time analytics across the pipeline",
      ],
      wireframes: [
        { title: "Test ordering screen", image: "/solutions/laboratory-management-system/wireframe-1.webp" },
        { title: "Specimen worklist: pipeline status", image: "/solutions/laboratory-management-system/wireframe-2.webp" },
        { title: "Result entry and validation", image: "/solutions/laboratory-management-system/wireframe-3.webp" },
      ],
      gallery: [
        { title: "Order-to-result pipeline", image: "/solutions/laboratory-management-system/gallery-1.webp" },
        { title: "Structured result entry", image: "/solutions/laboratory-management-system/gallery-2.webp" },
        { title: "Generated lab report", image: "/solutions/laboratory-management-system/gallery-3.webp" },
      ],
    },
    icon: FlaskConical,
    order: 5,
  },
  {
    slug: "patient-portal",
    title: "Patient Portal",
    shortDescription:
      "Self-service access to appointments, records, and results, mobile-first and accessible.",
    longDescription:
      "A patient-facing portal offering self-service access to appointments, records, and results, built mobile-first with accessibility as a priority.",
    category: "patient-care",
    featured: false,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/solutions/patient-portal/cover.webp",
    heroImage: "/solutions/patient-portal/hero.webp",
    github: null,
    liveDemo: null,
    caseStudy: {
      overview:
        "A patient-facing portal that gives people self-service access to their own appointments, records, and results through a clear, accessible interface. It is the patient's window onto the systems that hold their care information, designed so that the common questions (when is my appointment, what were my results, what do I owe) are answered without a phone call.",
      problem:
        "Patients frequently cannot see their own appointments, results, or records without contacting the practice, which generates avoidable phone traffic, delays answers, and leaves people feeling shut out of their own care. The information usually already exists in clinical systems; what is missing is a safe, patient-appropriate way to view it. Any solution also has to present sensitive data to non-technical users of every ability level.",
      approach:
        "A mobile-first, accessible interface built over a secure API that exposes only the data a patient is permitted to see. The portal is presentation-focused (it reads from the same clinical systems of record rather than duplicating them), with authentication and authorization treated as first-order design concerns.",
      keyFeatures: [
        "Appointment booking and history",
        "Access to personal records and results",
        "Secure authentication and account management",
        "Accessible, mobile-first design",
      ],
      users: [
        "Patients viewing appointments, records, and results",
        "Caregivers acting for patients where authorized",
        "Front-desk staff supporting portal enquiries",
        "Administrators managing portal accounts and access",
      ],
      goals: [
        "Give patients direct, self-service access to their information",
        "Reduce avoidable phone traffic to the practice",
        "Present sensitive data safely and understandably",
        "Meet accessibility standards for users of all abilities",
      ],
      requirements: [
        "Secure patient registration and authentication",
        "Appointment viewing and self-service booking",
        "Access to records and test results",
        "Clear presentation of results with context",
        "Notifications for appointments and new results",
        "Accessible, responsive interface across devices",
      ],
      research:
        "Analysis of the questions patients most often phone in about (appointment times, results, and balances) showed the portal's value lies in answering a small set of high-frequency needs exceptionally well rather than exposing everything. Because users span every age and ability and often arrive on a phone, the interface was designed mobile-first and to WCAG guidance, with particular care given to presenting clinical results in plain, contextualized language.",
      userJourney: [
        {
          title: "Register and verify",
          description:
            "A patient creates an account through a secure registration and verification flow that confirms their identity before any data is shown.",
        },
        {
          title: "Sign in",
          description:
            "On return, they authenticate and reach a dashboard summarizing upcoming appointments and any new results.",
        },
        {
          title: "View appointments",
          description:
            "They review upcoming and past appointments and, where enabled, book a new slot that writes back into the practice's schedule.",
        },
        {
          title: "Check records and results",
          description:
            "They open their records and results, presented with reference context so values are understandable without a clinician present.",
        },
        {
          title: "Stay informed",
          description:
            "Notifications alert them to new results or upcoming appointments, bringing them back only when there is something to see.",
        },
      ],
      designDecisions: [
        {
          title: "Focused on high-frequency needs",
          description:
            "The interface foregrounds appointments and results (the reasons patients actually log in) rather than exposing the full clinical record indiscriminately.",
        },
        {
          title: "Accessible, plain-language presentation",
          description:
            "Results are shown with context and readable formatting, and the whole UI meets contrast, focus, and touch-target guidance so it works for everyone.",
        },
        {
          title: "Read-mostly, write-carefully",
          description:
            "Most screens are read-only views of systems of record; the few write actions, like booking, are deliberately guarded and confirmed.",
        },
      ],
      databaseDesign:
        "The portal itself owns a lean data model (Account, PatientProfile, and Notification) while treating clinical data as belonging to the systems of record it reads through the API. An Account authenticates a user and links to exactly one PatientProfile, which holds portal-specific preferences and the identity binding used to authorize record access. Notifications reference an Account and the event that triggered them. Appointments, records, and results are represented as references resolved against the backing services rather than duplicated locally.",
      apiArchitecture:
        "The portal consumes a REST API exposing patient-scoped resources such as /api/me/appointments, /api/me/records, and /api/me/results, where the /me convention guarantees a patient can only ever address their own data. Authentication uses JWT access tokens with refresh rotation; every request is authorized against the authenticated patient's identity, and booking is a guarded POST that validates availability before writing back.",
      frontendArchitecture:
        "A Next.js and React frontend built entirely from reusable, accessible components (cards, lists, result panels, dialogs) with route segments for the dashboard, appointments, records, and results. Server components render the patient's data securely, keeping tokens off the client where possible, while client components handle interactive booking and notifications. TypeScript and a shared design system keep the interface consistent and maintainable.",
      backendArchitecture:
        "The supporting backend is a Node.js and Express.js API over PostgreSQL that authenticates patients, stores portal-specific data, and mediates access to clinical systems of record. It is layered into routes, controllers, and services, with an authorization layer that resolves the authenticated patient and scopes every downstream read to their identity, so the portal can present clinical data without ever broadening a patient's reach beyond their own record.",
      security: [
        "Secure registration with identity verification before data access",
        "JWT authentication with refresh-token rotation",
        "Strict per-patient authorization on every resource",
        "Password hashing with bcrypt",
        "Input validation and output encoding against XSS",
        "HTTPS-only transport with secure, HTTP-only cookies",
      ],
      challenges: [
        {
          title: "Scoping access to a single patient",
          description:
            "Guaranteeing that no request could ever reach another patient's data required an authorization model where identity, not the request, decided scope.",
        },
        {
          title: "Presenting clinical data safely",
          description:
            "Showing results to non-clinical users in a way that was accurate yet understandable, without alarming or misleading, took careful content and UI design.",
        },
        {
          title: "Accessibility across every user",
          description:
            "Serving patients of all ages and abilities meant holding the interface to strict accessibility standards throughout, not just on key screens.",
        },
      ],
      lessonsLearned: [
        "Identity-scoped authorization is the core safety property of a patient portal",
        "A portal adds most value by reading systems of record, not duplicating them",
        "Accessible, plain-language presentation is essential for patient trust",
        "Serving non-technical users raises the bar for clarity and error handling",
      ],
      futureImprovements: [
        "Secure messaging between patients and their care team",
        "Multi-factor authentication for account protection",
        "Caregiver and dependent access with delegated permissions",
        "Online bill payment and statement viewing",
        "Standards-based record access (FHIR) across providers",
      ],
      wireframes: [
        { title: "Patient dashboard", image: "/solutions/patient-portal/wireframe-1.webp" },
        { title: "Appointments: view and book", image: "/solutions/patient-portal/wireframe-2.webp" },
        { title: "Results with reference context", image: "/solutions/patient-portal/wireframe-3.webp" },
      ],
      gallery: [
        { title: "Mobile portal dashboard", image: "/solutions/patient-portal/gallery-1.webp" },
        { title: "Records and results view", image: "/solutions/patient-portal/gallery-2.webp" },
        { title: "Notifications", image: "/solutions/patient-portal/gallery-3.webp" },
      ],
    },
    icon: Users,
    order: 6,
  },
];

/* ------------------------------- Selectors ------------------------------ */

/** All solutions, sorted by `order` ascending. */
export function getAllSolutions(): Solution[] {
  return [...solutions].sort((a, b) => a.order - b.order);
}

/** The single featured solution (first by order if several are flagged). */
export function getFeaturedSolution(): Solution | undefined {
  return getAllSolutions().find((s) => s.featured);
}

/** Look up one solution by slug (for detail pages). */
export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

/** Categories that actually have at least one solution, in canonical order. */
export function getUsedCategories(): Category[] {
  const present = new Set(solutions.map((s) => s.category));
  return CATEGORIES.filter((c) => present.has(c));
}

/** Filter helper. Pass "all" (or omit) to get everything. */
export function getSolutionsByCategory(category: Category | "all"): Solution[] {
  const all = getAllSolutions();
  return category === "all" ? all : all.filter((s) => s.category === category);
}
