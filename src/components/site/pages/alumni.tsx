"use client";

import { useEffect } from "react";
import {
  Quote,
  Calendar,
  MapPin,
  ArrowUpRight,
  Users,
  GraduationCap,
  Briefcase,
  BookOpen,
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useScrollReveal } from "../hooks";
import { Section, SectionHeading, PageHero, StatItem } from "../ui";
import { SiteForm, FormCard, NewsletterChip } from "../site-form";
import { SOCIAL_LINKS } from "../router";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/492ca6a761d6.jpg";

const ALUMNI = [
  {
    initials: "AV",
    name: "Dr. Anjali Verma",
    batch: "1985, B.Sc. Physics",
    role: "Director, ISRO Satellite Centre",
    quote:
      "Pioneering satellite missions that put India among the world's leading space-faring nations.",
  },
  {
    initials: "RM",
    name: "Rajesh Mehta",
    batch: "1990, B.Com",
    role: "CEO, Mehta Enterprises",
    quote:
      "Forbes 30 Under 40 honoree building a global conglomerate from a Delhi classroom.",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    batch: "1998, B.A. English",
    role: "Padma Shri Author & Journalist",
    quote:
      "Voices of modern India celebrated through award-winning novels and reportage.",
  },
  {
    initials: "VS",
    name: "Vikram Singh",
    batch: "1992, B.Sc. CS",
    role: "VP Engineering, Google India",
    quote:
      "Leading engineering teams that build products for the next billion users.",
  },
  {
    initials: "SR",
    name: "Dr. Sunita Rao",
    batch: "1980, B.Sc. Botany",
    role: "Dean, AIIMS Delhi",
    quote:
      "Three decades shaping medical education, research and patient care in India.",
  },
  {
    initials: "AK",
    name: "Arjun Kapoor",
    batch: "2005, B.A. Pol Sci",
    role: "Member of Parliament",
    quote:
      "Shaping public policy and legislation for a stronger, more inclusive India.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The values I learned at Shivaji College — curiosity, integrity and resilience — have been the bedrock of every decision I've made at ISRO. The faculty believed in me long before I believed in myself.",
    name: "Dr. Anjali Verma",
    batch: "Batch of 1985, Physics",
  },
  {
    quote:
      "From the commerce classrooms to building a global enterprise, the entrepreneurial spark was first lit on this campus. The friendships I forged here remain my strongest network even today.",
    name: "Rajesh Mehta",
    batch: "Batch of 1990, Commerce",
  },
  {
    quote:
      "Shivaji College taught me that words have power. The literature department shaped not just my craft, but my worldview — and gave me the courage to tell stories that truly matter.",
    name: "Priya Nair",
    batch: "Batch of 1998, English",
  },
];

const REUNIONS = [
  {
    src: "https://sfile.chatglm.cn/images-ppt/89e4843c9c5b.jpg",
    title: "Silver Jubilee Reunion — Batch 2000",
    date: "December 20, 2025",
    location: "Main Campus, New Delhi",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/262ec3863ebd.jpg",
    title: "Global Alumni Meet 2026",
    date: "January 10, 2026",
    location: "Dubai, UAE",
  },
  {
    src: "https://sfile.chatglm.cn/images-ppt/ca508794abb9.jpg",
    title: "Annual Alumni Day",
    date: "February 14, 2026",
    location: "Campus Auditorium",
  },
];

const BENEFITS = [
  {
    icon: Users,
    title: "Networking",
    desc: "10,000+ strong directory across industries and geographies.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    desc: "Guide current students and shape the next generation of leaders.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    desc: "Exclusive job board with hiring partners and alumni referrals.",
  },
  {
    icon: BookOpen,
    title: "Library Access",
    desc: "Lifetime library membership and access to digital journals.",
  },
];

const ALUMNI_FIELDS = [
  {
    name: "name",
    label: "Full Name",
    type: "text" as const,
    required: true,
    placeholder: "Your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email" as const,
    required: true,
    placeholder: "you@example.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel" as const,
    placeholder: "+91 ...",
  },
  {
    name: "subject",
    label: "Batch Year (e.g. 1990)",
    type: "text" as const,
    placeholder: "1990",
  },
  {
    name: "course",
    label: "Course",
    type: "select" as const,
    options: [
      "B.A.",
      "B.Sc.",
      "B.Com",
      "B.Sc. CS",
      "M.A.",
      "M.Sc.",
      "M.Com",
      "Ph.D.",
    ],
  },
  {
    name: "message",
    label: "Tell us about your journey & current role",
    type: "textarea" as const,
    rows: 5,
    placeholder:
      "Share your career journey, achievements and current role since graduating...",
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: SOCIAL_LINKS.facebook },
  { icon: Twitter, label: "Twitter", href: SOCIAL_LINKS.twitter },
  { icon: Instagram, label: "Instagram", href: SOCIAL_LINKS.instagram },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/university-of-delhi",
  },
  { icon: Youtube, label: "YouTube", href: SOCIAL_LINKS.youtube },
];

export function AlumniPage() {
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
        eyebrow="Alumni Network"
        title={
          <>
            Once a Shivajian,{" "}
            <span style={{ color: "#d4a04c" }}>Always a Shivajian</span>
          </>
        }
        description="15,000+ alumni across 40+ countries — a global family united by excellence, leadership and lifelong bonds forged at Shivaji College."
        image={HERO_IMG}
      />

      {/* ===== STATS STRIP ===== */}
      <Section bg="muted" className="!py-16">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our Reach"
            title={
              <>
                A <span style={{ color: "#d4a04c" }}>Global</span> Family
              </>
            }
            description="From Delhi to Dubai, Silicon Valley to Singapore — our alumni are leading in every field."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatItem value={15000} suffix="+" label="Alumni" />
          <StatItem value={40} suffix="+" label="Countries" />
          <StatItem value={60} suffix="+" label="Reunions Held" />
          <StatItem value={500} suffix="+" label="Mentors" />
        </div>
      </Section>

      {/* ===== NOTABLE ALUMNI ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Hall of Fame"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Distinguished</span> Alumni
              </>
            }
            description="Meet a few of our Shivajians who are shaping industries, institutions and communities worldwide."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALUMNI.map((a) => (
            <div
              key={a.initials}
              className="card-lift flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1a2744]/5">
                  <span className="font-serif text-[24px] font-bold text-[#d4a04c]">
                    {a.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[18px] font-bold leading-tight text-[#1a2744]">
                    {a.name}
                  </h3>
                  <p className="mt-1 font-sans text-[12px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                    {a.batch}
                  </p>
                </div>
              </div>
              <p className="mt-4 font-sans text-[14px] font-medium text-[#5a6478]">
                {a.role}
              </p>
              <p className="mt-3 border-l-2 border-[#d4a04c]/40 pl-3 font-sans text-[13px] italic leading-relaxed text-[#5a6478]">
                &ldquo;{a.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== SPOTLIGHT / TESTIMONIALS ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Spotlight"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Stories</span> That Inspire
              </>
            }
            description="Hear directly from our alumni about how Shivaji College shaped their journeys."
            light
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="card-lift flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <Quote className="h-9 w-9 text-[#d4a04c]" />
              <p className="mt-4 flex-1 font-sans text-[14px] leading-relaxed text-white/85">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-serif text-[15px] font-bold text-white">
                  {t.name}
                </p>
                <p className="mt-0.5 font-sans text-[12px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                  {t.batch}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== REUNIONS & EVENTS ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Reunions"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Reconnect</span> &amp; Relive
              </>
            }
            description="Mark your calendar and join fellow Shivajians at our upcoming alumni gatherings."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REUNIONS.map((r) => (
            <article
              key={r.title}
              className="card-lift overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <div className="gallery-item relative aspect-[16/10] overflow-hidden">
                <img
                  src={r.src}
                  alt={r.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-[17px] font-bold leading-snug text-[#1a2744]">
                  {r.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 font-sans text-[13px] text-[#5a6478]">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-[#d4a04c]" />
                  {r.date}
                </div>
                <div className="mt-2 flex items-center gap-2 font-sans text-[13px] text-[#5a6478]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#d4a04c]" />
                  {r.location}
                </div>
                <a
                  href={`mailto:alumni@shivajicollege.edu.in?subject=${encodeURIComponent(
                    "Registration: " + r.title
                  )}`}
                  className="mt-4 inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[#d4a04c] transition-colors hover:text-[#b8862f]"
                >
                  Register
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== ALUMNI BENEFITS ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Benefits"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Stay Connected</span>
              </>
            }
            description="Lifelong privileges for every Shivajian — your alma mater is always with you."
            align="center"
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

      {/* ===== ALUMNI REGISTRATION ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Join Us"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Register</span> as an Alumnus
              </>
            }
            description="Update your details and stay connected with your alma mater."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT — form */}
          <FormCard
            title="Alumni Registration"
            subtitle="Tell us where life has taken you since Shivaji College."
          >
            <SiteForm
              type="alumni"
              submitLabel="Register Now"
              buttonAlign="full"
              successTitle="Welcome back to the Shivaji family!"
              successMessage="Your registration has been received and our alumni cell will reach out to you at navpreet8testing@gmail.com."
              fields={ALUMNI_FIELDS}
              meta={{ page: "alumni" }}
            />
          </FormCard>

          {/* RIGHT — navy info card */}
          <div className="flex flex-col rounded-xl bg-[#1a2744] p-6 text-white sm:p-8">
            <h3 className="font-serif text-[22px] font-bold text-white">
              Alumni Cell
            </h3>
            <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/75">
              Have a question about reunions, mentorship or benefits? Reach our
              dedicated alumni cell — we&apos;re here to help you reconnect.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-5 w-5 text-[#d4a04c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                    Email
                  </p>
                  <a
                    href="mailto:alumni@shivajicollege.edu.in"
                    className="mt-1 block break-all font-sans text-[15px] text-white transition-colors hover:text-[#d4a04c]"
                  >
                    alumni@shivajicollege.edu.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-5 w-5 text-[#d4a04c]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                    Phone
                  </p>
                  <a
                    href="tel:+911125692772"
                    className="mt-1 block font-sans text-[15px] text-white transition-colors hover:text-[#d4a04c]"
                  >
                    +91 11 2569 2772
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
                    className="mt-1 block font-sans text-[15px] text-white transition-colors hover:text-[#d4a04c]"
                  >
                    Chat with the Alumni Cell
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                Follow the Alumni Network
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#d4a04c] hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== NEWSLETTER + WHATSAPP CTA ===== */}
      <Section bg="navy" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
            Never miss a <span style={{ color: "#d4a04c" }}>reunion</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-white/75">
            Subscribe to our alumni newsletter for event invites, campus news and
            stories from fellow Shivajians.
          </p>
          <div className="w-full max-w-md">
            <NewsletterChip />
          </div>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-md px-6 py-2.5 font-sans text-[14px] font-semibold text-white shadow-sm transition-colors"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-4 w-4" />
            Join Alumni WhatsApp Group
          </a>
        </div>
      </Section>
    </div>
  );
}
