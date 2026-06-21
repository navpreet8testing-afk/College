"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  FileArchive,
  FileSpreadsheet,
  Download,
  MessageCircle,
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

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/e8c509f6af90.jpg";

type DocCategory =
  | "Admission Forms"
  | "Academic"
  | "Fee & Scholarships"
  | "Syllabus"
  | "Previous Papers"
  | "Brochures";

type DocType = "PDF" | "DOC" | "XLS" | "ZIP";

interface Doc {
  name: string;
  type: DocType;
  size: string;
  category: DocCategory;
}

const CATEGORIES: ("All" | DocCategory)[] = [
  "All",
  "Admission Forms",
  "Academic",
  "Fee & Scholarships",
  "Syllabus",
  "Previous Papers",
  "Brochures",
];

const DOCS: Doc[] = [
  { name: "Admission Form 2025-26", type: "PDF", size: "1.2 MB", category: "Admission Forms" },
  { name: "Hostel Application Form", type: "PDF", size: "0.8 MB", category: "Admission Forms" },
  { name: "Academic Calendar 2025-26", type: "PDF", size: "0.5 MB", category: "Academic" },
  { name: "Examination Form", type: "PDF", size: "0.6 MB", category: "Academic" },
  { name: "Fee Structure 2025-26", type: "XLS", size: "0.3 MB", category: "Fee & Scholarships" },
  { name: "Scholarship Application Form", type: "PDF", size: "0.7 MB", category: "Fee & Scholarships" },
  { name: "B.A. (Hons) Syllabus", type: "PDF", size: "2.1 MB", category: "Syllabus" },
  { name: "B.Sc. Syllabus", type: "PDF", size: "2.8 MB", category: "Syllabus" },
  { name: "B.Com Syllabus", type: "PDF", size: "1.9 MB", category: "Syllabus" },
  { name: "B.Sc. CS Syllabus", type: "PDF", size: "3.2 MB", category: "Syllabus" },
  { name: "Previous Year Question Papers", type: "ZIP", size: "8.5 MB", category: "Previous Papers" },
  { name: "College Prospectus 2025-26", type: "PDF", size: "12.4 MB", category: "Brochures" },
];

const STEPS = [
  {
    n: 1,
    title: "Download the Form",
    desc: "Click the Download button next to any document to instantly save the file to your device.",
  },
  {
    n: 2,
    title: "Fill It Completely",
    desc: "Open the file in any PDF, Word or Excel reader and complete every required field accurately.",
  },
  {
    n: 3,
    title: "Submit at the Office",
    desc: "Print the filled form and submit it to the relevant college office before the stated deadline.",
  },
];

function typeBadgeClasses(t: DocType) {
  switch (t) {
    case "PDF":
      return "bg-red-50 text-red-700 ring-1 ring-red-200";
    case "DOC":
      return "bg-[#1a2744]/5 text-[#1a2744] ring-1 ring-[#1a2744]/10";
    case "XLS":
      return "bg-green-50 text-green-700 ring-1 ring-green-200";
    case "ZIP":
      return "bg-amber-50 text-amber-700 ring-1 ring-amber-200";
  }
}

function docIcon(t: DocType) {
  if (t === "ZIP") return FileArchive;
  if (t === "XLS") return FileSpreadsheet;
  return FileText;
}

export function DownloadsPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState<"All" | DocCategory>("All");

  // Force-add .is-visible to above-the-fold reveals shortly after mount,
  // matching the home page pattern.
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

  const visibleDocs =
    active === "All" ? DOCS : DOCS.filter((d) => d.category === active);

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="Downloads"
        title={
          <>
            Forms, Syllabus &{" "}
            <span style={{ color: "#d4a04c" }}>Resources</span>
          </>
        }
        description="All official forms, academic calendars, syllabi, brochures and previous papers — available for instant download."
        image={HERO_IMG}
      />

      {/* ===== DOWNLOAD CENTER (filter + list) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Documents"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Download</span> Center
              </>
            }
            description="Browse, filter and download official documents. Every file is free and verified by the college administration."
          />
        </div>

        {/* Filter pills */}
        <div className="reveal mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 font-sans text-[13px] font-semibold transition-colors ${
                  isActive
                    ? "bg-[#d4a04c] text-white shadow-sm"
                    : "border border-[#1a2744]/15 bg-white text-[#1a2744] hover:border-[#d4a04c] hover:text-[#b8862f]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Result counter */}
        <div className="mt-5 flex items-center gap-2 font-sans text-[13px] text-[#5a6478]">
          <span className="font-semibold text-[#1a2744]">{visibleDocs.length}</span>
          {visibleDocs.length === 1 ? "document" : "documents"}
          {active !== "All" && (
            <>
              {" "}in <span className="font-semibold text-[#b8862f]">{active}</span>
            </>
          )}
        </div>

        {/* Documents list */}
        <div className="reveal-stagger mt-5 grid grid-cols-1 gap-4">
          {visibleDocs.map((d) => {
            const Icon = docIcon(d.type);
            return (
              <div
                key={d.name}
                className="card-lift flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                {/* LEFT — icon + name + category tag */}
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#d4a04c]/10">
                    <Icon className="h-6 w-6 text-[#d4a04c]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[17px] font-semibold leading-snug text-[#1a2744]">
                      {d.name}
                    </h3>
                    <span className="mt-1 inline-block font-sans text-[11px] font-semibold uppercase tracking-wide text-[#b8862f]">
                      {d.category}
                    </span>
                  </div>
                </div>

                {/* MIDDLE — type badge + size */}
                <div className="flex items-center gap-3 sm:gap-5">
                  <span
                    className={`inline-flex items-center rounded-md px-2.5 py-1 font-sans text-[12px] font-bold ${typeBadgeClasses(d.type)}`}
                  >
                    {d.type}
                  </span>
                  <span className="font-sans text-[13px] text-[#5a6478]">
                    {d.size}
                  </span>
                </div>

                {/* RIGHT — gold download button */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`Download ${d.name}`}
                  className="btn-gold inline-flex items-center justify-center gap-2 self-start rounded-md bg-[#d4a04c] px-5 py-2.5 font-sans text-[13px] font-semibold text-white hover:bg-[#b8862f] sm:self-auto"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
            );
          })}

          {visibleDocs.length === 0 && (
            <div className="rounded-xl bg-[#f7f5f0] p-10 text-center">
              <p className="font-sans text-[15px] text-[#5a6478]">
                No documents in this category yet. Try another filter.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* ===== STATS STRIP ===== */}
      <Section bg="muted" className="!py-14">
        <div className="reveal grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatItem value={50} suffix="+" label="Forms Available" />
          <StatItem value={100} suffix="%" label="Free" />
          <StatItem value={24} suffix="/7" label="Access" />
          <StatItem value={1} suffix="-click" label="Download" />
        </div>
      </Section>

      {/* ===== HOW TO USE THESE FORMS ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Help"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>How</span> to Use These Forms
              </>
            }
            description="Three simple steps to download, complete and submit any official document."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="card-lift relative flex flex-col items-start rounded-xl bg-white p-7 shadow-sm ring-1 ring-black/5"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a04c] font-serif text-[24px] font-extrabold text-white shadow-sm">
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-[20px] font-bold text-[#1a2744]">
                {s.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance row */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-sans text-[13px] text-[#5a6478]">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
            Always free to download
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
            Verified by administration
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#d4a04c]" />
            Updated for 2025-26
          </span>
        </div>
      </Section>

      {/* ===== REQUEST A DOCUMENT CTA ===== */}
      <Section bg="navy" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Can't find what you{" "}
            <span style={{ color: "#d4a04c" }}>need?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            If a specific form, syllabus or resource is missing, request it from
            our office and we'll make it available within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavOutlineButton to="contact" light>
              Request a Document
            </NavOutlineButton>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3 font-sans text-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <button
              onClick={() => navigate("admissions")}
              className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#d4a04c] hover:text-[#e8c178]"
            >
              Go to Admissions
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
