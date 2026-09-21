import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: "hidezone",
        slug: "hidezone",
        hasDetailPage: true,
        featured: true,
        meta: "Solo build · 50,000+ downloads · 2025 - present",
        categories: ['mobile'],
        title: "HideZone: IRL GPS Hide & Seek",
        shortDescription: "A real-time outdoor multiplayer game for iOS and Android, with live GPS, custom play zones, tactical items, and seven game modes. 50,000+ downloads.",
        fullDescription: "HideZone turns any park or neighborhood into a multiplayer game board. I built and shipped the Flutter app end to end, from the host-authoritative game loop and Firebase synchronization to geofenced maps, items, subscriptions, ads, and both store releases.",
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
            "/images/projects/hidezone_01_play_instantly.jpg",
            "/images/projects/hidezone_02_real_world_gameplay.jpg",
            "/images/projects/hidezone_03_multiple_themes.jpg",
            "/images/projects/hidezone_04_game_modes.jpg",
            "/images/projects/hidezone_05_items.jpg",
            "/images/projects/hidezone_06_team_chat.jpg",
            "/images/projects/hidezone_07_stats.jpg",
        ],
        links: [
            { label: "Game website", url: "https://dramiley.dev/" }
        ],
        githubUrl: "closed source",
        details: {
            problem: "A location-based game has to keep several phones in sync while players move through a real environment. It also has to recover cleanly from reconnects, enforce the play zone, and keep network, map, and battery use under control.",
            problemImage: "",
            approach: "Built a host-authoritative game engine on top of Firebase Realtime Database. Seven game modes plug into isolated strategy bundles, while shared services handle location updates, zone rules, items, reconnects, maps, billing, ads, and privacy-safe diagnostics.",
            approachImage: "",
            impact: "Designed, built, and shipped independently on Google Play and the App Store, reaching more than 50,000 organic downloads. The current architecture is backed by more than 2,200 Flutter tests, deterministic multiplayer simulations, traffic budgets, and automated checks around network ownership and wire compatibility.",
            metrics: [
                { label: 'Downloads', value: '50,000+' },
                { label: 'Game Modes', value: '7' },
                { label: 'Flutter Tests', value: '2,200+' }
            ],
            architecture: "Flutter and Riverpod power both mobile clients. A synchronous host engine owns game decisions, while mode-specific strategy bundles keep the rules for Standard, Zombie, Chase, Sardines, Murder Mystery, Meteor, and Assassin isolated. Focused Firebase repositories sit behind a compatibility facade, and versioned codecs protect the production wire format.",
            features: [
                { title: "Tactical Items", description: "Scanners reveal locations, Proximity Mines set traps, Ghost Mode grants stealth, and Zone Movers flush out campers." },
                { title: "Seven Game Modes", description: "Standard, Zombie, Chase, Sardines, Murder Mystery, Meteor, and Assassin share one engine without mixing their rules." },
                { title: "Live Maps and Replays", description: "Geofenced play areas, cancellable map requests, a bounded tile cache, and local-only match replays." },
                { title: "Privacy-Safe Diagnostics", description: "Anonymous sessions and tightly allowlisted Crashlytics records keep coordinates, names, lobby codes, and match data out of telemetry." }
            ],
            timeline: [
                { date: "Dec 2025", title: "Core Architecture", description: "Started mobile development, establishing data schemas and core state structures." },
                { date: "Jan 2026", title: "Systems Integration", description: "Integrated game modes, the item system, and geographic boundaries." },
                { date: "Jan 2026", title: "Field Testing", description: "Tested with local groups to tune GPS precision, battery use, and latency." },
                { date: "Feb 2026", title: "Android Release", description: "Shipped to the Google Play Store and refined systems based on early usage logs." },
                { date: "Mar 2026", title: "Network Refactoring", description: "Reworked synchronization and polling to reduce unnecessary Realtime Database traffic." },
                { date: "Apr 2026", title: "iOS Release", description: "Shipped to the Apple App Store with cross-platform multiplayer support." },
                { date: "Aug 2026", title: "Architecture Rework", description: "Separated the host engine, mode rules, Firebase repositories, and UI ownership, then locked the behavior down with automated tests and traffic budgets." },
            ]
        },
    },
    {
        id: 'llm-ontology-generation',
        slug: 'llm-ontology-generation',
        hasDetailPage: true,
        featured: true,
        meta: 'Research paper · TU Dresden · 2026 - present',
        categories: ['ml-ai', 'systems'],
        title: 'LLM-Based Ontology Generation',
        shortDescription: 'An experimental framework that turns long-form text into structured ontologies, merges them hierarchically, and benchmarks their semantic and structural quality.',
        fullDescription: 'As part of an ongoing research paper at TU Dresden, I am developing a framework for extracting ontologies from long documents with large language models. The system splits source material into manageable sections, generates sub-ontologies in several formats, combines them with configurable merge strategies, and evaluates the result through deterministic checks and LLM-assisted review.',
        tags: ['Python', 'LLMs', 'OWL and RDF', 'Knowledge Engineering', 'Next.js'],
        techStack: [
            { name: 'Python' },
            { name: 'OWL and RDF' },
            { name: 'JSON, YAML, and Turtle' },
            { name: 'OpenAI-compatible APIs' },
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Server-Sent Events' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/ontology_learning_strategies.png',
        galleryImages: [],
        link: '',
        githubUrl: 'closed source',
        details: {
            problem: 'Industrial knowledge is often scattered across manuals, process descriptions, notes, and other documents. Modeling that information manually as an ontology is expensive, while processing an entire long document in one LLM prompt tends to lose detail and exceeds the practical context limits of smaller models.',
            problemImage: '',
            approach: 'Built a sentence-preserving chunking and generation pipeline that creates focused sub-ontologies in OWL, Turtle, JSON, or YAML. The fragments can then be combined through top-down, bottom-up, tree-based, or sequential merging, with optional overview ontologies and an improvement loop for repairing structural and semantic issues.',
            approachImage: '',
            impact: 'The project provides a reproducible environment for comparing language models, serialization formats, chunk sizes, and merge strategies. The accompanying paper investigates how those choices affect syntactic validity, retained detail, semantic quality, and the usefulness of generated ontologies for industrial knowledge management.',
            metrics: [
                { label: 'Ontology Formats', value: '4' },
                { label: 'Merge Strategies', value: '4' },
                { label: 'Quality Criteria', value: '18' }
            ],
            architecture: 'Python modules handle sentence-aware chunking, parallel LLM generation, format conversion, hierarchical merging, automated improvement, and benchmark orchestration. A Next.js dashboard provides visual configuration, live process output over Server-Sent Events, and an explorer for generated ontologies and evaluation reports.',
            features: [
                { title: 'Multi-Format Generation', description: 'Generates and converts ontologies across OWL/XML, Turtle, JSON, and YAML to compare model behavior and representation overhead.' },
                { title: 'Hierarchical Merging', description: 'Supports top-down, bottom-up, tree-based, and sequential strategies for reconstructing one ontology from document-level fragments.' },
                { title: 'Automated Quality Evaluation', description: 'Combines deterministic graph checks with LLM-assisted semantic review, competency questions, and hallucination analysis.' },
                { title: 'Ontology Terminal', description: 'A Next.js interface for configuring experiments, streaming live runs, and inspecting generated ontologies and benchmark reports.' }
            ],
            timeline: [
                { date: '2026', title: 'Generation Pipeline', description: 'Implemented document chunking, multi-format ontology extraction, and provider-independent LLM access.' },
                { date: '2026', title: 'Merge Strategies', description: 'Added configurable hierarchical and sequential methods for combining generated sub-ontologies.' },
                { date: '2026', title: 'Evaluation Framework', description: 'Built structural, semantic, competency-question, and gold-standard benchmarks across models and configurations.' },
                { date: 'Ongoing', title: 'Paper and Experiments', description: 'Running comparative experiments and developing the findings into a research paper on ontology learning for manufacturing and logistics.' }
            ]
        }
    },
    {
        id: 'ai-maintenance-assistant',
        slug: 'ai-maintenance-assistant',
        hasDetailPage: true,
        featured: true,
        meta: "Research project · TU Dresden · 2024 - 2025",
        categories: ['ml-ai', 'systems'],
        title: 'AI Maintenance Assistant',
        shortDescription: 'A projection-based maintenance prototype that detects machine components on a server and maps visual guidance back onto the physical workspace.',
        fullDescription: 'A distributed hardware-software prototype for industrial maintenance. A Raspberry Pi captures and validates camera frames, discovers the inference server on the local network, and projects returned component overlays. The Dockerized Flask backend runs a custom SSD detector and converts its output into spatial machine representations.',
        tags: ['Python', 'TensorFlow', 'Docker', 'Flask', 'Raspberry Pi'],
        techStack: [
            { name: 'Python' },
            { name: 'TensorFlow' },
            { name: 'Docker' },
            { name: 'Flask' },
            { name: 'Raspberry Pi' },
            { name: 'SSD Object Detection' },
            { name: 'Git' }
        ],
        heroImage: '/images/projects/bounding_boxes.jpg',
        galleryImages: [],
        link: '',
        githubUrl: 'closed source',
        details: {
            problem: "Maintenance instructions are usually separated from the machine they describe. The prototype explores whether detected components and spatial guidance can be placed directly in the technician's field of view instead.",
            problemImage: '',
            approach: 'Split the workload between a Raspberry Pi and a server. The edge device handles camera capture, brightness and blur checks, calibration, server discovery, and full-screen projection; the server exposes Flask endpoints for object detection and generates component-level overlay instructions.',
            approachImage: '',
            impact: 'Produced an end-to-end research prototype that connects edge hardware, containerized inference, spatial data generation, and projector output. The same pipeline later became the basis for research into automatically generated knowledge graphs from object detections.',
            metrics: [
                { label: 'Platform', value: 'AR Projection' },
                { label: 'Hardware', value: 'Raspberry Pi 3' }
            ],
            architecture: 'A Python client-server system connected over the local network. The Raspberry Pi sends base64-encoded camera frames to a Flask API and receives detection coordinates as structured data. The server delegates inference to a Dockerized SSD model, derives spatial relations and overlay instructions, and returns them to the edge device for projection.',
            features: [
                { title: 'Object Detection', description: 'Fine-tuned SSD object detection on a custom dataset of industrial machine components.' },
                { title: 'Edge Hardware', description: 'Raspberry Pi camera capture, calibration, image-quality checks, and projector output.' },
                { title: 'Containerization', description: 'Dockerized architecture for consistent deployment across edge and server environments.' },
                { title: 'Network Discovery', description: 'Automatic discovery and health checks for the inference server on the local network.' },
            ],
            timeline: [
                { date: "Feb 2024", title: "Model Optimization", description: "Fine-tuned SSD object detection on a custom dataset of maintenance tasks." },
                { date: "Sep 2024", title: "Edge Coordination", description: "Developed the Python backend for both the server and the edge device." },
                { date: "Apr 2025", title: "Feature Expansion", description: "Added image validation, camera calibration, network-wide server scanning, and the projector-based AR overlay." },
                { date: "Oct 2025", title: "Knowledge Graph Extension", description: "Extended the detection output with geometric spatial relations and multi-camera knowledge graph generation." },
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
        shortDescription: "Generating OWL knowledge graphs from object-detection output and evaluating how graph structure, format, and model size affect spatial question answering. Graded 1.4.",
        fullDescription: "My thesis connects object detection with symbolic spatial reasoning. The generator turns bounding-box CSV data into OWL-compliant knowledge graphs, derives relations such as above, left of, and inside, and supports both single- and multi-camera inputs. I evaluated ten graph variants in OWL and plain triples across four language models.",
        tags: ["Python", "Semantic Web", "Computer Vision", "LLMs", "Research"],
        techStack: [
            { name: "Python" },
            { name: "owlready2" },
            { name: "RDF and OWL" },
            { name: "DeepSeek, Llama, and Qwen" },
            { name: "SSD Object Detection" },
            { name: 'Git' }
        ],
        heroImage: "/images/projects/thesis_evaluation_figure.png",
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
            problem: "Object detectors identify components and bounding boxes, but their output does not directly tell a maintenance assistant how those components relate to one another. Building that spatial knowledge layer by hand would be slow and tied to a specific machine.",
            problemImage: "",
            approach: "Designed a deterministic pipeline that reads detected objects and pixel coordinates, derives spatial relations with geometric rules, and writes OWL ontologies with owlready2. For several camera views, it can either retain perspective-specific instances or summarize matching components into a smaller combined graph.",
            approachImage: "",
            impact: "Generated and evaluated ten graph structures in two formats, producing 960 model answers across DeepSeek-R1, DeepSeek-V3, Llama 3.1 8B, and Qwen 2.5 3B. The results showed that graph complexity and serialization strongly affect smaller models; the thesis and defense received a grade of 1.4.",
            metrics: [
                { label: 'Final Grade', value: '1.4' },
                { label: 'LLMs Evaluated', value: '4' },
                { label: 'Answers Reviewed', value: '960' }
            ],
            architecture: "The Python pipeline reads object-detection CSV files, calculates bounding-box centers, and applies threshold-based rules for vertical, horizontal, and containment relations. owlready2 serializes the result as OWL, while a statement generator produces a compact triple-text alternative. Both formats were tested across single-view, multi-view, and summarized graph variants.",
            features: [
                { title: "Geometric Relation Extraction", description: "Algorithms that derive above, below, left-of, and inside-of relations from pixel coordinates." },
                { title: "Multi-Camera Variants", description: "Preserves separate camera perspectives or summarizes repeated components into a more compact graph." },
                { title: "Ten Graph Models", description: "Compares implicit and explicit relations, coordinates, single views, multiple views, and summarized views." },
                { title: "Controlled Evaluation", description: "Reviews 960 answers for correctness and completeness across OWL files and plain triples." }
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
        meta: "Research project · +16 pp SAQ accuracy · 2025 - 2026",
        categories: ['ml-ai'],
        title: 'SecretLLM: Cultural QA System',
        shortDescription: 'A quantized Llama-3-8B cultural QA pipeline using LoRA fine-tuning and dynamic few-shot retrieval, improving short-answer accuracy by 16 percentage points.',
        fullDescription: 'A course research project on cultural question answering with Llama-3-8B. I simplified brittle output prompts, converted multiple-choice training examples into direct question-answer pairs, fine-tuned the model with LoRA, and retrieved the three closest examples for each query. Short-answer accuracy rose from 0.49 to 0.65, while multiple-choice accuracy remained unchanged.',
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
            impact: "The final pipeline improved short-answer accuracy from 0.49 to 0.65. Dynamic retrieval delivered the largest gain, while external web search reduced accuracy by three to five percentage points and was dropped from the final system.",
            metrics: [
                { label: 'SAQ Accuracy', value: '0.49 → 0.65' },
                { label: 'Parameter Size', value: '8 Billion' },
                { label: 'Quantization', value: '4-bit' }
            ],
            architecture: 'Llama-3-8B with 4-bit quantization for efficiency, MiniLM-L6-v2 for semantic embedding and retrieval. A data augmentation stage strips multiple-choice options from the training data to create direct query-response pairs. Inference uses greedy search for deterministic, concise outputs that satisfy the evaluation script.',
            features: [
                { title: 'Dynamic Retrieval', description: 'Embeds each query with MiniLM and injects the three closest examples into the inference prompt.' },
                { title: 'Dataset Restructuring', description: 'Automated transformation of multiple-choice datasets into direct query-response pairs, doubling the retrieval corpus.' },
                { title: 'Quantized Tuning', description: 'LoRA plus 4-bit quantization made fine-tuning the 8B model feasible on limited hardware.' },
                { title: 'Ablation Testing', description: 'Compared greedy, beam, and self-consistent decoding, then tested web retrieval against the curated internal corpus.' }
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
        meta: "Solo build · Nov 2025 - Jan 2026",
        categories: ['web'],
        title: 'Portfolio Website',
        shortDescription: 'This site: a statically generated Next.js portfolio with typed content, case-study pages, flash-free theming, and live GitHub activity.',
        fullDescription: 'I built the site as a compact, data-driven portfolio rather than a collection of hard-coded pages. Projects, experience, and skills live in typed TypeScript modules, while reusable components handle filtering, case studies, responsive layouts, motion preferences, and theme switching.',
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
            impact: 'The content model keeps routine updates small: a new project or role is primarily a data change. Case-study routes are generated at build time, and GitHub activity is fetched with a cached fallback path so a failed API request does not break the page.',
            metrics: [
                { label: 'Framework', value: 'Next.js 16' },
                { label: 'Styling', value: 'Tailwind v4' },
                { label: 'Rendering', value: 'Static + ISR' }
            ],
            architecture: 'Next.js 16 with the App Router. Project pages are statically generated from the data files, while GitHub activity on the homepage revalidates on a timer (ISR). A small inline script sets the theme class before paint, with all colors flowing from a single set of CSS variables. Framer Motion handles entrance animations with reduced-motion support.',
            features: [
                { title: 'Typed Content Layer', description: 'Projects, skills, and experience live in typed TypeScript files, decoupled from the components that render them.' },
                { title: 'Flash-Free Theming', description: 'A blocking inline script applies the saved or system theme before first paint; one set of CSS variables drives both modes.' },
                { title: 'Motion Preferences', description: 'Framer Motion follows the visitor\'s reduced-motion setting, with focus and keyboard states defined across the interface.' },
                { title: 'Static Generation', description: 'Every case study page is pre-rendered at build time; GitHub activity revalidates on a timer.' }
            ],
            timeline: [
                { date: 'Nov 2025', title: 'Design', description: 'Established styling guides, visual components, and content models.' },
                { date: 'Dec 2025', title: 'Architecture', description: 'Implemented the modular Next.js architecture, base themes, and data-driven rendering.' },
                { date: 'Jan 2026', title: 'Polish', description: 'Completed performance tuning, responsive styling audits, and accessibility validation.' },
                { date: 'Jan 2026', title: 'Launch', description: 'Finalized the theme system, project case studies, and production deployment.' }
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
        shortDescription: 'A browser-based beverage, inventory, and billing system built with Spring Boot by an eight-person Scrum team.',
        fullDescription: 'A university team project that replaced office drink lists and handwritten payment records with one web application. The system covers purchases, personal balances, stock, suggestions, orders, statistics, and user administration across employee, manager, and administrator roles.',
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
            problem: 'The client managed office drinks with paper lists, which made purchases, outstanding balances, stock, and repeat orders difficult to track. The replacement had to stay quick enough for everyday use while separating employee, manager, and administrator permissions.',
            problemImage: '',
            approach: 'We built a Spring Boot and Salespoint application using Scrum. The backend separates shop, stock, suggestions, statistics, and user management into focused packages; Thymeleaf renders the interface, and Spring Security enforces role- and office-specific access.',
            approachImage: '',
            impact: 'Delivered a working prototype and its supporting requirements, architecture diagrams, tests, and developer documentation. My work included implementation, unit testing, and design documentation within the shared codebase.',
            metrics: [
                { label: 'Team', value: '8 Members' },
                { label: 'Methodology', value: 'Scrum' }
            ],
            architecture: 'A classic Spring Boot Model-View-Controller structure, with Spring Data JPA for object-relational mapping and Spring Security for granular access control across employee, manager, and administrator roles.',
            features: [
                { title: 'Purchases and Balances', description: 'One-click drink purchases update personal balances and can be reversed when entered by mistake.' },
                { title: 'Suggestions and Orders', description: 'Employees suggest products; managers review them, build orders, and retain an order history.' },
                { title: 'Role-Based Access', description: 'Authentication that separates administrative duties from standard staff operations.' },
                { title: 'Financial Logging', description: 'Accounting features tracking procurement costs against internal usage and sales.' }
            ],
            timeline: [
                { date: 'Oct 2023', title: 'Requirements', description: 'Analyzed the existing workflow and mapped the logistics processes to model.' },
                { date: 'Nov 2023', title: 'Backend', description: 'Implemented domain models and workflows for stock, orders, purchases, and user management.' },
                { date: 'Dec 2023', title: 'UI and Testing', description: 'Integrated the server-rendered Thymeleaf views and completed the JUnit suites.' },
                { date: 'Jan 2024', title: 'Delivery', description: 'Completed the prototype, tests, cross-team review, and developer documentation.' }
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
        shortDescription: 'A LEGO EV3 rover that follows lines, detects obstacles, maps an unknown planet, and coordinates routes with a central server.',
        fullDescription: 'A three-person robotics project built in Python on ev3dev. I was responsible for the robot layer: motor control, sensor calibration, PID line following, station scanning, and obstacle handling. We integrated it with the team\'s odometry, graph routing, and MQTT communication modules for autonomous exploration.',
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
            problem: 'The rover had to move reliably across a line-based map it had never seen, report discovered paths to a remote server, react to blocked routes, and navigate to a target once one was assigned.',
            problemImage: '',
            approach: 'I implemented the EV3 hardware-control layer, including calibration, a PID steering loop, motor-position sampling, station centering, path scanning, and ultrasonic obstacle detection. The team connected it to odometry, an in-memory planet graph, Dijkstra routing, and MQTT callbacks.',
            approachImage: '',
            impact: 'The integrated rover completed the course\'s final autonomous run, combining physical navigation, map exploration, route selection, and server communication on the EV3 platform.',
            metrics: [
                { label: 'Platform', value: 'EV3 + ev3dev' },
                { label: 'Examination', value: 'Passed' }
            ],
            architecture: 'The software runs on ev3dev Linux. A controller coordinates the robot, odometry, planet graph, and communication facade. The robot module drives the motors and reads color and distance sensors; the graph module tracks explored and blocked paths; an asynchronous MQTT client exchanges path and target messages with the course server.',
            features: [
                { title: 'Telemetry Exchange', description: 'Requests, parses, and validates target coordinates from the central server via MQTT.' },
                { title: 'PID Line Following', description: 'A calibrated proportional-integral-derivative loop keeps the rover centered on the track.' },
                { title: 'Physical Navigation', description: 'Station centering, four-direction path scans, motor-position sampling, and obstacle recovery.' },
                { title: 'Graph Pathfinding', description: 'Maps the maze in memory and computes the shortest path to the assigned goal.' }
            ],
            timeline: [
                { date: 'Day 1-3', title: 'Hardware and Handshake', description: 'Calibrated the sensors and established telemetry sessions via MQTT.' },
                { date: 'Day 4-10', title: 'Control and Mapping', description: 'Integrated line following, path scanning, odometry, and graph-based exploration.' },
                { date: 'Day 11-13', title: 'Routing Tuning', description: 'Refined the routing algorithms to compute paths quickly.' },
                { date: 'Day 14', title: 'Final Run', description: 'The rover completed the formal evaluation under real-time constraints.' }
            ]
        }
    }
];
