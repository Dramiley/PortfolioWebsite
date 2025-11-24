'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/Section';
import AmbientBackground from '@/components/AmbientBackground';
import { BackToProjectsButton } from '@/components/BackToProjectsButton';
import { Project } from '@/types';

export default function ProjectContent({ project }: { project: Project }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="relative min-h-screen overflow-hidden">
            <AmbientBackground />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                </motion.div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <BackToProjectsButton variant="top" />
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                            {project.shortDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mt-8"
                    >
                        {project.githubUrl && (
                            project.githubUrl.toLowerCase() === 'closed source' ? (
                                <button
                                    disabled
                                    className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white/40 border border-white/10 cursor-not-allowed font-bold"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                    Closed Source
                                </button>
                            ) : (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-soft transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Code
                                </a>
                            )
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Overview & Tech Stack */}
            <Section className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                        <p className="text-lg text-foreground-muted leading-relaxed whitespace-pre-line">
                            {project.fullDescription}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-neon-blue"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Deep Dive: Problem, Solution, Architecture */}
            <Section className="py-20">
                <div className="space-y-24">
                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`grid grid-cols-1 ${project.details.problemImage ? 'md:grid-cols-2' : ''} gap-12 items-center`}
                    >
                        <div className={`${project.details.problemImage ? 'order-2 md:order-1' : ''}`}>
                            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-transparent mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                {project.details.problem}
                            </p>
                        </div>
                        {project.details.problemImage && (
                            <div className="order-1 md:order-2 bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                                <div className="aspect-video relative rounded-lg overflow-hidden bg-black/50 flex items-center justify-center">
                                    <Image
                                        src={project.details.problemImage}
                                        alt="Problem Visualization"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`grid grid-cols-1 ${project.details.solutionImage ? 'md:grid-cols-2' : ''} gap-12 items-center`}
                    >
                        {project.details.solutionImage && (
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                                <div className="aspect-video relative rounded-lg overflow-hidden bg-black/50 flex items-center justify-center">
                                    <Image
                                        src={project.details.solutionImage}
                                        alt="Solution Visualization"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                        <div>
                            <div className="w-12 h-1 bg-gradient-to-r from-neon-blue to-transparent mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                {project.details.solution}
                            </p>
                        </div>
                    </motion.div>

                    {/* Architecture (Optional) */}
                    {project.details.architecture && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="bg-background-secondary/50 rounded-3xl p-8 md:p-12 border border-white/5"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 text-center">System Architecture</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed max-w-4xl mx-auto text-center">
                                {project.details.architecture}
                            </p>
                        </motion.div>
                    )}
                </div>
            </Section>

            {/* Key Features */}
            <Section className="py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.details.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:bg-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-foreground-muted">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Timeline (Optional) */}
            {project.details.timeline && (
                <Section className="py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Development Timeline</h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
                        {project.details.timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'}`}
                            >
                                <div className="flex-1 md:w-1/2">
                                    <span className="text-neon-blue font-mono text-sm mb-2 block">{item.date}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-foreground-muted text-sm">{item.description}</p>
                                </div>
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />
                                <div className="flex-1 md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Next Project CTA */}
            <section className="py-32 text-center">
                <BackToProjectsButton variant="bottom" />
            </section>
        </main>
    );
}
