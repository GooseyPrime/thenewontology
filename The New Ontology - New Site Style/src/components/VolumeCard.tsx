import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';

interface VolumeCardProps {
  volume: string;
  title: string;
  description: string;
  href: string;
  index: number;
  isKids?: boolean;
}

export function VolumeCard({ volume, title, description, href, index, isKids }: VolumeCardProps) {
  if (isKids) {
    return (
      <Link
        to={href}
        className="group block py-8 px-6 my-4 rounded-2xl border-2 border-[#7dd3fc]/30 bg-gradient-to-br from-[#0b1b3d]/80 to-[#1a1a4e]/60 transition-all duration-500 hover:border-[#7dd3fc]/60 hover:shadow-[0_0_40px_rgba(125,211,252,0.2)]"
        style={{
          animation: `fadeSlideUp 0.6s ease-out ${index * 0.1}s both`
        }}>

				<div data-ev-id="ev_f080066f97" className="flex flex-col gap-4">
					<div data-ev-id="ev_7db7deb219" className="flex items-center gap-3">
						<span data-ev-id="ev_d302437893" className="font-mono text-xs text-[#7dd3fc] tracking-wider uppercase">
							{volume}
						</span>
						<div data-ev-id="ev_dcb609b02f" className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#fcd34d]/20">
							<Sparkles size={12} className="text-[#fcd34d]" />
							<span data-ev-id="ev_1b732c7a36" className="text-[10px] text-[#fcd34d] font-medium">Young Explorers</span>
						</div>
					</div>

					<h3 data-ev-id="ev_895c00af5f" className="font-sans text-2xl md:text-3xl font-semibold text-[#e8e8e8] tracking-[-0.02em] group-hover:text-white transition-colors">
						{title}
					</h3>

					<p data-ev-id="ev_5ee02df9f8" className="font-sans text-sm leading-relaxed text-[#a0b4c8] group-hover:text-[#c4d4e8] transition-colors">
						{description}
					</p>

					<div data-ev-id="ev_fb790a877a" className="flex items-center gap-2 mt-2">
						<span data-ev-id="ev_12fa38048c" className="font-sans text-sm font-medium text-[#7dd3fc] group-hover:text-[#a5e1ff] transition-colors">
							Start exploring
						</span>
						<ArrowRight
              size={16}
              className="text-[#7dd3fc] group-hover:text-[#a5e1ff] transform group-hover:translate-x-1 transition-all duration-300" />

					</div>
				</div>

				<style data-ev-id="ev_8a616ea27f">{`
					@keyframes fadeSlideUp {
						from { opacity: 0; transform: translateY(30px); }
						to { opacity: 1; transform: translateY(0); }
					}
				`}</style>
			</Link>);

  }

  return (
    <Link
      to={href}
      className="group block py-10 border-b border-[#8b4513]/30 transition-all duration-500 hover:bg-[#1a0a0a]/30"
      style={{
        animation: `fadeSlideUp 0.6s ease-out ${index * 0.1}s both`
      }}>

			<div data-ev-id="ev_1039f6ed82" className="flex flex-col gap-4">
				<div data-ev-id="ev_a95a3b2741" className="flex items-baseline gap-4">
					<span data-ev-id="ev_165cea11cc" className="font-mono text-xs text-[#cd853f]/70 tracking-wider uppercase">
						{volume}
					</span>
					<div data-ev-id="ev_f52cea7785" className="flex-1 h-px bg-gradient-to-r from-[#8b4513]/30 to-transparent" />
				</div>

				<h3 data-ev-id="ev_bbb31952a6" className="font-sans text-2xl md:text-3xl font-light text-[#e8d5c4] tracking-[-0.02em] group-hover:text-white transition-colors">
					{title}
				</h3>

				<p data-ev-id="ev_73eb012ba0" className="font-mono text-xs leading-relaxed text-[#8b4513] max-w-xl group-hover:text-[#cd853f] transition-colors">
					{description}
				</p>

				<div data-ev-id="ev_e9f240ab67" className="flex items-center gap-2 mt-2">
					<span data-ev-id="ev_cd7314219f" className="font-mono text-xs text-[#ff4500] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-0 transition-all duration-300">
						Begin reading
					</span>
					<ArrowRight
            size={14}
            className="text-[#ff4500] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />

				</div>
			</div>

			<style data-ev-id="ev_9b8dc8e6a7">{`
				@keyframes fadeSlideUp {
					from { opacity: 0; transform: translateY(30px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</Link>);