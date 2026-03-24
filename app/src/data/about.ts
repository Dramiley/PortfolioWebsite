export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I'm currently studying for my master's degree in computer science at TU Dresden, balancing my studies with work as a student assistant and a freelance software engineer.",
        "As a freelancer, I enjoy turning ideas into real products. Recently, I built and shipped HideZone, a real-time GPS game with over 300 active players, and delivered a secure remote desktop client for a business customer.",
        "In my student assistant position, my work sits at the intersection of AI and hardware. I'm currently engineering a Raspberry Pi edge system that uses object detection models and an AR beamer to project maintenance instructions directly onto industrial machines.",
        "Technically, I primarily work across full-stack development, server-client architectures, and machine learning. I love breaking down problems, automating processes, and finding creative ways to make them more efficient. I'm fast, eager to experiment, and I genuinely enjoy wrapping my head around complex systems."
    ]
};
