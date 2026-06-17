import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: "hidezone",
        slug: "hidezone",
        hasDetailPage: true,
        featured: true,
        meta: "Solo build · 15,000+ downloads · 2025 - 2026",
        categories: ['mobile'],
        title: "HideZone: IRL GPS Hide & Seek",
        shortDescription: "A real-time GPS hide-and-seek game for iOS and Android, with geofenced play areas and tactical items. 15,000+ downloads.",
        fullDescription: "HideZone turns parks and city centers into playing fields. I built the entire cross-platform stack: real-time GPS geofencing, dynamic boundary zones, and an in-game item system. A later rewrite of the network layer cut database operations by 85%.",
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
        links: [
            { label: "Game website", url: "https://dramiley.dev/" }
        ],
        githubUrl: "closed source",
        details: {
            problem: "Playing hide and seek across a whole park or district needs boundary enforcement, live coordination, and something to keep the chase tactically interesting. Doing all of that on a phone, in real time, without draining the battery is the hard part.",
            problemImage: "",
            approach: "Built a real-time coordination engine on Firebase that syncs player positions with sub-50ms latency, enforces virtual boundaries through geofencing, and processes item triggers like scanners and proximity mines for tactical depth.",
            approachImage: "",
            impact: "Designed, built, and shipped solo to the Google Play Store and Apple App Store. The game passed 15,000 organic downloads, and a later refactor of the synchronization and polling layer cut Realtime Database operations by 85%, keeping server costs at roughly 1€ for every 6€ of revenue.",
            metrics: [
                { label: 'Downloads', value: '15,000+' },
                { label: 'DB Operations', value: '-85%' },
                { label: 'Sync Latency', value: '< 50ms' }
            ],
            architecture: "Flutter on both platforms, with the Strategy pattern separating the different game modes. State management runs on Flutter Riverpod for a reactive, testable codebase. Firebase Realtime Database is the single source of truth, synchronizing player roles, locations, and game events across all clients with sub-50ms latency.",
            features: [
                { title: "Tactical Items", description: "Scanners reveal locations, Proximity Mines set traps, Ghost Mode grants stealth, and Zone Movers flush out campers." },
                { title: "Four Game Modes", description: "Classic, Zombie Infection, Chase, and Sardines, each with its own rules and balance." },
                { title: "Real-Time GPS Engine", description: "Live tracking with geofencing, supporting custom lobbies with multiple concurrent players." },
                { title: "Privacy by Design", description: "No account registration. All session data is wiped the moment a match ends." }
            ],
            timeline: [
                { date: "Dec 2025", title: "Core Architecture", description: "Started mobile development, establishing data schemas and core state structures." },
                { date: "Jan 2026", title: "Systems Integration", description: "Integrated game modes, the item system, and geographic boundaries." },
                { date: "Jan 2026", title: "Field Testing", description: "Tested with local groups to tune GPS precision, battery use, and latency." },
                { date: "Feb 2026", title: "Android Release", description: "Shipped to the Google Play Store and refined systems based on early usage logs." },
                { date: "Mar 2026", title: "Network Refactoring", description: "Rewrote the network polling layer, cutting Realtime Database operations by 85%." },
                { date: "Apr 2026", title: "iOS Release", description: "Shipped to the Apple App Store with full cross-platform parity." },
            ]
        },
    },
    {
        id: 'ai-maintenance-assistant',
        slug: 'ai-maintenance-assistant',
        hasDetailPage: true,
        featured: true,
        meta: "Research project · TU Dresden · 2024 - present",
        categories: ['ml-ai', 'systems'],
        title: 'AI Maintenance Assistant',
        shortDescription: 'AR repair guidance for industrial machinery: real-time object detection on an edge device, with instructions projected straight onto the machine.',
        fullDescription: 'A hardware-software system that assists technicians during machinery repairs. A Raspberry Pi edge device talks to a host server running a fine-tuned SSD object detection model for component identification, while a locally hosted LLM answers questions about the repair documentation. The results are projected directly onto the machinery as an augmented reality overlay.',
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
            problem: "Industrial maintenance still leans on printed manuals and expert supervision. New technicians spend much of a repair flipping between dense documentation and the machine in front of them, which slows onboarding and invites mistakes.",
            problemImage: '',
            approach: 'Built a projection-based AR maintenance environment. The system tracks machine components with computer vision and projects step-by-step assembly instructions onto the workspace itself, while an integrated LLM answers spoken questions hands-free.',
            approachImage: '',
            impact: 'The prototype showed that spatial AR overlays combined with an LLM assistant work as a hands-free replacement for printed manuals, cutting onboarding time and the constant context-switching between manual and machine.',
            metrics: [
                { label: 'Platform', value: 'AR Projection' },
                { label: 'Hardware', value: 'Raspberry Pi 3' }
            ],
            architecture: 'A distributed client-server design. The Raspberry Pi acts as the edge device and handles camera input, calibration, and projector output for the AR overlay. A Dockerized server hosts the computationally heavy SSD object detection model and the LLM logic. Python workflows coordinate the real-time communication: frames go to the server for inference, bounding box coordinates and textual guidance come back to the edge device for immediate visual mapping.',
            features: [
                { title: 'Object Detection', description: 'Fine-tuned SSD object detection on a custom dataset of maintenance tasks.' },
                { title: 'Edge Hardware', description: 'Raspberry Pi integration for real-time component tracking and visual feedback.' },
                { title: 'Containerization', description: 'Dockerized architecture for consistent deployment across edge and server environments.' },
                { title: 'Control Workflows', description: 'Python workflows coordinating edge camera capture, frame transport, and server-side model inference.' },
            ],
            timeline: [
                { date: "Feb 2024", title: "Model Optimization", description: "Fine-tuned SSD object detection on a custom dataset of maintenance tasks." },
                { date: "Sep 2024", title: "Edge Coordination", description: "Developed the Python backend for both the server and the edge device." },
                { date: "Apr 2025", title: "Feature Expansion", description: "Added image validation, camera calibration, network-wide server scanning, and the projector-based AR overlay." },
                { date: "Oct 2025", title: "Roadmap and Extension", description: "Evaluated spatial reasoning extensions: bounding box geometric heuristics versus an end-to-end scene graph generation model." },
            ]
        }
    },
    {
        id: "automated-knowledge-graph-generation",
        slug: "automated-knowledge-graph-generation",
        hasDetailPage: true,
        featured: true,
        meta: "B.Sc. thesis · Graded 1.4 · 2025",
        categories: ['ml-ai'],
        title: "Bachelor Thesis: Spatial Knowledge Graphs",
        shortDescription: "Generating RDF/OWL knowledge graphs automatically from object detection output, so LLMs can answer spatial questions about machinery. Graded 1.4.",
        fullDescription: "My thesis bridges 2D computer vision and symbolic spatial reasoning. The pipeline takes raw bounding box coordinates from industrial machinery, applies geometric heuristics, and compiles standard-compliant RDF/OWL knowledge graphs. The graph then serves as a structured context layer for LLMs, improving spatial question answering and reducing hallucinations.",
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
        links: [
            { label: "Read the thesis (PDF)", url: "/thesis.pdf" }
        ],
        githubUrl: "https://github.com/Dramiley/Bachelorarbeit",
        details: {
            problem: "Building domain-specific semantic graphs by hand is slow, and standard text-to-graph pipelines ignore the spatial coordinate data and multi-view imagery that industrial maintenance settings actually produce.",
            problemImage: "",
            approach: "Designed an extraction pipeline that parses the pixel coordinates of detected objects, translates them into deterministic spatial relations (left of, inside of, above), and populates formal OWL ontologies with owlready2. A multi-view fusion algorithm consolidates 2D geometric inputs from several camera angles into one coherent 3D semantic model.",
            approachImage: "",
            impact: "Showed that a deterministic geometric-to-semantic pipeline can match or beat large end-to-end multi-modal models on structured spatial reasoning in industrial contexts. The thesis and its defense received a grade of 1.4.",
            metrics: [
                { label: 'Final Grade', value: '1.4' },
                { label: 'LLMs Evaluated', value: '4' }
            ],
            architecture: "The system processes annotated image data in tabular form. It computes the center of each detected object and applies threshold-based logic to derive spatial relationships, then uses owlready2 to emit standard-compliant RDF triples. The output was evaluated against four LLMs (DeepSeek-R1, DeepSeek-V3, Llama 3.1, and Qwen 2.5) with metrics for correctness and completeness.",
            features: [
                { title: "Geometric Relation Extraction", description: "Algorithms that derive above, below, left-of, and inside-of relations from pixel coordinates." },
                { title: "Multi-Camera Fusion", description: "Merges object detection data from multiple angles into a single consistent knowledge graph." },
                { title: "Semantic Density Variants", description: "Compared graph compactness against semantic completeness for LLM consumption." },
                { title: "Serialization Comparison", description: "Evaluated OWL versus plain triples to find the format LLMs reason over best." }
            ],
            timeline: [
                { date: "May 2025", title: "Literature and Concept", description: "Surveyed the state of the art in Semantic Web architectures and object detection." },
                { date: "Jun 2025", title: "Pipeline Development", description: "Built the Python generator and the spatial relationship extraction algorithms." },
                { date: "Sep 2025", title: "Evaluation and Submission", description: "Finished the quantitative LLM evaluation and submitted the thesis at TU Dresden." },
                { date: "Oct 2025", title: "Defense", description: "Defended the thesis at TU Dresden; final grade 1.4." }
            ]
        },
    },
    {
        id: 'secret-llm-cultural-qa',
        slug: 'secret-llm-cultural-qa',
        hasDetailPage: true,
        meta: "Research project · +16% accuracy · 2025 - 2026",
        categories: ['ml-ai'],
        title: 'SecretLLM: Cultural QA System',
        shortDescription: 'Fine-tuning plus dynamic RAG on a quantized Llama-3-8B for cultural question answering: 16% more accurate than the zero-shot baseline.',
        fullDescription: 'A research project on improving Llama-3-8B\'s cultural reasoning. LLMs tend to carry cultural alignment biases from Western-dominated training corpora. I built a pipeline that combines dynamic retrieval-augmented generation (RAG) with targeted LoRA fine-tuning, improving short-answer accuracy by 16% over the zero-shot baseline.',
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
        heroImage: '/images/projects/eval-accuracy.jpg',
        galleryImages: [
            '/images/projects/rag_architecture.jpg',
            '/images/projects/eval-accuracy.jpg',
            '/images/projects/eval-loss.jpg',
        ],
        link: '',
        githubUrl: 'https://github.com/Dramiley/SecretLLM-Project',
        details: {
            problem: "Large language models struggle with geographic and cultural nuance because of representation gaps in their pre-training corpora. On top of that, smaller open-weights models around 8B parameters drift away from complex zero-shot formatting instructions, which breaks automated evaluation.",
            problemImage: '',
            approach: "Replaced the brittle formatting constraints with natural instruction layouts and built a dynamic few-shot retrieval framework. The reference corpus is restructured into clean query-response pairs, and at inference time the pipeline retrieves the three most semantically relevant exemplars and injects them into the prompt.",
            approachImage: '',
            impact: "The combination of LoRA fine-tuning and dynamic RAG beat the baseline models on the strict verification metrics, with a 16% absolute accuracy improvement on the short-answer evaluation suite.",
            metrics: [
                { label: 'Accuracy Gain', value: '+16%' },
                { label: 'Parameter Size', value: '8 Billion' },
                { label: 'Quantization', value: '4-bit' }
            ],
            architecture: 'Llama-3-8B with 4-bit quantization for efficiency, MiniLM-L6-v2 for semantic embedding and retrieval. A data augmentation stage strips multiple-choice options from the training data to create direct query-response pairs. Inference uses greedy search for deterministic, concise outputs that satisfy the evaluation script.',
            features: [
                { title: 'Dynamic Retrieval', description: 'Injects the most semantically relevant in-context examples per query, driving the 16% short-answer accuracy gain.' },
                { title: 'Dataset Restructuring', description: 'Automated transformation of multiple-choice datasets into direct query-response pairs, doubling the retrieval corpus.' },
                { title: 'Quantized Tuning', description: 'LoRA plus 4-bit quantization made fine-tuning the 8B model feasible on limited hardware.' },
                { title: 'Ablation Testing', description: 'Tested external search integration and found that clean internal data beats noisy web results for this domain.' }
            ],
            timeline: [
                { date: 'Dec 2025', title: 'PEFT Configuration', description: 'Set up the model environment with parameter-efficient adapters and ran the baselines.' },
                { date: 'Dec 2025', title: 'Dynamic RAG Integration', description: 'Implemented the few-shot retrieval structures and compiled the retrieval database.' },
                { date: 'Dec 2025', title: 'Ablation Studies', description: 'Tested decoding parameters and search API dependencies.' },
                { date: 'Jan 2026', title: 'Analysis and Delivery', description: 'Wrote up the analysis documenting the 16% benchmark improvement.' }
            ]
        }
    },
    {
        id: 'portfolio-website',
        slug: 'portfolio-website',
        hasDetailPage: true,
        meta: "Solo build · 2024 - present",
        categories: ['web'],
        title: 'Portfolio Website',
        shortDescription: 'This site. A Next.js app with typed content data, a flash-free dark/light theme, and attention to performance and accessibility.',
        fullDescription: 'Built as both a personal site and a small engineering exercise. All content lives in typed TypeScript data files, fully decoupled from the rendering layer, so adding a project is a data change rather than a layout change.',
        tags: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Accessibility'],
        techStack: [
            { name: 'Next.js 16' },
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
            problem: 'Most personal websites are static resumes. I wanted something that demonstrates frontend craft directly: fast, accessible, responsive, and easy to keep up to date without touching layout code.',
            problemImage: '',
            approach: 'A data-driven Next.js App Router structure keeps content schemas separate from rendering. The dark/light theme is applied by a blocking inline script before first paint, so there is no flash of the wrong theme, and all animations respect the system\'s reduced-motion preference.',
            approachImage: '',
            impact: 'A fast, accessible site that is cheap to extend: new projects, jobs, and skills are added in data files. Case study pages are statically generated, and performance scores stay high.',
            metrics: [
                { label: 'Framework', value: 'Next.js 16' },
                { label: 'Styling', value: 'Tailwind v4' },
                { label: 'Rendering', value: 'Static + ISR' }
            ],
            architecture: 'Next.js 16 with the App Router. Project pages are statically generated from the data files, while GitHub activity on the homepage revalidates on a timer (ISR). A small inline script sets the theme class before paint, with all colors flowing from a single set of CSS variables. Framer Motion handles entrance animations with reduced-motion support.',
            features: [
                { title: 'Typed Content Layer', description: 'Projects, skills, and experience live in typed TypeScript files, decoupled from the components that render them.' },
                { title: 'Flash-Free Theming', description: 'A blocking inline script applies the saved or system theme before first paint; one set of CSS variables drives both modes.' },
                { title: 'Accessible by Default', description: 'Semantic HTML, keyboard navigation, visible focus states, and reduced-motion support throughout.' },
                { title: 'Static Generation', description: 'Every case study page is pre-rendered at build time; GitHub activity revalidates on a timer.' }
            ],
            timeline: [
                { date: 'Oct 2024', title: 'Design', description: 'Established styling guides, visual components, and content models.' },
                { date: 'Nov 2024', title: 'Architecture', description: 'Implemented the modular Next.js architecture, base themes, and data-driven rendering.' },
                { date: 'Nov 2024', title: 'Polish', description: 'Performance tuning, responsive styling audits, and accessibility validation.' },
                { date: 'Ongoing', title: 'Iteration', description: 'Continued refinement: theme switching, content updates, and performance passes.' }
            ]
        }
    },
    {
        id: 'software-technology-internship',
        slug: 'software-technology-internship',
        hasDetailPage: true,
        meta: "University team project · 8 people · 2023 - 2024",
        categories: ['web'],
        title: 'Software Technology Internship',
        shortDescription: 'An order management and inventory system for a beverage store, built with Spring Boot by an eight-person Scrum team.',
        fullDescription: 'A team project building an order management system that automates procurement and stock logistics. Within the Spring Boot monolith, I designed the relational database schemas, the inventory depletion models, and the role-based access controls.',
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
            problem: 'The client tracked beverage stock by hand and needed one system for it. The tricky part was modeling the dependencies between live stock levels, expiration dates, and automated reordering, while enforcing strict per-role permissions.',
            problemImage: '',
            approach: 'We built a monolithic Spring Boot application as the central hub. I owned the inventory module: the business logic that flags low-stock items and dispatches procurement orders automatically. The frontend is server-side rendered with Thymeleaf.',
            approachImage: '',
            impact: 'Delivered a working prototype that digitized the manual workflow, hitting every sprint deliverable on schedule across the full Scrum cycle.',
            metrics: [
                { label: 'Team', value: '8 Members' },
                { label: 'Methodology', value: 'Scrum' }
            ],
            architecture: 'A classic Spring Boot Model-View-Controller structure, with Spring Data JPA for object-relational mapping and Spring Security for granular access control separating the warehouse roles.',
            features: [
                { title: 'Stock Tracking', description: 'Live monitoring of beverage stock levels with automated low-stock alerts.' },
                { title: 'Procurement Automation', description: 'Supplier orders are generated automatically when inventory dips below defined thresholds.' },
                { title: 'Role-Based Access', description: 'Authentication that separates administrative duties from standard staff operations.' },
                { title: 'Financial Logging', description: 'Accounting features tracking procurement costs against internal usage and sales.' }
            ],
            timeline: [
                { date: 'Oct 2023', title: 'Requirements', description: 'Analyzed the existing workflow and mapped the logistics processes to model.' },
                { date: 'Nov 2023', title: 'Backend', description: 'Built the relational models, depletion engine, and ordering system.' },
                { date: 'Dec 2023', title: 'UI and Testing', description: 'Integrated the server-rendered Thymeleaf views and completed the JUnit suites.' },
                { date: 'Jan 2024', title: 'Delivery', description: 'Handed over the prototype with all acceptance criteria verified.' }
            ]
        }
    },
    {
        id: 'robolab',
        slug: 'robolab',
        hasDetailPage: true,
        meta: "University course project · 2023",
        categories: ['systems'],
        title: 'Autonomous Maze Navigator',
        shortDescription: 'An autonomous LEGO EV3 rover that explores mazes with depth-first search, routes with Dijkstra, and stays on track with PID control.',
        fullDescription: 'A Python control stack for an EV3-based rover navigating dynamic maze environments. It combines real-time hardware interfaces, a PID controller for line following, a finite state machine for mode switching, and MQTT telemetry to a central server. Exploration runs on depth-first search; routing on Dijkstra.',
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
            problem: 'The robot had to explore a randomly generated maze until a central server assigned it a destination coordinate, then navigate there efficiently, all under strict memory and timing constraints.',
            problemImage: '',
            approach: 'We built a modular Python codebase around a finite state machine. An MQTT communication layer negotiates with the server and parses target coordinates. Depth-first search drives exploration; once the target arrives, a shortest-path algorithm computes the route.',
            approachImage: '',
            impact: 'The robot passed the final examination under time pressure: it received the server payload, mapped the maze, and navigated to the destination without errors or memory leaks.',
            metrics: [
                { label: 'Platform', value: 'EV3 + ev3dev' },
                { label: 'Examination', value: 'Passed' }
            ],
            architecture: 'The software runs on the ev3dev Linux kernel. A main event loop polls the color, distance, and gyro sensors and feeds a central logic controller. An asynchronous MQTT client handles the negotiation with the server for target coordinates.',
            features: [
                { title: 'Telemetry Exchange', description: 'Requests, parses, and validates target coordinates from the central server via MQTT.' },
                { title: 'PID Regulation Loop', description: 'Proportional-Integral-Derivative control for smooth line tracing and wall alignment.' },
                { title: 'State Machine', description: 'Robust switching between exploration and target navigation modes.' },
                { title: 'Graph Pathfinding', description: 'Maps the maze in memory and computes the shortest path to the assigned goal.' }
            ],
            timeline: [
                { date: 'Day 1-3', title: 'Hardware and Handshake', description: 'Calibrated the sensors and established telemetry sessions via MQTT.' },
                { date: 'Day 4-10', title: 'Algorithms', description: 'Built the state machine and depth-first exploration loops.' },
                { date: 'Day 11-13', title: 'Routing Tuning', description: 'Refined the routing algorithms to compute paths quickly.' },
                { date: 'Day 14', title: 'Final Run', description: 'The rover completed the formal evaluation under real-time constraints.' }
            ]
        }
    }
];
