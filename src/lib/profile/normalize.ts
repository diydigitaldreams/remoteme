import type { CareerSource, NormalizedProfile, ProfileImportResult } from "./types";

const SKILL_HINTS = [
  "support",
  "operations",
  "sales",
  "customer success",
  "project management",
  "product",
  "security",
  "data",
  "analysis",
  "documentation",
  "python",
  "javascript",
  "typescript",
  "sql",
  "excel",
  "crm",
  "ticketing",
  "remote",
];

export function normalizeCareerSources(sources: CareerSource[]): ProfileImportResult {
  const combinedText = sources.map((source) => source.rawText).join("\n\n");
  const lower = combinedText.toLowerCase();

  const profile: NormalizedProfile = {
    summary: createSummary(combinedText),
    targetRoles: inferTargetRoles(combinedText),
    skills: SKILL_HINTS.filter((skill) => lower.includes(skill)),
    experienceHighlights: extractHighlights(combinedText),
    education: extractLinesWith(combinedText, ["degree", "university", "college", "certificate", "certification"]),
    certifications: extractLinesWith(combinedText, ["certified", "certification", "certificate"]),
    preferences: {
      remoteRegions: [],
      timezones: [],
      employmentTypes: [],
      avoid: [],
    },
    claimBoundaries: [
      "Do not invent employers, titles, dates, degrees, certifications, tools, or metrics.",
      "Only use claims supported by the uploaded or pasted source material.",
    ],
    reviewWarnings: [],
  };

  if (!combinedText.trim()) {
    profile.reviewWarnings.push("No career source text was provided.");
  }

  if (profile.skills.length === 0) {
    profile.reviewWarnings.push("No obvious skills were extracted. User review is required.");
  }

  if (profile.experienceHighlights.length === 0) {
    profile.reviewWarnings.push("No experience highlights were extracted. User review is required.");
  }

  return {
    profile,
    sourcesUsed: Array.from(new Set(sources.map((source) => source.sourceType))),
    needsReview: profile.reviewWarnings.length > 0,
  };
}

function createSummary(text: string): string {
  const firstUsefulLine = text
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length >= 40);

  return firstUsefulLine ?? "Review imported career material and add a concise professional summary.";
}

function inferTargetRoles(text: string): string[] {
  const lower = text.toLowerCase();
  const roles = [
    "Remote Support Specialist",
    "Operations Coordinator",
    "Customer Success Specialist",
    "Project Coordinator",
    "Technical Support Specialist",
    "Data Analyst",
    "Product Operations Specialist",
  ];

  return roles.filter((role) => {
    const normalized = role.toLowerCase().replace("remote ", "");
    return normalized.split(" ").some((part) => lower.includes(part));
  });
}

function extractHighlights(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-") || line.startsWith("•"))
    .slice(0, 12);
}

function extractLinesWith(text: string, terms: string[]): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => terms.some((term) => line.toLowerCase().includes(term)))
    .slice(0, 8);
}
