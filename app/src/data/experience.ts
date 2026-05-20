import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        id: 'independent-software-developer',
        role: 'Independent Software Developer',
        company: 'Self-Employed',
        period: '10/2025 - Present',
        description: [
            'Built and shipped HideZone, a real-time GPS game with 6000+ downloads across the Play Store and App Store',
            'Developed and delivered a secure remote desktop solution with time-linked password authentication for a business customer',
        ]
    },
    {
        id: 'student-assistant',
        role: 'Student Assistant',
        company: 'TU Dresden',
        period: '03/2024 - Present',
        description: [
            'Training SSD object detection models on custom industrial machine datasets',
            'Engineered a Raspberry Pi edge system with camera calibration, network-wide server scanning, and beamer-based AR overlay projection',
            'Built the full server-to-client pipeline connecting Dockerized backend inference to the edge device',
            'Dockerized the deployment pipeline for reproducibility across lab environments',
        ]
    },
    {
        id: 'working-student',
        role: 'Working Student - Automation, Robotics & AI (via Siltectra GmbH)',
        company: 'Infineon Technologies AG',
        period: '05/2026 - Present',
        description: [
            'Developing and maintaining internal tools and applications within the company for the production of semiconductors',
        ]
    }
];
