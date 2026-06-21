"use client";

import { useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Home,
  ArrowUpRight,
} from "lucide-react";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavGoldButton,
  NavOutlineButton,
  BentoCard,
  IconBadge,
} from "../ui";
import { SiteForm, FormCard } from "../site-form";
import { SOCIAL_LINKS, COLLEGE_PHONE, COLLEGE_EMAIL } from "../router";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/1f074f4c9e0c.jpg";

const CONTACT_ROWS = [
  {
    icon: MapPin,
    label: "Address",
    value: "Shivaji College, Ring Road, New Delhi - 110060, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: COLLEGE_PHONE,
  },
  {
    icon: Mail,
    label: "Email",
    value: COLLEGE_EMAIL,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Saturday: 8:30 AM – 5:00 PM",
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: SOCIAL_LINKS.facebook },
  { icon: Twitter, label: "Twitter", href: SOCIAL_LINKS.twitter },
  { icon: Instagram, label: "Instagram", href: SOCIAL_LINKS.instagram },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/school/university-of-delhi" },
  { icon: Youtube, label: "YouTube", href: SOCIAL_LINKS.youtube },
  { icon: MessageCircle, label: "WhatsApp", href: SOCIAL_LINKS.whatsapp },
];

const DEPARTMENTS = [
  {
    icon: GraduationCap,
    name: "Admissions Office",
    phone: "+91 79732 90806",
    email: "admissions@shivajicollege.edu.in",
  },
  {
    icon: BookOpen,
    name: "Academic Office",
    phone: "+91 79732 90807",
    email: "academics@shivajicollege.edu.in",
  },
  {
    icon: FlaskConical,
    name: "Research Cell",
    phone: "+91 79732 90808",
    email: "research@shivajicollege.edu.in",
  },
  {
    icon: Home,
    name: "Hostel Office",
    phone: "+91 79732 90809",
    email: "hostel@shivajicollege.edu.in",
  },
];

export function ContactPage() {
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
        eyebrow="Contact Us"
        title={
          <>
            Get in <span style={{ color: "#d4a04c" }}>Touch</span>
          </>
        }
        description="We're here to help. Reach out for admissions, academics, research or any general enquiry — our team responds within 24 hours."
        image={HERO_IMG}
      />

      {/* ===== CONTACT FORM + DETAILS — mesh background ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Get in Touch"
            title={
              <>
                Send a Message or{" "}
                <span style={{ color: "#d4a04c" }}>Reach Us Directly</span>
              </>
            }
            description="Use the form for detailed enquiries, or contact our offices directly using the information on the right."
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT — contact form in a glass FormCard */}
          <div>
            <FormCard
              title="Send a Message"
              subtitle="Fill in the form below and our team will get back to you within 24 hours."
            >
              <SiteForm
                type="contact"
                submitLabel="Send Message"
                successMessage="Thank you! Your message has been received and forwarded to our team at navpreet8testing@gmail.com. We'll get back to you within 24 hours."
                fields={[
                  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
                  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
                  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." },
                  { name: "subject", label: "Subject", type: "text", required: true, placeholder: "How can we help?" },
                  { name: "message", label: "Message", type: "textarea", required: true, rows: 5, placeholder: "Write your message here..." },
                ]}
              />
            </FormCard>
          </div>

          {/* RIGHT — contact details, solid navy card */}
          <div className="grain-bg relative overflow-hidden rounded-2xl border border-[#1a2744]/10 bg-gradient-to-br from-[#1a2744] to-[#15203a] p-8 shadow-[0_12px_40px_-12px_rgba(26,39,68,0.35)]">
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-px w-6 bg-[#d4a04c]" />
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#d4a04c]">
                  Contact Details
                </p>
              </div>
              <h3 className="mt-4 font-serif text-[26px] font-bold leading-tight text-white">
                Reach Us <span style={{ color: "#d4a04c" }}>Directly</span>
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/80">
                Our admissions and support teams are available during office hours to assist you.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-5">
                {CONTACT_ROWS.map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <IconBadge icon={row.icon} size="sm" light />
                    <div className="min-w-0">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                        {row.label}
                      </p>
                      <p className="mt-1 font-sans text-[14px] leading-relaxed text-white/95">
                        {row.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                  Follow Us
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-[#d4a04c] hover:bg-[#d4a04c]"
                    >
                      <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== DEPARTMENT BENTO (2x2) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Departments"
            title={
              <>
                Connect with the{" "}
                <span style={{ color: "#d4a04c" }}>Right Office</span>
              </>
            }
            description="Each office has a dedicated team ready to assist with specific enquiries."
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DEPARTMENTS.map((d) => (
            <BentoCard key={d.name} className="!p-7">
              <div className="flex items-start justify-between gap-4">
                <IconBadge icon={d.icon} size="lg" />
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#d4a04c]/60" />
              </div>
              <h3 className="mt-5 font-serif text-[20px] font-bold text-[#1a2744]">
                {d.name}
              </h3>
              <div className="mt-5 space-y-2.5 border-t border-[#1a2744]/8 pt-4">
                <a
                  href={`tel:${d.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 font-sans text-[14px] text-[#5a6478] transition-colors hover:text-[#1a2744]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#d4a04c]" />
                  <span>{d.phone}</span>
                </a>
                <a
                  href={`mailto:${d.email}`}
                  className="flex items-center gap-2.5 font-sans text-[14px] text-[#5a6478] transition-colors hover:text-[#1a2744]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#d4a04c]" />
                  <span className="break-all">{d.email}</span>
                </a>
              </div>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* ===== MAP + QUICK CONTACTS ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Find Us"
            title={
              <>
                Visit Our{" "}
                <span style={{ color: "#d4a04c" }}>Campus</span>
              </>
            }
            description="Located in the heart of New Delhi, our campus is easily accessible by metro and bus."
          />
        </div>
        <div className="reveal-stagger mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LEFT — map iframe */}
          <div className="aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(26,39,68,0.25)] ring-1 ring-[#1a2744]/8">
            <iframe
              title="Shivaji College campus map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.17%2C28.59%2C77.18%2C28.60&layer=mapnik"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>

          {/* RIGHT — quick department mini-cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DEPARTMENTS.map((d) => (
              <div
                key={d.name}
                className="card-lift rounded-xl border border-[#1a2744]/8 bg-white p-4 shadow-[0_4px_16px_-8px_rgba(26,39,68,0.15)]"
              >
                <h3 className="font-serif text-[14px] font-bold leading-snug text-[#1a2744]">
                  {d.name}
                </h3>
                <div className="mt-3 flex items-center gap-2 font-sans text-[12px] text-[#5a6478]">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#d4a04c]" />
                  <span>{d.phone}</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2 font-sans text-[12px] text-[#5a6478]">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#d4a04c]" />
                  <span className="break-all">{d.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section bg="navy" className="!py-20">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-[30px] sm:text-[40px] font-bold leading-tight text-white">
            Still have <span style={{ color: "#d4a04c" }}>questions?</span>
          </h2>
          <p className="max-w-xl font-sans text-[16px] text-white/72">
            Our admissions team is ready to guide you through every step of your journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavGoldButton to="admissions">Apply Now</NavGoldButton>
            <NavOutlineButton to="academics" light>
              Explore Programs
            </NavOutlineButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
