"use client";

import { useEffect } from "react";
import {
  Atom,
  Dna,
  BrainCircuit,
  Users,
  BookOpen,
  Leaf,
  FileText,
  Calendar,
  IndianRupee,
  Sparkles,
} from "lucide-react";
import { useScrollReveal } from "../hooks";
import {
  Section,
  SectionHeading,
  PageHero,
  NavGoldButton,
  NavOutlineButton,
  StatItem,
  IconBadge,
  BentoCard,
} from "../ui";

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/84bcb5cbdc3e.jpg";

type ResearchArea = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  projects: number;
};

const RESEARCH_AREAS: ResearchArea[] = [
  {
    icon: Atom,
    title: "Sciences & Materials",
    desc: "Nanomaterials, polymers, computational chemistry and advanced spectroscopy — our flagship research thrust with cutting-edge instrumentation and industry partnerships driving materials discovery for energy, healthcare and sustainability.",
    projects: 12,
  },
  {
    icon: Dna,
    title: "Life Sciences",
    desc: "Biotechnology, ecology and public-health research.",
    projects: 9,
  },
  {
    icon: BrainCircuit,
    title: "Computer Science & AI",
    desc: "Machine learning, NLP and applied data science.",
    projects: 14,
  },
  {
    icon: Users,
    title: "Social Sciences",
    desc: "Sociology, political studies and economic policy.",
    projects: 8,
  },
  {
    icon: BookOpen,
    title: "Humanities & Languages",
    desc: "Literary criticism, translation studies and cultural history.",
    projects: 7,
  },
  {
    icon: Leaf,
    title: "Sustainability & Environment",
    desc: "Climate, water resources and green technology.",
    projects: 10,
  },
];

const PUBLICATIONS = [
  {
    title: "Quantum Dot Solar Cells with Enhanced Stability",
    journal: "Nature Energy",
    year: "2024",
  },
  {
    title: "Socio-Economic Impact of Microfinance in Rural India",
    journal: "Economic & Political Weekly",
    year: "2024",
  },
  {
    title: "Transformer Models for Low-Resource Indian Languages",
    journal: "ACL 2024",
    year: "2024",
  },
  {
    title: "Biodiversity of Aravalli Ridge: A Decadal Study",
    journal: "Journal of Tropical Ecology",
    year: "2023",
  },
  {
    title: "Ethics in AI: A Framework for Higher Education",
    journal: "IEEE Transactions",
    year: "2023",
  },
  {
    title: "Water Quality Modeling of Yamuna Using Machine Learning",
    journal: "Environmental Modelling",
    year: "2023",
  },
];

type Project = {
  funder: string;
  title: string;
  pi: string;
  dept: string;
  amount: string;
  duration: string;
};

const PROJECTS: Project[] = [
  {
    funder: "DST",
    title: "Development of Perovskite Tandem Solar Cells",
    pi: "Dr. Vikram Rao",
    dept: "Physics",
    amount: "₹48 Lakhs",
    duration: "2023 – 2026",
  },
  {
    funder: "UGC",
    title: "Digital Humanities Archive of Regional Literature",
    pi: "Dr. Anita Desai",
    dept: "English",
    amount: "₹22 Lakhs",
    duration: "2024 – 2026",
  },
  {
    funder: "DBT",
    title: "Microbiome Analysis of Delhi Ridge Soil",
    pi: "Dr. Priya Menon",
    dept: "Botany",
    amount: "₹35 Lakhs",
    duration: "2023 – 2025",
  },
  {
    funder: "ICSSR",
    title: "Impact of Gig Economy on Urban Youth",
    pi: "Dr. Rajat Kapoor",
    dept: "Commerce",
    amount: "₹18 Lakhs",
    duration: "2024 – 2026",
  },
];

const PARTNERS = ["IIT Delhi", "JNU", "AIIMS", "CSIR", "TIFR", "IBM Research"];

export function ResearchPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Force-reveal anything already in the viewport on mount.
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

  const heroArea = RESEARCH_AREAS[0];
  const otherAreas = RESEARCH_AREAS.slice(1);

  return (
    <div ref={revealRef} className="page-enter">
      {/* ===== HERO ===== */}
      <PageHero
        eyebrow="Research & Innovation"
        title={
          <>
            Driving <span style={{ color: "#d4a04c" }}>Innovation</span>
          </>
        }
        description="Discovery-driven research across sciences, humanities and technology — funded by national agencies and pursued in partnership with industry."
        image={HERO_IMG}
      />

      {/* ===== IMPACT STATS (glass container on mesh) ===== */}
      <Section bg="mesh" className="!py-16 sm:!py-20">
        <div className="reveal">
          <SectionHeading
            eyebrow="Impact"
            title={
              <>
                Research that <span style={{ color: "#d4a04c" }}>Matters</span>
              </>
            }
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-10">
          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-[#1a2744]/8 bg-white/70 p-8 backdrop-blur-md sm:grid-cols-4 sm:p-10">
            <StatItem value={25} suffix="+" label="Research Centers" />
            <StatItem value={400} suffix="+" label="Publications (2024)" />
            <StatItem value={60} suffix="+" label="Ongoing Projects" />
            <StatItem value={5} suffix=".2 Cr+" label="Funding" />
          </div>
        </div>
      </Section>

      {/* ===== RESEARCH AREAS (Bento grid) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Areas"
            title={
              <>
                Explore Our <span style={{ color: "#d4a04c" }}>Research Areas</span>
              </>
            }
            description="Six interdisciplinary thrust areas where our scholars push the frontiers of knowledge."
          />
        </div>

        <div className="reveal-stagger mt-12 bento-grid">
          {/* Hero (wide) card — Sciences & Materials */}
          <BentoCard className="bento-wide !p-8">
            <IconBadge icon={heroArea.icon} size="lg" />
            <h3 className="mt-5 font-serif text-[24px] font-bold text-[#1a2744]">
              {heroArea.title}
            </h3>
            <p className="mt-2 max-w-md font-sans text-[14px] leading-relaxed text-[#6b7280]">
              {heroArea.desc}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-[#1a2744]/8 pt-4">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6b7280]">
                Active projects
              </span>
              <span className="font-serif text-[20px] font-bold text-[#d4a04c]">
                {heroArea.projects}
              </span>
            </div>
          </BentoCard>

          {/* Standard (narrow) cards */}
          {otherAreas.map((a) => (
            <BentoCard key={a.title} className="bento-narrow">
              <IconBadge icon={a.icon} />
              <h3 className="mt-5 font-serif text-[18px] font-bold text-[#1a2744]">
                {a.title}
              </h3>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#6b7280]">
                {a.desc}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-[#1a2744]/8 pt-3">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b7280]">
                  Active projects
                </span>
                <span className="font-sans text-[13px] font-bold text-[#d4a04c]">
                  {a.projects}
                </span>
              </div>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* ===== PUBLICATIONS (navy, glass cards) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Publications"
            title={
              <>
                Recent <span style={{ color: "#d4a04c" }}>Highlights</span>
              </>
            }
            description="Peer-reviewed contributions by our faculty and research scholars in leading journals and conferences."
            light
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PUBLICATIONS.map((p) => (
            <article
              key={p.title}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition-colors hover:border-[#d4a04c]/40"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#d4a04c]/25 bg-[#d4a04c]/12">
                <FileText className="h-5 w-5 text-[#d4a04c]" />
              </span>
              <div>
                <h3 className="font-serif text-[16px] font-semibold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-1.5 font-sans text-[13px] font-medium text-[#d4a04c]">
                  {p.journal}
                </p>
                <p className="mt-0.5 font-sans text-[12px] text-white/60">{p.year}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== ONGOING PROJECTS (muted, BentoCard) ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Projects"
            title={
              <>
                Ongoing <span style={{ color: "#d4a04c" }}>Projects</span>
              </>
            }
            description="Currently funded research initiatives led by our faculty across disciplines."
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <BentoCard key={p.title} className="!p-7">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#d4a04c]/12 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wide text-[#b8862f]">
                <Sparkles className="h-3 w-3" />
                Funded by {p.funder}
              </span>
              <h3 className="mt-4 font-serif text-[20px] font-bold leading-snug text-[#1a2744]">
                {p.title}
              </h3>
              <p className="mt-2 font-sans text-[13px] text-[#6b7280]">
                <span className="font-semibold text-[#1a2744]">{p.pi}</span>
                {" · "}
                {p.dept}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#1a2744]/8 pt-4">
                <div className="flex items-center gap-1.5">
                  <IndianRupee className="h-4 w-4 text-[#d4a04c]" />
                  <span className="font-serif text-[17px] font-semibold text-[#d4a04c]">
                    {p.amount.replace("₹", "")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-sans text-[12px] text-[#6b7280]">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.duration}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* ===== COLLABORATORS (partner logo cards) ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Partners"
            title={
              <>
                Our <span style={{ color: "#d4a04c" }}>Collaborators</span>
              </>
            }
            description="We partner with leading institutions and industries to amplify research impact."
            align="center"
          />
        </div>
        <div className="reveal-stagger mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="card-premium flex h-20 items-center justify-center rounded-2xl border border-[#1a2744]/8 bg-white px-3 text-center"
            >
              <span className="font-serif text-[15px] font-semibold text-[#1a2744]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FINAL CTA (navy, centered glass panel) ===== */}
      <Section bg="navy" className="!py-20">
        <div className="reveal mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/15 bg-white/[0.06] p-10 text-center backdrop-blur-md sm:p-14">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4a04c]/30 bg-[#d4a04c]/12">
              <Sparkles className="h-7 w-7 text-[#d4a04c]" />
            </span>
            <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-white">
              Have a research <span style={{ color: "#d4a04c" }}>idea?</span>
            </h2>
            <p className="max-w-xl font-sans text-[15px] leading-relaxed text-white/72">
              Connect with our research office to explore collaborations,
              fellowships and funding — or take the next step in your academic
              journey with a Ph.D. program.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <NavOutlineButton to="contact" light>
                Contact Research Office
              </NavOutlineButton>
              <NavGoldButton to="admissions">Apply for Ph.D.</NavGoldButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
