import { configuredRemoteSource } from "./mock-remote";
import { manualJobSource } from "./manual";
import type { DiscoveredJob, JobSearchInput, JobSourceAdapter } from "./types";

const adapters: JobSourceAdapter[] = [configuredRemoteSource, manualJobSource];

export async function discoverJobs(input: JobSearchInput): Promise<DiscoveredJob[]> {
  const results = await Promise.all(adapters.map((adapter) => adapter.search(input)));
  return results.flat();
}

export type { DiscoveredJob, JobSearchInput, JobSourceAdapter };
