import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  Languages, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { TrackedBookingLink, TrackedWhatsAppLink } from '@/components/TrackedCTA';
import { CLINIC, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Dr. Marissa Mathew | ENT Specialist in Thiruvananthapuram',
  description:
    'Meet Dr. Marissa Mathew, MBBS, DLO (NBEMS), ENT specialist in Pongumoodu, Thiruvananthapuram with 5+ years of dedicated, unhurried outpatient care.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Dr. Marissa Mathew | ENT Specialist in Thiruvananthapuram',
    description:
      'Meet Dr. Marissa Mathew, MBBS, DLO (NBEMS), ENT specialist in Pongumoodu, Thiruvananthapuram with 5+ years of dedicated, unhurried outpatient care.',
    url: `${SITE_URL}/about`,
    siteName: CLINIC.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dr. Marissa Mathew - ENT Specialist',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs items={[{ label: 'About Dr. Marissa' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-800 to-teal-700 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-teal-200 font-semibold mb-3 px-3 py-1 bg-teal-900/40 rounded-full border border-teal-600/30">
            ENT Specialist • Thiruvananthapuram
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            About Dr. Marissa Mathew &amp; Our Clinic
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Serving patients across Pongumoodu, Ulloor, Kowdiar, Pattom, and the greater Thiruvananthapuram community with dedicated, unhurried outpatient medical care.
          </p>
        </div>
      </section>

      {/* Doctor Profile & Story */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Doctor Card & Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative mb-6">
                <Image
                  src="/dr-marissa.jpg"
                  alt="Dr. Marissa, ENT specialist at Dr. Marissa's ENT Clinic, Pongumoodu, Thiruvananthapuram"
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-1">
                {CLINIC.doctor}
              </h2>
              <p className="text-teal-700 font-medium text-sm mb-4">
                {CLINIC.doctorFullTitle}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Stethoscope size={18} className="text-teal-600 shrink-0" />
                  <span><strong>Qualifications:</strong> {CLINIC.qualifications}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-teal-600 shrink-0" />
                  <span><strong>Clinical Experience:</strong> {CLINIC.experience}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Languages size={18} className="text-teal-600 shrink-0" />
                  <span><strong>Languages:</strong> {CLINIC.languages.join(', ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-teal-600 shrink-0" />
                  <span><strong>Location:</strong> Pongumoodu, Thiruvananthapuram</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                <TrackedBookingLink
                  href={CLINIC.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingLocation="about_sidebar"
                  className="bg-teal-600 text-white text-center py-3 rounded-xl font-medium text-sm hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={16} /> Book Appointment
                </TrackedBookingLink>
                <TrackedWhatsAppLink
                  href={CLINIC.whatsapp.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingLocation="about_sidebar"
                  className="bg-green-600 text-white text-center py-3 rounded-xl font-medium text-sm hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> WhatsApp Clinic
                </TrackedWhatsAppLink>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              <h3 className="text-2xl font-heading font-bold text-slate-900">
                Unhurried, Evidence-Based ENT Care with a Personal Touch
              </h3>

              <p>
                Dr. Marissa&apos;s ENT Clinic was established with a singular focus: to offer high-quality, patient-centered ear, nose, and throat consultations in a calm and unhurried setting. Many healthcare environments today feel rushed, leaving patients with unanswered questions regarding their symptoms. In our outpatient clinic in Pongumoodu, Thiruvananthapuram, we take the time to listen carefully, conduct thorough examinations, and explain each step of the diagnosis clearly.
              </p>

              <p>
                The clinic is led by <strong>Dr. Marissa Mathew</strong>, an ENT Specialist holding MBBS and DLO (NBEMS) qualifications, with over 5 years of dedicated clinical experience in otorhinolaryngology. Dr. Marissa has particular clinical interest in managing distressing balance disorders (such as Benign Paroxysmal Positional Vertigo), safe microscopic ear clearing, chronic sinus disorders, and pediatric ear and throat problems. Consultations are conducted comfortably in both <strong>English and Malayalam</strong>, ensuring that patients and their families feel completely understood.
              </p>

              <p>
                We believe in conservative, evidence-based medicine. Diagnostic procedures—such as otoscopy and targeted vestibular testing—are performed using modern, well-maintained equipment. We avoid unnecessary prescriptions and prioritize patient education, empowering you to manage allergies, maintain ear hygiene, and understand your health. Whether you are visiting from Pongumoodu, Ulloor, Kesavadasapuram, Kowdiar, Pattom, Sasthamangalam, or nearby Medical College areas, you can count on compassionate, expert care.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h4 className="text-xl font-heading font-bold text-slate-900 mb-5">
                Our Clinical Principles
              </h4>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  {
                    title: 'Unhurried Care',
                    desc: 'Consultations booked by appointment so you never feel rushed during your medical checkup.',
                  },
                  {
                    title: 'Conservative First',
                    desc: 'Evidence-based medical therapies and patient education before considering invasive options.',
                  },
                  {
                    title: 'Clear Explanation',
                    desc: 'Direct, transparent communication in Malayalam or English about your diagnosis and options.',
                  },
                ].map((pillar, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={20} className="text-teal-700 mb-2" />
                    <h5 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      {pillar.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outpatient Scope Notice */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Outpatient Practice Scope:</strong> Our clinic provides scheduled outpatient ENT care. Acute medical emergencies such as airway obstruction, severe trauma, or uncontrollable nasal bleeding should always be taken immediately to a hospital emergency/casualty department or call 108.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
