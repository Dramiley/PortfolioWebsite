'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/config';
import { projects } from '@/data/projects';
import { Section } from './Section';
import { motion, useInView } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { ProjectCard } from './ProjectCard';
import { useProjectsScrollRestoration } from '@/hooks/useProjectsScrollRestoration';

/**
 * Projects Component
 * 
 * Renders a list of projects in an alternating layout with robust state restoration.
 * 
 * Features:
 * - Preserves scroll position when navigating to/from project details
 * - Prevents animation flicker when returning from detail pages
 * - Handles both in-page navigation and browser back/forward
 * - Respects prefers-reduced-motion accessibility setting
 * 
 * Each project card features:
 * - A project screenshot with hover effects
 * - Title, description, and tags
 * - Links to the live site and project detail page
 * 
 * @returns {JSX.Element} The rendered Projects section.
 */
export const Projects = () => {
    const { effectsEnabled } = useEffects();
    const [hasVisited, setHasVisited] = useState(false);
    const { shouldForceVisible, saveScrollPosition } = useProjectsScrollRestoration();

    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    React.useEffect(() => {
        const visited = sessionStorage.getItem('hasVisitedProjects');
        if (visited) {
            setHasVisited(true);
        } else {
            sessionStorage.setItem('hasVisitedProjects', 'true');
        }
    }, []);

    const shouldShowHeader = shouldForceVisible || !effectsEnabled || hasVisited || headerInView;

    return (
        <Section id="projects" className="relative">
            <motion.div
                ref={headerRef}
                initial={false}
                animate={shouldShowHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: (effectsEnabled && !hasVisited && !shouldForceVisible) ? 0.6 : 0 }}
                style={{ willChange: (effectsEnabled && !hasVisited && !shouldForceVisible) ? 'transform, opacity' : undefined }}
                className="mb-24"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-soft">Projects</span>
                </h2>
                <p className="text-foreground-muted text-lg max-w-2xl">
                    {siteConfig.sections.projects.description}
                </p>
            </motion.div>

            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        hasVisited={hasVisited}
                        effectsEnabled={effectsEnabled}
                        forceVisible={shouldForceVisible}
                        onNavigate={saveScrollPosition}
                    />
                ))}
            </div>
        </Section>
    );
};
