'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'projects_scroll_state';
const RETURN_FLAG_KEY = 'returning_from_project';

interface ScrollState {
    scrollY: number;
    timestamp: number;
    path: string;
}

/**
 * Hook for managing scroll position restoration when navigating to/from project details.
 * 
 * This hook ensures that when users navigate from the Projects section to a project detail
 * and then return, the Projects section appears exactly as they left it with the correct
 * scroll position and all content loaded.
 * 
 * @returns {Object} - Contains:
 *   - isReturning: Boolean indicating if we're returning from a project detail
 *   - saveScrollPosition: Function to call before navigating to a project detail
 *   - shouldForceVisible: Boolean to bypass animations on return
 */
export function useProjectsScrollRestoration() {
    const pathname = usePathname();
    const [isReturning, setIsReturning] = useState(false);
    const [shouldForceVisible, setShouldForceVisible] = useState(false);
    const hasRestoredRef = useRef(false);
    const isProjectDetailPage = pathname?.startsWith('/projects/') && pathname !== '/projects';

    // Save scroll position before navigating away
    const saveScrollPosition = () => {
        const scrollState: ScrollState = {
            scrollY: window.scrollY,
            timestamp: Date.now(),
            path: pathname || '/'
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(scrollState));
        sessionStorage.setItem(RETURN_FLAG_KEY, 'true');
    };

    // Restore scroll position when returning
    useEffect(() => {
        // Only run on the home page
        if (pathname !== '/') return;

        const returningFlag = sessionStorage.getItem(RETURN_FLAG_KEY);
        const savedState = sessionStorage.getItem(STORAGE_KEY);

        if (returningFlag === 'true' && savedState && !hasRestoredRef.current) {
            try {
                const state: ScrollState = JSON.parse(savedState);

                // Check if the saved state is recent (within 5 minutes)
                const isRecent = Date.now() - state.timestamp < 5 * 60 * 1000;

                if (isRecent) {
                    // Set flags immediately for synchronous rendering
                    hasRestoredRef.current = true;

                    // Use requestAnimationFrame to ensure DOM is ready
                    requestAnimationFrame(() => {
                        // Set visible state
                        setIsReturning(true);
                        setShouldForceVisible(true);

                        // First, scroll to top to ensure all sections mount
                        window.scrollTo(0, 0);

                        // Then wait a frame for React to render
                        requestAnimationFrame(() => {
                            // Find the projects section
                            const projectsSection = document.getElementById('projects');

                            if (projectsSection && state.scrollY > 0) {
                                // Smooth scroll to the saved position
                                window.scrollTo({
                                    top: state.scrollY,
                                    behavior: 'instant'
                                });
                            }

                            // Clear the returning flag after a short delay
                            setTimeout(() => {
                                setIsReturning(false);
                                setShouldForceVisible(false);
                                sessionStorage.removeItem(RETURN_FLAG_KEY);
                            }, 100);
                        });
                    });
                } else {
                    // Clear old state
                    sessionStorage.removeItem(STORAGE_KEY);
                    sessionStorage.removeItem(RETURN_FLAG_KEY);
                }
            } catch (error) {
                console.error('Error restoring scroll position:', error);
                sessionStorage.removeItem(STORAGE_KEY);
                sessionStorage.removeItem(RETURN_FLAG_KEY);
            }
        }
    }, [pathname]);

    // Clean up when navigating to a project detail page
    useEffect(() => {
        if (isProjectDetailPage) {
            hasRestoredRef.current = false;
        }
    }, [isProjectDetailPage]);

    return {
        isReturning,
        saveScrollPosition,
        shouldForceVisible
    };
}
