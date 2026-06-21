# DOWNLOADS — Downloads Page Agent Record

**Task ID:** DOWNLOADS
**Agent:** full-stack-developer (Downloads page)
**File written:** `src/components/site/pages/downloads.tsx`

## Context reviewed
- `worklog.md` — full design system (navy #1a2744, navy-deep #121c33, gold #d4a04c / #b8862f), serif Playfair / sans Inter, `.card-lift`, `.reveal` / `.reveal-stagger`, `.page-enter`, `.btn-gold` / `.btn-outline`.
- `pages/home.tsx` — page-enter wrapper + `revealRef` + the 100 ms force-is-visible `useEffect` pattern copied verbatim.
- `pages/careers.tsx` — Final-CTA pattern with `NavOutlineButton(light)` + green WhatsApp anchor (`#25D366`) + tertiary gold text link.
- `ui.tsx` — `Section`, `SectionHeading`, `PageHero`, `NavOutlineButton`, `StatItem` signatures confirmed.
- `router.tsx` — `PageKey="downloads"` and `"contact"` / `"admissions"` exist; `SOCIAL_LINKS.whatsapp` available.
- `hooks.ts` — `useScrollReveal<T>()` returns ref to attach to page wrapper.

## Sections implemented (all 6 per spec)
1. **PageHero** — eyebrow "Downloads", title `Forms, Syllabus & <span gold>Resources</span>`, the exact description from the brief, hero image `e8c509f6af90.jpg`.
2. **Download Center** (white) — `SectionHeading` eyebrow="Documents" title=`<span gold>Download</span> Center`. Functional `useState` filter with 7 pill buttons (All / Admission Forms / Academic / Fee & Scholarships / Syllabus / Previous Papers / Brochures); "All" is the default active state with gold fill. A small live result counter ("N documents in {category}") sits between the pills and the list. The 12 specified documents render as horizontal row cards (`.card-lift`, white, ring-1): LEFT = gold icon (`FileText` for PDF/DOC, `FileSpreadsheet` for XLS, `FileArchive` for ZIP) + navy serif-semibold name + uppercase gold-dark category tag; MIDDLE = type badge (PDF red / DOC navy / XLS green / ZIP amber — subtle tinted bg + ring, no blue/indigo) + gray size; RIGHT = gold "Download" button rendered as a styled `<a href="#" onClick={preventDefault}>` with the `Download` icon, `aria-label` per item.
3. **Stats strip** (muted, `!py-14`) — 4 `StatItem`s: `50+ Forms Available`, `100% Free`, `24/7 Access` (value=24, suffix="/7"), `1-click Download` (value=1, suffix="-click").
4. **How to Use These Forms** (white) — centered `SectionHeading` eyebrow="Help" title=`<span gold>How</span> to Use These Forms`. 3-step `.card-lift` cards (md:grid-cols-3) each with a gold-filled circle holding the serif-extrabold step number, navy serif-bold title, gray sans description. Below the grid, a reassurance row of 3 `CheckCircle2` + small text items (Always free / Verified by administration / Updated for 2025-26).
5. **Request a Document CTA** (navy, `!py-16`) — centered serif "Can't find what you need?" with gold accent, subtitle, then a button row: `NavOutlineButton to="contact" light` "Request a Document" + green WhatsApp anchor (`#25D366`, opens `SOCIAL_LINKS.whatsapp` in new tab) + tertiary gold "Go to Admissions" text button.

## Rules honored
- `"use client"`, `export function DownloadsPage()`, `revealRef` + `.page-enter` wrapper.
- Force-is-visible `useEffect` copied verbatim from home.tsx.
- `.reveal` on every major block, `.reveal-stagger` on the documents list + steps grid + stats grid.
- No `SiteHeader` / `SiteFooter` (parent supplies them).
- Only lucide-react icons (FileText, FileArchive, FileSpreadsheet, Download, MessageCircle, CheckCircle2).
- Palette strictly navy / gold / gold-dark / white / gray / muted-cream, plus subtle functional red / green / amber for file-type badges — **no indigo, no blue**.
- Responsive: download rows collapse to a stacked layout under `sm:`, filter pills `flex-wrap`, stat grids use `grid-cols-2 lg:grid-cols-4`.
- No other files modified.

## Verification
- `bun run lint` → clean, zero errors printed for downloads.tsx.
- `dev.log` → final lines show `✓ Compiled in 178ms` and `GET / 200 in 13ms` after the file landed; the earlier transient `Module not found` was an HMR timing artifact that resolved on the next recompile.
