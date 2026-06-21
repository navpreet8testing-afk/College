# Task ID: CONTACT-BENTO

Agent: full-stack-developer (Contact Bento rebuild)
File: `/home/z/my-project/src/components/site/pages/contact.tsx`

## Work Log
- Read `worklog.md` Task 5 entry — design system tokens (navy #1a2744, navy-deep #121c33, gold #d4a04c, gold-dark #b8862f, Playfair serif + Inter sans, Bento utilities `.bento-grid`/`.bento-wide`/`.bento-narrow`, premium tokens `--hairline`/`--shadow-soft`/`--shadow-lift`, `Section` bg enum, `IconBadge` sm/md/lg + light, `BentoCard` wrapper).
- Read `home.tsx` — confirmed reference pattern: `page-enter` wrapper + `revealRef` + force-`.is-visible` 100ms mount useEffect, `Section`/`SectionHeading`/`PageHero` usage, `BentoCard`/`IconBadge` composition, navy mesh glass cards (`border-white/10 bg-white/[0.05] backdrop-blur-md`).
- Read existing `contact.tsx` — preserved the form invocation EXACTLY: `SiteForm type="contact"` with fields (name, email, phone, subject, message), `submitLabel="Send Message"`, `successMessage` mentioning navpreet8testing@gmail.com. Also preserved CONTACT_ROWS, SOCIALS, DEPARTMENTS data shapes, the OpenStreetMap iframe, and SOCIAL_LINKS/COLLEGE_PHONE/COLLEGE_EMAIL imports.
- Read `ui.tsx` — confirmed full API: `Section bg="mesh|navy|muted|white|mesh-navy"`, `SectionHeading` (eyebrow/title/description/align/light), `PageHero` (glass content panel + hover zoom), `NavGoldButton`/`NavOutlineButton`, `BentoCard` (applies `.card-premium`), `IconBadge` (icon/size/light).
- Read `site-form.tsx` — `SiteForm` POSTs to `/api/contact` (stores to DB + emails navpreet8testing@gmail.com); `FormCard` renders `rounded-xl bg-white p-6/8 shadow-sm ring-1 ring-black/5` with title/subtitle. Used both as-is.
- Read `router.tsx` — confirmed `SOCIAL_LINKS` (facebook/instagram/twitter/youtube/whatsapp real URLs), `COLLEGE_PHONE` "+91 11 2569 2767", `COLLEGE_EMAIL` "navpreet8testing@gmail.com".
- Completely overwrote `contact.tsx` as a single `"use client"` module exporting `ContactPage()`.
- Section 1 — `PageHero` eyebrow "Contact Us", title `Get in <gold>Touch</gold>`, description, image `1f074f4c9e0c.jpg` (3000x2000 Indian campus).
- Section 2 — Contact form + details on `Section bg="mesh"`: `SectionHeading` eyebrow "Get in Touch" + `Send a Message or <gold>Reach Us Directly</gold>` + description. 2-col grid (`reveal-stagger`): LEFT = `FormCard` (glass white, title "Send a Message", subtitle) wrapping the EXACT preserved `SiteForm type="contact"` invocation (same 5 fields, same successMessage mentioning navpreet8testing@gmail.com). RIGHT = navy glassmorphism card `rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md` with gold eyebrow + `Reach Us <gold>Directly</gold>` serif title + 4 contact rows each using `IconBadge size="sm" light` (MapPin/Phone/Mail/Clock) + hairline-divided "Follow Us" footer with 6 social links (real URLs incl. WhatsApp) as circular glass chips that fill gold on hover.
- Section 3 — Department Bento (2x2) on `Section bg="white"`: `SectionHeading` eyebrow "Departments" + `Connect with the <gold>Right Office</gold>` + description. `grid grid-cols-1 sm:grid-cols-2 gap-6` of 4 `BentoCard !p-7`, each with `IconBadge size="lg"` (GraduationCap/BookOpen/FlaskConical/Home per office), ArrowUpRight gold accent, navy serif 20px name, hairline-divided footer with Phone + Mail rows (gold icons, tel:/mailto: links, hover navy).
- Section 4 — Map + quick contacts on `Section bg="muted"`: `SectionHeading` eyebrow "Find Us" + `Visit Our <gold>Campus</gold>` + description. 2-col grid: LEFT = OpenStreetMap iframe in `aspect-[16/11] rounded-2xl shadow-[...] ring-1 ring-[#1a2744]/8`. RIGHT = `grid grid-cols-1 sm:grid-cols-2 gap-3` of 4 compact department mini-cards (`card-lift rounded-xl border bg-white p-4`) each with navy serif name + Phone + Mail rows (gold icons) — serves as a quick-reference panel beside the map.
- Section 5 — Final CTA on `Section bg="navy" !py-20`: centered `Still have <gold>questions?</gold>` serif title + subtitle + `NavGoldButton to="admissions"` "Apply Now" + `NavOutlineButton to="academics" light` "Explore Programs".
- Page wrapped in `<div ref={revealRef} className="page-enter">` with the copied force-`.is-visible` 100ms mount-time useEffect from `home.tsx`.
- Palette strictly navy / navy-deep / gold / gold-dark / white / gray — NO indigo, NO Tailwind blue. Only lucide-react icons. NO header/footer (rendered by layout). NO touching of chatbot.tsx, /api/chat, /api/contact, site-form.tsx, or the email.
- Ran `bun run lint` — zero errors. Dev server log shows clean compilation (no errors) and an active `POST /api/contact 200` with Prisma INSERT confirming the form → DB → email pipeline still functions end-to-end.

## Stage Summary
- `contact.tsx` completely rebuilt; exports `ContactPage()`.
- 5 sections delivered, all premium Bento / glassmorphism consistent with the v5 design system:
  1. `PageHero` (glass content panel + hover zoom) with the new Indian campus hero image `1f074f4c9e0c.jpg`.
  2. Contact form + details on `bg="mesh"` — LEFT `FormCard` (glass white) wrapping the EXACT preserved `SiteForm type="contact"` (5 fields: name/email/phone/subject/message, successMessage mentioning navpreet8testing@gmail.com); RIGHT navy glassmorphism card (`border-white/10 bg-white/[0.05] backdrop-blur-md`) with `IconBadge light` contact rows + real social links (incl. WhatsApp).
  3. Department Bento (2x2) on `bg="white"` — 4 `BentoCard !p-7` each with `IconBadge size="lg"` (GraduationCap/BookOpen/FlaskConical/Home) + tel:/mailto: Phone & Mail rows.
  4. Map + quick contacts on `bg="muted"` — OpenStreetMap iframe (`rounded-2xl ring-1 ring-[#1a2744]/8`) on left, 4 compact department mini-cards on right.
  5. Final CTA on `bg="navy"` — `Still have <gold>questions?</gold>` + Apply Now / Explore Programs routing CTAs.
- **Form still emails navpreet8testing@gmail.com**: the `SiteForm type="contact"` invocation is byte-for-byte preserved (same 5 fields, same successMessage), so it still POSTs to `/api/contact` which stores to the `ContactSubmission` table AND emails navpreet8testing@gmail.com. Dev log confirms `POST /api/contact 200` + Prisma INSERT active.
- Lint-clean new file; route compiles on the dev server. Mobile-first responsive (1-col → 2-col at sm/lg). All scroll-reveal + page-enter animations wired.
- Did NOT touch: chatbot.tsx, /api/chat, /api/contact, site-form.tsx, email navpreet8testing@gmail.com.
