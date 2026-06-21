"use client";

import { SOCIAL_LINKS } from "./router";
import { MessageCircle } from "lucide-react";

/**
 * Floating WhatsApp button — bottom-left, always visible, clean and
 * unobtrusive. A single tappable button with a subtle ping animation.
 * Click opens WhatsApp directly (no popover, no auto-open hint).
 */
export function WhatsAppButton() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 left-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
