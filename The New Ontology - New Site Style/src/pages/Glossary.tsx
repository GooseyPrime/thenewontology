import { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router';
import { ChevronLeft, Search, BookOpen } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  related?: string[];
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
{
  term: 'Ontological Shock',
  definition: 'The profound psychological and existential disruption experienced when fundamental assumptions about reality are suddenly invalidated. In the context of disclosure, this refers to the collective trauma of learning that humanity is not alone.',
  category: 'Core Concepts',
  related: ['Disclosure', 'Non-Human Intelligence']
},
{
  term: 'Triple Singularity',
  definition: 'The convergence of three transformative events: artificial general intelligence, non-human intelligence disclosure, and the scientific understanding of consciousness. These are not independent phenomena but interconnected vectors of a single transformation.',
  category: 'Core Concepts',
  related: ['Convergence Hypothesis', 'AGI']
},
{
  term: 'Non-Human Intelligence (NHI)',
  definition: 'A broad category encompassing any intelligent entity not of human origin. This includes potential extraterrestrial, interdimensional, ultraterrestrial, or synthetic intelligences.',
  category: 'Entities',
  related: ['UAP', 'Disclosure']
},
{
  term: 'UAP',
  definition: 'Unidentified Aerial Phenomena. The official term replacing "UFO" adopted by the U.S. government and international bodies. Refers to observed aerial objects that cannot be immediately identified.',
  category: 'Phenomena',
  related: ['NHI', 'Disclosure']
},
{
  term: 'Psychological Sovereignty',
  definition: 'The capacity to maintain cognitive clarity, emotional stability, and autonomous judgment in an information environment saturated with manipulation, disinformation, and competing narratives.',
  category: 'Practices',
  related: ['Epistemic Self-Defense', 'Sovereign Mind']
},
{
  term: 'Disclosure',
  definition: 'The process of revealing previously classified information about NHI and UAP to the public. May be controlled (government-led) or uncontrolled (whistleblower or accidental).',
  category: 'Events',
  related: ['Ontological Shock', 'Architecture of Secrecy']
},
{
  term: 'Convergence Hypothesis',
  definition: 'The theoretical framework proposing that UAP, consciousness studies, quantum mechanics, and ancient anomalies are manifestations of a single interconnected reality beyond current scientific understanding.',
  category: 'Theories',
  related: ['Triple Singularity', 'Consciousness']
},
{
  term: 'Epistemic Self-Defense',
  definition: 'The practice of maintaining cognitive sovereignty through rigorous evaluation of information sources, detection of manipulation patterns, and resistance to disinformation.',
  category: 'Practices',
  related: ['Psychological Sovereignty', 'Information Warfare']
}];


const CATEGORIES = ['All', ...new Set(GLOSSARY_TERMS.map((t) => t.category))];

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      const matchesSearch =
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || term.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div data-ev-id="ev_87b7d5ef6d" className="min-h-screen bg-[#0a0505] text-[#e8d5c4] font-sans">
			<Navigation />

			{/* Header */}
			<section data-ev-id="ev_ee84b40d3b" className="pt-32 pb-12 px-6 border-b border-[#8b4513]/30">
				<div data-ev-id="ev_ce2328a25b" className="max-w-4xl mx-auto">
					<Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8b4513] hover:text-[#cd853f] transition-colors mb-8">

						<ChevronLeft size={14} />
						Back to Home
					</Link>

					<div data-ev-id="ev_3deebb4cc6" className="flex items-center gap-3 mb-4">
						<BookOpen size={24} className="text-[#ff8c00]" />
						<h1 data-ev-id="ev_c2bd2b9026" className="font-sans text-3xl md:text-4xl font-light tracking-[-0.02em]">
							Glossary
						</h1>
					</div>

					<p data-ev-id="ev_fad3b149a1" className="font-mono text-sm text-[#cd853f]">
						Searchable database of key terms and concepts
					</p>
				</div>
			</section>

			{/* Search & Filter */}
			<section data-ev-id="ev_74830829c5" className="py-8 px-6 border-b border-[#8b4513]/30 bg-[#0a0505] sticky top-16 z-30">
				<div data-ev-id="ev_bff9827743" className="max-w-4xl mx-auto">
					<div data-ev-id="ev_62b20ce0b2" className="relative mb-6">
						<Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b4513]" />
						<input data-ev-id="ev_61eb53af6e"
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1a0a0a] border border-[#8b4513]/30 font-mono text-sm text-[#e8d5c4] placeholder:text-[#8b4513] focus:outline-none focus:border-[#ff8c00]/50 transition-colors" />

					</div>

					<div data-ev-id="ev_b79456de60" className="flex flex-wrap gap-2">
						{CATEGORIES.map((cat) =>
            <button data-ev-id="ev_9db283a09a"
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 font-mono text-xs transition-all duration-300 ${
            activeCategory === cat ?
            'bg-[#ff8c00]/20 text-[#ff8c00] border border-[#ff8c00]/40' :
            'bg-transparent text-[#8b4513] border border-[#8b4513]/30 hover:border-[#cd853f]/40 hover:text-[#cd853f]'}`
            }>

								{cat}
							</button>
            )}
					</div>
				</div>
			</section>

			{/* Terms */}
			<section data-ev-id="ev_be32fd0d7d" className="py-12 px-6">
				<div data-ev-id="ev_649e960ca0" className="max-w-4xl mx-auto">
					<p data-ev-id="ev_1942508d41" className="font-mono text-xs text-[#8b4513] mb-8">
						{filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
					</p>

					<div data-ev-id="ev_4a0e58c8a0" className="flex flex-col gap-1">
						{filteredTerms.map((item, i) =>
            <div data-ev-id="ev_9c93a4fae2"
            key={item.term}
            className="group p-6 border border-[#8b4513]/30 hover:border-[#cd853f]/40 hover:bg-[#1a0a0a]/30 transition-all duration-300"
            style={{
              animation: `fadeIn 0.4s ease-out ${i * 0.05}s both`
            }}>

								<div data-ev-id="ev_5812b80cf8" className="flex items-start justify-between gap-4 mb-3">
									<h3 data-ev-id="ev_494b47fa52" className="font-sans text-lg text-[#e8d5c4] group-hover:text-white transition-colors">
										{item.term}
									</h3>
									<span data-ev-id="ev_3dcc87af6a" className="font-mono text-[10px] text-[#8b4513] px-2 py-1 border border-[#8b4513]/30">
										{item.category}
									</span>
								</div>
								<p data-ev-id="ev_b6843e8c86" className="font-sans text-sm text-[#cd853f] leading-relaxed mb-4">
									{item.definition}
								</p>
								{item.related &&
              <div data-ev-id="ev_502baca18e" className="flex items-center gap-2 flex-wrap">
										<span data-ev-id="ev_a9f5c949e6" className="font-mono text-[10px] text-[#8b4513]">Related:</span>
										{item.related.map((r) =>
                <span data-ev-id="ev_aed9559033"
                key={r}
                className="font-mono text-[10px] text-[#ff8c00]/70 hover:text-[#ff8c00] cursor-pointer transition-colors"
                onClick={() => setSearch(r)}>

												{r}
											</span>
                )}
									</div>
              }
							</div>
            )}
					</div>
				</div>
			</section>

			<style data-ev-id="ev_bfada4bb5b">{`
				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(10px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>);