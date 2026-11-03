import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, Stethoscope } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS } from '@/data/blog-posts';
import { CLINIC, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: "ENT Health Tips & Patient Guides | Dr. Marissa's Clinic",
  description:
    'Practical ear, nose, and throat health advice for Kerala families by Dr. Marissa Mathew in Thiruvananthapuram. Sinusitis, ear care, and vertigo guides.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "ENT Health Tips & Patient Guides | Dr. Marissa's Clinic",
    description:
      'Practical ear, nose, and throat health advice for Kerala families by Dr. Marissa Mathew in Thiruvananthapuram. Sinusitis, ear care, and vertigo guides.',
    url: `${SITE_URL}/blog`,
    siteName: CLINIC.name,
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BlogHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs items={[{ label: 'Health Tips', href: '/blog' }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-800 to-teal-700 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-teal-200 font-semibold mb-3 px-3 py-1 bg-teal-900/40 rounded-full border border-teal-600/30">
            Patient Education • Dr. Marissa Mathew
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            ENT Health Tips &amp; Patient Guides
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Evidence-based, conservative health guides tailored for families in Thiruvananthapuram and coastal Kerala. Learn how to care for your ears, nose, and throat safely.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-slate-400" />
                    <time dateTime={post.date}>Nov 2026</time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-slate-400" />
                    <span>{post.readingTime}</span>
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group-hover:underline"
                >
                  Read <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Doctor Review Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <Stethoscope size={32} />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">
              Medically Reviewed &amp; Conservative Advice
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every guide on this website is written and reviewed by Dr. Marissa Mathew, MBBS, DLO (NBEMS), based on recognized clinical consensus guidelines. We believe informed patients make the best health decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
