// components/StructuredData.jsx
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Izipo Consulting and Investments cc",
    "url": "https://izipoconsulting.com",
    "logo": "https://izipoconsulting.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/izipoconsulting",
      "https://www.instagram.com/izipoconsulting",
      "https://www.linkedin.com/company/izipoconsulting"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alpha Street, Khomasdal",
      "addressLocality": "Windhoek",
      "addressCountry": "Namibia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+264858099470",
      "contactType": "customer service",
      "email": "admin@izipoconsulting.com",
      "availableLanguage": ["English"]
    },
    "description": "Expert technology consulting firm specializing in web development, mobile apps, cloud solutions, UX/UI design, and graphics design in Namibia.",
    "areaServed": "Namibia",
    "priceRange": "N$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;