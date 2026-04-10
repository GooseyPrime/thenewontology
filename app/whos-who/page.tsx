import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "Who's Who | The New Ontology",
  description:
    "Key figures in UAP disclosure, consciousness research, NHI investigation, and the architecture of secrecy — credentials, affiliations, and specific contributions cited across The New Ontology.",
  alternates: { canonical: "https://thenewontology.life/whos-who" },
  openGraph: {
    title: "Who's Who | The New Ontology",
    description:
      "Key figures in UAP disclosure, consciousness research, NHI investigation, and the architecture of secrecy.",
    url: "https://thenewontology.life/whos-who",
    type: "article",
  },
};

const figures = [
  {
    name: "John Alexander",
    entry:
      "Retired U.S. Army Colonel; former head of the Pentagon's non-lethal weapons program. Author of UFOs: Myths, Conspiracies, and Realities (2011). A rare insider who investigated UAP phenomena through official channels and concluded they are real but resisted simple explanation.",
  },
  {
    name: "Robert Bigelow",
    entry:
      "Aerospace entrepreneur and founder of Bigelow Aerospace Advanced Space Studies (BAASS). Funded AAWSAP under a $22M DIA contract (2008). Owner of Skinwalker Ranch (1996–2016); hosted one of the most intensive multi-year scientific investigations of UAP and anomalous phenomena ever conducted.",
  },
  {
    name: "Chris Bledsoe",
    entry:
      "North Carolina contactee whose decade-plus interactions with a luminous feminine NHI entity called 'The Lady' have been investigated by NASA scientists, CIA officers, and MUFON researchers. His contact experiences include apparent telepathic communication, healing events, and a prophecy referencing the 2026 Regulus/Sphinx astronomical alignment.",
  },
  {
    name: "Eric Davis",
    entry:
      "Physicist; senior research scientist at Earthtech International. Co-author of the alleged Wilson-Davis memo (2002), allegedly recording a conversation in which Vice Admiral Wilson was denied access to a contractor-held UAP program. Has neither confirmed nor denied the memo's authenticity, citing classification obligations.",
  },
  {
    name: "Luis Elizondo",
    entry:
      "Former DIA counterintelligence officer; director of AATIP (2010–2017). Resigned citing ethical objections. Author of Imminent (2024), #1 New York Times bestseller. Co-founded TTSA. Primary source establishing the 'Five Observables' as technical descriptors for UAP. Has confirmed UAP-nuclear nexus publicly.",
  },
  {
    name: "Tim Gallaudet",
    entry:
      "Rear Admiral (Ret.), U.S. Navy; former Acting NOAA Administrator; oceanographer. Member of the Sol Foundation. Has stated publicly that UAP phenomena are real and have been documented extensively by military platforms. Participated in Japan's 2025 Diet session UAP briefing.",
  },
  {
    name: "David Grusch",
    entry:
      "Former National Reconnaissance Office senior analyst and UAP Task Force representative. Testified under oath before the House Oversight Committee (July 2023) alleging a multi-decade non-human intelligence recovery and reverse-engineering program. Hired as Congressional adviser to Rep. Eric Burlison (March 2025).",
  },
  {
    name: "Stuart Hameroff",
    entry:
      "Anesthesiologist and consciousness researcher at the University of Arizona. Co-developer with Roger Penrose of Orchestrated Objective Reduction (Orch-OR), which proposes consciousness arises from quantum computations in neural microtubules. Has actively integrated experimental evidence from microtubule anesthetic studies since 2015.",
  },
  {
    name: "Donald Hoffman",
    entry:
      "Cognitive scientist at UC Irvine. Developed the Interface Theory of Perception and Conscious Realism through extensive evolutionary game theory modeling. Author of The Case Against Reality (W.W. Norton, 2019). His work implies UAP 'violations of physical law' may represent operations at a level more fundamental than the perceptual interface.",
  },
  {
    name: "Colm Kelleher",
    entry:
      "Molecular biologist; lead scientist at BAASS/NIDSci during the Skinwalker Ranch investigation (1996–2004, 2008–2010). Co-author of Hunt for the Skinwalker (2005) with George Knapp. Documented the hitchhiker effect — post-encounter anomalous phenomena following witnesses off-site — in systematic detail.",
  },
  {
    name: "Sean Kirkpatrick",
    entry:
      "Former AARO Director (2022–2023). Published op-ed concluding 'no credible evidence' of extraterrestrial craft while admitting he lobbied against the UAP Records Review Board. Called 'a documented liar' on the Congressional record by Representative Anna Paulina Luna.",
  },
  {
    name: "Jon Kosloski",
    entry:
      "Successor to Sean Kirkpatrick as AARO Director; NSA researcher with quantum optics background. Acknowledged 21 UAP cases his physics and engineering background cannot explain — a markedly different posture than his predecessor's categorical denial.",
  },
  {
    name: "Avi Loeb",
    entry:
      "Harvard astrophysicist; former chair of Harvard's astronomy department. Founder of the Galileo Project, which deploys AI-assisted sensor arrays to systematically search for extraterrestrial artifacts. Led the Pacific Ocean expedition that recovered spherules from the first confirmed interstellar object, CNEOS 2014-01-08.",
  },
  {
    name: "Anna Paulina Luna",
    entry:
      "U.S. Representative (R-FL); co-chair of the House UAP Caucus. Called AARO's Sean Kirkpatrick 'a documented liar' on the Congressional record. Introduced legislation requiring UAP whistleblower protection and ordered AARO be disbanded as of 2026. A leading legislative voice for disclosure accountability.",
  },
  {
    name: "Nancy Mace",
    entry:
      "U.S. Representative (R-SC). Conducted public inquiries characterizing AARO's secrecy as excessive and documenting credible reports of whistleblower intimidation. Hosted a July 2023 House Oversight Committee hearing on UAP whistleblowers that included David Grusch's landmark testimony.",
  },
  {
    name: "Joe McMoneagle",
    entry:
      "U.S. Army remote viewer (Warrant Officer, Ret.); one of the most documented Project Stargate operatives. Author of Mind Trek (1993). His operational remote viewing record, partially declassified, includes claimed contributions to intelligence collection confirmed by Stargate program directors.",
  },
  {
    name: "Chris Mellon",
    entry:
      "Former Deputy Assistant Secretary of Defense for Intelligence; former Senate Intelligence Committee staff director. Co-founded TTSA with Elizondo. Leaked the Nimitz encounter videos to the New York Times (2017). Called the AARO Historical Report 'the most error-ridden and unsatisfactory' he had encountered. Sol Foundation member.",
  },
  {
    name: "Karl Nell",
    entry:
      "Retired U.S. Army Colonel; former Army attaché to the UAP Task Force. Aerospace executive. Stated at the 2024 SALT conference that he has 'zero doubt' non-human intelligence exists and interacts with humanity. Presented a five-phase disclosure roadmap at Stanford's Sol Foundation Symposium (2023); targets full transparency by October 2030.",
  },
  {
    name: "Garry Nolan",
    entry:
      "Stanford University immunologist; inventor of Hyperion mass cytometry platform (licensed to Fluidigm). Conducted MRI studies of over 100 military and intelligence personnel documenting extreme caudate-putamen hypermorphism in UAP experiencers. Co-published materials analysis of alleged UAP samples with Jacques Vallée in Progress in Aerospace Sciences (2022). Co-founder of the Sol Foundation.",
  },
  {
    name: "Diana Walsh Pasulka",
    entry:
      "Professor of religious studies at UNC Wilmington; author of American Cosmic (Oxford UP, 2019) and Encounters (2023). Studies the sociological and religious dimensions of UAP belief, documenting scientists, military professionals, and engineers who privately hold UAP experiences as central to their lives and work.",
  },
  {
    name: "Hal Puthoff",
    entry:
      "Physicist; co-director (with Russell Targ) of SRI International's remote viewing research program under CIA/DIA contract. Later joined Elizondo's TTSA as a director. Has stated publicly that he has seen classified evidence of recovered non-human materials. Founded the Institute for Advanced Studies at Austin.",
  },
  {
    name: "Mike Rogers",
    entry:
      "Former U.S. Representative (R-MI); former Chair of the House Permanent Select Committee on Intelligence. Federal Election Commission records document $143,000 in contributions from Lockheed Martin PAC and associated personnel. Critics have linked his committee's oversight role to repeated UAPDA dilution.",
  },
  {
    name: "Jim Semivan",
    entry:
      "Retired CIA Senior Intelligence Service officer (25 years). Co-founder of TTSA. Investigated the Chris Bledsoe contact case. Has stated publicly that non-human intelligence is real and interacts with humanity. One of the most credentialed intelligence community figures to make unequivocal public statements about NHI reality.",
  },
  {
    name: "Maria Strømme",
    entry:
      "Professor of nanotechnology at Uppsala University; one of Europe's most-cited applied physics researchers. Published 'A Field Theory of Consciousness' in AIP Advances (November 2025), selected as best paper of the issue. Proposes consciousness as a fundamental physical field prior to and generative of spacetime — with testable predictions.",
  },
  {
    name: "Ingo Swann",
    entry:
      "New York artist and pioneering remote viewer; co-developer (with Hal Puthoff and Russell Targ) of the 'coordinate remote viewing' protocol at SRI International. Author of Penetration (1998), describing claimed classified remote viewing sessions of non-human activity on the Moon. His operational records remain partially classified.",
  },
  {
    name: "Matthew Szydagis",
    entry:
      "Physicist at the University at Albany (SUNY); developer of the NEST radiation detection simulation. Applied statistical modeling to UAP disclosure scenarios in a series of papers in Limina: The Journal of UAP Studies, estimating mean catastrophic disclosure year at 2040 based on surveillance technology proliferation.",
  },
  {
    name: "Mike Turner",
    entry:
      "U.S. Representative (R-OH); former Chair of the House Permanent Select Committee on Intelligence. His district geographically encircles Wright-Patterson Air Force Base. FEC records document $186,250 from Lockheed Martin PAC; critics have argued his committee's oversight role correlates with UAPDA dilution.",
  },
  {
    name: "Jacques Vallée",
    entry:
      "French-American astrophysicist, computer scientist, and venture capitalist. A pioneer of both artificial intelligence (astrophysics computing at Northwestern, 1960s) and UAP research. Author of Passport to Magonia (1969), which proposed the interdimensional/control system hypothesis. Co-published materials analysis with Garry Nolan (2022). Sol Foundation member.",
  },
  {
    name: "Thomas Wilson",
    entry:
      "Vice Admiral (Ret.); former Director of the Defense Intelligence Agency (1999–2002). Central figure in the Wilson-Davis memo, which alleges he was denied access to a contractor-held UAP program despite his position. Wilson has publicly denied the meeting occurred. The memo was entered into the Congressional Record as SD001 in November 2024.",
  },
  {
    name: "Roger Penrose",
    entry:
      "Mathematical physicist; Nobel Prize laureate (2020); emeritus professor at Oxford. Co-developer (with Stuart Hameroff) of Orchestrated Objective Reduction (Orch-OR). Author of The Emperor's New Mind (1989) and Shadows of the Mind (1994), arguing consciousness involves non-computable quantum processes beyond algorithmic replication.",
  },
];

export default function WhosWhoPage() {
  const sorted = [...figures].sort((a, b) => {
    const lastA = a.name.split(" ").at(-1) ?? "";
    const lastB = b.name.split(" ").at(-1) ?? "";
    return lastA.localeCompare(lastB);
  });

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
        <p className="section-title">Reference</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-4">
          Who&apos;s Who
        </h1>
        <p className="font-serif text-muted text-sm mb-10 leading-relaxed">
          30 key figures in UAP disclosure, consciousness research, NHI investigation, and the architecture of secrecy — organized alphabetically by last name.
        </p>
        <div className="h-px bg-border mb-12" />

        <dl className="space-y-8">
          {sorted.map((figure) => (
            <div key={figure.name} className="group">
              <dt className="font-sans text-base font-semibold text-accent mb-2">
                {figure.name}
              </dt>
              <dd className="font-serif text-text text-sm leading-relaxed pl-4 border-l border-border group-hover:border-accent/40 transition-colors">
                {figure.entry}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Back to Library
          </Link>
        </div>
      </main>
    </>
  );
}
