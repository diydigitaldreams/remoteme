# App Architecture

RemoteMe is organized around a simple pipeline.

```txt
Import -> Normalize -> Score -> Draft -> Track
```

## 1. Import Layer

Accepts user-provided material through the app interface.

Supported MVP inputs:

- Resume text paste
- LinkedIn profile text paste
- Indeed profile text paste
- Job description paste

Future inputs:

- Resume file upload
- Job URL import
- Browser extension capture

## 2. Normalization Layer

Transforms unstructured user-provided text into app structures:

- `UserProfile`
- `JobPost`

The user should be able to review and edit normalized data before scoring.

## 3. Scoring Layer

Compares `UserProfile` and `JobPost` and produces:

- `ScoreResult`

The scoring layer should be strict about truth, fit, location restrictions, and remote-work details.

## 4. Draft Layer

Uses the score result to create:

- Resume tailoring notes
- Cover letter draft
- Follow-up draft

Drafts must be reviewable and editable by the user.

## 5. Tracker Layer

Stores application records:

- `ApplicationRecord`

The tracker should support filtering by status, fit score, recommendation, and follow-up date.

## Suggested MVP Stack

- Frontend: React or Next.js
- Backend: lightweight API route or local service
- Storage: SQLite for local prototype, Postgres later
- Validation: JSON Schema
- AI layer: provider-agnostic prompt adapters

## Privacy Boundary

The repository contains structures and app code. User data enters at runtime through the app and should not be committed to GitHub.
