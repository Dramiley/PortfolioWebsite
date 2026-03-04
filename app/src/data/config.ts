/**
 * @file config.ts
 * @description Central configuration file for the website's content.
 */

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    subtitle: "B.Sc. Computer Science — TU Dresden",
    social: {
        github: "https://github.com/Dramiley",
        linkedin: "https://www.linkedin.com/in/robin-morgenstern",
        email: "morgensternrobin04@gmail.com"
    },
    sections: {
        hero: {
            statement: "Software engineer building at the intersection of AI, computer vision, and real-time systems.",
            subtext: "Currently pursuing an M.Sc. at TU Dresden.\nPreviously shipped a GPS game to 200+ users."
        },
        whatIBuild: {
            title: "What I build",
            domains: [
                {
                    title: 'ML & Computer Vision',
                    description: 'Object detection, knowledge graphs, fine-tuning LLMs, RAG systems',
                },
                {
                    title: 'Cross-Platform Apps',
                    description: 'GPS-based games, Firebase real-time sync, Flutter production apps',
                },
                {
                    title: 'Systems & Automation',
                    description: 'Raspberry Pi edge computing, Docker pipelines, server-client architectures',
                },
            ]
        },
        projects: {
            description: "Selected work across ML, mobile, and systems engineering."
        },
        skills: {
            description: "The tools and technologies I reach for most."
        },
        contact: {
            title: "Let's talk.",
            description: "I'm looking for engineering roles where I can work on hard problems — ideally involving ML, computer vision, real-time systems, or software development.",
            buttonText: "Get in Touch"
        }
    }
};
