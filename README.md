# RemoteMe

RemoteMe helps job seekers find remote roles worth applying to.

The app is designed to import a user's career material, discover remote jobs, score those jobs by fit, draft tailored application materials, and create application tickets for apply/follow-up work.

RemoteMe is not a manual paste-and-score toy. The current UI is only an early scaffold.

## Product Loop

```txt
Career Sources -> Job Discovery -> Fit Scoring -> Draft Materials -> Application Tickets -> Follow-up Reminders
```

## What RemoteMe Should Do

RemoteMe should help users:

- Import career material from resume text, LinkedIn, Indeed, or uploaded files
- Normalize that material into a structured profile the user can review
- Discover remote jobs from configured job sources
- Score discovered jobs by fit
- Flag remote-work, timezone, location, travel, and clearance restrictions
- Draft tailored resume notes and cover letters
- Create application tickets for roles worth pursuing
- Track apply status and follow-up dates

## What RemoteMe Should Not Do

RemoteMe should not:

- Auto-apply without user review
- Spam employers
- Invent experience, credentials, tools, metrics, or work history
- Store real user career data in this repository
- Treat manual job paste as the final product experience

## MVP Product Flow

1. User adds career sources:
   - Resume upload or paste
   - LinkedIn profile text/export
   - Indeed profile text/export

2. RemoteMe normalizes the user's career material into a structured profile.

3. RemoteMe finds remote jobs from configured sources.

4. RemoteMe scores each job by:
   - Role fit
   - Skills match
   - Experience match
   - Remote/location compatibility
   - Timezone restrictions
   - Compensation/seniority alignment
   - Red flags

5. RemoteMe drafts:
   - Resume-tailoring notes
   - Cover letter draft
   - Follow-up message draft

6. RemoteMe creates an application ticket with:
   - Company
   - Role
   - Job URL
   - Fit score
   - Recommendation
   - Draft materials
   - Apply/follow-up status
   - Notes

7. User reviews and applies manually.

## Data Boundary

This repository is for the app only.

It may contain source code, prompts, schemas, docs, and non-personal fixtures. It must not contain a real user's resume, profile, email, application history, generated cover letters, generated resume drafts, or private job-search data.

## Scoring System

RemoteMe uses a 100-point fit score:

- Core role match: 25
- Skills match: 20
- Experience level match: 15
- Remote/location compatibility: 15
- Domain interest: 10
- Compensation/seniority alignment: 5
- Application strength for this role: 5
- Red flags/risk adjustment: subtract up to 20

## Recommendation Labels

- 85-100: Strong Apply
- 70-84: Apply
- 55-69: Maybe
- 40-54: Low Priority
- 0-39: Skip

## Philosophy

RemoteMe is built around one simple idea:

> Apply with focus.

A good remote job search is not about sending hundreds of applications. It is about finding the right roles, understanding fit, tailoring materials honestly, and following up like a professional.
