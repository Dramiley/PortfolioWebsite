'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const shouldShow = forceVisible || !effectsEnabled || hasVisited || isInView;
    const shouldAnimate = !forceVisible && effectsEnabled && !hasVisited;

    const handleCardClick = () => {
        if (project.hasDetailPage && onNavigate) {
            onNavigate();
            router.push(`/projects/${project.slug}`);
        }
    };

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
                {/* Image Section - Clickable */}
                <div
                    onClick={handleCardClick}
                    className={`w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 group-hover:border-neon-blue/30 transition-colors duration-500 shadow-2xl shadow-black/50 ${project.hasDetailPage ? 'cursor-pointer' : ''}`}
                >
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
                        {/* Title - Clickable */}
                        <h3
                            onClick={handleCardClick}
                            className={`text-3xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 mb-4 ${project.hasDetailPage ? 'cursor-pointer' : ''}`}
                        >
                            {project.title}
                        </h3>

                        {/* Description - Clickable */}
                        <p
                            onClick={handleCardClick}
                            className={`text-foreground-muted mb-8 leading-relaxed text-lg ${project.hasDetailPage ? 'cursor-pointer' : ''}`}
                        >
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
                            {project.githubUrl && (
                                project.githubUrl.toLowerCase() === 'closed source' ? (
                                    <button
                                        disabled
                                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white/40 border border-white/10 cursor-not-allowed"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                        </svg>
                                        <span className="font-medium">Closed Source</span>
                                    </button>
                                ) : (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-neon-blue/10 text-white hover:text-neon-blue border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        <span className="font-medium">View Code</span>
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
