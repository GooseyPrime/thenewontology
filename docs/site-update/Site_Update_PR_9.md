# Site Update PR 9 — May 2026 Content Cycle (Post–May 17)

**Source:** [`Updating site content  - Claude.pdf`](../Updating%20site%20content%20%20-%20Claude.pdf) (Claude research report, 30 pages)  
**Extract:** [`source/updating-site-content-claude-extract.txt`](source/updating-site-content-claude-extract.txt)  
**Successor to:** `Site_Update_PR_0.txt` … `Site_Update_PRs_6and8.txt`  
**Status:** Active execution spec — authoritative for **this** content cycle (not Vite migration; see `Cursor Agent Guide for Site Style Update - May 2026.md`)

---

## Verification appendix (Tier 1 — web-checked)

| Claim | Tier | Primary sources | Notes |
|-------|------|-----------------|-------|
| NSA TOP SECRET UMBRA UAP release (May 18–20, 2026) | Established fact | [Disclosure Foundation](https://disclosure.org/news/nsa-top-secret-umbra-uap-foia-release), [ProtoThema May 21](https://en.protothema.gr/2026/05/21/new-nsa-documents-mig-fighter-jets-chased-ufos-during-the-cold-war-docs/) | 300+ pages; FOIA appeal; Hunt Willis legal lead |
| PURSUE Release 01 (May 8, 2026) | Established fact | [war.gov/UFO](https://www.war.gov/UFO), [Disclosure Archives](https://disclosurearchives.com/events/pursue-release-01-may-2026) | Already on site; do not duplicate prose |
| Connecticut HB 5422 | Established fact | [CT Mirror Mar 12, 2026](https://ctmirror.org/2026/03/12/study-ufos-ct-legislature/), [Yankee Institute](https://www.yankeeinstitute.org/2026/03/12/connecticut-lawmakers-want-taxpayers-to-fund-a-ufo-study/) | UConn study lead; testimony from Gallaudet, Mellon, Gold, McConnell |
| Gallaudet HO-NHI quote (May 14–15, 2026) | Credible testimony | Verify exact broadcast transcript before quoting verbatim in production | Paraphrase with calibration if primary transcript unavailable |
| DefenseScoop “data alone is not disclosure” (May 14, 2026) | Established fact + testimony | DefenseScoop (cite URL when fetched) | Partially reflected in undated May 2026 timeline line |
| AARO caseload >2,000 (Feb 25, 2026 Hegseth) | Established fact | Verify Hegseth statement primary | Add timeline entry |
| Anthropic Opus 4.6 system card + Amodei NYT Feb 14, 2026 | Established fact | Anthropic system card; NYT Interesting Times podcast | Tier 2 also uses in Ch 5 |

---

## Skip / already done (repo audit)

| Item | Status | Notes |
|------|--------|-------|
| Glossary: PURSUE | **done** | `app/glossary/page.tsx` |
| Who's Who: tim-gallaudet | **done** | `figures-original.ts` — May 2026 HO-NHI / DF roles updated |
| Who's Who: hunt-willis | **done** | `figures-added.ts` |
| May2026Update on 11 chapters | **done** (prior P4/P5) | TNHO 1,2,4,5,9,10; TSM 1,2,4,7,9 |
| Landing page `app/page.tsx` | **frozen** | Never edit this cycle |
| Vol III inline May 17 blocks | **partial** | TBW has inline updates; Tier 4 adds `MayUpdateYouth` + May 21 content |

---

## Section index (full detail in extract splits)

| File | PDF section |
|------|-------------|
| [`source/section-3-chapters.txt`](source/section-3-chapters.txt) | Section 3 — Items 1–50 (chapter atomic changes) |
| [`source/section-4-aux.txt`](source/section-4-aux.txt) | Section 4 — Timeline 51–59, Who's Who 62–83, Glossary 84–98, About, Network, **G. Bibliography 104–124** |
| [`source/section-5-ops.txt`](source/section-5-ops.txt) | Section 5 — Priority tiers A–G, insertion rules, acceptance, out-of-scope, reasoning discipline |

---

## Section 5 — Operational contract (summary)

### A. Priority grid (5 tiers)

1. **Tier 1** — Headline currency through May 21, 2026 (timeline 51–59, Great Convergence postscript, TNHO Ch 2/4 append, hunt-willis, UMBRA + HO-NHI glossary, `May2026Update` `date` prop, timeline `evt-*` anchors). Target: single PR, ≤24h.
2. **Tier 2** — TNHO Ch 3,6,7,8 + append Ch 1,5,9,10 + TNHO bibliography 104–110. Target: ≤72h after Tier 1 merge.
3. **Tier 3** — TSM Ch 3,5,6,8,10–12 + append Ch 1,2,4,7,9 + TSM bib 117–121. Target: ≤7d after Tier 2.
4. **Tier 4** — `MayUpdateYouth.tsx` + TBW Ch 1–10 + reading guide + about + TBW bib 122–124. Target: ≤14d after Tier 3.
5. **Tier 5** — Remaining Who's Who, network edges, glossary remainder. Target: ≤21d after Tier 4.

### B. Insertion rules

- New `<May2026Update>` immediately before `<h2>Conclusion</h2>` (or before closing prose `</div>` if no Conclusion).
- Append to existing blocks as `<h4>` subsections; chronological order; **one block per chapter**.
- New blocks: `date="May 21, 2026"`; existing blocks keep May 17 label; append new subsections below existing content.
- Every new subsection: ≥1 internal `<Link>` (timeline, whos-who#, glossary, related chapter).
- Timeline anchors: `id={\`evt-${idx}\`}` on each `<li>`.

### C. Acceptance criteria (per PR)

1. `npm run build` passes  
2. Zero diff on `app/page.tsx`  
3. No fabricated citations  
4. Evidence tier preserved inline  
5. Cross-link density  
6. No duplication — cross-link canonical location  
7. Date attribution per B  
8. TypeScript strict  
9. Atomic commits (subsection or figure per commit when possible)  
10. Additive only (except calibration items 19, 24 in Section 3)

### D. Out of scope

Landing page, restyle, refactor prose, new deps (except `MayUpdateYouth.tsx`), newsletter/search/social, config files.

### E. Reasoning discipline

Operate from editorial posture (NHI/ZPE suppression real); integrate skeptical **methodological** objections without collapsing structural arguments; NHI ≠ extraterrestrial.

### G. Summary numbers

| Metric | Count |
|--------|------:|
| Total items | 124 |
| New `May2026Update` blocks | 13 |
| Append existing `May2026Update` | 12 |
| New Who's Who figures | 15 |
| Update existing figures | 6 |
| New glossary terms | 15 |
| New timeline entries | 11 |
| New bibliography citations | 21 |
| New components | 1 (`MayUpdateYouth`) |
| Component mods | 1 (`May2026Update` `date` prop) |

**Files never touch:** `app/page.tsx`, `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `package.json`

---

## Implementation log

| Tier | Branch | Review log | Status |
|------|--------|------------|--------|
| 0 workfiles | — | — | Complete |
| 1 | `feat/p9-tier-1-headline-may-2026` | `docs/review-logs/p9-tier-1-headline.md` | Complete |
| 2 | `feat/p9-tier-2-tnho` | `docs/review-logs/p9-tier-2-tnho.md` | Complete |
| 3 | `feat/p9-tier-3-tsm` | `docs/review-logs/p9-tier-3-tsm.md` | Complete |
| 4 | `feat/p9-tier-4-tbw` | `docs/review-logs/p9-tier-4-tbw.md` | Complete |
| 5 | `feat/p9-remaining-tier5-complete` | `docs/review-logs/p9-tier-5-network.md` | Complete on feature branch (PR pending) |
