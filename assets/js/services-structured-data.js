// Services Page Structured Data
document.addEventListener('DOMContentLoaded', function() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Solar Panel Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Vision Enterprises",
      "description": "Authorized Oswal Solar Dealer providing expert solar installation services"
    },
    "areaServed": {
      "@type": "State",
      "name": "Maharashtra"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Solar Installation",
            "description": "Complete solar panel installation for homes under PM Surya Ghar Scheme"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Solar Installation",
            "description": "Enterprise-grade solar solutions for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Government Subsidy Assistance",
            "description": "Expert guidance for PM Surya Ghar: Muft Bijli Yojana application and subsidy processing"
          }
        }
      ]
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
});
