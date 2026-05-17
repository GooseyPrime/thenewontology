# Migration — Content from `thenewontology` (Next.js) into the New Sticklight-Style Vite Site, with Living Plasma Background Upgrade

**Branch:** `feat/migration-and-plasma-upgrade`
**Scope:** Migrate all chapter content, timeline, glossary, who's-who, bibliographies, foreword, and disclosure block from the current Next.js repo into the new Vite + React Router visual shell. Replace the existing `PlasmaBackground.tsx` with a living, evolving curl-noise plasma background that retains the warm orange/red/yellow palette of the prototype.

This is a content-migration PR, not a redesign. The new site's typography, navigation, color tokens, layout grid, and component library are **the design** — preserve them. The job is moving 32 chapters of finished prose into the existing shell and upgrading the background's behavioral quality.

---

## CONTEXT FOR THE AGENT

There are two repositories in play:

**Source repo (existing, content-rich):** A Next.js 15 + React 19 site at `https://thenewontology.life` and `github.com/GooseyPrime/thenewontology`. App Router. The migration source is the source repo's main branch after P0–P8 has merged. All content references in this prompt (the ~65 timeline entries, ~80 Who's Who figures with calibration notes, the Update — May 2026 blocks across Vols I/II/III, the Great Convergence postscript, the expanded glossary and bibliographies, the homepage disclosure block's appended sentence) will be present in source. Pull from main.

**Target repo (new, visually finished):** A Vite + React 19 + `react-router` (note: `react-router`, **not** `react-router-dom` — the import is `from 'react-router'`) + Tailwind v4 site styled with warm orange/red/yellow palette, organic plasma background, "Decode the signal." hero. The visual shell is finished. Page bodies are placeholders.

The target repo's voice is set by `theme.css` (warm tokens like `#ff4500`, `#ff8c00`, `#ffa500`, `#cd853f`, `#e8d5c4`, `#0a0505`) and by the existing `Navigation`, `PlasmaBackground`, `VolumeCard`, `StickLightButton`, `Marquee`, `Footer`, `Tesseract3D`, and `CursorGlow` components. **Do not change the visual design.** Migrate content into it.

The user has indicated:
- Color palette stays warm — oranges, reds, yellows. Darker fonts contrasting where appropriate.
- The plasma background must feel **living, self-guiding, and evolving** rather than statically pulsating.
- Vol III ("The Bigger World") needs to be reconciled — see Decision Point below.

---

## PART A — RECONCILE VOLUME III FRAMING (DECISION POINT — ASK USER IF UNCLEAR)

The new site treats Vol III as a sharply separate kids' zone (6 chapters, ages 8-14, cartoon drone mascot "Cosmo", `/discovery-kids` route, blue/cyan/pink palette break from the warm orange parent palette).

The source content treats Vol III as a 10-chapter youth-accessible companion in the same investigative lineage as Vols I and II — accessible language, no condescension, no cartoon mascot, same evidentiary discipline as the parent volumes, just written for sharp 13-year-old readers.

**Recommended resolution** (default if user does not override):

- Keep `/the-bigger-world` as Vol III's home, with all 10 source chapters migrated.
- Keep the warmer/lighter-blue accent treatment from the new site's Vol III page so it visually distinguishes from Vols I and II, but drop the "ages 8-14," the Cosmo mascot, and the cartoon-glyph framing.
- Keep `/discovery-kids` as a *separate* lighter on-ramp page that links into Vol III — a "start here if you're under 14 or new to the topics" front door. Reduce the kids-zone content from a parallel curriculum to a curated entry point. Vol III itself stays substantive.
- The `KidsBackground.tsx` (cosmic blue starfield) stays only on `/discovery-kids`, not on `/the-bigger-world`.

If the user disagrees, ask before proceeding. Do not silently delete the kids zone and do not silently shrink Vol III.

---

## PART B — UPGRADE THE PLASMA BACKGROUND

Replace `src/components/PlasmaBackground.tsx` with a new implementation. The existing one is a single displaced plane + 15 orbiting spheres; it pulses but does not evolve. The replacement implements a *living* energy field per the directional brief below.

### Visual brief

The user's reference brief: *"living, self-guiding, evolving energy plasma."* The new component must satisfy each adjective as a separable technical demand:

- **Living** — organic motion (not linear, not bouncing), plus visual memory (trails / accumulation).
- **Self-guiding** — particles follow internal field forces, not random walks and not deterministic paths.
- **Evolving** — the field itself transforms over time on a slower timescale than the particles move. A viewer returning after a minute should see a recognizably different field.
- **Energy plasma** — additive light that builds where flows converge, glows softly, fades where flows thin.

### Technical recipe (use Canvas 2D, not WebGL/Three.js — the new implementation should be lighter than the one it replaces)

Drop Three.js for this component. Replace the entire current shader-and-mesh implementation with a Canvas 2D particle system implementing the following layers in this order, each frame:

**Layer 1 — Persistence overlay (memory).** Instead of clearing the canvas, fill it with the background color at low alpha — around `rgba(10, 5, 5, 0.05)`. Each frame's particles fade by ~5% per frame, lingering for roughly 20 frames before vanishing. This produces the glow-trail quality. Tune alpha between `0.03` (longer trails, more soup) and `0.07` (crisper particles, less haze). Land near `0.05` for the hero, slightly higher (e.g. `0.07`) when used as a background behind chapter content so it doesn't compete with text.

**Layer 2 — Curl-noise flow field (self-guiding motion).** Build a 3D simplex noise sampler. For each particle position `(x, y)`, sample the curl of the noise field (rotational derivative) to get a velocity vector. The third dimension is `time * 0.0002` — a very slow z-axis evolution that transforms the entire flow pattern every 3–5 minutes. Curl noise is divergence-free so flows curve into eddies rather than draining off-screen. Use a noise scale around `0.0015` (particle positions divided by ~650).

The curl computation is: sample noise at `(x, y, t)` and at `(x+ε, y, t)` and `(x, y+ε, t)`; the curl is `(∂N/∂y, -∂N/∂x)` scaled to a useful magnitude. An ε of around `1.0` and a velocity multiplier of `0.6–0.9` work well.

Particle count: 240 on desktop, 100 on mobile (detect `window.innerWidth ≤ 768`).

**Layer 3 — Additive blending (energy quality).** Set `ctx.globalCompositeOperation = 'lighter'` when drawing the particles. Overlapping glow adds rather than blends — bright knots form where flows converge. Reset to `'source-over'` before drawing the persistence overlay each frame.

Each particle draws as a small radial gradient (radius ~6–10px) with the warm palette. Use HSL color picked from a range of `hue: 15°–45°` (red-orange through gold), `saturation: 85–100%`, `lightness: 50–65%`. Allow each particle to drift through that hue range over time driven by *another* slow noise sample — so the color of the field itself breathes, not just the brightness.

**Layer 4 — Sparse attractors (self-guiding character).** Maintain three to five invisible "attractor" point entities with their own internal logic. Each attractor drifts along a Lissajous-like path (independent x/y frequencies, periods 30–90 seconds). When a particle is within ~180px of an attractor, perturb its velocity toward the attractor by an inverse-square falloff (small magnitude, around `0.3` at the closest range). The attractors themselves do not render — only their effect on the flow is visible. The viewer perceives intentionality without seeing the source.

**Layer 5 — Occasional pulse waves (the "evolving" character).** Every 30–120 seconds (randomized interval), trigger a slow expanding ring from a random point. The ring strengthens local flow magnitude in a band expanding outward at ~80px/sec. The ring is also invisible — only the flow disturbance shows. Lasts ~6 seconds. Reads as the field having internal events.

**Layer 6 — Mouse interaction (subtle, attractive not repulsive).** The existing site already has a `CursorGlow` component for the cursor itself. The plasma should add a soft attractive influence: particles within 200px of the cursor get a gentle velocity bias toward it, magnitude tapering with distance. The current site repels — this new site should pull. The field is *curious about the reader.*

### Accessibility

- Respect `prefers-reduced-motion`. If set, render a single static radial gradient using the warm palette and skip all animation. The existing `theme.css` already has a reduced-motion media query that throttles animation duration — that's good for transitions but not enough for a persistent canvas animation; add an explicit check in the component.
- Pause `requestAnimationFrame` when `document.visibilityState !== 'visible'`. The existing source-repo `KinematicBackground.tsx` already does this — preserve the pattern.

### Props

```ts
interface PlasmaBackgroundProps {
  className?: string;
  intensity?: 'hero' | 'ambient';  // hero = lower trail alpha, more particles; ambient = higher trail alpha behind text
  className doesn't need to be removed — keep it.
}
```

`intensity` defaults to `'hero'`. Pages with body text behind the plasma (volume pages, essay page) pass `intensity='ambient'`.

### Performance budget

Target: 60fps on a 5-year-old laptop, 30fps on a mid-range mobile. ~240 particles × one noise sample (with three sub-samples for curl computation) per frame is ~720 noise calls per frame — trivial. The biggest cost will be the persistence overlay `fillRect`; that is one rect-fill per frame and is also trivial.

If frame-rate budgets get tight in practice (test on the user's HP Victus and Samsung S22 Ultra), reduce particle count first, raise persistence alpha second. Do not switch to WebGL for this — Canvas 2D is the correct surface.

### Naming / file hygiene

Replace the *file contents* of `src/components/PlasmaBackground.tsx`. Keep the export name `PlasmaBackground` so the existing imports (`Index.tsx`, `TheGreatConvergence.tsx`, `TheNextHumanOntology.tsx`, `TheSovereignMind.tsx`) keep working unchanged.

---
## PART B.5 — HOMEPAGE LAYOUT: ABOVE-THE-FOLD FOREWORD + DISCLOSURE

User constraint: the **hero text, the Important Notice, AND the Foreword** must all be visible without scrolling on a standard 1440×900 desktop viewport. The existing prototype layout fails this — the plasma section is too tall and the foreword falls below the fold.

### What stays

- The "Transmission Active" kicker, the "Decode the signal." headline (split-color treatment intact), the intro paragraph, both CTA buttons (Begin Reading, How to Navigate). All hero copy preserved verbatim.
- The "Important Notice" disclosure block and the "Foreword" block as written in the source repo's homepage. Verbatim — including the April 7, 2026 foreword date and the May 17, 2026 appended sentence on the disclosure block.

### What changes

Rework the homepage into a single above-the-fold composition. The plasma is a full-bleed background of the *entire* hero section, not a centered blob. Hero text and foreword/disclosure cards sit on top of it in a two-column grid on desktop, stacked on mobile.

Recommended layout (the agent may adjust spacing as needed to meet the no-scroll constraint at 1440×900, but the structural choices below should hold):

**Hero section** — single full-viewport-height section (`min-h-screen`), padded for the fixed Navigation at top. Contents are a CSS grid:

- Desktop (≥1024px): `grid grid-cols-12 gap-8` with the hero text spanning `col-span-7` left and the disclosure/foreword stack spanning `col-span-5` right. Both vertically centered.
- Tablet (768–1023px): single column; hero text on top, disclosure + foreword cards stacked below.
- Mobile (<768px): single column; same as tablet, with tighter padding and the foreword card collapsible (expandable via a "Read foreword" link) so the hero CTA remains tappable above the fold.

**The plasma** runs as the full hero section background via the new `PlasmaBackground` component. No blob centerpiece. The hero text and cards sit at `relative z-10` over the field. Drop the `intensity` to `'ambient'` since text is sitting on top — the trails accumulate higher (alpha ~0.06–0.08) so text contrast holds.

**Type sizing for the no-scroll constraint** — on the left column at desktop, the "Decode the signal." headline drops from the prototype's `5xl/6xl` to `4xl/5xl` so it leaves room for the right-column cards. The intro paragraph drops from the prototype's `text-sm` to a tighter character count or `text-xs` if needed. The CTA buttons stay full-size — they are the primary call to action.

**Right column** — vertical stack of:
1. **Important Notice** card — same `border border-[#ff4500]/20 bg-[#0a0505]/90 backdrop-blur-sm` treatment as the prototype, but tighter padding (`p-5` instead of `p-6`) and a shorter excerpt (the *full* notice is on a `/about` page; the home renders the existing one-paragraph version verbatim). If the source-repo notice is too long to fit alongside the foreword, render the first paragraph here with a `Read full notice →` link to `/about` rather than truncating mid-sentence.
2. **Foreword** card — same treatment. The source-repo foreword from `app/page.tsx` is two paragraphs plus a dated signoff. Render both paragraphs verbatim. The signoff (`— Michael Brandon Lane, April 7, 2026`) stays.

The `backdrop-blur-sm` on both cards is what keeps text legible against the live plasma underneath. Test contrast — if the plasma at `intensity='ambient'` is still too bright in some regions for the card's text to read cleanly through the blur, increase the cards' background opacity from `/90` to `/95`.

**Scroll indicator** — keep the "Explore ↓" hint at the bottom of the hero section, but its semantics now change. It's not pointing readers to the "missing" foreword (the foreword is now above the fold); it points to the marquee and the volume cards below. Acceptable as-is.

### What gets pushed down (i.e., now lives below the fold)

- The marquee strip
- The Tesseract3D + Core Manuscripts split section
- The Featured Essay card
- The Appendices grid
- The Young Explorers CTA
- The footer

Everything from the marquee down stays exactly as currently designed in the prototype. The only change is the hero section itself.

### Acceptance criteria specific to this section

- At 1440×900 viewport, the user sees: navigation bar, "Transmission Active" kicker, "Decode the signal." headline, the intro paragraph, both CTA buttons, the Important Notice card (full or summary with link), and the Foreword card with both paragraphs and the dated signoff — all without scrolling.
- At 1920×1080 viewport, same but with the scroll indicator also visible at the bottom of the hero.
- At 768×1024 (iPad portrait), hero text stack is visible above the fold; foreword + disclosure stack starts at or near the fold and is the first thing the user scrolls into.
- At 390×844 (iPhone 12-class mobile), hero kicker + headline + intro + CTAs are visible above the fold. The foreword card is collapsed below a "Read foreword" disclosure link. The Important Notice is also collapsed below a "Read notice" link. The plasma fills the entire visible viewport.
- The plasma at `intensity='ambient'` does not interfere with text legibility on the cards. Test the contrast ratio of the card body text (`text-[#e8d5c4]` on the card's `bg-[#0a0505]/95` over the plasma) — must be ≥4.5:1.
- The split-color "the signal." gradient on the headline is preserved exactly.
- No vertical scroll on any of the listed viewport sizes during the hero. Foreword visible without action on desktop; collapsed-but-discoverable on mobile.

## PART C — CONTENT MIGRATION

The source repo has the writing. The target repo has the visual shell. Migration is *content into shell*.

### C.1 — Map of routes and source files

| Target route (new repo) | Source files (old repo) |
|---|---|
| `/` | `app/page.tsx` (foreword + disclosure block — extract text only, drop the Next.js metadata exports and `<KinematicBackground />` imports) |
| `/the-next-human-ontology` | `app/the-next-human-ontology/page.tsx` (volume landing) + all `chapter-{1..10}/page.tsx` |
| `/the-next-human-ontology/bibliography` | `app/the-next-human-ontology/bibliography/page.tsx` |
| `/the-sovereign-mind` | `app/the-sovereign-mind/page.tsx` + all `chapter-{1..12}/page.tsx` + bibliography |
| `/the-bigger-world` | `app/the-bigger-world/page.tsx` + all `chapter-{1..10}/page.tsx` + bibliography |
| `/the-great-convergence` | `app/the-great-convergence/page.tsx` (single-page essay) |
| `/timeline` | `app/timeline/page.tsx` |
| `/whos-who` | `app/whos-who/page.tsx` |
| `/glossary` | `app/glossary/page.tsx` |
| `/reading-guide` | `app/reading-guide/page.tsx` |
| `/about` | `app/about/page.tsx` |

The new repo's `App.tsx` currently routes only top-level volume landing pages, not individual chapters. **Add nested chapter routes** to the new repo's `App.tsx`:
/the-next-human-ontology/chapter-1 ... /chapter-10
/the-next-human-ontology/bibliography
/the-sovereign-mind/chapter-1 ... /chapter-12
/the-sovereign-mind/bibliography
/the-bigger-world/chapter-1 ... /chapter-10
/the-bigger-world/bibliography

You can either declare these explicitly (32 routes plus 3 bibliographies — verbose but clear) or define them parameterized using `:chapter` route segments and resolve content from a content map. Either is acceptable; verbose explicit routes are easier to read and the build cost is identical. Pick verbose.

### C.2 — Stack translation rules

Translate each source page from Next.js App Router to Vite/React Router:

| Next.js pattern | Vite/React Router replacement |
|---|---|
| `import type { Metadata } from "next"; export const metadata = {...}` | Delete. Use `<title>` in `index.html` for the homepage; per-page titles can be set via `document.title` in a `useEffect` if needed. |
| `import Link from "next/link"` and `<Link href="/path">` | `import { Link } from 'react-router'` and `<Link to="/path">` |
| Server component (no `"use client"` directive at top) | Plain React function component, identical body. Vite has no server/client split. |
| `import KinematicBackground from "@/components/KinematicBackground"` | Replace with `import { PlasmaBackground } from '@/components/PlasmaBackground'` and use `<PlasmaBackground intensity="ambient" />` |
| Tailwind class strings | Preserve verbatim — both repos use Tailwind. Watch one thing: the new repo is Tailwind v4 with `@theme` tokens. The old repo's CSS custom properties (`--accent`, `--text`, `--muted`, `--border`) may have different names in `theme.css`. Map: old `text-text` → new `text-[#e8d5c4]`. Old `text-accent` → new `text-[#ff4500]`. Old `text-muted` → new `text-[#cd853f]`. Old `bg-bg` → new `bg-[#0a0505]`. Old `border-border` → new `border-[#8b4513]/30`. Old `panel` utility class → use the new repo's `border border-[#8b4513]/30 bg-[#1a0a0a]/50 p-6` pattern (you'll see this pattern in `Glossary.tsx` and `WhosWho.tsx`). Old `section-title` kicker → `font-mono text-xs tracking-[0.3em] text-[#ff8c00] uppercase` (you'll see this in `Index.tsx`). |
| `KinematicBackground.tsx` import | Delete. The new repo has no kinematic background; all dynamic backgrounds run through `PlasmaBackground`. The kids zone has its own `KidsBackground` — leave that alone. |

### C.3 — Chapter page layout pattern

Use this consistent layout for every chapter page in all three volumes (adapting per volume's accent color):
<div className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
  <Navigation />
  <section className="relative pt-32 pb-12 px-6 border-b border-[#8b4513]/30 overflow-hidden">
    <PlasmaBackground intensity="ambient" />
    {/* breadcrumb back-link, volume kicker, chapter number, chapter title */}
  </section>
  <section className="px-6 py-16">
    <article className="max-w-3xl mx-auto prose-warm">
      {/* migrated chapter body — sections, blockquotes, update blocks */}
    </article>
    {/* prev/next chapter nav at bottom */}
  </section>
  <Footer />
</div>
````
Define a single prose-warm typography utility (in theme.css or in a small Prose.tsx wrapper) that handles:

Body text: font-sans text-base text-[#cd853f] leading-[1.8]
Headings: font-sans text-2xl md:text-3xl font-light text-[#e8d5c4] tracking-[-0.02em] for H2, text-xl text-[#e8d5c4] for H3
Blockquotes: border-l-2 border-[#ff4500]/50 pl-6 my-8 font-mono text-sm text-[#e8d5c4] italic
Links inside prose: text-[#ff8c00] hover:text-[#ffa500] underline underline-offset-4
"Update — May 2026" labeled blocks: render as a distinct boxed sub-section — mt-12 p-6 border border-[#ff4500]/30 bg-[#1a0a0a]/40 — with <p className="font-mono text-xs tracking-[0.3em] text-[#ff4500] uppercase mb-2">Added May 17, 2026</p> kicker, then an <h2>Update — May 2026</h2> heading, then the update body. This treatment must be visible — readers must see at a glance which content is original and which is post-PURSUE addition.
Calibration notes (used on Who's Who contested-status figures): italic text-sm text-[#a0a0a8] border-l border-[#8b4513]/40 pl-4 mt-3

Volume accent colors (already defined in the new site's existing pages):

Vol I (/the-next-human-ontology): accent #ff4500 (red-orange)
Vol II (/the-sovereign-mind): accent #ff8c00 (dark orange)
Vol III (/the-bigger-world): accent #ffa500 (gold-orange) — keep warm, do not switch to the blue Discovery Kids palette
Great Convergence: #ff8c00

C.4 — Content fidelity
The migration must preserve every word of the source chapters. This is investigative writing with specific factual claims that have been calibrated against primary sources. Do not paraphrase, summarize, condense, or "improve" prose during migration. If a source paragraph is awkward, it stays awkward — the author can edit afterwards. The Cursor agent's job is faithful transfer.
This includes:

All inline citations (Liberation Times, war.gov/UFO, Loeb Medium posts, DOIs)
All hyperlinks to /whos-who, /timeline, /glossary
All blockquotes including attribution lines
All "Update — May 2026" blocks as visibly distinct sections
The Great Convergence's "Postscript — May 17, 2026" signed — Michael Brandon Lane, May 17, 2026
The homepage foreword dated April 7, 2026 (preserve the date — it's a historical artifact, not stale content)
The homepage Disclosure & Verification Statement (preserve verbatim, plus its May 17, 2026 appended sentence about the shift from disclosure-demand to disclosure-verification)

C.5 — Who's Who, Timeline, Glossary
These three pages in the source repo have richer data than the placeholder versions in the new repo (the new site's WhosWho.tsx has 8 figures; the source has ~80 including the P2 expansion. The new site's Timeline.tsx has 9 events; the source has ~65 through May 2026. The new site's Glossary.tsx has 8 terms; the source has ~50.). Migrate the source data verbatim.
Where the new site already implements a richer feature than the source — for example the Timeline page has alternating-side layout, the WhosWho has category color-coding — keep those visual improvements. Just feed them the larger dataset.
The Who's Who page in the source repo has been refactored under package P2/P3 to consume content/whos-who/figures.ts as a shared data file. If that PR has merged in the source repo, copy that data file directly into src/content/whos-who/figures.ts in the new repo and have the WhosWho page consume it. Same data → same single source of truth.
C.6 — Network page
If the source repo's P3 (/network interactive Cytoscape graph) has merged, port it to the new site as well. Add it to App.tsx routes, add it to Navigation.tsx's nav links, and ensure cytoscape, cytoscape-cose-bilkent, react-cytoscapejs, and @types/cytoscape are added to the new repo's package.json. The Cytoscape implementation is framework-agnostic and ports without modification — the only adaptation is the import-path aliases.
If P3 has not yet landed in the source repo, skip the Network page in this migration. It can be a follow-up PR.

PART D — NAV, FOOTER, METADATA
D.1 — Update src/components/Navigation.tsx
The current nav has 10 items defined but only renders the first 4 on desktop (NAV_LINKS.slice(0, 4)). The full nav needs to include all sections. Recommended desktop nav for the migrated site:
Home · Vol I · Vol II · Vol III · Convergence · Timeline · Who's Who · Network · Glossary · About
That's 10 items; the existing lg:flex gap-8 will crowd at 1024–1200px. Tighten to gap-6 and either reduce to xl:flex (hamburger up to 1280px) or trim "Network" / "Glossary" from desktop and surface them through the hamburger only. The current code slices to 4 items, which is too few. Slice to 8 — Home/Vol I/Vol II/Vol III/Convergence/Timeline/Who's Who/About — and keep Network + Glossary in the mobile/hamburger overlay only.
Add /about, /network, and /the-great-convergence to NAV_LINKS. The current NAV_LINKS is missing About.
D.2 — Update src/components/Footer.tsx
Existing Footer lists three "Core Texts" and four "Resources." Add: The Great Convergence (under Core Texts as a fourth item), and About, Network (under Resources). Drop "Young Explorers" from the Resources column — that route still exists at /discovery-kids but it's an on-ramp, not a peer of the main reference pages.
D.3 — index.html
Update <title> and <meta name="description"> to match the source repo's homepage metadata. The new site's existing meta is already close — preserve it. Add <meta name="author" content="Michael Brandon Lane"> if not present.
D.4 — package.json
Add (if not already present):

cytoscape ^3.30, cytoscape-cose-bilkent ^4.1, react-cytoscapejs ^2.0, @types/cytoscape ^3.21 — for the Network page port if P3 is included
No new dep needed for the new PlasmaBackground — Canvas 2D is native; Three.js can be removed from PlasmaBackground but stays in the project for Tesseract3D.tsx, Drone3D.tsx, KidsBackground.tsx which still use it.


PART E — ACCEPTANCE CRITERIA

pnpm install (or npm install, matching the target repo's existing lockfile) succeeds.
pnpm dev runs cleanly. No console errors. No console warnings about missing routes or broken links.
pnpm build exits 0. No TypeScript errors. No ESLint errors.
Every chapter from the source repo renders at its mapped URL in the new repo, with text content character-for-character preserved (modulo Next.js → React Router import substitutions).
The new PlasmaBackground runs at ≥60fps on desktop and ≥30fps on the user's Samsung S22 Ultra. The field is visibly different after 60 seconds of observation — it evolves, not just pulses.
prefers-reduced-motion: reduce produces a static radial gradient instead of animation.
The plasma background respects intensity='ambient' behind text — text remains legible (contrast ratio ≥ 4.5:1 against the field's average luminance).
Navigation includes all migrated routes. No broken nav links.
The "Update — May 2026" blocks are visually distinct from original chapter content on every chapter that has one.
The Great Convergence postscript is visible at the bottom of /the-great-convergence with the signoff line.
/whos-who renders the full ~80-figure roster from the source repo, including calibration notes on contested-status figures.
/timeline renders all ~65 events through May 17, 2026.
/discovery-kids remains as a lighter on-ramp; /the-bigger-world is the full 10-chapter Vol III in warm-orange register, not the blue Cosmo cartoon zone.
Mobile renders cleanly throughout. The plasma background does not jank on mobile.
No instance of react-router-dom anywhere in the codebase. All imports are from react-router.

PART F — OUT OF SCOPE

Adding new content beyond what exists in the source repo.
Redesigning the warm palette or typography of the new site.
Modifying Tesseract3D.tsx, Drone3D.tsx, KidsBackground.tsx, CursorGlow.tsx, Marquee.tsx, StickLightButton.tsx, VolumeCard.tsx, PageTransition.tsx — these are the prototype's design language and stay.
Server-side rendering, SSG, or any Next.js features. The target is intentionally a client-rendered Vite app.
SEO tooling beyond basic per-page document.title updates.
Analytics, A/B testing, or CMS integration.

PART G — COMMIT STRATEGY
Sequence the migration in commits the user can review one at a time:

feat(migration): replace PlasmaBackground with curl-noise living plasma, drop Three.js from this component
feat(migration): expand routing in App.tsx for all 32 chapters, 3 bibliographies, about, network
feat(migration): port Vol I — 10 chapters + bibliography, preserve all content and Update May 2026 blocks
feat(migration): port Vol II — 12 chapters + bibliography, preserve Project Anchor case study calibration
feat(migration): port Vol III — 10 chapters + bibliography, warm-orange register, reconciled with kids on-ramp
feat(migration): port Great Convergence essay with May 17 2026 postscript
feat(migration): port Timeline (~65 events), Who's Who (~80 figures), Glossary, Reading Guide, About
feat(migration): port Network page (Cytoscape) if P3 has merged in source
feat(migration): nav and footer updates — full route coverage, mobile menu hierarchy
feat(migration): index.html metadata, package.json deps, final cleanup

PR description summary: "Migrates all 32 chapters of finished prose, the Great Convergence essay with May 17 2026 postscript, the Timeline (~65 events), Who's Who (~80 figures with calibration notes), Glossary, Reading Guide, and About from the existing Next.js thenewontology repo into the new Vite + React Router visual shell. Replaces the static plasma background with a living curl-noise + persistence-trail + slow-attractor field that evolves over minutes rather than pulsing on a fixed period. Vol III remains a 10-chapter youth-accessible companion in the warm-orange register, with /discovery-kids preserved as a lighter on-ramp. No design changes — the prototype's typography, palette, and component library are the design."