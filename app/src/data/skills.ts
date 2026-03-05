import { Skill } from '@/types';

export const skills: Skill[] = [
    // Languages
    { name: 'Python', category: 'languages', primary: true },
    { name: 'Dart', category: 'languages', primary: true },
    { name: 'Java', category: 'languages', primary: true },
    { name: 'JavaScript', category: 'languages' },
    { name: 'TypeScript', category: 'languages' },
    { name: 'C#', category: 'languages' },

    // ML & AI
    { name: 'TensorFlow', category: 'ml-ai', primary: true },
    { name: 'PyTorch', category: 'ml-ai' },
    { name: 'Transformers', category: 'ml-ai' },
    { name: 'Object Detection (SSD)', category: 'ml-ai' },
    { name: 'LLMs / RAG', category: 'ml-ai' },

    // Frameworks
    { name: 'Flask', category: 'frameworks', primary: true },
    { name: 'Flutter', category: 'frameworks', primary: true },
    { name: 'Firebase', category: 'frameworks', primary: true },
    { name: 'Next.js', category: 'frameworks' },
    { name: 'React', category: 'frameworks' },
    { name: 'Spring Boot', category: 'frameworks' },
    { name: 'Tailwind CSS', category: 'frameworks' },
    { name: 'Framer Motion', category: 'frameworks' },

    // Infrastructure
    { name: 'Docker', category: 'infrastructure', primary: true },
    { name: 'Git / GitHub', category: 'infrastructure', primary: true },
    { name: 'Raspberry Pi', category: 'infrastructure' },
    { name: 'Node.js', category: 'infrastructure' },
];
