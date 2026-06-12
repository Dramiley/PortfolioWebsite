/**
 * @file AmbientBackground.tsx
 * @description Static page background: a soft vignette with two faint color
 * washes. Pure CSS, no JavaScript, no animation loops.
 */

export default function AmbientBackground() {
    return (
        <div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden bg-background">
            {/* Base vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--background-secondary)_0%,_var(--background)_100%)] opacity-80" />

            {/* Faint terracotta wash, top left */}
            <div
                className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full"
                style={{ background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 65%)', opacity: 0.3 }}
            />

            {/* Faint slate wash, bottom right */}
            <div
                className="absolute -bottom-[25%] -right-[10%] w-[65vw] h-[65vw] rounded-full"
                style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)', opacity: 0.3 }}
            />
        </div>
    );
}
