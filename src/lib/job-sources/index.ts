import { configuredRemoteSource } from "./mock-remote";
import { manualJobSource } from "./manual";
import type { DiscoveredJob, JobSearchInput, JobSourceAdapter } from "./types";

const adapters: JobSourceAdapter[] = [configuredRemoteSource, manualJobSource];

export async function discoverJobs(input: JobSearchInput): Promise<DiscoveredJob[]> {
  const preferredLocation = input.locationPreference?.trim().toLowerCase();
  const requiresRemote = input.remoteOnly === true;
  const results = await Promise.all(adapters.map((adapter) => adapter.search(input)));
  const merged = results.flat();

  const filtered = merged.filter((job) => {
    if (requiresRemote && job.remoteStatus !== "remote") return false;

    if (preferredLocation && !matchesLocationPreference(job, preferredLocation)) return false;

    return true;
  });

  return dedupeJobs(filtered);
}

function dedupeJobs(jobs: DiscoveredJob[]): DiscoveredJob[] {
  const seen = new Set<string>();

  return jobs.filter((job) => {
    const canonicalKey = [
      normalizeUrl(job.url),
      job.company.trim().toLowerCase(),
      job.role.trim().toLowerCase(),
      (job.location ?? "").trim().toLowerCase(),
      job.description.trim().slice(0, 120).toLowerCase(),
    ].join(":");

    if (seen.has(canonicalKey)) return false;
    seen.add(canonicalKey);
    return true;
  });
}

function matchesLocationPreference(job: DiscoveredJob, preferredLocation: string): boolean {
  const jobLocation = (job.location ?? "").toLowerCase();
  const jobDescription = job.description.toLowerCase();

  return jobLocation.includes(preferredLocation) || jobDescription.includes(preferredLocation);
}

function normalizeUrl(url: string | undefined): string {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.searchParams.delete("utm_source");
    parsed.searchParams.delete("utm_medium");
    parsed.searchParams.delete("utm_campaign");
    parsed.searchParams.delete("utm_term");
    parsed.searchParams.delete("utm_content");
    const normalizedPath = parsed.pathname.replace(/\/+$/, "");

    return `${parsed.origin.toLowerCase()}${normalizedPath}${parsed.search}`.toLowerCase();
  } catch {
    return url.trim().replace(/\/+$/, "").toLowerCase();
  }
}

export type { DiscoveredJob, JobSearchInput, JobSourceAdapter };
