# P0 Review Log — `cursor/p0-housekeeping-083e`

| Reviewer | Recommendation | Action | Root cause | Countermeasure |
| -------- | -------------- | ------ | ---------- | -------------- |
| (pending) | — | — | — | — |

## Countermeasures (series-wide)

- Before merging sitemap PRs: `find app -name page.tsx \| wc -l` must equal sitemap entry count.
- Run `npm run build && npm run lint` on every PR before marking ready for review.
