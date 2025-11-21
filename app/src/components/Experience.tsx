import { experience } from '@/data/experience';
import { Section } from './Section';

export const Experience = () => {
    return (
        <Section id="experience">
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-12">
                {experience.map((job) => (
                    <div key={job.id} className="relative border-l border-zinc-200 dark:border-zinc-800 pl-8 pb-2">
                        <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="font-semibold text-lg">{job.role}</h3>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">{job.period}</span>
                        </div>
                        <div className="text-zinc-600 dark:text-zinc-400 font-medium mb-4">{job.company}</div>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                            {job.description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
