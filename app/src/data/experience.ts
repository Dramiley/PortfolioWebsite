import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        id: 'working-student',
        role: 'Working Student in Automation, Robotics, and AI (via Siltectra GmbH)',
        company: 'Infineon Technologies AG',
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
            'Engineered and deployed HideZone, which is a location-based mobile game that acquired over 10,000 organic downloads across the App Store and Google Play.',
            'Developed and delivered a secure remote desktop client featuring time-linked authentication for an enterprise client.',
        ]
    },
    {
        id: 'student-assistant',
        role: 'Student Assistant',
        company: 'TU Dresden',
        period: '03/2024 - Present',
        description: [
            'Trained SSD object detection models on custom industrial machinery datasets.',
            'Engineered a Raspberry Pi edge system integrating camera calibration, server auto-discovery, and projector-based augmented reality overlays.',
            'Built the distributed network pipeline connecting Dockerized backend inference servers to edge devices.',
            'Dockerized the deployment pipelines to guarantee complete reproducibility across laboratory environments.',
        ]
    }
];
