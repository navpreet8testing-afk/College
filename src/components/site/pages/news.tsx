"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Sparkles,
  Newspaper,
} from "lucide-react";
import { useRouter } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
} from "../ui";
import { NewsletterChip } from "../site-form";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/0565ef02136a.png";
const FEATURED_IMG = "https://sfile.chatglm.cn/images-ppt/340addfed4c5.jpg";

const IMG = (p: string) => `https://sfile.chatglm.cn/images-ppt/${p}`;

const CATEGORIES = [
  "All",
  "Achievements",
  "Academics",
  "Campus",
  "Research",
  "Sports",
  "Admissions",
] as const;

type Category = (typeof CATEGORIES)[number];

interface NewsItem {
  category: Exclude<Category, "All">;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const NEWS: NewsItem[] = [
  {
    category: "Achievements",
    title: "Shivaji College Team Wins National Hackathon 2025",
    date: "May 22, 2025",
    excerpt:
      "Team ByteSpartans from B.Sc. CS clinched first place at the Smart India Hackathon among 1,200+ teams nationwide.",
    image: IMG("afaf375d7649.jpg"),
  },
  {
    category: "Academics",
    title: "100% Placement Record for B.Sc. CS Batch 2025",
    date: "May 18, 2025",
    excerpt:
      "Every eligible graduate of the 2025 Computer Science batch secured offers with a record average package of ₹8.4 LPA.",
    image: IMG("492ca6a761d6.jpg"),
  },
  {
    category: "Campus",
    title: "Annual Cultural Fest 'Utsav' Draws 5,000+ Visitors",
    date: "May 10, 2025",
    excerpt:
      "Three days of music, dance, drama and food lit up the campus with star performances by celebrity alumni.",
    image: IMG("6fb3150be1c0.jpg"),
  },
  {
    category: "Research",
    title: "Faculty Patent Filed in Solar Cell Technology",
    date: "May 5, 2025",
    excerpt:
      "Dr. Anjali Verma's physics lab files a patent for a low-cost perovskite solar cell with 22% improved efficiency.",
    image: IMG("84bcb5cbdc3e.jpg"),
  },
  {
    category: "Sports",
    title: "Shivaji Cricket Team Wins Inter-College Championship",
    date: "Apr 28, 2025",
    excerpt:
      "A last-over thriller against St. Stephen's sealed the DU Inter-College Cricket trophy for Shivaji College.",
    image: IMG("be7526cd5b99.jpg"),
  },
  {
    category: "Admissions",
    title: "Admissions 2025-26: Applications Cross 12,000 Mark",
    date: "Apr 20, 2025",
    excerpt:
      "Within two weeks of opening, undergraduate applications have already crossed the 12,000 milestone across all streams.",
    image: IMG("87641eba9a3c.jpg"),
  },
  {
    category: "Achievements",
    title: "Three Students Selected for GATE 2025 with Top Ranks",
    date: "Apr 12, 2025",
    excerpt:
      "Two from Physics and one from Chemistry secured All-India ranks under 100 in the GATE 2025 examination.",
    image: IMG("c92d276efac6.jpg"),
  },
  {
    category: "Academics",
    title: "New Data Science Specialization Launched",
    date: "Apr 5, 2025",
    excerpt:
      "A new B.Sc. (Hons.) Computer Science with Data Science specialization rolls out from the 2025-26 session.",
    image: IMG("824625bd6028.png"),
  },
  {
    category: "Campus",
    title: "NCC Cadets Complete Annual Training Camp",
    date: "Mar 28, 2025",
    excerpt:
      "65 NCC cadets of the 5 DEL Girls and Boys Bn completed a rigorous 10-day annual training camp at Delhi Cantonment.",
    image: IMG("880a0bd2dabb.jpg"),
  },
];

const PRESS_RELEASES = [
  {
    title: "Shivaji College Signs MoU with IIT Delhi for Joint Research",
    date: "May 26, 2025",
    summary:
      "A five-year memorandum of understanding enabling joint supervision of Ph.D. scholars and shared lab access.",
  },
  {
    title: "NAAC Peer Team Visit Concludes Successfully",
    date: "May 14, 2025",
    summary:
      "The peer team completed its three-day reassessment visit, commending the college on infrastructure and outcomes.",
  },
  {
    title: "New Scholarship Scheme for First-Generation Learners",
    date: "Apr 30, 2025",
    summary:
      "Shivaji College announces 50 merit-cum-means scholarships for first-generation learners across all UG programs.",
  },
  {
    title: "Annual Convocation 2025 Scheduled for June 18",
    date: "Apr 22, 2025",
    summary:
      "Convocation for the 2024-25 graduating batch will be held at the Dr. B.R. Ambedkar Auditorium with full protocols.",
  },
];

const MEDIA_OUTLETS = [
  "The Times of India",
  "The Hindu",
  "Hindustan Times",
  "NDTV",
  "India Today",
  "ANI",
];

export function NewsPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState<Category>("All");

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

  const filtered =
    active === "All" ? NEWS : NEWS.filter((n) => n.category === active);

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="News & Media"
        title={
          <>
            The Latest from <span style={{ color: "#d4a04c" }}>Shivaji College</span>
          </>
        }
        description="Stories of achievement, innovation and campus life — straight from the heart of Shivaji College."
        image={HERO_IMG}
      />

      {/* ===== FEATURED STORY ===== */}
      <Section bg="white">
        <article className="reveal card-lift grid grid-cols-1 overflow-hidden rounded-xl bg-white shadow-sm lg:grid-cols-2">
          <div className="gallery-item relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
            <img
              src={FEATURED_IMG}
              alt="Shivaji College ranked among top 10 DU colleges by India Today 2025"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/40 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#d4a04c] px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white">
              <Sparkles className="h-3.5 w-3.5" />
              Featured
            </span>
            <div className="mt-4 flex items-center gap-2 font-sans text-[13px] text-[#5a6478]">
              <Calendar className="h-4 w-4" />
              May 28, 2025
            </div>
            <h2 className="mt-3 font-serif text-[24px] sm:text-[30px] font-bold leading-tight text-[#1a2744]">
              Shivaji College Ranked Among Top 10 DU Colleges by India Today
              2025
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-[#5a6478]">
              India Today's annual MDRA survey has placed Shivaji College among
              the top 10 colleges of Delhi University for 2025. The ranking
              recognizes excellence across academics, infrastructure, placements
              and research output. The Principal credited the milestone to the
              collective effort of faculty, students and staff over the past
              decade.
            </p>
            <button
              onClick={() => navigate("contact")}
              className="mt-6 inline-flex w-fit items-center gap-1.5 font-sans text-[14px] font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
            >
              Read Full Story
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      </Section>

      {/* ===== CATEGORY FILTER BAR ===== */}
      <Section bg="muted" className="!py-8 sm:!py-10">
        <div className="reveal flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 font-sans text-[13px] font-semibold transition-all ${
                  isActive
                    ? "bg-[#d4a04c] text-white shadow-sm"
                    : "bg-white text-[#1a2744] ring-1 ring-gray-200 hover:bg-[#1a2744] hover:text-white hover:ring-[#1a2744]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Section>

      {/* ===== NEWS GRID ===== */}
      <Section bg="white" className="!pt-0">
        <div className="reveal">
          <SectionHeading
            eyebrow="Latest News"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Recent</span> Stories
              </>
            }
            description="Browse the latest happenings, milestones and announcements from across the campus."
          />
        </div>

        <div className="reveal-stagger mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((n) => (
            <article
              key={n.title}
              className="card-lift flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="gallery-item relative aspect-[16/10] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded bg-[#d4a04c] px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 font-sans text-[12px] text-[#5a6478]">
                  <Calendar className="h-3.5 w-3.5" />
                  {n.date}
                </div>
                <h3 className="mt-2 font-serif text-[17px] font-bold leading-snug text-[#1a2744]">
                  {n.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                  {n.excerpt}
                </p>
                <button
                  onClick={() => navigate("contact")}
                  className="mt-4 inline-flex items-center gap-1.5 self-start font-sans text-[13px] font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
                >
                  Read More
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-sans text-[15px] text-[#5a6478]">
            No stories found in this category yet. Check back soon.
          </p>
        )}
      </Section>

      {/* ===== PRESS RELEASES ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Press"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Press Releases</span>
              </>
            }
            description="Official announcements and statements issued by the Shivaji College media office."
            light
          />
        </div>

        <div className="reveal-stagger mt-10 space-y-4">
          {PRESS_RELEASES.map((p) => (
            <article
              key={p.title}
              className="card-lift flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                <FileText className="h-5 w-5 text-[#d4a04c]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <h3 className="font-serif text-[17px] font-semibold text-white">
                    {p.title}
                  </h3>
                  <span className="font-sans text-[12px] font-medium text-[#d4a04c] sm:shrink-0">
                    {p.date}
                  </span>
                </div>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/70">
                  {p.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== MEDIA COVERAGE ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="In the Media"
            title={
              <>
                As Seen in <span style={{ color: "#d4a04c" }}>the Media</span>
              </>
            }
            description="Trusted national outlets regularly cover stories from Shivaji College."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {MEDIA_OUTLETS.map((name) => (
            <div
              key={name}
              className="card-lift flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-white px-3 text-center"
            >
              <span className="font-serif text-[14px] font-semibold leading-tight text-[#1a2744]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== NEWSLETTER CTA ===== */}
      <Section bg="navy" className="!py-16 sm:!py-20">
        <div className="reveal flex flex-col items-center gap-5 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a04c]/15">
            <Newspaper className="h-6 w-6 text-[#d4a04c]" />
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Never miss a <span style={{ color: "#d4a04c" }}>headline</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Subscribe to our weekly newsletter for the latest from campus.
          </p>
          <div className="w-full max-w-md">
            <NewsletterChip />
          </div>
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section bg="white" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[26px] sm:text-[32px] font-bold leading-tight text-[#1a2744]">
            Have a story to share?
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-[#5a6478]">
            Our Media Cell is always looking for student achievements, faculty
            milestones and campus moments worth celebrating.
          </p>
          <NavOutlineButton to="contact">Contact Media Cell</NavOutlineButton>
        </div>
      </Section>
    </div>
  );
}
