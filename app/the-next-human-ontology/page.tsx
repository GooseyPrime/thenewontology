import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata = {
  title: "The Next Human Ontology | The New Human Ontology",
};

export default function TheNextHumanOntologyPage() {
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

        <p className="section-title">Volume I</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">
          The Next Human Ontology
        </h1>
        <div className="h-px bg-border mb-10" />

        <div className="prose prose-invert">
          <p className="lead text-muted text-lg">
            We stand at an inflection point — a threshold between what humanity
            believed itself to be and what evidence now demands we become. This
            volume documents the framework for understanding that transition.
          </p>

          <h2>Introduction</h2>
          <p>
            The term <em>ontology</em> refers to the study of being — the
            fundamental categories of existence and reality. For millennia,
            human ontology has been shaped by culture, religion, science, and
            shared narrative. What this document series explores is how that
            foundation is now shifting — and what tools, frameworks, and
            understanding are needed to navigate that shift with clarity and
            purpose.
          </p>

          <div className="callout callout--warning">
            <strong>Note:</strong> Content for this volume is being compiled
            from reference materials. Full chapters will be published as
            source documents are integrated.
          </div>

          <h2>Structure of This Volume</h2>
          <p>
            This volume will be organized into the following parts:
          </p>
          <ul>
            <li>Part I — The Architecture of Human Identity</li>
            <li>Part II — Ontological Disruption and Its Causes</li>
            <li>Part III — New Frameworks for Understanding Reality</li>
            <li>Part IV — The Path Forward</li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="section-title mb-4">Continue Reading</p>
          <Link
            href="/the-sovereign-mind"
            className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
          >
            Volume II — The Sovereign Mind <span>→</span>
          </Link>
        </div>
      </main>
    </>
  );
}
