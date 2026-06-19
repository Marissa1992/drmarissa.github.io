import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tonsillitis & Throat Treatment in Thiruvananthapuram | Dr. Marissa ENT Clinic',
  description:
    'Expert tonsillitis, throat infection and throat pain treatment in Thiruvananthapuram. ENT specialist Dr. Marissa Mathew at Pongumoodu clinic, Kerala.',
  openGraph: {
    title: 'Tonsillitis Treatment in Thiruvananthapuram | Dr. Marissa ENT Clinic',
    description:
      'Recurring sore throat, tonsillitis, or throat infection? Get specialist ENT care at Dr. Marissa\'s Clinic in Pongumoodu, Thiruvananthapuram.',
    url: 'https://drmarissa.netlify.app/services/tonsillitis',
    siteName: "Dr. Marissa's ENT Clinic",
    locale: 'en_IN',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Tonsillitis and Throat Treatment — Dr. Marissa\'s ENT Clinic',
  url: 'https://drmarissa.netlify.app/services/tonsillitis',
  description:
    'Expert tonsillitis and throat infection treatment by ENT specialist Dr. Marissa Mathew at Pongumoodu, Thiruvananthapuram, Kerala.',
  medicalAudience: 'Patient',
  about: {
    '@type': 'MedicalCondition',
    name: 'Tonsillitis',
    alternateName: ['Throat Infection', 'Sore Throat', 'Strep Throat', 'Pharyngitis'],
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Tonsils and Throat' },
  },
  mainContentOfPage: {
    '@type': 'MedicalTherapy',
    name: 'Tonsillitis and Throat Infection Treatment',
  },
  author: {
    '@type': 'IndividualPhysician',
    name: 'Dr. Marissa Mathew',
    url: 'https://drmarissa.netlify.app/#about',
  },
};

export default function TonsillitisPage() {
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
              Tonsillitis &amp; Throat Care
            </h1>
            <p className="text-teal-100 text-lg max-w-xl mx-auto">
              Recurring sore throats, painful swallowing, or persistent throat infections? 
              Get accurate diagnosis and effective treatment at our clinic in Pongumoodu.
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
                Call / WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* What is Tonsillitis */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Understanding the Condition</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              What is Tonsillitis?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Tonsillitis is inflammation of the tonsils — two lymph nodes at the back of the 
              throat that act as the body&apos;s first line of defence against infection. 
              When bacteria or viruses infect the tonsils, they become swollen, red, and painful.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              While a single episode of tonsillitis is common and usually resolves with treatment, 
              <strong> recurrent tonsillitis</strong> (7 or more episodes in a year) can significantly 
              impact a child&apos;s schooling, sleep, and quality of life — and may require 
              specialist evaluation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { type: 'Acute Tonsillitis', desc: 'Sudden onset with severe sore throat, fever, and difficulty swallowing. Usually resolves in 7–10 days with treatment.', color: 'bg-amber-50 border-amber-200 text-amber-800' },
                { type: 'Recurrent Tonsillitis', desc: 'Frequent repeated infections throughout the year. Specialist evaluation recommended to discuss long-term management options.', color: 'bg-red-50 border-red-200 text-red-800' },
              ].map((t) => (
                <div key={t.type} className={`rounded-xl border p-5 ${t.color}`}>
                  <p className="font-bold mb-2">{t.type}</p>
                  <p className="text-sm leading-relaxed">{t.desc}</p>
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
              Symptoms of Tonsillitis
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🤒', title: 'Sore Throat', desc: 'Severe throat pain, often the first and most prominent symptom of tonsillitis.' },
                { icon: '🌡️', title: 'Fever', desc: 'High temperature, chills, and feeling generally unwell accompany the infection.' },
                { icon: '😮', title: 'Difficulty Swallowing', desc: 'Swallowing food, water, or even saliva can be painful with swollen tonsils.' },
                { icon: '🔴', title: 'Red, Swollen Tonsils', desc: 'Tonsils appear red and enlarged, often with white or yellow patches on the surface.' },
                { icon: '😷', title: 'Bad Breath', desc: 'Unpleasant breath caused by bacterial infection and mucus in the throat.' },
                { icon: '🎙️', title: 'Muffled or Changed Voice', desc: 'Voice may sound hoarse, strained, or muffled due to swollen throat tissue.' },
                { icon: '😣', title: 'Ear Pain', desc: 'Pain referred to the ears from the throat — common in tonsillitis due to shared nerve pathways.' },
                { icon: '😴', title: 'Snoring or Breathing Difficulty', desc: 'Enlarged tonsils can block the airway during sleep, causing snoring or disturbed sleep in children.' },
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

        {/* Throat conditions we treat */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Full Throat Care</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Other Throat Conditions We Treat
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Beyond tonsillitis, Dr. Marissa provides comprehensive evaluation and 
              management for all throat-related conditions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Pharyngitis', desc: 'Inflammation of the pharynx (back of the throat) causing pain, scratchiness, and difficulty swallowing.' },
                { title: 'Laryngitis', desc: 'Inflammation of the voice box (larynx) causing hoarseness, loss of voice, or a dry, scratchy throat.' },
                { title: 'Hoarseness of Voice', desc: 'Persistent voice changes evaluated for vocal cord problems, acid reflux, or other causes.' },
                { title: 'Post-Nasal Drip', desc: 'Mucus draining down the back of the throat causing chronic cough, throat clearing, or sore throat.' },
                { title: 'Throat Foreign Body', desc: 'Sensation of something stuck in the throat — thorough examination to rule out structural or functional causes.' },
                { title: 'Adenoid Problems', desc: 'Enlarged adenoids in children causing breathing difficulties, snoring, and recurrent ear infections.' },
              ].map((c) => (
                <div key={c.title} className="p-5 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-2">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">How We Help</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Treatment Approach
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Treatment is tailored to the cause, severity, and frequency of your 
              throat condition. Dr. Marissa takes a thorough, evidence-based approach 
              before recommending any intervention.
            </p>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Throat and Neck Examination', desc: 'Complete examination of the tonsils, pharynx, larynx, and neck lymph nodes. Flexible laryngoscopy may be performed to visualise the voice box directly.' },
                { step: '02', title: 'Accurate Diagnosis', desc: 'Differentiating between viral and bacterial tonsillitis, as treatment differs significantly. Throat swab culture may be recommended when appropriate.' },
                { step: '03', title: 'Medical Treatment', desc: 'Appropriate antibiotics for bacterial infections, analgesics for pain relief, anti-inflammatory medications, and supportive care guidance.' },
                { step: '04', title: 'Recurrence Assessment', desc: 'For patients with frequent tonsillitis, a detailed review of episode frequency, severity, and impact on quality of life to guide long-term management decisions.' },
                { step: '05', title: 'Surgical Referral When Indicated', desc: 'When tonsillectomy is the right option — such as in recurrent tonsillitis or obstructive enlarged tonsils — appropriate surgical referral with full counselling.' },
              ].map((t) => (
                <div key={t.step} className="flex gap-5 p-5 bg-slate-50 rounded-xl border border-slate-200">
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

        {/* Children note */}
        <section className="bg-teal-50 border-y border-teal-100 py-10 px-4">
          <div className="max-w-3xl mx-auto flex gap-5 items-start">
            <span className="text-4xl">👶</span>
            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                Paediatric Tonsillitis
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Tonsillitis is one of the most common reasons children miss school in Kerala. 
                Repeated infections can affect growth, sleep quality, and academic performance. 
                Dr. Marissa provides child-friendly ENT care in a calm, reassuring environment — 
                helping both children and parents understand the condition and the best path forward.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Tonsillitis FAQ
            </h2>
            <div className="space-y-5">
              {[
                { q: 'Is tonsillitis contagious?', a: 'Yes. Bacterial and viral tonsillitis spread through droplets from coughing, sneezing, or sharing utensils. Good hand hygiene and avoiding close contact during illness helps prevent spread.' },
                { q: 'Does my child need a tonsillectomy?', a: 'Not necessarily. Tonsillectomy is usually considered when a child has 7 or more episodes in one year, 5 per year for two years, or 3 per year for three years — especially if episodes are severe and affect quality of life. Dr. Marissa will help you make this decision with full information.' },
                { q: 'Can adults get tonsillitis?', a: 'Yes, adults can get tonsillitis, though it is more common in children. Adults with recurrent tonsillitis deserve the same thorough evaluation as children.' },
                { q: 'What is the difference between tonsillitis and strep throat?', a: 'Strep throat is a bacterial tonsillitis caused specifically by Group A Streptococcus. It requires antibiotic treatment to prevent complications. Not all tonsillitis is strep — many cases are viral and do not need antibiotics.' },
                { q: 'Can enlarged tonsils cause snoring in children?', a: 'Yes. Enlarged tonsils and adenoids are the most common cause of snoring and obstructive sleep apnoea in children. Untreated, this can affect behaviour, concentration, and growth. An ENT evaluation is important if your child snores regularly.' },
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
              Sore Throat Getting You Down?
            </h2>
            <p className="text-teal-100 mb-8">
              Book a throat consultation at Dr. Marissa&apos;s ENT Clinic in Pongumoodu, 
              Thiruvananthapuram. Serving families from Kowdiar, Pattom, Sasthamangalam, 
              Kesavadasapuram, and surrounding areas.
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
                <li><Link href="/services/sinusitis" className="hover:text-white transition-colors">Sinusitis Treatment</Link></li>
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
