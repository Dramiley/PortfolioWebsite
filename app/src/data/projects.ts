import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'industrial-inspection',
        title: 'Industrial Inspection Pipeline',
        description: 'Automated object detection, OWL knowledge graph export, multi-camera spatial reconciliation.',
        tags: ['Python', 'PyTorch', 'React', 'RDF/OWL'],
        imageUrl: '/images/projects/inspection.jpg',
        details: {
            problem: 'Manual inspection of industrial components was slow and error-prone, leading to production delays.',
            process: 'Developed a computer vision pipeline using PyTorch for object detection. Integrated a multi-camera setup for spatial reconciliation and exported results to an OWL knowledge graph for semantic querying.',
            results: 'Reduced inspection time by 60% and increased defect detection accuracy to 98%.'
        }
    },
    {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'A high-performance, data-driven portfolio website built with Next.js and Tailwind CSS.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
        imageUrl: '/images/projects/portfolio.jpg',
        link: 'https://robinmorgenstern.com',
        githubUrl: 'https://github.com/robinmorgenstern/portfolio',
        details: {
            problem: 'Needed a flexible, easy-to-maintain portfolio to showcase diverse engineering projects.',
            process: 'Architected a data-driven system where content is separated from presentation. Used Next.js for SEO and performance.',
            results: 'Achieved a perfect 100 Lighthouse score and enabled content updates via simple file edits.'
        }
    }
];
