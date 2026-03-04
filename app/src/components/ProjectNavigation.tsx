'use client';

/**
 * @file ProjectNavigation.tsx
 * @description Next/Prev project navigation for case study pages.
 * Keeps the hiring manager in a reading flow instead of bouncing back to the grid.
 */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Project } from '@/types';

interface ProjectNavigationProps {
    currentProject: Project;
}

export function ProjectNavigation({ currentProject }: ProjectNavigationProps) {
    const detailProjects = projects.filter((p) => p.hasDetailPage);
    const currentIndex = detailProjects.findIndex((p) => p.slug === currentProject.slug);

    const prevProject = currentIndex > 0 ? detailProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < detailProjects.length - 1 ? detailProjects[currentIndex + 1] : null;

    return (
        <section aria-label="Project navigation" className="max-w-6xl mx-auto px-6 py-24">
            <div className="border-t border-white/5 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Previous Project */}
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject.slug}`}
                            className="group flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-white/[0.04]"
                        >
                            <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </span>
                            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {prevProject.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {/* Next Project */}
                    {nextProject ? (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="group flex flex-col items-end text-right p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-white/[0.04]"
                        >
                            <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                                Next
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {nextProject.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>

                {/* View All Projects - centered below */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-10"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        View all projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
