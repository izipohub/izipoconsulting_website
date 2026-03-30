// components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = "website",
  publishedTime,
  author = "Izipo Consulting"
}) => {
  const siteTitle = "Izipo Consulting";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || "Expert web, mobile, and cloud development services in Namibia. Transform your business with our innovative technology solutions.";
  const siteUrl = url || `https://izipoconsulting.com${window.location.pathname}`;
  const siteImage = image || "https://izipoconsulting.com/og-image.jpg";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="fb:pages" content="izipoconsulting" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;