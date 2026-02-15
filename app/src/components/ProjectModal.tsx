'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import Image from 'next/image';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-10 z-[70] overflow-y-auto overflow-x-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div className="relative">
                            {/* Hero Image */}
                            <div className="relative h-64 md:h-96 w-full">
                                {project.heroImage ? (
                                    <Image
                                        src={project.heroImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-background-secondary to-background" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                                    <p className="text-lg text-foreground-muted max-w-2xl">{project.shortDescription}</p>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 space-y-12 max-w-5xl mx-auto">
                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span key={tech.name} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neon-blue">
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Full Description */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                                    <p className="text-foreground-muted leading-relaxed whitespace-pre-line">
                                        {project.fullDescription}
                                    </p>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <h4 className="text-lg font-bold text-white mb-3">The Challenge</h4>
                                        <p className="text-foreground-muted text-sm">{project.details.problem}</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <h4 className="text-lg font-bold text-white mb-3">The Solution</h4>
                                        <p className="text-foreground-muted text-sm">{project.details.solution}</p>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-8 border-t border-white/10">
                                    {project.links ? (
                                        project.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-soft transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ))
                                    ) : project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-soft transition-colors"
                                        >
                                            Visit Site
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
