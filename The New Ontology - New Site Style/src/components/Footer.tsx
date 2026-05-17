import { Link } from 'react-router';

export function Footer() {
  return (
    <footer data-ev-id="ev_11e70f93da" className="py-12 px-6 border-t border-[#1a1a22] bg-black">
			<div data-ev-id="ev_708cbdc7a9" className="max-w-7xl mx-auto">
				<div data-ev-id="ev_1eba5021e6" className="grid md:grid-cols-4 gap-8 mb-12">
					{/* Brand */}
					<div data-ev-id="ev_ebc170e429" className="md:col-span-2">
						<Link to="/" className="font-sans text-lg text-[#e8e8e8]">
							<span data-ev-id="ev_27b9f82e3f" className="font-light">The</span>{' '}
							<span data-ev-id="ev_409a90846a" className="font-semibold">New Ontology</span>
						</Link>
						<p data-ev-id="ev_fec71d1026" className="font-mono text-xs text-[#606068] mt-4 max-w-sm leading-relaxed">
							An expansive, multi-volume digital reading platform exploring UAPs,
							interdimensional theories, and the architecture of secrecy.
						</p>
					</div>

					{/* Core Texts */}
					<div data-ev-id="ev_0e7b168598">
						<h4 data-ev-id="ev_771d643fc1" className="font-mono text-xs text-[#a0a0a8] uppercase tracking-wider mb-4">
							Core Texts
						</h4>
						<nav data-ev-id="ev_da7c30ca87" className="flex flex-col gap-2">
							<Link to="/the-bigger-world" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								The Bigger World
							</Link>
							<Link to="/the-next-human-ontology" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								The Next Human Ontology
							</Link>
							<Link to="/the-sovereign-mind" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								The Sovereign Mind
							</Link>
						</nav>
					</div>

					{/* Resources */}
					<div data-ev-id="ev_f3998ce3cc">
						<h4 data-ev-id="ev_d78edb7617" className="font-mono text-xs text-[#a0a0a8] uppercase tracking-wider mb-4">
							Resources
						</h4>
						<nav data-ev-id="ev_db1070cd94" className="flex flex-col gap-2">
							<Link to="/glossary" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								Glossary
							</Link>
							<Link to="/timeline" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								Timeline
							</Link>
							<Link to="/whos-who" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								Who's Who
							</Link>
							<Link to="/reading-guide" className="font-mono text-xs text-[#606068] hover:text-[#e8e8e8] transition-colors">
								Reading Guide
							</Link>
							<Link to="/discovery-kids" className="font-mono text-xs text-[#7dd3fc] hover:text-[#c4b5fd] transition-colors">
								Young Explorers
							</Link>
						</nav>
					</div>
				</div>

				{/* Bottom */}
				<div data-ev-id="ev_67b8d3d372" className="pt-8 border-t border-[#1a1a22] flex flex-col md:flex-row items-center justify-between gap-4">
					<div data-ev-id="ev_ce890a50fe" className="font-mono text-xs text-[#606068]">
						© {new Date().getFullYear()} The New Ontology. All rights reserved.
					</div>
					<div data-ev-id="ev_8772b2682a" className="flex items-center gap-6">
						<a data-ev-id="ev_d9cf95b60e" href="#" className="font-mono text-xs text-[#606068] hover:text-[#a0a0a8] transition-colors">
							Privacy
						</a>
						<a data-ev-id="ev_b048fba298" href="#" className="font-mono text-xs text-[#606068] hover:text-[#a0a0a8] transition-colors">
							Terms
						</a>
						<a data-ev-id="ev_8b6330deff" href="#" className="font-mono text-xs text-[#606068] hover:text-[#a0a0a8] transition-colors">
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>);

}