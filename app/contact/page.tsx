import type { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Calendar, 
  Navigation, 
  Bus, 
  Train, 
  AlertCircle 
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ClinicHours from '@/components/ClinicHours';
import { CLINIC, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Contact & Location | Dr. Marissa's ENT Clinic, Pongumoodu",
  description:
    "Find Dr. Marissa's ENT Clinic at RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram. Map, clinic hours, phone, and easy WhatsApp appointment booking.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact & Location | Dr. Marissa's ENT Clinic, Pongumoodu",
    description:
      "Find Dr. Marissa's ENT Clinic at RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram. Map, clinic hours, phone, and easy WhatsApp appointment booking.",
    url: `${SITE_URL}/contact`,
    siteName: CLINIC.name,
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs items={[{ label: 'Contact & Location' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-800 to-teal-700 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-teal-200 font-semibold mb-3 px-3 py-1 bg-teal-900/40 rounded-full border border-teal-600/30">
            Pongumoodu • Thiruvananthapuram
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            Contact &amp; Location — Dr. Marissa&apos;s ENT Clinic
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Conveniently located in a quiet residential area at Pongumoodu. We welcome scheduled consultations and are happy to assist you by phone, WhatsApp, or online booking.
          </p>
        </div>
      </section>

      {/* Contact Details & Map Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-2xl font-heading font-bold text-slate-900">
                Clinic Details
              </h2>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
                    Address
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {CLINIC.name}<br />
                    {CLINIC.address.streetAddress}<br />
                    {CLINIC.address.addressLocality}, {CLINIC.address.city}<br />
                    {CLINIC.address.addressRegion} {CLINIC.address.postalCode}
                  </p>
                  <a
                    href={CLINIC.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 mt-2 hover:underline"
                  >
                    <Navigation size={13} />
                    <span>Get Google Maps Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex gap-4 items-start pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
                    Telephone
                  </h3>
                  <p className="text-slate-600 text-sm mb-1">
                    Voice calls:{' '}
                    <a
                      href={CLINIC.phone.telLink}
                      className="text-slate-900 font-semibold hover:text-teal-700"
                    >
                      {CLINIC.phone.display}
                    </a>
                  </p>
                  <p className="text-slate-600 text-sm">
                    WhatsApp bookings:{' '}
                    <a
                      href={CLINIC.whatsapp.chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      {CLINIC.whatsapp.display}
                    </a>
                  </p>
                </div>
              </div>

              {/* Live Hours Feed */}
              <div className="flex gap-4 items-start pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div className="w-full">
                  <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                    Consultation Hours
                  </h3>
                  <ClinicHours />
                  <p className="text-xs text-slate-500 mt-3 italic leading-relaxed">
                    {CLINIC.hours.fallbackText}
                  </p>
                </div>
              </div>

              {/* Booking CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-teal-600 text-white text-center py-3 rounded-xl font-medium text-sm hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar size={16} /> Book Online
                </a>
                <a
                  href={CLINIC.whatsapp.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white text-center py-3 rounded-xl font-medium text-sm hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs overflow-hidden flex-1 min-h-[400px]">
              <iframe
                src={CLINIC.maps.iframeEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Dr. Marissa's ENT Clinic, Pongumoodu, Thiruvananthapuram"
              />
            </div>
          </div>
        </div>

        {/* How to Reach the Clinic Section */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-teal-700 text-xs uppercase tracking-wider font-bold mb-2 block">
              Transit &amp; Directions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3">
              How to Reach Dr. Marissa&apos;s ENT Clinic
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our clinic is conveniently located at RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram, Keralam 695011, just a short distance from the main Pongumoodu roadway connecting Ulloor and Sreekaryam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* By Road */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center mb-4">
                <Navigation size={20} />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                By Road &amp; Private Vehicle
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If arriving from Pattom or Kesavadasapuram, proceed through Ulloor toward Pongumoodu Junction. Turn into Sreenagar Lane as directed on Google Maps. The clinic is situated in a quiet residential area.
              </p>
            </div>

            {/* By Public Bus */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-800 flex items-center justify-center mb-4">
                <Bus size={20} />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                By City &amp; KSRTC Bus
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pongumoodu is well connected by public transit. City buses heading from East Fort (Thampanoor) toward Sreekaryam and Attingal run frequently along this corridor. The closest stop is <strong>Pongumoodu Bus Stop</strong> (approx. 3–5 minutes walk to Sreenagar Lane).
              </p>
            </div>

            {/* From Transit Hubs */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-800 flex items-center justify-center mb-4">
                <Train size={20} />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
                Major Distances
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
                <li>• <strong>Thampanoor Railway Station:</strong> ~8.5 km</li>
                <li>• <strong>Kochuveli Railway Station:</strong> ~5.5 km</li>
                <li>• <strong>Medical College Hospital:</strong> ~2.5 km</li>
              </ul>
            </div>
          </div>

          {/* Localities Served */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Nearby Neighborhoods Frequently Served:
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-600">
              {CLINIC.localAreasServed.map((area) => (
                <span
                  key={area}
                  className="bg-white border border-slate-200 px-3 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
