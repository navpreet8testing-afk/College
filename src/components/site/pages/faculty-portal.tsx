"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ClipboardCheck,
  CalendarCheck,
  FlaskConical,
  CalendarClock,
  Upload,
  BarChart3,
  Calendar,
  FileText,
  BookOpen,
  Scale,
  Receipt,
  Hammer,
  Mic,
  Plane,
  GraduationCap,
  Info,
  ChevronDown,
  LogIn,
  MessageCircle,
  LifeBuoy,
  CheckCircle2,
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

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/87641eba9a3c.jpg";

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: "Grade Submission",
    desc: "Upload marks & internal assessment securely.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Management",
    desc: "Mark & track student attendance easily.",
  },
  {
    icon: FlaskConical,
    title: "Research Portal",
    desc: "Log publications, projects & grants.",
  },
  {
    icon: CalendarClock,
    title: "Leave Application",
    desc: "Apply & track leave requests online.",
  },
  {
    icon: Upload,
    title: "Resource Upload",
    desc: "Share notes, question banks, e-material.",
  },
  {
    icon: BarChart3,
    title: "Student Analytics",
    desc: "Performance insights per student/cohort.",
  },
];

const RESOURCES = [
  {
    icon: Calendar,
    title: "Academic Calendar",
    desc: "Semester schedule, holidays & exam dates.",
  },
  {
    icon: FileText,
    title: "UGC Regulations",
    desc: "Latest UGC notifications & compliance norms.",
  },
  {
    icon: BookOpen,
    title: "Syllabus Repository",
    desc: "CBCS syllabi across all programs & papers.",
  },
  {
    icon: Scale,
    title: "Service Rules",
    desc: "College & university service rule handbook.",
  },
  {
    icon: Receipt,
    title: "Reimbursement Forms",
    desc: "Claim travel, conference & research expenses.",
  },
  {
    icon: FlaskConical,
    title: "Research Policies",
    desc: "IPR, ethics & grant administration policies.",
  },
];

const PROGRAMS = [
  {
    icon: Hammer,
    title: "FDPs",
    desc: "Faculty Development Programs",
  },
  {
    icon: Mic,
    title: "Conferences",
    desc: "Sponsored conference attendance",
  },
  {
    icon: Plane,
    title: "Sabbaticals",
    desc: "Research sabbatical leave",
  },
  {
    icon: GraduationCap,
    title: "Skill Upgradation",
    desc: "Sponsored certifications",
  },
];

const FAQS = [
  {
    q: "How do I submit semester grades?",
    a: "Login to the portal, open the Grade Submission module, select your course & section, then enter marks for each student against the internal assessment and end-semester components. The system validates against the roster, lets you save a draft, and locks once you click \"Final Submit\". Deadline reminders are sent via email and in-app notifications. Hard copy signatures are no longer required — your digital submission is the official record.",
  },
  {
    q: "What is the deadline for attendance marking?",
    a: "Daily attendance must be marked within 48 hours of the lecture. The portal auto-locks each session's attendance window two days post-class. After that, corrections require approval from the Head of Department. Monthly consolidated attendance is published on the 5th of every month and is visible to students in real time. Minimum 66.6% attendance is mandatory for exam eligibility.",
  },
  {
    q: "How do I apply for research grants?",
    a: "Open the Research Portal, navigate to \"Grants\", and choose from internal seed funding, UGC major/minor projects, DST, CSIR or industry-sponsored grants. Upload your proposal, CV, budget justification and ethics clearance (if applicable). The Research Committee reviews submissions on the 1st and 15th of every month. Approved grants are tracked end-to-end — fund utilisation, milestones, deliverables and final reports — all within the portal.",
  },
  {
    q: "Can I avail sabbatical leave?",
    a: "Yes. Faculty with at least 6 years of continuous service are eligible to apply for a research sabbatical of up to one academic year. Submit your application through the Leave Application module at least 6 months in advance, along with a research proposal and a plan for course coverage during your absence. The Principal, HoD and Academic Council jointly approve sabbaticals. Salary during sabbatical is governed by UGC norms.",
  },
  {
    q: "Where do I find UGC service rules?",
    a: "UGC service rules, college service handbook, recruitment norms, CAS (Career Advancement Scheme) regulations, leave rules and pension guidelines are all available under the Resources section of this portal. Each document is the latest notified version. For interpretation or disputes, please contact the Establishment section or the HR office in the Administrative Block.",
  },
];

const INPUT_CLASS =
  "w-full rounded-md border border-gray-200 bg-white px-4 py-3 font-sans text-[15px] text-[#1a2744] placeholder:text-gray-400 focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20 transition";

export function FacultyPortalPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  // Force-add .is-visible to above-the-fold reveals shortly after mount.
  useEffect(() => {
    const t = window.setTimeout(() => {
      document
        .querySelectorAll(
          ".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)"
        )
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add("is-visible");
        });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="Faculty Portal"
        title={
          <>
            Faculty <span style={{ color: "#d4a04c" }}>Login</span>
          </>
        }
        description="Educator's dashboard — grade submission, attendance, research management, leave applications and academic resources."
        image={HERO_IMG}
      />

      {/* ===== LOGIN + FEATURES ===== */}
      <Section bg="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — login card */}
          <div className="reveal">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d4a04c]/10">
                  <LogIn className="h-5 w-5 text-[#d4a04c]" />
                </div>
                <div>
                  <h3 className="font-serif text-[20px] font-bold text-[#1a2744]">
                    Sign in to your account
                  </h3>
                  <p className="font-sans text-[13px] text-[#5a6478]">
                    Use your Faculty ID and password to continue.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="facultyId"
                    className="mb-1.5 block font-sans text-[14px] font-semibold text-[#1a2744]"
                  >
                    Faculty ID
                    <span className="text-[#d4a04c]"> *</span>
                  </label>
                  <input
                    id="facultyId"
                    name="facultyId"
                    type="text"
                    required
                    placeholder="e.g. FAC-2014-039"
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block font-sans text-[14px] font-semibold text-[#1a2744]"
                  >
                    Password
                    <span className="text-[#d4a04c]"> *</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-2 font-sans text-[13px] text-[#5a6478]">
                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 rounded border-gray-300 text-[#d4a04c] focus:ring-[#d4a04c]/30"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => navigate("contact")}
                    className="font-sans text-[13px] font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d4a04c] px-6 py-3 font-sans text-[14px] font-semibold text-white"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </button>

                {submitted && (
                  <div className="flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="font-sans text-[13px] leading-relaxed text-amber-800">
                      Demo portal — login is disabled in this preview. Contact
                      the administration office for credentials.
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-sans text-[13px] text-[#5a6478]">
                    New faculty?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("careers")}
                      className="font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
                    >
                      Contact HR
                    </button>{" "}
                    to get your account.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT — features */}
          <div className="reveal">
            <SectionHeading
              eyebrow="Educator Tools"
              title={
                <>
                  <span style={{ color: "#d4a04c" }}>Portal</span> Features
                </>
              }
              description="Six powerful tools that streamline teaching, research and administration — all in one secure dashboard."
            />

            <div className="reveal-stagger mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="card-lift flex items-start gap-4 rounded-xl bg-[#f7f5f0] p-5"
                >
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[#1a2744]/5">
                    <f.icon className="h-5 w-5 text-[#d4a04c]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[16px] font-bold text-[#1a2744]">
                      {f.title}
                    </h4>
                    <p className="mt-1 font-sans text-[13px] leading-relaxed text-[#5a6478]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== STATS STRIP ===== */}
      <Section bg="muted" className="!py-14">
        <div className="reveal-stagger grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatItem value={100} suffix="+" label="Faculty Members" />
          <StatItem value={400} suffix="+" label="Publications" />
          <StatItem value={60} suffix="+" label="Research Projects" />
          {/* ₹5.2Cr+ — custom inline stat to preserve the rupee prefix */}
          <div className="text-center">
            <div className="font-serif text-[32px] sm:text-[38px] font-extrabold leading-none text-[#1a2744]">
              ₹5.2Cr+
            </div>
            <div className="mt-2 font-sans text-[13px] font-medium uppercase tracking-wide text-[#5a6478]">
              Grant Funding
            </div>
          </div>
        </div>
      </Section>

      {/* ===== FACULTY RESOURCES (navy) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Resources"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Faculty</span> Resources
              </>
            }
            description="Policy documents, forms and reference material — everything an educator needs in one place."
            light
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <div
              key={r.title}
              className="card-lift group rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                <r.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <h3 className="mt-5 font-serif text-[18px] font-bold text-white">
                {r.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/70">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FACULTY DEVELOPMENT PROGRAMS (white) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Development"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Grow</span> Your Career
              </>
            }
            description="Sponsored programs that help faculty stay at the frontier of their discipline."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <div
              key={p.title}
              className="card-lift rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2744]/5">
                <p.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <h3 className="mt-4 font-serif text-[17px] font-bold text-[#1a2744]">
                {p.title}
              </h3>
              <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-[#5a6478]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FAQ (muted) ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Help</span> Center
              </>
            }
            description="Answers to the most common questions faculty have about using the portal."
            align="center"
          />
        </div>

        <div className="reveal-stagger mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl bg-[#f7f5f0] p-5 ring-1 ring-[#1a2744]/5 transition-colors open:bg-white open:ring-[#d4a04c]/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-serif text-[16px] font-bold text-[#1a2744]">
                  {f.q}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[#d4a04c] transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA (navy) ===== */}
      <Section bg="navy" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a04c]/15 ring-1 ring-[#d4a04c]/30">
            <LifeBuoy className="h-7 w-7 text-[#d4a04c]" />
          </div>
          <h2 className="max-w-2xl font-serif text-[26px] sm:text-[34px] font-bold leading-tight text-white">
            Need IT <span style={{ color: "#d4a04c" }}>support?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Our IT helpdesk supports faculty with account access, password
            resets, portal training and any technical issues — reach out anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NavOutlineButton to="contact" light>
              Contact IT Helpdesk
            </NavOutlineButton>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3 font-sans text-[15px] font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-[13px] text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
              Encrypted & secure
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
              Single sign-on
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
              Mon–Sat, 9 AM – 6 PM
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
