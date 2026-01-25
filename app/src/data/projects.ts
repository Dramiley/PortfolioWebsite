import { Project } from '@/types';

export const projects: Project[] = [
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
        title: "HideZone: IRL GPS Hide & Seek",
        shortDescription: "Real-world multiplayer Hide & Seek! Hunt friends with live GPS, tactical items, and traps.",
        fullDescription: "HideZone transforms the classic game of Hide & Seek into a high-tech, adrenaline-fueled GPS adventure. Whether in the park, the city, or the woods, it's like a battle royale in your own neighborhood! The game features multiple modes including Classic Hide & Seek with shrinking zones and Zombie Infection. Players can utilize a tactical inventory system with Scanners, Proximity Mines, and Ghost Mode to outsmart opponents. Designed with a privacy-first approach, it requires no accounts and ensures all data is wiped instantly when the match ends.",
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
        link: "https://play.google.com/store/apps/details?id=com.hidezone.hidezone",
        githubUrl: "closed source",
        details: {
            problem: "Traditional outdoor games often lack the structure, boundary enforcement, and strategic depth that modern gamers expect. Organizing a large-scale game in a city center is difficult due to unclear play zones, and simple running games often fail to engage players who crave tactical complexity.",
            problemImage: "",
            solution: "HideZone acts as a digital referee and game master. It enforces boundaries with GPS geofencing and introduces 'Tactical Warfare' mechanics—virtual items like Proximity Mines and Scanners, to add strategy to the physical exertion. It supports dynamic modes like Zombie Infection, where gameplay mechanics shift entirely (Survivors vs. Zombies).",
            solutionImage: "",
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
            ]
        },
    },
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
        id: 'secret-llm-cultural-qa',
        slug: 'secret-llm-cultural-qa',
        hasDetailPage: true,
        title: 'SecretLLM - Cultural QA System',
        shortDescription: 'Optimizing Llama-3-8B for cultural reasoning for a 2 month project at TU Dresden.',
        fullDescription: 'Developed for the "Behind the Secrets of Large Language Models" module at TU Dresden, this project addresses the "cultural gap" in standard LLMs. I engineered a question-answering system using Meta-Llama-3-8B that improves accuracy on cultural tasks. While Supervised Fine-Tuning (SFT) helped with format alignment, the implementation of a Dynamic Retrieval-Augmented Generation (RAG) system yielded the most significant results, increasing Short Answer Question (SAQ) accuracy by 0.16 over the baseline.\nFull project report can be found in the github repository.',
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
            solution: 'I moved from complex JSON prompts to simplified natural language instructions and implemented a "Dynamic Few-Shot" RAG framework. By converting Multiple Choice data into Short Answer pairs, I created an augmented knowledge base. For every incoming query, the system retrieves and injects the top-k = 3 semantically similar examples into the prompt, grounding the model in relevant cultural context.',
            solutionImage: '',
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
        title: 'Portfolio Website',
        shortDescription: 'A responsive portfolio that shows off my skills and projects.',
        fullDescription: 'The Website started as a simple portfolio and then got more advanced with motion-first experience with glassmorphic UI, scroll-linked animations, and thoughtful microinteractions. The site balances visual richness with accessibility and performance.',
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
        hasDetailPage: true,
        title: 'Software Technology Internship',
        shortDescription: 'An internal order management system for streamlining beverage procurement and stock control.',
        fullDescription: 'Developed during the Software Technology module at TU Dresden, this project is a web-based management tool designed to digitize the internal ordering processes of a beverage shop. Working in an agile Scrum team, we engineered a robust system to track inventory levels, automate reordering workflows, and manage staff permissions. The application ensures seamless supply chain operations by providing real-time stock insights and accounting features.',
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
            problem: 'The client required a shop-internal control mechanism to replace inefficient manual tracking of beverage stocks. The challenge was to create a system that handles complex dependencies between stock levels, expiration dates, and automated reordering logic while enforcing strict user role permissions.',
            problemImage: '',
            solution: 'We built a monolithic Spring Boot application that serves as a central hub for all shop operations. I contributed to the Inventory module, implementing logic that automatically flags low-stock items and generates procurement orders. The frontend uses server-side rendering with Thymeleaf for a responsive internal dashboard.',
            solutionImage: '',
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
            solution: 'We engineered a modular Python codebase centered around a finite state machine. We implemented a robust communication layer that handled MQTT messages to parse the target coordinates. We used a mapping algorithm (DFS) to explore the maze and a pathfinding algorithm to calculate the route to the server\'s target once received.',
            solutionImage: '',
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
