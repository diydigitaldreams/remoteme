import type { DiscoveredJob } from "../job-sources";
import type { ScoreResult } from "../scoring";
import type { ApplicationTicket } from "./types";

export function createApplicationTicket(job: DiscoveredJob, score: ScoreResult): ApplicationTicket {
  const now = new Date().toISOString();

  return {
    id: `ticket-${job.id}`,
    company: job.company,
    role: job.role,
    jobUrl: job.url,
    status: score.recommendation === "Skip" ? "skipped" : "scored",
    fitScore: score.fitScore,
    recommendation: score.recommendation,
    tasks: [
      {
        id: `task-${job.id}-remote`,
        type: "verify_remote_status",
        title: "Verify remote, timezone, travel, and location restrictions.",
        completed: false,
      },
      {
        id: `task-${job.id}-resume`,
        type: "review_resume_notes",
        title: "Review tailored resume notes for accuracy.",
        completed: false,
      },
      {
        id: `task-${job.id}-cover-letter`,
        type: "review_cover_letter",
        title: "Review cover letter draft before sending.",
        completed: false,
      },
      {
        id: `task-${job.id}-apply`,
        type: "apply",
        title: "Apply manually through the official job post.",
        completed: false,
      },
      {
        id: `task-${job.id}-follow-up`,
        type: "follow_up",
        title: "Follow up if there is no response after the chosen follow-up window.",
        completed: false,
      },
    ],
    notes: [...score.remoteLocationNotes, ...score.risks],
    createdAt: now,
    updatedAt: now,
  };
}
