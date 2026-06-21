# Task ID: ADMISSIONS-REBUILD — Admissions page rebuild

Agent: full-stack-developer (Admissions rebuild)
File touched: `/home/z/my-project/src/components/site/pages/admissions.tsx` (OVERWRITTEN)

## What I built
A single client component `AdmissionsPage()` for the Shivaji College website — fully rebuilt with premium glassmorphism, 10 expandable course panels, and a complete apply flow. Matches the home.tsx visual pattern.

## Sections (9 total)
1. **PageHero** — eyebrow "Admissions 2025-26", title with gold span "Join Shivaji College", description, HD Indian students hero image `ef13916d9cc1.jpg` (4320x2880).
2. **Process Steps (white, glass)** — `SectionHeading` center "How to Apply". 4 glass cards (`rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-xl`), each with a gold-gradient circle (serif bold step number), navy serif title, gray description. Steps: Register Online / Submit Documents / Merit & Counselling / Pay Fees & Enroll.
3. **Eligibility (muted, glass)** — 2 columns. LEFT `SectionHeading` "Are you eligible?" + paragraph + "Check & Apply" button (scrolls to form). RIGHT glass card with 6 gold `CheckCircle2` bullets.
4. **COURSES OFFERED — expansion panels (white, glass)** — THE KEY FEATURE. `SectionHeading` "Programs & Fees". 10 glass course panels with `useState` open-index (first open by default, accordion behaviour). Collapsed: subject icon, navy serif name, duration badge, seats badge, gold fee, chevron (rotates 180° on open). Expanded (smooth grid-rows-[1fr]→[0fr] + opacity transition): eligibility text, duration/seats chips, 5 gold-bullet syllabus highlights, gold-gradient "Apply for this course" button (scrolls to #apply-form) + outline "Enquire" button (navigate to contact). 10 courses: B.A.(Hons) English / Pol Sci / History, B.Sc.(Hons) Physics / Chemistry / Mathematics / Botany, B.Com(Hons), B.Sc. CS, M.A./M.Sc. — each with bespoke lucide icon (BookOpen, Scale, Landmark, Atom, FlaskConical, Sigma, Leaf, BarChart3, Laptop, GraduationCap).
5. **Important Dates (muted, glass table)** — `SectionHeading` center "Important Dates". Glass table (`bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl`). Navy header row, alternating translucent rows. Columns: Event | Date | Status. 6 rows with colored status badges (Open=green, Upcoming=gold) + dot indicator.
6. **Fee Structure Summary (white, glass)** — `SectionHeading` center "Transparent Fee Structure". 3 glass cards (UG / PG / Research) with gold-gradient price text (`bg-gradient-to-r from-[#d4a04c] to-[#b8862f] bg-clip-text text-transparent`), subject icon, tier label, program list, description, "Apply for {tier}" link.
7. **Scholarships (navy, glassmorphism)** — `SectionHeading` light "Financial Support". Grid (sm:2, lg:4) of 4 glass cards on `bg-white/[0.06] backdrop-blur-md border border-white/15` with gold icon chip, white title, white/70 desc. Hover lifts border to gold. Cards: Merit / Need-based / SC-ST-OBC / Sports & ECA. Outline CTA button.
8. **Apply Now CTA + Form (white, id="apply-form")** — `SectionHeading` center "Apply Now". 2 columns. LEFT: custom glass FormCard wrapper (`bg-white/70 backdrop-blur-md border border-white/40`) with `SiteForm` type="admissions" — 6 fields: name*, email*, phone*, "Program of Interest" select (12 options), "Category" select (General/OBC/SC/ST/EWS), message textarea. successMessage mentions navpreet8testing@gmail.com + 24-hour SLA. RIGHT: navy gradient glass info card (`bg-gradient-to-br from-[#1a2744]/95 to-[#2a3a5c]/95 backdrop-blur-xl`) with email/phone/WhatsApp/clock contact rows + "Documents Needed" list (10+2 marksheet, ID proof, photo, caste cert, migration cert) each with gold icon chip.
9. **Final CTA (navy, glassmorphism)** — centered glass panel (`bg-white/[0.06] backdrop-blur-md border border-white/15`): "Still have questions?" + `NavOutlineButton to="contact" light` "Contact Admissions" + green WhatsApp button (`bg-[#25D366]`) linking to `SOCIAL_LINKS.whatsapp`.

## Patterns reused / followed spec
- `useScrollReveal<HTMLDivElement>()` ref on wrapper `<div className="page-enter">`.
- Force-is-visible `useEffect` (100ms timeout, scans `.reveal:not(.is-visible)` for above-the-fold items).
- `.reveal` on every major block, `.reveal-stagger` on every grid/list.
- `"use client"`, `export function AdmissionsPage()`, NO header/footer.
- Palette strictly navy (#1a2744, #121c33, #2a3a5c), gold (#d4a04c, #b8862f), white, gray (#5a6478). Green #25D366 only for WhatsApp CTAs. NO indigo/blue.
- Glass recipes per spec: white sections `bg-white/70 backdrop-blur-md border border-white/40`, navy sections `bg-white/[0.06] backdrop-blur-md border border-white/15`, navy gradient panels `bg-gradient-to-br from-[#1a2744]/95 to-[#2a3a5c]/95 backdrop-blur-xl`, gold gradients `from-[#d4a04c] to-[#b8862f]`.
- `.card-lift` for hover-scale on cards, `.btn-gold`/`.btn-outline` button classes.

## Expandable course panel animation technique
Used the modern CSS grid trick for smooth height animation:
```tsx
<div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
  <div className="overflow-hidden">…content…</div>
</div>
```
This animates from 0 height to natural height without measuring DOM — robust and smooth. Chevron rotates 180° via `rotate-180` class on open.

## Imports
- `react` → `useEffect`, `useState`
- `../router` → `useRouter`, `SOCIAL_LINKS`
- `../hooks` → `useScrollReveal`
- `../ui` → `Section`, `SectionHeading`, `PageHero`, `NavOutlineButton`
- `../site-form` → `SiteForm`
- `lucide-react` → 26 icons (CheckCircle2, Phone, Mail, Clock, ArrowRight, ChevronDown, BookOpen, Scale, Landmark, Atom, FlaskConical, Sigma, Leaf, BarChart3, Laptop, GraduationCap, Award, HeartHandshake, Users, Trophy, FileText, IdCard, Image as ImageIcon, ScrollText, FileCheck, MessageCircle)

## Form submission
`SiteForm` auto-POSTs to `/api/contact` (persists to DB + emails navpreet8testing@gmail.com). successMessage explicitly states the email + 24-hour contact SLA as required. meta: `{ source: "admissions-page" }`.

## Lint / compile
- `bun run lint` — 0 errors across the repo (admissions.tsx clean).
- All 26 lucide icons verified to exist in the installed version.
- `dev.log` shows dev server compiled successfully (Ready in 998ms, GET / 200).
