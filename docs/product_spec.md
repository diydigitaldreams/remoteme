# RemoteMe Product Specification

RemoteMe helps users find better remote work opportunities by scoring jobs against user-provided career materials and tracking the application process.

## Core User Problem

Remote job searching is noisy. Users waste time on roles that are not truly remote, not location-compatible, not aligned with their experience, or not worth a tailored application.

RemoteMe helps users focus.

## Product Promise

RemoteMe lets a user:

1. Import career material from resume text, LinkedIn export/text, or Indeed profile text.
2. Import or paste remote job posts.
3. Score each job by fit.
4. Draft tailored resume notes and cover letters.
5. Track applications and follow-ups.

## Non-Goals

RemoteMe should not:

- Auto-apply without user review.
- Invent experience.
- Store real user data in this repository.
- Encourage spam applications.
- Claim a job is remote without checking location restrictions.

## MVP Flow

```txt
Career Input + Job Post -> Fit Score -> Draft Package -> Application Tracker
```

## Inputs

### Career Input

Accepted sources:

- Resume upload
- Resume text paste
- LinkedIn profile text/export
- Indeed profile text/export

### Job Input

Accepted sources:

- Job description paste
- Job post URL
- Saved job post text

## Outputs

### Fit Score

- Score from 0 to 100
- Recommendation label
- Key fit reasons
- Risks and gaps
- Remote/location notes
- Questions to verify before applying

### Draft Package

- Resume positioning notes
- Suggested truthful bullet rewrites
- Cover letter draft
- Optional follow-up draft

### Tracker Record

- Company
- Role
- URL
- Status
- Score
- Recommendation
- Dates
- Notes

## Data Principle

The app may process user career data at runtime, but this repository must only contain app code, schemas, prompts, documentation, and non-personal fixtures.
