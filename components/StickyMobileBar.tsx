'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC } from '@/lib/constants';
import { trackCallClick, trackWhatsAppClick } from '@/lib/gtm';

export default function StickyMobileBar() {
  return (
    <div
      aria-label="Quick contact bar"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={CLINIC.phone.telLink}
          onClick={() => trackCallClick('sticky_mobile_bar')}
          className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium text-sm py-3 px-3 rounded-xl hover:bg-slate-800 active:scale-[0.98] transition-all min-h-[44px]"
          aria-label={`Call Dr. Marissa's ENT Clinic at ${CLINIC.phone.display}`}
        >
          <Phone size={17} className="text-teal-400" />
          <span>Call Clinic</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC.whatsapp.chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('sticky_mobile_bar')}
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium text-sm py-3 px-3 rounded-xl hover:bg-[#20ba59] active:scale-[0.98] transition-all min-h-[44px] shadow-sm"
          aria-label="Book appointment via WhatsApp"
        >
          <MessageCircle size={17} />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}

