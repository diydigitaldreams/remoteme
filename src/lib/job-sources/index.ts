import { configuredRemoteSource } from "./mock-remote";
import { manualJobSource } from "./manual";
import type { DiscoveredJob, JobSearchInput, JobSourceAdapter } from "./types";

const adapters: JobSourceAdapter[] = [configuredRemoteSource, manualJobSource];

export async function discoverJobs(input: JobSearchInput): Promise<DiscoveredJob[]> {
  const results = await Promise.all(adapters.map((adapter) => adapter.search(input)));
  const merged = results.flat();

  const filtered = merged.filter((job) => {
    if (input.remoteOnly && job.remoteStatus !== "remote") return false;

    if (input.locationPreference?.trim()) {
      const preferredLocation = input.locationPreference.toLowerCase();
      const jobLocation = (job.location ?? "").toLowerCase();

      if (jobLocation && !jobLocation.includes(preferredLocation)) return false;
    }

    return true;
  });

  return dedupeJobs(filtered);
}

function dedupeJobs(jobs: DiscoveredJob[]): DiscoveredJob[] {
  const seen = new Set<string>();

  return jobs.filter((job) => {
    const canonicalKey = `${job.source}:${job.url ?? ""}:${job.company.toLowerCase()}:${job.role.toLowerCase()}`;
    if (seen.has(canonicalKey)) return false;
    seen.add(canonicalKey);
    return true;
  });
}

export type { DiscoveredJob, JobSearchInput, JobSourceAdapter };
