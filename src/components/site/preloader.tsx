"use client";

import { useEffect, useState } from "react";
import { CollegeLogo } from "./brand";

/**
 * Full-screen preloader shown on every page.
 * - The parent remounts this component (via React `key`) each time the user
 *   navigates, so `visible`/`done` start fresh every time and the effect only
 *   needs to schedule timers — no synchronous setState in the effect body.
 * - `initial` controls the hold duration (longer on the very first load so
 *   the logo has time to fade in).
 */
export function Preloader({ initial = false }: { initial?: boolean }) {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const holdMs = initial ? 1400 : 700;
    const fadeMs = 600;
    const hideTimer = window.setTimeout(() => setDone(true), holdMs);
    const unmountTimer = window.setTimeout(
      () => setVisible(false),
      holdMs + fadeMs
    );
    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, [initial]);

  if (!visible) return null;

  return (
    <div
      className={`preloader-overlay ${done ? "is-done" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-logo">
        <CollegeLogo variant="light" />
      </div>
      <div className="flex items-center gap-2">
        <span className="preloader-ring inline-block h-5 w-5 rounded-full border-2 border-white/20 border-t-[#d4a04c]" />
        <span className="font-sans text-[12px] uppercase tracking-[0.3em] text-white/60">
          Loading
        </span>
      </div>
    </div>
  );
}
