'use client';

import { projects } from '@/data/projects';
import { Section } from './Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Projects = () => {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    Featured <span className="text-primary">Projects</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden glass-panel hover:border-neon-blue/50 transition-all duration-500"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative aspect-video md:aspect-auto bg-background-secondary overflow-hidden">
                                {project.imageUrl ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-foreground-muted bg-background-secondary">
                                        <span className="text-lg font-medium">Project Preview</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/5 hover:bg-neon-blue/20 text-neon-blue transition-colors"
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
                                                className="p-2 rounded-full bg-white/5 hover:bg-neon-blue/20 text-neon-blue transition-colors"
                                                aria-label="View Code"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-foreground-muted mb-8 leading-relaxed text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-primary/10 text-primary border border-primary/20"
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
