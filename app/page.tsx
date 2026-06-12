'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Menu, 
  X,
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
  AlertTriangle
} from 'lucide-react';
import { DoctorProfileModal } from '@/components/doctor-profile-modal';
import ClinicHours from '@/components/ClinicHours';
import SerahChat from '@/components/SerahChat';

const CALENDAR_LINK = "https://calendar.app.google/VuEjqb3kxG4P2peT6";
const WHATSAPP_LINK = "https://wa.me/919447711755";
const PHONE_LINK = "tel:+919447711755";
const MAP_LINK = "https://maps.app.goo.gl/Ats37LvFxDFWRL3q7?g_st=atm";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center font-heading font-bold text-xl group-hover:bg-teal-700 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-slate-900 leading-tight">Dr. Marissa&apos;s</span>
              <span className="text-xs text-teal-600 font-medium tracking-wider uppercase">ENT Clinic</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-4 pb-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-semibold text-slate-800"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a 
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-center text-white py-4 rounded-xl font-medium w-full text-lg"
                >
                  Book Appointment
                </a>
                <a 
                  href={PHONE_LINK}
                  className="bg-slate-100 text-center text-slate-800 py-4 rounded-xl font-medium w-full text-lg flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-sky-50 opacity-80" />
        {/* Animated background blobs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6 border border-teal-100">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              Accepting New Patients
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Expert ENT Care with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">Personal Touch</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              Comprehensive ear, nose, throat, vertigo, and sinus care in a welcoming and patient-focused environment.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a 
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-teal-700 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a 
                href={PHONE_LINK}
                className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-medium text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <Phone size={20} />
                Call / WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative">
                {/* Doctor examining patient's ear */}
                <Image 
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=2000" 
                  alt="Doctor examining patient's ear with an otoscope" 
                  fill
                  className="object-cover object-center opacity-95 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <motion.div 
                variants={fadeUp}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900">Dr. Marissa Mathew</h4>
                    <p className="text-sm text-slate-500">ENT Specialist</p>
                  </div>
                </div>
                <DoctorProfileModal>
                  <button className="text-teal-600 text-sm font-medium flex items-center gap-1 hover:text-teal-700 transition-colors group">
                    Read Full Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </DoctorProfileModal>
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} className="order-1 lg:order-2">
              <motion.span variants={fadeUp} className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">About Our Clinic</motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Where expert medical care meets a personal touch.
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Welcome to our ENT clinic. We provide high-quality, unhurried outpatient care in a welcoming setting.
                </p>
                <p>
                  Equipped with essential diagnostic tools, we offer comprehensive ENT services and personalized treatment focused on comfort, clarity, and long-term wellness.
                </p>
                
                <ul className="space-y-3 mt-8">
                  {[
                    "Unhurried, thorough consultations",
                    "Evidence-based treatments",
                    "Clear, empowering patient education"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <ShieldCheck size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Comprehensive ENT Care</h2>
            <p className="text-lg text-slate-600">Specialized treatments tailored to your unique needs, ensuring you hear, breathe, and live better.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Ear Care",
                desc: "Safe microsuction ear cleaning, wax removal, foreign body removal, and ear block management performed with precision and patient comfort.",
                icon: Stethoscope,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Vertigo Management",
                desc: "Specialized vestibular rehabilitation, corrective maneuvers, and medications designed to restore balance and improve quality of life.",
                icon: Activity,
                color: "text-teal-600",
                bg: "bg-teal-50"
              },
              {
                title: "Nasal & Sinus Care",
                desc: "Comprehensive treatment for sinusitis, nasal obstruction, nasal discharge, allergies, and snoring.",
                icon: Wind,
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              {
                title: "Throat Care",
                desc: "Expert evaluation and treatment for throat pain, discomfort, infections, and hoarseness of voice.",
                icon: Smile,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4 items-start max-w-4xl mx-auto">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
              <AlertTriangle size={22} />
            </div>
            <div>
              <p className="font-semibold text-red-800 mb-1">Important Safety Note</p>
              <p className="text-red-700 leading-relaxed text-sm">
                Emergencies such as airway-obstructing foreign bodies, severe nasal bleeding, or accident-related ENT trauma are not treated here, as they may require emergency imaging or life-saving interventions. Please visit the nearest hospital casualty department immediately for such critical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-slate-600">We prioritize your health, comfort, and peace of mind with a patient-first approach.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: HeartHandshake, title: "Patient-Centered Care", desc: "Your health goals and comfort drive every decision we make." },
              { icon: Timer, title: "Unhurried Consultations", desc: "We take the time to listen, evaluate, and thoroughly explain." },
              { icon: Microscope, title: "Modern Diagnostic Tools", desc: "Equipped with advanced technology for accurate assessments." },
              { icon: Sofa, title: "Comfortable Environment", desc: "A calming, welcoming clinic space designed to put you at ease." },
              { icon: ShieldCheck, title: "Evidence-Based Treatment", desc: "Care plans rooted in the latest medical research and best practices." },
              { icon: Users, title: "Personalized Attention", desc: "Tailored treatment strategies specific to your unique condition." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section className="py-24 bg-teal-50/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Patient Stories</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Read what our patients have to say about their experience and recovery journey with us on <a href="https://maps.app.goo.gl/WXWw2kbxLamryyxd9?g_st=atm" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">Google Maps</a>.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "Dr. Marissa is an exceptional ENT specialist. I visited her for chronic sinusitis that I've been struggling with for years. She took the time to listen to my concerns, thoroughly explained the treatment plan, and didn't rush the consultation. Highly recommend!",
                  author: "Arjun N."
                },
                {
                  text: "I had a sudden severe episode of peripheral vertigo and was completely disoriented. Dr. Marissa was very reassuring and handled my case with great expertise. The maneuvers she performed provided almost immediate relief.",
                  author: "Sreelekshmi S."
                },
                {
                  text: "Visited for ear wax removal as I was experiencing an ear block. The microsuction procedure was painless, quick, and very effective. Dr. Marissa is gentle, professional, and genuinely cares about her patients' comfort. 5 stars!",
                  author: "Rohan M."
                }
              ].map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50 relative flex flex-col">
                  <div className="flex text-amber-400 mb-4 gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6 flex-grow">{`"${review.text}"`}</p>
                  <div className="font-semibold text-slate-900">- {review.author}</div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-600"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500 to-teal-700 opacity-80"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Book Your ENT Consultation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-teal-50 text-xl mb-10"
          >
            We are here to help you hear, breathe, and feel your best every day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-teal-50 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <Calendar size={24} />
              Schedule Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Find answers to common questions about our clinic and ENT care.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What should I bring to my first appointment?", a: "Please bring any previous medical records, hearing tests, imaging (X-rays/CT scans), and a list of your current medications." },
              { q: "Do you treat children?", a: "Yes, we provide comprehensive ENT pediatric care, addressing common childhood issues like recurrent ear infections, tonsillitis, and breathing difficulties." },
              { q: "How is ear wax removal performed?", a: "We primarily use microsuction, a very safe, gentle, and effective way to remove ear wax without using water syringes, reducing the risk of infection." },
              { q: "What are the common signs of vertigo?", a: "Symptoms include a spinning sensation, loss of balance, dizziness, nausea, and ringing in the ears. If you experience these securely, an evaluation is highly recommended." },
              { q: "Do you treat ENT emergencies?", a: "Emergencies such as airway-obstructing foreign bodies, severe nasal bleeding, or accident-related ENT trauma are not treated here, as they may require emergency imaging or life-saving interventions. Please visit the nearest hospital casualty department immediately for such critical care." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 font-heading text-lg">
                  {faq.q}
                  <span className="transition duration-300 group-open:-rotate-180 text-slate-400">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Visit Our Clinic</h2>
              <p className="text-slate-600 mb-10 text-lg">We&apos;re conveniently located in Pongumoodu, Thiruvananthapuram. Reach out to schedule a visit or ask any questions.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600 leading-relaxed max-w-sm">
                      Dr. Marissa&apos;s ENT Clinic<br/>
                      RG-85 Sreenagar Lane, Pazhaya Rd,<br/>
                      Pongumoodu, Thiruvananthapuram,<br/>
                      Kerala 695011
                    </p>
                    <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-medium text-sm hover:text-teal-700 mt-2 inline-block">Get Directions →</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-1">Phone / WhatsApp</h4>
                    <p className="text-slate-600">+91 94477 11755</p>
                    <div className="flex gap-3 mt-2">
                      <a href={PHONE_LINK} className="text-sky-600 font-medium text-sm hover:text-sky-700 inline-block">Call Now →</a>
                      <span className="text-slate-300">|</span>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium text-sm hover:text-green-700 inline-block">Message WhatsApp →</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 mb-1">Clinic Hours</h4>
   <ClinicHours />
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl overflow-hidden h-[400px] lg:h-auto shadow-inner border border-slate-200">
              {/* Google Maps iframe embed */}
               <iframe 
                src="https://maps.google.com/maps?q=Dr.%20Marissa's%20ENT%20Clinic,%20Pongumoodu,%20Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Dr. Marissa's ENT Clinic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center font-heading font-bold text-lg">
                  M
                </div>
                <span className="font-heading font-semibold text-white tracking-wide">Dr. Marissa&apos;s ENT</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Expert ENT care with a personal touch. Comprehensive treatment in a welcoming environment in Thiruvananthapuram.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-teal-400 transition-colors">About the Clinic</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
                <li><a href="#why-us" className="hover:text-teal-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#faq" className="hover:text-teal-400 transition-colors">Patient FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-6">Get in Touch</h4>
               <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <span className="text-slate-400">RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-teal-500 shrink-0" />
                  <span className="text-slate-400">+91 94477 11755</span>
                </li>
              </ul>
              <div className="mt-6">
                <a 
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 rounded-full font-medium transition-colors text-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Dr. Marissa&apos;s ENT Clinic. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

      {/* Serah AI Chat Assistant */}
      <SerahChat />
    </div>
  );
}
