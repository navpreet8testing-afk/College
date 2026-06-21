"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  CalendarCheck,
  Award,
  Wallet,
  Clock,
  FileText,
  BookOpen,
  CheckCircle2,
  Info,
  Smartphone,
  Apple,
  Play,
  MessageCircle,
  ChevronDown,
  LogIn,
} from "lucide-react";
import { useRouter } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
  StatItem,
} from "../ui";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/27da05f10395.jpg";

const FEATURES = [
  {
    icon: CalendarCheck,
    title: "Attendance Tracking",
    desc: "Real-time attendance % across subjects with monthly trends.",
  },
  {
    icon: Award,
    title: "Results & Marksheets",
    desc: "Semester results & past records, downloadable as PDF.",
  },
  {
    icon: Wallet,
    title: "Fee Payments",
    desc: "Pay online & download receipts instantly, anytime.",
  },
  {
    icon: Clock,
    title: "Timetable",
    desc: "Daily schedule & room allocation at a glance.",
  },
  {
    icon: FileText,
    title: "Assignments",
    desc: "Submit & track assignments with deadline reminders.",
  },
  {
    icon: BookOpen,
    title: "Digital Library",
    desc: "E-books, journals, past papers — all searchable.",
  },
];

const FAQS = [
  {
    q: "How do I get my login credentials?",
    a: "Your Student ID and a one-time password are sent to your registered email and mobile number after admission is confirmed. You'll be prompted to set a permanent password on first login. If you haven't received them within 48 hours of fee payment, please contact the admissions office.",
  },
  {
    q: "I forgot my password — what now?",
    a: "Click the \"Forgot password?\" link on the login card. Enter your registered Student ID and email, and a reset link will be sent to you. The link is valid for 30 minutes. For further help, contact the IT helpdesk via the Contact Us page.",
  },
  {
    q: "Can I pay fees through the portal?",
    a: "Yes. Once logged in, open the Fees section to view outstanding dues, pay securely via UPI / net-banking / card, and download fee receipts for current and past semesters. All transactions are encrypted and reflected in your account instantly.",
  },
  {
    q: "How are attendance percentages calculated?",
    a: "Attendance is calculated as (classes attended ÷ classes held) × 100, aggregated per subject and overall. The university requires a minimum of 66.6% attendance to be eligible for end-semester examinations. The portal shows both subject-wise and cumulative percentages.",
  },
  {
    q: "Where can I see my internal marks?",
    a: "Internal assessment marks — including class tests, assignments, quizzes and practicals — are published under the Results section as soon as faculty submits them. You'll receive an in-app notification whenever new marks are uploaded. Past semester internals are also archived.",
  },
];

const INPUT_CLASS =
  "w-full rounded-md border border-gray-200 bg-white px-4 py-3 font-sans text-[15px] text-[#1a2744] placeholder:text-gray-400 focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20 transition";

export function StudentPortalPage() {
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
        eyebrow="Student Portal"
        title={
          <>
            Student <span style={{ color: "#d4a04c" }}>Login</span>
          </>
        }
        description="Access your academic dashboard — attendance, results, fees, timetable and more."
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
                    Use your Student ID and password to continue.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="studentId"
                    className="mb-1.5 block font-sans text-[14px] font-semibold text-[#1a2744]"
                  >
                    Student ID
                    <span className="text-[#d4a04c]"> *</span>
                  </label>
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    required
                    placeholder="e.g. SC2025-0148"
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
                      the admissions office for credentials.
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-sans text-[13px] text-[#5a6478]">
                    New student?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("admissions")}
                      className="font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
                    >
                      Contact admissions
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
              eyebrow="What You Get"
              title={
                <>
                  <span style={{ color: "#d4a04c" }}>Portal</span> Features
                </>
              }
              description="Everything a Shivaji College student needs, in one secure dashboard."
            />

            <div className="reveal-stagger mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="card-lift rounded-xl bg-[#f7f5f0] p-5"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[#1a2744]/5">
                    <f.icon className="h-5 w-5 text-[#d4a04c]" />
                  </div>
                  <h4 className="mt-4 font-serif text-[16px] font-bold text-[#1a2744]">
                    {f.title}
                  </h4>
                  <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-[#5a6478]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== STATS STRIP ===== */}
      <Section bg="muted" className="!py-14">
        <div className="reveal-stagger grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatItem value={5000} suffix="+" label="Active Students" />
          <StatItem value={100} suffix="%" label="Online Fee" />
          <StatItem value={24} suffix="/7" label="Access" />
          <StatItem value={50} suffix="+" label="E-journals" />
        </div>
      </Section>

      {/* ===== FAQ ACCORDION ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Help</span> Center
              </>
            }
            description="Answers to the most common questions about using the student portal."
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

      {/* ===== MOBILE APP CTA (navy) ===== */}
      <Section bg="navy">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a04c]/15 ring-1 ring-[#d4a04c]/30">
            <Smartphone className="h-8 w-8 text-[#d4a04c]" />
          </div>
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Access on the <span style={{ color: "#d4a04c" }}>go</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Download the Shivaji Student App for instant access to attendance,
            results, fees and notifications — anywhere, anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2.5 rounded-md bg-white/10 px-5 py-3 font-sans text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
            >
              <Apple className="h-5 w-5" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-white/60">
                  Download on the
                </span>
                <span className="block text-[14px] font-semibold">
                  App Store
                </span>
              </span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2.5 rounded-md bg-white/10 px-5 py-3 font-sans text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
            >
              <Play className="h-5 w-5" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wide text-white/60">
                  Get it on
                </span>
                <span className="block text-[14px] font-semibold">
                  Google Play
                </span>
              </span>
            </button>
          </div>
        </div>
      </Section>

      {/* ===== FINAL CTA (white) ===== */}
      <Section bg="white" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a04c]/15">
            <MessageCircle className="h-7 w-7 text-[#d4a04c]" />
          </div>
          <h2 className="max-w-2xl font-serif text-[26px] sm:text-[34px] font-bold leading-tight text-[#1a2744]">
            Need help with <span style={{ color: "#d4a04c" }}>login?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-[#5a6478]">
            Our IT helpdesk is ready to assist with account access, password
            resets and any technical issues you may face.
          </p>
          <NavOutlineButton to="contact">Contact IT Helpdesk</NavOutlineButton>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-[13px] text-[#5a6478]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
              Encrypted & secure
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
              24/7 access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
              Mobile-friendly
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}
