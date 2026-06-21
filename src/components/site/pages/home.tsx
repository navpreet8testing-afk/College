"use client";

import { useEffect } from "react";
import {
  Award,
  Users,
  Building2,
  BookMarked,
  Trophy,
  Globe2,
  HeartHandshake,
  UtensilsCrossed,
  ArrowRight,
  MapPin,
  Calendar,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { useRouter } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  NavGoldButton,
  NavOutlineButton,
  StatItem,
  IconBadge,
  BentoCard,
} from "../ui";
import {
  ArtsIllustration,
  ScienceIllustration,
  CommerceIllustration,
  ComputerScienceIllustration,
  PostgraduateIllustration,
  ResearchIllustration,
  type ProgramIllustrationKey,
} from "../program-illustrations";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/b0e5b2bab5f1.jpg";
const ABOUT_IMG = "https://sfile.chatglm.cn/images-ppt/91e7a9fbe8c6.jpg";
const PARALLAX_IMG = "https://sfile.chatglm.cn/images-ppt/a7215326c4e5.jpg";
const CAMPUS_STRIP_1 = "https://sfile.chatglm.cn/images-ppt/00fcb3970348.jpg";
const CAMPUS_STRIP_2 = "https://sfile.chatglm.cn/images-ppt/d52a41caff26.jpg";
const CAMPUS_STRIP_3 = "https://sfile.chatglm.cn/images-ppt/813d8df8f536.png";

interface ProgramCard {
  illustration: ProgramIllustrationKey;
  title: string;
  desc: string;
  longDesc: string;
  bg: string;
  accent: string; // hex color for the "Explore" link + icon border
  page: "academics" | "research";
}

const PROGRAMS: ProgramCard[] = [
  {
    illustration: "arts",
    title: "Arts & Humanities",
    desc: "Humanities, languages and social sciences.",
    longDesc: "English, Hindi, Political Science, History, Sanskrit and Economics — shaping critical thinkers, writers and leaders.",
    bg: "https://sfile.chatglm.cn/images-ppt/b4a13dd3f382.jpg",
    accent: "#d4a04c",
    page: "academics",
  },
  {
    illustration: "science",
    title: "Science",
    desc: "Physics, Chemistry, Botany, Zoology & Maths.",
    longDesc: "Modern labs, fieldwork and research from semester one — built for curious minds who love discovery.",
    bg: "https://sfile.chatglm.cn/images-ppt/b42e3820684d.jpg",
    accent: "#5b8def",
    page: "academics",
  },
  {
    illustration: "commerce",
    title: "Commerce",
    desc: "Accounting, finance & business management.",
    longDesc: "Build the foundation for careers in finance, accounting, entrepreneurship and analytics.",
    bg: "https://sfile.chatglm.cn/images-ppt/1c0a68184798.jpg",
    accent: "#d4a04c",
    page: "academics",
  },
  {
    illustration: "computer-science",
    title: "Computer Science",
    desc: "CS, IT & data science with industry tie-ups.",
    longDesc: "Code, build and ship — specializations in CS, IT and Data Science with 100% placement record.",
    bg: "https://sfile.chatglm.cn/images-ppt/90a1769aa00c.jpg",
    accent: "#2dd4bf",
    page: "academics",
  },
  {
    illustration: "postgraduate",
    title: "Postgraduate",
    desc: "M.A., M.Sc. & M.Com across streams.",
    longDesc: "Advanced master's programs with a research focus — deepen your expertise and specialize.",
    bg: "https://sfile.chatglm.cn/images-ppt/eb6b6fbeda7f.jpg",
    accent: "#a78bfa",
    page: "academics",
  },
  {
    illustration: "research",
    title: "Research",
    desc: "M.Phil & Ph.D. across all disciplines.",
    longDesc: "25+ research centers, 400+ publications, 60+ funded projects and ₹5.2 Cr+ in active funding.",
    bg: "https://sfile.chatglm.cn/images-ppt/84bcb5cbdc3e.jpg",
    accent: "#f472b6",
    page: "research",
  },
];

const PROGRAM_ILLUST_MAP: Record<ProgramIllustrationKey, React.ComponentType<{ className?: string }>> = {
  arts: ArtsIllustration,
  science: ScienceIllustration,
  commerce: CommerceIllustration,
  "computer-science": ComputerScienceIllustration,
  postgraduate: PostgraduateIllustration,
  research: ResearchIllustration,
};

const WHY_CHOOSE = [
  { icon: Users, title: "Experienced Faculty", desc: "100+ PhD-qualified scholars guiding every learner." },
  { icon: Building2, title: "Modern Infrastructure", desc: "Smart classrooms and advanced laboratories." },
  { icon: Trophy, title: "Placement Support", desc: "Dedicated cell with top recruiters every year." },
  { icon: HeartHandshake, title: "Value-Based Education", desc: "Ethics, integrity and social responsibility." },
  { icon: BookMarked, title: "Vibrant Campus Life", desc: "200+ events, fests and societies annually." },
  { icon: UtensilsCrossed, title: "Vibrant Canteen", desc: "Hygienic, affordable and diverse meals." },
  { icon: Globe2, title: "Global Exposure", desc: "Exchange programs and international collaborations." },
];

const GALLERY = [
  { src: "https://sfile.chatglm.cn/images-ppt/a20d3f17f618.jpg", label: "Sports Meet" },
  { src: "https://sfile.chatglm.cn/images-ppt/6fb3150be1c0.jpg", label: "Cultural Fest" },
  { src: "https://sfile.chatglm.cn/images-ppt/d52a41caff26.jpg", label: "Convocation" },
  { src: "https://sfile.chatglm.cn/images-ppt/0dbf7b79deb6.jpg", label: "Annual Day" },
  { src: "https://sfile.chatglm.cn/images-ppt/390964ae905c.jpg", label: "Athletics" },
  { src: "https://sfile.chatglm.cn/images-ppt/669534ac63fd.jpg", label: "Student Life" },
];

const NEWS = [
  { src: "https://sfile.chatglm.cn/images-ppt/d52a41caff26.jpg", tag: "EVENT", title: "Annual Convocation 2025 Celebrates 1,200+ Graduates", date: "May 12, 2025" },
  { src: "https://sfile.chatglm.cn/images-ppt/340addfed4c5.jpg", tag: "NEWS", title: "Shivaji College Ranked Among Top 10 in Delhi University", date: "Apr 28, 2025" },
  { src: "https://sfile.chatglm.cn/images-ppt/afaf375d7649.jpg", tag: "EVENT", title: "National Seminar on Sustainable Innovation & Research", date: "Apr 15, 2025" },
];

export function HomePage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();

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
      <section className="group relative w-full overflow-hidden">
        <div className="relative h-[82vh] min-h-[540px] w-full">
          <img
            src={HERO_IMG}
            alt="Shivaji College campus architecture"
            className="hero-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121c33]/88 via-[#1a2744]/65 to-[#1a2744]/35" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="hero-animate flex items-center gap-2.5">
                <span className="inline-block h-px w-7 bg-[#d4a04c]" />
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-[#d4a04c]">
                  Welcome to Shivaji College
                </p>
              </div>
              <h1
                className="hero-animate mt-4 font-serif text-[42px] sm:text-[58px] lg:text-[64px] font-extrabold leading-[1.04] text-white"
                style={{ animationDelay: "0.18s" }}
              >
                Shaping Futures.
                <br />
                <span style={{ color: "#d4a04c" }}>Building Leaders.</span>
              </h1>
              <p
                className="hero-animate mt-6 max-w-xl font-sans text-[16px] leading-relaxed text-white/85"
                style={{ animationDelay: "0.32s" }}
              >
                Six decades of academic excellence, innovation and holistic
                development — preparing students for a successful tomorrow.
              </p>
              <div
                className="hero-animate mt-8 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "0.46s" }}
              >
                <NavGoldButton to="academics">Explore Programs</NavGoldButton>
                <NavOutlineButton to="campus-life" light>
                  <MapPin className="h-4 w-4" />
                  Visit Campus
                </NavOutlineButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US PREVIEW — Bento ===== */}
      <Section bg="mesh">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <SectionHeading
              eyebrow="About Us"
              title={<>A Legacy of <span style={{ color: "#d4a04c" }}>Excellence</span> Since 1962</>}
            />
            <p className="mt-5 font-sans text-[16px] leading-relaxed text-[#6b7280]">
              With a rich heritage of over six decades, Shivaji College has been
              a center of quality education, holistic development and cultural
              values. We nurture curious minds and shape responsible citizens
              who lead with integrity.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              <StatItem value={60} suffix="+" label="Years of Excellence" />
              <StatItem value={25} suffix="+" label="Academic Programs" />
              <StatItem value={15000} suffix="+" label="Alumni Network" />
              <StatItem value={100} suffix="+" label="Expert Faculty" />
            </div>

            <div className="mt-8">
              <NavGoldButton to="about">Know More About Us</NavGoldButton>
            </div>
          </div>

          <div className="reveal relative">
            <div className="gallery-item overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(26,39,68,0.25)] ring-1 ring-[#1a2744]/8">
              <img
                src={ABOUT_IMG}
                alt="Students at Shivaji College"
                className="h-[440px] w-full object-cover"
              />
            </div>
            {/* NAAC badge — glassmorphism */}
            <div className="absolute -bottom-5 -left-5 sm:-left-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#1a2744]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <Award className="h-9 w-9 text-[#d4a04c]" />
              <div>
                <div className="font-serif text-[15px] font-bold text-white">
                  NAAC A+ Accredited
                </div>
                <div className="font-sans text-[12px] text-white/65">
                  Re-accredited with 3.28 CGPA
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== ACADEMICS / PROGRAMS (navy mesh) — Bento ===== */}
      <Section bg="navy">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Academics"
            title={<>Explore Our <span style={{ color: "#d4a04c" }}>Programs</span></>}
            description="Undergraduate, postgraduate and research programs designed to inspire and empower."
            light
          />
          <button
            onClick={() => navigate("academics")}
            className="btn-outline-light inline-flex shrink-0 items-center gap-2 border border-white/25 px-5 py-2.5 font-sans text-[14px] font-semibold text-white hover:bg-white hover:text-[#1a2744]"
          >
            View All Programs
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bento grid — full-bleed image cards with dark overlays,
            color-coded accents, hover zoom + auto-appear animations.
            Row 1: Arts (wide span 3) + Science (narrow span 3) = 6 cols
            Row 2: Commerce + CS + Postgraduate (each span 2) = 6 cols
            Row 3: Research (full-width banner span 6) */}
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {/* Arts — wide hero card (span 3) */}
          {(() => {
            const p = PROGRAMS[0];
            const Illust = PROGRAM_ILLUST_MAP[p.illustration];
            return (
              <button
                onClick={() => navigate(p.page)}
                className="group relative col-span-1 flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 text-left sm:col-span-2 lg:col-span-3"
              >
                <img
                  src={p.bg}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1730] via-[#121c33]/80 to-[#121c33]/30 transition-opacity duration-500 group-hover:from-[#0e1730] group-hover:via-[#121c33]/85" />
                <div className="relative p-7">
                  <h3 className="font-serif text-[26px] font-bold text-white">{p.title}</h3>
                  <p className="mt-2 max-w-md font-sans text-[14px] leading-relaxed text-white/80">{p.longDesc}</p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold transition-colors"
                    style={{ color: p.accent }}
                  >
                    Explore program
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </button>
            );
          })()}
          {/* Science — narrow (span 3) */}
          {(() => {
            const p = PROGRAMS[1];
            const Illust = PROGRAM_ILLUST_MAP[p.illustration];
            return (
              <button
                onClick={() => navigate(p.page)}
                className="group relative col-span-1 flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 text-left sm:col-span-2 lg:col-span-3"
              >
                <img
                  src={p.bg}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1730] via-[#121c33]/80 to-[#121c33]/30 transition-opacity duration-500 group-hover:from-[#0e1730] group-hover:via-[#121c33]/85" />
                <div className="relative p-7">
                  <h3 className="mt-5 font-serif text-[22px] font-bold text-white">{p.title}</h3>
                  <p className="mt-2 max-w-md font-sans text-[14px] leading-relaxed text-white/80">{p.longDesc}</p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold transition-colors"
                    style={{ color: p.accent }}
                  >
                    Explore program
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </button>
            );
          })()}
          {/* Row 2: Commerce + Computer Science + Postgraduate (each span 2) */}
          {PROGRAMS.slice(2, 5).map((p) => {
            const Illust = PROGRAM_ILLUST_MAP[p.illustration];
            return (
              <button
                key={p.title}
                onClick={() => navigate(p.page)}
                className="group relative col-span-1 flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 text-left sm:col-span-1 lg:col-span-2"
              >
                <img
                  src={p.bg}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1730] via-[#121c33]/80 to-[#121c33]/25 transition-opacity duration-500 group-hover:from-[#0e1730] group-hover:via-[#121c33]/85" />
                <div className="relative p-6">
                  <h3 className="font-serif text-[19px] font-bold text-white">{p.title}</h3>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-white/75">{p.longDesc}</p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold transition-colors"
                    style={{ color: p.accent }}
                  >
                    Explore program
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </button>
            );
          })}
          {/* Row 3: Research — full-width feature banner (span 6) */}
          {(() => {
            const p = PROGRAMS[5];
            const Illust = PROGRAM_ILLUST_MAP[p.illustration];
            return (
              <button
                onClick={() => navigate(p.page)}
                className="group relative col-span-1 flex min-h-[200px] flex-col justify-center overflow-hidden rounded-2xl border border-white/10 text-left sm:col-span-2 lg:col-span-6"
              >
                <img
                  src={p.bg}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e1730] via-[#121c33]/85 to-[#121c33]/50 transition-opacity duration-500" />
                <div className="relative flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-serif text-[22px] font-bold text-white">{p.title}</h3>
                    <p className="mt-2 max-w-2xl font-sans text-[14px] leading-relaxed text-white/80">{p.longDesc}</p>
                  </div>
                  <span
                    className="inline-flex shrink-0 items-center gap-1.5 font-sans text-[13px] font-semibold transition-colors"
                    style={{ color: p.accent }}
                  >
                    Explore research
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </button>
            );
          })()}
        </div>
      </Section>

      {/* ===== PARALLAX QUOTE BAND ===== */}
      <section
        className="grain-bg relative w-full overflow-hidden bg-fixed py-28 sm:py-36"
        style={{ backgroundImage: `url(${PARALLAX_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#121c33]/88" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal">
            <Quote className="mx-auto h-10 w-10 text-[#d4a04c]" />
            <p className="mt-6 font-serif text-[26px] font-semibold leading-snug text-white sm:text-[34px]">
              Education is the most powerful weapon which you can use to change the world.
            </p>
            <p className="mt-6 font-sans text-[12px] uppercase tracking-[0.24em] text-[#d4a04c]">
              — Inspired by the vision of our founders, 1962
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — Bento ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Experience Beyond <span style={{ color: "#d4a04c" }}>Classroom</span></>}
            description="Seven reasons why thousands of students call Shivaji College their academic home."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 bento-grid">
          {/* First card — wide hero */}
          <BentoCard className="bento-wide !p-8">
            <IconBadge icon={Users} size="lg" />
            <h3 className="mt-5 font-serif text-[22px] font-bold text-[#1a2744]">Experienced Faculty</h3>
            <p className="mt-2 max-w-md font-sans text-[14px] leading-relaxed text-[#6b7280]">
              100+ PhD-qualified scholars who don't just teach — they mentor, inspire and walk every step with you. Our faculty are researchers, authors and industry experts.
            </p>
          </BentoCard>
          {WHY_CHOOSE.slice(1).map((f) => (
            <BentoCard key={f.title} className="bento-narrow">
              <IconBadge icon={f.icon} />
              <h3 className="mt-5 font-serif text-[16px] font-bold text-[#1a2744]">{f.title}</h3>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#6b7280]">{f.desc}</p>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* ===== CAMPUS LIFE — asymmetric gallery ===== */}
      <Section bg="white">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Campus Life"
            title={<>Learn. Grow. <span style={{ color: "#d4a04c" }}>Belong.</span></>}
            description="From cultural festivals to sports events, life at Shivaji College is vibrant and full of opportunities."
          />
          <button
            onClick={() => navigate("campus-life")}
            className="btn-navy inline-flex shrink-0 items-center gap-2 bg-gradient-to-b from-[#1a2744] to-[#15203a] px-5 py-2.5 font-sans text-[14px] font-semibold text-white"
          >
            Explore Campus Life
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Asymmetric gallery: 1 large + 2 small top, 3 small bottom */}
        <div className="reveal-stagger mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large hero image — spans 2 cols & 2 rows */}
          <div className="gallery-item relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(26,39,68,0.2)] ring-1 ring-[#1a2744]/8">
            <img src={GALLERY[0].src} alt={GALLERY[0].label} className="h-full min-h-[320px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <span className="font-sans text-[14px] font-semibold uppercase tracking-wide text-white">{GALLERY[0].label}</span>
            </div>
          </div>
          {GALLERY.slice(1, 5).map((g) => (
            <div
              key={g.label}
              className="gallery-item relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_4px_16px_-8px_rgba(26,39,68,0.18)] ring-1 ring-[#1a2744]/8"
            >
              <img src={g.src} alt={g.label} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-wide text-white">{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CAMPUS STORIES — image feature strip ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Campus Stories"
            title={<>Moments that <span style={{ color: "#d4a04c" }}>Define Us</span></>}
            description="A picture is worth a thousand words — here are three stories from our campus."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { src: CAMPUS_STRIP_1, tag: "Academics", title: "Where Minds Meet", text: "From spirited classroom debates to late-night library sessions, learning here is a shared journey." },
            { src: CAMPUS_STRIP_2, tag: "Achievement", title: "Caps in the Air", text: "Every convocation, 1,200+ graduates step into the world — ready to lead, serve and transform." },
            { src: CAMPUS_STRIP_3, tag: "Community", title: "A Vibrant Family", text: "Cultural fests, sports meets, hackathons — there's always something happening, and everyone belongs." },
          ].map((s) => (
            <article
              key={s.title}
              className="card-premium group overflow-hidden rounded-2xl bg-white"
            >
              <div className="gallery-item relative aspect-[16/11] overflow-hidden">
                <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-[#d4a04c] px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[19px] font-bold text-[#1a2744]">{s.title}</h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6b7280]">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== NEWS & EVENTS ===== */}
      <Section bg="mesh">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="News & Events"
            title={<>Stay <span style={{ color: "#d4a04c" }}>Updated</span></>}
          />
          <button
            onClick={() => navigate("news")}
            className="btn-outline inline-flex shrink-0 items-center gap-2 border border-[#1a2744]/15 px-5 py-2.5 font-sans text-[14px] font-semibold text-[#1a2744] hover:border-[#1a2744]/40 hover:bg-[#1a2744] hover:text-white"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="reveal-stagger mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="card-premium group overflow-hidden rounded-2xl bg-white"
            >
              <div className="gallery-item relative aspect-[16/10] overflow-hidden">
                <img src={n.src} alt={n.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-[#d4a04c] px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                  {n.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 font-sans text-[12px] text-[#6b7280]">
                  <Calendar className="h-3.5 w-3.5" />
                  {n.date}
                </div>
                <h3 className="mt-2 font-serif text-[17px] font-bold leading-snug text-[#1a2744]">{n.title}</h3>
                <button
                  onClick={() => navigate("news")}
                  className="mt-3 inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[#b8862f] hover:text-[#1a2744]"
                >
                  Read More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section bg="navy" className="!py-20">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[30px] sm:text-[40px] font-bold leading-tight text-white">
            Your future starts here.{" "}
            <span style={{ color: "#d4a04c" }}>Join Shivaji College.</span>
          </h2>
          <p className="max-w-xl font-sans text-[16px] text-white/72">
            Applications for the 2025-26 academic session are now open. Take the first step toward a transformative education.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("admissions")}
              className="btn-gold inline-flex items-center gap-2 bg-gradient-to-b from-[#d4a04c] to-[#c9963f] px-7 py-3.5 font-sans text-[15px] font-semibold text-white"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="btn-outline-light inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 font-sans text-[15px] font-semibold text-white hover:bg-white hover:text-[#1a2744]"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
