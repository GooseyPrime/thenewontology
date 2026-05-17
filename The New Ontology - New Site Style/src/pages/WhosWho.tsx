import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router';
import { ChevronLeft, Users, ExternalLink } from 'lucide-react';

interface Person {
  name: string;
  role: string;
  affiliation: string;
  significance: string;
  category: 'whistleblower' | 'researcher' | 'official' | 'journalist';
}

const KEY_FIGURES: Person[] = [
{
  name: 'David Grusch',
  role: 'Whistleblower',
  affiliation: 'Former NGA, NRO',
  significance: 'First officially credentialed whistleblower to testify to Congress about crash retrieval programs and non-human biologics.',
  category: 'whistleblower'
},
{
  name: 'Lue Elizondo',
  role: 'Former Director, AATIP',
  affiliation: 'Department of Defense',
  significance: 'Led the Pentagon\'s Advanced Aerospace Threat Identification Program. Central figure in the 2017 New York Times disclosure.',
  category: 'official'
},
{
  name: 'Dr. Garry Nolan',
  role: 'Immunologist, Researcher',
  affiliation: 'Stanford University',
  significance: 'Leading scientist studying UAP-related biological samples and the neurological effects of close encounters.',
  category: 'researcher'
},
{
  name: 'Christopher Mellon',
  role: 'Former Deputy ASDIA',
  affiliation: 'Department of Defense',
  significance: 'Key figure in releasing Navy UAP videos and advancing congressional attention to the topic.',
  category: 'official'
},
{
  name: 'Ross Coulthart',
  role: 'Investigative Journalist',
  affiliation: 'News Nation',
  significance: 'Author of "In Plain Sight" and primary journalist covering Grusch and other whistleblowers.',
  category: 'journalist'
},
{
  name: 'Dr. Jacques Vallée',
  role: 'Computer Scientist, Ufologist',
  affiliation: 'Independent Researcher',
  significance: 'Pioneering researcher proposing interdimensional hypothesis. Influential in shaping non-ETH frameworks.',
  category: 'researcher'
},
{
  name: 'Commander David Fravor',
  role: 'Navy Pilot',
  affiliation: 'U.S. Navy (Ret.)',
  significance: 'Primary witness of the 2004 USS Nimitz "Tic Tac" encounter. His testimony is central to modern disclosure.',
  category: 'whistleblower'
},
{
  name: 'Dr. Hal Puthoff',
  role: 'Physicist',
  affiliation: 'Institute for Advanced Studies',
  significance: 'Remote viewing pioneer, AAWSAP/AATIP advisor, and researcher into exotic physics and propulsion.',
  category: 'researcher'
}];


const CATEGORY_LABELS = {
  whistleblower: 'Whistleblower',
  researcher: 'Researcher',
  official: 'Government',
  journalist: 'Journalist'
};

const CATEGORY_COLORS = {
  whistleblower: '#ff4500',
  researcher: '#ff8c00',
  official: '#ffa500',
  journalist: '#cd853f'
};

export default function WhosWho() {
  return (
    <div data-ev-id="ev_ff6728e5d4" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Header */}
			<section data-ev-id="ev_c4d99db32a" className="pt-32 pb-12 px-6 border-b border-[#8b4513]/30">
				<div data-ev-id="ev_a4a13d6672" className="max-w-5xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors mb-8">

						<ChevronLeft size={14} />
						Back to Home
					</Link>

					<div data-ev-id="ev_dfae0b7560" className="flex items-center gap-3 mb-4">
						<Users size={24} className="text-[#ff8c00]" />
						<h1 data-ev-id="ev_15194eb343" className="font-sans text-3xl md:text-4xl font-light tracking-[-0.02em]">
							Who's Who
						</h1>
					</div>

					<p data-ev-id="ev_2690e3076d" className="font-mono text-sm text-[#cd853f] mb-8">
						Key figures in the disclosure landscape
					</p>

					{/* Legend */}
					<div data-ev-id="ev_32e4becd78" className="flex flex-wrap gap-4">
						{Object.entries(CATEGORY_LABELS).map(([key, label]) =>
            <div data-ev-id="ev_9f69a06b68" key={key} className="flex items-center gap-2">
								<div data-ev-id="ev_7c906024c7"
              className="w-3 h-3"
              style={{ backgroundColor: CATEGORY_COLORS[key as keyof typeof CATEGORY_COLORS] }} />

								<span data-ev-id="ev_abdb9e1ba9" className="font-mono text-xs text-[#8b4513]">{label}</span>
							</div>
            )}
					</div>
				</div>
			</section>

			{/* Profiles Grid */}
			<section data-ev-id="ev_f5a1797cad" className="py-16 px-6">
				<div data-ev-id="ev_47d9fbee22" className="max-w-5xl mx-auto">
					<div data-ev-id="ev_d7bea2b2d0" className="grid md:grid-cols-2 gap-6">
						{KEY_FIGURES.map((person, i) =>
            <div data-ev-id="ev_df5daac775"
            key={person.name}
            className="group p-6 border transition-all duration-300 hover:bg-[#1a0a0a]/30"
            style={{
              borderColor: `${CATEGORY_COLORS[person.category]}40`,
              animation: `fadeSlideUp 0.5s ease-out ${i * 0.1}s both`
            }}>

								<div data-ev-id="ev_a4b1c14ce0" className="flex items-start justify-between mb-4">
									<div data-ev-id="ev_07cbca26c5">
										<h3 data-ev-id="ev_eefc4a8d62" className="font-sans text-xl text-[#e8d5c4] group-hover:text-white transition-colors mb-1">
											{person.name}
										</h3>
										<p data-ev-id="ev_4e3f85fceb" className="font-mono text-xs text-[#8b4513]">
											{person.role}
										</p>
									</div>
									<span data-ev-id="ev_342d624d12"
                className="font-mono text-[10px] px-2 py-1 border uppercase"
                style={{
                  color: CATEGORY_COLORS[person.category],
                  borderColor: `${CATEGORY_COLORS[person.category]}50`
                }}>

										{CATEGORY_LABELS[person.category]}
									</span>
								</div>

								<p data-ev-id="ev_3490f98295" className="font-mono text-xs text-[#cd853f] mb-3">
									{person.affiliation}
								</p>

								<p data-ev-id="ev_f53cac3e60" className="font-sans text-sm text-[#8b4513] leading-relaxed">
									{person.significance}
								</p>
							</div>
            )}
					</div>
				</div>
			</section>

			<style data-ev-id="ev_b4b6eeebfb">{`
				@keyframes fadeSlideUp {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>);