'use client';

import Image from 'next/image';
import { motion, type Variants } from 'motion/react';
import Link from 'next/link';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  Stethoscope,
  Activity,
  Wind,
  Smile,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Users,
  Timer,
  Microscope,
  Sofa,
  AlertTriangle,
  MessageCircle,
  Navigation,
  Bus,
  Train
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { DoctorProfileModal } from '@/components/doctor-profile-modal';
import ClinicHours from '@/components/ClinicHours';
import FAQSection from '@/components/FAQSection';
import { CLINIC } from '@/lib/constants';
import { trackBookingClick, trackCallClick, trackWhatsAppClick } from '@/lib/gtm';

// Lazy load floating Serah chat widget
const SerahChat = dynamic(() => import('@/components/SerahChat'), { ssr: false });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const homeFaqs = [
  { q: 'What should I bring to my first appointment?', a: 'Please bring any previous medical records, hearing tests, imaging (X-rays/CT scans), and a list of your current medications.' },
  { q: 'Do you treat children?', a: 'Yes, we provide comprehensive paediatric ENT care, addressing common childhood issues like recurrent ear infections, tonsillitis, adenoid hypertrophy, and mouth breathing.' },
  { q: 'How is ear wax removal performed?', a: 'We primarily use microsuction, a gentle, water-free way to remove ear wax under direct magnification, eliminating the infection risk associated with ear syringing.' },
  { q: 'What are the common signs of vertigo?', a: 'Symptoms include a spinning sensation, loss of balance during head turns, dizziness, nausea, and ringing in the ears. If you experience these, an ENT evaluation is highly recommended.' },
  { q: 'Do you treat ENT emergencies?', a: 'Emergencies such as airway-obstructing foreign bodies, severe nasal bleeding, or accident-related ENT trauma are not treated here. Please visit the nearest hospital casualty department or call 108 immediately for critical emergency care.' },
];

export default function Home() {
  return (
    <div className="bg-white selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-sky-50 opacity-80" />
        
        {/* Animated background blobs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs sm:text-sm font-semibold mb-6 border border-teal-100">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              Accepting New Patients • Pongumoodu, Thiruvananthapuram
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Expert ENT Care with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">Personal Touch</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              Comprehensive ear, nose, throat, vertigo, and sinus care in an unhurried, welcoming outpatient setting by Dr. Marissa Mathew.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={CLINIC.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick('home_hero')}
                className="inline-flex justify-center items-center gap-2 bg-teal-600 text-white px-7 py-4 rounded-xl font-medium text-base hover:bg-teal-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar size={19} />
                <span>Book Appointment</span>
              </a>
              <a
                href={CLINIC.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('home_hero')}
                className="inline-flex justify-center items-center gap-2 bg-green-600 text-white px-7 py-4 rounded-xl font-medium text-base hover:bg-green-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle size={19} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={CLINIC.phone.telLink}
                onClick={() => trackCallClick('home_hero')}
                className="inline-flex justify-center items-center gap-2 bg-white text-slate-800 px-6 py-4 rounded-xl font-medium text-base border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <Phone size={19} className="text-teal-700" />
                <span>Call Clinic</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative">
                <Image
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dr. Marissa's ENT Clinic examination"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Profile Badge */}
              <motion.div 
                variants={fadeUp}
                className="absolute -bottom-6 -right-4 sm:-right-6 md:bottom-8 md:-right-8 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-11 h-11 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 shrink-0">
                    <Stethoscope size={22} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base">{CLINIC.doctor}</h4>
                    <p className="text-xs text-slate-500">{CLINIC.qualifications}</p>
                  </div>
                </div>
                <DoctorProfileModal>
                  <button className="text-teal-700 text-xs font-semibold flex items-center gap-1 hover:text-teal-800 transition-colors group mt-1">
                    Read Doctor Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </DoctorProfileModal>
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} className="order-1 lg:order-2">
              <motion.span variants={fadeUp} className="text-teal-700 font-bold tracking-wider uppercase text-xs mb-3 block">
                About Our Clinic
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Where expert medical care meets a personal touch.
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Welcome to Dr. Marissa&apos;s ENT Clinic in Pongumoodu, Thiruvananthapuram. We provide high-quality, unhurried outpatient consultations designed to address your symptoms thoroughly.
                </p>
                <p>
                  Equipped with modern diagnostic tools, we offer personalized treatment for vertigo, ear blockages, sinus congestion, and pediatric ENT concerns with emphasis on clarity, patient comfort, and long-term wellness.
                </p>
                
                <ul className="space-y-3 mt-6 pt-4 border-t border-slate-100">
                  {[
                    'Unhurried, thorough consultations by appointment',
                    'Evidence-based, conservative medical treatments',
                    'Empowering patient education in English & Malayalam',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm sm:text-base">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <ShieldCheck size={14} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline"
                  >
                    <span>Learn more about our practice &amp; philosophy</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-teal-700 font-bold tracking-wider uppercase text-xs mb-2 block">Our Specialties</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">Comprehensive ENT Care</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Specialized treatments tailored to help you hear, breathe, and live with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Ear Care & Microsuction',
                desc: 'Safe microsuction ear cleaning, wax removal, and ear block management performed with precision under direct magnification without water syringing.',
                icon: Stethoscope,
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                href: '/services/ear-wax-removal',
              },
              {
                title: 'Vertigo & Balance Care',
                desc: 'Specialized vestibular evaluation, Dix-Hallpike diagnostic testing, and corrective repositioning manoeuvres (Epley) to restore balance and relieve spinning.',
                icon: Activity,
                color: 'text-teal-600',
                bg: 'bg-teal-50',
                href: '/services/vertigo',
              },
              {
                title: 'Nasal & Sinus Care',
                desc: 'Evidence-based treatment for chronic sinusitis, allergic rhinitis, nasal obstruction, and post-nasal drip suited for Kerala\'s humid coastal climate.',
                icon: Wind,
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                href: '/services/sinusitis',
              },
              {
                title: 'Throat & Voice Care',
                desc: 'Thorough evaluation for recurring tonsillitis, persistent sore throats, hoarseness of voice, and pediatric throat complaints.',
                icon: Smile,
                color: 'text-indigo-600',
                bg: 'bg-indigo-50',
                href: '/services/tonsillitis',
              },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-7 sm:p-8 rounded-3xl shadow-xs border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline pt-2"
                >
                  <span>Learn Treatment Details</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hub Link */}
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-6 py-3 rounded-full border border-teal-200 hover:bg-teal-50 transition-all text-sm shadow-xs"
            >
              <span>View All 10 ENT Conditions Treated</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-teal-700 font-bold tracking-wider uppercase text-xs mb-2 block">Our Patient Promise</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">Why Patients Choose Us</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A calm, patient-first approach centered on clarity, safety, and evidence-based relief.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: HeartHandshake, title: 'Patient-Centered Care', desc: 'Your personal comfort and recovery goals guide every clinical recommendation.' },
              { icon: Timer, title: 'Unhurried Consultations', desc: 'We take the time to listen, evaluate thoroughly, and answer all questions.' },
              { icon: Microscope, title: 'Modern Diagnostic Tools', desc: 'Accurate otoscopic assessments and vestibular diagnostic techniques.' },
              { icon: Sofa, title: 'Comfortable Setting', desc: 'A peaceful, clean clinic environment in Pongumoodu designed to put you at ease.' },
              { icon: ShieldCheck, title: 'Evidence-Based Medicine', desc: 'Care plans rooted in current clinical guidelines, avoiding unnecessary medications.' },
              { icon: Users, title: 'Bilingual Care', desc: 'Consultations conducted comfortably in English and Malayalam for clear communication.' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <feature.icon size={22} />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section className="py-20 bg-teal-50/40 border-y border-teal-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-700 font-bold tracking-wider uppercase text-xs mb-2 block">Patient Experiences</span>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">What Our Patients Say</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Read verified feedback from our patients on{' '}
              <a 
                href={CLINIC.maps.reviewsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-700 hover:underline font-semibold"
              >
                Google Maps
              </a>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Dr. Marissa is an exceptional ENT specialist. I visited her for chronic sinusitis that I've been struggling with for years. She took the time to listen to my concerns, thoroughly explained the treatment plan, and didn't rush the consultation. Highly recommend!",
                author: 'Arjun N.',
              },
              {
                text: 'I had a sudden severe episode of peripheral vertigo and was completely disoriented. Dr. Marissa was very reassuring and handled my case with great expertise. The manoeuvres she performed provided almost immediate relief.',
                author: 'Sreelekshmi S.',
              },
              {
                text: "Visited for ear wax removal as I was experiencing an ear block. The microsuction procedure was painless, quick, and very effective. Dr. Marissa is gentle, professional, and genuinely cares about her patients' comfort. 5 stars!",
                author: 'Rohan M.',
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl shadow-xs border border-teal-100/60 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-3 gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="font-semibold text-slate-900 text-sm border-t border-slate-50 pt-3">
                  — {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        description="Find clear answers to common questions about our clinic and outpatient ENT care."
        includeSchema={false}
      />

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-teal-700 font-bold tracking-wider uppercase text-xs mb-2 block">Visit Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Visit Our Clinic in Pongumoodu
              </h2>
              <p className="text-slate-600 text-base mb-8 leading-relaxed">
                Conveniently located in a quiet residential area at Pongumoodu, Thiruvananthapuram. Easily accessible from Ulloor, Kesavadasapuram, Kowdiar, and Pattom.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-1">Clinic Address</h4>
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
                      className="text-teal-700 font-semibold text-xs hover:underline mt-2 inline-flex items-center gap-1"
                    >
                      <Navigation size={13} />
                      <span>Get Google Maps Directions</span>
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-1">Phone &amp; WhatsApp</h4>
                    <p className="text-slate-600 text-sm">
                      Voice calls: <a href={CLINIC.phone.telLink} className="font-semibold text-slate-900 hover:text-teal-700">{CLINIC.phone.display}</a>
                    </p>
                    <p className="text-slate-600 text-sm mt-0.5">
                      WhatsApp: <a href={CLINIC.whatsapp.chatUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">{CLINIC.whatsapp.display}</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <Clock size={22} />
                  </div>
                  <div className="w-full">
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-2">Clinic Hours</h4>
                    <ClinicHours />
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-slate-100 rounded-3xl overflow-hidden h-[380px] lg:h-[460px] shadow-xs border border-slate-200">
              <iframe 
                src={CLINIC.maps.iframeEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Dr. Marissa's ENT Clinic, Pongumoodu, Thiruvananthapuram"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serah Chat Assistant */}
      <SerahChat />
    </div>
  );
}
