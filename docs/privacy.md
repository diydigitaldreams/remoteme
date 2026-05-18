# Privacy Model

RemoteMe is designed so the public repository contains only app code, prompts, templates, and documentation.

Private user data should remain local.

## Keep Out of Git

Do not commit:

- Real resumes
- Personal emails or phone numbers
- Home addresses
- Private work history
- Salary history
- Application trackers with real company/application data
- Generated cover letters
- Generated resume PDFs or DOCX files
- API keys or environment secrets

## Local Data Folder

RemoteMe uses this local-only folder pattern:

```txt
local_data/
├── master_resume.md
├── proof_points.md
└── applications.csv
```

The repository `.gitignore` excludes `local_data/`.

## Template Files

Public template files live in:

```txt
profile/
tracker/
```

These files are safe examples. Users should copy them into `local_data/` before using RemoteMe with real personal data.

## Claim Safety

RemoteMe should improve framing, not invent facts. Generated drafts must be reviewed before submission.
