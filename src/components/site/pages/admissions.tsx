"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Scale,
  Landmark,
  Atom,
  FlaskConical,
  Sigma,
  Leaf,
  BarChart3,
  Laptop,
  GraduationCap,
  Award,
  HeartHandshake,
  Users,
  Trophy,
  FileText,
  UploadCloud,
  ListChecks,
  BadgeCheck,
  IdCard,
  Image as ImageIcon,
  ScrollText,
  FileCheck,
  MessageCircle,
  ClipboardCheck,
} from "lucide-react";
import { useRouter, SOCIAL_LINKS } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
  IconBadge,
  BentoCard,
} from "../ui";
import { SiteForm, FormCard } from "../site-form";

/* ----------------------------- assets ----------------------------- */
const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/ef13916d9cc1.jpg";

/* ----------------------------- data ----------------------------- */
const STEPS = [
  {
    num: "1",
    title: "Register Online",
    desc: "Create your account on the admission portal and complete the online registration form with your personal and academic details.",
    icon: FileText,
  },
  {
    num: "2",
    title: "Submit Documents",
    desc: "Upload your 10+2 marksheet, ID proof, recent photograph and category certificate (if applicable) as per the checklist.",
    icon: UploadCloud,
  },
  {
    num: "3",
    title: "Merit & Counselling",
    desc: "Merit lists are published on the portal. Selected candidates attend counselling and in-person document verification.",
    icon: ListChecks,
  },
  {
    num: "4",
    title: "Pay Fees & Enroll",
    desc: "Complete your fee payment securely online and confirm your seat. Welcome to the Shivaji College family!",
    icon: BadgeCheck,
  },
];

const ELIGIBILITY = [
  "Passed 10+2 (or equivalent) from a recognized board such as CBSE, ICSE or any State Board.",
  "Minimum 50% aggregate for UG Arts & Commerce programs (60% for Computer Science).",
  "Minimum 55% aggregate in the relevant Bachelor's degree for PG programs.",
  "Valid score in CUET (UG) / CUET (PG) as per Delhi University norms.",
  "5% relaxation in eligibility marks for SC / ST / OBC / PwD categories per government norms.",
  "International students may apply through the ICCR / Foreign Student Cell pathway.",
];

interface Course {
  id: string;
  name: string;
  icon: typeof BookOpen;
  duration: string;
  fee: string;
  seats: number;
  eligibility: string;
  syllabus: string[];
}

const COURSES: Course[] = [
  {
    id: "ba-eng",
    name: "B.A. (Hons) English",
    icon: BookOpen,
    duration: "3 Years",
    fee: "₹18,500",
    seats: 60,
    eligibility:
      "10+2 with 50% aggregate and English as a core subject. CUET (UG) qualified.",
    syllabus: [
      "English Literature from Chaucer to 18th Century",
      "Indian Writing in English & Translation",
      "Literary Criticism & Theory",
      "Poetry, Drama & Fiction Studies",
      "Research Methodology & Dissertation",
    ],
  },
  {
    id: "ba-ps",
    name: "B.A. (Hons) Political Science",
    icon: Scale,
    duration: "3 Years",
    fee: "₹18,500",
    seats: 60,
    eligibility:
      "10+2 with 50% aggregate. CUET (UG) qualified. Strong foundation in Social Sciences preferred.",
    syllabus: [
      "Political Theory & Concepts",
      "Indian Political System & Constitution",
      "International Relations & Foreign Policy",
      "Public Administration & Governance",
      "Comparative Politics & Research Methods",
    ],
  },
  {
    id: "ba-hist",
    name: "B.A. (Hons) History",
    icon: Landmark,
    duration: "3 Years",
    fee: "₹18,500",
    seats: 60,
    eligibility:
      "10+2 with 50% aggregate. CUET (UG) qualified. Interest in heritage & historiography encouraged.",
    syllabus: [
      "Ancient & Medieval Indian History",
      "Modern India & Freedom Struggle",
      "World History: Europe & Asia",
      "Historiography & Research Methods",
      "Dissertation on a Historical Theme",
    ],
  },
  {
    id: "bsc-phy",
    name: "B.Sc. (Hons) Physics",
    icon: Atom,
    duration: "3 Years",
    fee: "₹24,800",
    seats: 60,
    eligibility:
      "10+2 with PCM and 55% aggregate. CUET (UG) qualified. Mathematics compulsory.",
    syllabus: [
      "Classical & Analytical Mechanics",
      "Quantum Physics & Statistical Mechanics",
      "Thermodynamics & Optics",
      "Electromagnetism & Electronics",
      "Nuclear & Particle Physics Lab",
    ],
  },
  {
    id: "bsc-chem",
    name: "B.Sc. (Hons) Chemistry",
    icon: FlaskConical,
    duration: "3 Years",
    fee: "₹24,800",
    seats: 60,
    eligibility:
      "10+2 with PCB/PCM and 55% aggregate. CUET (UG) qualified. Chemistry compulsory.",
    syllabus: [
      "Organic Chemistry & Reaction Mechanisms",
      "Inorganic Chemistry & Coordination",
      "Physical Chemistry & Thermodynamics",
      "Analytical & Instrumental Methods",
      "Polymer Science & Industrial Chemistry",
    ],
  },
  {
    id: "bsc-math",
    name: "B.Sc. (Hons) Mathematics",
    icon: Sigma,
    duration: "3 Years",
    fee: "₹24,800",
    seats: 60,
    eligibility:
      "10+2 with PCM and 55% aggregate. CUET (UG) qualified. Strong aptitude in Mathematics essential.",
    syllabus: [
      "Calculus & Differential Equations",
      "Linear Algebra & Abstract Algebra",
      "Real & Complex Analysis",
      "Number Theory & Discrete Maths",
      "Numerical Methods & Programming",
    ],
  },
  {
    id: "bsc-bot",
    name: "B.Sc. (Hons) Botany",
    icon: Leaf,
    duration: "3 Years",
    fee: "₹24,800",
    seats: 60,
    eligibility:
      "10+2 with PCB and 55% aggregate. CUET (UG) qualified. Biology compulsory.",
    syllabus: [
      "Plant Physiology & Biochemistry",
      "Plant Taxonomy & Diversity",
      "Ecology & Environmental Botany",
      "Genetics & Plant Breeding",
      "Plant Biotechnology & Microbiology",
    ],
  },
  {
    id: "bcom",
    name: "B.Com (Hons)",
    icon: BarChart3,
    duration: "3 Years",
    fee: "₹21,200",
    seats: 120,
    eligibility:
      "10+2 with Commerce / Mathematics and 50% aggregate. CUET (UG) qualified.",
    syllabus: [
      "Financial Accounting & Reporting",
      "Business Statistics & Mathematics",
      "Corporate Law & Income Tax",
      "Micro & Macro Economics",
      "Marketing Management & Auditing",
    ],
  },
  {
    id: "bsc-cs",
    name: "B.Sc. Computer Science",
    icon: Laptop,
    duration: "3 Years",
    fee: "₹42,000",
    seats: 120,
    eligibility:
      "10+2 with PCM and 60% aggregate. CUET (UG) qualified. Mathematics compulsory.",
    syllabus: [
      "Programming in C, C++ & Python",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems & Computer Networks",
      "Web Technologies & AI Foundations",
    ],
  },
  {
    id: "pg",
    name: "M.A. / M.Sc.",
    icon: GraduationCap,
    duration: "2 Years",
    fee: "₹28,500",
    seats: 60,
    eligibility:
      "Bachelor's degree in the relevant subject with 55% aggregate. CUET (PG) qualified.",
    syllabus: [
      "Advanced Specialization Papers",
      "Research Methodology & Statistics",
      "Dissertation / Thesis Work",
      "Seminars & Paper Presentations",
      "Industry / Field Project",
    ],
  },
];

interface DateRow {
  event: string;
  date: string;
  status: "Open" | "Upcoming" | "Closed";
}

const DATES: DateRow[] = [
  { event: "Online Registration Opens", date: "April 15, 2025", status: "Open" },
  { event: "Last Date to Apply", date: "May 30, 2025", status: "Upcoming" },
  { event: "Merit List Declaration", date: "June 10, 2025", status: "Upcoming" },
  { event: "Document Verification", date: "June 12 – 18, 2025", status: "Upcoming" },
  { event: "Fee Payment Deadline", date: "June 25, 2025", status: "Upcoming" },
  { event: "Semester Commences", date: "July 15, 2025", status: "Upcoming" },
];

const STATUS_STYLES: Record<DateRow["status"], string> = {
  Open: "bg-green-100 text-green-700 ring-1 ring-green-200",
  Upcoming: "bg-[#d4a04c]/15 text-[#b8862f] ring-1 ring-[#d4a04c]/30",
  Closed: "bg-gray-200 text-gray-600 ring-1 ring-gray-300",
};

const FEE_SUMMARY = [
  {
    tier: "Undergraduate",
    icon: GraduationCap,
    range: "₹18,500 – ₹42,000",
    note: "per year",
    programs: "B.A. (Hons), B.Sc. (Hons), B.Com (Hons), B.Sc. CS",
    desc: "3-year UG programs across Arts, Science, Commerce & Computer Science.",
  },
  {
    tier: "Postgraduate",
    icon: BookOpen,
    range: "₹28,500 – ₹35,000",
    note: "per year",
    programs: "M.A., M.Sc., M.Com",
    desc: "2-year master's programs with specialization, dissertation & seminars.",
  },
  {
    tier: "Research",
    icon: FlaskConical,
    range: "₹35,000 – ₹50,000",
    note: "per year",
    programs: "M.Phil & Ph.D.",
    desc: "Doctoral research across 6 thrust areas with fellowship support.",
  },
];

const SCHOLARSHIPS = [
  {
    icon: Award,
    title: "Merit Scholarship",
    desc: "Up to 100% tuition waiver for students with 90%+ in qualifying exams.",
  },
  {
    icon: HeartHandshake,
    title: "Need-based Aid",
    desc: "Financial assistance for students from economically weaker sections.",
  },
  {
    icon: Users,
    title: "SC / ST / OBC",
    desc: "Government scholarships & fee concessions for reserved categories.",
  },
  {
    icon: Trophy,
    title: "Sports & ECA",
    desc: "Relaxation & awards for national-level sports and cultural achievers.",
  },
];

const DOCUMENTS = [
  { icon: FileText, label: "10+2 Marksheet (Original + Copy)" },
  { icon: IdCard, label: "Government ID Proof (Aadhaar / PAN)" },
  { icon: ImageIcon, label: "Recent Passport-size Photograph" },
  { icon: ScrollText, label: "Caste Certificate (if applicable)" },
  { icon: FileCheck, label: "Migration Certificate (from previous board)" },
];

const PROGRAM_OPTIONS = [
  "B.A. English",
  "B.A. Pol Science",
  "B.A. History",
  "B.Sc. Physics",
  "B.Sc. Chemistry",
  "B.Sc. Maths",
  "B.Sc. Botany",
  "B.Com",
  "B.Sc. CS",
  "M.A./M.Sc.",
  "Ph.D.",
  "Other",
];

const CATEGORY_OPTIONS = ["General", "OBC", "SC", "ST", "EWS"];

/* ----------------------------- component ----------------------------- */
export function AdmissionsPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [openCourse, setOpenCourse] = useState<string | null>(COURSES[0].id);

  // Force-add is-visible to above-the-fold reveals shortly after mount.
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

  const scrollToForm = () => {
    document
      .getElementById("apply-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== 1. HERO ===== */}
      <PageHero
        eyebrow="Admissions 2025-26"
        title={
          <>
            Join <span style={{ color: "#d4a04c" }}>Shivaji College</span>
          </>
        }
        description="Begin your journey with us. Applications for 2025-26 are now open — explore 25+ programs and apply in 4 simple steps."
        image={HERO_IMG}
      />

      {/* ===== 2. PROCESS STEPS — glass cards + gold numbered circles (mesh) ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Process"
            title={
              <>
                How to <span style={{ color: "#d4a04c" }}>Apply</span>
              </>
            }
            description="A simple, transparent four-step admission process — from registration to enrollment."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const StepIcon = s.icon;
            return (
              <div
                key={s.num}
                className="card-premium group relative flex flex-col items-center rounded-2xl bg-white p-7 text-center"
              >
                {/* Step IconBadge in top-right */}
                <span className="absolute right-5 top-5 opacity-90">
                  <IconBadge icon={StepIcon} size="sm" />
                </span>
                {/* Gold gradient numbered circle */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a04c] to-[#b8862f] shadow-lg shadow-[#d4a04c]/30 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-serif text-[34px] font-extrabold text-white">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[19px] font-bold text-[#1a2744]">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#6b7280]">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ===== 3. ELIGIBILITY CRITERIA (muted, glass) ===== */}
      <Section bg="muted">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <SectionHeading
              eyebrow="Eligibility"
              title={
                <>
                  Are you <span style={{ color: "#d4a04c" }}>eligible?</span>
                </>
              }
              description="Review the criteria below to confirm you meet the requirements for admission to Shivaji College."
            />
            <p className="mt-6 font-sans text-[15px] leading-relaxed text-[#6b7280]">
              Eligibility is determined per Delhi University & CUET norms.
              Reserved-category candidates receive relaxation as per government
              policy. When in doubt, our admissions office is happy to help.
            </p>
            <div className="mt-7">
              <button
                onClick={scrollToForm}
                className="btn-gold inline-flex items-center gap-2 bg-gradient-to-b from-[#d4a04c] to-[#c9963f] px-6 py-3 font-sans text-[14px] font-semibold text-white"
              >
                Check &amp; Apply
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-2xl border border-white/40 bg-white/70 p-7 shadow-sm backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                <IconBadge icon={ClipboardCheck} />
                <h3 className="font-serif text-[18px] font-bold text-[#1a2744]">
                  Eligibility Checklist
                </h3>
              </div>
              <ul className="mt-5 space-y-4">
                {ELIGIBILITY.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a04c]" />
                    <span className="font-sans text-[15px] leading-relaxed text-[#1a2744]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 4. COURSES OFFERED — EXPANDABLE PANELS (card-premium) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Courses"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Programs</span> &amp; Fees
              </>
            }
            description="10 flagship programs across Arts, Science, Commerce & Computer Science. Tap any course to view eligibility, seats, syllabus highlights and apply."
            align="center"
          />
        </div>

        <div className="reveal-stagger mx-auto mt-12 flex max-w-4xl flex-col gap-4">
          {COURSES.map((c, i) => {
            const isOpen = openCourse === c.id;
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className={`card-premium overflow-hidden rounded-2xl bg-white ${
                  isOpen
                    ? "border-[rgba(212,160,76,0.35)] shadow-[0_12px_28px_-8px_rgba(26,39,68,0.16)]"
                    : ""
                }`}
              >
                {/* Collapsed header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenCourse((prev) => (prev === c.id ? null : c.id))
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-[#fbfaf7] sm:px-6"
                >
                  <IconBadge icon={Icon} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-[16px] font-bold leading-snug text-[#1a2744] sm:text-[18px]">
                      {c.name}
                    </span>
                    <span className="mt-1 flex flex-wrap items-center gap-2 font-sans text-[12px] text-[#6b7280]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#1a2744]/5 px-2.5 py-0.5 font-medium text-[#1a2744]">
                        <Clock className="h-3 w-3" />
                        {c.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#1a2744]/5 px-2.5 py-0.5 font-medium text-[#1a2744]">
                        <Users className="h-3 w-3" />
                        {c.seats} seats
                      </span>
                    </span>
                  </span>

                  <span className="shrink-0 text-right">
                    <span className="block font-serif text-[18px] font-extrabold text-[#d4a04c] sm:text-[20px]">
                      {c.fee}
                    </span>
                    <span className="block font-sans text-[11px] text-[#b8862f]">
                      / year
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#1a2744] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded body — smooth grid-rows animation */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#1a2744]/10 px-5 py-6 sm:px-6">
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Eligibility + seats */}
                        <div>
                          <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#d4a04c]">
                            Eligibility
                          </h4>
                          <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#1a2744]">
                            {c.eligibility}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#1a2744]/5 px-3 py-2 font-sans text-[13px] font-medium text-[#1a2744]">
                              <Clock className="h-4 w-4 text-[#d4a04c]" />
                              Duration: {c.duration}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#1a2744]/5 px-3 py-2 font-sans text-[13px] font-medium text-[#1a2744]">
                              <Users className="h-4 w-4 text-[#d4a04c]" />
                              Intake: {c.seats} seats
                            </span>
                          </div>
                        </div>

                        {/* Syllabus highlights */}
                        <div>
                          <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#d4a04c]">
                            Syllabus Highlights
                          </h4>
                          <ul className="mt-2 space-y-2.5">
                            {c.syllabus.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#d4a04c] to-[#b8862f]" />
                                <span className="font-sans text-[14px] leading-relaxed text-[#1a2744]">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#1a2744]/10 pt-5">
                        <button
                          onClick={scrollToForm}
                          className="btn-gold inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a04c] to-[#b8862f] px-6 py-2.5 font-sans text-[13px] font-semibold text-white shadow-sm shadow-[#d4a04c]/30"
                        >
                          Apply for this course
                          <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => navigate("contact")}
                          className="btn-outline inline-flex items-center gap-2 border border-[#1a2744] px-6 py-2.5 font-sans text-[13px] font-semibold text-[#1a2744] hover:bg-[#1a2744] hover:text-white"
                        >
                          Enquire
                        </button>
                        <span className="ml-auto font-sans text-[12px] text-[#6b7280]">
                          Course #{(i + 1).toString().padStart(2, "0")} · 2025-26
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ===== 5. IMPORTANT DATES — glass table (mesh) ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Schedule"
            title={
              <>
                Important <span style={{ color: "#d4a04c" }}>Dates</span>
              </>
            }
            description="Mark your calendar with the key milestones of the 2025-26 admission cycle."
            align="center"
          />
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-sm backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#1a2744]">
                  <th className="px-5 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white sm:px-6">
                    Event
                  </th>
                  <th className="px-5 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white sm:px-6">
                    Date
                  </th>
                  <th className="px-5 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white sm:px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {DATES.map((row, idx) => (
                  <tr
                    key={row.event}
                    className={
                      idx % 2 === 0
                        ? "bg-white/40"
                        : "bg-[#f7f5f0]/40"
                    }
                  >
                    <td className="px-5 py-4 font-serif text-[14px] font-bold text-[#1a2744] sm:px-6 sm:text-[15px]">
                      {row.event}
                    </td>
                    <td className="px-5 py-4 font-sans text-[14px] text-[#6b7280] sm:px-6">
                      {row.date}
                    </td>
                    <td className="px-5 py-4 sm:px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-sans text-[12px] font-semibold ${STATUS_STYLES[row.status]}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            row.status === "Open"
                              ? "bg-green-500"
                              : row.status === "Upcoming"
                              ? "bg-[#d4a04c]"
                              : "bg-gray-400"
                          }`}
                        />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ===== 6. FEE STRUCTURE SUMMARY — Bento grid (white) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Fees"
            title={
              <>
                Transparent <span style={{ color: "#d4a04c" }}>Fee Structure</span>
              </>
            }
            description="Annual tuition fee ranges across undergraduate, postgraduate and research programs. No hidden charges."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 bento-grid">
          {FEE_SUMMARY.map((f) => {
            const FeeIcon = f.icon;
            return (
              <BentoCard key={f.tier} className="bento-half !p-7">
                <div className="flex items-center justify-between">
                  <IconBadge icon={FeeIcon} size="lg" />
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
                    {f.tier}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-[20px] font-bold text-[#1a2744]">
                  {f.programs}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-[#d4a04c] to-[#b8862f] bg-clip-text font-serif text-[30px] font-extrabold leading-none text-transparent sm:text-[34px]">
                    {f.range}
                  </span>
                  <span className="font-sans text-[13px] font-medium text-[#b8862f]">
                    {f.note}
                  </span>
                </div>

                <div className="my-5 h-px w-full bg-[#1a2744]/10" />

                <p className="font-sans text-[14px] leading-relaxed text-[#6b7280]">
                  {f.desc}
                </p>

                <button
                  onClick={scrollToForm}
                  className="mt-6 inline-flex items-center gap-1.5 self-start font-sans text-[13px] font-semibold text-[#b8862f] transition-colors hover:text-[#1a2744]"
                >
                  Apply for {f.tier}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </BentoCard>
            );
          })}
        </div>
      </Section>

      {/* ===== 7. SCHOLARSHIPS — glass cards on navy mesh ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Scholarships"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Financial</span> Support
              </>
            }
            description="We believe merit and dreams should never be held back by finances. Four scholarship pathways are available."
            align="center"
            light
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOLARSHIPS.map((s) => {
            return (
              <div
                key={s.title}
                className="card-premium flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md"
              >
                <IconBadge icon={s.icon} light />
                <h3 className="mt-5 font-serif text-[18px] font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <button
            onClick={() => navigate("contact")}
            className="btn-outline-light inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-sans text-[14px] font-semibold text-white hover:bg-white hover:text-[#1a2744]"
          >
            Ask about scholarship eligibility
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Section>

      {/* ===== 8. APPLY NOW CTA + FORM (mesh) — FormCard + navy info card ===== */}
      <Section bg="mesh">
        <div id="apply-form" className="reveal scroll-mt-24">
          <SectionHeading
            eyebrow="Apply"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Apply Now</span>
              </>
            }
            description="Submit your admission enquiry and our team will reach out within 24 hours to guide you through the next steps."
            align="center"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT — FormCard with SiteForm */}
          <div className="reveal">
            <FormCard
              title="Admission Enquiry Form"
              subtitle="Fields marked with * are required. Your submission is sent securely to navpreet8testing@gmail.com."
            >
              <SiteForm
                type="admissions"
                submitLabel="Submit Application Enquiry"
                successTitle="Application enquiry received!"
                successMessage="Your application enquiry has been received and forwarded to navpreet8testing@gmail.com. Our admissions team will contact you within 24 hours."
                fields={[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    required: true,
                    placeholder: "e.g. Aarav Sharma",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    required: true,
                    placeholder: "you@example.com",
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    required: true,
                    placeholder: "+91 98XXX XXXXX",
                  },
                  {
                    name: "program",
                    label: "Program of Interest",
                    type: "select",
                    required: true,
                    options: PROGRAM_OPTIONS,
                  },
                  {
                    name: "category",
                    label: "Category",
                    type: "select",
                    required: true,
                    options: CATEGORY_OPTIONS,
                  },
                  {
                    name: "message",
                    label: "Message (optional)",
                    type: "textarea",
                    rows: 4,
                    placeholder:
                      "Tell us about your academic background, marks or any questions you have...",
                  },
                ]}
                meta={{ source: "admissions-page" }}
              />
            </FormCard>
          </div>

          {/* RIGHT — navy glass info card */}
          <div className="reveal">
            <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-gradient-to-br from-[#1a2744]/95 to-[#2a3a5c]/95 p-7 shadow-xl backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3">
                <IconBadge icon={Phone} light />
                <div>
                  <h3 className="font-serif text-[20px] font-bold text-white">
                    Admissions Office
                  </h3>
                  <p className="font-sans text-[14px] text-white/70">
                    Reach us directly — we&apos;re here to help.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:admissions@shivajicollege.edu.in"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[14px] font-medium text-white">
                    admissions@shivajicollege.edu.in
                  </span>
                </a>
                <a
                  href="tel:+911125692768"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[14px] font-medium text-white">
                    +91 79732 90806
                  </span>
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 transition-colors hover:bg-[#25D366]/20"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
                  <span className="font-sans text-[14px] font-medium text-white">
                    Chat on WhatsApp
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[14px] font-medium text-white">
                    Mon – Sat · 9:00 AM – 5:00 PM
                  </span>
                </div>
              </div>

              {/* Documents needed */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#d4a04c]">
                  Documents Needed
                </h4>
                <ul className="mt-4 space-y-3">
                  {DOCUMENTS.map((d) => {
                    const DocIcon = d.icon;
                    return (
                      <li
                        key={d.label}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d4a04c]/15 ring-1 ring-[#d4a04c]/25">
                          <DocIcon className="h-4 w-4 text-[#d4a04c]" />
                        </span>
                        <span className="font-sans text-[14px] leading-relaxed text-white/85">
                          {d.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 9. FINAL CTA (navy mesh) ===== */}
      <Section bg="navy" className="!py-20">
        <div className="reveal flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-white/15 bg-white/[0.06] p-8 text-center backdrop-blur-md sm:p-12">
            <h2 className="font-serif text-[26px] font-bold leading-tight text-white sm:text-[34px]">
              Still have <span style={{ color: "#d4a04c" }}>questions?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-sans text-[15px] leading-relaxed text-white/75">
              Our admissions team is one message away. Whether it&apos;s about
              programs, fees, scholarships or documents — we&apos;ll guide you
              every step of the way.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <NavOutlineButton to="contact" light>
                Contact Admissions
              </NavOutlineButton>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 font-sans text-[14px] font-semibold text-white shadow-sm shadow-[#25D366]/30 transition-colors hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-6 font-sans text-[12px] text-white/55">
              Shivaji College · University of Delhi · Admissions 2025-26
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
