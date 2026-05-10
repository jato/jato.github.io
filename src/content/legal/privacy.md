---
title: 'Privacy Policy'
app: 'Jaunty Lobster'
lastUpdated: 2026-05-10
summary: 'Privacy Policy for the Jaunty Lobster app.'
---

Jaunty Lobster is a personal job-search assistant. It helps you build a profile from your résumé / a voice intro / a guided Q&A, scores public job postings against that profile, and drafts cover letters and tailored résumés that you review before sending.

This document describes what data the app collects, how it's used, and who sees it. Plain-English first; the legalese is at the end.

## Data the app collects

| Category | What | Why we have it | Where it lives |
|---|---|---|---|
| Account | Email address | Magic-link sign-in | Supabase Auth (Postgres) |
| Profile | Résumé text, voice transcript, Q&A answers, target job titles, work-auth, salary preferences | Powers job matching and draft generation | Supabase Postgres (`profiles` table), encrypted at rest |
| Job interactions | Which matches you saved / dismissed / applied to, your notes, draft cover letters and résumés you generate | Tracking your own job hunt | Supabase Postgres (`matches`, `drafts` tables) |
| Device | APNs device token (when push enabled) | Daily-match notifications | Supabase Postgres (`device_tokens`), Apple APNs servers |
| Operational | Token-usage and timing per AI call (no profile content) | Cost monitoring + debugging prompt regressions | Supabase Postgres (`llm_calls` table) |

We do **not** collect: contacts, location, photos, calendar, browsing history, advertising identifiers, or any analytics events.

## How your data is used

- **Job matching**: your profile is sent to Anthropic's Claude API to score job postings against it. The full request is the profile JSON + the public posting text. Anthropic's data-use policy applies; per their [API usage rules](https://www.anthropic.com/legal/aup), inputs sent via the API are not used for training.
- **Draft generation**: same channel — your profile + the posting → Claude → a cover-letter or résumé draft. Drafts are stored in your Supabase project and never leave it except when you tap **Share**.
- **Push notifications**: if you enable them, Apple Push Notification service receives an opaque device token from your phone. We use that token to send a daily summary of your top matches. Apple's [APNs privacy](https://www.apple.com/legal/privacy/data/en/apple-push-notifications/) applies.
- **Job-source fetching**: when ingesting jobs from Greenhouse, Lever, and (optionally) USAJobs, we call those public endpoints with a `User-Agent` identifying the app. We don't send your profile to them.
- **User-pasted job URLs**: when you paste a URL via the **+** button, the parsed job is added to a shared cache that other users of the app may also see in their daily matches. The URL itself, the extracted title/company/description, and the source-id are shared. Your profile is **not** shared.

## Who sees your data

- **You**: full access via the app and (if you ask) export.
- **The author of this app** (you, hosting Supabase): root access to the Supabase project as the owner.
- **Anthropic**: receives prompts that include your profile + job text during scoring and drafting. See their data policy.
- **Apple**: receives push tokens + push payload titles/bodies (which include the top-matched company name).
- **Job-source providers** (Greenhouse, Lever, USAJobs): receive only HTTP requests for their public job listings. They don't receive your profile.
- **No other third parties**. No analytics, no advertising, no profiling vendors, no email marketing.

## Retention

- Account, profile, matches, drafts, device tokens, and llm_call logs are retained as long as your account exists.
- Deleting your account removes all the above. (Manual step today: ask the author. A self-serve account-deletion flow is on the roadmap.)
- The shared `job_postings` cache retains pasted-URL parses indefinitely but only the public posting content, not anything tied to you.

## Children

This app is not intended for users under 16. Don't use it if you are.

## Changes

If we change what data is collected or how it's used, this page will be updated and (for material changes) you'll see a notice in the app.

## Contact

Questions: jamesbrown4@gmail.com.

## The legalese

This service is provided "as is" without warranty. By using it you authorize the data flows described above. We follow industry-standard practices for data security but make no specific representations beyond what's required by applicable law (in the US, that primarily means notification of any data breach affecting personal information).

If you're an EU/UK resident: you have the rights described in GDPR (access, rectification, erasure, portability, objection). Email the contact above and I'll handle the request manually within 30 days.

If you're a California resident: you have the rights described in CCPA. Same contact. Same 30-day response window. We do not sell your data.
