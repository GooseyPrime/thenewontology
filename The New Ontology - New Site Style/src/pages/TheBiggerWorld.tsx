import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { KidsBackground } from '@/components/KidsBackground';
import { Drone3D } from '@/components/Drone3D';
import { Link } from 'react-router';
import { ChevronLeft, Star, Rocket, Sparkles, Telescope, Atom, Heart } from 'lucide-react';

const CHAPTERS = [
{ id: 'welcome', title: 'Welcome', subtitle: 'Your Adventure Begins Here!' },
{ id: 'chapter-1', title: 'Chapter 1', subtitle: 'How Big is the Universe?' },
{ id: 'chapter-2', title: 'Chapter 2', subtitle: 'Are We Alone?' },
{ id: 'chapter-3', title: 'Chapter 3', subtitle: 'The Magic of Light' },
{ id: 'chapter-4', title: 'Chapter 4', subtitle: 'Your Amazing Brain' },
{ id: 'chapter-5', title: 'Chapter 5', subtitle: 'Mysteries Scientists Study' }];


export default function TheBiggerWorld() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <div data-ev-id="ev_007c63e488" className="min-h-screen bg-gradient-to-b from-[#0b1b3d] via-[#1a1a4e] to-[#0d2847] text-white font-sans">
			<Navigation />
			<KidsBackground />

			{/* Hero */}
			<section data-ev-id="ev_10e1e9cb72" className="relative pt-28 pb-12 px-6 overflow-hidden">
				<div data-ev-id="ev_5133cb0b06" className="relative z-10 max-w-5xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 text-sm mb-8">

						<ChevronLeft size={16} />
						Back to Home
					</Link>

					<div data-ev-id="ev_58cc53a3ae" className="flex flex-col lg:flex-row items-center gap-8">
						<div data-ev-id="ev_4e0c85e97f" className="flex-1">
							<div data-ev-id="ev_fe85011b65" className="flex items-center gap-3 mb-4">
								<div data-ev-id="ev_08de34ad58" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fcd34d]/20 border border-[#fcd34d]/40">
									<Sparkles size={14} className="text-[#fcd34d]" />
									<span data-ev-id="ev_a2f5778cc5" className="text-xs text-[#fcd34d] font-medium">Volume III · Young Explorers</span>
								</div>
							</div>

							<h1 data-ev-id="ev_2e51d0da7e" className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
								<span data-ev-id="ev_e2fe237512" className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd]">
									The Bigger World
								</span>
							</h1>

							<p data-ev-id="ev_f76ff10791" className="text-lg text-white/70 max-w-lg leading-relaxed mb-6">
								A guide for young explorers — the universe is larger, stranger, and more 
								wonderful than you were ever told. Let's discover it together!
							</p>

							<div data-ev-id="ev_63ed9163ab" className="flex flex-wrap items-center gap-4">
								<div data-ev-id="ev_a4ed42908d" className="flex items-center gap-2 text-[#7dd3fc]">
									<Rocket size={16} />
									<span data-ev-id="ev_f6eb8e4355" className="text-sm">6 Chapters</span>
								</div>
								<div data-ev-id="ev_73825a8aeb" className="flex items-center gap-2 text-[#c4b5fd]">
									<Star size={16} fill="currentColor" />
									<span data-ev-id="ev_16083f495b" className="text-sm">Ages 8-14</span>
								</div>
							</div>
						</div>

						<div data-ev-id="ev_0fdadb7910" className="relative">
							<div data-ev-id="ev_d03e7d69b7" className="absolute inset-0 blur-[60px] bg-[#7dd3fc]/30 rounded-full" />
							<Drone3D size={240} />
						</div>
					</div>
				</div>
			</section>

			{/* Chapter Navigation */}
			<section data-ev-id="ev_a1969551e7" className="relative z-10 py-8 px-6">
				<div data-ev-id="ev_a8e8e7e27a" className="max-w-5xl mx-auto">
					<div data-ev-id="ev_2563ed014d" className="flex flex-wrap gap-3 justify-center">
						{CHAPTERS.map((ch, i) =>
            <button data-ev-id="ev_e57c8624ad"
            key={ch.id}
            onClick={() => setActiveChapter(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeChapter === i ?
            'bg-[#7dd3fc] text-[#0b1b3d]' :
            'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`
            }>

								{ch.title}
							</button>
            )}
					</div>
				</div>
			</section>

			{/* Content */}
			<section data-ev-id="ev_2bcdaf08ff" className="relative z-10 py-12 px-6">
				<div data-ev-id="ev_10636b7758" className="max-w-4xl mx-auto">
					<div data-ev-id="ev_f37b048acf" className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
						<h2 data-ev-id="ev_dd82439be5" className="text-2xl md:text-3xl font-bold text-white mb-4">
							{CHAPTERS[activeChapter].subtitle}
						</h2>

						{activeChapter === 0 &&
            <>
								<p data-ev-id="ev_9a96d86086" className="text-lg text-white/80 leading-relaxed mb-6">
									Hello, explorer! 👋 You're about to learn some of the most amazing things 
									about our universe. Things that even many adults don't know yet!
								</p>
								<p data-ev-id="ev_70002d0f42" className="text-lg text-white/80 leading-relaxed mb-6">
									The world is much bigger and more mysterious than what we learn in school. 
									Scientists are making incredible discoveries every day about space, about 
									your brain, and about things that seem almost like magic!
								</p>
								<div data-ev-id="ev_8f3adc88ee" className="p-6 rounded-2xl bg-[#fcd34d]/10 border border-[#fcd34d]/30 mt-8">
									<div data-ev-id="ev_89aab26919" className="flex items-center gap-3 mb-3">
										<Heart size={20} className="text-[#f9a8d4]" fill="#f9a8d4" />
										<span data-ev-id="ev_8a8e23e6bb" className="font-semibold text-[#fcd34d]">Remember!</span>
									</div>
									<p data-ev-id="ev_06f2e8b18c" className="text-white/80">
										It's okay to have questions. It's okay to be confused sometimes. 
										That's how all great scientists feel! The best explorers are curious 
										and aren't afraid to say "I wonder why..."
									</p>
								</div>
							</>
            }

						{activeChapter === 1 &&
            <>
								<div data-ev-id="ev_13f1ffbf23" className="flex items-center gap-4 mb-6">
									<Telescope size={32} className="text-[#7dd3fc]" />
								</div>
								<p data-ev-id="ev_c17083cc1e" className="text-lg text-white/80 leading-relaxed mb-6">
									Imagine you could travel at the speed of light — that's 186,000 miles 
									every single second! At that speed, you could circle Earth 7 times in 
									just one second.
								</p>
								<p data-ev-id="ev_2d59d2e123" className="text-lg text-white/80 leading-relaxed mb-6">
									But even traveling that fast, it would take you 4 YEARS just to reach 
									the nearest star! And our galaxy has over 100 BILLION stars. And there 
									are over 2 TRILLION galaxies we can see!
								</p>
								<div data-ev-id="ev_2a028647db" className="p-6 rounded-2xl bg-[#7dd3fc]/10 border border-[#7dd3fc]/30">
									<p data-ev-id="ev_24d9d0b990" className="text-[#7dd3fc] font-semibold mb-2">
										🤯 Mind-Blowing Fact:
									</p>
									<p data-ev-id="ev_c482360b31" className="text-white/80">
										There are more stars in the universe than grains of sand on ALL of 
										Earth's beaches combined!
									</p>
								</div>
							</>
            }

						{activeChapter === 2 &&
            <>
								<p data-ev-id="ev_662333cc94" className="text-lg text-white/80 leading-relaxed mb-6">
									With so many stars and planets out there, scientists think it would 
									be very strange if Earth was the ONLY place with life. It's one of 
									the biggest questions humans have ever asked!
								</p>
								<p data-ev-id="ev_90e729226f" className="text-lg text-white/80 leading-relaxed mb-6">
									Some very smart people — scientists, pilots, and even government 
									officials — say they've seen things in the sky they can't explain. 
									They're working hard to figure out what these things are.
								</p>
								<div data-ev-id="ev_5c7b77ddc8" className="p-6 rounded-2xl bg-[#c4b5fd]/10 border border-[#c4b5fd]/30">
									<p data-ev-id="ev_637bf46173" className="text-[#c4b5fd] font-semibold mb-2">
										🌟 What do YOU think?
									</p>
									<p data-ev-id="ev_0f2958ef94" className="text-white/80">
										If you were an alien scientist looking at Earth from far away, 
										what would you notice first? What would you think of humans?
									</p>
								</div>
							</>
            }

						{activeChapter >= 3 &&
            <div data-ev-id="ev_a7f5943a33" className="text-center py-8">
								<Atom size={48} className="text-[#7dd3fc] mx-auto mb-4" />
								<p data-ev-id="ev_39a2a56851" className="text-lg text-white/60">
									More chapters coming soon! Keep exploring! 🚀
								</p>
							</div>
            }
					</div>
				</div>
			</section>

			{/* CTA to Discovery Kids */}
			<section data-ev-id="ev_d7dda88763" className="relative z-10 py-12 px-6">
				<div data-ev-id="ev_65cb0cd85b" className="max-w-4xl mx-auto text-center">
					<p data-ev-id="ev_5438dbb0d4" className="text-white/60 mb-4">Want more fun activities and games?</p>
					<Link
            to="/discovery-kids"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] text-[#0b1b3d] font-semibold hover:shadow-[0_0_30px_rgba(125,211,252,0.4)] transition-all duration-300">

						<Rocket size={18} />
						Visit the Discovery Zone
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer data-ev-id="ev_2cd0193223" className="relative z-10 py-8 px-6 border-t border-white/10">
				<div data-ev-id="ev_3cb502112a" className="max-w-5xl mx-auto flex items-center justify-center gap-2">
					<Star size={14} className="text-[#fcd34d]" fill="#fcd34d" />
					<span data-ev-id="ev_f40b9f6beb" className="text-white/60 text-sm">The New Ontology · Volume III · Young Explorers</span>
				</div>
			</footer>
		</div>);