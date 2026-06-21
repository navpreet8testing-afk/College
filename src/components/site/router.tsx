"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type PageKey =
  | "home"
  | "about"
  | "academics"
  | "admissions"
  | "campus-life"
  | "research"
  | "contact"
  // Utility-bar pages
  | "alumni"
  | "careers"
  | "news"
  | "events"
  | "portal"
  // Footer Resource pages
  | "student-portal"
  | "faculty-portal"
  | "library"
  | "downloads"
  | "grievance";

interface RouterState {
  page: PageKey;
  navigate: (page: PageKey) => void;
  /** True while the preloader is covering the screen during a transition. */
  isTransitioning: boolean;
  /**
   * Monotonic id that changes on the very first mount (1) and on every
   * navigation. Use it as the React `key` of the Preloader so the component
   * remounts — and therefore re-runs its fade-in/fade-out — on every page.
   */
  navId: number;
}

const RouterContext = createContext<RouterState | null>(null);

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}

export const PAGE_TITLES: Record<PageKey, string> = {
  home: "Home",
  about: "About Us",
  academics: "Academics",
  admissions: "Admissions",
  "campus-life": "Campus Life",
  research: "Research",
  contact: "Contact Us",
  alumni: "Alumni",
  careers: "Careers",
  news: "News",
  events: "Events",
  portal: "My Portal",
  "student-portal": "Student Portal",
  "faculty-portal": "Faculty Portal",
  library: "Library",
  downloads: "Downloads",
  grievance: "Grievance Redressal",
};

function readHashPage(): PageKey {
  if (typeof window === "undefined") return "home";
  const fromHash = (window.location.hash.replace("#/", "") ||
    "home") as PageKey;
  return PAGE_TITLES[fromHash] ? fromHash : "home";
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageKey>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navId, setNavId] = useState(1);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(readHashPage());

    const onHashChange = () => setPage(readHashPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback(
    (next: PageKey) => {
      if (next === page) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      setNavId((n) => n + 1);
      setIsTransitioning(true);
      window.setTimeout(() => {
        setPage(next);
        if (typeof window !== "undefined") {
          window.location.hash = `/${next}`;
        }
        window.scrollTo({ top: 0, behavior: "auto" });
        window.setTimeout(() => setIsTransitioning(false), 650);
      }, 500);
    },
    [page]
  );

  return (
    <RouterContext.Provider value={{ page, navigate, isTransitioning, navId }}>
      {children}
    </RouterContext.Provider>
  );
}

/** Top-level nav items (the 6 main links, each opens a mega menu). */
export const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: "about", label: "About Us" },
  { key: "academics", label: "Academics" },
  { key: "admissions", label: "Admissions" },
  { key: "campus-life", label: "Campus Life" },
  { key: "research", label: "Research" },
  { key: "contact", label: "Contact Us" },
];

export interface MegaColumn {
  heading: string;
  links: { key: PageKey; label: string; desc?: string }[];
}

/**
 * Mega menu definition — each top-level nav item expands into grouped links
 * that cover the related sub-pages. The structure is shared by the desktop
 * mega menu and the mobile accordion.
 */
export const MEGA_MENU: Partial<Record<PageKey, MegaColumn[]>> = {
  about: [
    {
      heading: "The College",
      links: [
        { key: "about", label: "About Shivaji College", desc: "Our legacy & mission since 1962" },
        { key: "alumni", label: "Alumni Network", desc: "15,000+ strong global community" },
        { key: "careers", label: "Careers", desc: "Work with us" },
      ],
    },
  ],
  academics: [
    {
      heading: "Academics",
      links: [
        { key: "academics", label: "All Programs", desc: "UG, PG & research" },
        { key: "faculty-portal", label: "Faculty Portal", desc: "Resources for educators" },
        { key: "library", label: "Library", desc: "1,20,000+ books & e-journals" },
      ],
    },
  ],
  admissions: [
    {
      heading: "Admissions",
      links: [
        { key: "admissions", label: "Apply Now", desc: "2025-26 admissions open" },
        { key: "student-portal", label: "Student Portal", desc: "Attendance, results, fees" },
        { key: "downloads", label: "Downloads", desc: "Forms, syllabus, calendar" },
      ],
    },
  ],
  "campus-life": [
    {
      heading: "Campus Life",
      links: [
        { key: "campus-life", label: "Life at Shivaji", desc: "Clubs, sports, fests" },
        { key: "events", label: "Events", desc: "Upcoming & past events" },
        { key: "news", label: "News", desc: "Latest stories" },
      ],
    },
  ],
  research: [
    {
      heading: "Research & Innovation",
      links: [
        { key: "research", label: "Research Areas", desc: "6 thrust areas" },
        { key: "downloads", label: "Publications", desc: "Download research papers" },
      ],
    },
  ],
  contact: [
    {
      heading: "Support & Access",
      links: [
        { key: "contact", label: "Contact Us", desc: "Reach every department" },
        { key: "grievance", label: "Grievance Redressal", desc: "File a complaint securely" },
        { key: "portal", label: "My Portal", desc: "Student & faculty login" },
      ],
    },
  ],
};

/** College WhatsApp number (international format for wa.me links). */
export const COLLEGE_WHATSAPP = "917973290805";
export const COLLEGE_PHONE = "+91 79732 90805";
export const COLLEGE_EMAIL = "navpreet8testing@gmail.com";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/University.of.Delhi",
  instagram: "https://www.instagram.com/du_updates",
  twitter: "https://twitter.com/UnivofDelhi",
  youtube: "https://www.youtube.com/@UniversityofDelhi",
  whatsapp: `https://wa.me/${COLLEGE_WHATSAPP}?text=${encodeURIComponent(
    "Hello Shivaji College, I have an enquiry."
  )}`,
};
