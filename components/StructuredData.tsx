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
        "medicalSpecialty": "http://schema.org/Otolaryngologic",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://drmarissa.netlify.app/#faq",
        "url": "https://drmarissa.netlify.app/#faq",
        "name": "ENT Clinic FAQ - Dr. Marissa's ENT Clinic",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What should I bring to my first appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Please bring any previous medical records, hearing tests, imaging (X-rays or CT scans), and a list of your current medications."
            }
          },
          {
            "@type": "Question",
            "name": "Do you treat children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive paediatric ENT care, addressing common childhood issues like recurrent ear infections, tonsillitis, and breathing difficulties."
            }
          },
          {
            "@type": "Question",
            "name": "How is ear wax removal performed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily use microsuction, a very safe, gentle, and effective way to remove ear wax without using water syringes, reducing the risk of infection."
            }
          },
          {
            "@type": "Question",
            "name": "What are the common signs of vertigo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Symptoms include a spinning sensation, loss of balance, dizziness, nausea, and ringing in the ears. If you experience these symptoms, an ENT evaluation is highly recommended."
            }
          },
          {
            "@type": "Question",
            "name": "Do you treat ENT emergencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Emergencies such as airway-obstructing foreign bodies, severe nasal bleeding, or accident-related ENT trauma are not treated here. Please visit the nearest hospital casualty department immediately for such critical care."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book an appointment at Dr. Marissa's ENT Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book an appointment online at https://drmarissa.netlify.app or call and WhatsApp us directly at +91 94477 11755."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Dr. Marissa's ENT Clinic located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are located at RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram, Kerala 695011. Get directions on Google Maps."
            }
          },
          {
            "@type": "Question",
            "name": "What ENT conditions do you treat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We treat a wide range of ENT conditions including ear wax blockage, vertigo, sinusitis, nasal obstruction, allergies, snoring, throat infections, tonsillitis, hoarseness of voice, and paediatric ENT problems."
            }
          },
          {
            "@type": "Question",
            "name": "Is microsuction ear cleaning safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, microsuction is considered the safest and most effective method for ear wax removal. It does not use water, so it avoids the risk of infection associated with ear syringing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you accept walk-in patients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking an appointment in advance to ensure an unhurried, thorough consultation. You can book online or contact us by phone or WhatsApp at +91 94477 11755."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
