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
            subtext: "Currently pursuing an M.Sc. at TU Dresden.\nPreviously shipped a GPS game to 10,000+ users."
        },
        projects: {
            description: "Selected work across machine learning, mobile, and systems engineering."
        },
        skills: {
            description: "The tools and technologies I reach for most."
        },
        contact: {
            title: "Let's talk.",
            description: "I am always open to discussing technical collaborations, systems architecture, or engineering opportunities. Feel free to reach out to discuss how we can work together.",
            buttonText: "Get in Touch"
        }
    }
};
