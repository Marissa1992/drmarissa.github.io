export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "MedicalBusiness"],
        "@id": "https://drmarissa.netlify.app/#clinic",
        "name": "Dr. Marissa's ENT Clinic",
        "alternateName": "Dr. Marissa ENT",
        "description": "Expert ENT care with a personal touch. Comprehensive ear, nose, throat, vertigo, and sinus care in Thiruvananthapuram, Kerala.",
        "url": "https://drmarissa.netlify.app",
        "telephone": "+919447711755",
        "priceRange": "₹₹",
        "image": "https://drmarissa.netlify.app/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "RG-85 Sreenagar Lane, Pazhaya Rd",
          "addressLocality": "Pongumoodu",
          "addressRegion": "Kerala",
          "postalCode": "695011",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 8.538797,
          "longitude": 76.926977
        },
        "hasMap": "https://maps.app.goo.gl/Ats37LvFxDFWRL3q7",
        "sameAs": [
          "https://maps.app.goo.gl/WXWw2kbxLamryyxd9",
          "https://wa.me/919447711755"
        ],
        "medicalSpecialty": "http://schema.org/Otolaryngology",
        "availableService": [
          { "@type": "MedicalTherapy", "name": "Ear Wax Removal (Microsuction)" },
          { "@type": "MedicalTherapy", "name": "Vertigo Management" },
          { "@type": "MedicalTherapy", "name": "Sinusitis Treatment" },
          { "@type": "MedicalTherapy", "name": "Nasal Obstruction & Allergy Care" },
          { "@type": "MedicalTherapy", "name": "Throat Infection & Tonsillitis Treatment" },
          { "@type": "MedicalTherapy", "name": "Snoring Treatment" },
          { "@type": "MedicalTherapy", "name": "Paediatric ENT Care" }
        ],
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 8.538797,
            "longitude": 76.926977
          },
          "geoRadius": "7000"
        }
      },
      {
        "@type": "IndividualPhysician",
        "@id": "https://drmarissa.netlify.app/#doctor",
        "name": "Dr. Marissa Mathew",
        "description": "ENT Specialist at Dr. Marissa's ENT Clinic, Thiruvananthapuram",
        "practicesAt": {
          "@id": "https://drmarissa.netlify.app/#clinic"
        },
        "url": "https://drmarissa.netlify.app/#about"
      },
      {
        "@type": "WebSite",
        "@id": "https://drmarissa.netlify.app/#website",
        "url": "https://drmarissa.netlify.app",
        "name": "Dr. Marissa's ENT Clinic",
        "description": "Expert ENT care in Thiruvananthapuram, Kerala",
        "publisher": {
          "@id": "https://drmarissa.netlify.app/#clinic"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}  );
}
