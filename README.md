# RemoteMe

RemoteMe is a lightweight tool for remote job seekers.

It helps users score remote jobs by fit, generate honest tailored application drafts, and track applications from first review to follow-up.

RemoteMe is not an auto-apply bot. It does not spam employers, fabricate experience, or generate fake resumes. It is designed to help users make better decisions, apply with stronger materials, and stay organized.

## What It Does

RemoteMe helps users:

- Score remote jobs by fit
- Identify remote-work and location risks
- Generate tailored resume notes
- Draft short, specific cover letters
- Track applications and follow-ups
- Avoid wasting time on low-fit roles

## Core Workflow

1. Add a job description to `jobs/raw/`
2. Score the job against a private local resume/profile
3. Review the recommendation
4. Generate tailored resume and cover letter drafts
5. Track the application in a local tracker
6. Follow up when appropriate

## Privacy Model

This repository contains the app, prompts, templates, and scripts only.

User resumes, personal profiles, proof points, generated drafts, and application trackers should stay local and private. The `.gitignore` file excludes `local_data/`, generated exports, PDFs, DOCX files, and environment files.

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

## Project Structure

```txt
remoteme/
├── README.md
├── .gitignore
├── docs/
│   ├── privacy.md
│   └── workflow.md
├── profile/
│   ├── master_resume.template.md
│   └── proof_points.template.md
├── prompts/
│   ├── score_job.md
│   ├── tailor_resume.md
│   ├── cover_letter.md
│   └── follow_up.md
├── tracker/
│   └── applications.template.csv
├── jobs/
│   ├── raw/
│   ├── scored/
│   └── drafts/
└── scripts/
    ├── init_local_data.py
    ├── score_job.py
    ├── add_to_tracker.py
    └── generate_package.py
```

## Philosophy

RemoteMe is built around one simple idea:

> Apply with focus.

A good remote job search is not about sending hundreds of applications. It is about finding the right roles, understanding your fit, tailoring your materials honestly, and following up like a professional.
