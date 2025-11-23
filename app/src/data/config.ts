import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
    name: "Robin Morgenstern",
    tagline: "Software Engineer",
    subtitle: "Bachelor of Science in Computer Science",
    social: {
        github: "https://github.com/Dramiley",
        email: "morgensternrobin04@gmail.com"
    },
    sections: {
        hero: {
            availableForWork: "AVAILABLE FOR WORK",
            typewriterWords: ["Software Engineer", "Full Stack Developer", "Programmer", "Bachelor in Computer Science"]
        },
        projects: {
            description: "A selection of work that demonstrates my passion for programming and software development."
        },
        skills: {
            description: "A curated list of technologies I use to build software."
        },
        contact: {
            titlePrefix: "Ready to start your next",
            titleHighlight: "Project?",
            description: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            buttonText: "Say Hello"
        }
    }
};
