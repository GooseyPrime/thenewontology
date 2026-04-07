import Link from "next/link";
import KinematicBackground from "@/components/KinematicBackground";

export const metadata = { title: "Bibliography | The Bigger World" };

export default function BibliographyPage() {
  return (
    <>
      <KinematicBackground />
      <main className="relative min-h-screen px-6 py-16 max-w-prose mx-auto" style={{ zIndex: 1 }}>
        <Link href="/the-bigger-world" className="section-title inline-flex items-center gap-2 mb-10 hover:text-accent transition-colors no-underline group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> The Bigger World
        </Link>
        <p className="section-title">Bibliography</p>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold text-text mb-8">Comprehensive Bibliography &amp; Resources</h1>
        <div className="h-px bg-border mb-10" />
        <div className="prose prose-invert">

          <p>
            The following resources are organised by chapter and provide further reading, key concepts,
            and references suitable for young explorers and their families.
          </p>

          <section>
            <h2>Chapter 1: The Triple Singularity &amp; The Ontological Shock</h2>
            <ul className="space-y-2">
              <li>Artificial Intelligence systems — example: Anthropic's Claude.</li>
              <li>Recent government initiatives for UAP disclosure.</li>
              <li>Uppsala University paper: &quot;Universal Consciousness as Foundational Field.&quot;</li>
              <li>Adaptation of Kübler-Ross stages for ontological shock.</li>
              <li>Neuroscientific studies on the effects of meditation on brain structure.</li>
              <li>Reality calibration exercises inspired by UAP investigators.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 2: The Architecture of Secrecy</h2>
            <ul className="space-y-2">
              <li><strong>Invention Secrecy Act of 1951</strong> — legal framework allowing governments to restrict publication of certain patents. <em>law.cornell.edu/uscode/text/35/181</em></li>
              <li>The Debrief — <em>thedebrief.org</em> — reporting on science, technology, and defence-related topics including government secrecy.</li>
              <li>Caudate-putamen research: studies on the caudate-putamen and its role in belief revision and cognitive flexibility.</li>
              <li>Navy pilots' reports on encounters with unidentified aerial phenomena.</li>
              <li>Chain-of-custody methods used by researchers and journalists to maintain the integrity of evidence.</li>
              <li>Neuroscience of belief revision: research on how the brain processes new information, involving the default mode network and prediction error signals.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 3: The Unexplained Things in the Sky</h2>
            <ul className="space-y-2">
              <li><strong>All-domain Anomaly Resolution Office (AARO)</strong> — U.S. government office for investigating unidentified phenomena.</li>
              <li>Navy pilots' testimonies — firsthand accounts including testimony before Congress.</li>
              <li>Declassified videos and congressional reports documenting sightings with unusual flight characteristics.</li>
              <li>Scientific hypotheses on unidentified phenomena: secret human technology, extraterrestrial visitors, interdimensional entities, natural phenomena, and misidentifications.</li>
              <li>Sky observation journal exercise — practical nighttime observation template.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 4: Your Amazing, Mysterious Brain</h2>
            <ul className="space-y-2">
              <li>The hard problem of consciousness — understanding the difference between a computer's measurement of stimuli and human experience.</li>
              <li>Penrose–Hameroff Orchestrated Objective Reduction (Orch-OR): theory suggesting microtubules might process information with quantum precision. <em>en.wikipedia.org/wiki/Orchestrated_objective_reduction</em></li>
              <li>Stanford research on brain structures: studies showing unique structures like the caudate-putamen in individuals with unusual experiences.</li>
              <li>Gray matter and meditation: studies showing how meditation affects brain structure and function, particularly the prefrontal cortex and amygdala.</li>
              <li>Visualisation and neuroplasticity: elite athletes using visualisation techniques to activate similar brain regions as in actual performance.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 5: How to Think When Nobody Has the Answers</h2>
            <ul className="space-y-2">
              <li>Confidence scale: tool to rate claims on a 1–10 scale, inspired by decision-making psychology.</li>
              <li>Steelmanning: the practice of presenting the strongest version of an opposing argument.</li>
              <li>Five thinking traps: argument from authority, argument from ignorance, confirmation bias, the bandwagon effect, false binary.</li>
              <li>Default mode network: studies show it contributes to resistance to new ideas, emphasising the importance of revising beliefs.</li>
              <li>Critical thinking websites — educational platforms like Think Academy offer daily examples and activities.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 6: Feelings Are Data Too</h2>
            <ul className="space-y-2">
              <li>Affect labelling: research on the process of putting emotions into words, which helps in managing emotions.</li>
              <li>Cognitive Behavioural Therapy (CBT): techniques used for grounding exercises to help manage anxiety.</li>
              <li>Anxiety UK — <em>anxietyuk.org.uk</em></li>
              <li>YoungMinds — <em>youngminds.org.uk</em></li>
              <li>Mental Health America — <em>mhanational.org</em></li>
            </ul>
          </section>

          <section>
            <h2>Chapter 7: Building Your Superpower Toolkit</h2>
            <ul className="space-y-2">
              <li>Spaced repetition: a learning technique based on reviewing information at spaced intervals. Digital flashcard apps: Anki, Quizlet.</li>
              <li>Feynman Technique: a method for deep understanding by explaining a concept simply, as if to a child.</li>
              <li>Deliberate practice: focused, goal-oriented practice with feedback, emphasising learning from failure.</li>
              <li>Physical crafting: engaging in activities like cooking or building to activate different brain areas and develop motor skills.</li>
              <li>Meditation and deep reading as mindfulness and presence practices.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 8: Humans and Other Intelligences — A History</h2>
            <ul className="space-y-2">
              <li>Octopus cognition: studies on puzzle-solving and memory in cephalopods.</li>
              <li>Crow and corvid intelligence: the &quot;Aesop's Fable&quot; stone-dropping experiments demonstrating tool use and problem-solving.</li>
              <li>Dolphin communication: studies comparing dolphin social intelligence with that of primates.</li>
              <li>Elephant emotional lives and tree communication through underground fungal networks.</li>
              <li>Howard Gardner's Theory of Multiple Intelligences: logical, musical, spatial, interpersonal, and intrapersonal intelligence.</li>
              <li>Cultural references: Hopi Ant People; Islamic Jinn; Hindu multidimensional realms; Celtic Tuatha Dé Danann.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 9: What Kind of World Do You Want to Build?</h2>
            <ul className="space-y-2">
              <li>Historical parallels: the Space Race and post-war adaptations as examples of resilience and innovation.</li>
              <li>Biological evolution: how species adapt to changing environments.</li>
              <li>Mind-body connection: mindfulness and meditation research.</li>
              <li>Search Institute — <em>search-institute.org</em> — insights on personal growth.</li>
              <li>Edutopia — <em>edutopia.org</em> — resources on reflection through writing.</li>
            </ul>
          </section>

          <section>
            <h2>Chapter 10: A Message from the Authors</h2>
            <ul className="space-y-2">
              <li>Uncertainty as opportunity: examples from UAP and consciousness research.</li>
              <li>Cognitive science studies on the brain's default mode network and openness to new ideas.</li>
              <li>Assumption inventory classroom activity: a tool for practising curiosity and critical thinking.</li>
              <li>Confidence scale card game: evidence-based thinking for families.</li>
              <li>Further critical thinking resources: search &quot;Critical Thinking for Kids&quot; for age-appropriate materials.</li>
              <li>Recommended reading — ages 10–12: books on neuroscience and astronomy. Ages 13–16: expanded list featuring Carl Sagan and modern science communicators.</li>
            </ul>
          </section>

        </div>
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/the-bigger-world/chapter-10" className="inline-flex items-center gap-2 font-sans text-accent hover:underline underline-offset-4">
            <span>←</span> Chapter 10
          </Link>
          <div />
        </div>
      </main>
    </>
  );
}
