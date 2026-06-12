'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/config';
import { projects } from '@/data/projects';
import { Section } from './Section';
import { motion, useInView } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { CompactProjectCard } from './CompactProjectCard';
import { useProjectsScrollRestoration } from '@/hooks/useProjectsScrollRestoration';

export const Projects = () => {
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

    const shouldShowHeader = shouldForceVisible || hasVisited || headerInView;
    const animateHeader = !hasVisited && !shouldForceVisible;

    const featured = projects.filter(p => p.featured);
    const more = projects.filter(p => !p.featured);

    return (
        <Section id="projects" className="relative border-t border-border pt-32">
            <motion.div
                ref={headerRef}
                initial={false}
                animate={shouldShowHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: animateHeader ? 0.5 : 0 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Projects
                </h2>
                <p className="text-foreground-muted text-lg max-w-2xl">
                    {siteConfig.sections.projects.description}
                </p>
            </motion.div>

            {/* Featured case studies */}
            <div className="flex flex-col gap-24">
                {featured.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        hasVisited={hasVisited}
                        forceVisible={shouldForceVisible}
                        onNavigate={saveScrollPosition}
                    />
                ))}
            </div>

            {/* The rest, in brief */}
            {more.length > 0 && (
                <div className="mt-28">
                    <h3 className="text-xl font-semibold text-foreground mb-2">More projects</h3>
                    <p className="text-foreground-muted mb-8">
                        Coursework, research, and this site itself.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {more.map((project) => (
                            <CompactProjectCard
                                key={project.id}
                                project={project}
                                onNavigate={saveScrollPosition}
                            />
                        ))}
                    </div>
                </div>
            )}
        </Section>
    );
};
