import { Link } from 'react-router';
import { type ReactNode } from 'react';

interface StickLightButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StickLightButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: StickLightButtonProps) {
  const baseStyles = `
		inline-flex items-center justify-center font-mono tracking-tight
		transition-all duration-300 relative overflow-hidden group
	`;

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const variantStyles = {
    primary: `
			bg-transparent border border-[#ff4500]/50 text-[#1a0a0a]
			hover:border-[#ff4500] hover:text-[#0a0505]
			hover:shadow-[0_0_30px_rgba(255,69,0,0.4)]
			hover:bg-[#ff4500]/10
		`,
    secondary: `
			bg-transparent border border-[#cd853f]/50 text-[#e8d5c4]
			hover:border-[#cd853f] hover:text-white
			hover:shadow-[0_0_30px_rgba(205,133,63,0.3)]
		`,
    ghost: `
			bg-transparent text-[#8b4513] hover:text-[#cd853f]
		`
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content =
  <>
			<span data-ev-id="ev_d5b6dae751" className="relative z-10">{children}</span>
			{variant !== 'ghost' &&
    <span data-ev-id="ev_f28d6e3866"
    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
    variant === 'primary' ?
    'bg-gradient-to-r from-[#ff4500]/20 to-transparent' :
    'bg-gradient-to-r from-[#cd853f]/15 to-transparent'}`
    } />

    }
		</>;


  if (href) {
    return (
      <Link to={href} className={combinedStyles}>
				{content}
			</Link>);

  }

  return (
    <button data-ev-id="ev_79301bef60" onClick={onClick} className={combinedStyles}>
			{content}
		</button>);

}