import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on kids pages
  const isKidsPage = location.pathname.startsWith('/discovery-kids') ||
  location.pathname === '/the-bigger-world';

  useEffect(() => {
    if (isKidsPage) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isKidsPage]);

  if (isKidsPage) return null;

  return (
    <div data-ev-id="ev_6f3a1cb845"
    className="pointer-events-none fixed z-[100] mix-blend-screen transition-opacity duration-300"
    style={{
      left: position.x - 150,
      top: position.y - 150,
      width: 300,
      height: 300,
      background: `radial-gradient(circle, rgba(255,69,0,0.1) 0%, rgba(255,140,0,0.05) 40%, transparent 70%)`,
      opacity: isVisible ? 1 : 0
    }} />);


}