import type { Metadata } from "next";
import Link from "next/link";
import PlasmaBackground from "@/components/PlasmaBackground";

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
    description:
      "A field manual for understanding the fundamental shift in human consciousness, identity, and collective reality.",
  },
  {
    href: "/the-sovereign-mind",
    number: "II",
    title: "The Sovereign Mind",
    description:
      "Protocols for psychological sovereignty — navigating ontological shock, reclaiming autonomy, and building unshakeable clarity.",
  },
  {
    href: "/the-bigger-world",
    number: "III",
    title: "The Bigger World",
    description:
      "A guide for young explorers — the universe is larger, stranger, and more wonderful than you were ever told.",
  },
];

const appendices = [
  { href: "/glossary", label: "Glossary", desc: "Searchable term database" },
  { href: "/timeline", label: "Timeline", desc: "Convergence chronology" },
  { href: "/whos-who", label: "Who's Who", desc: "Key figures & intelligence" },
  { href: "/reading-guide", label: "Reading Guide", desc: "Navigation protocols" },
];


export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <PlasmaBackground intensity="ambient" />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-20 pb-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-text/60 uppercase mb-3">
                Transmission Active
              </p>
              <h1 className="font-sans text-4xl sm:text-5xl font-light tracking-[-0.03em] text-text mb-4 leading-[1.1]">
                <span className="block">Decode</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-vol3">
                  the signal.
                </span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-muted max-w-lg mb-6 leading-relaxed">
                An expansive, multi-volume digital reading platform exploring the convergence
                of AI, non-human intelligence, and consciousness physics.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/the-next-human-ontology"
                  className="inline-flex items-center justify-center px-6 py-3 font-mono text-xs uppercase tracking-wider border border-accent/50 text-text bg-accent/10 hover:bg-accent/20 hover:border-accent transition-all no-underline"
                >
                  Begin Reading
                </Link>
                <Link
                  href="/reading-guide"
                  className="inline-flex items-center justify-center px-6 py-3 font-mono text-xs uppercase tracking-wider border border-border text-muted hover:text-text hover:border-accent/40 transition-all no-underline"
                >
                  How to Navigate
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <details className="lg:hidden panel p-4 border-accent/20">
                <summary className="font-mono text-xs uppercase tracking-wider text-accent cursor-pointer">
                  Read notice
                </summary>
                <div className="mt-4">
                  <NoticeCard compact />
                </div>
              </details>
              <div className="hidden lg:block">
                <NoticeCard />
              </div>

              <details className="lg:hidden panel p-4 border-accent/20">
                <summary className="font-mono text-xs uppercase tracking-wider text-accent cursor-pointer">
                  Read foreword
                </summary>
                <div className="mt-4">
                  <ForewordCard compact />
                </div>
              </details>
              <div className="hidden lg:block">
                <ForewordCard />
              </div>
            </div>
          </div>

          <p className="hidden lg:block text-center mt-8 font-mono text-[10px] text-muted/50 uppercase tracking-widest">
            Explore ↓
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16 max-w-4xl mx-auto w-full border-t border-border">
        <p className="section-title text-center mb-10">Core Manuscripts</p>
        <nav aria-label="Book selection" className="flex flex-col gap-5">
          {books.map((book) => (
            <Link
              key={book.href}
              href={book.href}
              className="group flex items-start gap-6 panel px-7 py-6 transition-all duration-300 hover:border-accent/50 no-underline"
            >
              <span className="font-sans text-2xl font-bold text-accent/40 group-hover:text-accent/70 transition-colors mt-0.5 select-none">
                {book.number}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-sans text-lg md:text-xl font-semibold text-text group-hover:text-accent transition-colors mb-1">
                  {book.title}
                </h2>
                <p className="font-serif text-muted text-sm leading-relaxed">{book.description}</p>
              </div>
              <span className="self-center text-muted/40 group-hover:text-accent/60 transition-colors text-xl font-light select-none">
                →
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-6">
          <Link
            href="/the-great-convergence"
            className="group flex flex-col panel px-7 py-6 transition-all duration-300 hover:border-accent-vol2/50 no-underline"
          >
            <span className="section-title mb-2 text-xs">Featured Essay</span>
            <h2 className="font-sans text-lg md:text-xl font-semibold text-text group-hover:text-accent-vol2 transition-colors mb-1">
              The Great Convergence
            </h2>
            <p className="font-serif text-muted text-sm leading-relaxed">
              The bridge document connecting all three legs of the Triple Singularity — AI, NHI
              disclosure, and consciousness physics converging simultaneously.
            </p>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {appendices.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="panel p-5 hover:border-accent/40 transition-colors no-underline group"
            >
              <h3 className="font-sans text-sm font-semibold text-text group-hover:text-accent mb-1">
                {item.label}
              </h3>
              <p className="font-mono text-[10px] text-muted">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function NoticeCard({ compact }: { compact?: boolean }) {
  return (
    <aside
      aria-label="Important Notice"
      className={`border border-accent/20 bg-bg/95 backdrop-blur-sm rounded-xl ${compact ? "p-4" : "p-5"}`}
    >
      <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-2">
        Important Notice
      </p>
      <p className="font-mono text-[10px] tracking-[0.15em] text-muted/80 uppercase mb-3">
        Disclosure &amp; Verification Statement
      </p>
      <p className="font-serif text-text text-xs sm:text-sm leading-relaxed">
        This site presents information drawn from declassified government documents, peer-reviewed
        scientific research, sworn Congressional testimony, credible whistleblower reports,
        investigative journalism, and theoretical frameworks. Where claims rest on different
        evidentiary foundations, those foundations are identified in the text. The author
        distinguishes between established fact, strong evidence, credible testimony, contested
        evidence, and speculative frameworks throughout. Independent verification of all claims is
        encouraged. Sources are cited by chapter in the Bibliography. Following the May 8, 2026
        PURSUE Release 01, the site&apos;s posture has shifted from <em>demanding</em> disclosure to{" "}
        <em>independently verifying</em> the records the state has released and tracking what remains
        withheld. The framework above continues to govern that verification work.
      </p>
    </aside>
  );
}

function ForewordCard({ compact }: { compact?: boolean }) {
  return (
    <aside
      aria-label="Foreword"
      className={`border border-accent/20 bg-bg/95 backdrop-blur-sm rounded-xl ${compact ? "p-4" : "p-5"}`}
    >
      <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-3">Foreword</p>
      <div className="font-serif text-text text-xs sm:text-sm leading-relaxed space-y-3">
        <p>
          I never imagined that, in my lifetime, I would be able to gather tools and resources
          powerful enough to trace truth as it slipped, thread by thread, through a field of lies,
          distortion, and misinformation. Yet here we are.
        </p>
        <p>
          What once felt impossible now feels undeniable. The search that began as a personal thirst
          for answers became something much greater: a confrontation with the fragile architecture of
          what we call knowledge, belief, reality, and even humanity itself. Along the way, I found
          not only fragments of truth, but patterns—signals beneath the noise, structure beneath the
          chaos, and a deeper question waiting beneath every answer.
        </p>
        {!compact && (
          <>
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
            <p>These documents are part record, part warning, and part invitation.</p>
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
            <p>I offer these pages in the hope that we choose the latter.</p>
          </>
        )}
        <p className="text-right text-muted italic pt-2">— Michael Brandon Lane, April 7, 2026</p>
      </div>
    </aside>
  );
}
