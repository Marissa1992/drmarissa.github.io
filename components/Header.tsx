'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { CLINIC } from '@/lib/constants';
import { trackBookingClick, trackCallClick } from '@/lib/gtm';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Health Tips', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5'
          : 'bg-white border-b border-slate-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center font-heading font-bold text-xl group-hover:bg-teal-700 transition-colors shadow-sm">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-slate-900 leading-tight text-base sm:text-lg">
              Dr. Marissa&apos;s
            </span>
            <span className="text-xs text-teal-700 font-semibold tracking-wider uppercase">
              ENT Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors py-1 hover:text-teal-700 ${
                      isActive
                        ? 'text-teal-700 font-semibold border-b-2 border-teal-600'
                        : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={CLINIC.phone.telLink}
              onClick={() => trackCallClick('header')}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label={`Call Dr. Marissa's clinic at ${CLINIC.phone.display}`}
            >
              <Phone size={15} className="text-teal-600" />
              <span>{CLINIC.phone.display}</span>
            </a>

            <a
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('header')}
              className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-all hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-white/95 backdrop-blur-md px-6 py-6 md:hidden overflow-y-auto border-t border-slate-100 flex flex-col justify-between shadow-xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-heading font-semibold py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-800'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('mobile_menu')}
              className="bg-teal-600 text-center text-white py-3.5 rounded-xl font-medium w-full text-base flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar size={18} /> Book Appointment
            </a>
            <a
              href={CLINIC.phone.telLink}
              onClick={() => trackCallClick('mobile_menu')}
              className="bg-slate-100 text-center text-slate-800 py-3.5 rounded-xl font-medium w-full text-base flex items-center justify-center gap-2"
            >
              <Phone size={18} className="text-teal-700" /> Call {CLINIC.phone.display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
