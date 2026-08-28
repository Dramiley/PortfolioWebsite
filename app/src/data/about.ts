export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I am a Computer Science Master's student at TU Dresden. Alongside my studies, I work as an Automation & AI working student at Infineon (Siltectra), as a student assistant at the university, and as an independent software developer.",
        "At Infineon, I build internal applications and automate operational workflows, including an AI-assisted Jira ticket pipeline and improvements to a maintenance chatbot. At TU Dresden, my work spans computer vision, edge systems, knowledge graphs, and LLM evaluation for industrial maintenance.",
        "As an independent developer, I build and run complete products. HideZone, my real-time GPS multiplayer game, has reached more than 40,000 downloads across Google Play and the App Store. I have also delivered remote desktop and virtual-machine support tools for enterprise clients.",
        "I work mainly with Python, Docker, Flutter, and TypeScript. I prefer clear system boundaries, useful tests, and software that remains dependable after it ships."
    ]
};
