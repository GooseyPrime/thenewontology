# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 15 content website with no backend, database, or external services.

### Services

| Service | Command | Notes |
|---------|---------|-------|
| Dev server | `npm run dev` | Runs on http://localhost:3000 |

### Key commands

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (port 3000)
- **Build:** `npm run build` (generates static pages)
- **Lint:** `npm run lint` — requires ESLint config setup (not yet configured in this repo; the command prompts interactively)

### Gotchas

- `npm run lint` is defined in `package.json` but no `.eslintrc` or `eslint.config.*` file exists. Running it triggers an interactive ESLint setup wizard which blocks in non-interactive environments.
- The site is entirely static (51 prerendered pages). There are no API routes, no database, no auth, and no environment variables required for local development.
- Optional env vars `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` are referenced in `app/layout.tsx` but gracefully default to empty strings.
