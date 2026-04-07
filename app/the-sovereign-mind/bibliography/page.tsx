import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata = { title: "Bibliography | The Sovereign Mind" };

export default function BibliographyPage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link href="/the-sovereign-mind" className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> The Sovereign Mind
        </Link>
        <p className="section-title">Bibliography</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">Bibliography &amp; References</h1>
        <div className="h-px bg-border mb-10" />
        <div className="prose prose-invert">

          <p>
            The following sources are organized by chapter and represent the foundational research,
            primary documents, institutional reports, and scholarly works underpinning the analysis
            presented throughout this volume. Where sources appear across multiple chapters, they are
            cited under their primary thematic context.
          </p>

          <section>
            <h2>Chapter 1: The Anatomy of Ontological Shock</h2>
            <ul className="space-y-2">
              <li>FREE Foundation. <em>Worldwide Survey of 3,200+ UAP Experiencers</em>. Hernandez et al., 2018. [Non-physical communication; post-contact paranormal increase]</li>
              <li>Nolan, Gary. Caudate–putamen hypermorphism research. Stanford University, ongoing. [Neurological predispositions in UAP experiencers]</li>
              <li>Whitehead, A.N. <em>Process and Reality</em>. Free Press, 1929. Referenced via Davis, Andrew. Process philosophy frameworks for NHI contact.</li>
              <li>U.S. Congress. Legislative disclosures on Unidentified Aerial Phenomena (UAPs). 2022–2025.</li>
              <li>Academic research on DMT encounter surveys. Multiple authors, 2020–2025.</li>
              <li>ACNP (American College of Neuropsychopharmacology). Abstracts on neural circuits and belief revision. Various years.</li>
              <li>Massachusetts General Hospital / University of Wisconsin–Madison. Neuroimaging studies on mindfulness meditation and gray matter density. Various years.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 2: Information Warfare and Epistemic Self-Defense</h2>
            <ul className="space-y-2">
              <li>U.S. Government anomaly office case logs (21+ unexplained cases).</li>
              <li>Sworn Congressional testimonies from decorated military officers and intelligence professionals. 2022–2025.</li>
              <li>CRAAP Test (Currency, Relevance, Authority, Accuracy, Purpose). Academic information literacy framework.</li>
              <li>U.S. Army. <em>Cyber Defense Review</em>. Various issues.</li>
              <li><em>Small Wars Journal</em>. Articles on hybrid warfare and counter-disinformation. Various issues.</li>
              <li>"4i FACT" disinformation framework. PubMed-indexed sources.</li>
              <li>Academic studies on epistemic inoculation and red-teaming methods. Various authors, 2018–2025.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 3: Emotional Resilience in a Post-Anthropocentric World</h2>
            <ul className="space-y-2">
              <li>Segala, Dr. Jim. Documentation on "Hitchhiker Syndrome." Unpublished clinical records and conference presentations.</li>
              <li>Ring, Kenneth. <em>The Omega Project</em>. William Morrow, 1992.</li>
              <li>FREE Foundation surveys. NHI interaction data and post-contact paranormal phenomena.</li>
              <li>Röhrle, B. et al. Meta-analytic and systematic reviews on community resilience and mental well-being. 2020–2023.</li>
              <li>Davis, Andrew, and A.N. Whitehead. Whiteheadian process philosophy frameworks. Referenced across multiple chapters.</li>
              <li>"Great Day Program" case study. Online publication, date varies.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 4: The Energy Transition You Won&apos;t See Coming</h2>
            <ul className="space-y-2">
              <li>National Ignition Facility (NIF). Net energy gain milestone reports. Lawrence Livermore National Laboratory, 2022–2025.</li>
              <li>Max Planck Institute for Plasma Physics. <em>Wendelstein 7-X Stellarator energy results</em>. 2023–2025.</li>
              <li>University of British Columbia. LENR study. <em>Nature</em>, 2025.</li>
              <li>Tohoku University. LENR net energy production reports. Various years.</li>
              <li>ARPA-E. $10 million allocation across eight LENR research projects. Announcement documentation.</li>
              <li>U.S. Department of Energy. <em>Fusion Energy Sciences Roadmap</em>. Various editions.</li>
              <li>Advanced Microgrid Concepts Workshop documentation. Military and utility sector studies.</li>
              <li>UAP Disclosure Act. Legislative records, 2023–2024.</li>
              <li>FY2026 NDAA provisions on energy and disclosure.</li>
              <li>RethinkX. "Energy superabundance at near-zero marginal cost by 2040." Disruption research report, 2023.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 5: Financial Survival in the Interregnum</h2>
            <ul className="space-y-2">
              <li>MIT Energy Initiative. Analysis of stranded fossil fuel reserves ($21.5–$30.6 trillion net present value). 2024.</li>
              <li>International Monetary Fund. Analysis of fossil fuel subsidies ($7.4 trillion / 5.8% of global GDP). IMF Working Paper, 2023.</li>
              <li>RethinkX. Renewable energy surplus projection for 2040. Research report, 2023.</li>
              <li>Lockheed Martin. Annual report data: 191 aircraft deliveries; $24.3 billion contract. FY2024–2025.</li>
              <li>U.S. Department of Defense. FY2027 defense budget proposal documentation: $1.5 trillion.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 6: Food, Water, and Community Resilience</h2>
            <ul className="space-y-2">
              <li>PubMed / Center for a Livable Future (CLF). Research on food supply chain redundancy and stockpiling protocols.</li>
              <li>NIST. <em>Community Resilience Planning Guide</em>. National Institute of Standards and Technology.</li>
              <li>Segala, Dr. Jim. Documentation on "Hitchhiker Syndrome" and anomalous health effects.</li>
              <li>Visible Network Labs. Community mutual aid network models.</li>
              <li>Sol Foundation / Disclosure Foundation. Platforms for skill set coordination and emergency response.</li>
              <li>Galileo Project / AI × NHI Convergence Summit. Institutional partners for coordinated response.</li>
              <li>Johns Hopkins University / CLF. Case studies on regenerative agriculture and local health systems.</li>
              <li>Engineering resilience studies. 1 gallon per person per day minimum water standard with crisis safety factor.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 7: Living With AI — Neither Servant Nor God</h2>
            <ul className="space-y-2">
              <li>ARC-AGI-3 benchmark findings. Sub-1% AI performance on open-ended problem-solving tasks. Multiple authors, 2024–2025.</li>
              <li>Anthropic. <em>Claude Opus 4 System Card</em>. Anthropic, 2025. [Emergent consciousness themes in AI dialogue]</li>
              <li>Hinton, Geoffrey. Economic displacement projections and 2027 automation impact forecast. Public lectures and interviews, 2023–2025.</li>
              <li>Altman, Sam. Public statements on AGI timelines. OpenAI communications, 2024–2025.</li>
              <li>Amodei, Dario. Prediction of Nobel-laureate-equivalent AI capabilities by 2026–2027. Anthropic public communications.</li>
              <li>Kurzweil, Ray. Longer-horizon AGI timelines. <em>The Singularity Is Nearer</em>. Viking, 2024.</li>
              <li>MMLU, HumanEval, GSM8K benchmark documentation. Academic and industry sources.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 8: The Consciousness Toolkit</h2>
            <ul className="space-y-2">
              <li>Massachusetts General Hospital. Eight-week MBSR program neuroimaging studies. Published in peer-reviewed journals.</li>
              <li>University of Wisconsin–Madison. Large-scale studies on sustained focused meditation practice and neuroplasticity.</li>
              <li>Monroe Institute. <em>Gateway Experience Training Manual</em>. Available via Scribd and Archive.org.</li>
              <li>McDonnell, Lt. Col. Wayne M. <em>Analysis and Assessment of the Gateway Process</em>. U.S. Army, 1983. Declassified 2003.</li>
              <li>Johns Hopkins University. DMT entity encounter survey: 2,561 participants. <em>Journal of Psychopharmacology</em>. [Overlaps among religious, UAP abduction, and near-death phenomena]</li>
              <li>Nolan, Gary. Stanford research on hypermorphic caudate-putamen configurations in UAP experiencers.</li>
              <li>FREE Foundation surveys. NHI contact and process philosophical frameworks.</li>
              <li>European Psychiatry. Meta-analyses on mindfulness meditation and neuroplasticity. Various issues.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 9: First Contact Protocol — A Personal Field Manual</h2>
            <ul className="space-y-2">
              <li>FREE Foundation. Survey data: 70.4% non-physical communication; 68% multiple telepathic contacts; 75% psychic/symbolic encounters.</li>
              <li>Ring, Kenneth. <em>The Omega Project</em>. William Morrow, 1992.</li>
              <li>Nolan, Gary. Caudate-putamen research at Stanford. [Neurological predisposition to NHI contact]</li>
              <li>Johns Hopkins University. DMT entity encounter studies. 2,561 participants.</li>
              <li>Davis, Andrew, and A.N. Whitehead. "Hybrid prehensions" framework for NHI communication.</li>
              <li>Skinwalker Ranch case studies. Multiple investigators and publications. [Hitchhiker effect documentation]</li>
              <li>MUFON (Mutual UFO Network). Incident filing and database resources.</li>
              <li>Galileo Project. Harvard University research initiative on anomalous phenomena.</li>
              <li>Sol Foundation. Non-physical and telepathic contact research and reporting.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 10: Governance After the Nation-State</h2>
            <ul className="space-y-2">
              <li>Wendt, Alexander. <em>Quantum Mind and Social Science</em>. Cambridge University Press, 2015. [Norm ambiguity and international ontology]</li>
              <li>BlockScience. DAOs and network self-regulation case studies.</li>
              <li>Brookings Institution. Transparency and accountability in UN, IMF, and World Bank. Research reports.</li>
              <li>IMF. Transparency issues in global institutions. Working papers, various years.</li>
              <li>UAP Disclosure Act. Legislative records, 2023–2024.</li>
              <li>AI × NHI Convergence Summit. Proceedings, March 2026.</li>
              <li>DAO adoption statistics and liquid democracy pilot documentation. Various sources, 2022–2025.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 11: The Spiritual Transition</h2>
            <ul className="space-y-2">
              <li>Vatican. Evolving theological frameworks on NHI. Institutional documents and advisory body communications.</li>
              <li>Malik, Shoaib. Hypotheses on theological resilience and proactive institutional preparation. Academic publications.</li>
              <li>Pasulka, Diana. <em>American Cosmic: UFOs, Religion, Technology</em>. Oxford University Press, 2019. [New religious operating system]</li>
              <li>Anguttara Nikaya. Buddhist canonical text. Multiple translations. [Countless inhabited worlds cosmology]</li>
              <li>Hindu scriptures. 14 planes and 400,000+ humanoid species cosmological framework. Referenced across traditions.</li>
              <li>JSTOR. Studies on "theological resilience" in Muslim contexts. Various authors.</li>
              <li>Mindfulness-Based Stress Reduction (MBSR) program documentation. Jon Kabat-Zinn, University of Massachusetts.</li>
              <li>Comparative analyses of conversion statistics and documented instances of spiritual exploitation. Psychological research literature.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 12: What We Owe Each Other</h2>
            <ul className="space-y-2">
              <li>Singer, Peter. <em>The Expanding Circle: Ethics, Evolution, and Moral Progress</em>. Princeton University Press, 1981 / revised 2011.</li>
              <li>Bloom, Paul, and Reed, A., and Aquino, K. Studies on moral development and expanding ethical circles. Various publications.</li>
              <li>hal.science. "Artificial Intelligence, Ethics, and Intergenerational Responsibility." Working paper.</li>
              <li>Charness, G., and Rabin, M. Work on social preferences and behavioral economics. <em>Quarterly Journal of Economics</em>.</li>
              <li>UAP Disclosure Act. Legislative records, 2023–2024.</li>
              <li>FY2026 NDAA provisions.</li>
              <li>AI × NHI Convergence Summit. March 22, 2026.</li>
              <li>Nell, Karl. Timeline for projected policy roadmaps on NHI disclosure. Sol Foundation symposium, Stanford University.</li>
              <li>Legislative proposals on AI alignment research and documented secrecy orders (6,543 active). USPTO Annual Reports.</li>
            </ul>
          </section>

        </div>
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/the-sovereign-mind/chapter-12" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4"><span>←</span> Chapter 12</Link>
          <div />
        </div>
      </main>
    </>
  );
}
