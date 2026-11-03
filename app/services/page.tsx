import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Activity, 
  Stethoscope, 
  Wind, 
  Smile, 
  Ear, 
  Baby, 
  Microscope, 
  Headphones, 
  AlertTriangle, 
  ArrowRight,
  Calendar,
  MessageCircle
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES } from '@/data/services';
import { CLINIC, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: "ENT Services in Thiruvananthapuram | Dr. Marissa's ENT Clinic",
  description:
    'Comprehensive ear, nose, throat, sinus, and vertigo treatments in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew. View all outpatient services.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "ENT Services in Thiruvananthapuram | Dr. Marissa's ENT Clinic",
    description:
      'Comprehensive ear, nose, throat, sinus, and vertigo treatments in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew. View all outpatient services.',
    url: `${SITE_URL}/services`,
    siteName: CLINIC.name,
    locale: 'en_IN',
    type: 'website',
  },
};

// Helper map for dynamic Lucide icon rendering
const iconMap: Record<string, React.ElementType> = {
  Activity,
  Stethoscope,
  Wind,
  Smile,
  Ear,
  Baby,
  Microscope,
  Headphones,
};

export default function ServicesHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Visual Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-800 to-teal-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-teal-200 font-semibold mb-3 px-3 py-1 bg-teal-900/40 rounded-full border border-teal-600/30">
            Outpatient ENT Specialties • Pongumoodu
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            Comprehensive ENT Services in Thiruvananthapuram
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Evidence-based diagnosis and unhurried treatment for ear, nose, throat, and balance conditions by Dr. Marissa Mathew, serving families from Pongumoodu, Ulloor, Kowdiar, Pattom, and surrounding areas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-all shadow-sm"
            >
              <Calendar size={18} />
              <span>Book Consultation</span>
            </a>
            <a
              href={CLINIC.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-all shadow-sm"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3">
            Our Clinical Treatments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select a condition below to learn about symptoms, consultation steps, and patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;

            return (
              <div
                key={service.slug}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.overview[0]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors group-hover:underline"
                  >
                    <span>Read Treatment Details</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Note */}
        <div className="mt-14 max-w-4xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-2xl p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <AlertTriangle size={22} />
          </div>
          <div className="text-sm text-amber-900 leading-relaxed">
            <strong className="block font-semibold mb-1">
              Important Outpatient Notice &amp; Emergencies
            </strong>
            Our clinic provides comprehensive outpatient ENT diagnosis and conservative care. Life-threatening emergencies—such as airway-obstructing foreign bodies, massive nasal bleeding, or acute head/neck trauma—are not treated here. In such critical circumstances, please call <strong className="text-amber-950 font-bold">108</strong> immediately or visit the casualty department of the nearest hospital.
          </div>
        </div>
      </section>
    </div>
  );
}
