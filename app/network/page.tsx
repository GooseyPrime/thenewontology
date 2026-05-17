import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "Human Network | The New Ontology",
  description:
    "An interactive map of relationships among key figures in UAP disclosure, consciousness research, and the architecture of secrecy — coming soon.",
  alternates: { canonical: "https://thenewontology.life/network" },
  openGraph: {
    title: "Human Network | The New Ontology",
    description:
      "Interactive relationship map of disclosure-adjacent figures — in development.",
    url: "https://thenewontology.life/network",
    type: "article",
  },
};

export default function NetworkPage() {
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
          Human Network
        </h1>
        <p className="font-serif text-muted text-sm mb-10 leading-relaxed">
          A visual map of how the people named across this site connect — by institution, testimony,
          funding, and dispute. The interactive graph is in development.
        </p>
        <div className="h-px bg-border mb-12" />

        <section className="panel p-6">
          <p className="font-serif text-text text-sm leading-relaxed mb-4">
            The interactive network view — compound-node grouping by affiliation, relationship edges,
            and calibration notes on contested entries — is being built and will replace this page.
          </p>
          <p className="font-serif text-muted text-sm leading-relaxed">
            Until then, the canonical biographical reference is{" "}
            <Link href="/whos-who" className="text-accent hover:underline underline-offset-4">
              Who&apos;s Who
            </Link>
            .
          </p>
        </section>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Back to Library
          </Link>
        </div>
      </main>
    </>
  );
}
