import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router';
import { ChevronLeft, Clock } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'disclosure' | 'scientific' | 'political' | 'media';
  significance: 'high' | 'medium' | 'low';
}

const TIMELINE_EVENTS: TimelineEvent[] = [
{
  year: '1947',
  title: 'Roswell Incident',
  description: 'A debris field discovered near Roswell, New Mexico triggers initial cover-up narratives and establishes the template for future secrecy protocols.',
  category: 'disclosure',
  significance: 'high'
},
{
  year: '1952',
  title: 'Washington D.C. Flap',
  description: 'Multiple UAP sightings over the nation\'s capital, including radar confirmation and jet scrambles, create national attention.',
  category: 'disclosure',
  significance: 'medium'
},
{
  year: '1969',
  title: 'Project Blue Book Closure',
  description: 'The U.S. Air Force officially closes its UFO investigation program, citing lack of evidence for threats or extraterrestrial origin.',
  category: 'political',
  significance: 'medium'
},
{
  year: '2004',
  title: 'USS Nimitz Encounter',
  description: 'Navy pilots encounter the "Tic Tac" UAP off the coast of San Diego. This event later becomes central to the modern disclosure movement.',
  category: 'disclosure',
  significance: 'high'
},
{
  year: '2017',
  title: 'New York Times UAP Story',
  description: 'The Times publishes a groundbreaking report revealing the existence of AATIP, the Pentagon\'s secret UAP study program.',
  category: 'media',
  significance: 'high'
},
{
  year: '2020',
  title: 'Pentagon UAP Video Release',
  description: 'The Department of Defense officially releases three Navy UAP videos, confirming their authenticity after years of unofficial circulation.',
  category: 'political',
  significance: 'high'
},
{
  year: '2021',
  title: 'ODNI UAP Report',
  description: 'The Office of the Director of National Intelligence releases the first official government report on UAP, acknowledging 144 incidents.',
  category: 'political',
  significance: 'high'
},
{
  year: '2023',
  title: 'Congressional Hearings',
  description: 'Multiple whistleblowers testify before Congress about crash retrieval programs and non-human biologics, marking unprecedented public disclosure.',
  category: 'political',
  significance: 'high'
},
{
  year: '2024',
  title: 'UAP Disclosure Act',
  description: 'Legislation mandating declassification and establishment of review boards for legacy UAP programs advances through Congress.',
  category: 'political',
  significance: 'high'
}];


const CATEGORY_COLORS = {
  disclosure: '#ff4500',
  scientific: '#ff8c00',
  political: '#ffa500',
  media: '#cd853f'
};

export default function Timeline() {
  return (
    <div data-ev-id="ev_7cab9f4db9" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Header */}
			<section data-ev-id="ev_fc6a129d86" className="pt-32 pb-12 px-6 border-b border-[#8b4513]/30">
				<div data-ev-id="ev_1ae19fdf71" className="max-w-4xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors mb-8">

						<ChevronLeft size={14} />
						Back to Home
					</Link>

					<div data-ev-id="ev_d5e157b08f" className="flex items-center gap-3 mb-4">
						<Clock size={24} className="text-[#ff4500]" />
						<h1 data-ev-id="ev_e0a432f749" className="font-sans text-3xl md:text-4xl font-light tracking-[-0.02em]">
							Timeline of the Convergence
						</h1>
					</div>

					<p data-ev-id="ev_68ed89c6ec" className="font-mono text-sm text-[#cd853f] mb-8">
						Key events in the unfolding disclosure narrative
					</p>

					{/* Legend */}
					<div data-ev-id="ev_5f39d78ff9" className="flex flex-wrap gap-4">
						{Object.entries(CATEGORY_COLORS).map(([cat, color]) =>
            <div data-ev-id="ev_21af843443" key={cat} className="flex items-center gap-2">
								<div data-ev-id="ev_971a90bbea" className="w-3 h-3" style={{ backgroundColor: color }} />
								<span data-ev-id="ev_f6e7d1c48a" className="font-mono text-xs text-[#8b4513] capitalize">{cat}</span>
							</div>
            )}
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section data-ev-id="ev_c158080e60" className="py-16 px-6">
				<div data-ev-id="ev_eba0ccb832" className="max-w-4xl mx-auto">
					<div data-ev-id="ev_7c096c7fa8" className="relative">
						{/* Vertical Line */}
						<div data-ev-id="ev_1fef520adc" className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff4500]/50 via-[#8b4513]/30 to-[#ff8c00]/50" />

						{TIMELINE_EVENTS.map((event, i) =>
            <div data-ev-id="ev_855357058f"
            key={i}
            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
            i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`
            }
            style={{
              animation: `fadeSlideIn 0.6s ease-out ${i * 0.1}s both`
            }}>

								{/* Node */}
								<div data-ev-id="ev_6ee3151165"
              className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 border-2 bg-[#0a0505] z-10"
              style={{
                borderColor: CATEGORY_COLORS[event.category],
                boxShadow: event.significance === 'high' ? `0 0 20px ${CATEGORY_COLORS[event.category]}40` : 'none'
              }} />


								{/* Year */}
								<div data-ev-id="ev_596ec35112" className={`md:w-1/2 pl-20 md:pl-0 ${
              i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`
              }>
									<span data-ev-id="ev_edc460630d"
                className="font-mono text-3xl font-light"
                style={{ color: CATEGORY_COLORS[event.category] }}>

										{event.year}
									</span>
								</div>

								{/* Content */}
								<div data-ev-id="ev_57d162bff4" className={`md:w-1/2 pl-20 md:pl-0 ${
              i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`
              }>
									<h3 data-ev-id="ev_1a5fe13fba" className="font-sans text-xl text-[#e8d5c4] mb-2">
										{event.title}
									</h3>
									<p data-ev-id="ev_eeff8db403" className="font-mono text-sm text-[#cd853f] leading-relaxed">
										{event.description}
									</p>
								</div>
							</div>
            )}
					</div>
				</div>
			</section>

			<style data-ev-id="ev_c07c7380b5">{`
				@keyframes fadeSlideIn {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>);