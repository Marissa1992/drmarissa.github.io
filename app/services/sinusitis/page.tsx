import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sinusitis Treatment in Thiruvananthapuram | Dr. Marissa ENT Clinic',
  description:
    'Expert sinusitis and nasal allergy treatment in Thiruvananthapuram. Chronic or acute sinus problems treated by ENT specialist Dr. Marissa Mathew at Pongumoodu clinic.',
  openGraph: {
    title: 'Sinusitis Treatment in Thiruvananthapuram | Dr. Marissa ENT Clinic',
    description:
      'Suffering from blocked nose, facial pain, or chronic sinusitis? Get expert ENT care at Dr. Marissa\'s Clinic in Pongumoodu, Thiruvananthapuram.',
    url: 'https://drmarissa.netlify.app/services/sinusitis',
    siteName: "Dr. Marissa's ENT Clinic",
    locale: 'en_IN',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
  '@type': 'MedicalWebPage',
  name: 'Sinusitis Treatment — Dr. Marissa\'s ENT Clinic',
  url: 'https://drmarissa.netlify.app/services/sinusitis',
  description:
    'Comprehensive sinusitis and nasal allergy treatment by ENT specialist Dr. Marissa Mathew in Pongumoodu, Thiruvananthapuram, Kerala.',
  medicalAudience: 'Patient',
  about: {
    '@type': 'MedicalCondition',
    name: 'Sinusitis',
    alternateName: ['Rhinosinusitis', 'Chronic Sinusitis', 'Sinus Infection', 'Nasal Congestion'],
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Paranasal Sinuses' },
  },
  author: {
    '@type': 'IndividualPhysician',
    name: 'Dr. Marissa Mathew',
    url: 'https://drmarissa.netlify.app/#about',
   },
 }, 
 {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://drmarissa.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://drmarissa.netlify.app/#services' },
        { '@type': 'ListItem', position: 3, name: 'Sinusitis Treatment', item: 'https://drmarissa.netlify.app/services/sinusitis' },
      ],
    },
  ],
};

export default function SinusitisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg text-teal-700 leading-tight">
            Dr. Marissa&apos;s<br />
            <span className="text-slate-700 font-medium text-sm">ENT Clinic</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <Link href="/#about" className="hover:text-teal-700 transition-colors">About</Link>
            <Link href="/#services" className="hover:text-teal-700 transition-colors">Services</Link>
            <Link href="/#faq" className="hover:text-teal-700 transition-colors">FAQ</Link>
            <Link href="/#contact" className="hover:text-teal-700 transition-colors">Contact</Link>
          </nav>
          <a
            href="https://calendar.app.google/VuEjqb3kxG4P2peT6"
            className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </header>

      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}
        <section className="bg-teal-700 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal-200 text-sm font-medium uppercase tracking-widest mb-3">
              ENT Services — Thiruvananthapuram
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Sinusitis Treatment
            </h1>
            <p className="text-teal-100 text-lg max-w-xl mx-auto">
              Persistent blocked nose, facial pain, or recurring sinus infections? 
              Get lasting relief with targeted ENT care at our Pongumoodu clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a
                href="https://calendar.app.google/VuEjqb3kxG4P2peT6"
                className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919447711755"
                className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919447711755"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* What is Sinusitis */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Understanding Sinusitis</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              What is Sinusitis?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Sinusitis is an inflammation or swelling of the tissue lining the sinuses — 
              the air-filled cavities in the skull around the nose and eyes. When sinuses 
              become blocked and filled with fluid, bacteria or viruses can grow and cause infection.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Sinusitis can be <strong>acute</strong> (lasting up to 4 weeks), 
              <strong> subacute</strong> (4–12 weeks), or <strong>chronic</strong> (lasting 
              more than 12 weeks). In Kerala&apos;s climate, allergic rhinitis and dust 
              mite allergies are common triggers that worsen sinus symptoms.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { type: 'Acute', desc: 'Sudden onset, usually after a cold or flu. Clears within 4 weeks with treatment.', color: 'bg-amber-50 border-amber-200 text-amber-800' },
                { type: 'Subacute', desc: 'Lasts 4–12 weeks. Often needs more targeted treatment to resolve fully.', color: 'bg-orange-50 border-orange-200 text-orange-800' },
                { type: 'Chronic', desc: 'Persists beyond 12 weeks. May require specialist evaluation and longer treatment.', color: 'bg-red-50 border-red-200 text-red-800' },
              ].map((t) => (
                <div key={t.type} className={`rounded-xl border p-4 ${t.color}`}>
                  <p className="font-bold mb-1">{t.type} Sinusitis</p>
                  <p className="text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Recognise the Signs</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Symptoms of Sinusitis
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🤧', title: 'Nasal Congestion', desc: 'Persistent blocked or stuffy nose making it hard to breathe through the nostrils.' },
                { icon: '😖', title: 'Facial Pain or Pressure', desc: 'Dull aching pain or pressure around the cheeks, eyes, forehead, or nose bridge.' },
                { icon: '💧', title: 'Nasal Discharge', desc: 'Thick yellow or green mucus from the nose, or mucus dripping down the back of the throat.' },
                { icon: '👃', title: 'Loss of Smell', desc: 'Reduced or absent sense of smell (anosmia) due to nasal inflammation.' },
                { icon: '🤒', title: 'Headache', desc: 'Sinus-related headaches, often worse in the morning or when bending forward.' },
                { icon: '😴', title: 'Fatigue', desc: 'Feeling tired or run-down due to the body fighting infection and disrupted sleep.' },
                { icon: '😮', title: 'Post-Nasal Drip', desc: 'Constant sensation of mucus dripping down the back of the throat, causing cough.' },
                { icon: '🦷', title: 'Tooth or Jaw Pain', desc: 'Upper tooth pain caused by pressure from inflamed maxillary sinuses nearby.' },
              ].map((s) => (
                <div key={s.title} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{s.title}</h3>
                    <p className="text-slate-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">How We Help</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Effective sinusitis care starts with finding the root cause — whether it is 
              infection, allergy, nasal polyps, or a structural problem. Dr. Marissa 
              tailors a treatment plan specific to your condition.
            </p>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Comprehensive Nasal Examination', desc: 'Using nasal endoscopy and diagnostic tools to directly visualise the nasal passages and sinuses to identify polyps, structural issues, or infection.' },
                { step: '02', title: 'Medical Management', desc: 'Appropriate antibiotics, nasal steroid sprays, antihistamines, and decongestants prescribed based on the type and severity of your sinusitis.' },
                { step: '03', title: 'Allergy Evaluation and Management', desc: 'Identifying allergic triggers — dust, pollen, mould — that worsen sinus symptoms, and providing targeted allergy management strategies.' },
                { step: '04', title: 'Nasal Irrigation Guidance', desc: 'Teaching safe and effective saline nasal rinsing techniques to flush out mucus, reduce inflammation, and maintain sinus hygiene at home.' },
                { step: '05', title: 'Referral for Surgery if Needed', desc: 'For severe chronic sinusitis or nasal polyps not responding to medication, referral for Functional Endoscopic Sinus Surgery (FESS) with appropriate guidance.' },
              ].map((t) => (
                <div key={t.step} className="flex gap-5 p-5 bg-white rounded-xl border border-slate-200">
                  <span className="text-teal-700 font-heading font-bold text-xl shrink-0">{t.step}</span>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{t.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local context Kerala */}
        <section className="bg-teal-50 border-y border-teal-100 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Local Context</p>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">
              Sinusitis in Thiruvananthapuram
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Kerala&apos;s warm, humid climate and high pollen levels — especially during 
              monsoon season — make sinusitis and allergic rhinitis extremely common. 
              Dust mites, mould spores, and cockroach allergens are prevalent in homes 
              across Pongumoodu, Kowdiar, Pattom, and Sasthamangalam. Early ENT consultation 
              prevents acute sinusitis from becoming a chronic, debilitating condition.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Sinusitis FAQ
            </h2>
            <div className="space-y-5">
              {[
                { q: 'How do I know if I have sinusitis or just a cold?', a: 'A common cold usually resolves within 7–10 days. Sinusitis typically causes facial pain or pressure, coloured nasal discharge, and symptoms lasting beyond 10 days. An ENT evaluation can confirm the diagnosis.' },
                { q: 'Do I always need antibiotics for sinusitis?', a: 'Not always. Many cases of acute sinusitis are viral and resolve with steam inhalation, saline rinses, and nasal sprays. Antibiotics are prescribed only when there is evidence of bacterial infection.' },
                { q: 'Can sinusitis cause tooth pain?', a: 'Yes. The roots of the upper back teeth lie close to the floor of the maxillary sinuses. Inflammation in these sinuses commonly causes pain felt in the upper teeth or jaw.' },
                { q: 'Is sinusitis related to allergies?', a: 'Very commonly, yes. Allergic rhinitis causes nasal inflammation that blocks sinus drainage, leading to sinusitis. Treating the underlying allergy is an important part of managing recurrent sinusitis.' },
                { q: 'When should I see a doctor for sinusitis?', a: 'See a doctor if symptoms last more than 10 days, if you have severe facial pain or headache, high fever, vision changes, or if sinusitis keeps recurring. Chronic sinusitis always warrants an ENT consultation.' },
              ].map((f) => (
                <div key={f.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">{f.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-teal-700 text-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Breathe Freely Again
            </h2>
            <p className="text-teal-100 mb-8">
              Book a sinus consultation at Dr. Marissa&apos;s ENT Clinic in Pongumoodu, 
              Thiruvananthapuram. Serving patients from Kowdiar, Pattom, Sasthamangalam, 
              Vellayambalam, and nearby areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://calendar.app.google/VuEjqb3kxG4P2peT6"
                className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/919447711755"
                className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-10 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
            <div>
              <p className="font-heading font-bold text-white text-base mb-1">Dr. Marissa&apos;s ENT Clinic</p>
              <p>RG-85 Sreenagar Lane, Pazhaya Rd</p>
              <p>Pongumoodu, Thiruvananthapuram, Kerala 695011</p>
              <p className="mt-2">+91 94477 11755</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Other Services</p>
              <ul className="space-y-1">
                <li><Link href="/services/vertigo" className="hover:text-white transition-colors">Vertigo Treatment</Link></li>
                <li><Link href="/services/ear-wax-removal" className="hover:text-white transition-colors">Ear Wax Removal</Link></li>
                <li><Link href="/services/tonsillitis" className="hover:text-white transition-colors">Tonsillitis Treatment</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Back to Home</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-slate-800 text-xs text-center">
            © 2026 Dr. Marissa&apos;s ENT Clinic. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
