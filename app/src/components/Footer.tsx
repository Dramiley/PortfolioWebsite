import { siteConfig } from '@/data/config';

export const Footer = () => {
    return (
        <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-black">
            <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};
