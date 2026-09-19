import { Experience } from '@/types';

export const experience: Experience[] = [
    {
        id: 'working-student',
        role: 'Working Student, Automation & AI',
        company: 'Infineon Technologies AG (via Siltectra GmbH)',
        period: '05/2026 - Present',
        description: [
            'Develop and maintain internal applications that support semiconductor manufacturing workflows.',
            'Extend an internal maintenance chatbot with workflow automation and enterprise authentication, including Single Sign-On.',
            'Built an AI-assisted workflow that turns meeting recordings into structured Jira tickets.',
        ]
    },
    {
        id: 'independent-software-developer',
        role: 'Independent Software Developer',
        company: 'Self-Employed',
        period: '04/2025 - Present',
        description: [
            'Built and now operate HideZone, a real-time GPS multiplayer game with more than 40,000 organic downloads across Google Play and the App Store.',
            'Delivered a remote desktop client with time-bound authentication for an enterprise customer.',
            'Built a mail-routing service that forwards incoming messages to users on dynamically assigned virtual machines.',
        ]
    },
    {
        id: 'student-assistant',
        role: 'Student Assistant',
        company: 'TU Dresden',
        period: '02/2024 - Present',
        description: [
            'Developed a distributed maintenance-assistant prototype with SSD object detection, Dockerized Flask services, and Raspberry Pi edge hardware.',
            'Implemented camera calibration, image-quality checks, local server discovery, and projector-based guidance for industrial machinery.',
            'Built a pipeline that converts single- and multi-camera object detections into OWL knowledge graphs with derived spatial relations.',
            'Currently developing an LLM-based ontology generation and benchmarking suite with hierarchical merging, automated quality evaluation, and a Next.js control interface.',
        ]
    }
];
