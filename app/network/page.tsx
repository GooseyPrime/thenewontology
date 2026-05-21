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
      <main className="relative min-h-screen px-6 py-16 max-w-7xl mx-auto my-8" style={{ zIndex: 1 }}>
        <div className="glass-panel p-8">
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
            public dispute. Colored regions are organizations; dots are people. Use the guide below
            on desktop, or browse the list view on smaller screens.
          </p>

          <section
            className="glass-accent p-5 mb-8 max-w-3xl"
            aria-label="How to use the network graph"
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-3">
              How to explore the graph
            </h2>
            <ul className="font-serif text-sm text-text space-y-2.5 leading-relaxed">
              <li>
                <strong className="font-sans text-text">Zoom:</strong> scroll or pinch on the
                canvas, or use the <strong className="font-sans">+</strong> /{" "}
                <strong className="font-sans">−</strong> buttons. <strong className="font-sans">Fit</strong>{" "}
                reframes the whole network; <strong className="font-sans">Reset view</strong> clears
                any organization focus.
              </li>
              <li>
                <strong className="font-sans text-text">People (dots):</strong> hover for a profile
                preview; click to pin the card in place (click ✕ or elsewhere to dismiss). Dot color
                shows their category; the ring shows their primary stakeholder flag when present.
              </li>
              <li>
                <strong className="font-sans text-text">Organizations:</strong> click an organization
                chip above the graph, or a colored compound region, to highlight that cluster and dim
                the rest. Click again to clear the focus.
              </li>
              <li>
                <strong className="font-sans text-text">Search &amp; filters:</strong> use the search
                box to find names, roles, or affiliations. Category buttons show or hide whole
                groups. Lines between people indicate relationship types (see the legend).
              </li>
              <li>
                <strong className="font-sans text-text">Fullscreen:</strong> opens a larger view on
                desktop for easier panning and zooming.
              </li>
            </ul>
          </section>

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
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
            >
              <span>←</span> Back to Library
            </Link>
            <Link
              href="/whos-who"
              className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
            >
              Who&apos;s Who →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
