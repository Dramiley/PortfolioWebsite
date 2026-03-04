'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/config';
import { projects } from '@/data/projects';
import { Section } from './Section';
import { motion, useInView } from 'framer-motion';
import { useEffects } from '@/context/EffectsContext';
import { ProjectCard } from './ProjectCard';
import { useProjectsScrollRestoration } from '@/hooks/useProjectsScrollRestoration';

const filterCategories = [
    { key: 'all', label: 'All' },
    { key: 'ml-ai', label: 'ML & AI' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'web', label: 'Web' },
    { key: 'systems', label: 'Systems' },
];

export const Projects = () => {
    const { effectsEnabled } = useEffects();
    const [hasVisited, setHasVisited] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
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

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.categories.includes(activeFilter as 'ml-ai' | 'mobile' | 'web' | 'systems'));

    return (
        <Section id="projects" className="relative border-t border-white/5 pt-32">
            <motion.div
                ref={headerRef}
                initial={false}
                animate={shouldShowHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: (effectsEnabled && !hasVisited && !shouldForceVisible) ? 0.5 : 0 }}
                style={{ willChange: (effectsEnabled && !hasVisited && !shouldForceVisible) ? 'transform, opacity' : undefined }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Projects
                </h2>
                <p className="text-foreground-muted text-lg max-w-2xl mb-8">
                    {siteConfig.sections.projects.description}
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                    {filterCategories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveFilter(cat.key)}
                            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeFilter === cat.key
                                ? 'bg-primary/15 text-primary border border-primary/25'
                                : 'text-foreground-muted border border-white/8 hover:border-white/15 hover:text-foreground'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </motion.div>

            <div className="flex flex-col gap-28">
                {filteredProjects.map((project, index) => (
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
