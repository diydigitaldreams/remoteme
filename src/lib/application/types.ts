export type ApplicationStatus =
  | "found"
  | "scored"
  | "draft_ready"
  | "ready_to_apply"
  | "applied"
  | "follow_up_due"
  | "followed_up"
  | "interviewing"
  | "offer"
  | "rejected"
  | "ghosted"
  | "skipped";

export type ApplicationTaskType =
  | "verify_remote_status"
  | "review_resume_notes"
  | "review_cover_letter"
  | "apply"
  | "follow_up"
  | "prepare_interview";

export type ApplicationTask = {
  id: string;
  type: ApplicationTaskType;
  title: string;
  completed: boolean;
  dueDate?: string;
};

export type ApplicationTicket = {
  id: string;
  company: string;
  role: string;
  jobUrl?: string;
  status: ApplicationStatus;
  fitScore?: number;
  recommendation?: string;
  tasks: ApplicationTask[];
  notes: string[];
  createdAt: string;
  updatedAt: string;
};
