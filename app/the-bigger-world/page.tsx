import type { Metadata } from "next";
import Link from "next/link";
import VisitorCounter from "@/components/VisitorCounter";

export const metadata: Metadata = {
  title: "The Bigger World",
  description:
    "Volume III: A guide for young explorers — the universe is larger, stranger, and more wonderful than you were ever told. Consciousness, connections, and a new story for Earth.",
  alternates: { canonical: "https://thenewontology.life/the-bigger-world" },
  openGraph: {
    title: "The Bigger World — Volume III",
    description:
      "Volume III: A guide for young explorers — the universe is larger, stranger, and more wonderful than you were ever told.",
    url: "https://thenewontology.life/the-bigger-world",
    type: "article",
  },
};

const chapters = [
  {
    number: 1,
    slug: "chapter-1",
    title: "The Triple Singularity & The Ontological Shock",
    description:
      "Three giant shifts — AI, mysterious sky phenomena, and consciousness science — are changing what we know about the universe and our place in it. Here's how to stay grounded while the world expands.",
  },
  {
    number: 2,
    slug: "chapter-2",
    title: "The Architecture of Secrecy",
    description:
      "Governments keep some secrets for real reasons — but information always finds its way out. Learn to think clearly and build your own \"known vs. unknown\" map when you don't have all the pieces.",
  },
  {
    number: 3,
    slug: "chapter-3",
    title: "The Unexplained Things in the Sky",
    description:
      "Pilots, governments, and scientists are taking strange sky sightings seriously. Explore the hypotheses — from secret technology to natural phenomena — and sharpen your inner detective.",
  },
  {
    number: 4,
    slug: "chapter-4",
    title: "Your Amazing, Mysterious Brain",
    description:
      "Your brain might be more like a cosmic antenna than a simple computer. Discover the hard problem of consciousness, quantum effects in neurons, and how attention itself can reshape your mind.",
  },
  {
    number: 5,
    slug: "chapter-5",
    title: "How to Think When Nobody Has the Answers",
    description:
      "Use a confidence scale, dodge the five thinking traps, and learn the art of steelmanning — tools that help you navigate a world where even the experts are still figuring things out.",
  },
  {
    number: 6,
    slug: "chapter-6",
    title: "Feelings Are Data Too",
    description:
      "Emotions aren't distractions — they're signals. Build your anxiety toolkit, learn to tell actionable problems from observable ones, and discover your personal support constellation.",
  },
  {
    number: 7,
    slug: "chapter-7",
    title: "Building Your Superpower Toolkit",
    description:
      "Master spaced repetition and the Feynman technique, make things with your hands, understand technology without worshipping it, and practise the superpower of simply being present.",
  },
  {
    number: 8,
    slug: "chapter-8",
    title: "Humans and Other Intelligences — A History",
    description:
      "Octopuses, crows, dolphins, and ancient mythologies all point to the same radical idea: intelligence is far broader than we were taught, and it has always surrounded us.",
  },
  {
    number: 9,
    slug: "chapter-9",
    title: "What Kind of World Do You Want to Build?",
    description:
      "You are not powerless. History belongs to the curious, the brave, and the kind. Explore the skills the world needs and write a letter to the person you are becoming.",
  },
  {
    number: 10,
    slug: "chapter-10",
    title: "A Message from the Authors",
    description:
      "What we actually know, what we believe, and what we ask of you — a closing invitation to stay curious, stay kind, and stay brave as the universe keeps getting bigger.",
  },
];

export default function TheBiggerWorldPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a1060 35%, #0d2a1a 65%, #1a0a28 100%)",
      }}
    >
      {/* Decorative floating circles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute rounded-full" style={{ width: 300, height: 300, top: "5%", left: "-5%", background: "rgba(250,204,21,0.06)", filter: "blur(60px)" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, top: "20%", right: "-10%", background: "rgba(167,139,250,0.07)", filter: "blur(60px)" }} />
        <div className="absolute rounded-full" style={{ width: 200, height: 200, bottom: "15%", left: "10%", background: "rgba(52,211,153,0.07)", filter: "blur(60px)" }} />
        <div className="absolute rounded-full" style={{ width: 350, height: 350, bottom: "5%", right: "5%", background: "rgba(251,146,60,0.06)", filter: "blur(60px)" }} />
        <div className="absolute rounded-full" style={{ width: 150, height: 150, top: "50%", left: "40%", background: "rgba(96,165,250,0.06)", filter: "blur(60px)" }} />
      </div>

      <div className="relative z-10 px-6 py-16 max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-300/70 hover:text-violet-200 text-xs uppercase tracking-widest font-sans mb-10 no-underline transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Library
        </Link>

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-violet-300/60 text-xs uppercase tracking-widest font-sans mb-2">Volume III</p>
          <h1
            className="font-sans text-5xl md:text-6xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #facc15, #a78bfa, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Bigger World
          </h1>
          <p className="text-violet-200/70 font-serif text-lg">
            A guide for young explorers of an amazing universe
          </p>
        </div>

        {/* Intro card */}
        <div
          className="rounded-2xl p-7 mb-8 border"
          style={{
            background: "rgba(167,139,250,0.08)",
            borderColor: "rgba(167,139,250,0.25)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="font-serif text-violet-100 leading-relaxed text-base md:text-lg">
            Did you know that the universe is{" "}
            <span className="text-yellow-300 font-semibold">much bigger</span>,{" "}
            <span className="text-emerald-300 font-semibold">stranger</span>, and more{" "}
            <span className="text-violet-300 font-semibold">wonderful</span> than most
            people were ever taught? This book is your guide to those bigger
            truths — written just for curious young explorers who want to understand
            what is actually going on in the world right now, and who they might
            become in response to it.
          </p>
          <p className="font-serif text-violet-200/70 leading-relaxed text-sm mt-4">
            The three great shifts of our time — the rise of artificial intelligence,
            the opening of government files on unexplained sky phenomena, and
            breathtaking discoveries about the nature of consciousness — are shaping
            the world you will inherit. Each chapter offers tools, stories, and
            exercises to help you think clearly, feel grounded, and act wisely.
          </p>
        </div>

        {/* Chapter cards */}
        <nav className="grid gap-4 mb-10" aria-label="Table of Contents">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/the-bigger-world/${ch.slug}`}
              className="rounded-2xl p-5 border flex items-start gap-4 no-underline transition-colors hover:opacity-90"
              style={{
                background: "rgba(167,139,250,0.07)",
                borderColor: "rgba(139,92,246,0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="text-violet-300/60 text-xs uppercase tracking-widest font-sans shrink-0 w-16 pt-1">
                Ch. {ch.number}
              </span>
              <div>
                <p className="font-sans font-semibold text-white text-base mb-1">{ch.title}</p>
                <p className="font-serif text-violet-200/70 text-sm leading-relaxed">{ch.description}</p>
              </div>
            </Link>
          ))}

          <Link
            href="/the-bigger-world/bibliography"
            className="rounded-2xl p-5 border flex items-start gap-4 no-underline transition-colors hover:opacity-90"
            style={{
              background: "rgba(52,211,153,0.06)",
              borderColor: "rgba(52,211,153,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="text-emerald-300/60 text-xs uppercase tracking-widest font-sans shrink-0 w-16 pt-1">
              Biblio.
            </span>
            <div>
              <p className="font-sans font-semibold text-white text-base mb-1">Comprehensive Bibliography &amp; Resources</p>
              <p className="font-serif text-violet-200/70 text-sm leading-relaxed">
                References, further reading, and resources organised by chapter
                for young explorers and their families.
              </p>
            </div>
          </Link>
        </nav>

        <div className="pt-6 border-t border-violet-800/30 text-center space-y-4">
          <div className="flex justify-center">
            <VisitorCounter pageUrl="https://thenewontology.life/the-bigger-world" />
          </div>
          <Link
            href="/the-sovereign-mind"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-100 font-sans text-sm no-underline hover:underline underline-offset-4 transition-colors"
          >
            <span>←</span> Volume II — The Sovereign Mind
          </Link>
        </div>
      </div>
    </main>
  );
}
