'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { CLINIC } from '@/lib/constants';
import { trackBookingClick, trackCallClick } from '@/lib/gtm';
import { TrackedBookingLink, TrackedCallLink } from '@/components/TrackedCTA';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(65);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (official React pattern for state adjustment on prop/path change)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  // Measure header bottom position accurately
  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().bottom);
    }
  };

  const toggleMobileMenu = () => {
    updateHeaderHeight();
    setMobileMenuOpen((prev) => !prev);
  };

  // Keep header height accurate when menu opens or scroll changes
  useEffect(() => {
    if (mobileMenuOpen) {
      updateHeaderHeight();
    }
  }, [mobileMenuOpen, isScrolled]);

  // Lock page scrolling while the menu is open; restore on close and unmount
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close menu if window is resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Close menu on Escape key for accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Health Tips', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 w-full z-50 transition-all duration-200 ${
          mobileMenuOpen
            ? 'bg-white border-b border-slate-100 py-2.5 shadow-xs'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5'
              : 'bg-white border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand / Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group min-h-[44px]"
          >
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
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors min-h-[44px]"
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
                className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-all hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-1.5 min-h-[44px]"
              >
                <Calendar size={15} />
                <span>Book Appointment</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer rendered via Portal to escape header backdrop-filter/transform containing block */}
      {typeof document !== 'undefined' &&
        mobileMenuOpen &&
        createPortal(
          <div
            id="mobile-navigation-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-x-0 bottom-0 z-50 bg-white md:hidden overflow-y-auto border-t border-slate-100 shadow-2xl px-6 py-6"
            style={{
              top: `${headerHeight}px`,
              paddingBottom: 'max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))',
            }}
          >
            <div className="flex flex-col min-h-full justify-between gap-6 max-w-md mx-auto">
              <nav aria-label="Mobile Navigation Links" className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg sm:text-xl font-heading font-semibold min-h-[48px] px-4 py-3 rounded-xl transition-colors flex items-center ${
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

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 shrink-0">
                <TrackedBookingLink
                  href={CLINIC.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  trackingLocation="mobile_menu"
                  className="bg-teal-600 text-center text-white py-3.5 px-4 rounded-xl font-medium w-full text-base min-h-[48px] flex items-center justify-center gap-2 shadow-sm hover:bg-teal-700 transition-colors"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </TrackedBookingLink>
                <TrackedCallLink
                  href={CLINIC.phone.telLink}
                  onClick={() => setMobileMenuOpen(false)}
                  trackingLocation="mobile_menu"
                  className="bg-slate-100 text-center text-slate-800 py-3.5 px-4 rounded-xl font-medium w-full text-base min-h-[48px] flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                >
                  <Phone size={18} className="text-teal-700" />
                  <span>Call {CLINIC.phone.display}</span>
                </TrackedCallLink>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
