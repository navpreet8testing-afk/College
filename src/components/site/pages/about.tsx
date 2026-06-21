"use client";

import { useEffect } from "react";
import {
  Award,
  Trophy,
  GraduationCap,
  Users,
  FlaskConical,
  Globe2,
  CheckCircle2,
  Target,
  Compass,
} from "lucide-react";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavGoldButton,
  StatItem,
  IconBadge,
  BentoCard,
} from "../ui";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/91e7a9fbe8c6.jpg";
const PRINCIPAL_IMG = "https://sfile.chatglm.cn/images-ppt/4e4ea85d0645.jpg";

const MILESTONES = [
  {
    year: "1962",
    title: "Founded",
    desc: "Established as a constituent college of the University of Delhi, with a vision to bring quality education to western Delhi.",
  },
  {
    year: "1971",
    title: "Science Block Inaugurated",
    desc: "A dedicated science block with modern laboratories was added to support growing demand for science education.",
  },
  {
    year: "1985",
    title: "Postgraduate Programs Launched",
    desc: "Expanded academic offerings with the introduction of master's programs across multiple disciplines.",
  },
  {
    year: "1998",
    title: "First NAAC Accreditation",
    desc: "Earned our first NAAC accreditation, marking national recognition of academic quality and governance.",
  },
  {
    year: "2010",
    title: "NAAC 'A' Grade",
    desc: "Upgraded to an 'A' grade by NAAC, reflecting sustained improvements in teaching, research and infrastructure.",
  },
  {
    year: "2020",
    title: "NAAC A+ with 3.28 CGPA",
    desc: "Achieved the prestigious A+ grade with a 3.28 CGPA, placing Shivaji College among India's top-rated colleges.",
  },
];

const MISSION_POINTS = [
  "Deliver inclusive, value-based education of the highest quality.",
  "Foster research, innovation and critical inquiry across disciplines.",
  "Nurture responsible citizens with strong ethical foundations.",
  "Build industry and global academic partnerships.",
  "Promote holistic development through arts, sports and culture.",
];

const ACCREDITATIONS = [
  {
    icon: Award,
    title: "NAAC A+ Accredited",
    desc: "Re-accredited with a 3.28 CGPA by NAAC in 2020 — placing us among India's top-rated colleges and reflecting sustained academic excellence, robust governance and a relentless focus on quality.",
  },
  {
    icon: Trophy,
    title: "Top 10 DU College",
    desc: "Ranked among the top 10 Delhi University colleges by India Today 2024.",
  },
  {
    icon: GraduationCap,
    title: "15,000+ Alumni",
    desc: "A thriving global alumni network spread across 40+ countries.",
  },
  {
    icon: Users,
    title: "100+ Faculty",
    desc: "PhD-qualified educators and researchers dedicated to mentorship.",
  },
  {
    icon: FlaskConical,
    title: "25+ Research Centers",
    desc: "Active research centers driving discovery across every discipline.",
  },
  {
    icon: Globe2,
    title: "200+ Events Yearly",
    desc: "A vibrant calendar of cultural, sports and academic events.",
  },
];

export function AboutPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Re-run reveal scan on mount — force above-the-fold items visible.
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

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Our Legacy &amp; <span style={{ color: "#d4a04c" }}>Mission</span>
          </>
        }
        description="Six decades of academic excellence, values-driven education and a commitment to shaping tomorrow's leaders."
        image={HERO_IMG}
      />

      {/* ===== HISTORY TIMELINE ===== */}
      <Section bg="mesh">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our History"
            title={
              <>
                A Journey Since <span style={{ color: "#d4a04c" }}>1962</span>
              </>
            }
            description="From a fledgling college to one of Delhi University's most respected institutions — a story of steady growth and relentless pursuit of excellence."
          />
        </div>

        <div className="mt-14 max-w-3xl">
          <div className="relative border-l border-[#d4a04c]/30 pl-8 sm:pl-12">
            {MILESTONES.map((m) => (
              <div key={m.year} className="reveal relative pb-10 last:pb-0">
                {/* Gold dot */}
                <span className="absolute -left-[42px] sm:-left-[54px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#fbfaf7] bg-[#d4a04c] shadow-[0_0_0_3px_rgba(212,160,76,0.18)]" />
                <div className="font-serif text-[24px] font-extrabold leading-none text-[#d4a04c]">
                  {m.year}
                </div>
                <h3 className="mt-2 font-serif text-[20px] font-bold text-[#1a2744]">
                  {m.title}
                </h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-[#6b7280]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== VISION & MISSION (navy) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Our Purpose"
            title={
              <>
                Vision &amp; <span style={{ color: "#d4a04c" }}>Mission</span>
              </>
            }
            description="The principles that guide every decision we make and every student we nurture."
            light
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Vision card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md">
            <IconBadge icon={Compass} size="lg" light />
            <p className="mt-6 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#d4a04c]">
              Vision
            </p>
            <h3 className="mt-2 font-serif text-[24px] font-bold text-white">
              Our Vision
            </h3>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-white/85">
              To be a globally respected institution that empowers students with
              knowledge, character and the courage to lead positive change in
              society — bridging timeless values with the frontiers of modern
              learning.
            </p>
          </div>

          {/* Mission card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md">
            <IconBadge icon={Target} size="lg" light />
            <p className="mt-6 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#d4a04c]">
              Mission
            </p>
            <h3 className="mt-2 font-serif text-[24px] font-bold text-white">
              Our Mission
            </h3>
            <ul className="mt-4 space-y-3">
              {MISSION_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a04c]" />
                  <span className="font-sans text-[15px] leading-relaxed text-white/85">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===== PRINCIPAL'S MESSAGE ===== */}
      <Section bg="mesh">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <div className="reveal order-1 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(26,39,68,0.25)] ring-1 ring-[#1a2744]/8">
              <img
                src={PRINCIPAL_IMG}
                alt="Dr. Rajesh Kumar Sharma, Principal of Shivaji College"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Message */}
          <div className="reveal order-2 lg:order-2">
            <SectionHeading
              eyebrow="Principal's Message"
              title={
                <>
                  A Word from Our <span style={{ color: "#d4a04c" }}>Principal</span>
                </>
              }
            />
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-[#6b7280]">
              Welcome to Shivaji College — an institution where tradition meets
              ambition. For over six decades, we have remained steadfast in our
              commitment to affordable, value-based education that transforms
              young minds into confident, compassionate and capable citizens.
            </p>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-[#6b7280]">
              Our dedicated faculty, modern infrastructure and vibrant campus
              life together create an environment where every student can
              discover their potential and pursue their aspirations with
              purpose.
            </p>

            {/* Signature block */}
            <div className="mt-7 border-t border-[#1a2744]/10 pt-5">
              <div className="font-serif text-[19px] font-bold text-[#1a2744]">
                Dr. Rajesh Kumar Sharma
              </div>
              <div className="mt-1 font-sans text-[14px] text-[#6b7280]">
                Principal, Shivaji College
              </div>
            </div>

            <div className="mt-6">
              <NavGoldButton to="contact">Get in Touch</NavGoldButton>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== ACCREDITATIONS BENTO ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Accreditations"
            title={
              <>
                Recognized <span style={{ color: "#d4a04c" }}>Excellence</span>
              </>
            }
            description="National and global recognitions that affirm our commitment to quality education."
            align="center"
          />
        </div>

        <div className="reveal-stagger mt-12 bento-grid">
          {/* Hero card — NAAC A+ (wide) */}
          <BentoCard className="bento-wide !p-8">
            <IconBadge icon={ACCREDITATIONS[0].icon} size="lg" />
            <h3 className="mt-5 font-serif text-[22px] font-bold text-[#1a2744]">
              {ACCREDITATIONS[0].title}
            </h3>
            <p className="mt-2 max-w-md font-sans text-[14px] leading-relaxed text-[#6b7280]">
              {ACCREDITATIONS[0].desc}
            </p>
          </BentoCard>
          {/* Standard cards */}
          {ACCREDITATIONS.slice(1).map((a) => (
            <BentoCard key={a.title} className="bento-narrow">
              <IconBadge icon={a.icon} />
              <h3 className="mt-5 font-serif text-[16px] font-bold text-[#1a2744]">
                {a.title}
              </h3>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#6b7280]">
                {a.desc}
              </p>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* ===== STATS BAR (navy) ===== */}
      <Section bg="navy" className="!py-20">
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md sm:p-10">
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            <StatItem value={60} suffix="+" label="Years of Excellence" light />
            <StatItem value={25} suffix="+" label="Academic Programs" light />
            <StatItem value={15000} suffix="+" label="Alumni Network" light />
            <StatItem value={100} suffix="+" label="Expert Faculty" light />
          </div>
        </div>
      </Section>
    </div>
  );
}
