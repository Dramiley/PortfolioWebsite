'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    index: number;
    hasVisited: boolean;
    effectsEnabled: boolean;
    forceVisible?: boolean;
    onNavigate?: () => void;
}

export const ProjectCard = ({
    project,
    index,
    hasVisited,
    effectsEnabled,
    forceVisible = false,
    onNavigate
}: ProjectCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // If forceVisible is true (returning from detail), show immediately without animation
    // Otherwise, if visited, show immediately. If not, wait for view.
    // If effects disabled, show immediately.
    const shouldShow = forceVisible || !effectsEnabled || hasVisited || isInView;
    const shouldAnimate = !forceVisible && effectsEnabled && !hasVisited;

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: shouldAnimate ? 0.8 : 0,
                delay: shouldAnimate ? index * 0.1 : 0
            }}
            style={{ willChange: shouldAnimate ? 'transform, opacity' : undefined }}
            className="group relative"
        >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                {/* Image Section */}
                <div className="w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 group-hover:border-neon-blue/30 transition-colors duration-500 shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 z-10" />
                    <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />

                    {project.heroImage ? (
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-foreground-muted bg-background-secondary">
                            <span className="text-lg font-medium">Project Preview</span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center relative">
                    <div className={`absolute -top-12 ${index % 2 === 0 ? '-right-4' : '-left-4'} p-0 opacity-10 pointer-events-none select-none`}>
                        <span className="text-9xl font-bold text-white/5 leading-none">0{index + 1}</span>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 mb-4">
                            {project.title}
                        </h3>

                        <p className="text-foreground-muted mb-8 leading-relaxed text-lg">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-primary/5 text-primary-soft border border-primary/10 group-hover:border-primary/30 transition-colors duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.hasDetailPage && (
                                <a
                                    href={`/projects/${project.slug}`}
                                    onClick={onNavigate}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-soft text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                                >
                                    <span className="font-medium">View Details</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-neon-blue/10 text-white hover:text-neon-blue border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:scale-105"
                                >
                                    <span className="font-medium">Live Demo</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
