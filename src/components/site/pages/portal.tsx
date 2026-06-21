"use client";

import { useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  CalendarCheck,
  Wallet,
  Clock,
  FileText,
  BookOpen,
  Bell,
  MessageSquareWarning,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
} from "../ui";
import { SOCIAL_LINKS } from "../router";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/1efcc6643781.jpg";

const QUICK_ACCESS = [
  { icon: Award, label: "Results" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: Wallet, label: "Fees" },
  { icon: Clock, label: "Timetable" },
  { icon: FileText, label: "Assignments" },
  { icon: BookOpen, label: "Library" },
  { icon: Bell, label: "Notices" },
  { icon: MessageSquareWarning, label: "Grievance" },
];

const STUDENT_FEATURES = [
  "Real-time attendance with monthly & semester trends",
  "Instant access to results and downloadable marksheets",
  "Online fee payment with secure receipts & history",
  "Daily timetable, room allocation and exam schedule",
  "Submit assignments and track deadlines in one place",
];

const FACULTY_FEATURES = [
  "Mark attendance and upload internal marks instantly",
  "Submit semester grades with automated validations",
  "Apply for leave and track approvals online",
  "Manage research projects, publications & scholars",
  "Upload course resources, notes and e-learning material",
];

export function PortalPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();

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

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="My Portal"
        title={
          <>
            Your <span style={{ color: "#d4a04c" }}>Gateway</span> to Shivaji
          </>
        }
        description="One login for students and faculty — attendance, results, fees, timetables, resources and more."
        image={HERO_IMG}
      />

      {/* ===== PORTAL CHOICE CARDS ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Choose Portal"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Select</span> Your Portal
              </>
            }
            description="Pick the portal that matches your role to access your personalized dashboard."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LEFT — Student Portal card (navy) */}
          <div className="card-lift flex flex-col rounded-xl bg-[#1a2744] p-8 text-white shadow-sm sm:p-10">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a04c]/15 ring-1 ring-[#d4a04c]/30">
              <GraduationCap className="h-8 w-8 text-[#d4a04c]" />
            </div>
            <h3 className="mt-6 font-serif text-[26px] font-bold text-white">
              Student Portal
            </h3>
            <p className="mt-3 max-w-md font-sans text-[15px] leading-relaxed text-white/75">
              Attendance, results, fees, timetable, assignments, e-library and
              more — everything you need for academic life.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {STUDENT_FEATURES.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 font-sans text-[13px] text-white/80"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a04c]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                onClick={() => navigate("student-portal")}
                className="btn-gold inline-flex items-center gap-2 rounded-md bg-[#d4a04c] px-6 py-3 font-sans text-[14px] font-semibold text-white"
              >
                Login as Student
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* RIGHT — Faculty Portal card (white) */}
          <div className="card-lift flex flex-col rounded-xl bg-white p-8 text-[#1a2744] shadow-sm ring-1 ring-[#1a2744]/5 sm:p-10">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a04c]/15 ring-1 ring-[#d4a04c]/30">
              <Briefcase className="h-8 w-8 text-[#d4a04c]" />
            </div>
            <h3 className="mt-6 font-serif text-[26px] font-bold text-[#1a2744]">
              Faculty Portal
            </h3>
            <p className="mt-3 max-w-md font-sans text-[15px] leading-relaxed text-[#5a6478]">
              Grade submission, attendance, research, leave management,
              resources — tools that streamline teaching and administration.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {FACULTY_FEATURES.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 font-sans text-[13px] text-[#5a6478]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a04c]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                onClick={() => navigate("faculty-portal")}
                className="btn-navy inline-flex items-center gap-2 rounded-md bg-[#1a2744] px-6 py-3 font-sans text-[14px] font-semibold text-white"
              >
                Login as Faculty
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== QUICK ACCESS GRID ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Quick Access"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>One-Click</span> Services
              </>
            }
            description="Jump straight to the service you need — all accessible through your student portal login."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {QUICK_ACCESS.map((q) => (
            <button
              key={q.label}
              onClick={() => navigate("student-portal")}
              className="card-lift group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-[#1a2744]/5"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a04c]/10 transition-colors group-hover:bg-[#d4a04c]/20">
                <q.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <span className="mt-4 font-serif text-[15px] font-bold text-[#1a2744]">
                {q.label}
              </span>
            </button>
          ))}
        </div>
      </Section>

      {/* ===== PORTAL FEATURES PREVIEW (navy) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Everything in <span style={{ color: "#d4a04c" }}>One Place</span>
              </>
            }
            description="A unified platform tailored to students and faculty — built for clarity, speed and security."
            align="center"
            light
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* For Students */}
          <div className="rounded-xl bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                <GraduationCap className="h-5 w-5 text-[#d4a04c]" />
              </div>
              <h3 className="font-serif text-[20px] font-bold text-white">
                For Students
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {STUDENT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[14px] leading-relaxed text-white/80">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Faculty */}
          <div className="rounded-xl bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                <Briefcase className="h-5 w-5 text-[#d4a04c]" />
              </div>
              <h3 className="font-serif text-[20px] font-bold text-white">
                For Faculty
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {FACULTY_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[14px] leading-relaxed text-white/80">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===== SECURITY NOTE ===== */}
      <Section bg="white" className="!py-14">
        <div className="reveal mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-xl bg-[#f7f5f0] p-8 text-center sm:flex-row sm:text-left">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d4a04c]/15">
            <ShieldCheck className="h-7 w-7 text-[#d4a04c]" />
          </div>
          <div>
            <h3 className="font-serif text-[19px] font-bold text-[#1a2744]">
              Bank-grade security
            </h3>
            <p className="mt-1 font-sans text-[14px] leading-relaxed text-[#5a6478]">
              Your data is encrypted end-to-end, audited regularly and never
              shared with any third party.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== HELP CTA (navy) ===== */}
      <Section bg="navy" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Trouble <span style={{ color: "#d4a04c" }}>logging in?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Our IT helpdesk is available Monday to Saturday, 9 AM to 5 PM, to
            assist with login issues, password resets and account access.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavOutlineButton to="contact" light>
              Contact IT Helpdesk
            </NavOutlineButton>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-md bg-[#d4a04c] px-6 py-3 font-sans text-[14px] font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Helpdesk
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
