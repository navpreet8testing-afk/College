"use client";

import { useEffect } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  BookOpen,
  Building,
  FileText,
  BedDouble,
  Scale,
  UserCheck,
  MessageSquare,
  Mail,
  Phone,
  MessageCircle,
  Users,
  AlertTriangle,
} from "lucide-react";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
  StatItem,
} from "../ui";
import { SiteForm, FormCard } from "../site-form";
import {
  SOCIAL_LINKS,
  COLLEGE_PHONE,
} from "../router";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/1a695321c5c0.jpeg";

const COMMITTEE = [
  {
    initials: "RS",
    name: "Dr. Rajesh Sharma",
    designation: "Chairperson",
    department: "Principal",
  },
  {
    initials: "AD",
    name: "Dr. Anita Desai",
    designation: "Member",
    department: "Faculty, English",
  },
  {
    initials: "VR",
    name: "Dr. Vikram Rao",
    designation: "Member",
    department: "Faculty, Physics",
  },
  {
    initials: "SK",
    name: "Ms. Sunita Kapoor",
    designation: "Member",
    department: "Administrative Officer",
  },
  {
    initials: "AM",
    name: "Mr. Arjun Mehta",
    designation: "Student Representative",
    department: "SU President",
  },
];

const PROCESS_STEPS = [
  {
    title: "Submit Form",
    desc: "File your grievance online through the form below, or drop a written complaint at the administrative block.",
  },
  {
    title: "Acknowledgement",
    desc: "You will receive an acknowledgement along with a unique tracking ID within 2 working days of submission.",
  },
  {
    title: "Review & Investigation",
    desc: "The Grievance Redressal Committee meets weekly to review cases and conduct a fair investigation.",
  },
  {
    title: "Resolution",
    desc: "A resolution is communicated to the complainant within 15 working days, with the right to appeal.",
  },
];

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Academic",
    desc: "Marks, attendance, evaluation disputes",
  },
  {
    icon: ShieldAlert,
    title: "Harassment",
    desc: "Ragging, bullying, harassment",
  },
  {
    icon: Building,
    title: "Infrastructure",
    desc: "Facilities, cleanliness, maintenance",
  },
  {
    icon: FileText,
    title: "Administrative",
    desc: "Documentation, fee disputes, certificates",
  },
  {
    icon: BedDouble,
    title: "Hostel",
    desc: "Hostel allocation, mess, facilities",
  },
  {
    icon: Scale,
    title: "Discrimination",
    desc: "Caste, gender, religion based bias",
  },
  {
    icon: UserCheck,
    title: "Faculty",
    desc: "Conduct, evaluation by faculty",
  },
  {
    icon: MessageSquare,
    title: "Other",
    desc: "Any other concern",
  },
];

export function GrievancePage() {
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
        eyebrow="Grievance Redressal"
        title={
          <>
            Your Voice, <span style={{ color: "#d4a04c" }}>Our Priority</span>
          </>
        }
        description="A confidential, fair and timely redressal mechanism for every student, parent and staff member. We're committed to a safe and respectful campus."
        image={HERO_IMG}
      />

      {/* ===== GRIEVANCE COMMITTEE ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Committee"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Grievance</span> Redressal
                Committee
              </>
            }
            description="An independent committee constituted in accordance with UGC guidelines to ensure every complaint is heard fairly and acted upon promptly."
          />
        </div>

        <div className="reveal-stagger mt-10">
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
            <div className="divide-y divide-gray-100">
              {COMMITTEE.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 sm:gap-6"
                >
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d4a04c] font-serif text-[17px] font-bold text-white sm:h-16 sm:w-16 sm:text-[19px]">
                    {m.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-[16px] font-semibold text-[#1a2744] sm:text-[18px]">
                      {m.name}
                    </h3>
                    <p className="mt-0.5 font-sans text-[13px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                      {m.designation}
                    </p>
                    <p className="mt-0.5 font-sans text-[13px] text-[#5a6478]">
                      {m.department}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== HOW TO FILE PROCESS ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Process"
            title={
              <>
                How to <span style={{ color: "#d4a04c" }}>File</span> a
                Grievance
              </>
            }
            description="A simple four-step process designed for transparency and timely resolution."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="card-lift relative rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a04c] font-serif text-[18px] font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-serif text-[17px] font-bold text-[#1a2744]">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CATEGORIES GRID ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Categories"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>What</span> You Can Report
              </>
            }
            description="Select the category that best describes your concern when filing a grievance."
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="card-lift rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2744]/5">
                <c.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <h3 className="mt-4 font-serif text-[17px] font-bold text-[#1a2744]">
                {c.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== GRIEVANCE FORM ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="File a Grievance"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Submit</span> Your Concern
              </>
            }
            description="All submissions are kept strictly confidential. False or malicious complaints may attract disciplinary action."
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT — form */}
          <div className="reveal">
            <FormCard
              title="Grievance Form"
              subtitle="Fields marked with * are required."
            >
              <SiteForm
                type="grievance"
                submitLabel="Submit Grievance"
                successTitle="Grievance Submitted"
                successMessage="Your grievance has been submitted confidentially and forwarded to the Grievance Redressal Committee. A unique tracking ID will be emailed to you at your registered address within 2 working days. For urgent matters, call +91 79732 90805."
                fields={[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    required: true,
                    placeholder: "Full Name",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    required: true,
                    placeholder: "Email Address",
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    required: true,
                    placeholder: "Phone Number",
                  },
                  {
                    name: "category",
                    label: "Category",
                    type: "select",
                    required: true,
                    options: [
                      "Academic",
                      "Harassment",
                      "Infrastructure",
                      "Administrative",
                      "Hostel",
                      "Discrimination",
                      "Faculty",
                      "Other",
                    ],
                  },
                  {
                    name: "role",
                    label: "You are a",
                    type: "select",
                    required: true,
                    options: [
                      "Current Student",
                      "Parent",
                      "Faculty",
                      "Staff",
                      "Alumni",
                      "Visitor",
                    ],
                  },
                  {
                    name: "subject",
                    label: "Subject",
                    type: "text",
                    required: true,
                    placeholder: "Brief subject of grievance",
                  },
                  {
                    name: "message",
                    label: "Describe Your Grievance",
                    type: "textarea",
                    required: true,
                    rows: 6,
                    placeholder:
                      "Describe your grievance in detail. Include dates, names and any evidence.",
                  },
                ]}
              />
            </FormCard>
          </div>

          {/* RIGHT — confidentiality + contact card */}
          <div className="reveal">
            <div className="rounded-xl bg-[#1a2744] p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-[#d4a04c]" />
                </div>
                <h3 className="font-serif text-[20px] font-bold text-white">
                  Confidentiality Assured
                </h3>
              </div>
              <p className="mt-3 font-sans text-[14px] leading-relaxed text-white/75">
                Your identity and the details of your complaint are visible only
                to the Grievance Redressal Committee. No retaliation will be
                tolerated against any complainant acting in good faith.
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                  Committee Contact
                </p>
                <div className="mt-4 space-y-4">
                  <a
                    href="mailto:grievance@shivajicollege.edu.in"
                    className="flex items-center gap-3 font-sans text-[15px] text-white transition-colors hover:text-[#d4a04c]"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-[#d4a04c]" />
                    <span className="break-all">
                      grievance@shivajicollege.edu.in
                    </span>
                  </a>
                  <a
                    href={`tel:${COLLEGE_PHONE.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 font-sans text-[15px] text-white transition-colors hover:text-[#d4a04c]"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-[#d4a04c]" />
                    <span>{COLLEGE_PHONE}</span>
                  </a>
                </div>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d4a04c] px-5 py-3 font-sans text-[14px] font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Urgent? WhatsApp us
                </a>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-lg bg-white/5 p-4">
                <AlertTriangle className="h-5 w-5 shrink-0 text-[#d4a04c]" />
                <p className="font-sans text-[13px] leading-relaxed text-white/75">
                  Anonymous complaints can be dropped in the suggestion box at
                  the administrative block.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== TIMELY RESOLUTION STATS ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our Commitment"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Timely</span> Resolution
              </>
            }
            description="We hold ourselves to clear, measurable service standards for every grievance filed."
            align="center"
          />
        </div>

        <div className="reveal mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatItem value={2} suffix=" Days" label="Acknowledgement" />
          <StatItem value={15} suffix=" Days" label="Resolution" />
          <StatItem value={100} suffix="%" label="Confidential" />
          <StatItem value={0} label="Retaliation Policy" />
        </div>
      </Section>

      {/* ===== ANTI-RAGGING NOTICE ===== */}
      <Section bg="navy">
        <div className="reveal">
          <div className="overflow-hidden rounded-xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d4a04c]/15">
                <ShieldAlert className="h-8 w-8 text-[#d4a04c]" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-[22px] font-bold text-white sm:text-[26px]">
                  Anti-Ragging Notice
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                  Ragging is a criminal offence. Call the Anti-Ragging Helpline{" "}
                  <a
                    href="tel:18001805522"
                    className="font-semibold text-[#d4a04c] hover:underline"
                  >
                    1800-180-5522
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:antiragging@shivajicollege.edu.in"
                    className="font-semibold text-[#d4a04c] hover:underline"
                  >
                    antiragging@shivajicollege.edu.in
                  </a>
                  . Strict action will be taken as per UGC regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section bg="white">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[34px] font-bold leading-tight text-[#1a2744]">
            Need to speak to{" "}
            <span style={{ color: "#d4a04c" }}>someone?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] leading-relaxed text-[#5a6478]">
            Our Grievance Redressal Committee is here to listen, support and
            resolve. Reach out — your concern matters to us.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavOutlineButton to="contact">
              <Users className="h-4 w-4" />
              Contact Committee
            </NavOutlineButton>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-md bg-[#d4a04c] px-6 py-3 font-sans text-[14px] font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
