import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata = {
  title: "The Sovereign Mind | The New Human Ontology",
};

export default function TheSovereignMindPage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link
          href="/"
          className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>

        <p className="section-title">Volume II</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">
          The Sovereign Mind
        </h1>
        <div className="h-px bg-border mb-10" />

        <div className="prose prose-invert">
          <p className="lead text-muted text-lg">
            Psychological sovereignty is not resistance — it is clarity. This
            volume provides operational frameworks for maintaining cognitive
            autonomy, processing ontological disruption, and building
            unshakeable inner ground in a world undergoing rapid transformation.
          </p>

          <h2>Introduction</h2>
          <p>
            The sovereign mind is not a mind that refuses new information. It
            is a mind that can receive any information — however destabilizing
            — without losing its coherence. This document series is a field
            manual for that capacity.
          </p>

          <div className="callout">
            <strong>Protocol:</strong> Document, verify, don't amplify. Ground
            in what is known. Extend carefully into what is uncertain.
          </div>

          <h2>Structure of This Volume</h2>
          <ul>
            <li>Part I — Psychological Sovereignty: What It Is and Why It Matters</li>
            <li>Part II — The Anatomy of Ontological Shock</li>
            <li>Part III — Cognitive Security Protocols</li>
            <li>Part IV — Building the Sovereign Framework</li>
            <li>Part V — Collective Sovereignty and Community Resilience</li>
          </ul>

          <div className="callout callout--warning">
            <strong>Note:</strong> Full chapter content is being compiled from
            reference materials and will be published progressively.
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/the-next-human-ontology"
            className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
          >
            <span>←</span> Volume I — The Next Human Ontology
          </Link>
          <Link
            href="/the-bigger-world"
            className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
          >
            Volume III — The Bigger World <span>→</span>
          </Link>
        </div>
      </main>
    </>
  );
}
