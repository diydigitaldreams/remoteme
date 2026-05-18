export type RemoteStatus = "remote" | "hybrid" | "onsite" | "unclear";

export type JobSourceName = "manual" | "configured_remote_source";

export type DiscoveredJob = {
  id: string;
  source: JobSourceName;
  company: string;
  role: string;
  url?: string;
  location?: string;
  remoteStatus: RemoteStatus;
  description: string;
  tags: string[];
  dateFound: string;
};

export type JobSearchInput = {
  query: string;
  locationPreference?: string;
  remoteOnly?: boolean;
};

export type JobSourceAdapter = {
  name: JobSourceName;
  search(input: JobSearchInput): Promise<DiscoveredJob[]>;
};
