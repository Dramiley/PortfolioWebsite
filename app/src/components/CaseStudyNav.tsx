'use client';

/**
 * @file CaseStudyNav.tsx
 * @description Scroll-driven vertical section indicator for detail pages.
 * Shows which case study section the reader is currently viewing.
 * Hidden on mobile (< 1280px) - only shows when there's enough screen width.
 */

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
    id: string;
    label: string;
}

const sections: Section[] = [
    { id: 'case-overview', label: 'Overview' },
    { id: 'case-narrative', label: 'The Story' },
    { id: 'case-features', label: 'Features' },
    { id: 'case-timeline', label: 'Timeline' },
    { id: 'case-gallery', label: 'Gallery' },
];

export function CaseStudyNav() {
    const [activeSection, setActiveSection] = useState('case-overview');
    const [visible, setVisible] = useState(false);

    const handleScroll = useCallback(() => {
        // Only show after scrolling past the hero
        const scrollY = window.scrollY;
        setVisible(scrollY > 400);

        // Find active section by checking which one is currently in view
        let current = 'case-overview';
        for (const section of sections) {
            const el = document.getElementById(section.id);
            if (el) {
                const rect = el.getBoundingClientRect();
                // Section is "active" when its top is above viewport center
                if (rect.top <= window.innerHeight * 0.4) {
                    current = section.id;
                }
            }
        }
        setActiveSection(current);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Filter out sections that don't exist on this page
    const [availableSections, setAvailableSections] = useState<Section[]>([]);

    useEffect(() => {
        const available = sections.filter(s => document.getElementById(s.id));
        setAvailableSections(available);
    }, []);

    if (availableSections.length < 2) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1"
                    aria-label="Case study sections"
                >
                    {/* Vertical line */}
                    <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-white/8" aria-hidden="true" />

                    {availableSections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => handleClick(section.id)}
                                className="group relative flex items-center py-3 pl-0 pr-4"
                                aria-current={isActive ? 'true' : undefined}
                            >
                                {/* Dot */}
                                <motion.div
                                    className={`relative z-10 w-[15px] h-[15px] rounded-full border-2 transition-colors duration-300 ${isActive
                                        ? 'border-primary bg-primary/20'
                                        : 'border-white/15 bg-background group-hover:border-white/30'
                                        }`}
                                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-[3px] rounded-full bg-primary"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </motion.div>

                                {/* Label */}
                                <span
                                    className={`ml-4 text-xs font-medium whitespace-nowrap transition-all duration-300 ${isActive
                                        ? 'text-foreground opacity-100'
                                        : 'text-foreground-muted opacity-0 group-hover:opacity-100'
                                        }`}
                                >
                                    {section.label}
                                </span>
                            </button>
                        );
                    })}
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
