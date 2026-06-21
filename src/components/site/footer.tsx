"use client";

import {
  useRouter,
  NAV_ITEMS,
  SOCIAL_LINKS,
  COLLEGE_PHONE,
  COLLEGE_EMAIL,
  type PageKey,
} from "./router";
import { CollegeLogo } from "./brand";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const QUICK_LINKS: { key: PageKey; label: string }[] = [
  ...NAV_ITEMS,
];

const RESOURCE_LINKS: { key: PageKey; label: string }[] = [
  { key: "student-portal", label: "Student Portal" },
  { key: "faculty-portal", label: "Faculty Portal" },
  { key: "library", label: "Library" },
  { key: "downloads", label: "Downloads" },
  { key: "grievance", label: "Grievance Redressal" },
];

/**
 * Shared footer — byte-identical on every page.
 * Dark navy, 4-column layout, working social icons + WhatsApp, bottom bar.
 */
export function SiteFooter() {
  const { navigate } = useRouter();
  const go = (key: PageKey) => navigate(key);

  return (
    <footer className="grain-bg relative bg-[#121c33] text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — brand */}
          <div>
            <CollegeLogo variant="light" />
            <p className="mt-5 font-sans text-[14px] leading-relaxed text-white/70">
              Shivaji College is dedicated to academic excellence, innovation
              and the holistic development of every student — preparing leaders
              for a successful tomorrow since 1962.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
                { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { Icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
                { Icon: Linkedin, href: "https://www.linkedin.com/school/university-of-delhi", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#d4a04c]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            {/* WhatsApp CTA */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 font-sans text-[13px] font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="font-serif text-[16px] font-bold uppercase tracking-wider text-[#d4a04c]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => go(item.key)}
                    className="footer-link font-sans text-[14px] text-white/80"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h3 className="font-serif text-[16px] font-bold uppercase tracking-wider text-[#d4a04c]">
              Resources
            </h3>
            <ul className="mt-5 space-y-3">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.key}>
                  <button
                    onClick={() => go(l.key)}
                    className="footer-link font-sans text-[14px] text-white/80"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-serif text-[16px] font-bold uppercase tracking-wider text-[#d4a04c]">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 font-sans text-[14px] text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a04c]" />
                <span>
                  Shivaji College, Ring Road,
                  <br />
                  New Delhi - 110060, India
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COLLEGE_PHONE.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#d4a04c]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#d4a04c]" />
                  <span>{COLLEGE_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COLLEGE_EMAIL}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#d4a04c]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#d4a04c]" />
                  <span>{COLLEGE_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a04c]" />
                <span>Mon – Sat: 8:30 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <p className="font-sans text-[13px] text-white/55">
            © {new Date().getFullYear()} Shivaji College. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-link font-sans text-[13px] text-white/60"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
