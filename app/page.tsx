import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

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
            The documents contained within this site present{" "}
            <strong>verified, factual information</strong>. Where AI has been
            employed for literary accuracy and readability, the underlying
            substance has been cross-validated across multiple independent AI
            systems, each drawing from distinct and extensive data corpora. No
            speculative or unverified content has been published. Readers are
            encouraged to conduct their own due diligence.
          </p>
        </section>

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
