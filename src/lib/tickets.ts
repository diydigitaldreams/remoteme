import type { DiscoveredJob } from "./job-sources";
import type { ScoreResult } from "./scoring";

export type TicketStatus =
  | "Found"
  | "Scored"
  | "Drafted"
  | "Applied"
  | "Followed Up"
  | "Interviewing"
  | "Offer"
  | "Rejected"
  | "Ghosted"
  | "Skip";

export type ApplicationTicket = {
  id: string;
  company: string;
  role: string;
  jobUrl?: string;
  status: TicketStatus;
  fitScore: number;
  recommendation: ScoreResult["recommendation"];
  remoteStatus: DiscoveredJob["remoteStatus"];
  location?: string;
  notes: string[];
  applyChecklist: string[];
  followUpDate?: string;
  createdAt: string;
  updatedAt: string;
};

export function createApplicationTicket(job: DiscoveredJob, score: ScoreResult): ApplicationTicket {
  const now = new Date().toISOString();

  return {
    id: `ticket-${job.id}`,
    company: job.company,
    role: job.role,
    jobUrl: job.url,
    status: score.recommendation === "Skip" ? "Skip" : "Scored",
    fitScore: score.fitScore,
    recommendation: score.recommendation,
    remoteStatus: job.remoteStatus,
    location: job.location,
    notes: [
      ...score.remoteLocationNotes,
      ...score.risks,
    ],
    applyChecklist: [
      "Review remote/location restrictions.",
      "Review draft resume notes for truthfulness.",
      "Review cover letter draft before sending.",
      "Apply manually through the official job post.",
      "Set follow-up date after applying.",
    ],
    followUpDate: undefined,
    createdAt: now,
    updatedAt: now,
  };
}
