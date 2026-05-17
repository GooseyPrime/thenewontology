interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 40, className = '' }: MarqueeProps) {
  const content = items.join(' · ');
  const duration = `${content.length / speed * 2}s`;

  return (
    <div data-ev-id="ev_d1d118d0eb" className={`overflow-hidden whitespace-nowrap ${className}`}>
			<div data-ev-id="ev_08fd69ccbc"
      className="inline-flex animate-marquee"
      style={{
        animationDuration: duration
      }}>

				<span data-ev-id="ev_350528d2ac" className="px-8">{content}</span>
				<span data-ev-id="ev_5e02bf511f" className="px-8">{content}</span>
				<span data-ev-id="ev_fde189f207" className="px-8">{content}</span>
				<span data-ev-id="ev_23ad3ccf2a" className="px-8">{content}</span>
			</div>
			<style data-ev-id="ev_0862eb8ff6">{`
				@keyframes marquee {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.animate-marquee {
					animation: marquee linear infinite;
				}
			`}</style>
		</div>);

}