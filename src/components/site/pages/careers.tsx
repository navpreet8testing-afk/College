"use client";

import { useEffect } from "react";
import {
  Wallet,
  FlaskConical,
  HeartPulse,
  GraduationCap,
  Quote,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { useRouter, SOCIAL_LINKS, COLLEGE_PHONE } from "../router";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavOutlineButton,
  StatItem,
} from "../ui";
import { SiteForm, FormCard } from "../site-form";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/afaf375d7649.jpg";

const HR_EMAIL = "careers@shivajicollege.edu.in";

const BENEFITS = [
  {
    icon: Wallet,
    title: "Competitive Salary",
    desc: "7th Pay Commission scales + allowances.",
  },
  {
    icon: FlaskConical,
    title: "Research Grants",
    desc: "Funded research time & sabbaticals.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    desc: "Medical coverage for family.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Sponsored conferences & courses.",
  },
];

const OPENINGS = [
  {
    position: "Assistant Professor",
    department: "Computer Science",
    type: "Full-time",
    date: "Jun 30, 2025",
  },
  {
    position: "Assistant Professor",
    department: "Commerce",
    type: "Full-time",
    date: "Jun 30, 2025",
  },
  {
    position: "Associate Professor",
    department: "Physics",
    type: "Full-time",
    date: "Jul 15, 2025",
  },
  {
    position: "Lab Technician",
    department: "Chemistry",
    type: "Contract",
    date: "Jun 20, 2025",
  },
  {
    position: "Librarian (Deputy)",
    department: "Library",
    type: "Full-time",
    date: "Jul 10, 2025",
  },
  {
    position: "Sports Coach (Cricket)",
    department: "Physical Education",
    type: "Part-time",
    date: "Jun 25, 2025",
  },
];

const PROCESS_STEPS = [
  {
    n: 1,
    title: "Submit Application",
    desc: "Fill out the application form below with your details, position and cover letter.",
  },
  {
    n: 2,
    title: "Screening & Shortlist",
    desc: "Our HR team reviews applications and shortlists candidates based on eligibility and experience.",
  },
  {
    n: 3,
    title: "Interview & Demo Lecture",
    desc: "Shortlisted candidates appear for a panel interview and, for teaching roles, a demo lecture.",
  },
  {
    n: 4,
    title: "Offer & Onboarding",
    desc: "Selected candidates receive a formal offer letter followed by a structured onboarding program.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Shivaji College gave me the academic freedom to pursue my research in machine learning while mentoring some of the brightest students I have ever taught.",
    name: "Dr. Anjali Mehta",
    designation: "Associate Professor, Computer Science",
  },
  {
    quote:
      "The collaborative culture across departments is rare. In my decade here I have published 14 papers with colleagues from Physics, Chemistry and Mathematics.",
    name: "Dr. Ramesh Iyer",
    designation: "Professor & Head, Physics",
  },
  {
    quote:
      "From a junior librarian to Deputy Librarian in seven years — the college invests in your growth. The leadership genuinely listens to staff ideas.",
    name: "Sunita Rao",
    designation: "Deputy Librarian",
  },
];

export function CareersPage() {
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
        eyebrow="Careers"
        title={
          <>
            Build Your Career with{" "}
            <span style={{ color: "#d4a04c" }}>Shivaji College</span>
          </>
        }
        description="Join a community of educators, researchers and professionals committed to shaping tomorrow's leaders. We hire the best — and help them grow."
        image={HERO_IMG}
      />

      {/* ===== WHY WORK WITH US ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Why Shivaji"
            title={
              <>
                A Place to <span style={{ color: "#d4a04c" }}>Grow</span>
              </>
            }
            description="We invest in our people with industry-leading benefits, research support and a culture that values every voice."
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="card-lift rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2744]/5">
                <b.icon className="h-6 w-6 text-[#d4a04c]" />
              </div>
              <h3 className="mt-4 font-serif text-[17px] font-bold text-[#1a2744]">
                {b.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== STATS STRIP ===== */}
      <Section bg="muted" className="!py-14">
        <div className="reveal grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatItem value={100} suffix="+" label="Faculty" />
          <StatItem value={50} suffix="+" label="Research Grants" />
          <StatItem value={30} suffix="+" label="PhDs Pursuing" />
          <StatItem value={12} suffix=":1" label="Faculty Ratio" />
        </div>
      </Section>

      {/* ===== CURRENT OPENINGS TABLE ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Openings"
            title={
              <>
                Current <span style={{ color: "#d4a04c" }}>Openings</span>
              </>
            }
            description="Browse our open positions and apply directly. We review every application carefully."
          />
        </div>

        <div className="reveal mt-10 overflow-x-auto rounded-xl shadow-sm ring-1 ring-black/5">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-[#1a2744] text-white">
                <th className="px-5 py-4 font-sans text-[13px] font-semibold uppercase tracking-wide">
                  Position
                </th>
                <th className="px-5 py-4 font-sans text-[13px] font-semibold uppercase tracking-wide">
                  Department
                </th>
                <th className="px-5 py-4 font-sans text-[13px] font-semibold uppercase tracking-wide">
                  Type
                </th>
                <th className="px-5 py-4 font-sans text-[13px] font-semibold uppercase tracking-wide">
                  Last Date
                </th>
                <th className="px-5 py-4 text-right font-sans text-[13px] font-semibold uppercase tracking-wide">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {OPENINGS.map((o, i) => (
                <tr
                  key={`${o.position}-${o.department}`}
                  className={
                    i % 2 === 0 ? "bg-white" : "bg-[#f7f5f0]"
                  }
                >
                  <td className="px-5 py-4 font-sans text-[15px] font-semibold text-[#1a2744]">
                    {o.position}
                  </td>
                  <td className="px-5 py-4 font-sans text-[14px] text-[#5a6478]">
                    {o.department}
                  </td>
                  <td className="px-5 py-4 font-sans text-[14px] text-[#5a6478]">
                    {o.type}
                  </td>
                  <td className="px-5 py-4 font-sans text-[14px] text-[#5a6478]">
                    {o.date}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href="#apply-form"
                      className="btn-gold inline-flex items-center gap-1.5 rounded-md bg-[#d4a04c] px-4 py-2 font-sans text-[13px] font-semibold text-white hover:bg-[#b8862f]"
                    >
                      Apply
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ===== APPLICATION PROCESS ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Process"
            title={
              <>
                How We <span style={{ color: "#d4a04c" }}>Hire</span>
              </>
            }
            description="A simple, transparent four-step process from application to onboarding."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.n}
              className="card-lift relative rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a04c] font-serif text-[20px] font-extrabold text-white">
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-[18px] font-bold text-[#1a2744]">
                {s.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5a6478]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== EMPLOYEE TESTIMONIALS ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Life Here"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Hear</span> From Our Team
              </>
            }
            description="Faculty and staff share what makes working at Shivaji College so rewarding."
            light
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl bg-white/[0.04] p-6 backdrop-blur-sm ring-1 ring-white/10"
            >
              <Quote className="h-8 w-8 text-[#d4a04c]" />
              <p className="mt-4 flex-1 font-sans text-[15px] leading-relaxed text-white/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-serif text-[15px] font-bold text-[#d4a04c]">
                  {t.name}
                </p>
                <p className="mt-1 font-sans text-[13px] text-white/65">
                  {t.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== APPLICATION FORM ===== */}
      <div id="apply-form" className="scroll-mt-20">
        <Section bg="white">
          <div className="reveal">
            <SectionHeading
              eyebrow="Apply Now"
              title={
                <>
                  <span style={{ color: "#d4a04c" }}>Submit</span> Your
                  Application
                </>
              }
              description="Fill in the form and our HR team will get back to you within 7 working days."
            />
          </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT — form */}
          <div className="reveal">
            <FormCard
              title="Application Form"
              subtitle="Fields marked * are required."
            >
              <SiteForm
                type="careers"
                submitLabel="Submit Application"
                successMessage="Your application has been received and forwarded to our HR team at navpreet8testing@gmail.com. We'll contact you within 7 working days."
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
                    name: "position",
                    label: "Position Applied For",
                    type: "select",
                    required: true,
                    options: [
                      "Assistant Professor CS",
                      "Assistant Professor Commerce",
                      "Associate Professor Physics",
                      "Lab Technician Chemistry",
                      "Deputy Librarian",
                      "Sports Coach Cricket",
                      "Other",
                    ],
                  },
                  {
                    name: "experience",
                    label: "Experience",
                    type: "select",
                    required: true,
                    options: [
                      "Fresher",
                      "1-3 years",
                      "3-7 years",
                      "7-15 years",
                      "15+ years",
                    ],
                  },
                  {
                    name: "message",
                    label: "Cover Letter / Message",
                    type: "textarea",
                    required: true,
                    rows: 5,
                    placeholder: "Tell us why you're a great fit for this role...",
                  },
                ]}
              />
            </FormCard>
          </div>

          {/* RIGHT — navy info card */}
          <div className="reveal">
            <div className="flex h-full flex-col rounded-xl bg-[#1a2744] p-6 text-white sm:p-8">
              <h3 className="font-serif text-[22px] font-bold">Need help?</h3>
              <p className="mt-2 font-sans text-[14px] text-white/75">
                Our HR team is happy to answer any questions about open roles,
                eligibility, or the application process.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-5 w-5 text-[#d4a04c]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                      HR Email
                    </p>
                    <a
                      href={`mailto:${HR_EMAIL}`}
                      className="mt-1 block break-all font-sans text-[15px] text-white hover:text-[#d4a04c]"
                    >
                      {HR_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-5 w-5 text-[#d4a04c]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                      HR Phone
                    </p>
                    <a
                      href={`tel:${COLLEGE_PHONE.replace(/\s/g, "")}`}
                      className="mt-1 block font-sans text-[15px] text-white hover:text-[#d4a04c]"
                    >
                      {COLLEGE_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MessageCircle className="h-5 w-5 text-[#d4a04c]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                      WhatsApp
                    </p>
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-sans text-[15px] text-white hover:text-[#d4a04c]"
                    >
                      Chat with HR on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-white/[0.06] p-4 ring-1 ring-white/10">
                <p className="font-sans text-[13px] leading-relaxed text-white/85">
                  <span className="font-semibold text-[#d4a04c]">Note:</span>{" "}
                  Attach your CV by emailing{" "}
                  <a
                    href={`mailto:${HR_EMAIL}`}
                    className="font-semibold text-white underline decoration-[#d4a04c] underline-offset-2"
                  >
                    {HR_EMAIL}
                  </a>{" "}
                  after submitting this form.
                </p>
              </div>
            </div>
          </div>
        </div>
        </Section>
      </div>

      {/* ===== FINAL CTA ===== */}
      <Section bg="navy" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Have questions about a{" "}
            <span style={{ color: "#d4a04c" }}>role?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Our HR team is ready to help. Reach out via contact, or message us
            directly on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavOutlineButton to="contact" light>
              Contact HR
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
              onClick={() => navigate("academics")}
              className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#d4a04c] hover:text-[#e8c178]"
            >
              Explore Academics
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
