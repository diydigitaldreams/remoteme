# RemoteMe

RemoteMe is a lightweight app concept for remote job seekers.

It scores remote jobs by fit, drafts tailored application materials, and tracks applications and follow-ups.

RemoteMe is not an auto-apply bot. It does not spam employers, fabricate experience, or generate fake resumes. The goal is focused applications, honest tailoring, and better job-search organization.

## Product Goals

RemoteMe helps users:

- Import or paste a remote job post
- Add a resume/profile through the app interface
- Score the role by fit
- Identify remote-work and location risks
- Draft tailored resume notes
- Draft a short cover letter
- Track application status and follow-ups
- Avoid wasting time on low-fit roles

## Core Workflow

1. User adds a job post.
2. User adds or selects a resume/profile inside the app.
3. RemoteMe scores the job against the supplied materials.
4. RemoteMe shows a recommendation and risk notes.
5. RemoteMe drafts resume-tailoring notes and a cover letter.
6. User reviews everything before applying.
7. RemoteMe tracks the application and follow-up date.

## Data Boundary

This repository is for the app only.

It should contain source code, prompts, schemas, docs, and sample placeholder data. It should not contain a real user's resume, personal profile, application history, or generated job-search documents.

## Scoring System

RemoteMe uses a 100-point fit score:

- Core role match: 25
- Skills match: 20
- Experience level match: 15
- Remote/location compatibility: 15
- Domain interest: 10
- Compensation/seniority alignment: 5
- Resume strength for this role: 5
- Red flags/risk adjustment: subtract up to 20

## Recommendation Labels

- 85-100: Strong Apply
- 70-84: Apply
- 55-69: Maybe
- 40-54: Low Priority
- 0-39: Skip

## Planned Project Structure

```txt
remoteme/
├── README.md
├── .gitignore
├── docs/
│   ├── privacy.md
│   └── workflow.md
├── prompts/
│   ├── score_job.md
│   ├── tailor_resume.md
│   ├── cover_letter.md
│   └── follow_up.md
├── schemas/
│   ├── application.schema.json
│   ├── job_post.schema.json
│   └── user_profile.schema.json
├── samples/
│   ├── job_post.example.md
│   └── user_profile.example.json
└── scripts/
    └── README.md
```

## Philosophy

RemoteMe is built around one simple idea:

> Apply with focus.

A good remote job search is not about sending hundreds of applications. It is about finding the right roles, understanding fit, tailoring materials honestly, and following up like a professional.
