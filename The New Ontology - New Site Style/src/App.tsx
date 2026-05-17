/**
 * ⚠️ ROUTING RULES:
 * - Router is in main.tsx. Do NOT add another <BrowserRouter> here or anywhere.
 * - Use <Routes> + <Route> components ONLY. Do NOT use useRoutes().
 * - STATIC IMPORTS ONLY — no React.lazy() or dynamic import().
 * - Import from 'react-router' — NOT 'react-router-dom' (does not exist).
 */
import { Routes, Route } from 'react-router';
import Index from '@/pages/Index';
import TheNextHumanOntology from '@/pages/TheNextHumanOntology';
import TheSovereignMind from '@/pages/TheSovereignMind';
import TheBiggerWorld from '@/pages/TheBiggerWorld';
import TheGreatConvergence from '@/pages/TheGreatConvergence';
import Glossary from '@/pages/Glossary';
import Timeline from '@/pages/Timeline';
import WhosWho from '@/pages/WhosWho';
import ReadingGuide from '@/pages/ReadingGuide';
import DiscoveryKids from '@/pages/DiscoveryKids';
import { CursorGlow } from '@/components/CursorGlow';

export default function App() {
	return (
		<>
			<CursorGlow />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/the-next-human-ontology" element={<TheNextHumanOntology />} />
				<Route path="/the-sovereign-mind" element={<TheSovereignMind />} />
				<Route path="/the-bigger-world" element={<TheBiggerWorld />} />
				<Route path="/the-great-convergence" element={<TheGreatConvergence />} />
				<Route path="/glossary" element={<Glossary />} />
				<Route path="/timeline" element={<Timeline />} />
				<Route path="/whos-who" element={<WhosWho />} />
				<Route path="/reading-guide" element={<ReadingGuide />} />
				<Route path="/discovery-kids" element={<DiscoveryKids />} />
			</Routes>
		</>
	);
}
