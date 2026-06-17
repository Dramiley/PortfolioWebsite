import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        id: 'working-student',
        role: 'Working Student, Automation & AI',
        company: 'Infineon Technologies AG (via Siltectra GmbH)',
        period: '05/2026 - Present',
        description: [
            'Developing and maintaining internal tools and applications for semiconductor manufacturing processes.',
        ]
    },
    {
        id: 'independent-software-developer',
        role: 'Independent Software Developer',
        company: 'Self-Employed',
        period: '10/2025 - Present',
        description: [
            'Built and shipped HideZone, a location-based mobile game with over 15,000 organic downloads on the App Store and Google Play.',
            'Delivered a secure remote desktop client with time-linked authentication for an enterprise client.',
        ]
    },
    {
        id: 'student-assistant',
        role: 'Student Assistant',
        company: 'TU Dresden',
        period: '03/2024 - Present',
        description: [
            'Trained SSD object detection models on custom industrial machinery datasets.',
            'Built a Raspberry Pi edge system with camera calibration, server auto-discovery, and projector-based augmented reality overlays.',
            'Connected Dockerized backend inference servers to edge devices over a distributed network pipeline.',
            'Dockerized the deployment pipelines for reproducibility across laboratory environments.',
        ]
    }
];
