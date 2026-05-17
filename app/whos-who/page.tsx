import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";
import { figures } from "@/content/whos-who/figures";
import {
  CATEGORY_LABELS,
  FIGURE_CATEGORIES,
  type FigureCategory,
} from "@/content/whos-who/types";
import { FLAG_RING_COLORS } from "@/lib/network/graph-styles";

export const metadata: Metadata = {
  title: "Who's Who | The New Ontology",
  description:
    "Key figures in UAP disclosure, consciousness research, NHI investigation, and the architecture of secrecy — credentials, affiliations, and specific contributions cited across The New Ontology.",
  alternates: { canonical: "https://thenewontology.life/whos-who" },
  openGraph: {
    title: "Who's Who | The New Ontology",
    description:
      "Key figures in UAP disclosure, consciousness research, NHI investigation, and the architecture of secrecy.",
    url: "https://thenewontology.life/whos-who",
    type: "article",
  },
};

function byLastName(a: { name: string }, b: { name: string }) {
  const la = a.name.split(" ").at(-1) ?? "";
  const lb = b.name.split(" ").at(-1) ?? "";
  return la.localeCompare(lb);
}

function flagLabel(flag: string) {
  return flag.replace(/-/g, " ");
}

export default function WhosWhoPage() {
  const grouped = FIGURE_CATEGORIES.map((cat: FigureCategory) => ({
    cat,
    items: figures.filter((f) => f.category === cat).sort(byLastName),
  }));

  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link
          href="/"
          className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Home
        </Link>
        <p className="section-title">Reference</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-4">
          Who&apos;s Who
        </h1>
        <p className="font-serif text-muted text-sm mb-6 leading-relaxed">
          {figures.length} key figures in UAP disclosure, consciousness research, NHI investigation,
          and the architecture of secrecy — grouped by category, alphabetized by last name within each
          section.
        </p>
        <p className="font-serif text-muted text-sm mb-10 leading-relaxed">
          Want to see how these figures connect? Visit the{" "}
          <Link href="/network" className="text-accent hover:underline underline-offset-4">
            Human Network
          </Link>{" "}
          for the interactive graph.
        </p>
        <div className="h-px bg-border mb-12" />

        {grouped.map(({ cat, items }) =>
          items.length > 0 ? (
            <section key={cat} className="mb-14">
              <h2 className="font-sans text-lg font-semibold text-text mb-6 border-b border-border pb-2">
                {CATEGORY_LABELS[cat]}
              </h2>
              <dl className="space-y-8">
                {items.map((figure) => (
                  <div key={figure.id} id={figure.id} className="group scroll-mt-24">
                    <dt className="font-sans text-base font-semibold text-accent mb-2 flex flex-wrap items-center gap-2">
                      {figure.name}
                      {figure.stakeholderFlags.map((flag) => (
                        <span
                          key={flag}
                          className="text-[10px] font-normal uppercase tracking-wide px-1.5 py-0.5 rounded border"
                          style={{
                            borderColor: FLAG_RING_COLORS[flag] ?? "rgba(155,188,255,0.25)",
                            color: FLAG_RING_COLORS[flag] ?? "var(--muted)",
                          }}
                        >
                          {flagLabel(flag)}
                        </span>
                      ))}
                    </dt>
                    <dd className="font-serif text-text text-sm leading-relaxed pl-4 border-l border-border group-hover:border-accent/40 transition-colors">
                      <p className="text-muted text-xs mb-2">{figure.role}</p>
                      <p>{figure.bio}</p>
                      {figure.calibrationNote && (
                        <p className="mt-3 text-muted/80 text-xs italic border-l-2 border-muted/30 pl-3">
                          {figure.calibrationNote}
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null
        )}

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6">
          <Link href="/" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Back to Library
          </Link>
          <Link href="/network" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            Human Network →
          </Link>
        </div>
      </main>
    </>
  );
}
