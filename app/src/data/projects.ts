import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'ai-maintenance-assistant',
        slug: 'ai-maintenance-assistant',
        hasDetailPage: true,
        categories: ['ml-ai', 'systems'],
        title: 'AI Maintenance Assistant',
        shortDescription: 'An interactive industrial maintenance assistant leveraging real-time edge computer vision and large language models for localized repair guidance.',
        fullDescription: 'An integrated hardware-software system designed to assist technicians during physical machinery repairs. The architecture utilizes a Raspberry Pi edge device connected to a host server running a fine-tuned SSD Object Detection model for real-time component identification. Local LLM inference processes contextual repair documentation, which is then mapped as an augmented reality projection directly onto the physical machinery.',
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
            problem: "Traditional industrial maintenance relies on dense printed manuals and expert physical oversight, resulting in significant cognitive load and onboarding delays for field technicians.",
            problemImage: '',
            approach: 'Developed an augmented reality assisted maintenance environment that provides real-time guidance. By tracking machine components via computer vision, the system projects step-by-step assembly instructions directly onto the workspace, while an integrated LLM handles hands-free voice-based questions and answers.',
            approachImage: '',
            impact: 'Significantly reduced training onboarding times and technician cognitive load. The prototype demonstrated that integrating spatial augmented reality overlays with semantic LLM assistants provides a superior, hands-free alternative to traditional printed manuals.',
            metrics: [
                { label: 'Platform', value: 'AR Projection' },
                { label: 'Hardware', value: 'Raspberry Pi 3' }
            ],
            architecture: 'The system follows a distributed client-to-server model. The Raspberry Pi functions as the edge device, managing camera input, calibration, and projector output for the augmented reality overlay. The backend consists of a Dockerized server environment hosting the computationally heavy SSD Object Detection model and LLM logic. Custom Python workflows coordinate real-time network communication, transmitting frames for inference and returning bounding box coordinates alongside textual guidance to the edge device for immediate visual mapping.',
            features: [
                { title: 'Object Detection', description: 'Fine-tuned SSD Object Detection on a custom dataset of maintenance tasks.' },
                { title: 'Edge Hardware', description: 'Integration of Raspberry Pi for real-time component tracking and visual feedback.' },
                { title: 'Containerization', description: 'Dockerized architecture ensuring consistent deployment across edge and server environments.' },
                { title: 'Control Workflows', description: 'Custom Python workflows to coordinate edge camera capture, frame transport, and server-side model inference.' },
            ],
            timeline: [
                { date: "Feb 2024", title: "Model Optimization", description: "Fine-tuned SSD Object Detection on a custom dataset of maintenance tasks." },
                { date: "Sep 2024", title: "Edge Coordination", description: "Developed the Python backend for both the server and the edge device." },
                { date: "Apr 2025", title: "Feature Expansion", description: "Added image validation, camera calibration, network-wide server scanning, and AR overlay visualization using a projector." },
                { date: "Oct 2025", title: "Roadmap and Extension", description: "Analyzed spatial reasoning extensions, evaluating the integration of bounding box geometric heuristics versus training an end-to-end scene graph generation model." },
            ]
        }
    },
    {
        id: "hidezone",
        slug: "hidezone",
        hasDetailPage: true,
        categories: ['mobile'],
        title: "HideZone: IRL GPS Hide & Seek",
        shortDescription: "A location-based, real-time multiplayer game featuring live GPS geofencing, tactical inventory mechanics, and high-performance server synchronization.",
        fullDescription: "HideZone is a real-time, location-based multiplayer game that turns parks and urban areas into interactive play spaces. I engineered the entire cross-platform mobile stack, including real-time GPS geofencing, dynamic boundary zones, and inventory mechanics. A recent network layer optimization reduced database operations by 85%, ensuring a highly scalable and cost-efficient architecture.",
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
            problem: "Organizing physical multiplayer games in urban environments is historically challenging due to physical boundary enforcement, lack of centralized coordination, and limited tactical engagement compared to digital gaming environments.",
            problemImage: "",
            approach: "Implemented a real-time game coordination engine that synchronizes player coordinates with sub-100ms latency. The system automatically enforces virtual boundary constraints via geographical geofencing and processes real-time player interactions, such as virtual item triggers, to provide deep, balanced tactical gameplay.",
            approachImage: "",
            impact: "Independently architected, developed, and deployed the cross-platform application to the Google Play Store and Apple App Store. The project successfully scaled to over 10,000 organic downloads, validating the real-time Firebase synchronization architecture. A subsequent refactoring of the synchronization and polling layer reduced server requests by 85%, significantly lowering operational overhead.",
            metrics: [
                { label: 'Active Downloads', value: '10,000+' },
                { label: 'Cost Efficiency', value: '1€ per 6€ Revenue' },
                { label: 'Sync Latency', value: '< 50ms' }
            ],
            architecture: "The application is built with Flutter for cross-platform performance. It employs a clean architecture using the Strategy Pattern to handle different game modes. State management is driven by Flutter Riverpod, ensuring a reactive and testable codebase. Firebase Realtime Database acts as the single source of truth, synchronizing player types, locations, and game events across all clients in real-time with sub-50ms latency.",
            features: [
                { title: "Tactical Gameplay Items", description: "Use Scanners to reveal locations, Proximity Mines for traps, Ghost Mode for stealth, and Zone Movers to flush out campers." },
                { title: "Dynamic Game Modes", description: "Includes four distinct game modes, Classic, Zombie Infection, Chase, and Sardines." },
                { title: "Real-Time GPS Engine", description: "Live tracking with geofencing that supports custom lobbies for multiple concurrent players." },
                { title: "Privacy-Focused Design", description: "No account registration required. All session data is wiped instantly when the match ends to ensure privacy." }
            ],
            timeline: [
                { date: "Dec 2025", title: "Core Architecture", description: "Initiated mobile development, establishing data schemas and core state structures." },
                { date: "Jan 2026", title: "Systems Integration", description: "Integrated multiplayer game modes, virtual inventory systems, and geographic boundaries." },
                { date: "Jan 2026", title: "Field Testing", description: "Conducted testing with local groups to optimize GPS precision, battery utilization, and latency." },
                { date: "Feb 2026", title: "Android Deployment", description: "Deployed the application to the Google Play Store, refining systems based on initial usage logs." },
                { date: "Mar 2026", title: "Network Refactoring", description: "Refactored the network polling layer to reduce Realtime Database operations by 85%." },
                { date: "Apr 2026", title: "iOS Deployment", description: "Deployed the application to the Apple App Store, finalizing cross-platform parity." },
            ]
        },
    },
    {
        id: "automated-knowledge-graph-generation",
        slug: "automated-knowledge-graph-generation",
        hasDetailPage: true,
        categories: ['ml-ai'],
        title: "Bachelor Thesis",
        shortDescription: "Automated semantic knowledge graph compilation from multi-view 2D object detection datasets for industrial robotics context-mapping.",
        fullDescription: "My thesis developed a novel bridge between 2D computer vision and symbolic spatial reasoning. The engineered pipeline processes raw 2D bounding box coordinates from industrial machinery, applying spatial geometric heuristics to dynamically compile standard-compliant RDF and OWL Knowledge Graphs. This semantic representation acts as a structured context layer for LLMs, enabling highly accurate spatial query resolution and mitigating hallucinations.",
        tags: ["Python", "Semantic Web", "Computer Vision", "LLMs", "Research"],
        techStack: [
            { name: "Python" },
            { name: "owlready2" },
            { name: "RDF and OWL" },
            { name: "DeepSeek, Llama, and Qwen" },
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
            problem: "Constructing domain-specific semantic graphs manually remains highly inefficient, while standard text-to-graph pipelines ignore spatial coordinate topologies and multi-view visual data critical for industrial automation and maintenance environments.",
            problemImage: "",
            approach: "Designed and developed an automated extraction pipeline that parses pixel coordinates of detected objects, translates them into deterministic spatial relations (such as left of, inside of, or above), and populates formal OWL ontologies using owlready2. Additionally, implemented a multi-view spatial fusion algorithm to consolidate 2D geometric inputs into a cohesive 3D semantic model.",
            approachImage: "",
            impact: "Demonstrated that a deterministic geometric-to-semantic translation pipeline can match or exceed the accuracy of large end-to-end multi-modal models for structured spatial reasoning in industrial contexts. The thesis and its defense received a grade of 1.4, reflecting methodological rigor and structured LLM evaluation.",
            metrics: [
                { label: 'Final Grade', value: '1.4' },
                { label: 'LLMs Evaluated', value: '4' }
            ],
            architecture: "The system processes annotated image data in tabular format containing bounding boxes. It calculates the center of each object and applies threshold-based logic to determine spatial relationships. It utilizes owlready2 to generate standard-compliant RDF triples. The output was evaluated against four LLMs including DeepSeek-R1, DeepSeek-V3, Llama 3.1, and Qwen 2.5, using specific metrics for correctness and completeness.",
            features: [
                { title: "Geometric Relation Extraction", description: "Algorithms to automatically determine above, below, left of, and inside of relations based on pixel coordinates." },
                { title: "Multi-Camera Fusion", description: "Logic to merge object detection data from multiple angles into a single consistent Knowledge Graph." },
                { title: "Semantic Density Options", description: "Implemented variants to test graph compactness versus semantic completeness for LLM processing." },
                { title: "LLM Context Optimization", description: "Evaluated different serialization formats, such as OWL versus Triples, to optimize LLM reasoning capabilities." }
            ],
            timeline: [
                { date: "May 2025", title: "Literature and Concept", description: "Analyzing state of the art in Semantic Web architectures and Object Detection systems." },
                { date: "Jun 2025", title: "Pipeline Development", description: "Developing the Python-based generator and spatial relationship extraction algorithms." },
                { date: "Sep 2025", title: "Evaluation and Submission", description: "Finalized quantitative LLM evaluation and submitted the thesis at TU Dresden." },
                { date: "Oct 2025", title: "Academic Defense", description: "Completed the formal defense of the thesis at TU Dresden, receiving a final grade of 1.4." }
            ]
        },
    },
    {
        id: 'secret-llm-cultural-qa',
        slug: 'secret-llm-cultural-qa',
        hasDetailPage: true,
        categories: ['ml-ai'],
        title: 'SecretLLM: Cultural QA System',
        shortDescription: 'Parameter-efficient fine-tuning and dynamic RAG alignment for cultural reasoning on quantized Llama-3-8B.',
        fullDescription: 'A research project focusing on enhancing Llama-3-8B\'s cultural reasoning. Standard LLMs frequently exhibit cultural alignment biases due to Western-dominated training corpora. I engineered a pipeline integrating dynamic Retrieval-Augmented Generation (RAG) with targeted Low-Rank Adaptation (LoRA) fine-tuning. This architecture improved short-answer evaluation accuracy by 16% over the zero-shot baseline.',
        tags: ['Python', 'Transformers', 'Llama 3 8B', 'RAG', 'Fine-tuning'],
        techStack: [
            { name: 'Python' },
            { name: 'Transformers' },
            { name: 'Sentence Transformers' },
            { name: 'PEFT and LoRA' },
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
            problem: "Large language models struggle with geographic and cultural nuance due to representation gaps in their pre-training corpora. Additionally, smaller open-weights models (such as those with 8 billion parameters) demonstrate instruction drift and unstable formatting compliance when presented with complex zero-shot formatting instructions.",
            problemImage: '',
            approach: "Replaced complex formatting constraints with natural instruction layouts and built a dynamic few-shot retrieval framework. By structuring the reference corpus into clean query-response pairs, the pipeline retrieves and inserts the top three most semantically relevant context exemplars dynamically during inference.",
            approachImage: '',
            impact: "The pipeline combining parameter-efficient fine-tuning (PEFT using LoRA) and dynamic RAG significantly outperformed baseline models, satisfying strict verification metrics and securing a 16% absolute accuracy improvement on short-answer evaluation suites.",
            metrics: [
                { label: 'Accuracy Gain', value: '+16%' },
                { label: 'Parameter Size', value: '8 Billion' },
                { label: 'Quantization', value: '4-bit' }
            ],
            architecture: 'The solution utilizes the Llama-3-8B model with 4-bit quantization for efficiency. It employs the MiniLM-L6-v2 model for semantic embedding and retrieval. The pipeline includes a data augmentation stage where training data is stripped of options to create direct query-response pairs. Inference uses Greedy Search to ensure deterministic and concise outputs required by the evaluation script.',
            features: [
                { title: 'Dynamic Retrieval', description: 'Retrieval system that injects semantically relevant in-context examples for each specific query, boosting short-answer accuracy by 16%.' },
                { title: 'Dataset Restructuring', description: 'Automated pipeline to transform multiple-choice datasets into direct query-response pairs, effectively doubling the training resources for the retrieval corpus.' },
                { title: 'Quantized Tuning', description: 'Used Low-Rank Adaptation and quantization to fine-tune the 8-billion parameter model on limited hardware, optimizing for task alignment.' },
                { title: 'Ablation Testing', description: 'Evaluated external search integration, discovering that clean internal data outperforms noisy web results for this specific domain.' }
            ],
            timeline: [
                { date: 'Dec 2025', title: 'PEFT Configuration', description: 'Configured model environment with parameter-efficient adapters and executed base runs.' },
                { date: 'Dec 2025', title: 'Dynamic RAG Integration', description: 'Implemented the few-shot search structures and compiled the retrieval database.' },
                { date: 'Dec 2025', title: 'Ablation Studies', description: 'Conducted ablation studies testing decoding parameters and search API dependencies.' },
                { date: 'Jan 2026', title: 'Analysis and Delivery', description: 'Finalized analysis report documenting the 16% benchmarking improvement.' }
            ]
        }
    },
    {
        id: 'portfolio-website',
        slug: 'portfolio-website',
        hasDetailPage: true,
        categories: ['web'],
        title: 'Portfolio Website',
        shortDescription: 'A high-performance, motion-driven technical showcase demonstrating modular frontend design and responsive UX best practices.',
        fullDescription: 'Designed and engineered as a high-performance, dynamic technical showcase. The architecture features a modular data-driven configuration layer that decouples content from presentation, combining typed TypeScript schemas with smooth hardware-accelerated animations, while optimized for Core Web Vitals to achieve top performance scores.',
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
            problem: 'While many personal websites serve as static resumes, I wanted to build a platform that serves as a live, functional demonstration of frontend engineering best practices. The primary technical challenge was delivering a highly interactive, animated experience without compromising on page load speed, accessibility, or core web vitals.',
            problemImage: '',
            approach: 'Engineered a decoupled, data-driven Next.js App Router structure where content schemas remain separated from the rendering layer. Developed custom React hooks for responsive, throttle-controlled scroll tracking and built a highly optimized canvas-based ambient background system that automatically respects system-level accessibility settings, such as prefers-reduced-motion.',
            approachImage: '',
            impact: 'A functional, highly optimized frontend showcase. It demonstrates production-ready implementations of canvas-based animations, fluid layout transitions, and strict responsive design, while maintaining semantic HTML structure and responsive page performance.',
            metrics: [
                { label: 'Core Framework', value: 'React 19' },
                { label: 'Styling Layer', value: 'Tailwind v4' },
                { label: 'Data Architecture', value: 'Decoupled' }
            ],
            architecture: 'Built on Next.js 16 with App Router for optimal performance. Framer Motion powers complex animations, scroll-triggered reveals, and page transitions. The design system uses CSS custom properties for theming with a Slate base and Terracotta accents. Glassmorphism and backdrop filters add depth. All animations respect system-level preferences to reduce motion for accessibility.',
            features: [
                { title: 'Motion Orchestration', description: 'Scroll-linked parallax, orchestrated section reveals, and physics-based interactions create a living interface that responds naturally to user input.' },
                { title: 'Glassmorphic Styling', description: 'Layered transparency effects with backdrop blur, subtle borders, and controlled opacity for depth without visual clutter.' },
                { title: 'Ambient Canvas', description: 'Canvas-based animated elements that react to mouse movement and scroll position, adding atmosphere while staying performant.' },
                { title: 'Inclusive Semantics', description: 'Semantic HTML, keyboard navigation, ARIA labels, and reduced-motion support ensure the site works for everyone.' },
                { title: 'Modular Data Schema', description: 'Projects, skills, and experience are defined in typed data files, making updates straightforward without touching components.' },
                { title: 'Media Lightbox', description: 'Fullscreen image viewing with keyboard navigation, thumbnails, and smooth transitions for showcasing project visuals.' }
            ],
            timeline: [
                { date: 'Oct 2024', title: 'Conceptual Design', description: 'Established styling guides, visual components, and content models.' },
                { date: 'Nov 2024', title: 'Architecture Setup', description: 'Implemented modular Next.js architecture, base themes, and data-driven rendering.' },
                { date: 'Nov 2024', title: 'Interactive Layering', description: 'Added interactive canvas elements, physics mouse tracking, and micro-animations.' },
                { date: 'Nov 2024', title: 'Optimization & Parity', description: 'Completed performance tuning, responsive styling audits, and accessibility validation.' }
            ]
        }
    },
    {
        id: 'software-technology-internship',
        slug: 'software-technology-internship',
        hasDetailPage: true,
        categories: ['web'],
        title: 'Software Technology Internship',
        shortDescription: 'An enterprise beverage logistics and automated inventory replenishment system built with Spring Boot and Agile methodologies.',
        fullDescription: 'Collaborated in an Agile Scrum team to develop an enterprise order management system automating procurement and stock logistics. Inside a Spring Boot monolithic architecture, I engineered the relational database schemas, inventory depletion models, and role-based access controls.',
        tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Scrum', 'Accounting'],
        techStack: [
            { name: 'Java 17' },
            { name: 'Spring Boot 3' },
            { name: 'JavaScript' },
            { name: 'Thymeleaf' },
            { name: 'H2 and MySQL' },
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
                { label: 'Engineering Team', value: '8 Members' },
                { label: 'Methodology', value: 'Scrum' }
            ],
            architecture: 'The system is architected using the Model-View-Controller pattern typical of Spring Boot applications. It utilizes Spring Data JPA for object-relational mapping to the database and Spring Security for granular access control, separating different warehouse roles.',
            features: [
                { title: 'Stock Tracking', description: 'Real-time monitoring of beverage stock levels with automated low-stock alerts.' },
                { title: 'Procurement Automation', description: 'Logic to generate supplier orders automatically when inventory dips below defined thresholds.' },
                { title: 'Granular Authentication', description: 'Secure authentication system separating administrative duties from standard staff operations.' },
                { title: 'Financial Logging', description: 'Integrated accounting features to track procurement costs versus internal usage or sales.' }
            ],
            timeline: [
                { date: 'Oct 2023', title: 'Requirements Engineering', description: 'Analyzed log structures and mapped out standard logistics workflows.' },
                { date: 'Nov 2023', title: 'Backend Integration', description: 'Developed relational models, depletion engines, and order systems.' },
                { date: 'Dec 2023', title: 'UI and Integration Testing', description: 'Integrated server-rendered Thymeleaf panels and completed JUnit suites.' },
                { date: 'Jan 2024', title: 'Project Delivery', description: 'Delivered the production-ready prototype and verified all acceptance criteria.' }
            ]
        }
    },
    {
        id: 'robolab',
        slug: 'robolab',
        hasDetailPage: true,
        categories: ['systems'],
        title: 'Autonomous Maze Navigator',
        shortDescription: 'A Python-based robotic control system and graph-search navigation pipeline for autonomous rovers.',
        fullDescription: 'Developed a Python systems engineering stack for an EV3-based autonomous rover navigating dynamic maze environments. The solution integrates real-time hardware interfaces, Proportional-Integral-Derivative controller algorithms, a robust finite state machine, and real-time telemetry transmitted via MQTT. Implemented depth-first exploration and Dijkstra-based routing for pathfinding.',
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
            approach: 'We engineered a modular Python codebase centered around a finite state machine. We implemented a robust communication layer that handled MQTT messages to parse the target coordinates. We used a mapping algorithm, specifically depth-first search, to explore the maze and a pathfinding algorithm to calculate the route to the server-assigned target once received.',
            approachImage: '',
            impact: 'The robot successfully passed the final examination under tight time pressure, correctly receiving the server payload, mapping the maze, and navigating to the destination without error or memory leaks.',
            metrics: [
                { label: 'Edge Platform', value: 'EV3 Linux' },
                { label: 'Examination', value: '100% Passed' }
            ],
            architecture: 'The software runs on the ev3dev Linux kernel. It utilizes a main event loop that polls sensors, including color, distance, and gyro sensors, and feeds data into a central logic controller. An asynchronous MQTT client handles the negotiation with the server to receive the target coordinates.',
            features: [
                { title: 'Telemetry Exchange', description: 'Logic to request, parse, and validate target coordinates received from the central server via MQTT.' },
                { title: 'PID Regulation Loop', description: 'Implemented Proportional-Integral-Derivative logic for smooth line tracing and wall alignment.' },
                { title: 'Automaton States', description: 'Robust logic handling for switching between exploration and target navigation modes.' },
                { title: 'Graph Pathfinding', description: 'Algorithms to map the maze structure in memory and calculate the shortest path to the assigned goal.' }
            ],
            timeline: [
                { date: 'Day 1-3', title: 'Hardware and Handshake', description: 'Calibrated edge sensors and established telemetry sessions via MQTT.' },
                { date: 'Day 4-10', title: 'Algorithmic Systems', description: 'Developed state structures and depth-first exploration loops.' },
                { date: 'Day 11-13', title: 'Routing Tuning', description: 'Refined routing algorithms to calculate paths rapidly.' },
                { date: 'Day 14', title: 'Performance Run', description: ' rover successfully completed the formal evaluation under real-time constraints.' }
            ]
        }
    }
];
