import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
            <p className="font-mono text-sm uppercase tracking-wider text-primary mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Page not found</h1>
            <p className="text-foreground-muted mb-10 max-w-md leading-relaxed">
                This page doesn&apos;t exist or has moved.
            </p>
            <Link
                href="/"
                className="flex items-center justify-center h-12 px-7 font-semibold text-white bg-primary rounded-lg hover:bg-primary-soft transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
                Back to home
            </Link>
        </div>
    );
}
