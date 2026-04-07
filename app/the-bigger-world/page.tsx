import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata = {
  title: "The Bigger World | The New Human Ontology",
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
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link
          href="/"
          className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>

        <p className="section-title">Volume III</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">
          The Bigger World
        </h1>
        <div className="h-px bg-border mb-10" />

        <div className="prose prose-invert">
          <p className="lead text-muted text-lg">
            Did you know that the universe is much bigger, stranger, and more
            wonderful than most people were ever taught? This book is your guide
            to those bigger truths — written just for curious young explorers who
            want to understand what is actually going on in the world right now,
            and who they might become in response to it.
          </p>

          <p>
            The three great shifts of our time — the rise of artificial
            intelligence, the opening of government files on unexplained sky
            phenomena, and breathtaking discoveries about the nature of
            consciousness — are not just adult concerns. They are shaping the
            world you will inherit. Each chapter offers tools, stories, and
            exercises to help you think clearly, feel grounded, and act wisely
            in the face of the unknown.
          </p>
        </div>

        <nav className="mt-10 space-y-3" aria-label="Table of Contents">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/the-bigger-world/${ch.slug}`}
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
            href="/the-bigger-world/bibliography"
            className="group flex gap-4 rounded-lg border border-border bg-panel p-4 hover:border-accent transition-colors no-underline"
          >
            <span className="section-title shrink-0 w-20 pt-0.5">Biblio.</span>
            <div>
              <p className="font-sans font-medium text-text group-hover:text-accent transition-colors">
                Comprehensive Bibliography &amp; Resources
              </p>
              <p className="text-sm text-muted mt-1 font-serif leading-snug">
                References, further reading, and resources organised by chapter
                for young explorers and their families.
              </p>
            </div>
          </Link>
        </nav>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="section-title mb-4">Also in This Series</p>
          <Link
            href="/the-sovereign-mind"
            className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
          >
            <span>←</span> Volume II — The Sovereign Mind
          </Link>
        </div>
      </main>
    </>
  );
}
