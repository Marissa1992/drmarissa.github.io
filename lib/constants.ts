/**
 * Centralized Clinic Constants for Dr. Marissa's ENT Clinic
 * All clinic details, URLs, contact information, and SEO parameters are defined here.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://drmarissa.netlify.app';

export const CLINIC = {
  name: "Dr. Marissa's ENT Clinic",
  legalName: "Dr. Marissa's ENT Clinic",
  doctor: 'Dr. Marissa Mathew',
  doctorTitle: 'ENT Specialist',
  doctorFullTitle: 'ENT Specialist (Otorhinolaryngologist)',
  qualifications: 'MBBS, DLO (NBEMS)',
  experience: '5+ years',
  languages: ['English', 'Malayalam'],
  medicalSpecialty: 'Otolaryngologic',

  phone: {
    raw: '+917012117198',
    display: '+91 70121 17198',
    telLink: 'tel:+917012117198',
  },

  whatsapp: {
    raw: '+919447711755',
    display: '+91 94477 11755',
    defaultGreeting: 'Hello Doctor, I would like to book an appointment.',
    chatUrl: 'https://wa.me/919447711755?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  },

  bookingUrl: 'https://calendar.app.google/VuEjqb3kxG4P2peT6',

  address: {
    formatted: 'RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram, Keralam 695011',
    streetAddress: 'RG-85 Sreenagar Lane, Pazhaya Rd',
    addressLocality: 'Pongumoodu',
    city: 'Thiruvananthapuram',
    addressRegion: 'Keralam',
    postalCode: '695011',
    addressCountry: 'IN',
  },

  geo: {
    latitude: 8.538797,
    longitude: 76.926977,
  },

  maps: {
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=8.538797,76.926977',
    placeUrl: 'https://maps.app.goo.gl/Ats37LvFxDFWRL3q7',
    reviewsUrl: 'https://maps.app.goo.gl/WXWw2kbxLamryyxd9',
    iframeEmbedUrl: "https://maps.google.com/maps?q=Dr.%20Marissa's%20ENT%20Clinic,%20Pongumoodu,%20Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  transit: {
    closestBusStop: 'Pongumoodu Bus Stop',
    busStopWalkTime: '3–5 minutes walk',
    railwayStation: 'Thiruvananthapuram Central Railway Station (Thampanoor)',
    railwayDistance: 'Approx. 8.5 km',
    medicalCollegeDistance: 'Approx. 2.5 km',
    kochuveliDistance: 'Approx. 5.5 km',
  },

  localAreasServed: [
    'Pongumoodu',
    'Ulloor',
    'Kesavadasapuram',
    'Medical College',
    'Pattom',
    'Kowdiar',
    'Sasthamangalam',
    'Sreekaryam',
    'Mannanthala',
    'Vellayambalam',
  ],

  hours: {
    fallbackText: 'Consultation hours may vary, please confirm on WhatsApp/Website before visiting.',
  },

  analytics: {
    gtmId: 'GTM-N55MJM7G',
    ga4Id: 'G-7EV3K9D7ZQ',
    googleVerification: 'mVD2KuLwsG303NtEhAMeNK1HNrQR1ke8QOx0ZkHGecY',
    googlePlaceId: 'ChIJF4CXSgC5BTsRHEvEfv0fR1c',
  },

  emergency: {
    ambulance: '108',
    description: 'Call 108 immediately for Kerala Emergency Ambulance Services or visit the nearest hospital casualty.',
  },
} as const;

/**
 * Generate condition-specific WhatsApp link with custom prefilled text
 */
export function getConditionWhatsAppUrl(conditionName: string): string {
  const text = encodeURIComponent(`Hello Doctor, I would like to book an appointment for ${conditionName}.`);
  return `https://wa.me/919447711755?text=${text}`;
}
