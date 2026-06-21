import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Receives every form submission on the site (contact, alumni registration,
 * job application, grievance, newsletter, portal access) and:
 *   1. Persists it to the ContactSubmission table (source of truth — so no
 *      lead is ever lost, even if email delivery fails).
 *   2. Sends an email notification to CONTACT_EMAIL via Nodemailer + Gmail
 *      SMTP, using a Google App Password stored in env vars.
 *
 * Recipient: navpreet8testing@gmail.com (set in .env as CONTACT_EMAIL).
 *
 * Email credentials (SMTP_USER / SMTP_PASS) are NEVER hardcoded — they live
 * in .env. SMTP_PASS is a 16-character Google App Password (NOT the real
 * Gmail password). Until the site owner fills those in, submissions are
 * still stored in the database as a fallback.
 */

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "navpreet8testing@gmail.com";

interface SubmissionRecord {
  type: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
}

/**
 * Sends the submission as a formatted email to CONTACT_EMAIL using
 * Nodemailer + Gmail SMTP. Returns true on success, false on failure
 * (the DB row is the source of truth, so a false return is non-fatal).
 */
async function sendEmailNotification(record: SubmissionRecord): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  // If SMTP credentials aren't configured, skip email and rely on DB storage.
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn(
      "[contact] SMTP_USER/SMTP_PASS not set — submission stored in DB only. " +
        "Add Gmail App Password to .env to enable email delivery to " +
        CONTACT_EMAIL
    );
    return false;
  }

  try {
    // Dynamic import so the module loads even before nodemailer is configured.
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: Number(SMTP_PORT) || 465,
      secure: (Number(SMTP_PORT) || 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const fromAddress = SMTP_FROM || SMTP_USER;
    const subjectLine =
      record.subject ||
      `[Shivaji College] New ${record.type} submission from ${record.name}`;

    const textBody = [
      `New ${record.type} submission received on the Shivaji College website.`,
      "",
      "──────────────────────────────",
      `Name:    ${record.name}`,
      `Email:   ${record.email}`,
      record.phone ? `Phone:   ${record.phone}` : null,
      `Type:    ${record.type}`,
      "──────────────────────────────",
      "",
      "Message:",
      record.message,
      "",
      "──────────────────────────────",
      "This is an automated notification. Reply directly to the submitter's email above.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #fbfaf7;">
        <div style="background: #1a2744; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #d4a04c; font-size: 18px; margin: 0; font-family: Georgia, serif;">Shivaji College</h1>
          <p style="color: #ffffff; font-size: 13px; margin: 4px 0 0; opacity: 0.8;">New ${record.type} submission</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e8e6df; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; font-size: 14px; color: #1a2744; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 80px; vertical-align: top;">Name</td><td style="padding: 8px 0; font-weight: 600;">${record.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td><td style="padding: 8px 0;"><a href="mailto:${record.email}" style="color: #b8862f; text-decoration: none;">${record.email}</a></td></tr>
            ${record.phone ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Phone</td><td style="padding: 8px 0;">${record.phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Type</td><td style="padding: 8px 0;">${record.type}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e8e6df; margin: 16px 0;" />
          <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p>
          <p style="color: #1a2744; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${record.message.replace(/</g, "&lt;")}</p>
        </div>
        <p style="color: #9ca3af; font-size: 11px; text-align: center; margin: 16px 0 0;">Automated notification from Shivaji College website</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Shivaji College Website" <${fromAddress}>`,
      to: CONTACT_EMAIL,
      replyTo: record.email,
      subject: subjectLine,
      text: textBody,
      html: htmlBody,
    });

    console.log(`[contact] Email sent to ${CONTACT_EMAIL} for ${record.type} submission from ${record.name}`);
    return true;
  } catch (e) {
    console.error("[contact] Email send failed:", e);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const type = String(body.type || "contact").slice(0, 32);
    const name = String(body.name || "").trim().slice(0, 120);
    const email = String(body.email || "").trim().slice(0, 160);
    const phone = body.phone ? String(body.phone).trim().slice(0, 32) : null;
    const subject = body.subject
      ? String(body.subject).trim().slice(0, 200)
      : null;
    const message = String(body.message || "").trim().slice(0, 4000);
    const meta = body.meta ? JSON.stringify(body.meta).slice(0, 4000) : null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required" },
        { status: 422 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address" },
        { status: 422 }
      );
    }

    // 1. Always persist to DB (source of truth).
    const record = await db.contactSubmission.create({
      data: { type, name, email, phone, subject, message, meta },
    });

    // 2. Send email notification to navpreet8testing@gmail.com (fire-and-forget).
    void sendEmailNotification({
      type,
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json({
      ok: true,
      id: record.id,
      message: `Thank you! Your ${type} submission has been received. Our team will respond within 24 hours.`,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "Shivaji College forms API",
    contact: CONTACT_EMAIL,
    emailConfigured: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
  });
}
