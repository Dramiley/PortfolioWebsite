'use client';

import { siteConfig } from '@/data/config';

export const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 bg-background-secondary/30 backdrop-blur-sm overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-bold text-xl tracking-tight text-white group cursor-default">
                        Robin<span className="text-primary">.</span>
                    </span>
                    <p className="text-sm text-foreground-muted">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground-muted hover:text-neon-blue transition-colors duration-300 hover:scale-105 transform"
                    >
                        GitHub
                    </a>
                    <a
                        href={`mailto:${siteConfig.social.email}`}
                        className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-105 transform"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};
