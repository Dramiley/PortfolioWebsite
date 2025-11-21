import { siteConfig } from '@/data/config';

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-background-secondary/30 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-bold text-xl tracking-tight text-white">
                        R<span className="text-primary">M</span>
                    </span>
                    <p className="text-sm text-foreground-muted">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground-muted hover:text-neon-blue transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground-muted hover:text-neon-blue transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${siteConfig.social.email}`}
                        className="text-sm font-medium text-foreground-muted hover:text-neon-blue transition-colors duration-300"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};
