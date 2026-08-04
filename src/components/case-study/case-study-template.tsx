import type { Solution } from "@/data/solutions";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudyGallery } from "@/components/case-study/case-study-gallery";
import {
  CaseStudyTechStack,
  CaseStudyLinks,
} from "@/components/case-study/case-study-meta";
import {
  CaseStudyOverview,
  CaseStudyProblem,
  CaseStudyUsers,
  CaseStudyRequirements,
  CaseStudyGoals,
  CaseStudyResearch,
  CaseStudyUserJourney,
  CaseStudyDesignDecisions,
  CaseStudyDatabaseDesign,
  CaseStudyApiArchitecture,
  CaseStudyFrontendArchitecture,
  CaseStudyBackendArchitecture,
  CaseStudySecurity,
  CaseStudyChallenges,
  CaseStudyLessonsLearned,
  CaseStudyFutureImprovements,
} from "@/components/case-study/case-study-sections";

/**
 * CaseStudyTemplate — composes every case-study section for a given solution.
 * Sections read optional fields from `solution.caseStudy` and fall back to
 * placeholders, so the same template renders any healthcare project.
 */
export function CaseStudyTemplate({ solution }: { solution: Solution }) {
  const cs = solution.caseStudy;
  return (
    <>
      <CaseStudyHero solution={solution} />
      <CaseStudyOverview body={cs.overview} />
      <CaseStudyProblem body={cs.problem} />
      <CaseStudyUsers items={cs.users} />
      <CaseStudyRequirements items={cs.requirements} />
      <CaseStudyGoals items={cs.goals} />
      <CaseStudyResearch body={cs.research} />
      <CaseStudyUserJourney items={cs.userJourney} />
      <CaseStudyGallery
        id="wireframes"
        title="Wireframes"
        items={cs.wireframes}
        solution={solution}
        bleed="muted"
      />
      <CaseStudyDesignDecisions items={cs.designDecisions} />
      <CaseStudyDatabaseDesign body={cs.databaseDesign} />
      <CaseStudyApiArchitecture body={cs.apiArchitecture} />
      <CaseStudyFrontendArchitecture body={cs.frontendArchitecture} />
      <CaseStudyBackendArchitecture body={cs.backendArchitecture} />
      <CaseStudySecurity items={cs.security} />
      <CaseStudyChallenges items={cs.challenges} />
      <CaseStudyLessonsLearned items={cs.lessonsLearned} />
      <CaseStudyFutureImprovements items={cs.futureImprovements} />
      <CaseStudyTechStack solution={solution} />
      <CaseStudyGallery
        id="gallery"
        title="Gallery"
        items={cs.gallery}
        solution={solution}
        bleed="muted"
      />
      <CaseStudyLinks solution={solution} />
    </>
  );
}
