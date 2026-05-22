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

## May 2026 content update cycle (PR9)

Authoritative spec: [`docs/site-update/Site_Update_PR_9.md`](docs/site-update/Site_Update_PR_9.md) (from `Updating site content  - Claude.pdf`). Cursor rules: [`.cursor/rules/site-content-updates.mdc`](.cursor/rules/site-content-updates.mdc).

### Non-negotiables

- **Never edit** `app/page.tsx` during this cycle.
- **Verify before cite:** omit unverifiable sources; label evidence tier inline.
- **Components:** `May2026Update` supports optional `date` prop (default `May 17, 2026`); Vol III uses `MayUpdateYouth`.
- **Insertion:** one update block per chapter; append subsections to existing blocks; place new blocks before `<h2>Conclusion</h2>`.
- **Build:** `npm run build` is the merge gate (not `npm run lint` — interactive ESLint setup blocks CI).
- **Tier order:** 1 (headline May 21) → review → 2 (TNHO) → 3 (TSM) → 4 (TBW + about/reading guide) → 5 (Who's Who/network/glossary remainder).

### PR cadence

| Tier | Focus |
|------|--------|
| 1 | Timeline 51–59, Great Convergence May 21 postscript, TNHO Ch 2/4 append, hunt-willis, UMBRA/HO-NHI glossary |
| 2 | TNHO Ch 3,6,7,8 + bibliography 104–110 |
| 3 | TSM remaining chapters + bibliography 117–121 |
| 4 | `MayUpdateYouth` + all TBW chapters + reading guide + about |
| 5 | Remaining figures, network edges, glossary |

Review logs: `docs/review-logs/p9-tier-*.md`
