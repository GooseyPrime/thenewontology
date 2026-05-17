import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-bg mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-sans text-lg text-text no-underline hover:no-underline">
              <span className="font-light">The</span>{" "}
              <span className="font-semibold">New Ontology</span>
            </Link>
            <p className="font-mono text-xs text-muted/70 mt-4 max-w-sm leading-relaxed">
              An expansive, multi-volume digital reading platform exploring UAPs,
              interdimensional theories, and the architecture of secrecy.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-4">Core Texts</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/the-next-human-ontology" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                The Next Human Ontology
              </Link>
              <Link href="/the-sovereign-mind" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                The Sovereign Mind
              </Link>
              <Link href="/the-bigger-world" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                The Bigger World
              </Link>
              <Link href="/the-great-convergence" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                The Great Convergence
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-4">Resources</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/timeline" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                Timeline
              </Link>
              <Link href="/whos-who" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                Who&apos;s Who
              </Link>
              <Link href="/network" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                Network
              </Link>
              <Link href="/glossary" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                Glossary
              </Link>
              <Link href="/reading-guide" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                Reading Guide
              </Link>
              <Link href="/about" className="font-mono text-xs text-muted/80 hover:text-text transition-colors no-underline">
                About
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted/60">
            © {new Date().getFullYear()} The New Ontology. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted/50">thenewontology.life</p>
        </div>
      </div>
    </footer>
  );
}
