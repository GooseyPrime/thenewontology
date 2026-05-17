import type { Metadata } from "next";
import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata: Metadata = {
  title: "Glossary | The New Ontology",
  description:
    "Comprehensive glossary of 75+ specialized terms used across The New Ontology — from AARO to Zero-Point Energy.",
  alternates: { canonical: "https://thenewontology.life/glossary" },
  openGraph: {
    title: "Glossary | The New Ontology",
    description:
      "Comprehensive glossary of 75+ specialized terms used across The New Ontology — from AARO to Zero-Point Energy.",
    url: "https://thenewontology.life/glossary",
    type: "article",
  },
};

const terms = [
  {
    term: "3I/ATLAS",
    definition:
      "The third confirmed interstellar object to enter our solar system, discovered July 2025 by the ATLAS survey in Chile. Subject of an extensive anomaly catalog maintained by Avi Loeb; closest approach to Jupiter at the planet's Hill radius on March 16, 2026; currently fading.",
  },
  {
    term: "AARO",
    definition:
      "All-domain Anomaly Resolution Office. The Department of Defense's official UAP investigation body, established 2022. Successor to UAPTF and AATIP. Publishes historical reports and manages incoming UAP reports from military personnel. As of March 22, 2026, Rep. Anna Paulina Luna formally recommended to DOGE that AARO be disbanded and defunded; AARO's role in coordinating PURSUE declassification is ongoing.",
  },
  {
    term: "AAWSAP",
    definition:
      "Advanced Aerospace Weapon System Applications Program. A $22 million DIA-funded program (2008–2010) contracted to Bigelow Aerospace Advanced Space Studies (BAASS) to investigate UAP and anomalous phenomena at Skinwalker Ranch and elsewhere. Produced 38 Defense Intelligence Reference Documents.",
  },
  {
    term: "AATIP",
    definition:
      "Advanced Aerospace Threat Identification Program. The successor to AAWSAP, run informally by Luis Elizondo within the Pentagon (2010–2017) before his resignation. Its existence was revealed by the New York Times in December 2017.",
  },
  {
    term: "Allais Effect",
    definition:
      "A historically documented but contested anomaly in pendulum behavior observed during total solar eclipses, named for French physicist Maurice Allais. The effect's reality is disputed; replication results are mixed. Mentioned in Vol II Ch 2's Project Anchor case study.",
  },
  {
    term: "Analytical Idealism",
    definition:
      "The philosophical position, advanced by Bernardo Kastrup and Donald Hoffman, that consciousness is the only ontological primitive. Physical reality is understood as the extrinsic appearance of mental processes. Matter does not generate mind; mind generates the appearance of matter.",
  },
  {
    term: "Anthropocentrism",
    definition:
      "The worldview placing humanity as the sole apex intelligence in the cosmos, with nation-states holding ultimate authority over the biosphere. NHI disclosure systematically challenges each pillar of this foundational framework of Western civilization.",
  },
  {
    term: "Atomic Energy Act (1954)",
    definition:
      "Federal statute establishing the 'born classified' doctrine: certain information is classified automatically at creation, without requiring an affirmative decision by a government official. Crucially, it places such information outside the standard executive order declassification system.",
  },
  {
    term: "Burgos-Salcedo Synthesis Paper (2026)",
    definition:
      "\"Cosmic Memory, Universal Consciousness, and Biological Meaning,\" European Journal of Theoretical and Applied Sciences, 4(2):171–183. The first peer-reviewed paper to formally integrate Conformal Cyclic Cosmology (Penrose), Orchestrated Objective Reduction (Penrose-Hameroff), and Strømme's Universal Consciousness Field.",
  },
  {
    term: "Caudate-Putamen",
    definition:
      "Basal ganglia structures critical to motor control, executive function, and subconscious goal-planning. Garry Nolan's research documents extreme hypermorphism — synaptic density five to fifteen times normal — in frequent UAP experiencers and remote viewers. A congenital, hereditary trait.",
  },
  {
    term: "Casimir Effect",
    definition:
      "A measurable attractive force between two uncharged parallel conducting plates in close proximity, arising from differential suppression of quantum vacuum fluctuations. Empirically confirmed with high precision; demonstrates the physical reality of zero-point energy in the quantum vacuum.",
  },
  {
    term: "CE-5 (Close Encounter of the Fifth Kind)",
    definition:
      "Human-initiated contact with non-human intelligence, originally proposed and operationalized as a protocol by Steven Greer and the Disclosure Project. Distinguished from CE-1 through CE-4 in the Hynek classification by the human as initiator rather than respondent. Methodologically contested.",
  },
  {
    term: "Chain-of-Custody",
    definition:
      "Evidence tracking methodology ensuring the integrity of physical samples from collection through analysis. Applied to alleged recovered UAP materials, proper chain-of-custody documentation is necessary to distinguish genuine anomalous specimens from terrestrial contamination.",
  },
  {
    term: "Conscious Realism",
    definition:
      "Donald Hoffman's framework proposing that reality fundamentally consists of interacting conscious agents. Space, time, and physical objects are user-interface constructs — pragmatic representations that do not resemble the underlying conscious reality they encode.",
  },
  {
    term: "COMETA Report (1999)",
    definition:
      "The French civilian-aerospace report (Comité d'Études Approfondies) concluding UAP are \"almost certain physical reality.\" Foundational document in European institutional UAP study. Revisited at the Sol Foundation 2025 Symposium by Gen. Pierre Bescond.",
  },
  {
    term: "Conformal Cyclic Cosmology (CCC)",
    definition:
      "Penrose's cosmological framework proposing that the universe undergoes infinite eons of expansion, each beginning from the conformal boundary of the previous. Integrated with Orch-OR and the Strømme field model in the Burgos-Salcedo 2026 synthesis paper.",
  },
  {
    term: "Control System Hypothesis",
    definition:
      "Jacques Vallée's proposal, developed across multiple books from 1969 onward, that UAP phenomena function as a control mechanism for human consciousness and belief systems — conditioning civilization's development across millennia through carefully calibrated apparitions, contacts, and events.",
  },
  {
    term: "Cryptoterrestrial Hypothesis",
    definition:
      "Mac Tonnies' proposal, developed in The Cryptoterrestrials (2010), that an indigenous non-human intelligence coexists on Earth — possibly in deep ocean, underground, or parallel dimensional strata — rather than originating from elsewhere in the cosmos.",
  },
  {
    term: "Department of War (DoW)",
    definition:
      "The rebranded U.S. Department of Defense, following Trump's early-2026 executive order. References to DoD in older site content remain accurate to time of writing.",
  },
  {
    term: "DIRD",
    definition:
      "Defense Intelligence Reference Document. Thirty-eight technical research papers produced under the AAWSAP contract, covering topics including warp drive physics, traversable wormholes, high-energy laser weapons, and anomalous acute effects on human biological tissues. Thirty-seven of 38 have been released via FOIA.",
  },
  {
    term: "Disclosure Binary",
    definition:
      "The policy choice between sudden, complete government-acknowledged disclosure of NHI reality and a graduated, managed release designed to allow cultural and institutional adaptation. Neither option is cost-free: the former risks acute civilizational shock; the latter risks compounding institutional deception.",
  },
  {
    term: "Eminent Domain Clause",
    definition:
      "A UAPDA provision treating classified UAP materials in private contractor possession as subject to governmental seizure with compensation — designed to pierce the defense contractor firewall that has resisted legislative oversight. Deleted from three consecutive NDAAs (2023, 2024, 2025).",
  },
  {
    term: "Epistemic Inoculation",
    definition:
      "Pre-exposure to weakened or identified disinformation narratives to build cognitive resistance to the full-strength version. A technique from behavioral science applied to disclosure research: gradually familiarizing populations with contested evidence before uncontrolled revelation occurs.",
  },
  {
    term: "Exotheology",
    definition:
      "Theological study of the implications of confirmed extraterrestrial intelligence for religious doctrine, soteriology, and anthropology. Engaged seriously by the Vatican Observatory, Princeton's Center for Theological Inquiry, and Islamic scholars. Eastern traditions require minimal doctrinal adjustment.",
  },
  {
    term: "Five Observables",
    definition:
      "The five UAP characteristics documented by military sensor systems: extreme instantaneous acceleration, instantaneous velocity changes, apparent anti-gravity lift, trans-medium travel between air and water, and no sonic boom despite supersonic velocities. Collectively imply localized spacetime metric engineering.",
  },
  {
    term: "FREE Foundation",
    definition:
      "Foundation for Research into Extraterrestrial and Extraordinary Experiences. Conducted the largest structured survey of NHI contact experiencers: 3,256 participants across multiple countries. Led by Dr. Rey Hernandez, Jon Klimo, and Rudy Schild. Published findings in Beyond UFOs (2018).",
  },
  {
    term: "Galileo Project",
    definition:
      "Harvard University-based systematic scientific search for extraterrestrial technological artifacts, founded by astrophysicist Avi Loeb. Deploys AI-assisted multi-spectral sensor arrays for continuous sky monitoring. Published findings on Pacific Ocean spherule recovery from the 2014 interstellar object CNEOS 2014-01-08.",
  },
  {
    term: "GEIPAN",
    definition:
      "Groupe d'Études et d'Informations sur les Phénomènes Aérospatiaux Non identifiés. The French civilian space agency CNES's UAP investigation office, operating continuously since 1977 — the longest-running official UAP investigation framework in the world.",
  },
  {
    term: "Gateway Process",
    definition:
      "CIA-assessed Monroe Institute protocol for consciousness alteration via Hemi-Sync binaural beat technology. Analyzed in the 1983 classified document by Lt. Col. Wayne McDonnell (CIA-RDP96-00788R001700210016-5), which frames consciousness as a holographic field capable of interfacing with a 'universal continuum.'",
  },
  {
    term: "Great Filter",
    definition:
      "Hypothetical evolutionary barrier preventing civilizations from achieving interstellar capability — proposed to explain the Fermi Paradox. Michael Garrett (2024, Acta Astronautica) proposes that AI adoption may trigger civilizational collapse within 200 years, making artificial intelligence itself the most likely filter.",
  },
  {
    term: "Hemi-Sync",
    definition:
      "Binaural beat audio technology developed by Robert Monroe at the Monroe Institute. Delivers different audio frequencies to each ear; the brain synthesizes the arithmetic difference as a 'beat,' synchronizing cerebral hemispheres and bypassing left-brain analytical filtering. Formed the basis of Project Stargate protocols.",
  },
  {
    term: "High Strangeness",
    definition:
      "J. Allen Hynek's term for anomalous features of UAP encounters that resist conventional material explanation — apparent shapeshifting, telepathic communication, reality distortion, and post-encounter transformation of witnesses. Vallée's control system hypothesis treats high strangeness as functional, not incidental.",
  },
  {
    term: "Hill Radius",
    definition:
      "The boundary in space within which a celestial body's gravity dominates over the gravitational pull of a more massive nearby body (e.g., Jupiter's Hill radius within the Sun-Jupiter system is ~53.5 million km). 3I/ATLAS's closest approach to Jupiter on March 16, 2026 was at 53.6 million km — at the boundary of Jupiter's Hill radius. The proximity is one of the catalogued anomalies.",
  },
  {
    term: "Hitchhiker Effect",
    definition:
      "Post-encounter phenomena that follow UAP witnesses beyond the original event site — poltergeist activity, anomalous psychic experiences, health effects, and persistent contact — documented most extensively in the AAWSAP/Skinwalker Ranch research program by Colm Kelleher and the BAASS team.",
  },
  {
    term: "Holographic Universe",
    definition:
      "David Bohm and Karl Pribram's model treating physical reality as a projection of a deeper informational substrate. Bohm's 'implicate order' proposes that perceived reality is a surface unfolding of a deeper enfolded wholeness. The CIA Gateway document explicitly adopts this framework for consciousness research.",
  },
  {
    term: "Immaculate Constellation",
    definition:
      "Alleged unacknowledged special access program for UAP-related activities. The 12-page summary document was entered into the Congressional Record by Rep. Mace at the January 23, 2026 House Oversight hearing, brought to the hearing by journalist Michael Shellenberger. The underlying program's existence has been alleged but not officially confirmed.",
  },
  {
    term: "Implicate Order",
    definition:
      "David Bohm's proposal that the perceived physical universe is a surface projection of a deeper holographic reality in which all things remain enfolded in wholeness. Strømme's universal consciousness field provides the substance of the implicate order: consciousness is what it is made of.",
  },
  {
    term: "Interface Theory of Perception",
    definition:
      "Donald Hoffman's evolutionary model showing that natural selection optimizes perceptual systems for fitness, not accuracy. The experienced world of colored, spatially located objects is a pragmatic interface — like a computer desktop — that does not resemble the underlying quantum reality it encodes.",
  },
  {
    term: "Invention Secrecy Act (1951)",
    definition:
      "Federal statute (35 U.S.C. §§ 181–188) allowing the USPTO to issue secrecy orders suppressing patent applications on national security grounds. Approximately 6,000 orders currently active; approximately 5,700 involve unnamed agencies. Provides administrative suppression mechanism for breakthrough energy technologies.",
  },
  {
    term: "Inoculation (information-warfare technique)",
    definition:
      "The pairing of a real future event or real-adjacent figure with an absurd, easily-disprovable claim, such that subsequent serious discussion of the real element is preemptively associated with the absurdity and thereby discredited. Discussed in Vol II Ch 2's Project Anchor case study.",
  },
  {
    term: "IR&D Laundering",
    definition:
      "Use of Independent Research & Development funds — a cost-accounting category under the Federal Acquisition Regulation allowing contractors to classify research as reimbursable overhead — to conduct classified research outside Congressional authorization and standard oversight mechanisms.",
  },
  {
    term: "LENR",
    definition:
      "Low-Energy Nuclear Reactions. Research field investigating anomalous nuclear effects at near-ambient conditions, historically associated with the 1989 Pons-Fleischmann \"cold fusion\" controversy. Reentered institutional research via ARPA-E funding in the 2020s. UBC LENR results published in Nature in August 2025.",
  },
  {
    term: "Loeb Classification Scale",
    definition:
      "Avi Loeb's 0–10 classification scale for interstellar objects, where 0 indicates natural comet and 10 indicates alien technology posing major threat to humanity. 3I/ATLAS is currently rated 3 (natural cometary behavior with multiple unexplained anomalies).",
  },
  {
    term: "Multimodal User Interface (MUI)",
    definition:
      "Donald Hoffman's term for the evolved perceptual interface through which humans experience reality. Like a computer desktop's icons, the MUI provides pragmatic abstractions — colored objects in space — that do not resemble the underlying conscious reality they represent.",
  },
  {
    term: "NHI",
    definition:
      "Non-Human Intelligence. Umbrella term encompassing extraterrestrial, ultraterrestrial, cryptoterrestrial, and interdimensional hypotheses for the origin of intelligences demonstrated to interact with humanity. Preferred over 'alien' or 'ET' because it does not presuppose a specific origin hypothesis.",
  },
  {
    term: "Objective Reduction",
    definition:
      "Roger Penrose's proposed mechanism for quantum wave function collapse: a gravitational instability built into the structure of spacetime itself. When a quantum superposition reaches a threshold of spacetime curvature difference, it spontaneously and irreversibly collapses without requiring an external observer.",
  },
  {
    term: "Ontological Shock",
    definition:
      "Term coined by Harvard psychiatrist John Mack to describe the foundational rupture in one's model of reality produced by a genuine encounter with the anomalous. Applies at the individual level (contact experiencers) and civilizational level (the disclosure transition). Distinct from ordinary surprise or distress.",
  },
  {
    term: "Orch-OR",
    definition:
      "Orchestrated Objective Reduction. Penrose-Hameroff theory that consciousness arises from quantum computations in neural microtubules, terminated by gravitationally-mediated objective reduction. Recently corroborated by experimental work documented in Wiest (2025).",
  },
  {
    term: "Participatory Universe",
    definition:
      "John Archibald Wheeler's thesis that observers are constitutive of physical reality rather than merely passive registrants within it. Strømme's universal consciousness field provides a literal physical mechanism: the universe is generated by the consciousness field's self-observation.",
  },
  {
    term: "PURSUE (Presidential Unsealing and Reporting System for UAP Encounters)",
    definition:
      "The U.S. federal interagency program established under Trump's February 19, 2026 directive to declassify and publish UAP records. Coordinated across the White House, ODNI, Department of Energy, Department of War's AARO, NASA, FBI, and other agencies. Release 01 published May 8, 2026 at war.gov/UFO (162 files; 340M hits in 12 hours).",
  },
  {
    term: "Polycrisis",
    definition:
      "A condition in which multiple interlocking global crises — climate, AI, geopolitical fragmentation, economic instability, disclosure — reinforce each other in ways that exceed any single-domain response capacity. Distinguished from ordinary crisis by the coupling of destabilization mechanisms across domains.",
  },
  {
    term: "Process Philosophy",
    definition:
      "Alfred North Whitehead's metaphysical framework treating experience — not matter — as fundamental to reality. Every actual entity involves an element of experience. Provides theoretical grounding for NHI communication via 'hybrid prehensions' (direct mental exchange) rather than physical or linguistic interaction.",
  },
  {
    term: "Project Stargate",
    definition:
      "DIA-funded remote viewing research program (1978–1995), operated by SRI International and including physicists Hal Puthoff and Russell Targ. Produced a classified operational record with claimed intelligence collection contributions. Statistical review by Jessica Utts (1996) found results significantly above chance.",
  },
  {
    term: "SAP",
    definition:
      "Special Access Program. Pentagon classification category above Top Secret, governed by DoD Directive 5205.07. Three tiers: Acknowledged SAPs (existence admitted), Unacknowledged SAPs (existence classified), and Waived USAPs (congressional reporting requirements formally waived by the Secretary of Defense under 10 U.S.C. § 119).",
  },
  {
    term: "The Schism",
    definition:
      "The sociological threshold at which NHI reality becomes sufficiently unambiguous — through mass documentation, unilateral foreign disclosure, or institutional acknowledgment — that denial ceases to be viable as a social or political posture. Distinguished from disclosure, which implies controlled revelation.",
  },
  {
    term: "Sol Foundation",
    definition:
      "Stanford University-based institution bridging the defense establishment and academic UAP research, co-founded by immunologist Garry Nolan. Includes Christopher Mellon, Rear Admiral Tim Gallaudet, Diana Walsh Pasulka, and Jacques Vallée. Hosts the annual Sol Foundation Symposium and publishes policy white papers.",
  },
  {
    term: "Sol Foundation 2025 Symposium",
    definition:
      "Held October 24–27, 2025 at Lake Maggiore, Italy. First Sol Foundation symposium held outside the United States. Speakers included Karl Nell, Beatriz Villarroel, Gen. Pierre Bescond, Roberto Pinotti, Luc Dini, Michael Valliant.",
  },
  {
    term: "Spiral of Silence",
    definition:
      "Sociological mechanism by which consensus is preserved through distributed embarrassment and career threat rather than explicit censorship. Applied to UAP: scientists avoided the subject to protect grants, journalists to protect credibility, military personnel to protect careers — producing silence without formal prohibition.",
  },
  {
    term: "Superradiance",
    definition:
      "Cooperative quantum optical phenomenon where multiple emitters phase-synchronize to emit radiation coherently, producing intensities that increase with the square rather than the linear sum of emitter counts. Babcock, Kurian et al. (2024) found superradiant emission from tryptophan networks in biological tissues.",
  },
  {
    term: "The Age of Disclosure",
    definition:
      "Dan Farah's 2025 documentary featuring on-camera testimony from 34 senior U.S. government, military, and intelligence officials, including Secretary of State Marco Rubio. Released on Amazon Prime Video, November 21, 2025; broke the platform's documentary-record within 48 hours.",
  },
  {
    term: "The Lady",
    definition:
      "Recurring luminous feminine NHI entity in the Chris Bledsoe contact case. First encountered in 2012 at the Cape Fear River site. Bledsoe's case has been investigated by NASA, MUFON, and former CIA officer Jim Semivan. The entity bears cross-cultural continuity with Marian apparitions and ancient goddess archetypes.",
  },
  {
    term: "Triple Singularity",
    definition:
      "The simultaneous convergence of artificial intelligence approaching AGI, NHI disclosure reaching legislative acknowledgment, and consciousness physics producing empirical evidence for non-materialist frameworks. Each would individually reshape civilization; their simultaneous arrival creates dynamics no single-domain analysis can capture.",
  },
  {
    term: "UAPDA (Unidentified Anomalous Phenomena Disclosure Act)",
    definition:
      "Bipartisan legislation reintroduced by Senators Schumer, Rounds, and Gillibrand. As of the FY2026 NDAA conference, stripped for the third consecutive year. The 2025 reintroduction as S.Amdt.3111 to S.2296 remains the formal Senate version of record.",
  },
  {
    term: "Ultraterrestrial Hypothesis",
    definition:
      "The proposal, associated with John Keel and Mac Tonnies, that NHI operate from parallel dimensions, adjacent reality strata, or temporal locations rather than physical space. Explains why UAP phenomena appear to 'emerge' into physical reality rather than traveling through it in the manner of conventional spacecraft.",
  },
  {
    term: "Universal Consciousness Field",
    definition:
      "Maria Strømme's 2025 AIP Advances proposal of consciousness as a fundamental physical field, prior to and generative of spacetime. Now joined in the peer-reviewed literature by Wiest (2025) and Burgos-Salcedo (2026).",
  },
  {
    term: "war.gov/UFO",
    definition:
      "The U.S. Department of War's PURSUE program portal, launched May 8, 2026.",
  },
  {
    term: "Waived USAP",
    definition:
      "Unacknowledged Special Access Program for which the Secretary of Defense has formally waived congressional reporting requirements under 10 U.S.C. § 119. Notification goes only to the 'Gang of Eight' congressional leaders, often without operational detail. Multiple whistleblowers allege UAP programs operate under this category.",
  },
  {
    term: "Wilson-Davis Memo",
    definition:
      "Alleged 2002 document recording a meeting between Vice Admiral Thomas Wilson (then DIA Director) and physicist Dr. Eric Davis, in which Wilson was denied access to a contractor-held program potentially related to non-human technology. Found in Edgar Mitchell's estate. Entered Congressional Record as SD001, November 2024.",
  },
  {
    term: "Wow! Signal",
    definition:
      "A 72-second narrowband radio signal detected on August 15, 1977 by Ohio State University's Big Ear radio telescope, of unknown origin. 3I/ATLAS's interstellar arrival direction coincides to within ~9 degrees with the Wow! Signal source coordinates — one of the 22 anomalies in Loeb's running catalog.",
  },
  {
    term: "Zero-Point Energy (ZPE)",
    definition:
      "Baseline quantum vacuum energy persisting at absolute zero temperature. Empirically confirmed by the Casimir effect. Quantum electrodynamics predicts extraordinarily high vacuum energy density. Theoretically, ZPE represents the most abundant potential energy source in the universe — if extraction is achievable.",
  },
  {
    term: "Zero Quantum Coherence (ZQC)",
    definition:
      "NMR technique that suppresses all classical signals, leaving only quantum correlation signatures. Used by Kerskens and López Pérez (Trinity College Dublin, 2022) to detect what they interpreted as macroscopic quantum entanglement in living human brains, correlated with states of conscious awareness.",
  },
];

export default function GlossaryPage() {
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
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-4">Glossary</h1>
        <p className="font-serif text-muted text-sm mb-10 leading-relaxed">
          75+ specialized terms used across The New Ontology — from AARO to Zero Quantum Coherence.
          Organized alphabetically.
        </p>
        <div className="h-px bg-border mb-12" />

        <dl className="space-y-8">
          {terms.map((item) => (
            <div key={item.term} className="group">
              <dt className="font-sans text-base font-semibold text-accent mb-2">
                {item.term}
              </dt>
              <dd className="font-serif text-text text-sm leading-relaxed pl-4 border-l border-border group-hover:border-accent/40 transition-colors">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"
          >
            <span>←</span> Back to Library
          </Link>
        </div>
      </main>
    </>
  );
}
