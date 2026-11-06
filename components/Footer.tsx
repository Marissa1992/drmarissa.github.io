'use client';

import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Calendar, AlertCircle } from 'lucide-react';
import { CLINIC } from '@/lib/constants';
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from '@/lib/gtm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const topServices = [
    { name: 'Vertigo & Balance Care', href: '/services/vertigo' },
    { name: 'Ear Wax Removal (Microsuction)', href: '/services/ear-wax-removal' },
    { name: 'Sinusitis Treatment', href: '/services/sinusitis' },
    { name: 'Tonsillitis & Throat Care', href: '/services/tonsillitis' },
    { name: 'Allergic Rhinitis & Allergies', href: '/services/allergic-rhinitis' },
    { name: 'Hearing Loss Evaluation', href: '/services/hearing-loss' },
    { name: 'Pediatric ENT Care', href: '/services/pediatric-ent' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Clinic & Doctor Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-teal-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-lg">
                M
              </div>
              <span className="font-heading font-bold text-white text-lg tracking-wide">
                Dr. Marissa&apos;s ENT Clinic
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expert ear, nose, throat, vertigo, and sinus care in an unhurried, welcoming setting in Pongumoodu, Thiruvananthapuram.
            </p>
            <p className="text-xs text-teal-400 font-medium">
              Dr. Marissa Mathew • MBBS, DLO (NBEMS)
            </p>
            <div className="pt-2">
              <a
                href={CLINIC.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick('footer')}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors"
              >
                <Calendar size={14} />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Dr. Marissa
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors">
                  All ENT Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-400 transition-colors">
                  Health Tips &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Key Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {topServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Visit &amp; Contact
            </h4>
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin size={18} className="text-teal-400 shrink-0 mt-0.5" />
              <span>{CLINIC.address.formatted}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Phone size={18} className="text-teal-400 shrink-0" />
              <a
                href={CLINIC.phone.telLink}
                onClick={() => trackCallClick('footer')}
                className="hover:text-teal-400 transition-colors"
              >
                {CLINIC.phone.display}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <MessageCircle size={18} className="text-teal-400 shrink-0" />
              <a
                href={CLINIC.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="hover:text-teal-400 transition-colors"
              >
                {CLINIC.whatsapp.display} (WhatsApp)
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-1 leading-relaxed">
              {CLINIC.hours.fallbackText}
            </p>
          </div>
        </div>

        {/* Emergency Notice & Medical Disclaimer Box */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 mb-10 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block font-medium mb-1">
                Emergency Care Notice (Call 108):
              </strong>
              Dr. Marissa&apos;s ENT Clinic is an outpatient specialty facility. For life-threatening emergencies, severe breathing difficulties, airway-obstructing foreign bodies, or uncontrollable bleeding, please call{' '}
              <strong className="text-amber-300">108</strong> (Kerala Emergency Ambulance Service) immediately or visit the casualty department of the nearest hospital.
            </div>
          </div>
          <div className="text-xs text-slate-400 pt-2 border-t border-slate-700/60 leading-relaxed">
            <strong>Medical Disclaimer:</strong> Content on this website is provided solely for general educational purposes and does not substitute for personal medical diagnosis or treatment by a qualified doctor.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Dr. Marissa&apos;s ENT Clinic. All rights reserved. Pongumoodu, Thiruvananthapuram.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About Clinic
            </Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services Hub
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

