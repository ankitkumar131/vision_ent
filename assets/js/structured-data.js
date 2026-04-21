// Structured Data for Vision Enterprises Website
// LocalBusiness Schema for index.html
window.addEventListener('DOMContentLoaded', function() {
    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Vision Enterprises",
        "description": "Authorized Oswal Solar dealer providing enterprise-grade solar solutions with PM Surya Ghar subsidy expertise",
        "url": "https://visionenterprises.com",
        "logo": "https://visionenterprises.com/assets/images/company_logo.png",
        "image": [
            "https://visionenterprises.com/assets/images/company_logo.png",
            "https://visionenterprises.com/assets/images/solar-installation.jpg"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vision Enterprises Office",
            "addressLocality": "Chhatrapati Sambhajinagar",
            "addressRegion": "Maharashtra",
            "postalCode": "431001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.2403",
            "longitude": "75.6551"
        },
        "telephone": "+91-98765-43210",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "18:00"
            }
        ],
        "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "Customer Service",
            "language": "English"
        }],
        "priceRange": "₹₹₹",
        "servesCuisine": "",
        "department": [
            {
                "@type": "SolarEnergyConsultation",
                "name": "Solar Consultation",
                "url": "https://visionenterprises.com/services.html"
            },
            {
                "@type": "HomeAndConstructionBusiness",
                "name": "Solar Installation",
                "url": "https://visionenterprises.com/services.html"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Solar Solutions",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "PM Surya Ghar Subsidy Assistance",
                    "description": "Complete assistance with government solar subsidy application"
                },
                {
                    "@type": "Offer",
                    "name": "Residential Solar Installation",
                    "description": "Custom home solar power systems"
                },
                {
                    "@type": "Offer",
                    "name": "Commercial Solar Solutions",
                    "description": "Enterprise-scale solar power installations"
                }
            ]
        }
    };

    // FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is PM Surya Ghar Muft Bijli Yojana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PM Surya Ghar Muft Bijli Yojana is a government scheme that provides up to ₹78,000 subsidy for solar panel installation and guarantees up to 300 units of free electricity monthly for eligible households in India."
                }
            },
            {
                "@type": "Question",
                "name": "How much subsidy can I get under PM Surya Ghar scheme?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Under the PM Surya Ghar scheme, eligible households can get up to ₹78,000 as direct subsidy credited to their bank account, along with up to 300 units of free electricity every month."
                }
            },
            {
                "@type": "Question",
                "name": "Who is eligible for PM Surya Ghar subsidy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Households with valid electricity connection, owning a house with suitable roof for solar panel installation, and not having availed any other solar subsidy are eligible for PM Surya Ghar scheme."
                }
            },
            {
                "@type": "Question",
                "name": "Why choose Vision Enterprises for solar installation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vision Enterprises is an authorized Oswal Solar dealer with 500+ installations and 10+ MW capacity. We provide end-to-end PM Surya Ghar subsidy assistance, 25-year warranty, and 24/7 local support in Maharashtra."
                }
            }
        ]
    };

    // Add schemas to the page
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localBusinessScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
});