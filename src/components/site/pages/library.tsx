"use client";

import { useEffect } from "react";
import {
  BookOpen,
  BookMarked,
  Newspaper,
  Laptop,
  Gem,
  Library,
  Globe,
  Clock,
  CheckCircle2,
  Search,
  RefreshCw,
  CalendarCheck,
  Copy,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { useRouter, SOCIAL_LINKS } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
  StatItem,
} from "../ui";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/f8fa351e7b80.jpg";

const COLLECTIONS = [
  {
    icon: BookOpen,
    name: "General Books",
    count: "80,000+ titles",
    desc: "Textbooks & general reading across disciplines",
  },
  {
    icon: BookMarked,
    name: "Reference Section",
    count: "5,000+ titles",
    desc: "Encyclopedias, dictionaries, handbooks",
  },
  {
    icon: Newspaper,
    name: "Periodicals",
    count: "80+ subscriptions",
    desc: "Journals, magazines, newspapers",
  },
  {
    icon: Laptop,
    name: "Digital Library",
    count: "25,000+ e-journals",
    desc: "Online databases & e-resources",
  },
  {
    icon: Gem,
    name: "Rare Books",
    count: "600+ items",
    desc: "Rare manuscripts & archival material",
  },
  {
    icon: Library,
    name: "Book Bank",
    count: "8,000+ books",
    desc: "Borrowable textbooks for disadvantaged students",
  },
];

const E_RESOURCES = [
  "N-List",
  "DELNET",
  "INFLIBNET",
  "Shodhganga",
  "National Digital Library",
  "JSTOR",
  "EBSCO",
  "DOAJ",
];

const GALLERY = [
  {
    src: "https://sfile.chatglm.cn/images-ppt/c89dfee1ab74.png",
    label: "Reading Hall",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/e8c509f6af90.jpg",
    label: "Reference Section",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/6dda3c96cd6d.png",
    label: "Digital Lab",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/c4f4bdd16658.jpg",
    label: "Periodicals",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/9383c3cf66ed.jpg",
    label: "Discussion Room",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/f8fa351e7b80.jpg",
    label: "Archive",
  },
];

const TIMINGS = [
  { day: "Monday – Friday", hours: "8:30 AM – 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const RULES = [
  "Silence must be maintained",
  "Bags not allowed inside (use lockers)",
  "2 books issued for 14 days",
  "Overdue fine ₹2/day per book",
  "Eatables not permitted",
  "ID card mandatory for entry",
];

const SERVICES = [
  {
    icon: Search,
    title: "OPAC Search",
    desc: "Search the catalog online",
  },
  {
    icon: RefreshCw,
    title: "Inter-Library Loan",
    desc: "Borrow from other DU libraries",
  },
  {
    icon: CalendarCheck,
    title: "Book Reservation",
    desc: "Reserve in-demand titles",
  },
  {
    icon: Copy,
    title: "Photocopy",
    desc: "Subsidized photocopying service",
  },
];

export function LibraryPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Re-run reveal scan on mount.
  useEffect(() => {
    const t = window.setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add("is-visible");
        });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="Dr. B.R. Ambedkar Library"
        title={
          <>
            A <span style={{ color: "#d4a04c" }}>Treasure</span> of Knowledge
          </>
        }
        description="1,20,000+ books, e-journals, digital archives and quiet study spaces — the intellectual heart of Shivaji College."
        image={HERO_IMG}
      />

      {/* ===== LIBRARY STATS STRIP ===== */}
      <Section bg="muted" className="!py-14 sm:!py-16">
        <div className="reveal">
          <SectionHeading
            eyebrow="By the Numbers"
            title={
              <>
                A <span style={{ color: "#d4a04c" }}>Wealth</span> of Resources
              </>
            }
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatItem value={120000} suffix="+" label="Books" />
          <StatItem value={25000} suffix="+" label="E-Journals" />
          <StatItem value={5000} suffix="+" label="Reference Titles" />
          <StatItem value={300} suffix="+" label="Seating Capacity" />
        </div>
      </Section>

      {/* ===== COLLECTIONS GRID ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Collections"
            title={
              <>
                Explore Our <span style={{ color: "#d4a04c" }}>Collections</span>
              </>
            }
            description="From textbooks to rare manuscripts, our shelves hold knowledge across every discipline taught at the college."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <div
              key={c.name}
              className="card-lift flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2744]/5">
                <c.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <h3 className="mt-5 font-serif text-[19px] font-bold text-[#1a2744]">
                {c.name}
              </h3>
              <p className="mt-1 font-sans text-[13px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                {c.count}
              </p>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== E-RESOURCES (navy) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="E-Resources"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Digital</span> Access
              </>
            }
            description="Members of the Shivaji College community enjoy free access to premium databases and academic repositories through the digital library."
            light
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {E_RESOURCES.map((name) => (
            <div
              key={name}
              className="card-lift flex items-center gap-3 rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                <Globe className="h-5 w-5 text-[#d4a04c]" />
              </div>
              <h3 className="font-serif text-[16px] font-semibold leading-snug text-white">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== LIBRARY GALLERY ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Spaces"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Study</span> Spaces
              </>
            }
            description="Bright, quiet and comfortable — our reading halls and specialised labs are designed for focused learning."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {GALLERY.map((g) => (
            <div
              key={g.label}
              className="gallery-item relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={g.src}
                alt={g.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/85 via-[#121c33]/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-sans text-[13px] font-semibold uppercase tracking-wide text-white">
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== TIMINGS + RULES ===== */}
      <Section bg="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — Timings */}
          <div className="reveal">
            <SectionHeading
              eyebrow="Hours"
              title={
                <>
                  <span style={{ color: "#d4a04c" }}>Timings</span>
                </>
              }
            />
            <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/[0.04]">
              <div className="flex items-center gap-3 border-b border-gray-100 bg-[#1a2744]/[0.03] px-5 py-4 sm:px-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                  <Clock className="h-5 w-5 text-[#d4a04c]" />
                </div>
                <h3 className="font-serif text-[17px] font-bold text-[#1a2744]">
                  Opening Hours
                </h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {TIMINGS.map((t) => (
                  <li
                    key={t.day}
                    className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
                  >
                    <span className="font-sans text-[14px] font-medium text-[#1a2744]">
                      {t.day}
                    </span>
                    <span className="font-sans text-[14px] font-semibold text-[#5a6478]">
                      {t.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#f7f5f0] px-5 py-3 sm:px-6">
                <p className="font-sans text-[12px] text-[#5a6478]">
                  Open on all working days except gazetted holidays.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Rules */}
          <div className="reveal">
            <SectionHeading
              eyebrow="Rules"
              title={
                <>
                  <span style={{ color: "#d4a04c" }}>Library</span> Etiquette
                </>
              }
            />
            <ul className="mt-6 space-y-3">
              {RULES.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/[0.03]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[14px] leading-relaxed text-[#1a2744]">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===== QUICK SERVICES ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Quick</span> Services
              </>
            }
            description="Member-friendly services that make borrowing, reserving and researching effortless."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="card-lift flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2744]/5">
                <s.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <h3 className="mt-5 font-serif text-[18px] font-bold text-[#1a2744]">
                {s.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {s.desc}
              </p>
              <button
                onClick={() => navigate("contact")}
                className="mt-4 inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA (navy) ===== */}
      <Section bg="navy" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Need help finding a <span style={{ color: "#d4a04c" }}>resource?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Our librarians are here to guide you — whether it is tracking down a
            rare reference or accessing an online database.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavOutlineButton to="contact" light>
              Contact Librarian
            </NavOutlineButton>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3 font-sans text-[15px] font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
