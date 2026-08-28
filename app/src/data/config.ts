/**
 * @file config.ts
 * @description Central configuration file for the website's content.
 */

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    subtitle: "M.Sc. Computer Science student - TU Dresden",
    social: {
        github: "https://github.com/Dramiley",
        linkedin: "https://www.linkedin.com/in/robin-morgenstern/",
        email: "morgensternrobin04@gmail.com"
    },
    sections: {
        hero: {
            statement: "I build dependable software across AI, automation, mobile, and distributed systems.",
            subtext: "M.Sc. Computer Science student at TU Dresden.\nWorking Student at Infineon & developer of HideZone."
        },
        projects: {
            description: "Selected work across machine learning, mobile, and systems engineering."
        },
        skills: {
            description: "The tools and technologies I reach for most."
        },
        contact: {
            title: "Let's talk.",
            description: "Have a role, a project, or just a technical question? My inbox is open.",
            buttonText: "Get in touch"
        }
    }
};
