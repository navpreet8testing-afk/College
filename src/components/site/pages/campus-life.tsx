"use client";

import { useEffect } from "react";
import {
  Music,
  Drama,
  MessageSquare,
  Cpu,
  Trophy,
  Leaf,
  Library,
  Dumbbell,
  Building,
  Mic,
  Users,
} from "lucide-react";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavGoldButton,
  NavOutlineButton,
  IconBadge,
  BentoCard,
} from "../ui";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/6fb3150be1c0.jpg";

const GALLERY = [
  { src: "https://sfile.chatglm.cn/images-ppt/a20d3f17f618.jpg", label: "Sports Meet" },
  { src: "https://sfile.chatglm.cn/images-ppt/6fb3150be1c0.jpg", label: "Cultural Fest" },
  { src: "https://sfile.chatglm.cn/images-ppt/d52a41caff26.jpg", label: "Convocation" },
  { src: "https://sfile.chatglm.cn/images-ppt/0dbf7b79deb6.jpg", label: "Annual Day" },
  { src: "https://sfile.chatglm.cn/images-ppt/e080bd4729da.png", label: "Tech Symposium" },
  { src: "https://sfile.chatglm.cn/images-ppt/5cf1a100aaf3.jpg", label: "Workshops" },
  { src: "https://sfile.chatglm.cn/images-ppt/669534ac63fd.jpg", label: "Student Life" },
];

const CLUBS = [
  {
    icon: Music,
    name: "Music Society",
    desc: "Classical, folk and contemporary — the Music Society is the heartbeat of campus culture. From morning ragas to evening concerts, members perform at college festivals, inter-university competitions and community events throughout the year.",
    members: "320+",
  },
  {
    icon: Drama,
    name: "Drama Club",
    desc: "Stage plays, street theatre and improv nights.",
    members: "180+",
  },
  {
    icon: MessageSquare,
    name: "Debating Society",
    desc: "Inter-college debates, MUNs and public speaking.",
    members: "240+",
  },
  {
    icon: Cpu,
    name: "Tech Club",
    desc: "Hackathons, coding contests and AI workshops.",
    members: "410+",
  },
  {
    icon: Trophy,
    name: "Sports Council",
    desc: "Cricket, football, basketball, athletics and more.",
    members: "500+",
  },
  {
    icon: Leaf,
    name: "Eco Club",
    desc: "Sustainability drives, tree plantations and awareness.",
    members: "160+",
  },
];

const FACILITIES = [
  {
    icon: Library,
    title: "Library",
    desc: "1,20,000+ books, e-journals and digital archives across disciplines.",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    desc: "Indoor courts, gymnasium, athletic track and cricket ground.",
  },
  {
    icon: Building,
    title: "Hostels",
    desc: "Separate, secure hostels for boys and girls with 400+ seats.",
  },
  {
    icon: Mic,
    title: "Auditorium",
    desc: "750-seat air-conditioned auditorium for events and performances.",
  },
];

export function CampusLifePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Force-add .is-visible to above-the-fold reveals 100ms after mount,
  // matching the home page pattern.
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
        eyebrow="Campus Life"
        title={
          <>
            Learn. Grow. <span style={{ color: "#d4a04c" }}>Belong.</span>
          </>
        }
        description="From cultural festivals to sports events, vibrant clubs and modern facilities — life at Shivaji College is full of opportunities to discover yourself."
        image={HERO_IMG}
      />

      {/* ===== PHOTO GALLERY — asymmetric Bento ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Moments at <span style={{ color: "#d4a04c" }}>Shivaji</span>
              </>
            }
            description="A glimpse into everyday life, celebrations and achievements on campus."
          />
        </div>

        <div className="reveal-stagger mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {/* Large hero image — spans 2 cols & 2 rows */}
          <div className="gallery-item relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(26,39,68,0.22)] ring-1 ring-[#1a2744]/8">
            <img
              src={GALLERY[0].src}
              alt={GALLERY[0].label}
              className="h-full min-h-[340px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/85 via-[#121c33]/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="font-sans text-[15px] font-semibold uppercase tracking-[0.12em] text-white">
                {GALLERY[0].label}
              </span>
            </div>
          </div>

          {/* 4 standard tiles */}
          {GALLERY.slice(1, 5).map((g) => (
            <div
              key={g.label}
              className="gallery-item relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_4px_16px_-8px_rgba(26,39,68,0.18)] ring-1 ring-[#1a2744]/8"
            >
              <img src={g.src} alt={g.label} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
                  {g.label}
                </span>
              </div>
            </div>
          ))}

          {/* 2 wide tiles at bottom — each spans 2 cols on lg */}
          {GALLERY.slice(5, 7).map((g) => (
            <div
              key={g.label}
              className="gallery-item relative col-span-1 lg:col-span-2 aspect-[4/3] lg:aspect-[2/1] overflow-hidden rounded-2xl shadow-[0_4px_16px_-8px_rgba(26,39,68,0.18)] ring-1 ring-[#1a2744]/8"
            >
              <img src={g.src} alt={g.label} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CLUBS & SOCIETIES — Bento ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Clubs & Societies"
            title={
              <>
                Find Your <span style={{ color: "#d4a04c" }}>Tribe</span>
              </>
            }
            description="Over 30 student-run clubs and societies to explore your passions."
          />
        </div>

        <div className="reveal-stagger mt-12 bento-grid">
          {/* Hero card — Music Society (wide + 2 rows on lg) */}
          <div className="card-premium bento-wide lg:row-span-2 flex flex-col justify-between rounded-2xl bg-white p-8">
            <div>
              <IconBadge icon={Music} size="lg" />
              <h3 className="mt-5 font-serif text-[24px] font-bold text-[#1a2744]">
                Music Society
              </h3>
              <p className="mt-3 max-w-md font-sans text-[14px] leading-relaxed text-[#6b7280]">
                Classical, folk and contemporary — the Music Society is the
                heartbeat of campus culture. From morning ragas to evening
                concerts, members perform at college festivals, inter-university
                competitions and community events throughout the year.
              </p>
            </div>
            <div className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#d4a04c]/15 px-3 py-1">
              <Users className="h-3.5 w-3.5 text-[#b8862f]" />
              <span className="font-sans text-[12px] font-semibold text-[#b8862f]">
                Members: {CLUBS[0].members}
              </span>
            </div>
          </div>

          {/* Standard cards */}
          {CLUBS.slice(1).map((c) => (
            <BentoCard key={c.name} className="bento-narrow">
              <IconBadge icon={c.icon} />
              <h3 className="mt-5 font-serif text-[18px] font-bold text-[#1a2744]">
                {c.name}
              </h3>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#6b7280]">
                {c.desc}
              </p>
              <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#d4a04c]/15 px-3 py-1">
                <Users className="h-3.5 w-3.5 text-[#b8862f]" />
                <span className="font-sans text-[12px] font-semibold text-[#b8862f]">
                  Members: {c.members}
                </span>
              </div>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* ===== FACILITIES — glass Bento on navy ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Facilities"
            title={
              <>
                Modern <span style={{ color: "#d4a04c" }}>Infrastructure</span>
              </>
            }
            description="Spaces and resources designed to support every dimension of student life."
            light
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => (
            <div
              key={f.title}
              className="card-premium group flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md"
            >
              <IconBadge icon={f.icon} size="lg" light />
              <h3 className="mt-5 font-serif text-[20px] font-bold text-white">
                {f.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/70">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section bg="mesh">
        <div className="reveal flex flex-col items-center gap-7 text-center">
          <SectionHeading
            eyebrow="Visit Us"
            title={
              <>
                Experience it <span style={{ color: "#d4a04c" }}>yourself.</span>
              </>
            }
            description="Schedule a campus visit and see why students love calling Shivaji College home."
            align="center"
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavOutlineButton to="contact">Schedule a Visit</NavOutlineButton>
            <NavGoldButton to="admissions">Apply Now</NavGoldButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
