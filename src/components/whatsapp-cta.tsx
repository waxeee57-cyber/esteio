import { MessageCircleIcon } from "lucide-react";

import { company, whatsappHref } from "@/lib/content";

export function WhatsAppCta() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex min-h-12 items-center gap-2 rounded-sm bg-safety px-4 py-3 font-display text-sm tracking-[0.14em] text-steel uppercase shadow-[0_12px_40px_rgb(232_90_23_/_0.35)] transition-transform hover:-translate-y-0.5 print:hidden"
      aria-label={`WhatsApp ESTEIO on ${company.whatsappDisplay}`}
    >
      <MessageCircleIcon data-icon="inline-start" />
      <span className="hidden sm:inline">WhatsApp desk</span>
      <span className="sm:hidden">WA</span>
    </a>
  );
}
