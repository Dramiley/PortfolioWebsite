'use client';

/**
 * @file ProjectContent.tsx
 * @description Premium case study layout for individual project pages.
 * Structure: Compact Hero → Metrics Bar → Narrative (Challenge/Approach/Impact) → Features → Timeline → Gallery
 */

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/Section';
import { BackToProjectsButton } from '@/components/BackToProjectsButton';
import { ImageGallery } from '@/components/ImageGallery';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { CaseStudyNav } from '@/components/CaseStudyNav';
import { Project } from '@/types';

/* ------------------------------------------------------------------ */
/*  Shared icon components - avoids duplicating raw SVG inline        */
/* ------------------------------------------------------------------ */

function PlayStoreIcon({ className = 'w-5 h-5' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-1.081.042.996.996 0 0 1-.529-.872V2.844c0-.368.197-.707.529-.872a.996.996 0 0 1 1.08.142z" />
            <path d="M14.67 12.879l4.908 4.908-4.234 2.45c-.381.22-.863.02-1.011-.417l-.545-1.706 4.316-4.316.566-.919z" />
            <path d="M19.578 6.213L14.67 11.121 14.104 10.203 9.788 5.887 10.334 4.18c.148-.437.63-.638 1.011-.417l4.233 2.45h0z" />
            <path d="M12.914 12L4.629 3.715 4.628 20.285 12.914 12z" />
        </svg>
    );
}

function ExternalLinkIcon({ className = 'w-5 h-5' }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    );
}

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LockIcon({ className = 'w-5 h-5' }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Helper: resolves whether a URL targets the Play Store             */
/* ------------------------------------------------------------------ */
const isPlayStoreUrl = (url: string) => url.includes('play.google.com');

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ProjectContent({ project }: { project: Project }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="relative min-h-screen overflow-hidden">
            <CaseStudyNav />

            {/* ── Hero ─────────────────────────────────────────── */}
            <section
                id="case-overview"
                aria-label={`${project.title} overview`}
                className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col justify-center overflow-hidden"
            >
                <motion.div
                    style={{ y, opacity: heroOpacity }}
                    className="absolute inset-0 z-0 h-[60vh]"
                >
                    <Image
                        src={project.heroImage}
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
                </motion.div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <BackToProjectsButton variant="top" />
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight max-w-4xl">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl leading-relaxed mb-8">
                            {project.shortDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6"
                    >
                        {/* Action buttons */}
                        <nav aria-label="Project links" className="flex flex-wrap gap-4">
                            {project.links ? (
                                project.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.03] ${isPlayStoreUrl(link.url)
                                            ? 'bg-primary text-white hover:bg-primary-soft shadow-lg shadow-primary/20'
                                            : 'bg-accent text-white hover:bg-accent/80 shadow-lg shadow-accent/20'
                                            }`}
                                    >
                                        {isPlayStoreUrl(link.url) ? <PlayStoreIcon /> : <ExternalLinkIcon />}
                                        {link.label}
                                    </a>
                                ))
                            ) : project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.03] ${isPlayStoreUrl(project.link)
                                        ? 'bg-primary text-white hover:bg-primary-soft shadow-lg shadow-primary/20'
                                        : 'bg-white text-background hover:bg-white/90 shadow-lg shadow-white/20'
                                        }`}
                                >
                                    {isPlayStoreUrl(project.link) ? (
                                        <><PlayStoreIcon /> Play Store</>
                                    ) : (
                                        <><ExternalLinkIcon /> Check it out</>
                                    )}
                                </a>
                            )}

                            {project.githubUrl && (
                                project.githubUrl.toLowerCase() === 'closed source' ? (
                                    <button
                                        disabled
                                        aria-label="Source code is not publicly available"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.03] text-foreground-muted/50 border border-white/5 cursor-not-allowed font-medium"
                                    >
                                        <LockIcon />
                                        Closed Source
                                    </button>
                                ) : (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-soft transition-all hover:scale-[1.03] shadow-lg shadow-primary/20"
                                    >
                                        <GithubIcon />
                                        View Code
                                    </a>
                                )
                            )}
                        </nav>

                        {/* Tech stack pills */}
                        <ul aria-label="Tech stack" className="flex flex-wrap gap-2 items-center sm:ml-auto list-none">
                            {project.techStack.map((tech) => (
                                <li key={tech.name}>
                                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/8 text-sm font-medium text-foreground-muted/80 whitespace-nowrap inline-block">
                                        {tech.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ── Metrics Bar ──────────────────────────────────── */}
            {project.details.metrics && project.details.metrics.length > 0 && (
                <section aria-label="Key metrics" className="relative z-20 -mt-8 mb-16 max-w-6xl mx-auto px-6">
                    <dl className="glass-panel rounded-2xl p-8 md:p-10 flex flex-wrap gap-8 md:gap-16 justify-center md:justify-around text-center border-l-4 border-l-primary">
                        {project.details.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col">
                                <dd className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-2 order-first">
                                    {metric.value}
                                </dd>
                                <dt className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider">
                                    {metric.label}
                                </dt>
                            </div>
                        ))}
                    </dl>
                </section>
            )}

            {/* ── Narrative Block ──────────────────────────────── */}
            <Section id="case-narrative" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Context  */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32">
                            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Context</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed font-light whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                        </div>
                    </aside>

                    {/* Right: Narrative arc */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Challenge */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                {project.details.problem}
                            </p>
                            {project.details.problemImage && (
                                <div className="mt-8 rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
                                    <Image
                                        src={project.details.problemImage}
                                        alt={`${project.title} - the challenge`}
                                        width={1200}
                                        height={675}
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                        </motion.article>

                        {/* Approach */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-foreground mb-4">The Approach</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                {project.details.approach}
                            </p>
                            {project.details.approachImage && (
                                <div className="mt-8 rounded-2xl overflow-hidden border border-white/5 bg-black/50">
                                    <Image
                                        src={project.details.approachImage}
                                        alt={`${project.title} - the approach`}
                                        width={1200}
                                        height={675}
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                        </motion.article>

                        {/* Impact */}
                        {project.details.impact && (
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-foreground mb-4">The Impact</h2>
                                <p className="text-lg text-foreground-muted leading-relaxed">
                                    {project.details.impact}
                                </p>
                            </motion.article>
                        )}

                        {/* Architecture */}
                        {project.details.architecture && (
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-foreground mb-4">System Architecture</h2>
                                <p className="text-lg text-foreground-muted leading-relaxed">
                                    {project.details.architecture}
                                </p>
                            </motion.article>
                        )}
                    </div>
                </div>
            </Section>

            {/* ── Key Features ─────────────────────────────────── */}
            <Section id="case-features" className="py-24 border-y border-white/5 relative">
                <div className="absolute inset-0 bg-background-secondary/30" aria-hidden="true" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-foreground mb-12">Key Engineering Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
                        {project.details.features.map((feature, idx) => (
                            <motion.article
                                key={idx}
                                role="listitem"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors relative z-10 pr-12">
                                    {feature.title}
                                </h3>
                                <p className="text-foreground-muted relative z-10 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── Timeline (Condensed Horizontal) ──────────────── */}
            {project.details.timeline && (
                <Section id="case-timeline" className="py-24">
                    <h2 className="text-3xl font-bold text-foreground mb-16">Development Lifecycle</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {project.details.timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative"
                            >
                                <div className="hidden md:block absolute top-1.5 left-0 w-full h-[2px] bg-white/10 -z-10" aria-hidden="true" />
                                <div className="w-3 h-3 rounded-full bg-primary mb-6 shadow-[0_0_10px_var(--primary-glow)] border-2 border-background" aria-hidden="true" />
                                <time className="text-primary font-mono text-xs uppercase tracking-wider font-semibold mb-2 block">{item.date}</time>
                                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            )}

            {/* ── Gallery ──────────────────────────────────────── */}
            {project.galleryImages && project.galleryImages.length > 0 && (
                <Section id="case-gallery" className="py-24">
                    <h2 className="text-3xl font-bold text-foreground mb-12">Project Gallery</h2>
                    <ImageGallery images={project.galleryImages} projectTitle={project.title} />
                </Section>
            )}

            {/* ── Next / Prev Project Navigation ─────────────── */}
            <ProjectNavigation currentProject={project} />
        </main>
    );
}
