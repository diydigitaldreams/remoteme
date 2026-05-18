import type { DiscoveredJob, JobSearchInput, JobSourceAdapter } from "./types";

export const manualJobSource: JobSourceAdapter = {
  name: "manual",
  async search(input: JobSearchInput): Promise<DiscoveredJob[]> {
    const now = new Date().toISOString();
    const query = input.query.trim();

    if (!query) return [];

    return [
      {
        id: `manual-${Date.now()}`,
        source: "manual",
        company: "Manual Import",
        role: "Imported Job Post",
        remoteStatus: query.toLowerCase().includes("remote") ? "remote" : "unclear",
        description: query,
        tags: extractTags(query),
        dateFound: now,
      },
    ];
  },
};

function extractTags(text: string): string[] {
  const terms = [
    "remote",
    "hybrid",
    "support",
    "operations",
    "customer success",
    "ai",
    "security",
    "developer",
    "product",
    "manager",
    "analyst",
  ];

  const lower = text.toLowerCase();
  return terms.filter((term) => lower.includes(term));
}
