import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  CalendarCheck,
  ArrowLeft
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { TrackedBookingLink, TrackedWhatsAppLink } from '@/components/TrackedCTA';
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogPostSlugs } from '@/data/blog-posts';
import { CLINIC, SITE_URL } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: pageUrl,
      siteName: CLINIC.name,
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.date,
      authors: [CLINIC.doctor],
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

/**
 * Lightweight Markdown renderer for article bodies.
 * Supports headings (##, ###, ####), lists (- or *), blockquotes (>), bold, links, and horizontal rules.
 */
function renderMarkdown(content: string) {
  const sections = content.split('\n\n');

  return sections.map((sec, i) => {
    const trimmed = sec.trim();
    if (!trimmed) return null;

    // Horizontal rule
    if (trimmed === '---') {
      return <hr key={i} className="my-8 border-slate-200" />;
    }

    // Headings
    if (trimmed.startsWith('#### ')) {
      return (
        <h4 key={i} className="text-lg font-heading font-bold text-slate-900 mt-6 mb-2">
          {trimmed.slice(5)}
        </h4>
      );
    }
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={i} className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    }

    // Unordered List
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split('\n').map((line) => line.replace(/^[-*]\s+/, '').trim());
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-slate-700 my-4 text-base leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    // Numbered List
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n').map((line) => line.replace(/^\d+\.\s+/, '').trim());
      return (
        <ol key={i} className="list-decimal pl-6 space-y-2.5 text-slate-700 my-4 text-base leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      const quoteText = trimmed.replace(/^>\s?/gm, '');
      return (
        <blockquote
          key={i}
          className="border-l-4 border-teal-600 bg-teal-50/50 p-4 rounded-r-xl my-6 text-slate-700 italic text-base leading-relaxed"
        >
          {renderInline(quoteText)}
        </blockquote>
      );
    }

    // Standard Paragraph
    return (
      <p key={i} className="text-slate-700 text-base sm:text-lg leading-relaxed my-4">
        {renderInline(trimmed)}
      </p>
    );
  });
}

/**
 * Inline parser for bold (**text**), italics (*text*), and markdown links ([text](url))
 */
function renderInline(text: string): React.ReactNode {
  // Regex pattern for [link](url) or **bold** or *italic*
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      // Link
      const href = match[2];
      const linkText = match[1];
      const isInternal = href.startsWith('/') || href.startsWith('#');

      if (isInternal) {
        nodes.push(
          <Link
            key={`l-${key++}`}
            href={href}
            className="text-teal-700 font-medium underline underline-offset-2 hover:text-teal-800 transition-colors"
          >
            {linkText}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`l-${key++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 font-medium underline underline-offset-2 hover:text-teal-800 transition-colors"
          >
            {linkText}
          </a>
        );
      }
    } else if (match[3]) {
      // Bold
      nodes.push(<strong key={`b-${key++}`} className="font-semibold text-slate-900">{match[3]}</strong>);
    } else if (match[4]) {
      // Italic
      nodes.push(<em key={`i-${key++}`} className="italic">{match[4]}</em>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : text;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  // Article / MedicalWebPage Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE_URL}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'IndividualPhysician',
      name: CLINIC.doctor,
      url: `${SITE_URL}/about`,
      jobTitle: CLINIC.doctorTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: CLINIC.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs with BreadcrumbList Schema */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Health Tips', href: '/blog' },
            { label: post.title },
          ]}
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back to all articles
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author & Meta Line */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
              M
            </div>
            <div>
              <span className="font-semibold text-slate-800 block">
                {CLINIC.doctor}
              </span>
              <span className="text-xs text-slate-500">{CLINIC.qualifications}</span>
            </div>
          </div>

          <span className="flex items-center gap-1">
            <Calendar size={14} className="text-slate-400" />
            <time dateTime={post.date}>November 2026</time>
          </span>

          <span className="flex items-center gap-1">
            <Clock size={14} className="text-slate-400" />
            <span>{post.readingTime}</span>
          </span>
        </div>

        {/* E-E-A-T Medical Review Badge */}
        <div className="bg-teal-50/80 border border-teal-200/80 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3">
          <ShieldCheck size={20} className="text-teal-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-teal-900 leading-relaxed">
            <strong>Medically Reviewed:</strong> This article is authored and reviewed by <strong>Dr. Marissa Mathew</strong>, MBBS, DLO (NBEMS), ENT Specialist in Thiruvananthapuram. It adheres to conservative otorhinolaryngology clinical practice guidelines.
          </div>
        </div>

        {/* Main Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-12">
          {renderMarkdown(post.content)}
        </div>

        {/* Soft Consultation CTA */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white rounded-3xl p-8 sm:p-10 shadow-md text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-2">
              Have Questions or Need an ENT Evaluation?
            </h3>
            <p className="text-teal-100 text-sm sm:text-base max-w-lg leading-relaxed">
              Dr. Marissa Mathew offers unhurried outpatient consultations at our clinic in Pongumoodu, Thiruvananthapuram.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <TrackedBookingLink
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              trackingLocation={`blog_article_${post.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-all text-sm shadow-sm"
            >
              <CalendarCheck size={16} />
              <span>Book Appointment</span>
            </TrackedBookingLink>
            <TrackedWhatsAppLink
              href={CLINIC.whatsapp.chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              trackingLocation={`blog_article_${post.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-all text-sm shadow-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </TrackedWhatsAppLink>
          </div>
        </div>
      </article>
    </div>
  );
}
