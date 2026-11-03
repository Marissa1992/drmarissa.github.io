/**
 * Google Tag Manager & GA4 custom event tracking helper
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type GTMEvent = 
  | { event: 'whatsapp_click'; channel: string; location?: string }
  | { event: 'call_click'; phone: string; location?: string }
  | { event: 'booking_click'; destination: string; location?: string };

export function pushToDataLayer(eventData: GTMEvent): void {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
}

export function trackWhatsAppClick(location: string = 'general'): void {
  pushToDataLayer({
    event: 'whatsapp_click',
    channel: 'whatsapp',
    location,
  });
}

export function trackCallClick(location: string = 'general'): void {
  pushToDataLayer({
    event: 'call_click',
    phone: '+917012117198',
    location,
  });
}

export function trackBookingClick(location: string = 'general'): void {
  pushToDataLayer({
    event: 'booking_click',
    destination: 'google_calendar',
    location,
  });
}
