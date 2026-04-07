import Link from "next/link";

export const metadata = { title: "Chapter 6: Feelings Are Data Too | The Bigger World" };

export default function Chapter6Page() {
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
        <Link href="/the-bigger-world" className="inline-flex items-center gap-2 text-violet-300/70 hover:text-violet-200 text-xs uppercase tracking-widest font-sans mb-10 no-underline transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> The Bigger World
        </Link>
        <div className="mb-10 text-center">
          <p className="text-violet-300/60 text-xs uppercase tracking-widest font-sans mb-2">Chapter 6</p>
          <h1
            className="font-sans text-4xl md:text-5xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #facc15, #a78bfa, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Feelings Are Data Too
          </h1>
        </div>
        <div className="prose prose-invert">

          <h2>6.1 It's Okay to Feel Weird About All This</h2>

          <h3>Emotions as Clues: Decoding the Mystery</h3>
          <p>
            Imagine you are a detective in a vast, intricate world. Your emotions are like secret messages, each
            waiting to be decoded. Sometimes, you might feel a whirlwind of excitement and fear when pondering
            mysterious topics like AI, UFOs, or consciousness — subjects that even adults find baffling. It is
            perfectly okay to feel weird, confused, or overwhelmed by these things.
          </p>
          <p>
            When you name your emotions — whether it is excitement, fear, or just plain weirdness — you are like
            a scientist using a microscope to examine tiny clues in a great mystery. Research shows that naming
            feelings can make them less intense and easier to understand. Just like traffic lights guide cars
            safely on the road, your emotions guide you through the twists and turns of life. They signal what
            is happening inside you, helping you to slow down, proceed with caution, or zoom ahead.
          </p>

          <h3>Activity: Create Your Feeling Map</h3>
          <p>
            Try keeping a <em>Feeling Journal</em>. Every day, write down the different emotions you experience.
            Next to each emotion, draw a colour or symbol that you feel represents it. Over time, you will
            create a colourful map of your emotional landscape, helping you understand yourself even better.
          </p>

          <h2>6.2 The Anxiety Toolkit</h2>

          <h3>Grounding in the Present Moment</h3>
          <p>
            Picture your mind as a scientist's laboratory. Sometimes, things can get chaotic with too many
            ideas and worries floating around. <strong>Grounding techniques</strong> are like cleaning your lab
            bench so you can focus on the present moment. Imagine sitting quietly and noticing five things you
            can see, four you can touch, three you can hear, two you can smell, and one you can taste. This
            exercise pulls you back to the here and now, reducing anxiety by shifting your focus from
            overwhelming thoughts to the real world around you.
          </p>

          <h3>Actionable vs. Observable Problems</h3>
          <p>
            Life presents us with a constant flow of challenges. Some are like puzzles you can solve
            (<strong>actionable problems</strong>), while others are like weather patterns you observe
            (<strong>observable problems</strong>). Knowing the difference can help you feel more in control.
            Think of your mind as an email inbox: some emails require immediate replies, while others can be
            archived or observed without needing immediate action.
          </p>

          <h3>Activity: Organise Your Thoughts</h3>
          <p>
            Write down a worry and split the paper into two columns: <em>&quot;Things I Can Change&quot;</em> and
            <em>&quot;Things I Can Only Notice.&quot;</em> Share this with a trusted adult or friend to see how they
            might categorise their own worries.
          </p>

          <h2>6.3 When Adults Don't Have Answers</h2>

          <h3>Navigating the Unknown Together</h3>
          <p>
            Life is a grand &quot;choose-your-adventure&quot; story, and even the most experienced adventurers — your
            parents, teachers, and mentors — sometimes turn a page without knowing what lies ahead. This
            uncertainty can be exciting! It is an opportunity to learn and grow together. When adults admit
            they don't have all the answers, it is not a sign of weakness. Instead, it is an invitation to
            explore and discover new things as a team.
          </p>

          <h3>Epistemic Curiosity: Embrace the Questions</h3>
          <p>
            When you hear &quot;I don't know,&quot; think of it as a spark for your curiosity. Imagine a science lab
            where every new experiment is a chance to uncover something amazing. The world is full of mysteries
            waiting to be solved. Your questions, ideas, and curiosity are the keys to unlocking those mysteries.
          </p>

          <h3>Activity: The Question Jar</h3>
          <p>
            Keep a jar in your classroom or home. Whenever you or an adult hear something puzzling or
            intriguing, write it down and drop it in the jar. Later, explore these questions together. It is
            a fun way to practise curiosity and collaborative learning.
          </p>

          <h2>6.4 Your Support Network</h2>

          <h3>Building Your Constellation</h3>
          <p>
            Think of your support network as a constellation in the night sky. Each star, or person, emits its
            own light, and together they form a pattern that guides you through life's challenges. Your
            constellation should include one family member, one friend, and one trusted adult outside your
            family, like a teacher or coach. These individuals provide different perspectives and support,
            helping you navigate through both simple and complex emotions.
          </p>

          <h3>The Role of Validation</h3>
          <p>
            <strong>Validation</strong> means acknowledging that your feelings are real and important. It is
            like having a coach who helps you strategise during tough times, or a teammate who is always ready
            to cheer you on. When your emotions are validated, you feel more resilient and confident.
          </p>

          <h2>Try This: Map Your Support Network</h2>
          <p>
            Create a &quot;Map Your Network&quot; diagram as an art project. Draw a diagram with yourself in the centre.
            Branch out with doodles or icons representing your chosen safe people. Write down one quality of
            each person that makes you feel supported. Display it somewhere you can see every day as a reminder
            that you are not alone.
          </p>

          <h2>Parent / Guardian Notes</h2>
          <p>
            When discussing these topics with your child, validate their feelings and remind them that it is
            normal to feel overwhelmed or confused at times. Use phrases like &quot;Yeah, that is a big and confusing
            thing. Let's think about it together&quot; to encourage shared problem-solving. Join in on activities
            like mapping the support network or practising grounding exercises to foster open dialogue about
            emotions and strategies for managing them.
          </p>

          <h2>Conclusion</h2>
          <p>
            Every emotion, question, and relationship is a valuable piece of data in the journey towards
            self-awareness and resilience. Embrace curiosity, ask questions, and remember: the way you feel
            is important data — use it to guide you in building the resilient, critically thinking superperson
            you are becoming.
          </p>

        </div>
        <div className="mt-16 pt-8 border-t border-violet-800/30 flex justify-between items-center">
          <Link href="/the-bigger-world/chapter-5" className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-100 font-sans text-sm no-underline hover:underline underline-offset-4 transition-colors"><span>←</span> Chapter 5</Link>
          <Link href="/the-bigger-world/chapter-7" className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-100 font-sans text-sm no-underline hover:underline underline-offset-4 transition-colors">Chapter 7 <span>→</span></Link>
        </div>
      </div>
    </main>
  );
}
