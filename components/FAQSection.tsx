'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  includeSchema?: boolean;
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  description = 'Find clear answers to common questions about our ENT clinic and treatments.',
  includeSchema = true,
}: FAQSectionProps) {
  // Track open state for accordions (default first one open)
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-100">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3">
            {title}
          </h2>
          {description && (
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-semibold text-slate-900 text-base sm:text-lg hover:text-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : ''
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-50 pt-3"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

