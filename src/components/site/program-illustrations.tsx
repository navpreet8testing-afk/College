"use client";

import type { ComponentProps } from "react";

/**
 * Premium custom academic illustrations for the homepage program cards.
 * Each is a distinctive, stylish SVG with the navy/gold duotone palette —
 * unique shapes, layered details, and subtle gradients. Used ONLY on the
 * homepage Bento program cards.
 */

type SvgProps = ComponentProps<"svg">;

const NAVY = "#1a2744";
const NAVY_LIGHT = "#2a3a5c";
const GOLD = "#d4a04c";
const GOLD_LIGHT = "#e8c178";
const GOLD_DEEP = "#b8862f";

/* Arts — open book with floating golden letters, literary flourish */
export function ArtsIllustration(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="arts-book" x1="14" y1="40" x2="66" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_LIGHT} />
          <stop offset="1" stopColor={GOLD_DEEP} />
        </linearGradient>
        <linearGradient id="arts-page" x1="40" y1="34" x2="40" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#f5f3ee" />
        </linearGradient>
      </defs>
      {/* Floating letters — literary flourish */}
      <text x="20" y="20" fontSize="11" fontWeight="700" fill={GOLD} fontFamily="Georgia, serif" opacity="0.85">A</text>
      <text x="54" y="16" fontSize="9" fontWeight="600" fill={GOLD_LIGHT} fontFamily="Georgia, serif" opacity="0.7">a</text>
      <text x="62" y="30" fontSize="10" fontWeight="700" fill={GOLD} fontFamily="Georgia, serif" opacity="0.75">文</text>
      {/* Open book — 3D perspective pages */}
      <path d="M14 60C24 54 34 54 40 58C46 54 56 54 66 60V66C56 60 46 60 40 64C34 60 24 60 14 66V60Z" fill="url(#arts-book)" stroke={NAVY} strokeWidth="1.4" strokeLinejoin="round"/>
      {/* Left page */}
      <path d="M14 60C22 55 32 55 40 58V64C32 61 22 61 14 66V60Z" fill="url(#arts-page)" stroke={NAVY} strokeWidth="1" strokeOpacity="0.5"/>
      {/* Right page */}
      <path d="M66 60C58 55 48 55 40 58V64C48 61 58 61 66 66V60Z" fill="url(#arts-page)" stroke={NAVY} strokeWidth="1" strokeOpacity="0.5"/>
      {/* Text lines on pages */}
      <path d="M20 62H34M22 65H32" stroke={NAVY} strokeOpacity="0.35" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M46 62H60M48 65H58" stroke={NAVY} strokeOpacity="0.35" strokeWidth="0.8" strokeLinecap="round"/>
      {/* Center spine glow */}
      <path d="M40 58V64" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round"/>
      {/* Sparkle */}
      <path d="M40 14L41.5 18L45.5 19.5L41.5 21L40 25L38.5 21L34.5 19.5L38.5 18L40 14Z" fill={GOLD_LIGHT} opacity="0.9"/>
    </svg>
  );
}

/* Science — atom with 3 orbital rings, glowing nucleus, energy nodes */
export function ScienceIllustration(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="sci-nucleus" cx="40" cy="40" r="9" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_LIGHT} />
          <stop offset="0.6" stopColor={GOLD} />
          <stop offset="1" stopColor={GOLD_DEEP} />
        </radialGradient>
        <linearGradient id="sci-orbit" x1="18" y1="40" x2="62" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD} stopOpacity="0.3" />
          <stop offset="0.5" stopColor={GOLD_LIGHT} stopOpacity="0.9" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Three orbital rings — tilted for 3D feel */}
      <ellipse cx="40" cy="40" rx="26" ry="11" stroke="url(#sci-orbit)" strokeWidth="1.8" fill="none"/>
      <ellipse cx="40" cy="40" rx="26" ry="11" stroke={NAVY} strokeOpacity="0.4" strokeWidth="1" fill="none" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="26" ry="11" stroke={NAVY} strokeOpacity="0.4" strokeWidth="1" fill="none" transform="rotate(120 40 40)"/>
      {/* Glowing nucleus */}
      <circle cx="40" cy="40" r="9" fill="url(#sci-nucleus)" stroke={NAVY} strokeWidth="1.2"/>
      <circle cx="37" cy="37" r="2.5" fill="#ffffff" fillOpacity="0.5"/>
      {/* Electrons on orbits — with glow */}
      <circle cx="66" cy="40" r="3.5" fill={GOLD} stroke={NAVY} strokeWidth="1"/>
      <circle cx="66" cy="40" r="5.5" fill={GOLD} fillOpacity="0.2"/>
      <circle cx="27" cy="19" r="3.5" fill={GOLD_LIGHT} stroke={NAVY} strokeWidth="1"/>
      <circle cx="27" cy="19" r="5.5" fill={GOLD_LIGHT} fillOpacity="0.2"/>
      <circle cx="27" cy="61" r="3.5" fill={GOLD} stroke={NAVY} strokeWidth="1"/>
      <circle cx="27" cy="61" r="5.5" fill={GOLD} fillOpacity="0.2"/>
      {/* Energy sparkles */}
      <path d="M58 22L59 25L62 26L59 27L58 30L57 27L54 26L57 25L58 22Z" fill={GOLD_LIGHT} opacity="0.8"/>
    </svg>
  );
}

/* Commerce — bar chart with upward trend arrow, floating coin, growth */
export function CommerceIllustration(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="com-bar1" x1="20" y1="60" x2="20" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_DEEP} />
          <stop offset="1" stopColor={GOLD} />
        </linearGradient>
        <linearGradient id="com-bar2" x1="32" y1="60" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_DEEP} />
          <stop offset="1" stopColor={GOLD_LIGHT} />
        </linearGradient>
        <linearGradient id="com-bar3" x1="44" y1="60" x2="44" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD} />
          <stop offset="1" stopColor={GOLD_LIGHT} />
        </linearGradient>
        <linearGradient id="com-trend" x1="14" y1="50" x2="66" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_LIGHT} />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Baseline */}
      <path d="M12 62H68" stroke={NAVY} strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Bars — ascending */}
      <rect x="16" y="48" width="8" height="14" rx="1.5" fill="url(#com-bar1)" stroke={NAVY} strokeWidth="1"/>
      <rect x="28" y="40" width="8" height="22" rx="1.5" fill="url(#com-bar2)" stroke={NAVY} strokeWidth="1"/>
      <rect x="40" y="28" width="8" height="34" rx="1.5" fill="url(#com-bar3)" stroke={NAVY} strokeWidth="1"/>
      {/* Trend arrow — sweeping upward */}
      <path d="M16 52L28 46L40 38L56 22" stroke="url(#com-trend)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M48 22L58 20L56 30" stroke={GOLD_LIGHT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Floating ₹ coin with shine */}
      <circle cx="62" cy="46" r="9" fill={NAVY} fillOpacity="0.12" stroke={NAVY} strokeWidth="1.4"/>
      <circle cx="62" cy="46" r="6.5" fill={GOLD} fillOpacity="0.25"/>
      <text x="62" y="51" textAnchor="middle" fontSize="11" fontWeight="700" fill={GOLD_DEEP} fontFamily="Georgia, serif">₹</text>
      <path d="M58 42C59 41 60 40.5 61 40.5" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

/* Computer Science — circuit board with code brackets, data flow nodes */
export function ComputerScienceIllustration(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="cs-chip" x1="22" y1="22" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor={NAVY_LIGHT} />
          <stop offset="1" stopColor={NAVY} />
        </linearGradient>
        <linearGradient id="cs-code" x1="28" y1="32" x2="52" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_LIGHT} />
          <stop offset="1" stopColor={GOLD} />
        </linearGradient>
      </defs>
      {/* Circuit traces — flowing data lines */}
      <path d="M10 30H22M10 40H22M10 50H22" stroke={GOLD} strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M58 30H70M58 40H70M58 50H70" stroke={GOLD} strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M30 10V22M40 10V22M50 10V22" stroke={GOLD} strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M30 58V70M40 58V70M50 58V70" stroke={GOLD} strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Trace nodes (dots at trace ends) */}
      <circle cx="10" cy="30" r="1.8" fill={GOLD_LIGHT}/>
      <circle cx="70" cy="50" r="1.8" fill={GOLD_LIGHT}/>
      <circle cx="30" cy="70" r="1.8" fill={GOLD_LIGHT}/>
      <circle cx="50" cy="10" r="1.8" fill={GOLD_LIGHT}/>
      {/* Main chip body — rounded square */}
      <rect x="22" y="22" width="36" height="36" rx="7" fill="url(#cs-chip)" stroke={NAVY} strokeWidth="1.6"/>
      {/* Inner chip border */}
      <rect x="26" y="26" width="28" height="28" rx="4" fill="none" stroke={GOLD} strokeOpacity="0.3" strokeWidth="1"/>
      {/* Code brackets </> — the star */}
      <path d="M32 32L26 40L32 48" stroke="url(#cs-code)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M48 32L54 40L48 48" stroke="url(#cs-code)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M44 30L36 50" stroke={GOLD_LIGHT} strokeWidth="2.4" strokeLinecap="round"/>
      {/* Corner notches — chip detail */}
      <circle cx="30" cy="30" r="1.2" fill={GOLD}/>
      <circle cx="50" cy="30" r="1.2" fill={GOLD}/>
      <circle cx="30" cy="50" r="1.2" fill={GOLD}/>
      <circle cx="50" cy="50" r="1.2" fill={GOLD}/>
    </svg>
  );
}

/* Postgraduate — graduation cap with tassel, diploma scroll, laurel */
export function PostgraduateIllustration(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="pg-cap" x1="40" y1="14" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_LIGHT} />
          <stop offset="1" stopColor={GOLD_DEEP} />
        </linearGradient>
        <linearGradient id="pg-base" x1="28" y1="34" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor={NAVY_LIGHT} />
          <stop offset="1" stopColor={NAVY} />
        </linearGradient>
      </defs>
      {/* Mortarboard top — diamond */}
      <path d="M12 28L40 14L68 28L40 42L12 28Z" fill="url(#pg-cap)" stroke={NAVY} strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Highlight on cap top */}
      <path d="M20 28L40 18L60 28" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      {/* Cap base (head portion) */}
      <path d="M28 36V46C28 49 33 51 40 51C47 51 52 49 52 46V36" fill="url(#pg-base)" stroke={NAVY} strokeWidth="1.6"/>
      {/* Tassel cord */}
      <path d="M64 28V42" stroke={NAVY} strokeOpacity="0.7" strokeWidth="1.4"/>
      {/* Tassel knot + strands */}
      <circle cx="64" cy="44" r="3" fill={GOLD} stroke={NAVY} strokeWidth="1.2"/>
      <path d="M62 46L60 56M64 47L64 56M66 46L68 56" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round"/>
      {/* Diploma scroll below */}
      <rect x="22" y="58" width="36" height="6" rx="3" fill={GOLD_LIGHT} fillOpacity="0.4" stroke={NAVY} strokeWidth="1.2"/>
      <path d="M26 61H54" stroke={GOLD_DEEP} strokeWidth="0.8" strokeOpacity="0.6"/>
      {/* Ribbon on scroll */}
      <path d="M40 58V64" stroke={GOLD_DEEP} strokeWidth="1.2"/>
      {/* Laurel leaves — achievement flourish */}
      <path d="M14 56C12 54 10 54 8 56C10 58 12 58 14 56Z" fill={GOLD} fillOpacity="0.7"/>
      <path d="M66 56C68 54 70 54 72 56C70 58 68 58 66 56Z" fill={GOLD} fillOpacity="0.7"/>
    </svg>
  );
}

/* Research — microscope with lens, specimen slide, discovery spark */
export function ResearchIllustration(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="res-body" x1="28" y1="14" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor={NAVY_LIGHT} />
          <stop offset="1" stopColor={NAVY} />
        </linearGradient>
        <linearGradient id="res-lens" x1="36" y1="36" x2="44" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor={GOLD_LIGHT} />
          <stop offset="1" stopColor={GOLD_DEEP} />
        </linearGradient>
        <radialGradient id="res-spark" cx="60" cy="20" r="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.5" stopColor={GOLD_LIGHT} />
          <stop offset="1" stopColor={GOLD} stopOpacity="0.4" />
        </radialGradient>
      </defs>
      {/* Eyepiece (top) */}
      <rect x="32" y="10" width="12" height="8" rx="2" fill={GOLD} stroke={NAVY} strokeWidth="1.4"/>
      {/* Eyepiece lens highlight */}
      <path d="M34 13H42" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round"/>
      {/* Tube/body — angled optical tube */}
      <path d="M30 18L44 18L44 30L38 30L38 38L44 38L44 46L30 46L30 18Z" fill="url(#res-body)" stroke={NAVY} strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Body detail lines */}
      <path d="M34 22H40M34 26H40" stroke={GOLD} strokeOpacity="0.4" strokeWidth="0.8"/>
      {/* Objective lens (tapered) */}
      <path d="M32 46L42 46L44 56L30 56L32 46Z" fill="url(#res-lens)" stroke={NAVY} strokeWidth="1.4" strokeLinejoin="round"/>
      <ellipse cx="37" cy="51" rx="3" ry="2" fill="#ffffff" fillOpacity="0.3"/>
      {/* Specimen slide */}
      <rect x="24" y="56" width="26" height="3" rx="1.5" fill={NAVY} fillOpacity="0.5"/>
      <rect x="34" y="55" width="6" height="5" rx="1" fill={GOLD} fillOpacity="0.6" stroke={NAVY} strokeWidth="0.8"/>
      {/* Stage/arm */}
      <path d="M22 59H58L55 68H25L22 59Z" fill="url(#res-body)" stroke={NAVY} strokeWidth="1.6" strokeLinejoin="round"/>
      {/* Base foot */}
      <path d="M24 68H56" stroke={NAVY} strokeWidth="2.4" strokeLinecap="round"/>
      {/* Focus knob */}
      <circle cx="52" cy="40" r="3" fill={GOLD} stroke={NAVY} strokeWidth="1.2"/>
      <circle cx="52" cy="40" r="1" fill={NAVY}/>
      {/* Discovery spark — the "aha" moment */}
      <path d="M62 14L64 20L70 22L64 24L62 30L60 24L54 22L60 20L62 14Z" fill="url(#res-spark)" stroke={GOLD} strokeWidth="0.8"/>
      {/* Small sparkles */}
      <circle cx="68" cy="32" r="1.5" fill={GOLD_LIGHT} opacity="0.8"/>
      <circle cx="14" cy="40" r="1.2" fill={GOLD_LIGHT} opacity="0.6"/>
    </svg>
  );
}

export const PROGRAM_ILLUSTRATIONS = {
  arts: ArtsIllustration,
  science: ScienceIllustration,
  commerce: CommerceIllustration,
  "computer-science": ComputerScienceIllustration,
  postgraduate: PostgraduateIllustration,
  research: ResearchIllustration,
} as const;

export type ProgramIllustrationKey = keyof typeof PROGRAM_ILLUSTRATIONS;
