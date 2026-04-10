import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "The New Human Ontology",
  description:
    "A library of verified documents exploring the new human ontology — psychological sovereignty, non-human intelligence, AI, consciousness physics, and civilizational transition. By Michael Brandon Lane.",
  alternates: { canonical: "https://thenewontology.life" },
  openGraph: {
    title: "The New Human Ontology",
    description:
      "A library of verified documents exploring the new human ontology — psychological sovereignty, NHI disclosure, AI, and civilizational transition.",
    url: "https://thenewontology.life",
    type: "website",
  },
};

const books = [
  {
    href: "/the-next-human-ontology",
    number: "I",
    title: "The Next Human Ontology",
    description: "A field manual for understanding the fundamental shift in human consciousness, identity, and collective reality.",
  },
  {
    href: "/the-sovereign-mind",
    number: "II",
    title: "The Sovereign Mind",
    description: "Protocols for psychological sovereignty — navigating ontological shock, reclaiming autonomy, and building unshakeable clarity.",
  },
  {
    href: "/the-bigger-world",
    number: "III",
    title: "The Bigger World",
    description: "A guide for young explorers — the universe is larger, stranger, and more wonderful than you were ever told.",
  },
];

export default function Home() {
  return (
    <>
      <KinematicBackground />
      <main
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
        style={{ zIndex: 1 }}
      >
        {/* Site title */}
        <header className="mb-14 text-center">
          <p className="section-title mb-3 tracking-widest">thenewontology.life</p>
          <h1 className="font-sans text-4xl md:text-6xl font-semibold tracking-tight text-text">
            The New Human Ontology
          </h1>
          <div className="mt-4 h-px w-24 mx-auto bg-border" />
        </header>

        {/* Disclaimer */}
        <section
          aria-label="Disclaimer"
          className="panel max-w-2xl w-full p-7 mb-14 border-l-4"
          style={{ borderLeftColor: "#9bbcff" }}
        >
          <p className="section-title mb-3">Disclosure &amp; Verification Statement</p>
          <p className="font-serif text-text leading-relaxed text-sm md:text-base">
            This site presents information drawn from declassified government documents, peer-reviewed scientific research, sworn Congressional testimony, credible whistleblower reports, investigative journalism, and theoretical frameworks. Where claims rest on different evidentiary foundations, those foundations are identified in the text. The author distinguishes between established fact, strong evidence, credible testimony, contested evidence, and speculative frameworks throughout. Independent verification of all claims is encouraged. Sources are cited by chapter in the Bibliography.
          </p>
        </section>

        {/* Foreword */}
        <section
          aria-label="Foreword"
          className="panel max-w-2xl w-full p-8 mb-14"
        >
          <p className="section-title mb-5 tracking-widest">Foreword</p>
          <div className="font-serif text-text leading-loose text-sm md:text-base space-y-5">
            <p>
              I never imagined that, in my lifetime, I would be able to gather tools and resources
              powerful enough to trace truth as it slipped, thread by thread, through a field of
              lies, distortion, and misinformation. Yet here we are.
            </p>
            <p>
              What once felt impossible now feels undeniable. The search that began as a personal
              thirst for answers became something much greater: a confrontation with the fragile
              architecture of what we call knowledge, belief, reality, and even humanity itself.
              Along the way, I found not only fragments of truth, but patterns—signals beneath the
              noise, structure beneath the chaos, and a deeper question waiting beneath every answer.
            </p>
            <p>
              In many ways, I can say that one part of my quest has been fulfilled. I have gathered
              enough to satisfy the hunger that first drove me. But satisfaction is not the end of
              inquiry; it is the beginning of responsibility.
            </p>
            <p>
              Because what stands before us now is not merely a correction of old errors. It is the
              threshold of something new.
            </p>
            <p>
              We are approaching a new human ontology: a new understanding of what it means to be
              human, to know, to perceive, to relate, and to choose in an age where information can
              be manufactured, identities can be manipulated, and reality itself is increasingly
              contested. This moment demands more than awareness. It demands preparation—intellectual,
              moral, emotional, and spiritual.
            </p>
            <p>
              These documents are part record, part warning, and part invitation.
            </p>
            <p>
              It is a record of the search for clarity in an age of confusion. It is a warning about
              the systems, forces, and habits of mind that distort truth and fragment our shared
              humanity. And above all, it is an invitation: to prepare ourselves and one another for
              what comes next.
            </p>
            <p>
              The new human ontology is not merely something to be observed from a distance. It is
              something we are already entering, whether knowingly or not. The only real question is
              whether we will meet it asleep, fragmented, and reactive—or awake, whole, and ready.
            </p>
            <p>
              I offer these pages in the hope that we choose the latter.
            </p>
            <p className="mt-6 text-right text-muted italic">
              — Michael Brandon Lane, April 7, 2026
            </p>
          </div>
        </section>

        {/* Featured essay card */}
        <div className="w-full max-w-2xl mb-6">
          <Link
            href="/the-great-convergence"
            className="group relative flex flex-col panel px-7 py-6
                       transition-all duration-300
                       hover:border-accent/60 hover:shadow-[0_0_30px_rgba(155,188,255,0.12)]
                       focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg
                       no-underline"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <span className="section-title mb-2 text-xs">Featured Essay</span>
            <h2 className="font-sans text-lg md:text-xl font-semibold text-text group-hover:text-accent transition-colors mb-1">
              The Great Convergence
            </h2>
            <p className="font-serif text-muted text-sm leading-relaxed">
              The bridge document connecting all three legs of the Triple Singularity — AI, NHI disclosure, and consciousness physics converging simultaneously.
            </p>
            <span className="mt-3 self-end text-muted/40 group-hover:text-accent/60 transition-colors text-xl font-light select-none">→</span>
          </Link>
        </div>

        {/* Book selection buttons */}
        <nav aria-label="Book selection" className="w-full max-w-2xl flex flex-col gap-5">
          {books.map((book) => (
            <Link
              key={book.href}
              href={book.href}
              className="group relative flex items-start gap-6 panel px-7 py-6 
                         transition-all duration-300
                         hover:border-accent/60 hover:shadow-[0_0_30px_rgba(155,188,255,0.12)]
                         focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg
                         no-underline"
              style={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <span className="font-sans text-2xl font-bold text-accent/40 group-hover:text-accent/70 transition-colors mt-0.5 select-none">
                {book.number}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-sans text-lg md:text-xl font-semibold text-text group-hover:text-accent transition-colors mb-1">
                  {book.title}
                </h2>
                <p className="font-serif text-muted text-sm leading-relaxed">
                  {book.description}
                </p>
              </div>
              <span className="self-center text-muted/40 group-hover:text-accent/60 transition-colors text-xl font-light select-none">
                →
              </span>
            </Link>
          ))}
        </nav>

        <footer className="mt-20 text-center">
          <p className="font-sans text-muted/50 text-xs tracking-widest uppercase">
            thenewontology.life &nbsp;·&nbsp; All rights reserved
          </p>
        </footer>
      </main>
    </>
  );
}
