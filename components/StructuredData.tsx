import { CLINIC, SITE_URL } from '@/lib/constants';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalClinic', 'MedicalBusiness'],
        '@id': `${SITE_URL}/#clinic`,
        name: CLINIC.name,
        alternateName: 'Dr. Marissa ENT',
        description:
          'Expert ENT care with a personal touch. Comprehensive ear, nose, throat, vertigo, and sinus care in Thiruvananthapuram, Kerala.',
        url: SITE_URL,
        telephone: CLINIC.phone.raw,
        priceRange: '₹₹',
        image: `${SITE_URL}/og-image.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CLINIC.address.streetAddress,
          addressLocality: CLINIC.address.addressLocality,
          addressRegion: CLINIC.address.addressRegion,
          postalCode: CLINIC.address.postalCode,
          addressCountry: CLINIC.address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: CLINIC.geo.latitude,
          longitude: CLINIC.geo.longitude,
        },
        hasMap: CLINIC.maps.placeUrl,
        sameAs: [
          CLINIC.maps.placeUrl,
          CLINIC.maps.reviewsUrl,
          CLINIC.whatsapp.chatUrl,
        ],
        medicalSpecialty: 'http://schema.org/Otolaryngologic',
        availableService: [
          { '@type': 'MedicalTherapy', name: 'Ear Wax Removal (Microsuction)' },
          { '@type': 'MedicalTherapy', name: 'Vertigo Management' },
          { '@type': 'MedicalTherapy', name: 'Sinusitis Treatment' },
          { '@type': 'MedicalTherapy', name: 'Nasal Obstruction & Allergy Care' },
          { '@type': 'MedicalTherapy', name: 'Throat Infection & Tonsillitis Treatment' },
          { '@type': 'MedicalTherapy', name: 'Hearing Loss Evaluation' },
          { '@type': 'MedicalTherapy', name: 'Ear Infection (Otitis Media) Treatment' },
          { '@type': 'MedicalTherapy', name: 'Allergic Rhinitis Treatment' },
          { '@type': 'MedicalTherapy', name: 'Nasal Polyps Evaluation' },
          { '@type': 'MedicalTherapy', name: 'Tinnitus Management' },
          { '@type': 'MedicalTherapy', name: 'Paediatric ENT Care' },
        ],
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI',
        areaServed: CLINIC.localAreasServed.map((area) => ({
          '@type': 'AdministrativeArea',
          name: `${area}, Thiruvananthapuram`,
        })),
      },
      {
        '@type': 'IndividualPhysician',
        '@id': `${SITE_URL}/#doctor`,
        name: CLINIC.doctor,
        jobTitle: CLINIC.doctorTitle,
        description: `${CLINIC.doctorFullTitle} at ${CLINIC.name}, Thiruvananthapuram`,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'National Board of Examinations in Medical Sciences (NBEMS)',
        },
        knowsLanguage: ['en', 'ml'],
        medicalSpecialty: 'http://schema.org/Otolaryngologic',
        worksFor: {
          '@id': `${SITE_URL}/#clinic`,
        },
        practicesAt: {
          '@id': `${SITE_URL}/#clinic`,
        },
        url: `${SITE_URL}/about`,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: CLINIC.name,
        description: 'Expert ENT care in Thiruvananthapuram, Kerala',
        publisher: {
          '@id': `${SITE_URL}/#clinic`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        url: `${SITE_URL}/#faq`,
        name: `ENT Clinic FAQ - ${CLINIC.name}`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What should I bring to my first appointment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Please bring any previous medical records, hearing tests, imaging (X-rays or CT scans), and a list of your current medications.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you treat children?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we provide comprehensive paediatric ENT care, addressing common childhood issues like recurrent ear infections, tonsillitis, adenoid hypertrophy, and breathing difficulties.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is ear wax removal performed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We primarily use microsuction, a safe, gentle, and effective way to remove ear wax without using water syringes, eliminating the risk of infection.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the common signs of vertigo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Symptoms include a spinning sensation, loss of balance, dizziness provoked by head movement, nausea, and ringing in the ears.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you treat ENT emergencies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Emergencies such as airway-obstructing foreign bodies, severe nasal bleeding, or accident-related ENT trauma are not treated here. Please call 108 or visit the nearest hospital casualty department immediately for critical care.',
            },
          },
          {
            '@type': 'Question',
            name: "How do I book an appointment at Dr. Marissa's ENT Clinic?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can book an appointment online via our Google Calendar link or message us directly on WhatsApp at ${CLINIC.whatsapp.display}.`,
            },
          },
          {
            '@type': 'Question',
            name: "Where is Dr. Marissa's ENT Clinic located?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We are located at ${CLINIC.address.formatted}. Get directions on Google Maps.`,
            },
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: CLINIC.name,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
