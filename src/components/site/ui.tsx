"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { type PageKey } from "./router";
import { useRouter } from "./router";
import { useCountUp } from "./hooks";

/* ---------- Refined section (mesh/texture backgrounds) ---------- */
export function Section({
  children,
  className = "",
  bg = "white",
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "navy" | "muted" | "mesh" | "mesh-navy";
}) {
  const bgCls =
    bg === "navy"
      ? "mesh-navy grain-bg text-white"
      : bg === "mesh-navy"
      ? "mesh-navy grain-bg text-white"
      : bg === "mesh"
      ? "mesh-light grain-bg"
      : bg === "muted"
      ? "bg-[#f5f3ee] grain-bg"
      : "bg-white grain-bg";
  return (
    <section className={`${bgCls} py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/* ---------- Refined section heading (Linear/Vercel-style discipline) ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <div
        className={`flex items-center gap-2.5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-px w-6 bg-[#d4a04c]" />
        <p
          className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: light ? "#d4a04c" : "#b8862f" }}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className="mt-4 font-serif text-[30px] sm:text-[38px] font-bold leading-[1.1]"
        style={{ color: light ? "#ffffff" : "#1a2744" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 font-sans text-[16px] leading-relaxed"
          style={{ color: light ? "rgba(255,255,255,0.72)" : "#6b7280" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------- Page hero banner (glassmorphism + hover zoom) ---------- */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
}) {
  return (
    <section className="group relative w-full overflow-hidden">
      <div className="relative h-[52vh] min-h-[380px] w-full">
        <img
          src={image}
          alt=""
          className="hero-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121c33]/90 via-[#1a2744]/70 to-[#1a2744]/40" />
        {/* Glassmorphism content panel */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-md sm:p-8">
            {eyebrow && (
              <div className="hero-animate flex items-center gap-2.5">
                <span className="inline-block h-px w-6 bg-[#d4a04c]" />
                <p
                  className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#d4a04c", animationDelay: "0.05s" }}
                >
                  {eyebrow}
                </p>
              </div>
            )}
            <h1
              className="hero-animate mt-3 font-serif text-[36px] sm:text-[48px] font-extrabold leading-[1.08] text-white"
              style={{ animationDelay: "0.15s" }}
            >
              {title}
            </h1>
            {description && (
              <p
                className="hero-animate mt-4 max-w-xl font-sans text-[15px] sm:text-[16px] leading-relaxed text-white/85"
                style={{ animationDelay: "0.28s" }}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Primary gold button (refined, tactile) ---------- */
export function GoldButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`btn-gold inline-flex items-center gap-2 bg-gradient-to-b from-[#d4a04c] to-[#c9963f] px-6 py-3 font-sans text-[14px] font-semibold text-white ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

/* ---------- Outline button (border + fill transition) ---------- */
export function OutlineButton({
  children,
  onClick,
  light = false,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  light?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`btn-outline inline-flex items-center gap-2 border px-6 py-3 font-sans text-[14px] font-semibold ${
        light
          ? "btn-outline-light border-white/30 text-white hover:bg-white hover:text-[#1a2744]"
          : "border-[#1a2744]/15 text-[#1a2744] hover:border-[#1a2744]/40 hover:bg-[#1a2744] hover:text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------- Navigate-aware button wrappers ---------- */
export function NavGoldButton({
  to,
  children,
  className = "",
}: {
  to: PageKey;
  children: ReactNode;
  className?: string;
}) {
  const { navigate } = useRouter();
  return (
    <GoldButton onClick={() => navigate(to)} className={className}>
      {children}
    </GoldButton>
  );
}

export function NavOutlineButton({
  to,
  children,
  light = false,
  className = "",
}: {
  to: PageKey;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  const { navigate } = useRouter();
  return (
    <OutlineButton onClick={() => navigate(to)} light={light} className={className}>
      {children}
    </OutlineButton>
  );
}

/* ---------- Animated stat (count-up) ---------- */
export function StatItem({
  value,
  suffix = "",
  label,
  light = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div>
      <div
        ref={ref}
        className="font-serif text-[34px] sm:text-[42px] font-extrabold leading-none tracking-tight"
        style={{ color: light ? "#ffffff" : "#1a2744" }}
      >
        {current}
        {suffix}
      </div>
      <div
        className="mt-2 font-sans text-[12px] font-medium uppercase tracking-[0.14em]"
        style={{ color: light ? "rgba(255,255,255,0.62)" : "#6b7280" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ---------- Bento card wrapper (premium hover) ---------- */
export function BentoCard({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      onClick={onClick}
      className={`card-premium block w-full rounded-2xl bg-white p-6 text-left ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ---------- Duotone icon container (gradient + texture) ---------- */
export function IconBadge({
  icon: Icon,
  size = "md",
  light = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  size?: "sm" | "md" | "lg";
  light?: boolean;
}) {
  const sizeCls =
    size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-12 w-12";
  const iconCls =
    size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span
      className={`${sizeCls} ${light ? "icon-duotone-light" : "icon-duotone"}`}
    >
      <Icon className={iconCls} />
    </span>
  );
}
