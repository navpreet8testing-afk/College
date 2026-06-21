"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  Scale,
  Scroll,
  Atom,
  FlaskConical,
  Calculator,
  Leaf,
  BarChart3,
  Laptop,
  GraduationCap,
  Microscope,
  Search,
  X,
  ArrowRight,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  FileCheck2,
  Upload,
  Users2,
  CreditCard,
  Briefcase,
  Sparkles,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavGoldButton,
  NavOutlineButton,
  StatItem,
  IconBadge,
} from "../ui";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/2eb639974406.jpg";
const LAB_PARALLAX_IMG = "https://sfile.chatglm.cn/images-ppt/a05ae7e63413.jpg";

/* ----------------------------- Course data ----------------------------- */

interface Course {
  id: number;
  icon: LucideIcon;
  name: string;
  short: string;
  duration: string;
  eligibility: string;
  fee: string;
  seats: string;
  about: string;
  syllabus: string[];
  careers: string[];
}

const COURSES: Course[] = [
  {
    id: 1,
    icon: BookOpen,
    name: "B.A. (Hons) English",
    short: "Literature, language and critical thinking.",
    duration: "3 Years",
    eligibility: "10+2 with 50%",
    fee: "₹18,000 / yr",
    seats: "60",
    about:
      "A rigorous immersion in literatures from across the world, literary theory and the craft of writing. Students sharpen analytical, interpretive and communication skills that open doors to media, academia, public policy and beyond. The program balances classical texts with contemporary voices and creative practice.",
    syllabus: [
      "British Literature — Chaucer to Romantic Age",
      "Indian Writing in English & Translation",
      "Literary Theory & Criticism",
      "American & Postcolonial Literature",
      "Creative Writing & Composition",
      "Linguistics & Phonetics",
    ],
    careers: [
      "Civil Services & UPSC",
      "Journalism & Publishing",
      "Content Strategy & Copywriting",
      "Higher Studies & Academia",
    ],
  },
  {
    id: 2,
    icon: Scale,
    name: "B.A. (Hons) Political Science",
    short: "Governance, polity and international relations.",
    duration: "3 Years",
    eligibility: "10+2 with 50%",
    fee: "₹17,500 / yr",
    seats: "55",
    about:
      "An in-depth study of political theory, Indian government, comparative politics and international relations. The program cultivates informed citizenship and analytical rigour through seminars, policy labs and fieldwork. Graduates are well-equipped for public service, law, diplomacy and research.",
    syllabus: [
      "Indian Government & Politics",
      "Political Theory & Thought",
      "Comparative Political Systems",
      "International Relations",
      "Public Administration",
      "Global Governance & Diplomacy",
    ],
    careers: [
      "Civil Services & Policy Analysis",
      "Law & Legal Research",
      "Journalism & Political Reporting",
      "NGOs & Think Tanks",
    ],
  },
  {
    id: 3,
    icon: Scroll,
    name: "B.A. (Hons) History",
    short: "Understanding the past to shape the future.",
    duration: "3 Years",
    eligibility: "10+2 with 50%",
    fee: "₹17,000 / yr",
    seats: "50",
    about:
      "A wide-ranging journey through ancient, medieval and modern histories of India and the world. Students learn to read primary sources, weigh evidence and construct nuanced narratives. The curriculum places special emphasis on cultural, social and economic history alongside archival methods.",
    syllabus: [
      "Ancient & Medieval India",
      "Modern India — 1757 to 1947",
      "History of the World — 1500+",
      "Historiography & Methods",
      "Art, Architecture & Culture",
      "Indian Freedom Struggle",
    ],
    careers: [
      "Archaeology & Museology",
      "Civil Services & Public Policy",
      "Heritage & Conservation",
      "Teaching & Research",
    ],
  },
  {
    id: 4,
    icon: Atom,
    name: "B.Sc. (Hons) Physics",
    short: "From quantum mechanics to astrophysics.",
    duration: "3 Years",
    eligibility: "10+2 Science, 55%",
    fee: "₹22,000 / yr",
    seats: "48",
    about:
      "A foundational and advanced study of classical and modern physics, from mechanics and electromagnetism to quantum theory and astrophysics. Students gain hands-on laboratory experience and computational modelling skills. The program is a launchpad for research, engineering and data science careers.",
    syllabus: [
      "Classical Mechanics & Relativity",
      "Quantum & Statistical Physics",
      "Electromagnetism & Optics",
      "Thermodynamics & Solid State",
      "Astrophysics & Cosmology",
      "Computational Physics Lab",
    ],
    careers: [
      "Research & Doctoral Studies",
      "Data Science & Analytics",
      "Engineering & Electronics",
      "Banking & Quant Finance",
    ],
  },
  {
    id: 5,
    icon: FlaskConical,
    name: "B.Sc. (Hons) Chemistry",
    short: "Organic, inorganic and physical chemistry.",
    duration: "3 Years",
    eligibility: "10+2 Science, 55%",
    fee: "₹23,000 / yr",
    seats: "48",
    about:
      "A comprehensive program spanning organic, inorganic and physical chemistry with strong laboratory training. Students explore molecular structure, reaction mechanisms and analytical techniques. Graduates thrive in pharmaceuticals, materials science, research and quality control.",
    syllabus: [
      "Organic Chemistry & Mechanisms",
      "Inorganic & Coordination Chemistry",
      "Physical & Analytical Chemistry",
      "Spectroscopy & Instrumentation",
      "Polymer & Material Chemistry",
      "Green & Environmental Chemistry",
    ],
    careers: [
      "Pharma & Drug Research",
      "Chemical & Petrochemical Industry",
      "Quality Control & Forensics",
      "Higher Studies & Academia",
    ],
  },
  {
    id: 6,
    icon: Calculator,
    name: "B.Sc. (Hons) Mathematics",
    short: "Pure & applied mathematics, statistics.",
    duration: "3 Years",
    eligibility: "10+2 Science, 55%",
    fee: "₹20,000 / yr",
    seats: "40",
    about:
      "A rigorous grounding in pure and applied mathematics, from calculus and algebra to topology, statistics and numerical methods. Students develop abstract reasoning and quantitative problem-solving abilities. The program opens pathways to research, actuarial science, finance and technology.",
    syllabus: [
      "Real & Complex Analysis",
      "Abstract & Linear Algebra",
      "Differential Equations & Modelling",
      "Probability & Statistics",
      "Numerical Methods & Programming",
      "Topology & Differential Geometry",
    ],
    careers: [
      "Data Science & Machine Learning",
      "Actuarial & Quant Finance",
      "Operations Research",
      "Teaching & Research",
    ],
  },
  {
    id: 7,
    icon: Leaf,
    name: "B.Sc. (Hons) Botany",
    short: "Plant sciences, ecology and biotechnology.",
    duration: "3 Years",
    eligibility: "10+2 Science, 55%",
    fee: "₹21,500 / yr",
    seats: "40",
    about:
      "An immersive study of plant biology — from molecular and cellular processes to ecology, taxonomy and biotechnology. Field trips and laboratory work bring the curriculum to life with living collections. Graduates are prepared for research, agriculture, environment and biotech sectors.",
    syllabus: [
      "Plant Anatomy & Morphology",
      "Plant Physiology & Biochemistry",
      "Taxonomy & Systematics",
      "Ecology & Environment",
      "Genetics & Plant Breeding",
      "Plant Biotechnology & Microbiology",
    ],
    careers: [
      "Agriculture & Forestry",
      "Environment & Conservation",
      "Pharma & Biotech Research",
      "Higher Studies & Academia",
    ],
  },
  {
    id: 8,
    icon: BarChart3,
    name: "B.Com (Hons)",
    short: "Accounting, finance and business management.",
    duration: "3 Years",
    eligibility: "10+2 with 50%",
    fee: "₹24,000 / yr",
    seats: "120",
    about:
      "A future-ready commerce program integrating accounting, finance, taxation and business management. The curriculum blends theory with case studies, internships and industry projects. Graduates pursue careers in accounting, banking, consulting and entrepreneurship.",
    syllabus: [
      "Financial & Corporate Accounting",
      "Business Statistics & Research",
      "Corporate & Taxation Law",
      "Financial Management & Markets",
      "Marketing & Human Resource",
      "Auditing & International Business",
    ],
    careers: [
      "Chartered Accountancy & Audit",
      "Banking & Financial Services",
      "Management Consulting",
      "Entrepreneurship & Startups",
    ],
  },
  {
    id: 9,
    icon: Laptop,
    name: "B.Sc. Computer Science",
    short: "CS, IT and data science with industry tie-ups.",
    duration: "3 Years",
    eligibility: "10+2 Science, 55%",
    fee: "₹28,000 / yr",
    seats: "60",
    about:
      "A hands-on program in computer science, software engineering and data science, designed with industry partners. Students build real systems across web, mobile and AI while mastering fundamentals. The curriculum is updated each year to track emerging technologies and hiring trends.",
    syllabus: [
      "Programming & Data Structures",
      "Operating Systems & Networks",
      "DBMS & Software Engineering",
      "Machine Learning & AI",
      "Web & Mobile Development",
      "Cloud Computing & Security",
    ],
    careers: [
      "Software Engineering",
      "Data Science & AI",
      "Product & UX Design",
      "Cloud & DevOps",
    ],
  },
  {
    id: 10,
    icon: GraduationCap,
    name: "M.A. (Postgraduate)",
    short: "Master's in Arts, English, History, Pol Science.",
    duration: "2 Years",
    eligibility: "Bachelor's degree, 50%",
    fee: "₹26,000 / yr",
    seats: "80",
    about:
      "Advanced master's programs across English, History and Political Science with a research-led curriculum. Students engage with seminars, dissertations and interdisciplinary electives. The program is ideal for aspiring academicians, researchers and thought leaders.",
    syllabus: [
      "Advanced Literary / Historical Theory",
      "Research Methodology",
      "Specialisation Electives",
      "Dissertation & Viva",
      "Interdisciplinary Seminars",
      "Fieldwork & Archival Study",
    ],
    careers: [
      "College & University Teaching",
      "Research Fellowships",
      "Civil Services & Policy",
      "Publishing & Media",
    ],
  },
  {
    id: 11,
    icon: Microscope,
    name: "M.Sc. (Postgraduate)",
    short: "Master's in Physics, Chemistry, Maths, Botany.",
    duration: "2 Years",
    eligibility: "B.Sc., 50%",
    fee: "₹30,000 / yr",
    seats: "90",
    about:
      "Specialised master's programs across Physics, Chemistry, Mathematics and Botany, anchored in laboratory and computational research. Students work closely with faculty mentors on funded projects and publications. The program is a stepping stone to doctoral research and R&D careers.",
    syllabus: [
      "Advanced Core & Specialisation Papers",
      "Research Methodology & Ethics",
      "Laboratory & Instrumentation",
      "Dissertation & Publications",
      "Seminars & Conferences",
      "Industry / Institute Internship",
    ],
    careers: [
      "Doctoral Research & Academia",
      "R&D in Industry",
      "Scientific Instrumentation",
      "Analytics & Modelling",
    ],
  },
  {
    id: 12,
    icon: Search,
    name: "Ph.D. (Research)",
    short: "Doctoral research across all disciplines.",
    duration: "3–5 Years",
    eligibility: "Master's degree, 55%",
    fee: "₹35,000 / yr",
    seats: "Open",
    about:
      "A doctoral program that nurtures original research across the sciences, humanities and commerce. Scholars work with experienced guides, access national and international collaborations, and publish in peer-reviewed journals. The program supports fellowships, travel grants and a vibrant research culture.",
    syllabus: [
      "Coursework & Comprehensive Exam",
      "Research Proposal & Synopsis",
      "Original Research & Fieldwork",
      "Peer-Reviewed Publications",
      "Thesis Submission & Viva",
      "Conference Presentations",
    ],
    careers: [
      "University Faculty",
      "Senior Research Scientist",
      "Policy & Think Tank Roles",
      "Entrepreneurship & Consulting",
    ],
  },
];

/* Apply-procedure steps shared by every course modal */
const APPLY_STEPS = [
  { icon: FileCheck2, label: "Register online", sub: "Create your applicant portal" },
  { icon: Upload, label: "Upload documents", sub: "Marksheets, ID & photo" },
  { icon: Users2, label: "Merit & counselling", sub: "Seat allotment on merit" },
  { icon: CreditCard, label: "Pay & enroll", sub: "Confirm your admission" },
];

const FACULTY = [
  { name: "Dr. Anita Desai", designation: "Professor & Head", department: "English", initials: "AD" },
  { name: "Dr. Vikram Rao", designation: "Professor", department: "Physics", initials: "VR" },
  { name: "Dr. Meera Nair", designation: "Associate Professor", department: "Commerce", initials: "MN" },
  { name: "Dr. Sanjay Gupta", designation: "Professor", department: "Computer Science", initials: "SG" },
];

/* ------------------------------- Page ------------------------------- */

export function AcademicsPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [openCourseId, setOpenCourseId] = useState<number | null>(null);

  // Force-reveal above-the-fold elements on mount (matches home.tsx pattern).
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

  // Lock body scroll when modal is open + Esc to close.
  useEffect(() => {
    if (openCourseId === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCourseId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openCourseId]);

  const openCourse = COURSES.find((c) => c.id === openCourseId) ?? null;
  const heroCourse = COURSES[0];

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== 1. PAGE HERO ===== */}
      <PageHero
        eyebrow="Academics"
        title={
          <>
            Academic <span style={{ color: "#d4a04c" }}>Excellence</span>
          </>
        }
        description="Rigorous, future-ready programs across 6 streams — taught by 100+ PhD-qualified faculty in modern labs and smart classrooms."
        image={HERO_IMG}
      />

      {/* ===== 2. GLASSMORPHISM STATS STRIP ===== */}
      <Section bg="navy" className="!py-14 sm:!py-16">
        <div className="reveal-stagger grid grid-cols-2 gap-6 rounded-2xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-md sm:grid-cols-4 sm:p-10">
          <StatItem value={25} suffix="+" label="Programs" light />
          <StatItem value={100} suffix="+" label="Faculty" light />
          <StatItem value={15} suffix=":1" label="Student Ratio" light />
          <StatItem value={100} suffix="%" label="Placements" light />
        </div>
      </Section>

      {/* ===== 3. PROGRAMS — BENTO GRID ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Programs"
            title={
              <>
                Explore Our <span style={{ color: "#d4a04c" }}>Programs</span>
              </>
            }
            description="Twelve undergraduate, postgraduate and doctoral programs — each designed to inspire curiosity, build expertise and unlock careers."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 bento-grid">
          {/* Hero course card — B.A. (Hons) English — wide */}
          <article className="card-premium bento-wide group flex flex-col rounded-2xl border border-[#1a2744]/8 bg-white p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <IconBadge icon={heroCourse.icon} size="lg" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a04c]/30 bg-[#d4a04c]/10 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#b8862f]">
                <Sparkles className="h-3 w-3" />
                Flagship
              </span>
            </div>
            <h3 className="mt-5 font-serif text-[26px] font-bold leading-tight text-[#1a2744] sm:text-[28px]">
              {heroCourse.name}
            </h3>
            <p className="mt-2 font-sans text-[14px] font-medium text-[#b8862f]">
              {heroCourse.short}
            </p>
            <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-[#6b7280]">
              {heroCourse.about}
            </p>

            {/* Full meta row — 4 pills */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { icon: Clock, label: "Duration", value: heroCourse.duration },
                { icon: FileCheck2, label: "Eligibility", value: heroCourse.eligibility },
                { icon: CreditCard, label: "Fee", value: heroCourse.fee },
                { icon: Users2, label: "Seats", value: heroCourse.seats },
              ].map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-[#1a2744]/8 bg-[#fbfaf7] p-2.5 text-center"
                >
                  <p.icon className="mx-auto h-4 w-4 text-[#b8862f]" />
                  <div className="mt-1 font-sans text-[10px] font-medium uppercase tracking-wide text-[#6b7280]">
                    {p.label}
                  </div>
                  <div className="mt-0.5 font-serif text-[13px] font-bold text-[#1a2744]">
                    {p.value}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpenCourseId(heroCourse.id)}
              className="btn-gold mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#d4a04c] to-[#c9963f] px-6 py-3 font-sans text-[14px] font-semibold text-white"
            >
              View Program Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </article>

          {/* Standard narrow course cards — courses 2..12 */}
          {COURSES.slice(1).map((c) => (
            <article
              key={c.id}
              className="card-premium bento-narrow group flex flex-col rounded-2xl border border-[#1a2744]/8 bg-white p-6"
            >
              <IconBadge icon={c.icon} />
              <h3 className="mt-5 font-serif text-[17px] font-bold leading-snug text-[#1a2744]">
                {c.name}
              </h3>
              <p className="mt-2 flex-1 font-sans text-[13px] leading-relaxed text-[#6b7280]">
                {c.short}
              </p>

              {/* Compact meta pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1a2744]/10 bg-[#fbfaf7] px-2.5 py-1 font-sans text-[11px] font-medium text-[#1a2744]">
                  <Clock className="h-3 w-3 text-[#b8862f]" />
                  {c.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1a2744]/10 bg-[#fbfaf7] px-2.5 py-1 font-sans text-[11px] font-medium text-[#1a2744]">
                  <Users2 className="h-3 w-3 text-[#b8862f]" />
                  {c.seats} Seats
                </span>
              </div>

              <button
                onClick={() => setOpenCourseId(c.id)}
                className="mt-5 inline-flex items-center justify-between gap-2 rounded-lg border border-[#1a2744]/15 bg-white px-4 py-2.5 font-sans text-[13px] font-semibold text-[#1a2744] transition-all hover:border-[#d4a04c] hover:bg-[#d4a04c] hover:text-white"
              >
                View Details
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </article>
          ))}

          {/* CTA card — wide, balances the bento grid */}
          <article className="card-premium bento-wide group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a2744] to-[#15203a] p-7 sm:p-8">
            <div>
              <span className="icon-duotone-light inline-flex h-14 w-14 items-center justify-center">
                <MessageCircle className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-[24px] font-bold leading-tight text-white sm:text-[26px]">
                Not sure which program fits you?
              </h3>
              <p className="mt-3 max-w-md font-sans text-[14px] leading-relaxed text-white/72">
                Our admissions advisors will help you discover the right path based on your
                interests, strengths and career goals — from arts to sciences to research.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("contact")}
                className="btn-gold inline-flex items-center gap-2 bg-gradient-to-b from-[#d4a04c] to-[#c9963f] px-6 py-3 font-sans text-[14px] font-semibold text-white"
              >
                Talk to an Advisor
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate("admissions")}
                className="btn-outline-light inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-sans text-[14px] font-semibold text-white hover:bg-white hover:text-[#1a2744]"
              >
                Admission Process
              </button>
            </div>
          </article>
        </div>
      </Section>

      {/* ===== 4. COURSE DETAIL MODAL ===== */}
      {openCourse && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_.25s_ease]"
          onClick={() => setOpenCourseId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${openCourse.name} details`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#121c33]/70 backdrop-blur-md" />

          {/* Panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setOpenCourseId(null)}
              aria-label="Close details"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2744]/10 bg-white/80 text-[#1a2744] transition-colors hover:bg-[#1a2744] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header — IconBadge duotone */}
            <div className="flex items-start gap-4 pr-10">
              <IconBadge icon={openCourse.icon} size="lg" />
              <div>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#b8862f]">
                  Program Details
                </p>
                <h3 className="mt-1 font-serif text-[26px] font-bold leading-tight text-[#1a2744] sm:text-[30px]">
                  {openCourse.name}
                </h3>
              </div>
            </div>

            {/* Detail pills */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Clock, label: "Duration", value: openCourse.duration },
                { icon: FileCheck2, label: "Eligibility", value: openCourse.eligibility },
                { icon: CreditCard, label: "Annual Fee", value: openCourse.fee },
                { icon: Users2, label: "Seats", value: openCourse.seats },
              ].map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-[#1a2744]/10 bg-[#fbfaf7] p-3 text-center"
                >
                  <p.icon className="mx-auto h-5 w-5 text-[#b8862f]" />
                  <div className="mt-1.5 font-sans text-[11px] font-medium uppercase tracking-wide text-[#6b7280]">
                    {p.label}
                  </div>
                  <div className="mt-0.5 font-serif text-[15px] font-bold text-[#1a2744]">
                    {p.value}
                  </div>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="mt-7">
              <h4 className="font-serif text-[18px] font-bold text-[#1a2744]">
                About the Program
              </h4>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {openCourse.about}
              </p>
            </div>

            {/* Syllabus highlights */}
            <div className="mt-7">
              <h4 className="font-serif text-[18px] font-bold text-[#1a2744]">
                Syllabus Highlights
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {openCourse.syllabus.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 font-sans text-[14px] text-[#3a4358]"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#d4a04c] to-[#b8862f]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Career opportunities */}
            <div className="mt-7">
              <h4 className="font-serif text-[18px] font-bold text-[#1a2744]">
                Career Opportunities
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {openCourse.careers.map((career) => (
                  <span
                    key={career}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#1a2744]/10 bg-[#fbfaf7] px-3 py-1.5 font-sans text-[13px] font-medium text-[#1a2744]"
                  >
                    <Briefcase className="h-3.5 w-3.5 text-[#b8862f]" />
                    {career}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply procedure */}
            <div className="mt-7">
              <h4 className="font-serif text-[18px] font-bold text-[#1a2744]">
                Apply Procedure
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {APPLY_STEPS.map((step, i) => (
                  <div
                    key={step.label}
                    className="relative rounded-xl border border-[#1a2744]/10 bg-[#fbfaf7] p-3"
                  >
                    <div className="flex items-center justify-between">
                      <step.icon className="h-5 w-5 text-[#b8862f]" />
                      <span className="font-serif text-[18px] font-bold text-[#1a2744]/15">
                        {i + 1}
                      </span>
                    </div>
                    <div className="mt-1.5 font-sans text-[13px] font-bold text-[#1a2744]">
                      {step.label}
                    </div>
                    <div className="mt-0.5 font-sans text-[11px] text-[#5a6478]">
                      {step.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs — Apply Now → admissions, Ask a Question → contact */}
            <div className="mt-8 flex flex-col gap-3 border-t border-[#1a2744]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 font-sans text-[13px] text-[#5a6478]">
                <CheckCircle2 className="h-4 w-4 text-[#b8862f]" />
                Admissions open for 2025-26
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setOpenCourseId(null);
                    navigate("admissions");
                  }}
                  className="btn-gold inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#d4a04c] to-[#c9963f] px-6 py-3 font-sans text-[14px] font-semibold text-white"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setOpenCourseId(null);
                    navigate("contact");
                  }}
                  className="btn-outline inline-flex items-center justify-center gap-2 border border-[#1a2744] px-6 py-3 font-sans text-[14px] font-semibold text-[#1a2744] transition-colors hover:bg-[#1a2744] hover:text-white"
                >
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== 5. FACULTY HIGHLIGHTS — glass cards on navy mesh ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Faculty"
            title={
              <>
                Learn from the <span style={{ color: "#d4a04c" }}>Best</span>
              </>
            }
            description="Distinguished scholars, researchers and mentors who shape every classroom conversation."
            light
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f) => (
            <div
              key={f.name}
              className="card-premium rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-md"
            >
              {/* Duotone gradient avatar with initials */}
              <span className="icon-duotone-light mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full !ring-1 !ring-white/15">
                <span className="font-serif text-[26px] font-bold text-white">
                  {f.initials}
                </span>
              </span>
              <h3 className="mt-5 font-serif text-[18px] font-bold text-white">
                {f.name}
              </h3>
              <p className="mt-1 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-[#d4a04c]">
                {f.designation}
              </p>
              <p className="mt-1 font-sans text-[13px] text-white/60">
                Department of {f.department}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== 6. LIFE IN THE LABS PARALLAX STRIP ===== */}
      <section
        className="grain-bg relative w-full overflow-hidden bg-fixed py-28 sm:py-36"
        style={{
          backgroundImage: `url(${LAB_PARALLAX_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#121c33]/80" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal inline-block rounded-2xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-md sm:p-12">
            <span className="icon-duotone-light mx-auto inline-flex h-12 w-12 items-center justify-center">
              <FlaskConical className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-serif text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              Where Theory Meets <span style={{ color: "#d4a04c" }}>Practice</span>
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
              State-of-the-art labs across every science department.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-sans text-[13px] font-medium text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#d4a04c]" />
                12+ Research Labs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-sans text-[13px] font-medium text-white backdrop-blur-md">
                <Microscope className="h-3.5 w-3.5 text-[#d4a04c]" />
                Modern Instrumentation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. CTA SECTION ===== */}
      <Section bg="navy" className="!py-16 sm:!py-20">
        <div className="reveal">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/[0.06] p-8 text-center backdrop-blur-md sm:p-12">
            <span className="icon-duotone-light mx-auto inline-flex h-12 w-12 items-center justify-center">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-serif text-[30px] font-bold leading-tight text-white sm:text-[38px]">
              Ready to <span style={{ color: "#d4a04c" }}>apply?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-sans text-[15px] leading-relaxed text-white/80">
              Admissions for the 2025-26 session are now open. Take the first
              step toward a transformative education at Shivaji College.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <NavGoldButton to="admissions">Apply Now</NavGoldButton>
              <NavOutlineButton to="contact" light>
                Talk to Us
              </NavOutlineButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
