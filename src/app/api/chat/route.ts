import { NextRequest, NextResponse } from "next/server";

/**
 * Shivaji College assistant — "Shivu".
 *
 * Strategy: try Google Gemini first for conversational replies. If Gemini
 * is unavailable (quota exhausted / network), fall back to a rich local
 * knowledge engine that pattern-matches intents and returns structured,
 * genuinely helpful answers about the college. The local engine is
 * comprehensive enough that the chatbot is ALWAYS useful.
 */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = "gemini-2.0-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const SYSTEM_PROMPT = `You are "Shivu", the friendly virtual assistant for Shivaji College (Estd. 1962), a NAAC A+ accredited constituent college of the University of Delhi at Ring Road, New Delhi - 110060.

Help prospective students, parents and visitors with admissions, programs (Arts, Science, Commerce, Computer Science, PG, Research), fees, campus life, library, research, placements and contact details.

Style: warm, concise (2-5 sentences), scholarly but approachable. If unsure of exact figures, direct them to +91 79732 90805 or info@shivajicollege.edu.in. Never invent fees, dates or statistics.`;

interface ChatTurn {
  role: "user" | "model";
  text: string;
}

/* ----------------- RICH LOCAL KNOWLEDGE ENGINE ----------------- */
/* Pattern-matched intents. Each returns a structured, helpful answer so the
   bot feels intelligent even when Gemini is rate-limited. */

interface KBEntry {
  keywords: string[];
  answer: string;
  chips?: string[]; // suggested follow-up chips
}

const KNOWLEDGE_BASE: KBEntry[] = [
  {
    keywords: ["course", "program", "programme", "subject", "stream", "department", "degree", "bachelor", "master"],
    answer:
      "We offer 25+ programs across 6 streams 🎓\n\n• Arts (B.A. Hons) — English, Hindi, Political Science, History, Sanskrit, Economics\n• Science (B.Sc. Hons) — Physics, Chemistry, Botany, Zoology, Mathematics\n• Commerce (B.Com Hons) — Accounting, Finance, Business Management\n• Computer Science (B.Sc. CS) — CS, IT, Data Science\n• Postgraduate — M.A., M.Sc., M.Com\n• Research — M.Phil & Ph.D.\n\nWhich stream interests you? I can share eligibility, fees or duration.",
    chips: ["Arts eligibility", "B.Sc. CS fees", "How to apply", "Ph.D. admission"],
  },
  {
    keywords: ["arts", "ba", "humanities", "english", "hindi", "history", "political"],
    answer:
      "B.A. (Hons) programs 📚\n• Specializations: English, Hindi, Political Science, History, Sanskrit, Economics\n• Duration: 3 years (6 semesters)\n• Eligibility: 10+2 with 50% aggregate\n• Annual fee: ₹18,500\n• Seats: 480 across specializations\n\nBest fit for civil services, journalism, law, teaching and research careers. Want the apply process?",
    chips: ["How to apply", "Fee structure", "Scholarships"],
  },
  {
    keywords: ["science", "bsc", "physics", "chemistry", "botany", "zoology", "math", "maths", "mathematics"],
    answer:
      "B.Sc. (Hons) programs 🔬\n• Specializations: Physics, Chemistry, Botany, Zoology, Mathematics\n• Duration: 3 years\n• Eligibility: 10+2 Science with 55%\n• Annual fee: ₹24,800\n• Seats: 360\n\nModern labs, field trips and research projects from semester 1. Great for research, healthcare, data and tech careers. Want details on a specific subject?",
    chips: ["B.Sc. CS details", "How to apply", "Lab facilities"],
  },
  {
    keywords: ["commerce", "bcom", "account", "finance", "business"],
    answer:
      "B.Com (Hons) 💼\n• Duration: 3 years\n• Eligibility: 10+2 with 50%\n• Annual fee: ₹21,200\n• Seats: 420\n\nCovers accounting, finance, taxation, business management and analytics. Strong placement record with Deloitte, EY, KPMG. Want the apply process?",
    chips: ["How to apply", "Placements", "Fee structure"],
  },
  {
    keywords: ["computer", "cs", "bsc cs", "data science", "it ", "software", "coding", "programming"],
    answer:
      "B.Sc. Computer Science 💻\n• Duration: 3 years\n• Eligibility: 10+2 with Maths, 60%\n• Annual fee: ₹42,000\n• Seats: 120\n\nSpecializations in CS, IT and Data Science. Industry tie-ups with Google, Microsoft, Amazon. 100% placement record 2025 — highest ₹24 LPA. Want to apply?",
    chips: ["How to apply", "Placements", "Scholarships"],
  },
  {
    keywords: ["postgraduate", "pg", "master", "ma ", "m.sc", "mcom", "m.com"],
    answer:
      "Postgraduate programs 🎓\n• M.A. in English, Hindi, Political Science, History\n• M.Sc. in Physics, Chemistry, Mathematics, Botany, Zoology\n• M.Com\n• Duration: 2 years\n• Eligibility: Bachelor's degree with 55%\n• Annual fee: ₹28,500\n\nResearch-focused with thesis component. Want the apply process?",
    chips: ["How to apply", "Ph.D. admission", "Fee structure"],
  },
  {
    keywords: ["research", "phd", "ph.d", "mphil", "m.phil", "doctorate", "publication"],
    answer:
      "Research programs 🔬\n• M.Phil & Ph.D. across all departments\n• Duration: 3-5 years (Ph.D.)\n• Eligibility: Master's degree with 60%\n• Annual fee: ₹35,000\n• 25+ research centers, 400+ publications (2024)\n• 60+ ongoing funded projects (DST, UGC, DBT, ICSSR)\n• ₹5.2 Cr+ in active funding\n• Partners: IIT Delhi, JNU, AIIMS, CSIR, TIFR, IBM Research\n\nWant to apply for Ph.D.?",
    chips: ["How to apply", "Research areas", "Contact research cell"],
  },
  {
    keywords: ["admission", "apply", "application", "enroll", "join", "get admission", "register", "registration"],
    answer:
      "Admissions 2025-26 are OPEN! 🎓 Here's the process:\n\n1️⃣ Register online on the admission portal\n2️⃣ Upload documents (10+2 marksheets, ID, photo)\n3️⃣ Merit list & counselling (June 10)\n4️⃣ Pay fees & enroll (by June 25)\n\nMin eligibility: 50% in 10+2 for UG (60% for CS), 55% for PG, 60% for Ph.D.\n\nClick the gold 'Apply Now' button in the header to begin!",
    chips: ["Important dates", "Fee structure", "Eligibility criteria"],
  },
  {
    keywords: ["fee", "fees", "cost", "tuition", "price", "expense"],
    answer:
      "Annual fees 2025-26 💰\n• B.A. (Hons) — ₹18,500\n• B.Sc. (Hons) — ₹24,800\n• B.Com (Hons) — ₹21,200\n• B.Sc. Computer Science — ₹42,000\n• M.A. / M.Sc. — ₹28,500\n• Ph.D. — ₹35,000\n\nInclusive of academic charges. Hostel & exam fees separate. Merit & need-based scholarships available. Want scholarship details?",
    chips: ["Scholarships", "How to apply", "Hostel fees"],
  },
  {
    keywords: ["scholarship", "financial aid", "concession", "free", "discount"],
    answer:
      "Scholarships available 🌟\n• Merit Scholarship — up to 100% tuition waiver for top rankers\n• Need-based Aid — for economically weaker students\n• SC/ST/OBC Scholarships — as per government norms\n• Sports & Cultural Quota — for outstanding performers\n• Girl Child Scholarship — for single girl children\n• Alumni Endowment Awards — 50+ named awards\n\nApply during admission. Want the application process?",
    chips: ["How to apply", "Fee structure", "Eligibility criteria"],
  },
  {
    keywords: ["eligibility", "eligible", "criteria", "requirement", "qualify", "cut off", "cutoff", "marks"],
    answer:
      "Eligibility criteria 📋\n• UG programs: 10+2 with 50% (60% for Computer Science)\n• PG programs: Bachelor's degree with 55%\n• Ph.D.: Master's degree with 60%\n• Valid CUET/DUET score as applicable\n• 5% relaxation for reserved categories (SC/ST/OBC)\n• Sports/ECA quota: separate trials\n\nNeed specifics for a program?",
    chips: ["Arts eligibility", "B.Sc. CS eligibility", "How to apply"],
  },
  {
    keywords: ["date", "deadline", "last date", "schedule", "when", "calendar", "important date", "session", "semester start"],
    answer:
      "Important dates 2025-26 📅\n• Registration opens: April 15, 2025\n• Last date to apply: May 30, 2025\n• Merit list: June 10, 2025\n• Document verification: June 12-18\n• Fee payment deadline: June 25\n• Semester starts: July 15, 2025\n\nDon't miss the deadlines! Want to apply now?",
    chips: ["How to apply", "Fee structure", "Contact admissions"],
  },
  {
    keywords: ["campus", "life", "club", "society", "activity", "facilities", "canteen", "cafeteria"],
    answer:
      "Campus life at Shivaji is vibrant! 🎉\n• 30+ clubs — Music, Drama, Debate, Tech, Sports, Eco, Photography\n• Cultural fest 'Utsav', tech symposium 'TechGenesis'\n• Sports: cricket, football, basketball, athletics\n• Modern library, sports complex, hostels (400+ seats)\n• 750-seat auditorium\n• 200+ events every year\n\nExplore the Campus Life page for more!",
    chips: ["Hostel details", "Library info", "Events"],
  },
  {
    keywords: ["hostel", "accommodation", "stay", "lodging", "mess", "dormitory"],
    answer:
      "Hostel facilities 🏠\n• Separate, secure hostels for boys and girls\n• 400+ seats total\n• Wi-Fi, mess, common rooms, 24/7 security, laundry\n• Hostel fee: ₹45,000/year (incl. mess)\n• Application opens with admissions\n\nContact Hostel Office: +91 79732 90809 or hostel@shivajicollege.edu.in",
    chips: ["Fee structure", "How to apply", "Contact us"],
  },
  {
    keywords: ["library", "book", "journal", "study material", "eresource", "e-resource", "digital library"],
    answer:
      "Dr. B.R. Ambedkar Library 📚\n• 1,20,000+ books, 25,000+ e-journals\n• Digital access: N-List, DELNET, INFLIBNET, JSTOR, EBSCO\n• 300+ seating capacity\n• Open Mon-Fri 8:30 AM - 8 PM, Sat 9 AM - 5 PM\n• Free Wi-Fi & discussion rooms\n\nVisit the Library page for the full catalog!",
    chips: ["E-resources", "Library timings", "Downloads"],
  },
  {
    keywords: ["placement", "job", "career", "recruiter", "salary", "package", "internship", "company"],
    answer:
      "Placements 2025 🎯\n• 100% placement record for B.Sc. CS\n• Top recruiters: Google, Amazon, Deloitte, EY, TCS, Infosys, Wipro, KPMG\n• Highest package: ₹24 LPA\n• Average package: ₹6.5 LPA\n• 150+ companies visited campus\n• Dedicated career counselling & internship support\n\nVisit the Careers page for openings!",
    chips: ["Careers", "How to apply", "B.Sc. CS details"],
  },
  {
    keywords: ["contact", "phone", "email", "reach", "address", "location", "where", "map", "direction"],
    answer:
      "Reach us 📍\n• Address: Shivaji College, Ring Road, New Delhi - 110060\n• Phone: +91 79732 90805\n• Email: info@shivajicollege.edu.in\n• Office hours: Mon-Sat, 8:30 AM - 5:00 PM\n\n💬 Chat with us on WhatsApp — click the green button at bottom-left!\n\nOr visit the Contact Us page for department-wise contacts.",
    chips: ["Admissions contact", "Hostel contact", "WhatsApp"],
  },
  {
    keywords: ["naac", "accreditation", "ranking", "grade", "rating", "reputation"],
    answer:
      "Our accreditations 🏆\n• NAAC A+ accredited with 3.28 CGPA (2020)\n• Ranked among Top 10 DU colleges — India Today 2025\n• UGC-recognized, constituent college of University of Delhi\n• Established 1962 — 60+ years of excellence\n• 15,000+ alumni across 40+ countries",
    chips: ["About college", "Alumni network", "Programs"],
  },
  {
    keywords: ["alumni", "graduate", "passed out", "ex student", "old student", "reunion"],
    answer:
      "Alumni network 🌍\n• 15,000+ alumni across 40+ countries\n• Notable alumni: ISRO directors, CEOs, Padma Shri authors, MPs, AIIMS deans\n• Benefits: networking directory, mentorship, job board, lifetime library access\n• Annual reunions & Global Alumni Meet\n\nVisit the Alumni page to register!",
    chips: ["Register as alumni", "Alumni events", "Contact"],
  },
  {
    keywords: ["portal", "login", "student portal", "faculty portal", "dashboard", "attendance", "result"],
    answer:
      "Portal access 🔐\n• Student Portal — attendance, results, fees, timetable, assignments, e-library\n• Faculty Portal — grades, attendance, research, leave management\n• Login via the 'My Portal' link in the top bar\n\nNeed help? Contact the IT helpdesk at +91 79732 90805 or email info@shivajicollege.edu.in",
    chips: ["Contact us", "Forgot password", "Admissions"],
  },
  {
    keywords: ["download", "form", "syllabus", "question paper", "calendar", "brochure", "prospectus"],
    answer:
      "Downloads 📥\n• Admission forms, academic calendar, syllabus, previous papers, prospectus\n• All free, instant download\n• Visit the Downloads page for the full list\n\nWant a specific document?",
    chips: ["Admission form", "Fee structure", "Syllabus"],
  },
  {
    keywords: ["grievance", "complaint", "problem", "issue", "ragging", "harassment", "report"],
    answer:
      "Grievance Redressal 🛡️\n• Confidential complaint mechanism\n• Committee meets weekly\n• Acknowledgement within 2 working days\n• Resolution within 15 working days\n• Anti-ragging helpline: 1800-180-5522\n\nFile a grievance on the Grievance Redressal page, or call us at +91 79732 90805.",
    chips: ["File grievance", "Contact us", "Anti-ragging"],
  },
  {
    keywords: ["event", "fest", "festival", "function", "celebration", "utsav", "cultural"],
    answer:
      "Events at Shivaji 🎊\n• Utsav — annual cultural fest (February)\n• TechGenesis — national tech symposium (September)\n• Shivaji Premier League — cricket (November)\n• Confluence — literary & debate fest (August)\n• Rangmanch — theatre festival (October)\n• Annual Day, Independence Day, Teachers' Day\n\nVisit the Events page for the full calendar!",
    chips: ["Upcoming events", "Campus life", "Gallery"],
  },
  {
    keywords: ["news", "latest", "update", "happening", "achievement", "press"],
    answer:
      "Latest news 📰\n• Ranked among Top 10 DU colleges (India Today 2025)\n• 100% placement for B.Sc. CS batch 2025\n• Annual cultural fest 'Utsav' drew 5,000+ visitors\n• Faculty patent filed in solar cell technology\n• Admissions 2025-26: 12,000+ applications\n\nVisit the News page for full stories!",
    chips: ["Events", "Admissions", "Placements"],
  },
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "good evening", "good afternoon"],
    answer:
      "Namaste! 🙏 Welcome to Shivaji College. I'm Shivu, your virtual assistant.\n\nI can help with:\n• Admissions & how to apply\n• Courses, fees, eligibility\n• Campus life, hostel, library\n• Placements, research, alumni\n\nWhat would you like to know?",
    chips: ["Courses offered", "How to apply", "Fee structure", "Campus life"],
  },
  {
    keywords: ["thank", "thanks", "thank you", "great", "awesome", "perfect", "helpful"],
    answer:
      "You're most welcome! 😊 Is there anything else I can help you with about Shivaji College?",
    chips: ["Courses", "Admissions", "Contact us"],
  },
  {
    keywords: ["bye", "goodbye", "see you", "exit", "quit", "later"],
    answer:
      "Goodbye and all the best! 🎓 For anything else, call +91 79732 90805 or WhatsApp us. We hope to see you at Shivaji College soon! 🌟",
    chips: ["Courses", "How to apply", "Contact us"],
  },
  {
    keywords: ["who", "what", "about", "history", "founded", "establish", "shivaji", "college"],
    answer:
      "About Shivaji College 🏛️\n• Founded 1962 — a constituent college of University of Delhi\n• NAAC A+ accredited (3.28 CGPA)\n• Located at Ring Road, New Delhi - 110060\n• 25+ programs, 100+ faculty, 15,000+ alumni\n• Ranked among Top 10 DU colleges (India Today 2025)\n\nDedicated to academic excellence, innovation and holistic development since 1962.",
    chips: ["Programs", "Admissions", "Campus life"],
  },
];

function localAnswer(message: string): { reply: string; chips?: string[] } | null {
  const lower = message.toLowerCase();
  let best: { entry: KBEntry; score: number } | null = null;
  for (const entry of KNOWLEDGE_BASE) {
    const score = entry.keywords.reduce(
      (s, k) => (lower.includes(k) ? s + k.length : s),
      0
    );
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }
  if (!best) return null;
  return { reply: best.entry.answer, chips: best.entry.chips };
}

const DEFAULT_REPLY =
  "I'd love to help with that! 🤔 I can answer questions about:\n\n• Admissions & how to apply\n• Courses, fees, eligibility\n• Campus life, hostel, library\n• Placements, research, alumni\n• Contact details & events\n\nTry asking about any of these, or call us at +91 79732 90805.";

/* ----------------- GEMINI ATTEMPT ----------------- */

async function tryGemini(message: string, history: ChatTurn[]): Promise<string | null> {
  if (!GEMINI_API_KEY) return null;
  try {
    const contents = [
      ...history.map((t) => ({ role: t.role, parts: [{ text: t.text }] })),
      { role: "user", parts: [{ text: message }] },
    ];
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const resp = await fetch(`${ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.7, topP: 0.95, maxOutputTokens: 500 },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!resp.ok) return null;
    const data = await resp.json();
    const reply: string =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: { text?: string }) => p.text || "")
        .join("")
        .trim() || "";
    return reply || null;
  } catch {
    return null;
  }
}

/* ----------------- ROUTE HANDLER ----------------- */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const message: string = String(body?.message || "").trim();
    const history: ChatTurn[] = Array.isArray(body?.history)
      ? body.history
          .map((t: { role?: string; text?: string }) => ({
            role: t.role === "model" ? "model" : "user",
            text: String(t.text || ""),
          }))
          .filter((t: ChatTurn) => t.text)
          .slice(-8)
      : [];

    if (!message) {
      return NextResponse.json(
        { ok: false, reply: "Please type a message first." },
        { status: 422 }
      );
    }

    // Try Gemini for natural conversation.
    const geminiReply = await tryGemini(message, history);
    if (geminiReply) {
      return NextResponse.json({ ok: true, reply: geminiReply, source: "gemini" });
    }

    // Fallback to the rich local knowledge engine.
    const local = localAnswer(message);
    if (local) {
      return NextResponse.json({
        ok: true,
        reply: local.reply,
        chips: local.chips,
        source: "local",
      });
    }
    return NextResponse.json({ ok: true, reply: DEFAULT_REPLY, source: "local" });
  } catch (err) {
    console.error("Chat API error:", err);
    const local = localAnswer("help");
    return NextResponse.json({
      ok: true,
      reply: local?.reply || DEFAULT_REPLY,
      chips: local?.chips,
      source: "local",
    });
  }
}
