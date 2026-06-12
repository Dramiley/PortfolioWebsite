'use client';

/**
 * @file ProjectContent.tsx
 * @description Case study layout for individual project pages.
 * Structure: Hero → Metrics → Narrative (centered reading column) →
 * Highlights → Timeline (vertical) → Gallery → Prev/Next navigation.
 */

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BackToProjectsButton } from '@/components/BackToProjectsButton';
import { ImageGallery } from '@/components/ImageGallery';
import { ProjectNavigation } from '@/components/ProjectNavigation';
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

/* Entrance animation shared by the content blocks */
const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5 },
} as const;

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="relative min-h-screen">
            {/* ── Hero ─────────────────────────────────────────── */}
            <section
                aria-label={`${project.title} overview`}
                className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
            >
                {/* Dimmed hero image backdrop */}
                <div className="absolute inset-0 z-0 h-[55vh]" aria-hidden="true">
                    <Image
                        src={project.heroImage}
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover opacity-15"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <BackToProjectsButton variant="top" />
                        {project.meta && (
                            <p className="font-mono text-sm uppercase tracking-wider text-primary mb-4">
                                {project.meta}
                            </p>
                        )}
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight max-w-4xl">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl leading-relaxed">
                            {project.shortDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-8"
                    >
                        {/* Action buttons */}
                        <nav aria-label="Project links" className="flex flex-wrap gap-3">
                            {project.links ? (
                                project.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] ${isPlayStoreUrl(link.url)
                                            ? 'bg-primary text-white hover:bg-primary-soft shadow-lg shadow-primary/20'
                                            : 'bg-foreground text-background hover:opacity-90 shadow-lg'
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
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] ${isPlayStoreUrl(project.link)
                                        ? 'bg-primary text-white hover:bg-primary-soft shadow-lg shadow-primary/20'
                                        : 'bg-foreground text-background hover:opacity-90 shadow-lg'
                                        }`}
                                >
                                    {isPlayStoreUrl(project.link) ? (
                                        <><PlayStoreIcon /> Play Store</>
                                    ) : (
                                        <><ExternalLinkIcon /> Website</>
                                    )}
                                </a>
                            )}

                            {project.githubUrl && (
                                project.githubUrl.toLowerCase() === 'closed source' ? (
                                    <span
                                        title="Source code is not publicly available"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-surface text-foreground-muted/60 border border-border cursor-not-allowed font-medium"
                                    >
                                        <LockIcon />
                                        Closed Source
                                    </span>
                                ) : (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-soft transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
                                    >
                                        <GithubIcon />
                                        View Code
                                    </a>
                                )
                            )}
                        </nav>

                        {/* Tech stack pills - their own row, aligned with the text above */}
                        <ul aria-label="Tech stack" className="flex flex-wrap gap-2 mt-6 list-none">
                            {project.techStack.map((tech) => (
                                <li key={tech.name}>
                                    <span className="px-3 py-1 rounded-full bg-surface border border-border text-sm font-medium text-foreground-muted whitespace-nowrap inline-block">
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
                <section aria-label="Key metrics" className="max-w-6xl mx-auto px-6 mb-8">
                    <dl className="glass-panel rounded-2xl p-8 md:p-10 flex flex-wrap gap-8 md:gap-16 justify-center md:justify-around text-center">
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

            {/* ── Narrative: centered reading column ───────────── */}
            <section aria-label="Case study" className="max-w-3xl mx-auto px-6 py-16">
                {/* Lede */}
                <motion.p
                    {...fadeUp}
                    className="text-lg md:text-xl text-foreground-muted leading-relaxed whitespace-pre-line"
                >
                    {project.fullDescription}
                </motion.p>

                {/* Problem */}
                <motion.article {...fadeUp} className="mt-16">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Problem</h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        {project.details.problem}
                    </p>
                    {project.details.problemImage && (
                        <div className="mt-8 rounded-2xl overflow-hidden border border-border bg-surface">
                            <Image
                                src={project.details.problemImage}
                                alt={`${project.title} - the problem`}
                                width={1200}
                                height={675}
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="w-full h-auto"
                            />
                        </div>
                    )}
                </motion.article>

                {/* Approach */}
                <motion.article {...fadeUp} className="mt-16">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Approach</h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        {project.details.approach}
                    </p>
                    {project.details.approachImage && (
                        <div className="mt-8 rounded-2xl overflow-hidden border border-border bg-surface">
                            <Image
                                src={project.details.approachImage}
                                alt={`${project.title} - the approach`}
                                width={1200}
                                height={675}
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="w-full h-auto"
                            />
                        </div>
                    )}
                </motion.article>

                {/* Outcome */}
                {project.details.impact && (
                    <motion.article {...fadeUp} className="mt-16">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Outcome</h2>
                        <p className="text-lg text-foreground-muted leading-relaxed">
                            {project.details.impact}
                        </p>
                    </motion.article>
                )}

                {/* Architecture */}
                {project.details.architecture && (
                    <motion.article {...fadeUp} className="mt-16">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Architecture</h2>
                        <p className="text-lg text-foreground-muted leading-relaxed">
                            {project.details.architecture}
                        </p>
                    </motion.article>
                )}
            </section>

            {/* ── Highlights ───────────────────────────────────── */}
            <section aria-label="Highlights" className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-foreground mb-10">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5" role="list">
                    {project.details.features.map((feature, idx) => (
                        <motion.article
                            key={idx}
                            role="listitem"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group p-7 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-colors duration-300"
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-foreground-muted leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* ── Timeline (vertical) ──────────────────────────── */}
            {project.details.timeline && (
                <section aria-label="Timeline" className="max-w-3xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10">Timeline</h2>
                    <ol className="relative border-l border-border pl-8 space-y-10 list-none">
                        {project.details.timeline.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.04 }}
                                className="relative"
                            >
                                <span
                                    className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background"
                                    aria-hidden="true"
                                />
                                <time className="text-primary font-mono text-xs uppercase tracking-wider font-semibold block mb-1.5">
                                    {item.date}
                                </time>
                                <h3 className="text-lg font-bold text-foreground mb-1.5">{item.title}</h3>
                                <p className="text-foreground-muted text-sm leading-relaxed">{item.description}</p>
                            </motion.li>
                        ))}
                    </ol>
                </section>
            )}

            {/* ── Gallery ──────────────────────────────────────── */}
            {project.galleryImages && project.galleryImages.length > 0 && (
                <section aria-label="Gallery" className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-foreground mb-10">Gallery</h2>
                    <ImageGallery images={project.galleryImages} projectTitle={project.title} />
                </section>
            )}

            {/* ── Next / Prev Project Navigation ─────────────── */}
            <ProjectNavigation currentProject={project} />
        </div>
    );
}
