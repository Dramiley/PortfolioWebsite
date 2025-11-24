'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/config';
import { projects } from '@/data/projects';
import { Section } from './Section';
import { motion, useInView } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { ProjectCard } from './ProjectCard';

/**
 * Projects Component
 * 
 * Renders a list of projects in an alternating layout.
 * Each project card features:
 * - A project screenshot with hover effects
 * - Title, description, and tags
 * - Links to the live site and GitHub repository
 * 
 * @returns {JSX.Element} The rendered Projects section.
 */
export const Projects = () => {
    const { effectsEnabled } = useEffects();
    const [hasVisited, setHasVisited] = useState(false);

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

    const shouldShowHeader = !effectsEnabled || hasVisited || headerInView;

    return (
        <Section id="projects" className="relative">
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={shouldShowHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: (effectsEnabled && !hasVisited) ? 0.6 : 0 }}
                style={{ willChange: 'transform, opacity' }}
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
                    />
                ))}
            </div>
        </Section>
    );
};
