'use client';

/**
 * Compact theme switch rendered inside the header.
 * Reads the current theme from the DOM at click time, so it needs no state
 * and cannot mismatch during hydration. The two icons swap via CSS based on
 * the `.light` class on <html>.
 */
export const ThemeToggle = () => {
    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle('light');
        try {
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        } catch {
            // Storage unavailable (private mode); the toggle still works for this visit.
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex items-center justify-center w-10 h-10 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
            {/* Moon - shown in dark mode */}
            <svg className="w-5 h-5 block [.light_&]:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            {/* Sun - shown in light mode */}
            <svg className="w-5 h-5 hidden [.light_&]:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </button>
    );
};
