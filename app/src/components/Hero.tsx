'use client';

/**
 * @file Hero.tsx
 * @description Clean, editorial hero section. No gimmicks — just name, statement, and CTAs.
 */

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffects } from '@/context/EffectsContext';

export const Hero = () => {
    const { effectsEnabled } = useEffects();

    const duration = effectsEnabled ? 0.8 : 0;
    const ease = [0.16, 1, 0.3, 1] as const;

    return (
        <Section id="hero" className="pt-36 md:pt-48 pb-24 min-h-[90vh] flex flex-col justify-center relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center relative z-10">
                {/* Text — takes 3 of 5 columns */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration, ease }}
                    className="lg:col-span-3 flex flex-col items-start"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-foreground leading-[1.05]">
                        Robin{' '}
                        <span className="text-gradient-primary">
                            Morgenstern
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-xl mb-4">
                        {siteConfig.sections.hero.statement}
                    </p>

                    <p className="text-base md:text-lg text-foreground-muted/70 leading-relaxed max-w-xl mb-10 whitespace-pre-line">
                        {siteConfig.sections.hero.subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {/* Primary CTA */}
                        <a
                            href="#projects"
                            className="group flex items-center justify-center h-12 px-8 font-semibold text-white transition-all duration-300 bg-primary rounded-lg hover:bg-primary-soft hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                        >
                            <span className="mr-2">See my work</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        {/* Secondary CTAs */}
                        <div className="flex gap-3 w-full sm:w-auto">
                            <a
                                href="/resume.pdf"
                                download="Robin_Morgenstern_CV.pdf"
                                className="flex items-center justify-center h-12 px-6 font-medium text-foreground-muted transition-all duration-300 rounded-lg border border-white/10 hover:border-primary/30 hover:text-foreground hover:bg-white/[0.03] active:scale-[0.98]"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                CV
                            </a>

                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-12 px-6 font-medium text-foreground-muted transition-all duration-300 rounded-lg border border-white/10 hover:border-primary/30 hover:text-foreground hover:bg-white/[0.03] active:scale-[0.98]"
                                aria-label="GitHub Profile"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>

                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-12 px-6 font-medium text-foreground-muted transition-all duration-300 rounded-lg border border-white/10 hover:border-primary/30 hover:text-foreground hover:bg-white/[0.03] active:scale-[0.98]"
                                aria-label="LinkedIn Profile"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Photo — takes 2 of 5 columns */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration, delay: effectsEnabled ? 0.15 : 0, ease }}
                    className="lg:col-span-2 relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-80 md:w-72 md:h-96">
                        {/* Subtle background glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 to-accent/8 rounded-2xl blur-[40px] -z-10" />

                        {/* Image Container — rounded rectangle, not circle */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/30 bg-background-secondary">
                            <Image
                                src="/images/profile.jpg"
                                alt="Robin Morgenstern"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 256px, 288px"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
