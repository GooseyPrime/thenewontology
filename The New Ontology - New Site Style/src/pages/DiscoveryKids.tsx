import { Navigation } from '@/components/Navigation';
import { KidsBackground } from '@/components/KidsBackground';
import { Drone3D } from '@/components/Drone3D';
import { Link } from 'react-router';
import { Star, Rocket, Telescope, Brain, Sparkles, ArrowRight, ChevronLeft, BookOpen, Lightbulb } from 'lucide-react';

const EXPLORE_TOPICS = [
{
  title: 'How Big is Space?',
  icon: Telescope,
  desc: 'Journey to the edge of the observable universe!',
  color: '#7dd3fc'
},
{
  title: 'Your Amazing Brain',
  icon: Brain,
  desc: 'The most complex thing in the known universe.',
  color: '#c4b5fd'
},
{
  title: 'Light & Energy',
  icon: Lightbulb,
  desc: 'Everything around you is made of vibrating energy!',
  color: '#fcd34d'
},
{
  title: 'Are We Alone?',
  icon: Rocket,
  desc: 'The big question scientists are working to answer.',
  color: '#f9a8d4'
}];


const FUN_FACTS = [
'There are more stars in the universe than grains of sand on all of Earth\'s beaches!',
'Light from the Sun takes 8 minutes to reach Earth.',
'Your brain has about 86 billion neurons - that\'s more than 10x the human population!',
'The universe is about 13.8 billion years old.',
'Sound can\'t travel in space because there\'s no air!'];


export default function DiscoveryKids() {
  return (
    <div data-ev-id="ev_9955c43bce" className="min-h-screen bg-gradient-to-b from-[#0b1b3d] via-[#1a1a4e] to-[#0d2847] text-white font-sans">
			<Navigation />
			<KidsBackground />

			{/* Hero Section */}
			<section data-ev-id="ev_31b4d06d75" className="relative pt-28 pb-16 px-6 overflow-hidden">
				<div data-ev-id="ev_0c8afbbfec" className="relative z-10 max-w-5xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 text-sm mb-8">

						<ChevronLeft size={16} />
						Back to Main Site
					</Link>

					<div data-ev-id="ev_62416c6ab8" className="flex flex-col lg:flex-row items-center gap-12">
						<div data-ev-id="ev_7ff6426d86" className="flex-1 text-center lg:text-left">
							<div data-ev-id="ev_c96190b462" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fcd34d]/20 border border-[#fcd34d]/40 mb-6">
								<Sparkles size={16} className="text-[#fcd34d]" />
								<span data-ev-id="ev_f93c059bcf" className="text-sm text-[#fcd34d] font-medium">Young Explorers Zone</span>
							</div>

							<h1 data-ev-id="ev_c0f8c3149c" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
								<span data-ev-id="ev_80ddb03cc6" className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd]">
									Discover the
								</span>
								<br data-ev-id="ev_ec7c456c1d" />
								<span data-ev-id="ev_8d68c954e3" className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9a8d4] to-[#fcd34d]">
									Bigger World!
								</span>
							</h1>

							<p data-ev-id="ev_8683ec0594" className="text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
								Welcome, explorer! 🚀 Get ready to learn about space, science, and 
								the incredible mysteries of our universe. The adventure starts here!
							</p>

							<Link
                to="/the-bigger-world"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] text-[#0b1b3d] font-semibold hover:shadow-[0_0_40px_rgba(125,211,252,0.5)] transition-all duration-300 hover:scale-105">

								<BookOpen size={20} />
								Start Reading Volume III
							</Link>
						</div>

						{/* Mascot */}
						<div data-ev-id="ev_138ea29c14" className="relative">
							<div data-ev-id="ev_b03adee63e" className="absolute inset-0 blur-[80px] bg-[#7dd3fc]/40 rounded-full" />
							<Drone3D size={300} />
							<div data-ev-id="ev_aba988f709" className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
								<p data-ev-id="ev_d4672e1294" className="text-sm text-white/80">Meet Cosmo! 👋</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Explore Topics */}
			<section data-ev-id="ev_42a34aa7ff" className="relative z-10 py-20 px-6">
				<div data-ev-id="ev_45a88c3b71" className="max-w-5xl mx-auto">
					<h2 data-ev-id="ev_3119261851" className="text-2xl md:text-3xl font-bold text-center mb-4">
						<Star size={24} className="inline text-[#fcd34d] mr-2" fill="#fcd34d" />
						Explore Amazing Topics
					</h2>
					<p data-ev-id="ev_a03c87c5f9" className="text-white/60 text-center mb-12">
						Click on any topic to start learning!
					</p>

					<div data-ev-id="ev_0f5eace60a" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{EXPLORE_TOPICS.map((topic, i) =>
            <Link
              key={topic.title}
              to="/the-bigger-world"
              className="group p-6 rounded-3xl bg-white/10 backdrop-blur-sm border-2 hover:scale-105 transition-all duration-300"
              style={{
                borderColor: `${topic.color}30`,
                animation: `bounceIn 0.6s ease-out ${i * 0.1}s both`
              }}>

								<topic.icon
                size={40}
                className="mb-4 transition-transform group-hover:scale-110"
                style={{ color: topic.color }} />

								<h3 data-ev-id="ev_fb45c78c8a" className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
									{topic.title}
								</h3>
								<p data-ev-id="ev_1aacc81513" className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
									{topic.desc}
								</p>
							</Link>
            )}
					</div>
				</div>
			</section>

			{/* Fun Facts */}
			<section data-ev-id="ev_94d13643a5" className="relative z-10 py-16 px-6 bg-white/5">
				<div data-ev-id="ev_69f7498b5d" className="max-w-4xl mx-auto">
					<h2 data-ev-id="ev_1c740ba628" className="text-2xl font-bold text-center mb-8">
						🤯 Mind-Blowing Facts!
					</h2>

					<div data-ev-id="ev_6eff168681" className="flex flex-col gap-4">
						{FUN_FACTS.map((fact, i) =>
            <div data-ev-id="ev_9059092a16"
            key={i}
            className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
            style={{
              animation: `slideIn 0.5s ease-out ${i * 0.1}s both`
            }}>

								<div data-ev-id="ev_8854fcca9d" className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fcd34d]/20 flex items-center justify-center">
									<Star size={14} className="text-[#fcd34d]" fill="#fcd34d" />
								</div>
								<p data-ev-id="ev_dfdd9f227e" className="text-white/80">{fact}</p>
							</div>
            )}
					</div>
				</div>
			</section>

			{/* For Parents/Educators */}
			<section data-ev-id="ev_229e3f9346" className="relative z-10 py-20 px-6">
				<div data-ev-id="ev_f73993b5d1" className="max-w-3xl mx-auto text-center">
					<h2 data-ev-id="ev_5d3b92a085" className="text-2xl font-bold mb-4">For Parents & Educators</h2>
					<p data-ev-id="ev_2ec78ebfe6" className="text-white/60 leading-relaxed mb-8">
						The Bigger World (Volume III) is designed to introduce complex scientific 
						concepts to young minds ages 8-14. All content is age-appropriate, focuses 
						on wonder and curiosity, and encourages critical thinking without overwhelming 
						or frightening young readers.
					</p>
					<Link
            to="/reading-guide"
            className="inline-flex items-center gap-2 text-[#7dd3fc] hover:text-white transition-colors">

						View Reading Guide
						<ArrowRight size={16} />
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer data-ev-id="ev_9ec1d6f810" className="relative z-10 py-8 px-6 border-t border-white/10">
				<div data-ev-id="ev_e46dfcf4bc" className="max-w-5xl mx-auto flex items-center justify-center gap-2">
					<Sparkles size={14} className="text-[#fcd34d]" />
					<span data-ev-id="ev_7bd13a7f92" className="text-white/60 text-sm">
						The New Ontology · Young Explorers Zone
					</span>
				</div>
			</footer>

			<style data-ev-id="ev_e250d552c9">{`
				@keyframes bounceIn {
					0% { opacity: 0; transform: scale(0.8); }
					70% { transform: scale(1.05); }
					100% { opacity: 1; transform: scale(1); }
				}
				@keyframes slideIn {
					from { opacity: 0; transform: translateX(-20px); }
					to { opacity: 1; transform: translateX(0); }
				}
			`}</style>
		</div>);