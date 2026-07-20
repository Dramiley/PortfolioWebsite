import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        id: 'working-student',
        role: 'Working Student, Automation & AI',
        company: 'Infineon Technologies AG (via Siltectra GmbH)',
        period: '05/2026 - Present',
        description: [
            'Developing and maintaining internal applications to optimize semiconductor manufacturing processes.',
            'Enhancing an internal maintenance chatbot with new automation features and security integrations, such as Single Sign-On (SSO).',
            'Developing an AI-powered tool that automatically generates and creates Jira tickets from meeting recordings.',
        ]
    },
    {
        id: 'independent-software-developer',
        role: 'Independent Software Developer',
        company: 'Self-Employed',
        period: '10/2025 - Present',
        description: [
            'Built and shipped HideZone, a location-based mobile game with over 25,000 organic downloads across the App Store and Google Play.',
            'Designed and delivered a secure remote desktop client with time-linked authentication for an enterprise customer.',
            'Built a mail forwarding service that routes incoming emails to the users of dynamically allocated virtual machines (VMs).',
        ]
    },
    {
        id: 'student-assistant',
        role: 'Student Assistant',
        company: 'TU Dresden',
        period: '03/2024 - Present',
        description: [
            'Trained SSD object detection models on custom datasets representing industrial machinery components.',
            'Built a Raspberry Pi edge system featuring camera calibration, server auto-discovery, and projector-based augmented reality overlays.',
            'Integrated Dockerized backend inference servers with edge devices over a distributed network pipeline.',
            'Containerized deployment pipelines with Docker to ensure reproducibility across laboratory environments.',
        ]
    }
];
