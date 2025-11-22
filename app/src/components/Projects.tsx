'use client';

import { siteConfig } from '@/data/config';
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
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
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
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="group relative"
                    >
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                            {/* Image Section */}
                            <div className="w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 group-hover:border-neon-blue/30 transition-colors duration-500 shadow-2xl shadow-black/50">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 z-10" />
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
                            <div className="w-full lg:w-2/5 flex flex-col justify-center relative">
                                <div className={`absolute -top-12 ${index % 2 === 0 ? '-right-4' : '-left-4'} p-0 opacity-10 pointer-events-none select-none`}>
                                    <span className="text-9xl font-bold text-white/5 leading-none">0{index + 1}</span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-foreground-muted mb-8 leading-relaxed text-lg">
                                        {project.description}
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
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-neon-blue/10 text-white hover:text-neon-blue border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:scale-105"
                                            >
                                                <span className="font-medium">Visit Site</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground-muted hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105"
                                            >
                                                <span className="font-medium">Code</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
