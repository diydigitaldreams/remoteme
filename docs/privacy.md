# Privacy Model

RemoteMe is an app for working with job posts, resume/profile inputs, application drafts, and application tracking.

This repository should contain the app only.

## Repository Boundary

The repo may contain:

- Source code
- Prompts
- Schemas
- Documentation
- Empty folders
- Placeholder examples
- Fake sample data clearly marked as sample data

The repo should not contain:

- A real user's resume
- A real user's personal profile
- Real application history
- Real generated cover letters
- Real generated resume drafts
- Personal emails, phone numbers, addresses, or private work history
- API keys or environment secrets

## Runtime Data

In the finished app, user data should enter through the product interface, such as:

- Uploading a resume
- Pasting a resume/profile
- Importing a job post
- Pasting a job post URL or description
- Saving an application record inside the app's configured storage layer

## Development Rule

Use fake placeholder examples for development. Do not commit real job-search data.

## Claim Safety

RemoteMe may help reframe a user's materials, but it should not invent facts, skills, titles, certifications, metrics, or employment history.
