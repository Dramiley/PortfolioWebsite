export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I am pursuing a Master's degree in Computer Science at TU Dresden, combining advanced academic research with active roles as a research assistant and freelance systems engineer.",
        "In my freelance work, I specialize in transforming complex requirements into reliable, user-facing applications. My recent work includes engineering and deploying HideZone, which is a real-time, GPS-enabled mobile game that scaled to over 10,000 organic downloads across the App Store and Google Play. I also developed a secure, custom remote desktop client featuring time-linked authentication for an enterprise client.",
        "At TU Dresden, my research and development work sits at the intersection of computer vision and edge computing. I am currently designing a Raspberry Pi edge system that processes real-time object detection models to overlay precise, projector-based augmented reality instructions directly onto industrial machinery.",
        "Technically, my core expertise spans full-stack engineering, distributed systems architecture, and machine learning integration. I focus on developing clean, testable, and highly optimized codebases that solve tangible operational problems. I approach engineering challenges with rigorous analysis, a rapid prototyping mindset, and a strong commitment to technical excellence."
    ]
};
