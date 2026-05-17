import { useEffect, useState, useRef } from 'react';
import { PlasmaBackground } from '@/components/PlasmaBackground';
import { Tesseract3D } from '@/components/Tesseract3D';
import { Marquee } from '@/components/Marquee';
import { Navigation } from '@/components/Navigation';
import { VolumeCard } from '@/components/VolumeCard';
import { StickLightButton } from '@/components/StickLightButton';
import { Link } from 'react-router';
import { ArrowDown, Database, Clock, Users, Compass, FileText, Star, Rocket } from 'lucide-react';

const MARQUEE_ITEMS = [
'The Triple Singularity',
'Ontological Shock',
'AI · NHI · Consciousness',
'Post-Anthropocentric World',
'The Great Convergence',
'Psychological Sovereignty',
'First Contact Protocols'];


const VOLUMES = [
{
  volume: 'Volume I',
  title: 'The Next Human Ontology',
  description: 'A field manual for understanding the fundamental shift in human consciousness, identity, and collective reality.',
  href: '/the-next-human-ontology'
},
{
  volume: 'Volume II',
  title: 'The Sovereign Mind',
  description: 'Protocols for psychological sovereignty — navigating ontological shock, reclaiming autonomy, and building unshakeable clarity.',
  href: '/the-sovereign-mind'
},
{
  volume: 'Volume III',
  title: 'The Bigger World',
  description: 'A guide for young explorers — the universe is larger, stranger, and more wonderful than you were ever told.',
  href: '/the-bigger-world',
  isKids: true
}];


const APPENDICES = [
{ icon: Database, label: 'Glossary', href: '/glossary', desc: 'Searchable term database' },
{ icon: Clock, label: 'Timeline', href: '/timeline', desc: 'Convergence chronology' },
{ icon: Users, label: "Who's Who", href: '/whos-who', desc: 'Key figures & intelligence' },
{ icon: Compass, label: 'Reading Guide', href: '/reading-guide', desc: 'Navigation protocols' }];


export default function Index() {
  const [heroVisible, setHeroVisible] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(scrollY / docHeight, 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div data-ev-id="ev_6bc120799c" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Hero Section - Compact to fit disclaimer */}
			<section data-ev-id="ev_0e97da1172" className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-16">
				<PlasmaBackground />

				<div data-ev-id="ev_c712526b3f"
        className={`relative z-10 text-center px-4 sm:px-6 transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }>

					<p data-ev-id="ev_201e63d5af" className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#e8d5c4]/60 uppercase mb-3 sm:mb-4">
						Transmission Active
					</p>

					<h1 data-ev-id="ev_3e2be6690a" className="font-sans text-[2.5rem] sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#e8d5c4] mb-4 sm:mb-6 leading-[1.1]">
						<span data-ev-id="ev_43f9097b3d" className="block">Decode</span>
						<span data-ev-id="ev_88561b3dc6" className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-[#ffa500]">
							the signal.
						</span>
					</h1>

					<p data-ev-id="ev_b205050cc9" className="font-mono text-xs sm:text-sm text-[#cd853f] max-w-[340px] sm:max-w-lg mx-auto mb-5 sm:mb-8 leading-relaxed">
						An expansive, multi-volume digital reading platform exploring the convergence
						of AI, non-human intelligence, and consciousness physics.
					</p>

					<div data-ev-id="ev_69b50f56b0" className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
						<StickLightButton href="/the-next-human-ontology" variant="primary" size="md">
							Begin Reading
						</StickLightButton>
						<StickLightButton href="/reading-guide" variant="ghost" size="md">
							How to Navigate
						</StickLightButton>
					</div>
				</div>
			</section>

			{/* Disclaimer & Foreword - Above the fold */}
			<section data-ev-id="ev_85e43ff3aa" className="relative z-10 py-6 sm:py-10 md:py-12 px-4 sm:px-6 bg-gradient-to-b from-transparent to-[#0a0505]">
				<div data-ev-id="ev_d2e421098d" className="max-w-3xl mx-auto">
					{/* Disclaimer */}
					<div data-ev-id="ev_d2c628a2cc" className="mb-5 sm:mb-8 p-4 sm:p-6 border border-[#ff4500]/20 bg-[#0a0505]/90 backdrop-blur-sm">
						<p data-ev-id="ev_6c33b3281a" className="font-mono text-[10px] sm:text-xs text-[#ff8c00] uppercase tracking-wider mb-2 sm:mb-3">
							Important Notice
						</p>
						<p data-ev-id="ev_ee5a29a049" className="font-sans text-xs sm:text-sm text-[#e8d5c4] leading-relaxed">
							The material presented here synthesizes publicly available research, 
							official testimony, and theoretical frameworks. It is intended as a 
							comprehensive reference for serious researchers and curious minds navigating 
							the emerging disclosure landscape. Approach with discernment.
						</p>
					</div>

					{/* Foreword */}
					<div data-ev-id="ev_031d562839" className="p-4 sm:p-6 border border-[#8b4513]/30 bg-[#0a0505]/60">
						<p data-ev-id="ev_4f1befa403" className="font-mono text-[10px] sm:text-xs text-[#cd853f] uppercase tracking-wider mb-2 sm:mb-3">
							Foreword
						</p>
						<p data-ev-id="ev_b31f83439d" className="font-sans text-sm sm:text-base text-[#e8d5c4] leading-[1.7] sm:leading-[1.8] mb-3 sm:mb-4">
							We stand at the threshold of the most profound paradigm shift in human history.
							Three vectors of transformation—artificial general intelligence, non-human 
							intelligence disclosure, and the scientific understanding of consciousness—are 
							converging simultaneously. This is not coincidence. It is structure.
						</p>
						<p data-ev-id="ev_340d26899f" className="font-sans text-xs sm:text-sm text-[#d2b48c] leading-relaxed">
							These volumes provide the conceptual architecture for understanding what 
							is happening, why it matters, and how to navigate the transition with 
							clarity and sovereignty intact.
						</p>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div data-ev-id="ev_d471c04dbd"
        className={`flex justify-center mt-6 sm:mt-8 transition-all duration-1000 delay-700 ${
        heroVisible ? 'opacity-100' : 'opacity-0'}`
        }>

					<div data-ev-id="ev_cfb9d5f678" className="flex flex-col items-center gap-2 text-[#8b4513]">
						<span data-ev-id="ev_b6431f2964" className="font-mono text-[10px] tracking-widest uppercase">Explore</span>
						<ArrowDown size={14} className="animate-pulse" />
					</div>
				</div>
			</section>

			{/* Marquee Strip */}
			<section data-ev-id="ev_f2158ff884" className="py-5 sm:py-6 border-y border-[#8b4513]/30 bg-[#0a0505]">
				<Marquee
          items={MARQUEE_ITEMS}
          className="font-mono text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#cd853f]/70 uppercase" />

			</section>

			{/* Sticky Split Section */}
			<section data-ev-id="ev_980bd4bef3" ref={stickyRef} className="relative bg-[#0a0505]">
				<div data-ev-id="ev_1ab60fa10c" className="flex flex-col lg:flex-row">
					{/* Left Sticky - Tesseract (hidden on mobile, shown on tablet+) */}
					<div data-ev-id="ev_8556279e49" className="hidden md:flex lg:w-1/2 lg:sticky lg:top-0 lg:h-screen items-center justify-center p-8 lg:p-16">
						<div data-ev-id="ev_9b6cd398f6" className="relative">
							{/* Glow effect */}
							<div data-ev-id="ev_45e5892ce5" className="absolute inset-0 blur-[100px] bg-[#ff4500]/20 rounded-full" />
							
							<div data-ev-id="ev_3510faea83" className="relative">
								<Tesseract3D size={280} glowColor="#ff4500" />
							</div>

							<p data-ev-id="ev_670dabeb5c" className="text-center mt-8 font-mono text-[10px] tracking-[0.3em] text-[#cd853f]/60 uppercase">
								Interactive Containment Field
							</p>
							<p data-ev-id="ev_109bf71d44" className="text-center font-mono text-[10px] text-[#8b4513]/50">
								[ Drag to rotate ]
							</p>
						</div>
					</div>

					{/* Right Scrolling - Core Texts */}
					<div data-ev-id="ev_344e1bf7ed" className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-16 py-10 sm:py-16 lg:py-24">
						<div data-ev-id="ev_7a969fbc15" className="max-w-xl mx-auto lg:mx-0">
							<h2 data-ev-id="ev_259265aac7" className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#ff4500] uppercase mb-8 sm:mb-12">
								Core Manuscripts
							</h2>

							<div data-ev-id="ev_805c49208c" className="flex flex-col">
								{VOLUMES.map((vol, i) =>
                <VolumeCard key={vol.href} {...vol} index={i} />
                )}
							</div>

							{/* Featured Essay */}
							<div data-ev-id="ev_44d3803371" className="mt-8 sm:mt-12 p-4 sm:p-6 border border-[#ff8c00]/30 bg-[#ff4500]/5">
								<div data-ev-id="ev_3879f05aba" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
									<FileText size={16} className="text-[#ff8c00] flex-shrink-0" />
									<span data-ev-id="ev_24b0abff60" className="font-mono text-[10px] sm:text-xs text-[#ff8c00] uppercase tracking-wider">
										Featured Essay
									</span>
								</div>
								<h3 data-ev-id="ev_86ae92190c" className="font-sans text-lg sm:text-xl text-[#e8d5c4] mb-2 sm:mb-3">
									The Great Convergence
								</h3>
								<p data-ev-id="ev_79c74a7906" className="font-mono text-[11px] sm:text-xs text-[#d2b48c]/80 leading-relaxed mb-3 sm:mb-4">
									The bridge document connecting all three legs of the Triple Singularity — 
									AI, NHI disclosure, and consciousness physics converging simultaneously.
								</p>
								<Link
                  to="/the-great-convergence"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#ff8c00] hover:text-[#ffa500] transition-colors">

									Read the Essay
									<span data-ev-id="ev_3a99112ad5">→</span>
								</Link>
							</div>

							{/* Appendices */}
							<div data-ev-id="ev_01368a704b" className="mt-12 sm:mt-20">
								<h2 data-ev-id="ev_a27d318a41" className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#cd853f] uppercase mb-5 sm:mb-8">
									Appendices
								</h2>

								<div data-ev-id="ev_a72e0c79a9" className="grid grid-cols-2 gap-3 sm:gap-4">
									{APPENDICES.map((item, i) =>
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group p-3 sm:p-4 border border-[#8b4513]/30 hover:border-[#cd853f]/60 transition-all duration-300 hover:bg-[#1a0a0a]/30"
                    style={{
                      animation: `fadeSlideUp 0.5s ease-out ${0.6 + i * 0.1}s both`
                    }}>

											<item.icon
                      size={16}
                      className="text-[#8b4513] group-hover:text-[#cd853f] transition-colors mb-2 sm:mb-3" />

											<p data-ev-id="ev_e7d43bc463" className="font-sans text-xs sm:text-sm text-[#e8d5c4] group-hover:text-white transition-colors">
												{item.label}
											</p>
											<p data-ev-id="ev_e40311902a" className="font-mono text-[9px] sm:text-[10px] text-[#8b4513] mt-1">
												{item.desc}
											</p>
										</Link>
                  )}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Young Explorers CTA */}
			<section data-ev-id="ev_1d20c71a0b" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a0505] via-[#0b1b3d]/50 to-[#0a0505]">
				<div data-ev-id="ev_d769369485" className="max-w-4xl mx-auto text-center">
					<div data-ev-id="ev_98be15841f" className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#7dd3fc]/10 border border-[#7dd3fc]/30 mb-6 sm:mb-8">
						<Star size={12} className="text-[#fcd34d]" fill="#fcd34d" />
						<span data-ev-id="ev_6d8111c47a" className="font-mono text-[10px] sm:text-xs text-[#7dd3fc]">For Young Minds</span>
					</div>

					<h2 data-ev-id="ev_0dc4df2132" className="font-sans text-2xl sm:text-3xl md:text-4xl font-light text-[#e8e8e8] tracking-[-0.02em] mb-4 sm:mb-6">
						The Young Explorers Zone
					</h2>

					<p data-ev-id="ev_92fc69483e" className="font-mono text-xs sm:text-sm text-[#a0a0a8] max-w-[320px] sm:max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
						A specially designed space for children and educators to safely explore
						complex physics, space concepts, and the mysteries of consciousness.
					</p>

					<Link
            to="/discovery-kids"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] text-[#0b1b3d] font-semibold text-sm sm:text-base hover:shadow-[0_0_40px_rgba(125,211,252,0.4)] transition-all duration-300 hover:scale-105 active:scale-100">

						<Rocket size={18} />
						Enter Discovery Zone
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer data-ev-id="ev_4eb712007d" className="py-8 sm:py-12 px-4 sm:px-6 border-t border-[#8b4513]/30 bg-[#0a0505]">
				<div data-ev-id="ev_821eab4d69" className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
					<div data-ev-id="ev_dda5b45d6d" className="font-sans text-xs sm:text-sm text-[#8b4513]">
						© {new Date().getFullYear()} The New Ontology. All rights reserved.
					</div>
					<div data-ev-id="ev_2341e7b8cd" className="flex items-center gap-4 sm:gap-6">
						<a data-ev-id="ev_4ef8fdb468" href="#" className="font-mono text-[10px] sm:text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors">
							Privacy
						</a>
						<a data-ev-id="ev_ef54eb2f19" href="#" className="font-mono text-[10px] sm:text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors">
							Terms
						</a>
						<a data-ev-id="ev_c59705fc1e" href="#" className="font-mono text-[10px] sm:text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors">
							Contact
						</a>
					</div>
				</div>
			</footer>

			{/* Progress Bar */}
			<div data-ev-id="ev_26f8ddc547"
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#ff4500] to-[#ffa500] z-[60]"
      style={{ width: `${scrollProgress * 100}%` }} />


			<style data-ev-id="ev_83186d5b68">{`
				@keyframes fadeSlideUp {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>);