// Structured Data for Services Page
window.addEventListener('DOMContentLoaded', function() {
    // Service Schema for PM Surya Ghar Subsidy Assistance
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PM Surya Ghar Subsidy Assistance",
        "description": "Complete assistance with PM Surya Ghar: Muft Bijli Yojana application, including eligibility check, documentation, submission, and follow-up for government solar subsidy up to ₹78,000 and 300 units free electricity monthly.",
        "url": "https://visionenterprises.com/services.html",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Vision Enterprises",
            "url": "https://visionenterprises.com"
        },
        "areaServed": {
            "@type": "State",
            "name": "Maharashtra",
            "@context": "https://schema.org",
            "@type": "Place"
        },
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://visionenterprises.com/quote.html",
            "serviceType": "Quote Request"
        },
        "offers": {
            "@type": "Offer",
            "name": "PM Surya Ghar Consultation",
            "description": "Free consultation for PM Surya Ghar subsidy eligibility and application process",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
        }
    };

    // FAQPage Schema for Services
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the PM Surya Ghar Muft Bijli Yojana?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PM Surya Ghar Muft Bijli Yojana is a government of India scheme that provides financial assistance for rooftop solar panel installation. Eligible households can receive up to ₹78,000 as subsidy and up to 300 units of free electricity every month for 25 years."
                }
            },
            {
                "@type": "Question",
                "name": "How do I apply for PM Surya Ghar subsidy through Vision Enterprises?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vision Enterprises provides end-to-end assistance for PM Surya Ghar subsidy application. We handle eligibility verification, documentation, portal registration, vendor selection, installation, and subsidy claim process. Simply request a free quote and our experts will guide you through each step."
                }
            },
            {
                "@type": "Question",
                "name": "What documents are required for PM Surya Ghar subsidy application?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Required documents include: proof of property ownership, recent electricity bill, identity proof (Aadhaar/Passport/Voter ID), address proof, and roof ownership declaration. Vision Enterprises assists in collecting and verifying all necessary documents."
                }
            }
        ]
    };

    // Add schemas to the page
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
});