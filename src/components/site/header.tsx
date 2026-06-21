"use client";

import { useEffect, useState } from "react";
import {
  useRouter,
  NAV_ITEMS,
  MEGA_MENU,
  SOCIAL_LINKS,
  type PageKey,
} from "./router";
import { CollegeLogo } from "./brand";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const UTILITY_LINKS: { key: PageKey; label: string }[] = [
  { key: "alumni", label: "Alumni" },
  { key: "careers", label: "Careers" },
  { key: "news", label: "News" },
  { key: "events", label: "Events" },
  { key: "portal", label: "My Portal" },
];

/**
 * Shared header — byte-identical on every page.
 * Thin navy utility bar on top, white header with logo / mega-menu nav /
 * Apply Now, plus a WhatsApp quick-action.
 */
export function SiteHeader() {
  const { page, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<PageKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<PageKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mega menu when the mouse leaves the whole nav area.
  const go = (key: PageKey) => {
    navigate(key);
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenMega(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-[#121c33] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2 text-[12px]">
          <p className="hidden sm:block font-sans tracking-wide text-white/90">
            Excellence in Education, Leadership in Every Field.
          </p>
          <nav className="flex items-center gap-4 sm:gap-5 ml-auto">
            {UTILITY_LINKS.map((l) => (
              <button
                key={l.key}
                type="button"
                onClick={() => go(l.key)}
                className={`util-link font-sans ${
                  page === l.key ? "text-[#d4a04c]" : "text-white/85"
                } hover:text-[#d4a04c]`}
              >
                {l.label}
              </button>
            ))}
            {/* Social icons in utility bar */}
            <span className="hidden md:flex items-center gap-2 pl-3 ml-1 border-l border-white/15">
              {[
                { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
                { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                { Icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="util-link text-white/70 hover:text-[#d4a04c]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </span>
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`bg-white/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "shadow-[0_1px_3px_rgba(26,39,68,0.06),0_8px_24px_-12px_rgba(26,39,68,0.12)] border-b border-[#1a2744]/8"
            : "border-b border-[#1a2744]/6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <button
            type="button"
            onClick={() => go("home")}
            className="shrink-0"
            aria-label="Shivaji College home"
          >
            <CollegeLogo />
          </button>

          {/* Desktop nav with mega menu */}
          <nav
            className="hidden lg:flex items-center gap-6"
            onMouseLeave={() => setOpenMega(null)}
          >
            <button
              onClick={() => go("home")}
              className={`nav-link font-sans text-[15px] font-medium ${
                page === "home" ? "is-active text-[#1a2744]" : "text-[#1a2744]"
              }`}
            >
              Home
            </button>
            {NAV_ITEMS.map((item) => {
              const hasMega = !!MEGA_MENU[item.key];
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenMega(hasMega ? item.key : null)
                  }
                >
                  <button
                    onClick={() => go(item.key)}
                    className={`nav-link font-sans text-[15px] font-medium ${
                      page === item.key
                        ? "is-active text-[#1a2744]"
                        : "text-[#1a2744]"
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Mega menu panel */}
                  {hasMega && openMega === item.key && (
                    <div
                      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
                      onMouseEnter={() => setOpenMega(item.key)}
                    >
                      <div className="min-w-[340px] rounded-2xl border border-[#1a2744]/8 bg-white/95 p-5 shadow-[0_4px_12px_rgba(26,39,68,0.08),0_24px_48px_-12px_rgba(26,39,68,0.18)] backdrop-blur-xl animate-[fadeIn_.18s_ease]">
                        {MEGA_MENU[item.key]!.map((col) => (
                          <div key={col.heading}>
                            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4a04c]">
                              {col.heading}
                            </p>
                            <ul className="mt-2 space-y-1">
                              {col.links.map((link) => (
                                <li key={link.key}>
                                  <button
                                    onClick={() => go(link.key)}
                                    className="group flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#f7f5f0]"
                                  >
                                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a04c] opacity-0 transition-opacity group-hover:opacity-100" />
                                    <span>
                                      <span className="block font-sans text-[14px] font-semibold text-[#1a2744]">
                                        {link.label}
                                      </span>
                                      {link.desc && (
                                        <span className="block font-sans text-[12px] text-[#5a6478]">
                                          {link.desc}
                                        </span>
                                      )}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Apply Now + mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => go("admissions")}
              className="btn-gold hidden sm:inline-flex items-center gap-2 rounded-md bg-[#d4a04c] px-5 py-2.5 font-sans text-[14px] font-semibold text-white"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-[#1a2744]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (accordion) */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              <button
                onClick={() => go("home")}
                className="py-3 text-left font-sans text-[15px] font-medium text-[#1a2744] border-b border-gray-50"
              >
                Home
              </button>
              {NAV_ITEMS.map((item) => {
                const hasMega = !!MEGA_MENU[item.key];
                return (
                  <div key={item.key} className="border-b border-gray-50">
                    <div className="flex items-center">
                      <button
                        onClick={() => go(item.key)}
                        className="flex-1 py-3 text-left font-sans text-[15px] font-medium text-[#1a2744]"
                      >
                        {item.label}
                      </button>
                      {hasMega && (
                        <button
                          onClick={() =>
                            setMobileExpanded((p) =>
                              p === item.key ? null : item.key
                            )
                          }
                          aria-label={`Expand ${item.label}`}
                          className="px-3 py-3 text-[#5a6478]"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              mobileExpanded === item.key ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {hasMega && mobileExpanded === item.key && (
                      <div className="pb-2 pl-3">
                        {MEGA_MENU[item.key]!.map((col) => (
                          <div key={col.heading} className="py-1">
                            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4a04c]">
                              {col.heading}
                            </p>
                            {col.links.map((link) => (
                              <button
                                key={link.key}
                                onClick={() => go(link.key)}
                                className="block w-full py-2 text-left font-sans text-[14px] text-[#1a2744]"
                              >
                                {link.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                onClick={() => go("admissions")}
                className="btn-gold mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[#d4a04c] px-5 py-3 font-sans text-[14px] font-semibold text-white"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Re-export so other modules don't need to import from router directly.
export { Linkedin };
