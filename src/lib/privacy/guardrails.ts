const SENSITIVE_PATTERNS = [
  {
    label: "email address",
    pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
  },
  {
    label: "phone-like number",
    pattern: /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/,
  },
  {
    label: "possible street address",
    pattern: /\b\d{2,6}\s+[A-Za-z0-9.'-]+\s+(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Court|Ct)\b/i,
  },
];

export type PrivacyScanResult = {
  hasPotentialSensitiveData: boolean;
  warnings: string[];
};

export function scanForSensitiveData(text: string): PrivacyScanResult {
  const warnings = SENSITIVE_PATTERNS
    .filter(({ pattern }) => pattern.test(text))
    .map(({ label }) => `Potential ${label} detected. Do not commit real user data to the repository.`);

  return {
    hasPotentialSensitiveData: warnings.length > 0,
    warnings,
  };
}
