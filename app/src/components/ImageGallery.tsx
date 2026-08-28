'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface ImageGalleryProps {
    images: string[];
    projectTitle: string;
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
    return (
        <svg className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m9 5 7 7-7 7" />
        </svg>
    );
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [aspectRatios, setAspectRatios] = useState<Record<number, number>>({});
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const railRef = useRef<HTMLUListElement>(null);
    const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const registerAspectRatio = useCallback((index: number, image: HTMLImageElement) => {
        if (!image.naturalWidth || !image.naturalHeight) return;
        const ratio = image.naturalWidth / image.naturalHeight;
        setAspectRatios((current) => current[index] === ratio ? current : { ...current, [index]: ratio });
    }, []);

    const scrollToImage = useCallback((index: number) => {
        const rail = railRef.current;
        const card = cardRefs.current[index];
        if (!rail || !card) return;
        rail.scrollTo({ left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2, behavior: 'smooth' });
        setActiveIndex(index);
    }, []);

    const openLightbox = useCallback((index: number, trigger?: HTMLElement) => {
        previousFocusRef.current = trigger ?? document.activeElement as HTMLElement | null;
        setSelectedIndex(index);
        setIsLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setIsLightboxOpen(false);
        window.setTimeout(() => {
            setSelectedIndex(null);
            previousFocusRef.current?.focus();
        }, 220);
    }, []);

    const goToNext = useCallback(() => {
        setSelectedIndex((current) => current === null ? null : (current + 1) % images.length);
    }, [images.length]);

    const goToPrev = useCallback(() => {
        setSelectedIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!isLightboxOpen) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowRight') goToNext();
            if (event.key === 'ArrowLeft') goToPrev();
            if (event.key === 'Tab') {
                const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
                if (!focusable.length) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            cancelAnimationFrame(focusFrame);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen, closeLightbox, goToNext, goToPrev]);

    useEffect(() => {
        const rail = railRef.current;
        if (!rail || images.length < 2) return;
        let animationFrame = 0;
        const updateActiveImage = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                const center = rail.scrollLeft + rail.clientWidth / 2;
                let nearest = 0;
                let nearestDistance = Number.POSITIVE_INFINITY;
                cardRefs.current.forEach((card, index) => {
                    if (!card) return;
                    const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
                    if (distance < nearestDistance) {
                        nearest = index;
                        nearestDistance = distance;
                    }
                });
                setActiveIndex(nearest);
            });
        };
        rail.addEventListener('scroll', updateActiveImage, { passive: true });
        return () => {
            cancelAnimationFrame(animationFrame);
            rail.removeEventListener('scroll', updateActiveImage);
        };
    }, [images.length]);

    if (!images.length) return null;

    const lightboxIndex = selectedIndex ?? 0;
    const selectedRatio = aspectRatios[lightboxIndex] ?? 1.6;
    const isPortraitScreenshot = selectedRatio < 0.8;
    const previousIndex = (lightboxIndex - 1 + images.length) % images.length;
    const nextIndex = (lightboxIndex + 1) % images.length;

    return (
        <>
            <div className="relative">
                <ul ref={railRef} aria-label={`${projectTitle} screenshots`} aria-roledescription="carousel" className={`no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 md:gap-6 ${images.length === 1 ? 'justify-center' : ''}`}>
                    {images.map((image, index) => {
                        const ratio = aspectRatios[index] ?? 1.6;
                        const cardWidth = Math.min(760, Math.max(280, 620 * ratio));
                        return (
                            <li key={image} ref={(element) => { cardRefs.current[index] = element; }} className="flex-none snap-center first:ml-0 last:mr-0" style={{ width: `min(84vw, ${cardWidth}px)` }}>
                                <motion.button
                                    type="button"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
                                    onClick={(event) => openLightbox(index, event.currentTarget)}
                                    aria-label={`Open ${projectTitle} image ${index + 1} of ${images.length}`}
                                    className="group relative block w-full overflow-hidden rounded-[1.4rem] border border-border bg-black shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                                    style={{ aspectRatio: ratio }}
                                >
                                    <Image src={image} alt={`${projectTitle} - screenshot ${index + 1}`} fill sizes="(max-width: 768px) 84vw, 760px" className="object-cover" onLoad={(event) => registerAspectRatio(index, event.currentTarget)} />
                                    <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" aria-hidden="true" />
                                    <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full border border-white/20 bg-black/55 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" aria-hidden="true">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m15 15 5 5m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-3v6m3-3H7" /></svg>
                                    </span>
                                </motion.button>
                            </li>
                        );
                    })}
                </ul>

                {images.length > 1 && (
                    <div className="mt-3 flex items-center justify-between gap-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
                            <span className="md:hidden">Swipe or open to view</span>
                            <span className="hidden md:inline">Scroll, drag, or open to view</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <button type="button" onClick={() => scrollToImage((activeIndex - 1 + images.length) % images.length)} aria-label="Previous gallery image" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowIcon direction="left" /></button>
                            <span className="min-w-12 text-center font-mono text-xs text-foreground-muted" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
                            <button type="button" onClick={() => scrollToImage((activeIndex + 1) % images.length)} aria-label="Next gallery image" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowIcon direction="right" /></button>
                        </div>
                    </div>
                )}
            </div>

            {typeof document !== 'undefined' && createPortal(<AnimatePresence>
                {isLightboxOpen && selectedIndex !== null && (
                    <motion.div ref={dialogRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-[100] overflow-hidden bg-[#070707]/98 text-white backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={`${projectTitle} image viewer, image ${selectedIndex + 1} of ${images.length}`}>
                        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                            <Image src={images[selectedIndex]} alt="" fill sizes="100vw" className="scale-110 object-cover opacity-[0.07] blur-3xl" />
                            <div className="absolute inset-0 bg-black/75" />
                        </div>

                        <div className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between gap-4 bg-gradient-to-b from-black/80 to-transparent px-4 md:px-7">
                            <div className="min-w-0"><p className="truncate text-sm font-medium text-white/90">{projectTitle}</p><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50" aria-live="polite">{selectedIndex + 1} of {images.length}</p></div>
                            <button ref={closeButtonRef} type="button" onClick={closeLightbox} className="grid h-11 w-11 flex-none place-items-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Close gallery">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18 18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {isPortraitScreenshot && images.length > 1 && (
                            <div className="pointer-events-none absolute inset-x-20 bottom-28 top-20 z-10 hidden xl:block">
                                {[
                                    { index: previousIndex, position: 'left' as const },
                                    { index: nextIndex, position: 'right' as const },
                                ].map(({ index, position }) => (
                                    <button
                                        key={`${position}-${index}`}
                                        type="button"
                                        tabIndex={-1}
                                        onClick={position === 'left' ? goToPrev : goToNext}
                                        className={`pointer-events-auto absolute top-1/2 w-52 -translate-y-1/2 overflow-hidden rounded-[1.6rem] border border-white/10 bg-black opacity-20 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:opacity-55 ${position === 'left' ? 'left-[6%]' : 'right-[6%]'}`}
                                        style={{ aspectRatio: aspectRatios[index] ?? 0.48 }}
                                        aria-label={`${position === 'left' ? 'Preview previous' : 'Preview next'} image`}
                                    >
                                        <Image src={images[index]} alt="" fill sizes="208px" className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}

                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.985 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.985 }}
                            transition={{ duration: 0.2 }}
                            drag={images.length > 1 ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.08}
                            onDragEnd={(_, info) => { if (info.offset.x < -70 || info.velocity.x < -450) goToNext(); if (info.offset.x > 70 || info.velocity.x > 450) goToPrev(); }}
                            className={`absolute inset-x-2 top-20 z-20 ${images.length > 1 ? 'bottom-24 md:inset-x-20 md:bottom-28' : 'bottom-3 md:inset-x-20 md:bottom-8'} cursor-grab active:cursor-grabbing`}
                        >
                            <div className="flex h-full w-full items-center justify-center">
                                <Image
                                    src={images[selectedIndex]}
                                    alt={`${projectTitle} - image ${selectedIndex + 1}`}
                                    width={1600}
                                    height={Math.max(1, Math.round(1600 / selectedRatio))}
                                    sizes="100vw"
                                    className={`block h-auto max-h-full w-auto max-w-full select-none object-contain ${isPortraitScreenshot ? 'rounded-[1.35rem] shadow-[0_30px_100px_rgba(0,0,0,0.65)]' : 'rounded-md'}`}
                                    draggable={false}
                                    priority
                                    onLoad={(event) => registerAspectRatio(selectedIndex, event.currentTarget)}
                                />
                            </div>
                        </motion.div>

                        {images.length > 1 && (
                            <>
                                <button type="button" onClick={goToPrev} className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:grid" aria-label="Previous image"><ArrowIcon direction="left" /></button>
                                <button type="button" onClick={goToNext} className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:grid" aria-label="Next image"><ArrowIcon direction="right" /></button>
                                <div className="absolute inset-x-0 bottom-0 z-30 h-24 bg-gradient-to-t from-black/85 to-transparent md:h-28">
                                    <div className="no-scrollbar mx-auto flex h-full max-w-[calc(100vw-2rem)] items-center justify-start gap-2 overflow-x-auto px-[calc(50%-2rem)] md:max-w-[min(80vw,54rem)] md:gap-3 md:px-[calc(50%-2.5rem)]">
                                        {images.map((image, index) => (
                                            <button key={image} type="button" onClick={() => setSelectedIndex(index)} aria-label={`Show image ${index + 1}`} aria-current={index === selectedIndex ? 'true' : undefined} className={`relative h-14 w-14 flex-none overflow-hidden rounded-lg border transition-all md:h-16 md:w-16 ${index === selectedIndex ? 'scale-105 border-white opacity-100' : 'border-white/15 opacity-50 hover:opacity-90'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}>
                                                <Image src={image} alt="" fill sizes="64px" className="object-contain" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>, document.body)}
        </>
    );
}
