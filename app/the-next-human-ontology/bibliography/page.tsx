import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata = { title: "Bibliography | The Next Human Ontology" };

export default function BibliographyPage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link href="/the-next-human-ontology" className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> The Next Human Ontology
        </Link>
        <p className="section-title">Bibliography</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">Comprehensive Bibliography &amp; Resources</h1>
        <div className="h-px bg-border mb-10" />
        <div className="prose prose-invert">

          <p>
            The following sources are organized by chapter and represent the foundational research,
            primary documents, institutional reports, and scholarly works underpinning the analysis
            presented throughout this work. Where sources appear across multiple chapters, they are
            cited under their primary thematic context.
          </p>

          <section>
            <h2>Chapter 1: The Triple Singularity &amp; The Ontological Shock</h2>
            <ul className="space-y-2">
              <li>Anthropic. <em>Claude Opus 4 System Card</em>. Anthropic, 2025.</li>
              <li>Hernandez, Rey, et al. <em>A Study of Reported Unidentified Aerial Phenomena and Related Experiences: Worldwide Survey of 3,200+ UAP Experiencers</em>. FREE Foundation, 2018.</li>
              <li>Hoffman, Donald. <em>The Case Against Reality: Why Evolution Hid the Truth from Our Eyes</em>. W. W. Norton, 2019. [Interface Theory of Perception / Conscious Realism]</li>
              <li>Mack, John E. <em>Abduction: Human Encounters with Aliens</em>. Scribner, 1994.</li>
              <li>Patterson, Robert. <em>Ontological Information Framework: "When Mind Becomes Cosmic."</em> Working paper, 2024.</li>
              <li>Strømme, Maria. "Universal consciousness as foundational field." <em>AIP Advances</em>, November 2025.</li>
              <li><em>AI × NHI Convergence Summit</em> proceedings. Scheduled March 2026.</li>
              <li><em>State of the World Forum</em> documentation. Various years.</li>
              <li>arXiv. Studies on catastrophic disclosure probabilities (14–42% by 2027; 39–59% by 2036). Multiple authors, 2023–2025.</li>
              <li>U.S. Congress. Legislative actions on UAPs — UAP Disclosure Act, NDAA provisions. 2022–2025.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 2: The Architecture of Secrecy</h2>
            <ul className="space-y-2">
              <li>U.S. Congress. <em>UAP Disclosure Act (UAPDA)</em>. Legislative records, 2023–2024.</li>
              <li>U.S. Congress. <em>JFK Assassination Records Collection Act</em>. 1992.</li>
              <li>U.S. Congress. <em>National Defense Authorization Acts (NDAA) 2023, 2024, 2025</em>.</li>
              <li>Wilson, Admiral Tom, and Dr. Eric Davis. <em>Wilson-Davis Memo</em>. Leaked document, 2002; widely circulated 2019.</li>
              <li>U.S. Department of Defense. <em>Directive 5205.07</em>. Special Access Program (SAP) taxonomy and management.</li>
              <li>U.S. Congress. <em>Atomic Energy Act of 1954</em>. Public Law 83-703.</li>
              <li>Elizondo, Luis. Congressional testimonies on UAP programs and AATIP. 2017–2024.</li>
              <li>Mace, Representative Nancy (R-SC). House UAP Whistleblower Hearing proceedings. 2023.</li>
              <li><em>Congressional Dish</em>. "CD307: Immaculate Constellation." Podcast episode, 2024.</li>
              <li>Fox Orlando. Coverage of Immaculate Constellation hearings. 2024.</li>
              <li>McDonnell, Lt. Col. Wayne M. <em>Analysis and Assessment of the Gateway Process</em>. U.S. Army, 1983. Declassified 2003.</li>
              <li>U.S. Army. <em>Project Stargate</em> documentation. Declassified 1995.</li>
              <li><em>Inside Defense</em>. Legal commentary on UAP disclosure legislation. 2023–2024.</li>
              <li><em>Defense Scoop</em>. Articles on UAP program structures. 2023–2024.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 3: The Energy Suppression Paradigm</h2>
            <ul className="space-y-2">
              <li>U.S. Congress. <em>Invention Secrecy Act of 1951</em>. 35 U.S.C. §§ 181–188.</li>
              <li>U.S. Patent and Trademark Office. <em>Annual Secrecy Orders Reports, FY21–FY25</em>. USPTO, 2021–2025.</li>
              <li>Fleischmann, Martin, and Stanley Pons. "Electrochemically induced nuclear fusion of deuterium." <em>Journal of Electroanalytical Chemistry</em>, 1989. [Cold fusion announcement]</li>
              <li>U.S. Navy SPAWAR. Peer-reviewed LENR replication papers using CR-39 nuclear track detectors. Various authors, 2002–2012.</li>
              <li>National Ignition Facility (NIF). <em>2025 Fusion Milestone Report</em>: 8.6 MJ output from 2.08 MJ input. Lawrence Livermore National Laboratory, 2025.</li>
              <li>University of British Columbia. LENR study published in <em>Nature</em>. August 2025.</li>
              <li><em>Nature</em> journal. LENR and fusion research. Various authors.</li>
              <li>Max Planck Institute for Plasma Physics. <em>Wendelstein 7-X Stellarator energy results</em>. 2023–2025.</li>
              <li>International Monetary Fund. Analysis of fossil fuel subsidies ($7.4 trillion / 5.8% of global GDP). IMF Working Paper, 2023.</li>
              <li>MIT Energy Initiative. Analysis of stranded fossil fuel reserves ($21.5–30.6 trillion net present value). 2024.</li>
              <li>RethinkX. "Energy superabundance at near-zero marginal cost by 2040." Disruption research report, 2023.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 4: The Extraterrestrial Hypothesis is Dead</h2>
            <ul className="space-y-2">
              <li>Vallée, Jacques. <em>The Invisible College</em>. E. P. Dutton, 1975.</li>
              <li>Vallée, Jacques. <em>Messengers of Deception: UFO Contacts and Cults</em>. And/Or Press, 1979.</li>
              <li>Tonnies, Mac. <em>The Cryptoterrestrials: A Meditation on Indigenous Humanoids and the Aliens Among Us</em>. Anomalist Books, 2010.</li>
              <li>Keel, John A. <em>The Mothman Prophecies</em>. Saturday Review Press, 1975. [Ultraterrestrial research]</li>
              <li>Tipler, F. J. "Extraterrestrial intelligent beings do not exist." <em>Quarterly Journal of the Royal Astronomical Society</em>, 21, 267–281, 1980.</li>
              <li>Malik, Shoaib. "Islamic Theology and Extraterrestrial Life." <em>Theology and Science</em>, 2023.</li>
              <li>FREE Foundation. <em>Survey of 3,256 UAP Experiencers</em>. Foundation for Research into Extraterrestrial and Extraordinary Experiences, 2018.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 5: The Physics of Consciousness</h2>
            <ul className="space-y-2">
              <li>Penrose, Roger. <em>Shadows of the Mind: A Search for the Missing Science of Consciousness</em>. Oxford University Press, 1994.</li>
              <li>Hameroff, Stuart. "Quantum coherence in microtubules: A neural basis for emergent consciousness." <em>Journal of Consciousness Studies</em>, 1994.</li>
              <li>Penrose, Roger, and Stuart Hameroff. "Orchestrated objective reduction of quantum coherence in brain microtubules: The 'Orch OR' model for consciousness." <em>Mathematics and Computers in Simulation</em>, 1996. Updated 2014.</li>
              <li>Babcock, N. S., Kurian, P., et al. "Ultraviolet Superradiance from Mega-Networks of Tryptophan in Biological Architectures." <em>Journal of Physical Chemistry B</em>, 2024.</li>
              <li>Kerskens, Christian, and David López Pérez. Macroscopic quantum entanglement studies in the brain. Trinity College Dublin, 2022–2025.</li>
              <li>Strømme, Maria. "Consciousness as a foundational field." <em>AIP Advances</em>, November 2025.</li>
              <li>McDonnell, Lt. Col. Wayne M. <em>Analysis and Assessment of the Gateway Process</em>. CIA / U.S. Army, 1983. Declassified 2003.</li>
              <li>Schrödinger, Erwin. <em>What Is Life? The Physical Aspect of the Living Cell</em>. Cambridge University Press, 1944.</li>
              <li>Bohm, David. <em>Wholeness and the Implicate Order</em>. Routledge, 1980.</li>
              <li>Wheeler, John Archibald. "Information, physics, quantum: The search for links." <em>Complexity, Entropy, and the Physics of Information</em>. Addison-Wesley, 1990. [Participatory Universe]</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 6: The Mechanics of Contact</h2>
            <ul className="space-y-2">
              <li>McDonnell, Lt. Col. Wayne M. <em>Analysis and Assessment of the Gateway Process</em>. U.S. Army, 1983. Declassified 2003.</li>
              <li>Monroe, Robert A. <em>Journeys Out of the Body</em>. Doubleday, 1971. [Monroe Institute / Hemi-Sync development]</li>
              <li>Puthoff, Hal, and Russell Targ. <em>Project Stargate documentation</em>. SRI International, 1972–1995.</li>
              <li>Swann, Ingo. <em>Penetration: The Question of Extraterrestrial and Human Telepathy</em>. Ingo Swann Books, 1998.</li>
              <li>McMoneagle, Joseph. <em>Mind Trek: Exploring Consciousness, Time, and Space Through Remote Viewing</em>. Hampton Roads, 1993. [Operational remote viewing records]</li>
              <li>Price, Pat. Remote viewing operational records. Stanford Research Institute / Project Stargate archives. Declassified 1995.</li>
              <li>FREE Foundation. <em>Survey of 3,256 UAP Experiencers</em>. 75% reported non-physical NHI encounters. 2018.</li>
              <li>Nolan, Garry (Stanford University). Caudate-putamen neurological research. Published and unpublished findings, 2012–2025.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 7: High Strangeness and The Hitchhiker Effect</h2>
            <ul className="space-y-2">
              <li>Kelleher, Colm, and George Knapp. <em>Hunt for the Skinwalker: Science Confronts the Unexplained at a Remote Ranch in Utah</em>. Paraview Pocket Books, 2005.</li>
              <li>Pasulka, Diana Walsh. <em>American Cosmic: UFOs, Religion, Technology</em>. Oxford University Press, 2019.</li>
              <li>Keller, T. L. "The Pentagon's Secret UFO Program, the Hitchhiker Effect, and Models of Contagion." <em>Journal of Scientific Exploration</em>, 2022.</li>
              <li>Defense Intelligence Agency. <em>AAWSAP contract HHM402-08-C-0072</em>. Awarded to Bigelow Aerospace Advanced Space Studies (BAASS). 2008.</li>
              <li>Green, Dr. Christopher "Kit." "Anomalous Acute and Subacute Field Effects on Human Biological Tissues." Defense Intelligence Reference Document (DIRD). DIA / AAWSAP, 2010.</li>
              <li>Segala, Dr. Jim. Hitchhiker Syndrome documentation and health study of 35+ participants. NIDSci / AAWSAP, 2009–2011.</li>
              <li>Taylor, Dr. Travis. UAP Task Force quantum entanglement hypothesis regarding the Hitchhiker Effect. Public statements and internal reports, 2020–2022.</li>
              <li>National Institute for Discovery Science (NIDSci). Investigative reports on Skinwalker Ranch. 1996–2004.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 8: The Cycles of Time and Human Resets</h2>
            <ul className="space-y-2">
              <li>Glubb, General Sir John Bagot. <em>The Fate of Empires and Search for Survival</em>. Blackwood, 1978.</li>
              <li>Turchin, Peter, and Sergey Nefedov. <em>Secular Cycles</em>. Princeton University Press, 2009.</li>
              <li>Goldstone, Jack A. <em>Revolution and Rebellion in the Early Modern World</em>. University of California Press, 1991. [Demographic-structural theory]</li>
              <li>Jorgeson, I. A., et al. "Bayesian chronological analyses consistent with synchronous age of 12,835–12,735 Cal B.P. for Younger Dryas boundary on four continents." <em>Quaternary Research</em> 93, 123–139, 2020.</li>
              <li>Garrett, Michael. "The Fermi Paradox and the possibility of AI as a Great Filter." <em>Acta Astronautica</em>, 2024.</li>
              <li>Schoch, Dr. Robert M. <em>Forgotten Civilization: The Role of Solar Outbursts in Our Past and Future</em>. Inner Traditions, 2012. [Solar-Induced Dark Age (SIDA) theory]</li>
              <li>Peratt, Dr. Anthony L. "Characteristics for the Occurrence of a High-Current, Z-Pinch Aurora as Recorded in Antiquity." <em>IEEE Transactions on Plasma Science</em>, 31(6), 2003. [Plasma physics analysis of ancient petroglyphs]</li>
              <li>Thomas, Dr. Chan. <em>The Adam and Eve Story</em>. Bengal Tiger Press, 1963. Portions classified by CIA 1966; released 2013.</li>
              <li>Hanson, Robin. "The Great Filter — Are We Almost Past It?" Working paper, George Mason University, 1998.</li>
              <li>Szydagis, Matthew, et al. Catastrophic disclosure statistical modeling; mean expected year 2040 ± 20. Preprint, 2023.</li>
              <li>HeritageDaily. "New evidence supports the Younger Dryas Impact Hypothesis." 2024.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 9: The Asymmetry of Religious Shock</h2>
            <ul className="space-y-2">
              <li>Vatican Observatory. Established 1891. Major astrobiology conferences 2005, 2009. <em>vatican.va/roman_curia/pontifical_academies/acdscien</em>.</li>
              <li>Consolmagno, Brother Guy, S.J., and Paul Mueller, S.J. <em>Would You Baptize an Extraterrestrial? And Other Questions from the Astronomers' In-box at the Vatican Observatory</em>. Image, 2014.</li>
              <li>Funes, Fr. José Gabriel, S.J. "L'Alieno è mio fratello" [The Alien is My Brother]. Interview, <em>L'Osservatore Romano</em>, May 2008.</li>
              <li>Tanzella-Nitti, Fr. Giuseppe. "The plurality of inhabited worlds and the Christian doctrine of salvation." <em>Interdisciplinary Encyclopedia of Religion and Science</em>. STOQ Project, 2007.</li>
              <li>Pope Francis. Mass homily referencing baptism of hypothetical Martians. Vatican City, May 2014.</li>
              <li>Princeton Center for Theological Inquiry. NASA-funded study engaging 24 theologians on societal implications of astrobiology. 2016–2017. Published findings 2018.</li>
              <li>"Big Bang Cosmology &amp; Divine Creation" public event. Vatican Observatory Foundation, October 2024.</li>
              <li><em>Anguttara Nikaya</em>. Pali Canon. "Thousands of inhabited worlds." Book of Threes, Sutta 80.</li>
              <li>Malik, Shoaib. "Islam and Astrobiology." <em>Zygon: Journal of Religion and Science</em>, 56(1), 2021.</li>
              <li>Kripal, Jeffrey J. <em>Authors of the Impossible: The Paranormal and the Sacred</em>. University of Chicago Press, 2010.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 10: Surviving the Convergence</h2>
            <ul className="space-y-2">
              <li>Nell, Karl. Presentation at Sol Foundation symposium, Stanford University. 2023. [2030 disclosure roadmap]</li>
              <li>Nell, Karl. Remarks at SALT iConnections New York conference. May 2024.</li>
              <li>Szydagis, Matthew, et al. Catastrophic disclosure modeling; median year ~2040. Preprint, 2023.</li>
              <li>U.S. Congress. <em>UAP Disclosure Act (UAPDA)</em> — eminent domain clause removal and legislative history. 2023–2024.</li>
              <li>U.S. Congress. <em>FY2026 National Defense Authorization Act</em> provisions on UAP. 2025.</li>
              <li>Rees-Mogg, William, and James Dale Davidson. <em>The Sovereign Individual: Mastering the Transition to the Information Age</em>. Simon &amp; Schuster, 1997.</li>
              <li>Ohmae, Kenichi. <em>The End of the Nation-State: The Rise of Regional Economies</em>. Free Press, 1995.</li>
              <li><em>Strategic Horizon 2026</em> report. Agentic AI integration analysis. 2025.</li>
              <li>International Science Council (ISC). <em>The Age of the Polycrisis</em>. ISC, 2023.</li>
              <li>IFI CLAIMS Patent Services. <em>2025 Patent Application Statistics and Global Rankings</em>. 2025.</li>
              <li>Trump Administration. Executive declassification directives and UAP-related executive orders. 2025.</li>
            </ul>
          </section>

        </div>
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/the-next-human-ontology/chapter-10" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Chapter 10
          </Link>
          <div />
        </div>
      </main>
    </>
  );
}
