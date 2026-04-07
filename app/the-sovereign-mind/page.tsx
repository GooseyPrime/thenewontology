import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";
import VisitorCounter from "@/components/VisitorCounter";

export const metadata: Metadata = {
  title: "The Sovereign Mind",
  description:
    "Volume II: Protocols for psychological sovereignty — navigating ontological shock, reclaiming autonomy, surviving the AI transition and NHI disclosure, and building unshakeable clarity.",
  alternates: { canonical: "https://thenewontology.life/the-sovereign-mind" },
  openGraph: {
    title: "The Sovereign Mind — Volume II",
    description:
      "Volume II: How to survive, adapt, and thrive in the age of non-human intelligence. Practical protocols for psychological, material, cognitive, and civilizational sovereignty.",
    url: "https://thenewontology.life/the-sovereign-mind",
    type: "article",
  },
};

const parts = [
  {
    label: "Part I — Psychological Sovereignty",
    subtitle: "Before you can survive institutional collapse, energy transitions, or contact with non-human intelligence, you must survive the demolition of your own worldview.",
    chapters: [
      { n: 1, slug: "chapter-1", title: "The Anatomy of Ontological Shock", desc: "What happens to the human mind when foundational assumptions about reality are destroyed. Neuropsychology, identity layers, and the framework for navigating each stage." },
      { n: 2, slug: "chapter-2", title: "Information Warfare and Epistemic Self-Defense", desc: "The four-tier evidence framework, chain-of-custody thinking, the disinformation taxonomy, and how to build a personal intelligence apparatus." },
      { n: 3, slug: "chapter-3", title: "Emotional Resilience in a Post-Anthropocentric World", desc: "The psychological survival toolkit — grief frameworks, community as immune system, high-strangeness encounter protocol, and protecting vulnerable populations." },
    ],
  },
  {
    label: "Part II — Material Sovereignty",
    subtitle: "Pragmatic preparation for systemic disruption across energy, finance, food, and community.",
    chapters: [
      { n: 4, slug: "chapter-4", title: "The Energy Transition You Won't See Coming", desc: "Fusion timelines, LENR breakthroughs, exotic energy scenarios, and practical household energy resilience strategies." },
      { n: 5, slug: "chapter-5", title: "Financial Survival in the Interregnum", desc: "The $30 trillion stranded asset problem, the defense contractor paradox, hedging against paradigm shift, and post-scarcity preparation." },
      { n: 6, slug: "chapter-6", title: "Food, Water, and Community Resilience", desc: "The 90-day baseline, community resilience networks, the urban vs. rural calculus, and the skills that matter in a transition." },
    ],
  },
  {
    label: "Part III — Cognitive Sovereignty",
    subtitle: "The intellectual tools needed to navigate a world where AI, NHI, and consciousness research are rewriting the operating manual.",
    chapters: [
      { n: 7, slug: "chapter-7", title: "Living With AI — Neither Servant Nor God", desc: "What AI actually is now, economic displacement timelines, irreducibly human skills, and how to use AI as a cognitive partner without epistemic outsourcing." },
      { n: 8, slug: "chapter-8", title: "The Consciousness Toolkit", desc: "Meditation as neurological training, the Gateway Process demystified, lucid dreaming and non-ordinary states, and the caudate-putamen and intuitive capacity." },
      { n: 9, slug: "chapter-9", title: "First Contact Protocol — A Personal Field Manual", desc: "Encounter categories, immediate response protocol, documentation and reporting, and the hitchhiker effect and post-encounter hygiene." },
    ],
  },
  {
    label: "Part IV — Civilizational Sovereignty",
    subtitle: "What humanity must build collectively to navigate the convergence — governance, spirituality, and ethics.",
    chapters: [
      { n: 10, slug: "chapter-10", title: "Governance After the Nation-State", desc: "Why the nation-state model breaks under NHI contact, networked governance models, the global coordination problem, and personal political agency." },
      { n: 11, slug: "chapter-11", title: "The Spiritual Transition", desc: "The asymmetry of shock across traditions, theological resilience, the experiencer-mystic convergence, and building a post-disclosure spiritual practice." },
      { n: 12, slug: "chapter-12", title: "What We Owe Each Other", desc: "Expanding the moral circle to include NHI and AI, the moral obligation of disclosure, intergenerational responsibility, and the case for radical hope." },
    ],
  },
];

export default function TheSovereignMindPage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link href="/" className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>

        <p className="section-title">Volume II</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-4">The Sovereign Mind</h1>
        <p className="font-serif text-muted text-lg mb-8">How to Survive, Adapt, and Thrive in the Age of Non-Human Intelligence — A Practical Guide for Adults</p>
        <div className="h-px bg-border mb-10" />

        <div className="prose prose-invert mb-12">
          <p>Where Volume I maps the territory, Volume II equips you to navigate it. This book assumes the reader has internalized the core thesis: non-human intelligence exists, artificial superintelligence is arriving, consciousness is more fundamental than matter, and the institutional structures governing human civilization are approaching a phase transition. The question is no longer <em>what is happening</em>. The question is <em>what you do about it</em>.</p>
          <p className="text-muted text-sm italic">Target audience: Adults 18+. No prior UAP/AI expertise required. Tone: direct, unsentimental, action-oriented — Nassim Taleb meets Carl Sagan meets a wilderness survival manual.</p>
        </div>

        {parts.map((part) => (
          <div key={part.label} className="mb-12">
            <h2 className="font-sans text-xl font-semibold text-accent mb-1">{part.label}</h2>
            <p className="font-serif text-muted text-sm mb-6 italic">{part.subtitle}</p>
            <div className="flex flex-col gap-4">
              {part.chapters.map((ch) => (
                <Link key={ch.slug} href={`/the-sovereign-mind/${ch.slug}`} className="block p-5 rounded-lg border border-border hover:border-accent transition-colors no-underline group">
                  <div className="flex items-start gap-4">
                    <span className="section-title text-muted mt-1 shrink-0">Ch {ch.n}</span>
                    <div>
                      <h3 className="font-sans font-semibold text-text group-hover:text-accent transition-colors mb-1">{ch.title}</h3>
                      <p className="font-serif text-muted text-sm leading-relaxed">{ch.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-8">
          <Link href="/the-sovereign-mind/bibliography" className="block p-5 rounded-lg border border-border hover:border-accent transition-colors no-underline group">
            <div className="flex items-start gap-4">
              <span className="section-title text-muted mt-1 shrink-0">Index</span>
              <div>
                <h3 className="font-sans font-semibold text-text group-hover:text-accent transition-colors mb-1">Bibliography &amp; References</h3>
                <p className="font-serif text-muted text-sm">Complete consolidated index of all sources, studies, documents, and individuals referenced across all twelve chapters.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
          <Link href="/the-next-human-ontology" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Volume I — The Next Human Ontology
          </Link>
          <VisitorCounter pageUrl="https://thenewontology.life/the-sovereign-mind" />
          <Link href="/the-bigger-world" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            Volume III — The Bigger World <span>→</span>
          </Link>
        </div>
      </main>
    </>
  );
}
