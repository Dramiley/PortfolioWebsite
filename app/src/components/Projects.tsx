import { projects } from '@/data/projects';
import { Section } from './Section';
import Image from 'next/image';

export const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group relative border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                        <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-900">
                            {/* Placeholder for image if not present, or actual image */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                                {project.imageUrl ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-xl">{project.title}</h3>
                                <div className="flex gap-2">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-primary transition-colors">Live</a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-primary transition-colors">Code</a>
                                    )}
                                </div>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
