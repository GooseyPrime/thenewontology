import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "The Next Human Ontology",
  description:
    "Volume I: Documenting the simultaneous convergence of AI scaling, non-human intelligence disclosure, and consciousness physics — and the collapse of the anthropocentric worldview that underpins civilization.",
  alternates: { canonical: "https://thenewontology.life/the-next-human-ontology" },
  openGraph: {
    title: "The Next Human Ontology — Volume I",
    description:
      "Volume I: AI, NHI disclosure, and the physics of consciousness are dismantling anthropocentrism. A field manual for understanding the threshold humanity is crossing.",
    url: "https://thenewontology.life/the-next-human-ontology",
    type: "article",
  },
};

const chapters = [
  {
    number: 1,
    slug: "chapter-1",
    title: "The Triple Singularity & The Ontological Shock",
    description:
      "The simultaneous convergence of AI scaling, NHI disclosure, and the physics of consciousness threatens to dismantle anthropocentrism — the foundational premise of modern civilization.",
  },
  {
    number: 2,
    slug: "chapter-2",
    title: "The Architecture of Secrecy",
    description:
      "A Byzantine apparatus of legislative warfare, defense contractor firewalls, and clandestine research programs has concealed the greatest scientific discoveries in human history for nearly a century.",
  },
  {
    number: 3,
    slug: "chapter-3",
    title: "The Energy Suppression Paradigm",
    description:
      "The $8 trillion fossil fuel hegemony, the Invention Secrecy Act, and the deliberate suppression of LENR and Zero-Point Energy form an institutionalized firewall against post-scarcity civilization.",
  },
  {
    number: 4,
    slug: "chapter-4",
    title: "The Extraterrestrial Hypothesis is Dead",
    description:
      "The nuts-and-bolts extraterrestrial hypothesis fails to account for the consciousness connection, the hitchhiker effect, and cross-cultural continuity — demanding more radical frameworks.",
  },
  {
    number: 5,
    slug: "chapter-5",
    title: "The Physics of Consciousness",
    description:
      "From Orch-OR quantum microtubules to Strømme's universal consciousness field, the evidence converges: the brain is a macroscopic quantum transceiver dynamically interfacing with the cosmos.",
  },
  {
    number: 6,
    slug: "chapter-6",
    title: "The Mechanics of Contact",
    description:
      "The CIA's Gateway Process, Project Stargate, and caudate-putamen neuroanatomy reveal that contact with non-human intelligence is fundamentally a neurological event mediated through consciousness.",
  },
  {
    number: 7,
    slug: "chapter-7",
    title: "High Strangeness and The Hitchhiker Effect",
    description:
      "The Hitchhiker Effect — a phenomenon that attaches to observers and follows them across the globe — challenges every existing paradigm, causing documented neurological injuries and reality distortions.",
  },
  {
    number: 8,
    slug: "chapter-8",
    title: "The Cycles of Time and Human Resets",
    description:
      "Civilizations consistently collapse in 250-year cycles while the Younger Dryas impact, Solar-Induced Dark Ages, and the AI Great Filter suggest humanity exists within a deeply constrained temporal window.",
  },
  {
    number: 9,
    slug: "chapter-9",
    title: "The Asymmetry of Religious Shock",
    description:
      "The Vatican's quiet exotheological preparation contrasts sharply with the vulnerability of fundamentalist literalism, while Buddhist and Hindu cosmologies have always accommodated a universe teeming with intelligence.",
  },
  {
    number: 10,
    slug: "chapter-10",
    title: "Surviving the Convergence",
    description:
      "As managed disclosure collapses and catastrophic rupture becomes statistically inevitable by 2040, the blueprint for survival demands sovereign preparation, decentralized energy, and psychological fortification.",
  },
];

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
            believed itself to be and what evidence now demands we become. The
            simultaneous convergence of artificial intelligence, non-human
            intelligence disclosure, and revolutionary discoveries in the
            physics of consciousness is systematically dismantling the
            anthropocentric reality that has underpinned civilization for
            millennia. This volume documents the framework for understanding
            that transition.
          </p>

          <p>
            The term <em>ontology</em> refers to the study of being — the
            fundamental categories of existence and reality. For millennia,
            human ontology has been shaped by culture, religion, science, and
            shared narrative. What this volume explores is how that foundation
            is now shifting under the weight of converging forces, and what
            tools, frameworks, and understanding are needed to navigate that
            shift with clarity and purpose.
          </p>
        </div>

        <nav className="mt-10 space-y-3" aria-label="Table of Contents">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/the-next-human-ontology/${ch.slug}`}
              className="group flex gap-4 rounded-lg border border-border bg-panel p-4 hover:border-accent transition-colors no-underline"
            >
              <span className="section-title shrink-0 w-20 pt-0.5">
                Ch. {ch.number}
              </span>
              <div>
                <p className="font-sans font-medium text-text group-hover:text-accent transition-colors">
                  {ch.title}
                </p>
                <p className="text-sm text-muted mt-1 font-serif leading-snug">
                  {ch.description}
                </p>
              </div>
            </Link>
          ))}

          <Link
            href="/the-next-human-ontology/bibliography"
            className="group flex gap-4 rounded-lg border border-border bg-panel p-4 hover:border-accent transition-colors no-underline"
          >
            <span className="section-title shrink-0 w-20 pt-0.5">Biblio.</span>
            <div>
              <p className="font-sans font-medium text-text group-hover:text-accent transition-colors">
                Comprehensive Bibliography &amp; Resources
              </p>
              <p className="text-sm text-muted mt-1 font-serif leading-snug">
                All primary sources, key figures, scientific papers, and
                institutional records cited across the ten chapters.
              </p>
            </div>
          </Link>
        </nav>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <p className="section-title">Continue Reading</p>
          </div>
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
