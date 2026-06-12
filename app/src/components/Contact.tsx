'use client';

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <Section id="contact" className="mb-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden p-12 md:p-20 glass-panel"
            >
                <div className="relative z-10 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        {siteConfig.sections.contact.title}
                    </h2>

                    <p className="text-foreground-muted mb-10 text-lg leading-relaxed">
                        {siteConfig.sections.contact.description}
                    </p>

                    <a
                        href={`mailto:${siteConfig.social.email}`}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-soft transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                    >
                        <span>{siteConfig.sections.contact.buttonText}</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    <p className="mt-4 text-sm text-foreground-muted/70">
                        <a
                            href={`mailto:${siteConfig.social.email}`}
                            className="hover:text-primary transition-colors duration-300"
                        >
                            {siteConfig.social.email}
                        </a>
                        <span className="mx-2" aria-hidden="true">·</span>
                        Dresden, Germany
                    </p>
                </div>
            </motion.div>
        </Section>
    );
};
