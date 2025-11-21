import { siteConfig } from '@/data/config';
import { Section } from './Section';

export const Contact = () => {
    return (
        <Section id="contact" className="mb-12">
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-3 font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
                >
                    Say Hello
                </a>
            </div>
        </Section>
    );
};
