import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'ai-maintenance-assistant',
        slug: 'ai-maintenance-assistant',
        hasDetailPage: true,
        categories: ['ml-ai', 'systems'],
        title: 'AI Maintenance Assistant',
        shortDescription: 'An AI maintenance assistant that uses Object Detection and LLMs to answer common maintenance questions.',
        fullDescription: 'An end-to-end hardware and software system built to guide technicians through complex repairs. I integrated a Raspberry Pi with a fine-tuned SSD Object Detection model to identify machinery components in real-time. The system uses local LLMs to answer contextual maintenance questions and drives a projector to map visual instructions directly onto the physical equipment.',
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
            problem: "Expert supervision is a bottleneck. Technicians waste hours cross-referencing dense paper manuals to identify specific components in complex machinery.",
            problemImage: '',
            approach: 'I built an AR-capable AI assistant that acts as a real-time supervisor. It uses computer vision to track components and projects contextual instructions directly onto the hardware, while an LLM handles natural language Q&A for hands-free troubleshooting.',
            approachImage: '',
            impact: 'Drastically cut training time and cognitive load for new technicians. The combination of spatial AR overlays and contextual LLM reasoning proved that automated visual guidance can replace static manuals.',
            metrics: [
                { label: 'Platform', value: 'AR Projection' },
                { label: 'Hardware', value: 'Raspberry Pi 3' }
            ],
            architecture: 'The system follows a distributed client-server model. The Raspberry Pi functions as the edge device, managing the camera input, calibration, and projector output for the AR overlay. The backend consists of a Dockerized server environment that hosts the computation-heavy SSD Object Detection model and LLM logic. Python scripts facilitate real-time network communication, transmitting images for inference and returning bounding box coordinates and textual guidance to the edge device for immediate visualization.',
            features: [
                { title: 'Object Detection', description: 'Fine-tuned SSD Object Detection on a custom-curated dataset of maintenance tasks.' },
                { title: 'Raspberry Pi', description: 'Integration of Raspberry Pi for real-time object detection and visual feedback.' },
                { title: 'Docker', description: 'Dockerized architecture ensuring consistent deployment across edge (Pi) and server environments' },
                { title: 'Python Scripts', description: 'Python scripts are used to control the Raspberry Pi and the server.' },
            ],
            timeline: [
                { date: "Feb 2024", title: "Finetuning Object Detection", description: "Fine-tuned SSD Object Detection on a custom-curated dataset of maintenance tasks." },
                { date: "Sep 2024", title: "Development of Raspberry Pi", description: "Developed the Python backend for the Server and the Raspberry Pi." },
                { date: "Apr 2025", title: "Added more features to the Raspberry Pi", description: "Added image checking, camera calibration, network-wide server scanner and visualization of the object detection with a beamer." },
                { date: "Oct 2025", title: "Future Roadmap Research", description: "Researched the viability of implementing thesis findings versus training a new scene graph generation model." },
            ]
        }
    },
    {
        id: "hidezone",
        slug: "hidezone",
        hasDetailPage: true,
        categories: ['mobile'],
        title: "HideZone: IRL GPS Hide & Seek",
        shortDescription: "Real-world multiplayer Hide & Seek! Hunt friends with live GPS, tactical items, and traps.",
        fullDescription: "HideZone is a real-world GPS multiplayer game that turns any city or park into a Battle Royale. I engineered the entire stack from scratch, featuring live geofencing, shrinking play zones, and real-time inventory mechanics. Built with a strict privacy-first architecture: no accounts, no persistent tracking, and data wipes the second the match ends.",
        tags: ["Flutter", "Dart", "Firebase", "Riverpod", "Geolocation", "Game Development"],
        techStack: [
            { name: "Flutter" },
            { name: "Dart" },
            { name: "Firebase Realtime Database" },
            { name: "Flutter Riverpod" },
            { name: "Flutter Map" },
            { name: "Geolocator" },
            { name: "Git" }
        ],
        heroImage: "/images/projects/HideZoneMenu.jpg",
        galleryImages: [
            "/images/projects/HideZone1.jpg",
            "/images/projects/HideZone2.jpg",
            "/images/projects/HideZone3.jpg",
            "/images/projects/HideZone4.jpg"
        ],
        link: "https://dramiley.dev/",
        githubUrl: "closed source",
        details: {
            problem: "Organizing outdoor games in complex environments like city centers is chaotic. Players argue over boundaries, and simple running mechanics fail to hold the attention of players used to the strategic depth of modern video games.",
            problemImage: "",
            approach: "I built a digital referee that tracks everyone in milliseconds. It enforces boundaries via GPS geofencing and injects strategy through virtual items (Proximity Mines, Scanners) to balance the physical exertion with tactical decision-making.",
            approachImage: "",
            impact: "Designed, built, and shipped to production solo. The app acquired 200+ organic downloads in its first month on the Play Store, validating both the Firebase real-time sync architecture and the core game loop.",
            metrics: [
                { label: 'Active Downloads', value: '200+' },
                { label: 'Sync Latency', value: '< 50ms' },
                { label: 'Cost to Run', value: '$0/mo' }
            ],
            architecture: "The application is built with Flutter for cross-platform performance. It employs a clean architecture using the Strategy Pattern to handle different game modes (e.g., Classic, Zombie). State management is driven by Flutter Riverpod, ensuring a reactive and testable codebase. Firebase Realtime Database acts as the single source of truth, synchronizing player types, locations, and game events across all clients in milliseconds.",
            features: [
                { title: "Tactical Warfare Items", description: "Use Scanners to reveal locations, Proximity Mines for traps, Ghost Mode for stealth, and Zone Movers to flush out campers." },
                { title: "Dynamic Game Modes", description: "Includes Classic Hide & Seek with shrinking interaction zones and Zombie Infection with 'Patient Zero' mechanics." },
                { title: "Real-Time GPS Action", description: "Live tracking with geofencing that supports custom lobbies for 2 to 10+ friends." },
                { title: "Privacy First Design", description: "No account required. All data is wiped instantly when the match ends. 100% Fair Play with no Pay-to-Win mechanics." }
            ],
            timeline: [
                { date: "Dec 2025", title: "Core Development", description: "Started app development and implemented basic features." },
                { date: "Jan 2026", title: "Further Development", description: "Added features like game modes, events, items and further quality of life improvements." },
                { date: "Jan 2026", title: "Closed Testing", description: "Field testing with local groups to refine GPS tracking, battery consumption and overall user experience." },
                { date: "Feb 2026", title: "Release", description: "Released the app to the Google Play Store and improving the app based on feedback." },
            ]
        },
    },
    {
        id: "automated-knowledge-graph-generation",
        slug: "automated-knowledge-graph-generation",
        hasDetailPage: true,
        categories: ['ml-ai'],
        title: "Bachelor Thesis",
        shortDescription: "Automated knowledge graph creation via multi-object detection for an AI maintenance assistant",
        fullDescription: "My thesis bridged the gap between 2D object detection and spatial reasoning. I engineered a pipeline that digests raw bounding box data from industrial machines and automatically compiles it into formal Knowledge Graphs (RDF/OWL). This structured semantic layer allows LLMs to accurately answer spatial queries without hallucinating.",
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
            problem: "Manual Knowledge Graph creation is a massive bottleneck. Existing pipelines rely heavily on text-to-graph extraction, completely ignoring the spatial logic hiding inside visual object detection data required for industrial robotics.",
            problemImage: "",
            approach: "I built a Python pipeline that ingests bounding box coordinates, applies geometric algorithms to extract spatial relations ('left_of', 'inside_of'), and compiles them into standard-compliant OWL ontologies. I also implemented multi-camera fusion to map complex 3D relationships from 2D feeds.",
            approachImage: "",
            impact: "Proven that deterministic geometric-to-semantic translation can match or beat massive multi-modal end-to-end models in industrial contexts. The defense and paper earned a 1.4 grade for strict methodological rigor and LLM evaluation.",
            metrics: [
                { label: 'Final Grade', value: '1.4' },
                { label: 'LLMs Evaluated', value: '4' }
            ],
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
        id: 'secret-llm-cultural-qa',
        slug: 'secret-llm-cultural-qa',
        hasDetailPage: true,
        categories: ['ml-ai'],
        title: 'SecretLLM - Cultural QA System',
        shortDescription: 'Optimizing Llama-3-8B for cultural reasoning for a 2 month project at TU Dresden.',
        fullDescription: 'A culturally-aware reasoning engine built on top of Llama-3-8B. Standard LLMs fail on niche cultural queries due to Western-centric training data. I engineered a Dynamic RAG (Retrieval-Augmented Generation) pipeline paired with targeted Supervised Fine-Tuning (SFT) to inject specific cultural contexts. The result was a massive 0.16 accuracy leap on Short Answer Questions.',
        tags: ['Python', 'Transformers', 'Llama 3 8B', 'RAG', 'Fine-tuning'],
        techStack: [
            { name: 'Python' },
            { name: 'Transformers' },
            { name: 'Sentence Transformers' },
            { name: 'PEFT / LoRA' },
            { name: 'Llama 3 8B' },
            { name: 'Hugging Face' },
            { name: 'WandB' },
            { name: 'BitsAndBytes' }
        ],
        heroImage: '/images/projects/eval-accuarcy.jpg',
        galleryImages: [
            '/images/projects/rag_architecture.jpg',
            '/images/projects/eval-accuarcy.jpg',
            '/images/projects/eval-loss.jpg',
        ],
        link: '',
        githubUrl: 'https://github.com/Dramiley/SecretLLM-Project',
        details: {
            problem: 'Standard Large Language Models often exhibit Western-centric biases and lack the nuance required for specific cultural queries. Additionally, the 8B parameter model struggled with strict output formatting (JSON) and zero-shot reasoning for complex Short Answer Questions (SAQ), often leading to "instruction drift".',
            problemImage: '',
            approach: 'I stripped away complex JSON prompts in favor of natural language instructions and built a "Dynamic Few-Shot" RAG framework. By transforming multiple-choice datasets into direct QA pairs, the system dynamically retrieves and injects the top 3 most relevant examples into every prompt.',
            approachImage: '',
            impact: 'The dual approach of LoRA fine-tuning and Dynamic RAG crushed the baseline zero-shot performance. The system outputted logically sound, culturally accurate answers required by the strict academic evaluator, resulting in a definitive 16% accuracy gain.',
            metrics: [
                { label: 'Accuracy Gain', value: '+0.16' },
                { label: 'Parameter Size', value: '8 Billion' },
                { label: 'Quantization', value: '4-bit' }
            ],
            architecture: 'The solution utilizes the Llama-3-8B model with 4-bit quantization (NF4) for efficiency. It employs `all-MiniLM-L6-v2` for semantic embedding and retrieval. The pipeline includes a data augmentation stage where training data is stripped of options to create direct QA pairs. Inference uses Greedy Search to ensure deterministic and concise outputs required by the evaluation script.',
            features: [
                { title: 'Dynamic RAG', description: 'Retrieval system that injects semantically relevant "in-context" examples for each specific query, boosting SAQ accuracy by 16%.' },
                { title: 'Data Augmentation', description: 'Automated pipeline to transform MCQ datasets into SAQ pairs, effectively doubling the training resources for the retrieval corpus.' },
                { title: 'Efficient Fine-Tuning', description: 'Used LoRA (Low-Rank Adaptation) and quantization to fine-tune the 8B model on limited hardware, optimizing for task alignment.' },
                { title: 'Ablation Studies', description: 'Evaluated external internet search (DuckDuckGo), discovering that "clean" internal data outperforms noisy web results for this specific domain.' }
            ],
            timeline: [
                { date: 'Dec 2025', title: 'Setup & Training', description: 'Setting up the environment with Transformers/PEFT and executing initial Fine-Tuning runs.' },
                { date: 'Dec 2025', title: 'RAG Implementation', description: 'Developing the Dynamic Few-Shot logic and constructing the augmented knowledge base.' },
                { date: 'Dec 2025', title: 'Evaluation', description: 'Running ablation studies on decoding strategies and external search integration.' },
                { date: 'Jan 2026', title: 'Report Submission', description: 'Finalizing the project report and analysis of the 0.16 accuracy gain.' }
            ]
        }
    },

    {
        id: 'portfolio-website',
        slug: 'portfolio-website',
        hasDetailPage: true,
        categories: ['web'],
        title: 'Portfolio Website',
        shortDescription: 'A responsive portfolio that shows off my skills and projects.',
        fullDescription: 'I refused to build a static, boring resume. I authored a dynamic, motion-driven experience that acts as a live technical showcase. Everything is rendered via a data-driven configuration layer, marrying strict TypeScript typings with heavy framer-motion orchestration, while maintaining a perfect 100/100 Lighthouse score.',
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
        link: '',
        githubUrl: 'https://github.com/Dramiley/PortfolioWebsite/tree/main',
        details: {
            problem: 'Most portfolios feel like static resumes. I wanted something that could demonstrate technical skills through execution itself and not just describe them. The challenge was creating a memorable experience without sacrificing maintainability, performance, or accessibility.',
            problemImage: '',
            approach: 'I engineered a data-driven Next.js architecture separating dense content from presentation. This allowed rapid visual iteration. I authored custom hooks for responsive scroll-linked animations and built a physics-based ambient canvas background, ensuring all motion strictly respects user accessibility preferences.',
            approachImage: '',
            impact: 'A live, interactive proof-of-work. It demonstrates my ability to execute complex physics, canvas animations, and responsive layouts natively in React without ever sacrificing performance, semantics, or UX.',
            metrics: [
                { label: 'Frontend', value: 'React 19' },
                { label: 'Styling', value: 'Tailwind v4' },
                { label: 'Architecture', value: 'Data-Driven' }
            ],
            architecture: 'Built on Next.js 16 with App Router for optimal performance. Framer Motion powers complex animations, scroll-triggered reveals, and page transitions. The design system uses CSS custom properties for theming with a Slate base and Terracotta accents. Glassmorphism and backdrop filters add depth. All animations respect prefers-reduced-motion for accessibility.',
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
        hasDetailPage: true,
        categories: ['web'],
        title: 'Software Technology Internship',
        shortDescription: 'An internal order management system for streamlining beverage procurement and stock control.',
        fullDescription: 'Developed an internal order management system to digitize and automate the supply chain for a beverage shop. Working in a strict Agile Scrum environment, I engineered robust inventory tracking, automated reordering workflows, and role-based access control inside a monolithic Spring Boot application.',
        tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Scrum', 'Accounting'],
        techStack: [
            { name: 'Java 17' },
            { name: 'Spring Boot 3' },
            { name: 'JavaScript' },
            { name: 'Thymeleaf' },
            { name: 'H2 / MySQL' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/swt_praktikum.jpg',
        galleryImages: [],
        link: '',
        githubUrl: 'https://github.com/Dramiley/swt23w30/tree/main',
        details: {
            problem: 'The client required a unified system to replace inefficient manual tracking of beverage stocks. The challenge was architecting a system that handles complex dependencies between live stock levels, expiration dates, and automated reordering logic while enforcing strict user permissions.',
            problemImage: '',
            approach: 'We built a monolithic Spring Boot application serving as a central hub. I architected the Inventory module, writing the core business logic that automatically flags low-stock items and dispatches procurement orders. The frontend uses server-side rendering with Thymeleaf for a rapid, responsive dashboard.',
            approachImage: '',
            impact: 'Delivered a functional, production-ready prototype that successfully digitized the manual workflow. We hit all sprint deliverables on schedule, proving our capability to ship full-stack Spring applications within a strict Agile framework.',
            metrics: [
                { label: 'Team Size', value: '8 Engineers' },
                { label: 'Methodology', value: 'Scrum' }
            ],
            architecture: 'The system is architected using the Model-View-Controller (MVC) pattern typical of Spring Boot applications. It utilizes Spring Data JPA for object-relational mapping to the database and Spring Security for granular access control (e.g., identifying Warehouse Managers vs. Sales Staff).',
            features: [
                { title: 'Inventory Tracking', description: 'Real-time monitoring of beverage stock levels with automated low-stock alerts.' },
                { title: 'Procurement Automation', description: 'Logic to generate supplier orders automatically when inventory dips below defined thresholds.' },
                { title: 'Role-Based Access', description: 'Secure authentication system separating administrative duties from standard staff operations.' },
                { title: 'Financial Reporting', description: 'Integrated accounting features to track procurement costs vs. internal usage or sales.' }
            ],
            timeline: [
                { date: 'Oct 2023', title: 'Requirements Analysis', description: 'Mapped out the "To-Be" processes for the beverage shop\'s internal logistics.' },
                { date: 'Nov 2023', title: 'Core Implementation', description: 'Developed the backend services for inventory management and order processing.' },
                { date: 'Dec 2023', title: 'Integration & Testing', description: 'Refined the Thymeleaf UI and conducted integration tests using JUnit.' },
                { date: 'Jan 2024', title: 'Final Deployment', description: 'Delivered the functional prototype with completed acceptance testing.' }
            ]
        }
    },

    {
        id: 'robolab',
        slug: 'robolab',
        hasDetailPage: true,
        categories: ['systems'],
        title: 'Autonomous Maze Navigator',
        shortDescription: 'Engineering a Python-based control system for autonomous robots in dynamic environments.',
        fullDescription: 'Participated in the "Robolab" systems engineering challenge. My team developed a Python control stack for an EV3 rover designed to navigate unknown mazes autonomously. The system features a custom state machine for decision making, PID controllers for precise line following, and MQTT communication for real-time telemetry. We successfully implemented graph-based pathfinding to optimize exploration and retrieval tasks.',
        tags: ['Python', 'Robotics', 'MQTT', 'Algorithms', 'PID Control'],
        techStack: [
            { name: 'Python' },
            { name: 'LEGO EV3Dev' },
            { name: 'MQTT' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/robolab.jpg',
        galleryImages: [],
        link: '',
        githubUrl: 'https://github.com/Dramiley/Robolab23',
        details: {
            problem: 'The challenge was to program a robot to explore a randomly generated maze until it received a specific destination coordinate from a central server. The robot then had to navigate to this server-assigned target efficiently while adhering to strict memory and timing constraints.',
            problemImage: '',
            approach: 'We engineered a modular Python codebase centered around a finite state machine. We implemented a robust communication layer that handled MQTT messages to parse the target coordinates. We used a mapping algorithm (DFS) to explore the maze and a pathfinding algorithm to calculate the route to the server\'s target once received.',
            approachImage: '',
            impact: 'The robot successfully passed the final examination under tight time pressure, correctly receiving the server\'s payload, mapping the maze, and navigating to the destination without error or memory leaks.',
            metrics: [
                { label: 'Platform', value: 'EV3 Linux' },
                { label: 'Final Exam', value: '100% Passed' }
            ],
            architecture: 'The software runs on the ev3dev Linux kernel. It utilizes a main event loop that polls sensors (color, distance, gyro) and feeds data into a central logic controller. An asynchronous MQTT client handles the negotiation with the server to receive the "Target" payload.',
            features: [
                { title: 'Server-Guided Navigation', description: 'Logic to request, parse, and validate target coordinates received from the central server via MQTT.' },
                { title: 'PID Control Loop', description: 'Implemented Proportional-Integral-Derivative logic for smooth line tracing and wall alignment.' },
                { title: 'State Machine Architecture', description: 'Robust logic handling for switching between "Exploration Mode" and "Target Navigation Mode".' },
                { title: 'Pathfinding', description: 'Algorithms to map the maze structure in memory and calculate the shortest path to the assigned goal.' }
            ],
            timeline: [
                { date: 'Day 1-3', title: 'Sensor & Comms Setup', description: 'Calibrated sensors and established the MQTT handshake with the game server.' },
                { date: 'Day 4-10', title: 'Algorithm Development', description: 'Implemented the exploration logic and the target-parsing state.' },
                { date: 'Day 11-13', title: 'Optimization', description: 'Refined the pathfinding to handle the server-assigned targets faster.' },
                { date: 'Day 14', title: 'Final Examination', description: 'Robot successfully received the target from the server and navigated to the destination.' }
            ]
        }
    }
];
