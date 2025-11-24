import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'industrial-inspection',
        slug: 'industrial-inspection',
        hasDetailPage: true,
        title: 'Industrial Inspection Pipeline',
        shortDescription: 'Automated object detection, OWL knowledge graph export, multi-camera spatial reconciliation.',
        fullDescription: 'A comprehensive computer vision solution designed to automate the quality control process in manufacturing. This system leverages deep learning for precise defect detection and integrates with semantic web technologies to provide structured, queryable data about production quality.',
        tags: ['Python', 'PyTorch', 'React', 'RDF/OWL'],
        techStack: [
            { name: 'Python' },
            { name: 'PyTorch' },
            { name: 'OpenCV' },
            { name: 'FastAPI' },
            { name: 'React' },
            { name: 'RDF/OWL' }
        ],
        heroImage: '/images/projects/inspection.jpg',
        galleryImages: [],
        details: {
            problem: 'Manual inspection of industrial components was slow, inconsistent, and prone to human error. The lack of structured data made it difficult to analyze long-term quality trends or identify root causes of defects.',
            solution: 'We developed an end-to-end automated pipeline. High-resolution cameras capture component images, which are processed by a custom-trained YOLOv8 model to detect defects. The results are spatially reconciled across multiple views and exported into an OWL knowledge graph, enabling complex semantic queries about defect types and locations.',
            architecture: 'The system consists of a distributed sensor network feeding into a central processing unit. The inference engine runs on edge devices for low latency, while the knowledge graph and analytics dashboard are hosted on a central server. Communication is handled via MQTT and REST APIs.',
            features: [
                { title: 'Real-time Detection', description: 'Process video streams at 30fps with <50ms latency.' },
                { title: 'Spatial Reconciliation', description: 'Map 2D detections from multiple cameras to 3D component coordinates.' },
                { title: 'Semantic Export', description: 'Output inspection results as RDF triples for integration with enterprise knowledge bases.' },
                { title: 'Interactive Dashboard', description: 'React-based frontend for monitoring inspection status and visualizing defect statistics.' }
            ],
            timeline: [
                { date: 'Jan 2024', title: 'Project Kickoff', description: 'Requirements gathering and hardware selection.' },
                { date: 'Mar 2024', title: 'Prototype', description: 'Initial model training and single-camera proof of concept.' },
                { date: 'May 2024', title: 'Integration', description: 'Multi-camera setup and knowledge graph integration.' },
                { date: 'Jul 2024', title: 'Deployment', description: 'Pilot deployment on the factory floor.' }
            ]
        }
    },
    {
        id: 'portfolio-website',
        slug: 'portfolio-website',
        hasDetailPage: true,
        title: 'Portfolio Website',
        shortDescription: 'A high-performance, data-driven portfolio website built with Next.js and Tailwind CSS.',
        fullDescription: 'A personal portfolio designed to be more than just a resume. It serves as a playground for experimenting with modern web technologies, motion design, and accessible UI patterns. The site is built for performance, achieving perfect Lighthouse scores while delivering a rich, immersive user experience.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
        techStack: [
            { name: 'Next.js 16' },
            { name: 'React 19' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS 4' },
            { name: 'Framer Motion' }
        ],
        heroImage: '/images/projects/portfolio.jpg',
        galleryImages: [],
        link: 'https://robinmorgenstern.com',
        githubUrl: 'https://github.com/robinmorgenstern/portfolio',
        details: {
            problem: 'Existing portfolio templates felt static and generic. I needed a platform that could showcase my technical skills not just through content, but through the implementation itself. It also needed to be easy to maintain without touching code for every content update.',
            solution: 'I architected a completely data-driven solution. All content—projects, skills, experience—is stored in typed data files. The frontend dynamically renders this content, ensuring that the design remains consistent. I implemented a custom "Ambient Background" and physics-based interactions to give the site a unique, premium feel.',
            architecture: 'The site uses Next.js App Router for server-side rendering and static generation. Framer Motion handles all animations, including complex scroll-linked effects. Tailwind CSS provides a utility-first styling engine, configured with a custom design system for consistent theming.',
            features: [
                { title: 'Data-Driven Content', description: 'Add new projects or skills by simply editing a JSON-like structure.' },
                { title: 'Ambient Background', description: 'Custom canvas-based animation that reacts to mouse movement.' },
                { title: 'Physics Interactions', description: 'Magnetic buttons and 3D tilt effects for a tactile feel.' },
                { title: 'Perfect Performance', description: '100/100 Lighthouse scores for Performance, Accessibility, Best Practices, and SEO.' }
            ],
            timeline: [
                { date: 'Nov 2024', title: 'Design & Planning', description: 'Defining the aesthetic and technical requirements.' },
                { date: 'Nov 2024', title: 'Development', description: 'Core component implementation and motion design.' },
                { date: 'Nov 2024', title: 'Launch', description: 'Deployment to Vercel and final polish.' }
            ]
        }
    },
    {
        id: 'design-system',
        slug: 'design-system',
        hasDetailPage: false,
        title: 'Internal Design System',
        shortDescription: 'A unified component library for enterprise applications.',
        fullDescription: 'A comprehensive design system built to unify the UI/UX across multiple internal tools. It includes a library of accessible, reusable components, a documentation site, and design tokens for consistent theming.',
        tags: ['React', 'Storybook', 'TypeScript', 'A11y'],
        techStack: [
            { name: 'React' },
            { name: 'Storybook' },
            { name: 'TypeScript' },
            { name: 'Styled Components' }
        ],
        heroImage: '',
        galleryImages: [],
        details: {
            problem: 'Different teams were building inconsistent UIs, leading to a fragmented user experience and duplicated effort.',
            solution: 'We established a centralized design system with strict accessibility standards. We used Storybook for documentation and automated testing to ensure component reliability.',
            features: [
                { title: 'Accessible Components', description: 'WCAG 2.1 AA compliant components.' },
                { title: 'Live Documentation', description: 'Interactive playground for developers.' },
                { title: 'Theming Engine', description: 'Support for light/dark modes and custom branding.' }
            ]
        }
    }
];
