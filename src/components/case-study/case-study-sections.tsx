import type { CaseStudyStep } from "@/data/solutions";
import {
  CaseStudySection,
  CaseStudyProse,
  CaseStudyList,
  CaseStudyCards,
} from "@/components/case-study/case-study-section";

/**
 * Content sections for the case-study template. Each is an independent,
 * reusable component built on the shared `CaseStudySection` wrapper and the
 * list/card/prose primitives. All render a placeholder when data is absent.
 */

export function CaseStudyOverview({ body }: { body?: string }) {
  return (
    <CaseStudySection id="overview" title="Overview">
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudyProblem({ body }: { body?: string }) {
  return (
    <CaseStudySection id="problem" title="Problem">
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudyUsers({ items }: { items?: string[] }) {
  return (
    <CaseStudySection id="users" title="Users">
      <CaseStudyList items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyRequirements({ items }: { items?: string[] }) {
  return (
    <CaseStudySection id="requirements" title="Requirements" bleed="muted">
      <CaseStudyList items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyGoals({ items }: { items?: string[] }) {
  return (
    <CaseStudySection id="goals" title="Goals">
      <CaseStudyList items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyResearch({ body }: { body?: string }) {
  return (
    <CaseStudySection id="research" title="Research">
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudyUserJourney({ items }: { items?: CaseStudyStep[] }) {
  return (
    <CaseStudySection id="user-journey" title="User Journey" bleed="muted">
      <CaseStudyCards items={items} numbered />
    </CaseStudySection>
  );
}

export function CaseStudyDesignDecisions({ items }: { items?: CaseStudyStep[] }) {
  return (
    <CaseStudySection id="design-decisions" title="Design Decisions">
      <CaseStudyCards items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyDatabaseDesign({ body }: { body?: string }) {
  return (
    <CaseStudySection id="database-design" title="Database Design" bleed="muted">
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudyApiArchitecture({ body }: { body?: string }) {
  return (
    <CaseStudySection id="api-architecture" title="API Architecture">
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudyFrontendArchitecture({ body }: { body?: string }) {
  return (
    <CaseStudySection
      id="frontend-architecture"
      title="Frontend Architecture"
      bleed="muted"
    >
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudyBackendArchitecture({ body }: { body?: string }) {
  return (
    <CaseStudySection id="backend-architecture" title="Backend Architecture">
      <CaseStudyProse body={body} />
    </CaseStudySection>
  );
}

export function CaseStudySecurity({ items }: { items?: string[] }) {
  return (
    <CaseStudySection
      id="security-considerations"
      title="Security Considerations"
      bleed="muted"
    >
      <CaseStudyList items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyChallenges({ items }: { items?: CaseStudyStep[] }) {
  return (
    <CaseStudySection id="challenges" title="Challenges">
      <CaseStudyCards items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyLessonsLearned({ items }: { items?: string[] }) {
  return (
    <CaseStudySection id="lessons-learned" title="Lessons Learned" bleed="muted">
      <CaseStudyList items={items} />
    </CaseStudySection>
  );
}

export function CaseStudyFutureImprovements({ items }: { items?: string[] }) {
  return (
    <CaseStudySection id="future-improvements" title="Future Improvements">
      <CaseStudyList items={items} />
    </CaseStudySection>
  );
}
