import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always starts with Home
  const fullItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  // Generate BreadcrumbList Schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href
        ? item.href.startsWith('http')
          ? item.href
          : `${SITE_URL}${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight size={13} className="text-slate-400 shrink-0" />}

                {index === 0 ? (
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-teal-700 transition-colors"
                  >
                    <Home size={13} />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast || !item.href ? (
                  <span
                    className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-teal-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
