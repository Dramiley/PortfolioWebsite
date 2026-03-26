import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        id: 'independent-software-developer',
        role: 'Independent Software Developer',
        company: 'Self-Employed',
        period: '2025 – Present',
        description: [
            'Built and shipped HideZone, a real-time GPS game with 400+ Play Store downloads',
            'Developed and delivered a secure remote desktop solution with time-linked password authentication for a business customer',
        ]
    },
    {
        id: 'student-assistant',
        role: 'Student Assistant',
        company: 'TU Dresden',
        period: '2024 – Present',
        description: [
            'Training SSD object detection models on custom industrial machine datasets',
            'Engineered a Raspberry Pi edge system with camera calibration, network-wide server scanning, and beamer-based AR overlay projection',
            'Built the full server-to-client pipeline connecting Dockerized backend inference to the edge device',
            'Dockerized the deployment pipeline for reproducibility across lab environments',
        ]
    }
];
