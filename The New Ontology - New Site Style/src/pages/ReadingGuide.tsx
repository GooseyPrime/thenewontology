import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router';
import { ChevronLeft, Compass, BookOpen, Brain, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function ReadingGuide() {
  return (
    <div data-ev-id="ev_f05b998fda" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Header */}
			<section data-ev-id="ev_0e9b0c5d94" className="pt-32 pb-12 px-6 border-b border-[#8b4513]/30">
				<div data-ev-id="ev_42b6548e99" className="max-w-4xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors mb-8">

						<ChevronLeft size={14} />
						Back to Home
					</Link>

					<div data-ev-id="ev_0495f41642" className="flex items-center gap-3 mb-4">
						<Compass size={24} className="text-[#ff4500]" />
						<h1 data-ev-id="ev_c0e19ab115" className="font-sans text-3xl md:text-4xl font-light tracking-[-0.02em]">
							Reading Guide
						</h1>
					</div>

					<p data-ev-id="ev_bc49a6940a" className="font-mono text-sm text-[#cd853f]">
						Protocols for navigating the profound concepts within
					</p>
				</div>
			</section>

			{/* Content */}
			<section data-ev-id="ev_2acedd3db3" className="py-16 px-6">
				<div data-ev-id="ev_98d1636392" className="max-w-4xl mx-auto">
					{/* Recommended Order */}
					<div data-ev-id="ev_6f8a29d7a3" className="mb-20">
						<h2 data-ev-id="ev_4c95f3bf93" className="font-mono text-xs tracking-[0.3em] text-[#ff4500] uppercase mb-8">
							Recommended Reading Order
						</h2>

						<div data-ev-id="ev_966a32043a" className="flex flex-col gap-6">
							<div data-ev-id="ev_af96b4fea1" className="flex items-start gap-6 p-6 border border-[#8b4513]/30 hover:border-[#ff4500]/40 transition-colors group">
								<div data-ev-id="ev_604221457b" className="w-12 h-12 flex items-center justify-center border border-[#ff4500]/40 text-[#ff4500] font-mono text-lg">
									01
								</div>
								<div data-ev-id="ev_2047b013bf" className="flex-1">
									<div data-ev-id="ev_667f80bb2c" className="flex items-center gap-2 mb-2">
										<Brain size={16} className="text-[#8b4513]" />
										<span data-ev-id="ev_9f695dde28" className="font-mono text-xs text-[#8b4513]">Volume I</span>
									</div>
									<h3 data-ev-id="ev_7377aa0530" className="font-sans text-xl text-[#e8d5c4] group-hover:text-white transition-colors mb-2">
										The Next Human Ontology
									</h3>
									<p data-ev-id="ev_8eddd745f5" className="font-mono text-sm text-[#8b4513]">
										Begin here. Establishes the conceptual framework for understanding 
										the fundamental shift in human consciousness and reality.
									</p>
								</div>
								<ArrowRight size={18} className="text-[#ff4500] opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>

							<div data-ev-id="ev_b2ede369e1" className="flex items-start gap-6 p-6 border border-[#8b4513]/30 hover:border-[#ff8c00]/40 transition-colors group">
								<div data-ev-id="ev_d169f4edca" className="w-12 h-12 flex items-center justify-center border border-[#ff8c00]/40 text-[#ff8c00] font-mono text-lg">
									02
								</div>
								<div data-ev-id="ev_46d1bedc67" className="flex-1">
									<div data-ev-id="ev_441a717cd1" className="flex items-center gap-2 mb-2">
										<Shield size={16} className="text-[#8b4513]" />
										<span data-ev-id="ev_e8a88b8f85" className="font-mono text-xs text-[#8b4513]">Volume II</span>
									</div>
									<h3 data-ev-id="ev_94c5fe128d" className="font-sans text-xl text-[#e8d5c4] group-hover:text-white transition-colors mb-2">
										The Sovereign Mind
									</h3>
									<p data-ev-id="ev_277697a93e" className="font-mono text-sm text-[#8b4513]">
										Protocols for psychological sovereignty. Navigate ontological shock 
										and build unshakeable clarity.
									</p>
								</div>
								<ArrowRight size={18} className="text-[#ff8c00] opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>

							<div data-ev-id="ev_3bb3492bcc" className="flex items-start gap-6 p-6 border-2 border-[#7dd3fc]/30 rounded-2xl bg-gradient-to-br from-[#0b1b3d]/30 to-[#1a1a4e]/20 hover:border-[#7dd3fc]/50 transition-colors group">
								<div data-ev-id="ev_e117e96424" className="w-12 h-12 flex items-center justify-center border border-[#7dd3fc]/40 text-[#7dd3fc] font-mono text-lg rounded-xl">
									03
								</div>
								<div data-ev-id="ev_b0cb8065dd" className="flex-1">
									<div data-ev-id="ev_08a823072f" className="flex items-center gap-2 mb-2">
										<Sparkles size={16} className="text-[#fcd34d]" />
										<span data-ev-id="ev_66d786b691" className="font-mono text-xs text-[#7dd3fc]">Volume III · Young Explorers</span>
									</div>
									<h3 data-ev-id="ev_1376a9ae48" className="font-sans text-xl text-white group-hover:text-[#7dd3fc] transition-colors mb-2">
										The Bigger World
									</h3>
									<p data-ev-id="ev_f9b0226929" className="font-sans text-sm text-[#a0b4c8]">
										A guide for young explorers — the universe is larger, stranger, 
										and more wonderful than you were ever told.
									</p>
								</div>
								<ArrowRight size={18} className="text-[#7dd3fc] opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</div>
					</div>

					{/* Principles */}
					<div data-ev-id="ev_e360f63042" className="mb-20">
						<h2 data-ev-id="ev_3a8dfc376f" className="font-mono text-xs tracking-[0.3em] text-[#cd853f] uppercase mb-8">
							Core Reading Principles
						</h2>

						<div data-ev-id="ev_e77d892811" className="grid md:grid-cols-2 gap-6">
							<div data-ev-id="ev_5c0cee4835" className="p-6 border border-[#8b4513]/30">
								<h3 data-ev-id="ev_b4e05bd51e" className="font-sans text-lg text-[#e8d5c4] mb-3">Suspend Disbelief Strategically</h3>
								<p data-ev-id="ev_3b4ae41ff7" className="font-mono text-sm text-[#8b4513] leading-relaxed">
									Approach the material with an open but critical mind. The goal is not
									belief or disbelief, but understanding the framework being presented.
								</p>
							</div>

							<div data-ev-id="ev_eaa504c56e" className="p-6 border border-[#8b4513]/30">
								<h3 data-ev-id="ev_42853b6cb4" className="font-sans text-lg text-[#e8d5c4] mb-3">Cross-Reference Actively</h3>
								<p data-ev-id="ev_ac2121a5f7" className="font-mono text-sm text-[#8b4513] leading-relaxed">
									Use the Glossary and Timeline as companions. Terms and events referenced
									in the text have expanded entries in these appendices.
								</p>
							</div>

							<div data-ev-id="ev_80ee5c03a1" className="p-6 border border-[#8b4513]/30">
								<h3 data-ev-id="ev_d617eda022" className="font-sans text-lg text-[#e8d5c4] mb-3">Process Incrementally</h3>
								<p data-ev-id="ev_50aae769aa" className="font-mono text-sm text-[#8b4513] leading-relaxed">
									Ontological shock is real. If material becomes overwhelming, pause.
									Integration takes time. There is no urgency.
								</p>
							</div>

							<div data-ev-id="ev_24326f992f" className="p-6 border border-[#8b4513]/30">
								<h3 data-ev-id="ev_7a22058f47" className="font-sans text-lg text-[#e8d5c4] mb-3">Document Your Journey</h3>
								<p data-ev-id="ev_849c3804f6" className="font-mono text-sm text-[#8b4513] leading-relaxed">
									Keep notes on your evolving understanding. Your initial reactions and
									questions are valuable data points in your ontological recalibration.
								</p>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div data-ev-id="ev_7ad2ff6585" className="text-center py-12 border-t border-[#8b4513]/30">
						<p data-ev-id="ev_1c65b18e16" className="font-mono text-sm text-[#8b4513] mb-6">Ready to begin?</p>
						<Link
              to="/the-next-human-ontology"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#ff4500]/50 text-[#e8d5c4] font-mono text-sm hover:border-[#ff4500] hover:shadow-[0_0_30px_rgba(255,69,0,0.3)] transition-all duration-300">

							Start with Volume I
							<ArrowRight size={16} />
						</Link>
					</div>
				</div>
			</section>
		</div>);