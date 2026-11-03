import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import StructuredData from '@/components/StructuredData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { CLINIC, SITE_URL } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Marissa's ENT Clinic | Thiruvananthapuram",
    template: '%s | Dr. Marissa Mathew',
  },
  description: 'Expert ENT Care with a Personal Touch in Thiruvananthapuram, Kerala.',
  verification: {
    google: CLINIC.analytics.googleVerification,
  },
  openGraph: {
    title: "Dr. Marissa's ENT Clinic — Thiruvananthapuram",
    description:
      'Expert ear, nose, throat, vertigo and sinus care in Thiruvananthapuram, Kerala. Book your appointment today.',
    url: SITE_URL,
    siteName: CLINIC.name,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dr. Marissa's ENT Clinic Thiruvananthapuram",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Marissa's ENT Clinic — Thiruvananthapuram",
    description: 'Expert ear, nose, throat, vertigo and sinus care in Thiruvananthapuram, Kerala.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager - loaded afterInteractive as required */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${CLINIC.analytics.gtmId}');`}
        </Script>
        {/* End Google Tag Manager */}
        <StructuredData />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${CLINIC.analytics.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content with bottom padding on mobile for the sticky bar */}
        <main id="main-content" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Mobile Contact Bar */}
        <StickyMobileBar />
      </body>
    </html>
  );
}
