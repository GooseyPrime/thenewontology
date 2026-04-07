import Link from "next/link";

export const metadata = {
  title: "The Bigger World | The New Human Ontology",
};

interface Circle {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string;
}

export default function TheBiggerWorldPage() {
  const circles: Circle[] = [
    { size: 300, top: "5%", left: "-5%", color: "rgba(250,204,21,0.06)" },
    { size: 500, top: "20%", right: "-10%", color: "rgba(167,139,250,0.07)" },
    { size: 200, bottom: "15%", left: "10%", color: "rgba(52,211,153,0.07)" },
    { size: 350, bottom: "5%", right: "5%", color: "rgba(251,146,60,0.06)" },
    { size: 150, top: "50%", left: "40%", color: "rgba(96,165,250,0.06)" },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a1060 35%, #0d2a1a 65%, #1a0a28 100%)",
      }}
    >
      {/* Decorative floating circles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        {circles.map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: c.size,
              height: c.size,
              top: c.top,
              left: c.left,
              right: c.right,
              bottom: c.bottom,
              background: c.color,
              filter: "blur(60px)",
            }}
          />
        ))}
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
            truths — written just for you.
          </p>
        </div>

        {/* Chapter cards */}
        <div className="grid gap-4 mb-10">
          {[
            {
              emoji: "🌌",
              title: "The Universe Is Alive",
              desc: "Science is discovering that the cosmos has qualities we never imagined.",
              color: "from-violet-500/10 to-blue-500/10",
              border: "rgba(139,92,246,0.3)",
            },
            {
              emoji: "🧠",
              title: "Your Mind Is Extraordinary",
              desc: "You have capabilities that researchers are only beginning to understand.",
              color: "from-emerald-500/10 to-teal-500/10",
              border: "rgba(52,211,153,0.3)",
            },
            {
              emoji: "✨",
              title: "Connections That Span the Stars",
              desc: "Everything is connected in ways that make the world feel like magic — because it kind of is.",
              color: "from-yellow-500/10 to-orange-500/10",
              border: "rgba(250,204,21,0.3)",
            },
            {
              emoji: "🌍",
              title: "A New Story for Earth",
              desc: "The story of our planet and its people is being rewritten — and you're part of it.",
              color: "from-pink-500/10 to-rose-500/10",
              border: "rgba(244,114,182,0.3)",
            },
          ].map((chapter) => (
            <div
              key={chapter.title}
              className={`rounded-2xl p-5 border bg-gradient-to-r ${chapter.color} flex items-start gap-4`}
              style={{ borderColor: chapter.border, backdropFilter: "blur(8px)" }}
            >
              <span className="text-3xl">{chapter.emoji}</span>
              <div>
                <h3 className="font-sans font-semibold text-white text-base mb-1">{chapter.title}</h3>
                <p className="font-serif text-violet-200/70 text-sm leading-relaxed">{chapter.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-5 text-center mb-10 border"
          style={{
            background: "rgba(250,204,21,0.06)",
            borderColor: "rgba(250,204,21,0.2)",
          }}
        >
          <p className="text-yellow-200/80 font-serif text-sm leading-relaxed">
            📖 Full chapters are being prepared. Check back soon for your adventure to begin!
          </p>
        </div>

        <div className="pt-6 border-t border-violet-800/30 text-center">
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
