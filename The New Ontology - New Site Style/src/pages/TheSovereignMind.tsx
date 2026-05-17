import { Navigation } from '@/components/Navigation';
import { PlasmaBackground } from '@/components/PlasmaBackground';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, BookOpen, Shield, Eye, Lock, Zap } from 'lucide-react';

export default function TheSovereignMind() {
  return (
    <div data-ev-id="ev_1d012b1b9a" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Hero */}
			<section data-ev-id="ev_34d45eb56d" className="relative pt-32 pb-20 px-6 overflow-hidden">
				<PlasmaBackground />
				
				<div data-ev-id="ev_86bd0f2281" className="relative z-10 max-w-4xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors mb-8">

						<ChevronLeft size={14} />
						Back to Home
					</Link>

					<p data-ev-id="ev_3795e98a25" className="font-mono text-xs tracking-[0.3em] text-[#ff8c00] uppercase mb-4">
						Volume II
					</p>

					<h1 data-ev-id="ev_fa231787e1" className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#e8d5c4] mb-6">
						The Sovereign Mind
					</h1>

					<p data-ev-id="ev_1aed359db0" className="font-mono text-sm text-[#cd853f] max-w-2xl leading-relaxed mb-8">
						Protocols for psychological sovereignty — navigating ontological shock, 
						reclaiming autonomy, and building unshakeable clarity in an age of 
						unprecedented information warfare.
					</p>

					<div data-ev-id="ev_9b16870052" className="flex items-center gap-6">
						<div data-ev-id="ev_33e48ad26a" className="flex items-center gap-2">
							<BookOpen size={14} className="text-[#8b4513]" />
							<span data-ev-id="ev_51ff314c1e" className="font-mono text-xs text-[#8b4513]">6 Chapters</span>
						</div>
						<div data-ev-id="ev_de8dff10fb" className="h-3 w-px bg-[#8b4513]/30" />
						<span data-ev-id="ev_6a6b3a6926" className="font-mono text-xs text-[#8b4513]">~40 min read</span>
					</div>
				</div>
			</section>

			{/* Content */}
			<section data-ev-id="ev_107bc4a002" className="px-6 pb-24">
				<div data-ev-id="ev_39ac7a9e28" className="max-w-4xl mx-auto">
					<article data-ev-id="ev_d20214eadc">
						<section data-ev-id="ev_a08e0ea4e0" className="mb-20">
							<div data-ev-id="ev_0a6de078f1" className="flex items-center gap-3 mb-6">
								<Shield size={24} className="text-[#ff8c00]" />
								<h2 data-ev-id="ev_a234e2caf3" className="font-sans text-2xl md:text-3xl font-light text-[#e8d5c4] tracking-[-0.02em]">
									Psychological Sovereignty
								</h2>
							</div>
							<p data-ev-id="ev_79dfca3554" className="font-sans text-base text-[#cd853f] leading-[1.8] mb-6">
								In an information environment saturated with disinformation, psychological
								operations, and competing narratives, the ability to maintain cognitive 
								clarity is not merely useful—it is essential for survival.
							</p>
							<p data-ev-id="ev_ab901618a2" className="font-sans text-base text-[#cd853f] leading-[1.8] mb-6">
								This volume provides practical frameworks for maintaining psychological 
								sovereignty: tools for evaluating sources, detecting manipulation patterns, 
								and developing an internal compass that remains stable even as external 
								realities shift dramatically.
							</p>
						</section>
						
						{/* Core Protocols */}
						<section data-ev-id="ev_d55dcdcc75" className="mb-20">
							<h3 data-ev-id="ev_ada722d754" className="font-mono text-xs tracking-[0.2em] text-[#ff8c00] uppercase mb-8">
								Core Sovereignty Protocols
							</h3>
							<div data-ev-id="ev_48afc3b769" className="grid md:grid-cols-2 gap-6">
								<div data-ev-id="ev_9f311f00e1" className="p-6 border border-[#8b4513]/30 bg-[#1a0a0a]/30">
									<Eye size={20} className="text-[#ff4500] mb-4" />
									<h4 data-ev-id="ev_3b0287ac10" className="font-sans text-lg text-[#e8d5c4] mb-2">
										Perception Auditing
									</h4>
									<p data-ev-id="ev_efabce0157" className="font-mono text-xs text-[#8b4513] leading-relaxed">
										Regular examination of how your beliefs were formed and what 
										evidence supports them.
									</p>
								</div>
								<div data-ev-id="ev_e66449f11c" className="p-6 border border-[#8b4513]/30 bg-[#1a0a0a]/30">
									<Lock size={20} className="text-[#ff8c00] mb-4" />
									<h4 data-ev-id="ev_c4cb60533d" className="font-sans text-lg text-[#e8d5c4] mb-2">
										Narrative Firewalling
									</h4>
									<p data-ev-id="ev_81487b49ff" className="font-mono text-xs text-[#8b4513] leading-relaxed">
										Techniques for consuming information without automatic belief 
										adoption or emotional hijacking.
									</p>
								</div>
								<div data-ev-id="ev_8a07da71a0" className="p-6 border border-[#8b4513]/30 bg-[#1a0a0a]/30">
									<Zap size={20} className="text-[#ffa500] mb-4" />
									<h4 data-ev-id="ev_d41960886e" className="font-sans text-lg text-[#e8d5c4] mb-2">
										Ontological Resilience
									</h4>
									<p data-ev-id="ev_19369db143" className="font-mono text-xs text-[#8b4513] leading-relaxed">
										Building psychological stability that persists even when 
										fundamental worldviews are disrupted.
									</p>
								</div>
								<div data-ev-id="ev_e8d552c843" className="p-6 border border-[#8b4513]/30 bg-[#1a0a0a]/30">
									<Shield size={20} className="text-[#cd853f] mb-4" />
									<h4 data-ev-id="ev_e3e27d85f3" className="font-sans text-lg text-[#e8d5c4] mb-2">
										Source Triangulation
									</h4>
									<p data-ev-id="ev_5dcd14c0ab" className="font-mono text-xs text-[#8b4513] leading-relaxed">
										Methodologies for evaluating claims through multiple independent 
										channels and frameworks.
									</p>
								</div>
							</div>
						</section>

						<blockquote data-ev-id="ev_d95458c370" className="border-l-2 border-[#ff8c00]/50 pl-6 my-8">
							<p data-ev-id="ev_69691ab65b" className="font-mono text-sm text-[#e8d5c4] italic">
								"The first principle is that you must not fool yourself—and you are 
								the easiest person to fool."
							</p>
							<cite data-ev-id="ev_f33ba1327d" className="font-mono text-xs text-[#8b4513] mt-2 block">
								— Richard Feynman
							</cite>
						</blockquote>
					</article>

					{/* Navigation */}
					<div data-ev-id="ev_71773b58f3" className="mt-16 pt-8 border-t border-[#8b4513]/30 flex items-center justify-between">
						<Link
              to="/the-next-human-ontology"
              className="group flex items-center gap-3 font-mono text-sm text-[#8b4513] hover:text-[#cd853f] transition-colors">

							<ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
							<span data-ev-id="ev_0daa6e3928">Previous: Volume I</span>
						</Link>
						<Link
              to="/the-bigger-world"
              className="group flex items-center gap-3 font-mono text-sm text-[#8b4513] hover:text-[#cd853f] transition-colors">

							<span data-ev-id="ev_29dc072297">Next: Volume III</span>
							<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</div>
			</section>

			<footer data-ev-id="ev_79a68c56a2" className="py-8 px-6 border-t border-[#8b4513]/30">
				<div data-ev-id="ev_7668f0b34c" className="max-w-4xl mx-auto text-center font-mono text-xs text-[#8b4513]">
					The New Ontology · Volume II
				</div>
			</footer>
		</div>);