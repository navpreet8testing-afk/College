"use client";

import { useState, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  rows?: number;
}

/**
 * Reusable form that POSTs to /api/contact. Every form on the site
 * (contact, alumni registration, careers, grievance, newsletter, portal)
 * uses this so all submissions land in the same inbox: navpreet8testing@gmail.com
 */
export function SiteForm({
  type,
  fields,
  submitLabel = "Submit",
  successTitle = "Thank you!",
  successMessage = "Your submission has been received. Our team will respond within 24 hours.",
  buttonAlign = "start",
  meta,
}: {
  type: string;
  fields: Field[];
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  buttonAlign?: "start" | "center" | "full";
  meta?: Record<string, unknown>;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (name: string, val: string) =>
    setValues((v) => ({ ...v, [name]: val }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Assemble a single message from the fields (so it stores nicely).
    const messageParts = fields
      .filter((f) => f.name !== "name" && f.name !== "email" && f.name !== "phone" && f.name !== "subject")
      .map((f) => `${f.label}: ${values[f.name] || "-"}`);
    const message = messageParts.join("\n");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          name: values.name || "",
          email: values.email || "",
          phone: values.phone || "",
          subject: values.subject || "",
          message,
          meta,
        }),
      });
      const data = await resp.json();
      if (resp.ok && data.ok) {
        setStatus("success");
        setValues({});
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-3 font-serif text-[20px] font-bold text-[#1a2744]">
          {successTitle}
        </h3>
        <p className="mt-2 max-w-md font-sans text-[14px] text-[#5a6478]">
          {successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#1a2744] px-5 py-2.5 font-sans text-[13px] font-semibold text-[#1a2744] transition-colors hover:bg-[#1a2744] hover:text-white"
        >
          Submit another response
        </button>
      </div>
    );
  }

  const alignCls =
    buttonAlign === "center"
      ? "justify-center"
      : buttonAlign === "full"
      ? ""
      : "justify-start";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((f) => {
        const isMessage = f.name === "message" || f.type === "textarea";
        return (
          <div key={f.name}>
            <label
              htmlFor={f.name}
              className="mb-1.5 block font-sans text-[14px] font-semibold text-[#1a2744]"
            >
              {f.label}
              {f.required && <span className="text-[#d4a04c]"> *</span>}
            </label>
            {f.type === "select" ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 font-sans text-[15px] text-[#1a2744] focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20"
              >
                <option value="">Select...</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : isMessage ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={f.rows || 4}
                placeholder={f.placeholder}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 font-sans text-[15px] text-[#1a2744] placeholder:text-gray-400 focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20"
              />
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type || "text"}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 font-sans text-[15px] text-[#1a2744] placeholder:text-gray-400 focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20"
              />
            )}
          </div>
        );
      })}

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 font-sans text-[13px] text-red-700">
          {errorMsg}
        </p>
      )}

      <div className={`flex ${alignCls}`}>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`btn-gold inline-flex items-center justify-center gap-2 rounded-md bg-[#d4a04c] px-6 py-3 font-sans text-[14px] font-semibold text-white disabled:opacity-60 ${
            buttonAlign === "full" ? "w-full" : ""
          }`}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            submitLabel
          )}
        </button>
      </div>
      <p className="font-sans text-[12px] text-[#5a6478]">
        🔒 Your submission is sent securely to our admissions office at
        navpreet8testing@gmail.com.
      </p>
    </form>
  );
}

/** Small newsletter signup chip (email only) used in footers/sidebars. */
export function NewsletterChip({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          name: "Newsletter Subscriber",
          email,
          message: `Subscribed to newsletter from ${email}`,
        }),
      });
      setDone(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <p
        className={`flex items-center gap-2 font-sans text-[13px] text-green-600 ${
          compact ? "" : "font-semibold"
        }`}
      >
        <CheckCircle2 className="h-4 w-4" />
        Subscribed! Thanks for joining.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 rounded-md border border-gray-200 bg-white px-3 py-2.5 font-sans text-[14px] text-[#1a2744] placeholder:text-gray-400 focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-gold inline-flex items-center justify-center rounded-md bg-[#d4a04c] px-4 py-2.5 font-sans text-[13px] font-semibold text-white disabled:opacity-60"
      >
        {loading ? "..." : "Subscribe"}
      </button>
    </form>
  );
}

/** Helper to render a labeled form card wrapper. */
export function FormCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <h3 className="font-serif text-[20px] font-bold text-[#1a2744]">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 font-sans text-[14px] text-[#5a6478]">{subtitle}</p>
      )}
      <div className="mt-5">{children}</div>
    </div>
  );
}
