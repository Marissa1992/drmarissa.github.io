import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ear Wax Removal (Microsuction) in Thiruvananthapuram | Dr. Marissa ENT Clinic',
  description:
    'Safe, painless microsuction ear wax removal in Thiruvananthapuram. No water, no syringing. Performed by ENT specialist Dr. Marissa Mathew at Pongumoodu clinic.',
  openGraph: {
    title: 'Ear Wax Removal (Microsuction) in Thiruvananthapuram | Dr. Marissa ENT',
    description:
      'Blocked ears? Muffled hearing? Get safe microsuction ear cleaning at Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram.',
    url: 'https://drmarissa.netlify.app/services/ear-wax-removal',
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
  name: 'Ear Wax Removal (Microsuction) — Dr. Marissa\'s ENT Clinic',
  url: 'https://drmarissa.netlify.app/services/ear-wax-removal',
  description:
    'Safe microsuction ear wax removal by ENT specialist Dr. Marissa Mathew at Pongumoodu, Thiruvananthapuram, Kerala.',
  medicalAudience: 'Patient',
  about: {
    '@type': 'MedicalCondition',
    name: 'Ear Wax Blockage',
    alternateName: ['Cerumen Impaction', 'Ear Block', 'Ear Wax Build-up'],
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Ear Canal' },
  },
  mainContentOfPage: {
    '@type': 'MedicalTherapy',
    name: 'Microsuction Ear Wax Removal',
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
        { '@type': 'ListItem', position: 3, name: 'Ear Wax Removal', item: 'https://drmarissa.netlify.app/services/ear-wax-removal' },
      ],
    },
  ],
};

export default function EarWaxRemovalPage() {
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
              Ear Wax Removal
            </h1>
            <p className="text-teal-100 text-lg max-w-xl mx-auto">
              Safe, painless microsuction — the gold standard for ear wax removal. 
              No water, no syringing. Clear blocked ears in just one or two visits. To guarantee a pain-free experience, hardened wax may require softening prior to removal.
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

        {/* What is Microsuction */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">The Procedure</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              What is Microsuction?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Microsuction is the safest and most effective method for removing ear wax. 
              Using a fine suction device, the doctor gently
              removes wax directly from the ear canal — without any water or syringing.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unlike traditional ear syringing, microsuction carries no risk of 
              introducing water into the ear, making it safe for people with perforated 
              eardrums, ear infections, or grommets.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-6">
              <p className="text-teal-800 font-semibold mb-1">⏱ How long does it take?</p>
              <p className="text-teal-700 text-sm">The procedure typically takes 15–30 minutes. Most patients notice immediate improvement in hearing and comfort after the procedure.</p>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Do You Need It?</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Signs of Ear Wax Blockage
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🔇', title: 'Muffled Hearing', desc: 'Sounds seem distant or dull, as though you are hearing through cotton wool.' },
                { icon: '👂', title: 'Feeling of Fullness', desc: 'A blocked or plugged sensation in one or both ears.' },
                { icon: '🎵', title: 'Tinnitus', desc: 'Ringing, buzzing, or humming sounds in the ear not caused by external sound.' },
                { icon: '😣', title: 'Ear Discomfort', desc: 'Mild aching, itching, or irritation deep inside the ear canal.' },
                { icon: '😵', title: 'Dizziness', desc: 'Mild imbalance or dizziness caused by pressure on the ear canal.' },
                { icon: '🤧', title: 'Ear Discharge', desc: 'Wax leaking out, sometimes with an unpleasant smell.' },
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

        {/* Microsuction vs Syringing */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Why Microsuction</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Microsuction vs. Ear Syringing
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Microsuction ✅</th>
                    <th className="text-center p-4 font-semibold">Syringing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Uses water', 'No', 'Yes'],
                    ['Risk of infection', 'Very low', 'Higher'],
                    ['Safe with perforated eardrum', 'Yes', 'No'],
                    ['Immediate results', 'Yes', 'Usually'],
                    ['Performed under magnification', 'Yes', 'No'],
                    ['Safe for children', 'Yes', 'With caution'],
                  ].map(([feature, micro, syring]) => (
                    <tr key={feature} className="bg-white hover:bg-slate-50">
                      <td className="p-4 text-slate-700 font-medium">{feature}</td>
                      <td className="p-4 text-center text-teal-700 font-semibold">{micro}</td>
                      <td className="p-4 text-center text-slate-500">{syring}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Ear Wax Removal FAQ
            </h2>
            <div className="space-y-5">
              {[
                { q: 'Is microsuction painful?', a: 'Microsuction is generally painless. Some patients feel mild discomfort or hear a loud suction noise, but the procedure is well-tolerated by most people including children.' },
                { q: 'Should I use ear drops before the appointment?', a: 'Using olive oil or sodium bicarbonate ear drops for 3–5 days before your appointment can soften hard wax and make removal easier. Ask us when booking.' },
                { q: 'Can I get microsuction if I have a perforated eardrum?', a: 'Yes. Microsuction is actually the preferred method for people with a perforated eardrum or grommets, as it does not involve water.' },
                { q: 'How often should ears be cleaned?', a: 'Ears are self-cleaning for most people. Only those who produce excessive wax or use hearing aids regularly need professional cleaning. Avoid cotton buds — they push wax deeper.' },
                { q: 'Can children have microsuction?', a: 'Yes, Dr. Marissa provides paediatric ENT care including ear wax removal for children, using a gentle approach suited to younger patients.' },
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
              Blocked Ears? Get Relief Today.
            </h2>
            <p className="text-teal-100 mb-8">
              Book a microsuction appointment at Dr. Marissa&apos;s ENT Clinic in Pongumoodu, 
              Thiruvananthapuram. Quick, safe, and effective.
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
                <li><Link href="/services/sinusitis" className="hover:text-white transition-colors">Sinusitis Treatment</Link></li>
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
