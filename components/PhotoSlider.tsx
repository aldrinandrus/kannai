"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type PhotoSlide = {
  src: string;
  alt: string;
  href: string;
  category: string;
  caption?: string;
};

export function PhotoSlider({ slides }: { slides: readonly PhotoSlide[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const amount = card ? card.offsetWidth + 16 : Math.round(el.clientWidth * 0.75);
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + dir * amount;
    let wrapping = false;
    if (dir === 1 && next > max - 8) {
      next = 0;
      wrapping = true;
    }
    if (dir === -1 && next < 8) {
      next = max;
      wrapping = true;
    }
    el.scrollTo({ left: next, behavior: wrapping ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;
    const id = window.setInterval(() => scrollByCard(1), 4500);
    return () => window.clearInterval(id);
  }, [paused, scrollByCard]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 touch-pan-x"
        role="region"
        aria-label="Photo gallery"
        aria-roledescription="carousel"
      >
        {slides.map((slide) => (
          <Link
            key={`${slide.href}-${slide.src}`}
            href={slide.href}
            data-slide
            className="group relative aspect-[4/3] w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl shadow-md sm:w-[420px] lg:w-[480px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 82vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
                {slide.category}
              </span>
              <p className="mt-2 font-serif text-xl leading-snug font-semibold sm:text-2xl">
                {slide.caption ?? slide.alt}
              </p>
              <span className="mt-2 inline-block text-sm text-white/90 opacity-90 transition-opacity group-hover:opacity-100">
                View {slide.category} &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Previous photos"
        className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-md transition hover:bg-white sm:h-11 sm:w-11"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Next photos"
        className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow-md transition hover:bg-white sm:h-11 sm:w-11"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}
