'use client';

import { projects } from '@/data/projects';
import { Section } from './Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Projects = () => {
    return (
        <Section id="projects" className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-soft">Projects</span>
                </h2>
                <p className="text-foreground-muted text-lg max-w-2xl">
                    A selection of work that demonstrates my passion for building polished web experiences.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden glass-panel border border-white/5 hover:border-neon-blue/30 transition-all duration-500"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div className="relative aspect-video md:aspect-auto bg-background-tertiary overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
                                <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />

                                {project.imageUrl ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-foreground-muted bg-background-secondary">
                                        <span className="text-lg font-medium">Project Preview</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center relative">
                                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                    <span className="text-9xl font-bold text-white/5 leading-none">0{index + 1}</span>
                                </div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full bg-white/5 hover:bg-neon-blue/20 text-foreground-muted hover:text-neon-blue transition-all duration-300 hover:scale-110"
                                                aria-label="View Live Site"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full bg-white/5 hover:bg-neon-blue/20 text-foreground-muted hover:text-neon-blue transition-all duration-300 hover:scale-110"
                                                aria-label="View Code"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-foreground-muted mb-8 leading-relaxed text-lg relative z-10">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 text-xs font-bold tracking-wide rounded-full bg-primary/5 text-primary-soft border border-primary/10 group-hover:border-primary/30 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
