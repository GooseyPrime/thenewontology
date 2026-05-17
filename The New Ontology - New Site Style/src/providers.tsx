import { type ReactNode } from 'react';

/**
 * ⚠️ App-wide providers. Add new providers here — they'll be available in all routes.
 * These wrap <BrowserRouter> in main.tsx, so they're OUTSIDE the router.
 * Providers that need routing context (like useLocation) should go inside App.tsx instead.
 *
 * Note: Supabase auth providers would go here once Cloud Backend is enabled.
 */

export function AppProviders({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
