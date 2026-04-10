import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "How to Use This Site | The New Ontology",
  description:
    "A reading guide to The New Ontology — the relationship between the three volumes, suggested paths for different audiences, and how to navigate the full library.",
  alternates: { canonical: "https://thenewontology.life/reading-guide" },
};

export default function ReadingGuidePage() {
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
        <p className="section-title">Guide</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">
          How to Use This Site
        </h1>
        <div className="h-px bg-border mb-10" />
        <div className="prose prose-invert">

          <h2>The Three Volumes</h2>
          <p>
            The New Ontology is organized across three volumes with distinct but complementary purposes.
            <strong> Volume I: The Next Human Ontology</strong> is the investigative and theoretical core —
            a ten-chapter analytical synthesis of UAP disclosure, consciousness physics, the architecture
            of institutional secrecy, and the civilizational implications of NHI reality. It draws on
            declassified documents, peer-reviewed science, sworn congressional testimony, and credible
            whistleblower accounts. Volume I is written for readers who want to engage the evidence at
            full depth and with full rigor.
          </p>
          <p>
            <strong>Volume II: The Sovereign Mind</strong> is a practical field manual for navigating
            the psychological and societal disruptions the convergence produces. Where Volume I asks
            &quot;what is happening?&quot; and &quot;why?,&quot; Volume II asks &quot;how do we respond?&quot; — with protocols
            for maintaining psychological sovereignty, reclaiming epistemic autonomy, and building
            the mental clarity necessary to function effectively in a period of extreme ontological
            disruption. The two volumes are designed to be read together; the practical guidance of
            Volume II presupposes the analytical foundation of Volume I.
          </p>
          <p>
            <strong>Volume III: The Bigger World</strong> covers the same territory at a level accessible
            to younger readers and families encountering these ideas for the first time. It presents the
            universe as larger, stranger, and more wonderful than conventional education suggests —
            without the complexity or intensity appropriate to adult readers engaging the full
            evidentiary record.
          </p>

          <h2>Suggested Reading Paths</h2>

          <h3>For Researchers and Academics</h3>
          <p>
            Begin with <Link href="/the-next-human-ontology/chapter-1" className="text-accent hover:underline underline-offset-4">Volume I, Chapter 1</Link> (the Triple Singularity framework and epistemological methodology),
            then proceed to <Link href="/the-next-human-ontology/chapter-5" className="text-accent hover:underline underline-offset-4">Chapter 5</Link> (Physics of Consciousness) before returning to
            <Link href="/the-next-human-ontology/chapter-2" className="text-accent hover:underline underline-offset-4"> Chapter 2</Link> (Architecture of Secrecy). The analytical posture of
            Chapter 1 establishes the evidentiary standards applied throughout; Chapter 5 provides
            the scientific framework that makes the contact phenomena of Chapters 4, 6, and 7
            intelligible; and Chapter 2 documents the institutional structures that have prevented
            this material from reaching mainstream discourse. The <Link href="/glossary" className="text-accent hover:underline underline-offset-4">Glossary</Link> is available for
            specialized terminology throughout.
          </p>

          <h3>For General Readers and Newcomers</h3>
          <p>
            Begin with <Link href="/the-great-convergence" className="text-accent hover:underline underline-offset-4">The Great Convergence essay</Link>, which provides the fullest overview of
            all three threads — AI, NHI disclosure, and consciousness physics — in a single accessible
            document. Then move to <Link href="/the-next-human-ontology/chapter-1" className="text-accent hover:underline underline-offset-4">Volume I, Chapter 1</Link> for the foundational analytical
            framework. If terms are unfamiliar, the <Link href="/glossary" className="text-accent hover:underline underline-offset-4">Glossary</Link> defines all specialized
            vocabulary used across the site.
          </p>

          <h3>For Parents</h3>
          <p>
            Begin with <Link href="/the-bigger-world" className="text-accent hover:underline underline-offset-4">Volume III</Link> for age-appropriate context you can share with younger
            readers, then consult <Link href="/the-sovereign-mind" className="text-accent hover:underline underline-offset-4">Volume II</Link> for practical guidance on supporting
            children and families through periods of rapid social and informational disruption.
            Volume II&apos;s coverage of maintaining psychological stability, teaching epistemic
            discernment, and building resilience to ontological shock is directly relevant to
            parenting through an unprecedented informational environment.
          </p>

          <h3>For Journalists and Congressional Staff</h3>
          <p>
            Begin with <Link href="/the-next-human-ontology/chapter-2" className="text-accent hover:underline underline-offset-4">Volume I, Chapter 2</Link> (Architecture of Secrecy) for the
            legislative, financial, and administrative structures surrounding UAP concealment, then
            <Link href="/the-next-human-ontology/chapter-3" className="text-accent hover:underline underline-offset-4"> Chapter 3</Link> (Energy Suppression) for the economic and institutional
            stakes that make disclosure resistant, then the <Link href="/timeline" className="text-accent hover:underline underline-offset-4">Timeline</Link> for the
            chronological record of key events from 1947 to the present. The <Link href="/whos-who" className="text-accent hover:underline underline-offset-4">Who&apos;s Who</Link> directory
            provides credentials and institutional affiliations for all key figures cited.
          </p>

          <h2>Additional Resources</h2>
          <p>
            The <Link href="/glossary" className="text-accent hover:underline underline-offset-4">Glossary</Link> defines 55 specialized terms across UAP research, physics, and
            institutional analysis. The <Link href="/timeline" className="text-accent hover:underline underline-offset-4">Timeline</Link> provides a chronological record of
            key events from 1947 to 2026. The <Link href="/whos-who" className="text-accent hover:underline underline-offset-4">Who&apos;s Who</Link> directory covers 30 key
            figures with credentials, affiliations, and specific contributions. Sources are
            cited by chapter in the <Link href="/the-next-human-ontology/bibliography" className="text-accent hover:underline underline-offset-4">Bibliography</Link>.
          </p>

        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Back to Library
          </Link>
        </div>
      </main>
    </>
  );
}
