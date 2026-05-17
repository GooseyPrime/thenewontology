import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";
import NetworkPageClient from "@/components/network/NetworkPageClient";

export const metadata: Metadata = {
  title: "Human Network | The New Ontology",
  description:
    "Interactive map of relationships among figures in UAP disclosure, consciousness research, and the architecture of secrecy.",
  alternates: { canonical: "https://thenewontology.life/network" },
  openGraph: {
    title: "Human Network | The New Ontology",
    description: "Compound-node graph of affiliations, testimony, funding, and disputes.",
    url: "https://thenewontology.life/network",
    type: "article",
  },
};

export default function NetworkPage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-7xl mx-auto" style={{ zIndex: 1 }}>
        <Link
          href="/"
          className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Home
        </Link>
        <p className="section-title">Reference</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-4">Human Network</h1>
        <p className="font-serif text-muted text-sm mb-6 max-w-2xl leading-relaxed">
          How the people named across this site connect — by institution, testimony, funding, and
          public dispute. Hover a node for a profile card; click to pin. Compound groups show shared
          affiliations. Contested entries include calibration notes.
        </p>

        <div className="flex flex-wrap gap-4 mb-8 text-sm font-sans">
          <a
            href="/downloads/figures.csv"
            className="text-accent hover:underline underline-offset-4"
            download
          >
            Download CSV
          </a>
          <a href="/downloads/figures.json" className="text-accent hover:underline underline-offset-4">
            Download JSON
          </a>
          <a
            href="/downloads/network-cytoscape.json"
            className="text-accent hover:underline underline-offset-4"
          >
            Download Cytoscape JSON
          </a>
        </div>

        <div className="h-px bg-border mb-10" />

        <NetworkPageClient />

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6">
          <Link href="/" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Back to Library
          </Link>
          <Link href="/whos-who" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            Who&apos;s Who →
          </Link>
        </div>
      </main>
    </>
  );
}
