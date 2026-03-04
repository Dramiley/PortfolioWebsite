export interface AboutContent {
    title: string;
    bio: string[];
}

export const aboutContent: AboutContent = {
    title: "About",
    bio: [
        "I care about software that works when nobody's watching. The AI maintenance assistant I built projects repair instructions onto machinery through a beamer, so technicians don't have to split attention between a manual and the hardware in front of them. HideZone, a GPS hide-and-seek game I shipped to the Play Store, hit 200+ downloads its first month with zero marketing budget. If I build something, it ships and it runs.",
        "I'm wrapping up my M.Sc. in Computer Science at TU Dresden. My bachelor's thesis tackled a problem I genuinely found fascinating: automatically generating knowledge graphs from object detection data, so LLMs can reason about spatial relationships in physical environments. As a student assistant, I own the full pipeline end-to-end: training the detection models, running the Dockerized backend, and configuring the Raspberry Pi edge system down to camera calibration and network discovery.",
        "Python and the ML stack (TensorFlow, PyTorch, Transformers) are where I'm most dangerous. I build production apps in Flutter + Firebase. And I learn fast: this portfolio was my first Next.js project."
    ]
};
