export type Recommendation = "Strong Apply" | "Apply" | "Maybe" | "Low Priority" | "Skip";

export type ScoreResult = {
  fitScore: number;
  recommendation: Recommendation;
  whyThisFits: string[];
  risks: string[];
  remoteLocationNotes: string[];
  resumeAngle: string;
  coverLetterAngle: string;
  questionsToVerify: string[];
};

const REMOTE_TERMS = ["remote", "work from home", "distributed", "anywhere"];
const HYBRID_TERMS = ["hybrid", "onsite", "on-site", "office", "relocation"];

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length >= 3);
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function scoreJob(careerInput: string, jobPost: string): ScoreResult {
  const careerTokens = unique(tokenize(careerInput));
  const jobTokens = unique(tokenize(jobPost));
  const careerSet = new Set(careerTokens);
  const matchedTerms = jobTokens.filter((term) => careerSet.has(term));

  const remoteHits = REMOTE_TERMS.filter((term) => jobPost.toLowerCase().includes(term));
  const hybridHits = HYBRID_TERMS.filter((term) => jobPost.toLowerCase().includes(term));

  const skillsMatch = clamp(Math.round((matchedTerms.length / Math.max(jobTokens.length, 1)) * 100), 0, 35);
  const remoteScore = remoteHits.length > 0 ? 20 : hybridHits.length > 0 ? 5 : 10;
  const contentScore = clamp(Math.round(careerInput.length / 250), 0, 15) + clamp(Math.round(jobPost.length / 250), 0, 15);
  const riskPenalty = hybridHits.length > 0 ? 10 : 0;
  const fitScore = clamp(skillsMatch + remoteScore + contentScore - riskPenalty + 20, 0, 100);

  let recommendation: Recommendation = "Skip";
  if (fitScore >= 85) recommendation = "Strong Apply";
  else if (fitScore >= 70) recommendation = "Apply";
  else if (fitScore >= 55) recommendation = "Maybe";
  else if (fitScore >= 40) recommendation = "Low Priority";

  return {
    fitScore,
    recommendation,
    whyThisFits: matchedTerms.slice(0, 8).map((term) => `The career input and job post both mention "${term}".`),
    risks: hybridHits.length > 0 ? [`The job post includes location-sensitive language: ${hybridHits.join(", ")}.`] : [],
    remoteLocationNotes:
      remoteHits.length > 0
        ? [`The job post includes remote-language: ${remoteHits.join(", ")}. Verify region and timezone restrictions before applying.`]
        : ["Remote status is not clearly proven from the text. Verify before applying."],
    resumeAngle:
      matchedTerms.length > 0
        ? `Position the application around the strongest overlapping terms: ${matchedTerms.slice(0, 6).join(", ")}.`
        : "Position the application around the user's strongest provided experience, but do not force a match that is not in the source text.",
    coverLetterAngle:
      "Write a short, direct cover letter that connects the user's provided background to the role requirements without adding unsupported claims.",
    questionsToVerify: [
      "Is the role truly remote for the user's location?",
      "Are there timezone, travel, clearance, or country restrictions?",
      "Which requirements are mandatory versus preferred?"
    ]
  };
}
