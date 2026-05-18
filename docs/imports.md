# Import Design

RemoteMe supports importing career and job-search inputs through the app.

This document describes product behavior only. It does not include real user data.

## Career Material Imports

RemoteMe should support:

- Resume upload
- Resume text paste
- LinkedIn profile text or export
- Indeed profile text or export

## Career Material Normalization

Imported career material should be normalized into the app's `UserProfile` structure.

The normalized profile should separate:

- Summary
- Target roles
- Skills
- Experience highlights
- Education
- Certifications
- Preferences
- Claim boundaries

## LinkedIn / Indeed Notes

RemoteMe should not require scraping private accounts.

The preferred MVP path is user-directed import:

- User copies profile text into the app.
- User uploads an exported document if available.
- User reviews the normalized profile before scoring jobs.

## Job Imports

RemoteMe should support:

- Pasted job descriptions
- Manually entered company/role/URL
- Future URL import

## Remote Verification

Every job import should attempt to identify:

- Whether the role is truly remote
- Region restrictions
- Timezone restrictions
- Travel requirements
- Security clearance requirements
- Onsite or hybrid language hidden inside the post

## Safety Rule

RemoteMe should never submit anything automatically. The user reviews and approves every application material.
