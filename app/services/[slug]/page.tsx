import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import { TrackedBookingLink, TrackedWhatsAppLink, TrackedCallLink } from '@/components/TrackedCTA';
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { CLINIC, SITE_URL, getConditionWhatsAppUrl } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const pageUrl = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: pageUrl,
      siteName: CLINIC.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.seoDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const conditionWhatsAppUrl = getConditionWhatsAppUrl(service.name);

  // Structured Data (MedicalWebPage)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${service.name} Treatment — ${CLINIC.name}`,
    url: `${SITE_URL}/services/${service.slug}`,
    description: service.seoDescription,
    medicalAudience: 'Patient',
    about: {
      '@type': 'MedicalCondition',
      name: service.name,
    },
    author: {
      '@type': 'IndividualPhysician',
      name: CLINIC.doctor,
      url: `${SITE_URL}/about`,
    },
  };

  // Find related condition objects
  const relatedServices = service.relatedSlugs
    .map((rSlug) => getServiceBySlug(rSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumbs with embedded BreadcrumbList schema */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.shortName },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-800 to-teal-700 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            ENT Services • Thiruvananthapuram
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight leading-tight">
            {service.name} Treatment
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {service.heroLine}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <TrackedBookingLink
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              trackingLocation={`service_hero_${service.slug}`}
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-all shadow-sm"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </TrackedBookingLink>
            <TrackedWhatsAppLink
              href={conditionWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              trackingLocation={`service_hero_${service.slug}`}
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-all shadow-sm"
            >
              <MessageCircle size={18} />
              <span>Book on WhatsApp</span>
            </TrackedWhatsAppLink>
            <TrackedCallLink
              href={CLINIC.phone.telLink}
              trackingLocation={`service_hero_${service.slug}`}
              className="inline-flex items-center gap-2 border border-teal-300/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600/40 transition-all"
            >
              <Phone size={18} />
              <span>Call Clinic</span>
            </TrackedCallLink>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          <span className="text-teal-700 text-xs uppercase tracking-wider font-bold mb-2 block">
            Understanding The Condition
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-6">
            Overview &amp; Clinical Context
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
            {service.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-teal-700 text-xs uppercase tracking-wider font-bold mb-2 block">
            Recognise The Signs
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            Symptoms to Watch For
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {service.symptoms.map((symptom, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-200 transition-colors"
            >
              <span className="text-2xl sm:text-3xl shrink-0" role="img" aria-label={symptom.title}>
                {symptom.icon}
              </span>
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
                  {symptom.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {symptom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to See a Doctor */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-teal-50/70 border border-teal-200/70 rounded-3xl p-6 sm:p-9">
          <div className="flex items-center gap-2 text-teal-800 font-bold mb-4 font-heading text-xl">
            <CheckCircle2 size={22} className="text-teal-700 shrink-0" />
            <span>When Should You Consult Dr. Marissa?</span>
          </div>
          <ul className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            {service.whenToSeeDoctor.map((item, idx) => {
              const isUrgent = item.includes('RED FLAG') || item.includes('URGENT');
              return (
                <li
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-xl ${
                    isUrgent
                      ? 'bg-red-50 text-red-900 border border-red-200 font-medium'
                      : 'bg-white/80'
                  }`}
                >
                  {isUrgent ? (
                    <ShieldAlert size={18} className="text-red-600 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                  )}
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-teal-700 text-xs uppercase tracking-wider font-bold mb-2 block">
            Our Clinical Method
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            What Happens During Your Consultation
          </h2>
        </div>

        <div className="space-y-4">
          {service.consultationProcess.map((step) => (
            <div
              key={step.step}
              className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 font-heading font-bold text-lg flex items-center justify-center shrink-0">
                {step.step}
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section with Page-Level FAQPage Schema */}
      <FAQSection
        faqs={service.faqs}
        title={`${service.shortName} FAQ`}
        description={`Common questions and clear medical explanations about ${service.shortName.toLowerCase()} care at our Thiruvananthapuram clinic.`}
        includeSchema={true}
      />

      {/* Related Conditions Grid */}
      {relatedServices.length > 0 && (
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
              Related ENT Conditions
            </h2>
            <p className="text-slate-600 text-sm">
              Explore associated conditions evaluated and treated at our Pongumoodu clinic.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-base mb-1 group-hover:text-teal-700 transition-colors">
                    {rel.shortName}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {rel.overview[0]}
                  </p>
                </div>
                <span className="text-xs font-semibold text-teal-700 mt-4 inline-flex items-center gap-1 group-hover:underline">
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Final Booking CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-800 to-teal-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
            Book Your {service.shortName} Consultation
          </h2>
          <p className="text-teal-100 text-base sm:text-lg mb-8 leading-relaxed">
            Convenient outpatient appointments at our clinic in Pongumoodu, Thiruvananthapuram. Serving families across Ulloor, Kowdiar, Pattom, and Kesavadasapuram.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <TrackedBookingLink
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              trackingLocation={`service_footer_${service.slug}`}
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-8 py-3.5 rounded-full hover:bg-teal-50 transition-all shadow-md"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </TrackedBookingLink>
            <TrackedWhatsAppLink
              href={conditionWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              trackingLocation={`service_footer_${service.slug}`}
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-700 transition-all shadow-md"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </TrackedWhatsAppLink>
          </div>
        </div>
      </section>
    </div>
  );
}
