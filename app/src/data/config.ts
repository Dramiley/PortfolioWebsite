/**
 * @file config.ts
 * @description Central configuration file for the website's content.
 */

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    subtitle: "B.Sc. Computer Science - TU Dresden",
    social: {
        github: "https://github.com/Dramiley",
        linkedin: "https://www.linkedin.com/in/robin-morgenstern",
        email: "morgensternrobin04@gmail.com"
    },
    sections: {
        hero: {
            statement: "Software engineer building at the intersection of AI, computer vision, and real-time systems.",
            subtext: "Currently pursuing an M.Sc. at TU Dresden.\nPreviously shipped a GPS game to 400+ users."
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
            description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a specific project in mind or just want to explore possibilities, feel free to reach out.",
            buttonText: "Get in Touch"
        }
    }
};
