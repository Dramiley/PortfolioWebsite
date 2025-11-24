'use client';

/**
 * @file SidebarNav.tsx
 * @description The floating sidebar navigation component.
 * Displays dots for each section and highlights the active one based on scroll position.
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

/**
 * SidebarNav Component
 * 
 * Visible only on large screens.
 * Features:
 * - Intersection Observer to detect active section
 * - Smooth scrolling to sections on click
 * - Hover effects showing section labels
 * 
 * @returns {JSX.Element} The rendered SidebarNav component.
 */
export const SidebarNav = () => {
    const [activeSection, setActiveSection] = useState('hero');

    /**
     * Sets up an IntersectionObserver to track which section is currently in view.
     */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
            <div className="glass-panel rounded-full px-4 py-6 flex flex-col gap-4">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group relative flex items-center justify-end"
                        aria-label={`Navigate to ${section.label}`}
                    >
                        {/* Label (appears on hover) */}
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="absolute right-12 px-3 py-1 bg-background-tertiary text-foreground text-sm font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        >
                            {section.label}
                        </motion.span>

                        {/* Dot indicator */}
                        <div className="relative">
                            <div
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section.id
                                    ? 'bg-neon-blue w-3 h-3'
                                    : 'bg-foreground-muted group-hover:bg-white'
                                    }`}
                            />
                            {activeSection === section.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 rounded-full bg-neon-blue/30 blur-sm"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </nav>
    );
};
