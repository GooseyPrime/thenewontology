import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { PlasmaBackground } from '@/components/PlasmaBackground';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, BookOpen, List, Brain } from 'lucide-react';

const CHAPTERS = [
{ id: 'introduction', title: 'Introduction', subtitle: 'The Fundamental Shift' },
{ id: 'chapter-1', title: 'Chapter 1', subtitle: 'What Is Ontology?' },
{ id: 'chapter-2', title: 'Chapter 2', subtitle: 'The Old Human Story' },
{ id: 'chapter-3', title: 'Chapter 3', subtitle: 'Cracks in the Narrative' },
{ id: 'chapter-4', title: 'Chapter 4', subtitle: 'The Triple Singularity' },
{ id: 'chapter-5', title: 'Chapter 5', subtitle: 'Consciousness as Foundation' },
{ id: 'chapter-6', title: 'Chapter 6', subtitle: 'The Next Human' },
{ id: 'chapter-7', title: 'Chapter 7', subtitle: 'Integration Protocols' }];


export default function TheNextHumanOntology() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div data-ev-id="ev_e6adb431ef" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Hero */}
			<section data-ev-id="ev_859c916119" className="relative pt-32 pb-20 px-6 overflow-hidden">
				<PlasmaBackground />
				
				<div data-ev-id="ev_587c852a37" className="relative z-10 max-w-4xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors mb-8">

						<ChevronLeft size={14} />
						Back to Home
					</Link>

					<p data-ev-id="ev_40fe0f496b" className="font-mono text-xs tracking-[0.3em] text-[#ff4500] uppercase mb-4">
						Volume I
					</p>

					<h1 data-ev-id="ev_c8b0d5d00e" className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#e8d5c4] mb-6">
						The Next Human Ontology
					</h1>

					<p data-ev-id="ev_d4cb1c048b" className="font-mono text-sm text-[#cd853f] max-w-2xl leading-relaxed mb-8">
						A field manual for understanding the fundamental shift in human consciousness, 
						identity, and collective reality. What does it mean to be human when everything 
						you knew about reality is changing?
					</p>

					<div data-ev-id="ev_5238f4545d" className="flex items-center gap-6">
						<div data-ev-id="ev_b39b42bbeb" className="flex items-center gap-2">
							<BookOpen size={14} className="text-[#8b4513]" />
							<span data-ev-id="ev_abf31d8bb1" className="font-mono text-xs text-[#8b4513]">8 Chapters</span>
						</div>
						<div data-ev-id="ev_fd318db605" className="h-3 w-px bg-[#8b4513]/30" />
						<span data-ev-id="ev_7586ed4719" className="font-mono text-xs text-[#8b4513]">~55 min read</span>
					</div>
				</div>
			</section>

			{/* Content Area */}
			<section data-ev-id="ev_a9f7f1d885" className="px-6 pb-24">
				<div data-ev-id="ev_153d53646f" className="max-w-4xl mx-auto">
					{/* TOC Toggle */}
					<button data-ev-id="ev_51990fd9d0"
          onClick={() => setTocOpen(!tocOpen)}
          className="flex items-center gap-2 font-mono text-xs text-[#cd853f] hover:text-[#e8d5c4] transition-colors mb-8">

						<List size={14} />
						{tocOpen ? 'Hide' : 'Show'} Table of Contents
					</button>

					{/* TOC */}
					{tocOpen &&
          <div data-ev-id="ev_496477d43b" className="mb-12 p-6 border border-[#8b4513]/30 bg-[#1a0a0a]/50">
							<h3 data-ev-id="ev_ee1301a4a9" className="font-mono text-xs tracking-[0.2em] text-[#8b4513] uppercase mb-6">
								Contents
							</h3>
							<div data-ev-id="ev_c7d818b114" className="flex flex-col gap-3">
								{CHAPTERS.map((ch, i) =>
              <a data-ev-id="ev_a4a2ac6555"
              key={ch.id}
              href={`#${ch.id}`}
              className="group flex items-baseline gap-4 hover:bg-[#1a0a0a] p-2 -mx-2 transition-colors">

										<span data-ev-id="ev_c8d2a21362" className="font-mono text-xs text-[#8b4513] w-8">
											{String(i).padStart(2, '0')}
										</span>
										<span data-ev-id="ev_5a5763a256" className="font-sans text-sm text-[#cd853f] group-hover:text-[#e8d5c4] transition-colors">
											{ch.subtitle}
										</span>
									</a>
              )}
							</div>
						</div>
          }

					{/* Sample Content */}
					<article data-ev-id="ev_b2539a2f4f">
						<section data-ev-id="ev_3779744471" id="introduction" className="mb-20">
							<h2 data-ev-id="ev_144c4329a8" className="font-sans text-2xl md:text-3xl font-light text-[#e8d5c4] tracking-[-0.02em] mb-6">
								Introduction: The Fundamental Shift
							</h2>
							<p data-ev-id="ev_00f7b5803a" className="font-sans text-base text-[#cd853f] leading-[1.8] mb-6">
								You are reading this at a unique moment in human history. The story we have 
								told ourselves about who we are, where we came from, and what reality is—
								that story is breaking down. A new one is emerging.
							</p>
							<p data-ev-id="ev_fcdc8d98bf" className="font-sans text-base text-[#cd853f] leading-[1.8] mb-6">
								This is not a gradual evolution. It is an ontological shift—a fundamental 
								change in the structure of reality as humans perceive it. The purpose of 
								this volume is to help you understand what is happening, why it feels 
								disorienting, and how to navigate the transition.
							</p>
							<blockquote data-ev-id="ev_8f8590c11f" className="border-l-2 border-[#ff4500]/50 pl-6 my-8">
								<p data-ev-id="ev_0b6d5e84ab" className="font-mono text-sm text-[#e8d5c4] italic">
									"The real voyage of discovery consists not in seeking new landscapes, 
									but in having new eyes."
								</p>
								<cite data-ev-id="ev_a53c653425" className="font-mono text-xs text-[#8b4513] mt-2 block">
									— Marcel Proust
								</cite>
							</blockquote>
						</section>

						<section data-ev-id="ev_ab26d4e551" id="chapter-1" className="mb-20">
							<p data-ev-id="ev_4e4fc46486" className="font-mono text-xs tracking-[0.2em] text-[#ff4500] uppercase mb-4">
								Chapter 1
							</p>
							<h2 data-ev-id="ev_2131da3f1b" className="font-sans text-2xl md:text-3xl font-light text-[#e8d5c4] tracking-[-0.02em] mb-6">
								What Is Ontology?
							</h2>
							<p data-ev-id="ev_23011848bc" className="font-sans text-base text-[#cd853f] leading-[1.8] mb-6">
								Ontology is the study of being—the nature of existence itself. It asks 
								the most fundamental questions: What exists? What is real? What does it 
								mean for something to be?
							</p>
							<p data-ev-id="ev_c3a4d62766" className="font-sans text-base text-[#cd853f] leading-[1.8]">
								Your ontology is the invisible framework through which you interpret 
								everything. Most people never examine it because it feels like reality 
								itself. But ontologies can change. And when they do, everything changes.
							</p>
						</section>
					</article>

					{/* Navigation */}
					<div data-ev-id="ev_90530e3062" className="mt-16 pt-8 border-t border-[#8b4513]/30 flex items-center justify-between">
						<div data-ev-id="ev_7b56925d83" />
						<Link
              to="/the-sovereign-mind"
              className="group flex items-center gap-3 font-mono text-sm text-[#8b4513] hover:text-[#cd853f] transition-colors">

							<span data-ev-id="ev_6708ec1596">Next: Volume II</span>
							<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer data-ev-id="ev_2159471567" className="py-8 px-6 border-t border-[#8b4513]/30">
				<div data-ev-id="ev_ca47815d9d" className="max-w-4xl mx-auto text-center font-mono text-xs text-[#8b4513]">
					The New Ontology · Volume I
				</div>
			</footer>
		</div>);