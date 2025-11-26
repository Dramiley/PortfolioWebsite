import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: "automated-knowledge-graph-generation",
        slug: "automated-knowledge-graph-generation",
        hasDetailPage: true,
        title: "Bachelor Thesis",
        shortDescription: "Automated knowledge graph creation via multi-object detection for an AI maintenance assistant",
        fullDescription: "This research project addresses the gap between visual object detection and structured knowledge representation. I developed a system that automatically converts bounding box data from images of industrial machines into formal Knowledge Graphs (RDF/OWL). These graphs serve as a structured knowledge base for Large Language Models (LLMs), enabling them to answer spatial and maintenance-related questions in an industrial context without hallucinations.",
        tags: ["Python", "Semantic Web", "Computer Vision", "LLMs", "Research"],
        techStack: [
            { name: "Python" },
            { name: "owlready2" },
            { name: "RDF / OWL" },
            { name: "DeepSeek / Llama / Qwen" },
            { name: "SSD Object Detection" },
            { name: 'Git' }
        ],
        heroImage: "/images/projects/thesis_flowchart.jpg",
        galleryImages: [
            "/images/projects/thesis_flowchart.jpg",
            "/images/projects/thesis_evaluation_charts.jpg",
            "/images/projects/thesis_evaluation_charts2.jpg"
        ],
        link: "",
        githubUrl: "https://github.com/Dramiley/Bachelorarbeit",
        details: {
            problem: "Creating Knowledge Graphs manually is time-intensive and error-prone. While text-to-graph methods exist, there is a significant lack of automated approaches that transform visual object detection data into formal, logic-based knowledge structures that LLMs can process efficiently for industrial maintenance tasks.",
            problemImage: "",
            solution: "I designed and implemented a modular Python based pipeline (`OntologyGenerator.py`) that ingests CSV output from Multi-Object Detection models. Using geometric algorithms, it automatically derives semantic spatial relations (e.g., 'left_of', 'above', 'inside_of') and instantiates them into an OWL ontology. The system supports multi-camera fusion to minimize the uncertainty and problems of object detection.",
            solutionImage: "",
            architecture: "The system processes annotated image data (CSV) containing bounding boxes. It calculates the center of each object and applies threshold-based logic to determine spatial relationships. It utilizes `owlready2` to generate standard-compliant RDF triples. The output was evaluated against four LLMs (DeepSeek-R1, DeepSeek-V3, Llama 3.1, Qwen 2.5) using specific metrics for correctness and completeness.",
            features: [
                { title: "Geometric Relation Extraction", description: "Algorithms to automatically determine 'above', 'below', 'left_to', and 'inside_of' relations based on pixel coordinates." },
                { title: "Multi-Camera Fusion", description: "Logic to merge object detection data from multiple angles into a single consistent Knowledge Graph." },
                { title: "Implicit vs. Explicit Modeling", description: "Implemented variants to test graph compactness versus semantic completeness for LLM processing." },
                { title: "LLM Integration", description: "Evaluated different serialization formats (OWL vs. Triples) to optimize LLM reasoning capabilities." }
            ],
            timeline: [
                { date: "May 2025", title: "Research & Concept", description: "Analyzing state of the art in Semantic Web and Object Detection." },
                { date: "Jun 2025", title: "Implementation", description: "Developing the Python generator and relation logic algorithms." },
                { date: "Sep 2025", title: "Submission", description: "Final evaluation of LLM performance and thesis submission at TU Dresden." },
                { date: "Oct 2025", title: "Defense", description: "Final defense of thesis at TU Dresden. Received a grade of 1.4" }
            ]
        },
    },

    {
        id: 'ai-maintenance-assistant',
        slug: 'ai-maintenance-assistant',
        hasDetailPage: true,
        title: 'AI Maintenance Assistant',
        shortDescription: 'An AI maintenance assistant that uses Object Detection and LLMs to answer common maintenance questions.',
        fullDescription: 'A comprehensive hardware and software solution designed to assist technicians during complex maintenance tasks. By integrating a Raspberry Pi with a finetuned SSD Object Detection model, this system identifies machinery components in real-time. It leverages Large Language Models (LLMs) to provide context-aware answers to maintenance questions and utilizes a projector to overlay visual guidance directly onto the equipment.',
        tags: ['Python', 'Tensorflow', 'Docker', 'Flask', 'LLMs', 'Raspberry Pi'],
        techStack: [
            { name: 'Python' },
            { name: 'Tensorflow' },
            { name: 'Docker' },
            { name: 'Flask' },
            { name: 'Raspberry Pi' },
            { name: 'SSD Object Detection' },
            { name: 'LLMs' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/bounding_boxes.jpg',
        galleryImages: [],
        link: '',
        githubUrl: 'closed source',
        details: {
            problem: "Expert supervision isn't always available, and technicians often struggle to identify specific components in complex machinery using inefficient paper manuals.",
            problemImage: '',
            solution: 'We developed an AR-capable AI assistant that identifies components in real-time using Computer Vision. By projecting information directly onto the equipment and allowing natural language Q&A via LLMs, technicians receive immediate, hands-free guidance.',
            solutionImage: '',
            architecture: 'The system follows a distributed client-server model. The Raspberry Pi functions as the edge device, managing the camera input, calibration, and projector output for the AR overlay. The backend consists of a Dockerized server environment that hosts the computation-heavy SSD Object Detection model and LLM logic. Python scripts facilitate real-time network communication, transmitting images for inference and returning bounding box coordinates and textual guidance to the edge device for immediate visualization.',
            features: [
                { title: 'Object Detection', description: 'Object Detection finetuned on own created dataset of maintenance tasks.' },
                { title: 'Raspberry Pi', description: 'Integration of Raspberry Pi for real-time object detection and visual feedback.' },
                { title: 'Docker', description: 'Integration of Docker for containerization of the object detection model for easy deployment on servers.' },
                { title: 'Python Scripts', description: 'Python scripts are used to control the Raspberry Pi and the server.' },
            ],
            timeline: [
                { date: "Feb 2024", title: "Finetuning Object Detection", description: "Finetuning SSD Object Detection on own created dataset of maintenance tasks." },
                { date: "Sep 2024", title: "Development of Raspberry Pi", description: "Developing the Python backend for the Server and the Raspberry Pi." },
                { date: "Apr 2025", title: "Added more features to the Raspberry Pi", description: "Added image checking, camera calibration, network-wide server scanner and visualization of the object detection with a beamer." },
                { date: "Oct 2025", title: "Research for further development", description: "Researching if implementation of the results of my bachelor's thesis is possible or if we should train a new scene graph generation model." },
            ]
        }
    },

    {
        id: 'portfolio-website',
        slug: 'portfolio-website',
        hasDetailPage: true,
        title: 'Portfolio Website',
        shortDescription: 'A responsive portfolio that shows off my skills and projects.',
        fullDescription: 'The Website startet as a simple portfolio and then got more advanced with motion-first experience with glassmorphic UI, scroll-linked animations, and thoughtful microinteractions. The site balances visual richness with accessibility and performance.',
        tags: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Accessibility'],
        techStack: [
            { name: 'Next.js 15' },
            { name: 'React 19' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'Framer Motion' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/portfolio.jpg',
        galleryImages: [],
        link: 'https://robinmorgenstern.dev',
        githubUrl: 'https://github.com/Dramiley/PortfolioWebsite/tree/main',
        details: {
            problem: 'Most portfolios feel like static resumes. I wanted something that could demonstrate technical skills through execution itself and not just describe them. The challenge was creating a memorable experience without sacrificing maintainability, performance, or accessibility.',
            problemImage: '',
            solution: 'I built a fully data-driven architecture where content is stored in typed TypeScript files, separate from presentation. This let me iterate rapidly on design while keeping content updates simple. The site evolved through several redesigns, adding sophisticated motion systems, glassmorphic effects, and interactive elements. Each iteration taught me something about balancing aesthetics with usability.',
            solutionImage: '',
            architecture: 'Built on Next.js 15 with App Router for optimal performance. Framer Motion powers complex animations, scroll-triggered reveals, and page transitions. The design system uses CSS custom properties for theming with a Deep Navy background, Vibrant Orange accents, and Neon Blue highlights. Glassmorphism and backdrop filters add depth. All animations respect prefers-reduced-motion for accessibility.',
            features: [
                { title: 'Motion-First Design', description: 'Scroll-linked parallax, orchestrated section reveals, and physics-based interactions create a living interface that responds naturally to user input.' },
                { title: 'Glassmorphic UI', description: 'Layered transparency effects with backdrop blur, subtle borders, and controlled opacity for depth without visual clutter.' },
                { title: 'Ambient Background', description: 'Canvas-based animated blobs that react to mouse movement and scroll position, adding atmosphere while staying performant.' },
                { title: 'Accessible by Design', description: 'Semantic HTML, keyboard navigation, ARIA labels, and reduced-motion support ensure the site works for everyone.' },
                { title: 'Data-Driven Content', description: 'Projects, skills, and experience are defined in typed data files, making updates straightforward without touching components.' },
                { title: 'Lightbox Gallery', description: 'Fullscreen image viewing with keyboard navigation, thumbnails, and smooth transitions for showcasing project visuals.' }
            ],
            timeline: [
                { date: 'Oct 2024', title: 'Concept & Planning', description: 'Defining the aesthetic and technical requirements.' },
                { date: 'Nov 2024', title: 'Initial Build and Premium Redesign', description: 'Set up Next.js architecture with basic components and data structure. Overhauled with Vibrant Orange / Neon Blue palette, glassmorphism, and scroll animations.' },
                { date: 'Nov 2024', title: 'Motion Refinement', description: 'Added ambient background, physics interactions, and microanimations throughout.' },
                { date: 'Nov 2024', title: 'Polish & Accessibility', description: 'Improved motion quality, added reduced-motion support, and refined responsive behavior.' }
            ]
        }
    },

    {
        id: 'software-technology-internship',
        slug: 'software-technology-internship',
        hasDetailPage: false,
        title: 'Software Technology Internship',
        shortDescription: 'A small, 10 week internship at the TU Dresden.',
        fullDescription: '',
        tags: ['Java', 'Spring Boot', 'JavaScript'],
        techStack: [
            { name: 'Java' },
            { name: 'Spring Boot' },
            { name: 'JavaScript' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/swt_praktikum.jpg',
        galleryImages: [],
        link: '',
        githubUrl: 'https://github.com/Dramiley/swt23w30/tree/main',
        details: {
            problem: '',
            problemImage: '',
            solution: '',
            solutionImage: '',
            architecture: '',
            features: [
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' }
            ],
            timeline: [
                { date: '', title: '', description: '' },
                { date: '', title: '', description: '' },
                { date: '', title: '', description: '' },
                { date: '', title: '', description: '' }
            ]
        }
    },

    {
        id: 'robolab',
        slug: 'robolab',
        hasDetailPage: false,
        title: 'Robolab',
        shortDescription: 'A short 14 day project at the TU Dresden where we built a robot to navigate a maze.',
        fullDescription: '',
        tags: ['Python'],
        techStack: [
            { name: 'Python' },
        ],
        heroImage: '/images/projects/robolab.jpg',
        galleryImages: [],
        link: '',
        githubUrl: 'https://github.com/Dramiley/Robolab23',
        details: {
            problem: '',
            problemImage: '',
            solution: '',
            solutionImage: '',
            architecture: '',
            features: [
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' },
                { title: '', description: '' }
            ],
            timeline: [
                { date: '', title: '', description: '' },
                { date: '', title: '', description: '' },
                { date: '', title: '', description: '' },
                { date: '', title: '', description: '' }
            ]
        }
    }
];
