import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('fadeOut');
    }
  }, [children, displayChildren]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
        window.scrollTo(0, 0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, children]);

  return (
    <div data-ev-id="ev_27f78bd393"
    className={`transition-all duration-200 ${
    transitionStage === 'fadeOut' ?
    'opacity-0 translate-y-2' :
    'opacity-100 translate-y-0'}`
    }>

			{displayChildren}
		</div>);

}