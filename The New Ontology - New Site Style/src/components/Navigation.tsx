import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
{ href: '/', label: 'Home' },
{ href: '/the-next-human-ontology', label: 'The Next Human Ontology' },
{ href: '/the-sovereign-mind', label: 'The Sovereign Mind' },
{ href: '/the-bigger-world', label: 'The Bigger World' },
{ href: '/the-great-convergence', label: 'The Great Convergence' },
{ href: '/glossary', label: 'Glossary' },
{ href: '/timeline', label: 'Timeline' },
{ href: '/whos-who', label: "Who's Who" },
{ href: '/reading-guide', label: 'Reading Guide' },
{ href: '/discovery-kids', label: 'Young Explorers', special: true }];


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isKids = location.pathname.startsWith('/discovery-kids');

  return (
    <>
			<header data-ev-id="ev_04e5912824"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      isKids ?
      'bg-[#0b1b3d]/90 backdrop-blur-xl border-b border-[#7dd3fc]/20' :
      'bg-[#0a0505]/90 backdrop-blur-xl border-b border-[#8b4513]/30' :
      'bg-transparent'}`
      }>

				<nav data-ev-id="ev_1bba3f1790" className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<Link
            to="/"
            className={`font-sans text-lg tracking-[-0.02em] transition-colors ${
            isKids ?
            'text-[#e8e8e8] hover:text-white' :
            'text-[#e8d5c4] hover:text-white'}`
            }>

						<span data-ev-id="ev_576dbf5818" className="font-light">The</span>{' '}
						<span data-ev-id="ev_dfedacbf55" className="font-semibold">New Ontology</span>
					</Link>

					{/* Desktop Nav */}
					<div data-ev-id="ev_36cc9fc83d" className="hidden lg:flex items-center gap-8">
						{NAV_LINKS.slice(0, 4).map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-mono tracking-tight transition-all duration-300 ${
              location.pathname === link.href ?
              'text-[#ff4500]' :
              isKids ?
              'text-[#a0a0a8] hover:text-[#e8e8e8]' :
              'text-[#8b4513] hover:text-[#cd853f]'}`
              }>

								{link.label}
							</Link>
            )}
					</div>

					{/* Mobile Menu Button */}
					<button data-ev-id="ev_a617ef4d25"
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${
          isKids ?
          'text-[#e8e8e8] hover:text-white' :
          'text-[#e8d5c4] hover:text-white'}`
          }
          aria-label="Toggle menu">

						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>
			</header>

			{/* Mobile Menu Overlay */}
			{isOpen &&
      <div data-ev-id="ev_ed8d6cf834" className="fixed inset-0 z-40 bg-[#0a0505]/98 backdrop-blur-xl lg:hidden">
					<nav data-ev-id="ev_ce77f6bca2" className="pt-24 px-8">
						<div data-ev-id="ev_757f5f6d17" className="flex flex-col gap-1">
							{NAV_LINKS.map((link, i) =>
            <Link
              key={link.href}
              to={link.href}
              className={`group flex items-center justify-between py-4 border-b transition-all duration-300 ${
              link.special ?
              'border-[#7dd3fc]/30' :
              'border-[#8b4513]/30'}`
              }
              style={{
                animation: `fadeSlideIn 0.4s ease-out ${i * 0.05}s both`
              }}>

									<span data-ev-id="ev_470074a6ec"
              className={`text-xl font-light ${
              link.special ?
              'text-[#7dd3fc] group-hover:text-[#c4b5fd]' :
              location.pathname === link.href ?
              'text-[#ff4500]' :
              'text-[#e8d5c4] group-hover:text-white'}`
              }>

										{link.label}
									</span>
									<ChevronRight
                size={18}
                className={`opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all ${
                link.special ? 'text-[#7dd3fc]' : 'text-[#ff4500]'}`
                } />

								</Link>
            )}
						</div>
					</nav>
					<style data-ev-id="ev_89b9d546c3">{`
						@keyframes fadeSlideIn {
							from { opacity: 0; transform: translateX(-20px); }
							to { opacity: 1; transform: translateX(0); }
						}
					`}</style>
				</div>
      }
		</>);