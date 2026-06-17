export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I'm a Computer Science Master's student at TU Dresden, splitting my time between coursework, a research assistant position, and freelance projects.",
        "The freelance side is where things get shipped. Most recently that was HideZone, a real-time GPS hide-and-seek game that has passed 15,000 downloads on the App Store and Google Play, and before that a remote desktop client with time-linked authentication for an enterprise customer.",
        "At the university I work where computer vision meets edge computing: a Raspberry Pi system that runs real-time object detection and uses a projector to overlay repair instructions directly onto industrial machinery.",
        "Day to day that means Python, Dart, and TypeScript, full-stack work, and a fair amount of ML integration. Whatever the stack, I want the code to be tested, readable, and fast enough to stay out of the way."
    ]
};
