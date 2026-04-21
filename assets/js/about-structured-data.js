// Structured Data for About Page
window.addEventListener('DOMContentLoaded', function() {
    // AboutPage Schema
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Vision Enterprises - Maharashtra's Trusted Oswal Solar Dealer Since 2018",
        "description": "Learn about Vision Enterprises: Authorized Oswal Solar dealer in Maharashtra with 500+ installations and 10+ MW capacity. Expert solar installation with 25-year warranty and PM Surya Ghar subsidy specialization.",
        "url": "https://visionenterprises.com/about.html",
        "author": {
            "@type": "Organization",
            "name": "Vision Enterprises",
            "url": "https://visionenterprises.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Vision Enterprises",
            "logo": {
                "@type": "ImageObject",
                "url": "https://visionenterprises.com/assets/images/company_logo.png"
            }
        }
    };

    // FAQPage Schema for About
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long has Vision Enterprises been in the solar business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vision Enterprises has been providing expert solar solutions since 2018, making us one of the established solar companies in Maharashtra with over 6 years of experience."
                }
            },
            {
                "@type": "Question",
                "name": "What makes Vision Enterprises different from other solar companies?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As an authorized Oswal Solar dealer, we provide genuine components with priority manufacturer support. Our engineering-first approach ensures 25+ year system durability, and we specialize in PM Surya Ghar subsidy assistance with 500+ successful installations."
                }
            },
            {
                "@type": "Question",
                "name": "Where does Vision Enterprises provide solar services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vision Enterprises primarily serves Maharashtra state-wide, with our headquarters in Chhatrapati Sambhajinagar. We provide solar installation, consultation, and support services across major cities including Pune, Nagpur, Aurangabad, Nashik, and surrounding regions."
                }
            }
        ]
    };

    // Add schemas to the page
    const aboutPageScript = document.createElement('script');
    aboutPageScript.type = 'application/ld+json';
    aboutPageScript.textContent = JSON.stringify(aboutPageSchema);
    document.head.appendChild(aboutPageScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
});