import type { DiscoveredJob, JobSearchInput, JobSourceAdapter } from "./types";

export const configuredRemoteSource: JobSourceAdapter = {
  name: "configured_remote_source",
  async search(input: JobSearchInput): Promise<DiscoveredJob[]> {
    const query = input.query.trim();
    if (!query) return [];

    // Placeholder adapter. Replace with a real source integration later.
    // Keep fixtures non-personal and non-user-specific.
    return [
      {
        id: `configured-${Date.now()}-1`,
        source: "configured_remote_source",
        company: "Example Remote Company",
        role: `${titleCase(query)} Specialist`,
        url: "https://example.com/careers/example-role",
        location: "Remote - region restrictions may apply",
        remoteStatus: "remote",
        description:
          "This placeholder job represents a remote role discovered from a configured source. Replace this adapter with a real job source integration.",
        tags: ["remote", query.toLowerCase()],
        dateFound: new Date().toISOString(),
      },
    ];
  },
};

function titleCase(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
