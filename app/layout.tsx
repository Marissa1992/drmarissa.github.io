import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import StructuredData from '@/components/StructuredData';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: "Dr. Marissa's ENT Clinic",
  description: 'Expert ENT Care with a Personal Touch in Thiruvananthapuram, Kerala.',
  verification: {
    google: "mVD2KuLwsG303NtEhAMeNK1HNrQR1ke8QOx0ZkHGecY",
  },
  openGraph: {
    title: "Dr. Marissa's ENT Clinic — Thiruvananthapuram",
    description: 'Expert ear, nose, throat, vertigo and sinus care in Thiruvananthapuram, Kerala. Book your appointment today.',
    url: 'https://drmarissa.netlify.app',
    siteName: "Dr. Marissa's ENT Clinic",
    images: [
      {
        url: 'https://drmarissa.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Dr. Marissa's ENT Clinic Thiruvananthapuram",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N55MJM7G');`}
        </Script>
        {/* End Google Tag Manager */}
        <StructuredData />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N55MJM7G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
