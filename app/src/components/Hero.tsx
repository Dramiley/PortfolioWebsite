import { siteConfig } from '@/data/config';
import { Section } from './Section';

export const Hero = () => {
    return (
        <Section className="pt-24 md:pt-32">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {siteConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {siteConfig.tagline}
            </p>
            <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-8">
                {siteConfig.subtitle}
            </p>
            <div className="flex gap-4">
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
                >
                    Contact Me
                </a>
                <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:hover:bg-zinc-900 transition-colors"
                >
                    GitHub
                </a>
            </div>
        </Section>
    );
};
