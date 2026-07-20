export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I am a Computer Science Master's student at TU Dresden. Alongside my studies, I work as an Automation & AI working student at Infineon (Siltectra), as a student assistant at the university, and as an independent software developer.",
        "In my working student role at Infineon, I develop internal applications and automate workflows. I recently built an AI-powered Jira ticket bot, added new features to an AI maintenance chatbot, and improved its security. At TU Dresden, I work on computer vision and edge computing. I developed a Raspberry Pi edge system that projects augmented reality guidance directly onto industrial machinery.",
        "As an independent developer, I focus on building and shipping end-to-end applications. I created HideZone, a location-based mobile game with over 25,000 downloads on the App Store and Google Play. I also design custom systems for enterprise clients, including secure remote desktop tools and virtual machine services.",
        "I work primarily with Python, Docker, Next.js, and Dart, with my strongest expertise in Python and Docker. My goal is always to write clean, reliable, and well-tested code that delivers a smooth user experience."
    ]
};
