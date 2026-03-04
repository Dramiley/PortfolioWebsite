'use client';

import { siteConfig } from '@/data/config';

export const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 bg-background-secondary/20">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-1.5">
                    <span className="font-bold text-lg tracking-tight text-foreground">
                        Robin<span className="text-primary">.</span>
                    </span>
                    <p className="text-sm text-foreground-muted">
                        © {new Date().getFullYear()} {siteConfig.name}
                    </p>
                </div>

                <nav className="flex gap-6" aria-label="Footer navigation">
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${siteConfig.social.email}`}
                        className="text-sm text-foreground-muted hover:text-primary transition-colors duration-300"
                    >
                        Email
                    </a>
                </nav>
            </div>
        </footer>
    );
};
