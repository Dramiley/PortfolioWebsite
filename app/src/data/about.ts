export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I build things that work in the real world — from an AI system that guides technicians through machine repairs using projected AR overlays, to a GPS hide-and-seek game with 200+ downloads in its first month on the Play Store.",
        "I'm currently finishing my M.Sc. in Computer Science at TU Dresden. My bachelor's thesis automated the generation of knowledge graphs from multi-object detection data, grounding LLM responses in structured spatial reasoning. I also work as a student assistant building the full pipeline — from training SSD detection models and engineering the Dockerized server backend, to setting up the Raspberry Pi edge system with camera calibration, network scanning, and beamer-based AR projection.",
        "I'm strongest in Python and the ML ecosystem (TensorFlow, PyTorch, Transformers), and I build production apps with Flutter + Firebase. I pick up new stacks fast — this website, for instance, was my first Next.js project.",
    ]
};
