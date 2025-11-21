import Link from 'next/link';
import { Section } from './Section';

export const Header = () => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-900">
            <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight text-primary">
                    RM
                </Link>
                <nav className="hidden sm:flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};
