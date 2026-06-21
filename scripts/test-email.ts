/**
 * Email sending test script.
 *
 * Run: bun run scripts/test-email.ts
 *
 * BEFORE running: fill in SMTP_USER and SMTP_PASS in .env
 *   SMTP_USER = your full Gmail address (e.g. navpreet8testing@gmail.com)
 *   SMTP_PASS = a 16-character Google App Password (NOT your real password)
 *
 * How to generate an App Password:
 *   1. Go to https://myaccount.google.com/security
 *   2. Enable 2-Step Verification (required for App Passwords)
 *   3. Visit https://myaccount.google.com/apppasswords
 *   4. Create an app password for "Mail" → copy the 16-char string
 *   5. Paste it into .env as SMTP_PASS
 */

import "dotenv/config";
import nodemailer from "nodemailer";

const {
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = "465",
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  CONTACT_EMAIL = "navpreet8testing@gmail.com",
} = process.env;

async function main() {
  console.log("\n📧 Shivaji College — Email Test\n");
  console.log("Recipient :", CONTACT_EMAIL);
  console.log("SMTP Host :", SMTP_HOST + ":" + SMTP_PORT);
  console.log("SMTP User :", SMTP_USER || "(not set)");
  console.log("SMTP Pass :", SMTP_PASS ? "✓ set (" + SMTP_PASS.length + " chars)" : "✗ NOT SET");
  console.log("");

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("❌ Cannot send — SMTP_USER and/or SMTP_PASS missing in .env\n");
    console.log("To fix:");
    console.log("  1. Go to https://myaccount.google.com/apppasswords");
    console.log("  2. Generate a 16-char App Password for Mail");
    console.log("  3. Add to .env:");
    console.log('     SMTP_USER=your-gmail@gmail.com');
    console.log('     SMTP_PASS=your-16-char-app-password');
    console.log("  4. Re-run: bun run scripts/test-email.ts\n");
    process.exit(1);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const info = await transporter.sendMail({
      from: `"Shivaji College Website" <${SMTP_FROM || SMTP_USER}>`,
      to: CONTACT_EMAIL,
      subject: "✅ Shivaji College — Email Test Successful",
      text: `This is a test email from the Shivaji College website.\n\nIf you received this, the email setup is working correctly.\n\nRecipient: ${CONTACT_EMAIL}\nSent via: ${SMTP_HOST}:${SMTP_PORT}\n\n— Shivaji College`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #fbfaf7;">
          <div style="background: #1a2744; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #d4a04c; font-size: 18px; margin: 0; font-family: Georgia, serif;">Shivaji College</h1>
            <p style="color: #ffffff; font-size: 13px; margin: 4px 0 0; opacity: 0.8;">Email Test — Successful ✅</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e8e6df; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #1a2744; font-size: 14px; line-height: 1.6; margin: 0 0 16px;">
              If you received this email, the email setup on the Shivaji College website is working correctly.
            </p>
            <table style="font-size: 13px; color: #6b7280; border-collapse: collapse;">
              <tr><td style="padding: 4px 0; padding-right: 12px;">Recipient</td><td style="color: #1a2744; font-weight: 600;">${CONTACT_EMAIL}</td></tr>
              <tr><td style="padding: 4px 0; padding-right: 12px;">Sent via</td><td style="color: #1a2744;">${SMTP_HOST}:${SMTP_PORT}</td></tr>
              <tr><td style="padding: 4px 0; padding-right: 12px;">From</td><td style="color: #1a2744;">${SMTP_FROM || SMTP_USER}</td></tr>
            </table>
          </div>
          <p style="color: #9ca3af; font-size: 11px; text-align: center; margin: 16px 0 0;">Test email from Shivaji College website</p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully!");
    console.log("   Message ID:", info.messageId);
    console.log("   Response  :", info.response);
    console.log("\nCheck the inbox (and spam folder) of", CONTACT_EMAIL);
  } catch (err) {
    console.error("❌ Email send failed:\n");
    console.error(err);
    console.log("\nCommon fixes:");
    console.log("  - Ensure 2-Step Verification is ON for the Gmail account");
    console.log("  - Use a 16-char App Password (NOT your real password)");
    console.log("  - Check SMTP_USER is the full Gmail address");
  }
  process.exit(0);
}

main();
