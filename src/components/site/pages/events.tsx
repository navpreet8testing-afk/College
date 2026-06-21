"use client";

import { useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Music,
  Cpu,
  Trophy,
  Mic,
  Drama,
  Lightbulb,
  MessageCircle,
  Tag,
  Building2,
  Users,
  Sparkles,
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

const HERO_IMG = "https://sfile.chatglm.cn/images-ppt/6fb3150be1c0.jpg";

/* ---------- Section 2: Upcoming events ---------- */
const UPCOMING = [
  {
    date: "JUN 15",
    title: "International Conference on AI & Society",
    venue: "Main Auditorium",
    time: "9:00 AM",
  },
  {
    date: "JUL 02",
    title: "Admissions Open House 2025",
    venue: "Campus",
    time: "10:00 AM",
  },
  {
    date: "JUL 15",
    title: "Semester Commencement & Orientation",
    venue: "All Departments",
    time: "9:30 AM",
  },
  {
    date: "AUG 12",
    title: "Independence Day Flag Hoisting",
    venue: "Main Ground",
    time: "8:00 AM",
  },
  {
    date: "SEP 05",
    title: "Teachers' Day Celebrations",
    venue: "Auditorium",
    time: "11:00 AM",
  },
];

/* ---------- Section 3: Flagship events ---------- */
const FLAGSHIP = [
  {
    icon: Music,
    name: "Utsav",
    desc: "Annual cultural fest celebrating music, dance and art.",
    month: "February",
  },
  {
    icon: Cpu,
    name: "TechGenesis",
    desc: "National-level technology symposium & hackathon.",
    month: "September",
  },
  {
    icon: Trophy,
    name: "Shivaji Premier League",
    desc: "Inter-college cricket championship under floodlights.",
    month: "November",
  },
  {
    icon: Mic,
    name: "Confluence",
    desc: "Literary & debating festival of words and ideas.",
    month: "August",
  },
  {
    icon: Drama,
    name: "Rangmanch",
    desc: "Theatre festival of stage plays and street performances.",
    month: "October",
  },
  {
    icon: Lightbulb,
    name: "Pragati",
    desc: "Innovation & startup summit with pitch battles.",
    month: "April",
  },
];

/* ---------- Section 4: Past events gallery ---------- */
const GALLERY = [
  { src: "https://sfile.chatglm.cn/images-ppt/669534ac63fd.jpg", label: "Utsav 2024", category: "Cultural" },
  { src: "https://sfile.chatglm.cn/images-ppt/afaf375d7649.jpg", label: "TechGenesis 2024", category: "Tech" },
  { src: "https://sfile.chatglm.cn/images-ppt/be7526cd5b99.jpg", label: "Shivaji Premier League 2024", category: "Sports" },
  { src: "https://sfile.chatglm.cn/images-ppt/492ca6a761d6.jpg", label: "Convocation 2024", category: "Graduation" },
  { src: "https://sfile.chatglm.cn/images-ppt/94a9271eead8.jpg", label: "Confluence 2024", category: "Literary" },
  { src: "https://sfile.chatglm.cn/images-ppt/262ec3863ebd.jpg", label: "Rangmanch 2024", category: "Theatre" },
];

/* ---------- Section 6: Venue features ---------- */
const VENUES = [
  { icon: Building2, label: "750-seat Auditorium", desc: "Fully air-conditioned with stage & green rooms." },
  { icon: Users, label: "Conference Halls", desc: "Three seminar halls for symposiums & workshops." },
  { icon: Trophy, label: "Sports Ground", desc: "Cricket, football, athletics & floodlit courts." },
];

export function EventsPage() {
  const { navigate } = useRouter();
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Re-run reveal scan on mount — force above-the-fold elements visible.
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
        eyebrow="Events"
        title={
          <>
            Where <span style={{ color: "#d4a04c" }}>Memories</span> Are Made
          </>
        }
        description="From cultural extravaganzas to academic symposiums and sports championships — discover what's happening at Shivaji College."
        image={HERO_IMG}
      />

      {/* ===== UPCOMING EVENTS ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="Upcoming"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Mark</span> Your Calendar
              </>
            }
            description="A curated line-up of conferences, ceremonies and celebrations coming up this season."
          />
        </div>

        <div className="reveal-stagger mt-10 flex flex-col gap-4">
          {UPCOMING.map((ev) => (
            <div
              key={ev.title}
              className="card-lift flex flex-col items-stretch gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:gap-6 sm:p-5"
            >
              {/* LEFT — gold date block */}
              <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-[#d4a04c] px-6 py-4 text-center sm:w-28">
                <span className="font-serif text-[26px] font-extrabold leading-none text-white">
                  {ev.date.split(" ")[0]}
                </span>
                <span className="mt-1 font-sans text-[18px] font-bold leading-none text-white">
                  {ev.date.split(" ")[1]}
                </span>
              </div>

              {/* MIDDLE — title + venue + time */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[18px] sm:text-[20px] font-bold leading-snug text-[#1a2744]">
                  {ev.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-sans text-[13px] text-[#5a6478]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#d4a04c]" />
                    {ev.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#d4a04c]" />
                    {ev.time}
                  </span>
                </div>
              </div>

              {/* RIGHT — gold register link */}
              <div className="shrink-0">
                <a
                  href="#/events"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("contact");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#d4a04c] bg-[#d4a04c]/5 px-5 py-2.5 font-sans text-[13px] font-semibold text-[#b8862f] transition-colors hover:bg-[#d4a04c] hover:text-white"
                >
                  Register
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FLAGSHIP EVENTS (navy) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Flagship"
            title={
              <>
                Our <span style={{ color: "#d4a04c" }}>Signature</span> Events
              </>
            }
            description="Six annual marquee events that define the Shivaji College calendar."
            light
          />
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP.map((f) => (
            <div
              key={f.name}
              className="card-lift group flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                  <f.icon className="h-6 w-6 text-[#d4a04c]" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wide text-[#d4a04c]">
                  <Calendar className="h-3 w-3" />
                  {f.month}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-[20px] font-bold text-white">
                {f.name}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/70">
                {f.desc}
              </p>
              <button
                onClick={() => navigate("campus-life")}
                className="mt-4 inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[#d4a04c] transition-colors hover:text-[#e8c178]"
              >
                View Highlights
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== PAST EVENTS GALLERY ===== */}
      <Section bg="muted">
        <div className="reveal">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Memories</span> Revisited
              </>
            }
            description="A glimpse of the moments that defined our recent events."
          />
        </div>

        <div className="reveal-stagger mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {GALLERY.map((g) => (
            <div
              key={g.label}
              className="gallery-item relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={g.src}
                alt={g.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121c33]/90 via-[#121c33]/20 to-transparent" />
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#d4a04c] px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-white">
                  <Tag className="h-2.5 w-2.5" />
                  {g.category}
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="block font-serif text-[15px] font-bold leading-tight text-white">
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== BY THE NUMBERS ===== */}
      <Section bg="white">
        <div className="reveal">
          <SectionHeading
            eyebrow="By the Numbers"
            title={
              <>
                A Year of <span style={{ color: "#d4a04c" }}>Moments</span>
              </>
            }
            description="From intimate workshops to stadium-scale fests, our calendar never sleeps."
            align="center"
          />
        </div>
        <div className="reveal mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatItem value={200} suffix="+" label="Events Yearly" />
          <StatItem value={50000} suffix="+" label="Footfall" />
          <StatItem value={30} suffix="+" label="Cultural Fests" />
          <StatItem value={15} suffix="+" label="Sports Meets" />
        </div>
      </Section>

      {/* ===== HOST WITH US / VENUE BOOKING (navy) ===== */}
      <Section bg="navy">
        <div className="reveal">
          <SectionHeading
            eyebrow="Host With Us"
            title={
              <>
                <span style={{ color: "#d4a04c" }}>Book</span> Our Venue
              </>
            }
            light
          />
        </div>

        <div className="reveal-stagger mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — copy + venues + enquire button */}
          <div>
            <p className="font-sans text-[15px] leading-relaxed text-white/80">
              Host your next conference, summit or celebration at Shivaji
              College. Our campus offers versatile venues equipped with modern
              audio-visual systems, ample parking and on-site catering — perfect
              for academic gatherings, cultural shows and corporate events.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {VENUES.map((v) => (
                <div
                  key={v.label}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a04c]/15">
                    <v.icon className="h-5 w-5 text-[#d4a04c]" />
                  </div>
                  <div>
                    <div className="font-serif text-[15px] font-bold text-white">
                      {v.label}
                    </div>
                    <div className="mt-0.5 font-sans text-[13px] text-white/65">
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <NavOutlineButton to="contact" light>
                <Sparkles className="h-4 w-4" />
                Enquire Now
              </NavOutlineButton>
            </div>
          </div>

          {/* RIGHT — WhatsApp booking panel */}
          <div className="flex flex-col justify-center rounded-2xl bg-white/[0.04] p-8 ring-1 ring-white/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15">
              <MessageCircle className="h-7 w-7 text-[#25D366]" />
            </div>
            <h3 className="mt-5 font-serif text-[24px] font-bold text-white">
              Prefer to talk it through?
            </h3>
            <p className="mt-2 font-sans text-[14px] leading-relaxed text-white/75">
              Chat with our events team on WhatsApp for instant venue
              availability, pricing and bespoke packages. We typically reply
              within minutes during working hours.
            </p>

            <ul className="mt-5 space-y-2 font-sans text-[13px] text-white/75">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4a04c]" />
                Same-day venue walkthrough slots
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4a04c]" />
                Custom catering &amp; decoration partners
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4a04c]" />
                Transparent, all-inclusive pricing
              </li>
            </ul>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-sans text-[15px] font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat about venue booking
            </a>
          </div>
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section bg="white" className="!py-16">
        <div className="reveal flex flex-col items-center gap-6 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10">
            <MessageCircle className="h-7 w-7 text-[#25D366]" />
          </div>
          <h2 className="max-w-2xl font-serif text-[28px] sm:text-[36px] font-bold leading-tight text-[#1a2744]">
            Want event updates on{" "}
            <span style={{ color: "#25D366" }}>WhatsApp?</span>
          </h2>
          <p className="max-w-xl font-sans text-[15px] text-[#5a6478]">
            Join our broadcast list to get reminders, photos and behind-the-scenes
            moments from every Shivaji College event — straight to your phone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3 font-sans text-[15px] font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Join WhatsApp List
            </a>
            <NavOutlineButton to="news">
              Read Latest News
              <ArrowRight className="h-4 w-4" />
            </NavOutlineButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
