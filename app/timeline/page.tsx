import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "Timeline of Disclosure | The New Ontology",
  description:
    "A chronological timeline of key events in UAP disclosure, NHI research, consciousness science, and the architecture of secrecy from 1947 to 2026.",
  alternates: { canonical: "https://thenewontology.life/timeline" },
  openGraph: {
    title: "Timeline of Disclosure | The New Ontology",
    description:
      "A chronological timeline of key events in UAP disclosure, NHI research, consciousness science, and the architecture of secrecy from 1947 to 2026.",
    url: "https://thenewontology.life/timeline",
    type: "article",
  },
};

const events = [
  { date: "1947", event: "Roswell incident; modern UAP era begins" },
  { date: "1952", event: "Washington, D.C. UAP flap; Robertson Panel convened" },
  { date: "1969", event: "Vallée publishes Passport to Magonia, proposing interdimensional hypothesis" },
  { date: "1977", event: "Brazil's Operation Prato; Monroe Institute's Gateway program assessed by Army Intelligence" },
  { date: "1982–1990", event: "25+ Marconi/GEC defense scientists die under suspicious circumstances" },
  { date: "1989", event: "Bob Lazar goes public; cold fusion announced and suppressed" },
  { date: "1994", event: "Sherman family begins experiencing phenomena at Utah ranch" },
  { date: "1995", event: "Project Stargate terminated by CIA" },
  { date: "1996", event: "Robert Bigelow purchases Skinwalker Ranch" },
  { date: "1999", event: "France's COMETA report concludes UAP are \"almost certain physical reality\"" },
  { date: "2002", event: "Wilson-Davis conversation (alleged)" },
  { date: "2004", event: "USS Nimitz Tic Tac encounter; Eugene Mallove murdered" },
  { date: "2007", event: "Chris Bledsoe's Cape Fear River encounter; DIA scientist visits Skinwalker Ranch" },
  { date: "2008", event: "AAWSAP/BAASS created with $22M DIA funding; Vatican astronomer discusses ET \"brothers\"" },
  { date: "2012", event: "Bledsoe's first encounter with \"The Lady\"" },
  { date: "2017", event: "NYT reveals Pentagon's secret UAP program; TTSA founded" },
  { date: "2019", event: "Pasulka publishes American Cosmic (Oxford UP)" },
  { date: "2020", event: "Pentagon officially declassifies three Navy UAP videos" },
  { date: "2022", event: "AARO established; Nolan-Vallée materials analysis published in peer review" },
  { date: "Jul 2023", event: "David Grusch testifies before Congress under oath" },
  { date: "Dec 2023", event: "UAPDA gutted in FY2024 NDAA; eminent domain clause removed" },
  { date: "Mar 2024", event: "AARO historical report finds \"no evidence\" — widely disputed" },
  { date: "May 2024", event: "Karl Nell states \"zero doubt\" NHI exists at SALT conference" },
  { date: "Aug 2024", event: "Elizondo publishes Imminent, #1 NYT bestseller" },
  { date: "Nov 2024", event: "House hearing reveals Immaculate Constellation; AARO reports 21 \"true anomalies\"" },
  { date: "Dec 2024", event: "UAPDA blocked for second consecutive year" },
  { date: "Mar 2025", event: "Grusch hired as Congressional adviser; Matthew Brown self-identifies as IC report author" },
  { date: "Apr 2025", event: "COGITATE study published in Nature; Koch loses 1998 bet with Chalmers" },
  { date: "May 2025", event: "Mellon states \"the world is not ready\"; Nell presents 72 NHI hypotheses" },
  { date: "Jun 2025", event: "European UAP/NHI Disclosure Summit held" },
  { date: "Jul 2025", event: "Coulthart claims \"Tic-Tac is Lockheed Martin\"" },
  { date: "Aug 2025", event: "UBC LENR results published in Nature" },
  { date: "Sep 2025", event: "New whistleblowers testify; George Knapp testifies under oath" },
  { date: "Nov 2025", event: "Strømme publishes consciousness field paper in AIP Advances (selected as best paper of issue)" },
  { date: "Dec 2025", event: "UAPDA blocked for third time; McConnell staffer identified" },
  { date: "Feb 2026", event: "Trump directs UAP file declassification; Navy denies 78 UAP photos; aliens.gov registered" },
  { date: "Mar 2026", event: "AI × NHI Convergence Summit; Luna recommends AARO be disbanded; Japan's 80-member parliamentary UAP caucus holds Diet session" },
  { date: "Apr 2026", event: "Lazar returns to Joe Rogan; new S-4 documentary released" },
];

export default function TimelinePage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-3xl mx-auto" style={{ zIndex: 1 }}>
        <Link
          href="/"
          className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Home
        </Link>
        <p className="section-title">Chronological Record</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-4">
          Timeline of Disclosure
        </h1>
        <p className="font-serif text-muted text-sm mb-10 leading-relaxed">
          Key events in UAP disclosure, NHI research, consciousness science, and the architecture of secrecy — from 1947 to the present.
        </p>
        <div className="h-px bg-border mb-12" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-24 top-0 bottom-0 w-px"
            style={{ background: "rgba(155,188,255,0.15)" }}
            aria-hidden="true"
          />

          <ol className="space-y-0">
            {events.map((item, idx) => (
              <li
                key={idx}
                className="relative flex items-start gap-0 group"
              >
                {/* Date column */}
                <div className="w-24 flex-shrink-0 pt-4 pr-4 text-right">
                  <span className="font-mono text-xs font-semibold text-accent/70 group-hover:text-accent transition-colors leading-tight">
                    {item.date}
                  </span>
                </div>

                {/* Dot */}
                <div className="flex-shrink-0 relative z-10 mt-5">
                  <div
                    className="w-2 h-2 rounded-full border border-accent/40 group-hover:border-accent group-hover:bg-accent/20 transition-all"
                    style={{ background: "rgba(5,5,15,0.9)" }}
                  />
                </div>

                {/* Event */}
                <div
                  className={`flex-1 ml-5 py-4 px-5 mb-1 rounded-md text-sm font-serif text-text leading-relaxed ${
                    idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  } group-hover:bg-white/[0.04] transition-colors`}
                >
                  {item.event}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex gap-6 flex-wrap">
          <Link href="/" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Back to Library
          </Link>
          <Link href="/the-next-human-ontology/chapter-2" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            Architecture of Secrecy →
          </Link>
        </div>
      </main>
    </>
  );
}
