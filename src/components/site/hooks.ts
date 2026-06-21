"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds the `is-visible` class to a `.reveal` / `.reveal-stagger` element
 * the first time it scrolls into the viewport. Re-scans the subtree so
 * elements rendered after mount (e.g. when switching pages) are picked up.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)"
      )
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  });

  return ref;
}

/**
 * Counts a number up from 0 to `end` once the returned ref scrolls into view.
 */
export function useCountUp(end: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // easeOutExpo
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setValue(Math.round(eased * end));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, value };
}
