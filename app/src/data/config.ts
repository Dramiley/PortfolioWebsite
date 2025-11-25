/**
 * @file config.ts
 * @description Central configuration file for the website's content.
 * Allows for easy updates to text and links without modifying components.
 */

import { SiteConfig } from '@/types';

/**
 * The main configuration object for the site.
 */
export const siteConfig: SiteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    subtitle: "Bachelor of Science in Computer Science",
    social: {
        github: "https://github.com/Dramiley",
        linkedin: "www.linkedin.com/in/robin-morgenstern",
        email: "morgensternrobin04@gmail.com"
    },
    sections: {
        hero: {
            availableForWork: "AVAILABLE FOR WORK",
            typewriterWords: ["Software Engineer", "Full Stack Developer", "Programmer", "Bachelor in Computer Science"]
        },
        projects: {
            description: "A selection of projects that I have done."
        },
        skills: {
            description: "A list of technologies that I use to build software."
        },
        contact: {
            titlePrefix: "Ready to start your next",
            titleHighlight: "Project?",
            description: "I'm currently open to new opportunities. I'll try my best to get back to you!",
            buttonText: "Contact Me"
        }
    }
};
