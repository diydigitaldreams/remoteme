export type CareerSourceType = "resume" | "linkedin" | "indeed" | "manual" | "other";

export type CareerSource = {
  id: string;
  sourceType: CareerSourceType;
  label: string;
  rawText: string;
  createdAt: string;
};

export type NormalizedProfile = {
  summary: string;
  targetRoles: string[];
  skills: string[];
  experienceHighlights: string[];
  education: string[];
  certifications: string[];
  preferences: {
    remoteRegions: string[];
    timezones: string[];
    minimumCompensation?: number;
    employmentTypes: string[];
    avoid: string[];
  };
  claimBoundaries: string[];
  reviewWarnings: string[];
};

export type ProfileImportResult = {
  profile: NormalizedProfile;
  sourcesUsed: CareerSourceType[];
  needsReview: boolean;
};
