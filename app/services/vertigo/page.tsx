import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vertigo Treatment in Thiruvananthapuram | Dr. Marissa ENT Clinic',
  description:
    'Expert vertigo diagnosis and treatment in Thiruvananthapuram. Specialised vestibular rehabilitation, Epley manoeuvre, and personalised care at Dr. Marissa\'s ENT Clinic, Pongumoodu.',
  openGraph: {
    title: 'Vertigo Treatment in Thiruvananthapuram | Dr. Marissa ENT Clinic',
    description:
      'Spinning sensation, balance problems, or dizziness? Get expert vertigo care at Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram.',
    url: 'https://drmarissa.netlify.app/services/vertigo',
    siteName: "Dr. Marissa's ENT Clinic",
    locale: 'en_IN',
    tpype: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
  '@type': 'MedicalWebPage',
  name: 'Vertigo Treatment — Dr. Marissa\'s ENT Clinic',
  url: 'https://drmarissa.netlify.app/services/vertigo',
  description:
    'Specialised vertigo diagnosis and vestibular rehabilitation at Dr. Marissa\'s ENT Clinic in Thiruvananthapuram, Kerala.',
  medicalAudience: 'Patient',
  about: {
    '@type': 'MedicalCondition',
    name: 'Vertigo',
    alternateName: ['BPPV', 'Benign Paroxysmal Positional Vertigo', 'Vestibular Disorder'],
    associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Inner Ear' },
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
        { '@type': 'ListItem', position: 3, name: 'Vertigo Treatment', item: 'https://drmarissa.netlify.app/services/vertigo' },
      ],
    },
  ],
};

export default function VertigoPage() {
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
              Vertigo Treatment
            </h1>
            <p className="text-teal-100 text-lg max-w-xl mx-auto">
              Is the world spinning around you? You don&apos;t have to live with dizziness. 
              Get accurate diagnosis and effective relief at our clinic in Pongumoodu.
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

        {/* What is Vertigo */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Understanding Vertigo</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              What is Vertigo?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Vertigo is a sensation of spinning or movement when you are completely still. 
              Unlike general dizziness, vertigo gives a false sense that you or your surroundings 
              are rotating. It is most commonly caused by a problem in the inner ear.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The most common cause is <strong>Benign Paroxysmal Positional Vertigo (BPPV)</strong> — 
              a condition where tiny calcium crystals in the inner ear become dislodged, sending 
              incorrect signals to the brain. Other causes include Meniere&apos;s disease, 
              vestibular neuritis, and labyrinthitis.
            </p>
          </div>
        </section>

        {/* Symptoms */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Recognise the Signs</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Symptoms to Watch For
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🌀', title: 'Spinning Sensation', desc: 'A false feeling that you or the room is rotating, tilting, or swaying.' },
                { icon: '⚖️', title: 'Loss of Balance', desc: 'Difficulty walking steadily or feeling unsteady on your feet.' },
                { icon: '🤢', title: 'Nausea', desc: 'Feeling sick to your stomach, often triggered by head movement.' },
                { icon: '👁️', title: 'Abnormal Eye Movement', desc: 'Rapid, uncontrolled eye movements (nystagmus) during episodes.' },
                { icon: '👂', title: 'Ringing in the Ears', desc: 'Tinnitus or a persistent ringing or buzzing sound in one or both ears.' },
                { icon: '🔇', title: 'Hearing Changes', desc: 'Muffled hearing or sudden changes in hearing during episodes.' },
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
              Treatment at Our Clinic
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Effective vertigo treatment begins with an accurate diagnosis. Dr. Marissa 
              conducts a thorough evaluation to identify the exact cause before recommending treatment.
            </p>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Detailed Assessment', desc: 'A thorough history and physical examination including Dix-Hallpike and other vestibular tests to pinpoint the exact type and cause of your vertigo.' },
                { step: '02', title: 'Epley\'s Maneuver', desc: 'A highly effective, in-clinic repositioning procedure for BPPV that moves dislodged crystals back into position — often providing immediate relief.' },
                { step: '03', title: 'Vestibular Rehabilitation', desc: 'A tailored exercise programme to retrain your brain and inner ear to compensate for imbalance, improving stability and reducing dizziness.' },
                { step: '04', title: 'Medication Management', desc: 'Appropriate medications to control acute symptoms such as nausea, dizziness, and inflammation when required.' },
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

        {/* FAQ */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-teal-700 text-sm font-semibold uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
              Vertigo FAQ
            </h2>
            <div className="space-y-5">
              {[
                { q: 'Can vertigo be permanently cured?', a: 'BPPV, the most common type, can often be resolved in one or two clinic visits with the Epley\'s Maneuver. Other types may require ongoing management, but most patients achieve significant improvement with proper treatment.' },
                { q: 'Is vertigo dangerous?', a: 'Vertigo itself is rarely dangerous, but it increases the risk of falls and accidents. Sudden-onset vertigo with severe headache, double vision, or weakness may indicate a more serious condition — seek emergency care in such cases.' },
                { q: 'How long does a vertigo episode last?', a: 'BPPV episodes typically last seconds to minutes. Meniere\'s disease episodes can last 20 minutes to several hours. If you have prolonged or frequent episodes, an ENT evaluation is essential.' },
                { q: 'Do I need any tests for vertigo?', a: 'Most vertigo can be diagnosed through a physical examination. In some cases, hearing tests or imaging may be recommended. Dr. Marissa will advise what is needed based on your specific symptoms.' },
                { q: 'Can I drive if I have vertigo?', a: 'You should not drive during active vertigo episodes. Once symptoms are well-controlled and you are cleared by your doctor, driving is generally safe.' },
              ].map((f) => (
                <div key={f.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">{f.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Vertigo sometimes occurs alongside <Link href="/services/ear-wax-removal" className="text-teal-700 underline">ear blockage or wax build-up</Link> — if you also notice muffled hearing, that may be worth checking too.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-teal-700 text-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Ready to Stop the Spinning?
            </h2>
            <p className="text-teal-100 mb-8">
              Book a consultation with Dr. Marissa at our clinic in Pongumoodu, Thiruvananthapuram. 
              Most vertigo cases are treatable — get your balance back.
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
                <li><Link href="/services/ear-wax-removal" className="hover:text-white transition-colors">Ear Wax Removal</Link></li>
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
