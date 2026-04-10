import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "About the Author | The New Ontology",
  description:
    "Michael Brandon Lane — chemical engineer, materials scientist, and founder of InTellMe AI — on the interdisciplinary investigation behind The New Ontology.",
  alternates: { canonical: "https://thenewontology.life/about" },
};

export default function AboutPage() {
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
        <p className="section-title">About the Author</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">
          Michael Brandon Lane
        </h1>
        <div className="h-px bg-border mb-10" />
        <div className="prose prose-invert">
          <p>
            Michael Brandon Lane holds a Bachelor of Science in Chemical Engineering from Virginia Tech
            and a Master of Science in Chemistry from the University of North Carolina at Greensboro.
            He is a co-inventor on a WIPO patent in lithium battery separator technology — research
            conducted at the intersection of electrochemistry, materials science, and advanced
            manufacturing. He is the founder and CEO of InTellMe AI, a private research and development
            foundry headquartered in Johnson City, Tennessee, focused on the application of artificial
            intelligence to complex analytical problems.
          </p>
          <p>
            The analytical framework underlying <em>The New Ontology</em> is grounded in that
            disciplinary formation. A materials scientist and chemical engineer approaches complex
            systems differently from a journalist or philosopher: the instinct is to identify the
            load-bearing variables, trace the causal architecture, and test the structural integrity
            of explanatory frameworks against the full weight of available evidence. Applied to the
            questions of non-human intelligence, consciousness physics, and institutional secrecy,
            this systems-level rigor produces conclusions that differ meaningfully from both
            credulous acceptance and reflexive dismissal.
          </p>
          <p>
            The editorial philosophy of this site is explicit: claims are evaluated against the
            strength of their sourcing, the independence of corroborating data streams, and their
            internal consistency with the broader evidentiary pattern. The work distinguishes
            consistently between established fact, strong evidence, credible testimony, contested
            evidence, and speculative frameworks. Where a claim rests on different evidentiary
            foundations — declassified government documents versus contactee testimony, for instance —
            those foundations are identified rather than collapsed into a uniform register of
            certainty. The goal is to present the strongest version of each argument while being
            transparent about where evidence is contested, where replication is lacking, and where
            the honest answer is that we do not yet know.
          </p>
          <p>
            This site is not a platform for the credulous. The same analytical discipline that
            identifies seven decades of institutional dismissal as epistemically lazy must be
            applied with equal rigor to the claims made in opposition to that dismissal. Independent
            verification of all claims is encouraged. Sources are cited by chapter in the
            Bibliography, and readers who identify errors or stronger sourcing are invited to submit
            corrections through the contact address below.
          </p>
          <p>
            Lane has applied the tools of AI-assisted synthesis and cross-domain analysis to a
            research agenda that intersects physics, neuroscience, political science, and the
            sociology of knowledge. He writes as someone trained in the hard sciences who takes
            seriously the proposition that the hardest questions — about the nature of consciousness,
            about non-human intelligence, about the institutional structures that govern what we are
            permitted to know — deserve the same rigorous treatment as any other complex empirical
            problem. This work is offered in that spirit.
          </p>
          <p>
            For correspondence, corrections, or source submissions, contact:
            <br />
            <a href="mailto:contact@thenewontology.life" className="text-accent hover:underline underline-offset-4">
              contact@thenewontology.life
            </a>
          </p>
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
          >
            <span>←</span> Back to Library
          </Link>
        </div>
      </main>
    </>
  );
}
