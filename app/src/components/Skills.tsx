import { skills } from '@/data/skills';
import { Section } from './Section';

export const Skills = () => {
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
    }, {} as Record<string, string[]>);

    const categories = Object.keys(skillsByCategory);

    return (
        <Section id="skills">
            <h2 className="text-2xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {categories.map((category) => (
                    <div key={category}>
                        <h3 className="font-medium text-zinc-900 dark:text-zinc-100 capitalize mb-4">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsByCategory[category].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
