# RemoteMe Workflow

RemoteMe supports a focused remote job application workflow.

## 1. Initialize Local Data

Run:

```bash
python scripts/init_local_data.py
```

This creates local private files under:

```txt
local_data/
```

## 2. Add Your Resume and Proof Points

Edit:

```txt
local_data/master_resume.md
local_data/proof_points.md
```

Use truthful source material only.

## 3. Save a Job Description

Place a job description in:

```txt
jobs/raw/
```

Example:

```txt
jobs/raw/example-company-support-specialist.md
```

## 4. Generate an Application Package

Run:

```bash
python scripts/generate_package.py jobs/raw/example-company-support-specialist.md --company "Example Company" --role "Support Specialist"
```

This creates a markdown package in:

```txt
jobs/drafts/
```

## 5. Score the Job

Use the scoring prompt and generated package with an AI assistant.

Review:

- Fit score
- Recommendation
- Remote/location risks
- Resume angle
- Cover letter angle
- Questions to verify before applying

## 6. Track the Application

Run:

```bash
python scripts/add_to_tracker.py --company "Example Company" --role "Support Specialist" --fit-score 82 --recommendation "Apply" --status "Scored"
```

The tracker lives locally at:

```txt
local_data/applications.csv
```

## 7. Apply With Focus

RemoteMe is not for mass applications. Apply where the fit is strong, the job is real, and the materials can be tailored honestly.
