'use client';

import { siteConfig } from '@/data/config';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <Section id="contact" className="mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-background-secondary to-background border border-white/5" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Ready to start your next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-soft">Project?</span>
                    </h2>

                    <p className="text-foreground-muted mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href={`mailto:${siteConfig.social.email}`}
                        className="inline-flex items-center justify-center rounded-full bg-primary text-white px-10 py-4 text-lg font-bold tracking-wide hover:bg-primary-soft transition-all duration-300 shadow-[0_0_20px_rgba(255,139,61,0.3)] hover:shadow-[0_0_40px_rgba(255,139,61,0.6)] hover:-translate-y-1"
                    >
                        Say Hello
                    </a>
                </div>
            </motion.div>
        </Section>
    );
};
