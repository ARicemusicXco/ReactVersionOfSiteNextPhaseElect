import React from 'react';
import { Helmet } from 'react-helmet';
import { sanitizeString, sanitizeUrl } from '../../utils/securityUtils';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

/**
 * A secure wrapper for Helmet to handle SEO-related metadata
 * Sanitizes all input to prevent XSS attacks
 */
const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  image,
  author = 'Next Phase Electric',
  publishedTime,
  modifiedTime,
  noIndex = false
}) => {
  // Sanitize all input values to prevent XSS
  const safeTitle = sanitizeString(title);
  const safeDescription = sanitizeString(description);
  const safeCanonical = canonicalUrl ? sanitizeUrl(canonicalUrl) : undefined;
  const safeKeywords = keywords ? sanitizeString(keywords) : undefined;
  const safeImage = image ? sanitizeUrl(image) : undefined;
  const safeAuthor = sanitizeString(author);
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{safeTitle} | Next Phase Electric</title>
      <meta name="description" content={safeDescription} />
      {safeKeywords && <meta name="keywords" content={safeKeywords} />}
      
      {/* Canonical URL */}
      {safeCanonical && <link rel="canonical" href={safeCanonical} />}
      
      {/* No index directive if required */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:site_name" content="Next Phase Electric" />
      {safeCanonical && <meta property="og:url" content={safeCanonical} />}
      {safeImage && <meta property="og:image" content={safeImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      {safeImage && <meta name="twitter:image" content={safeImage} />}
      
      {/* Article metadata if applicable */}
      {publishedTime && <meta property="article:published_time" content={sanitizeString(publishedTime)} />}
      {modifiedTime && <meta property="article:modified_time" content={sanitizeString(modifiedTime)} />}
      {author && <meta property="article:author" content={safeAuthor} />}
      
      {/* Content Security Policy */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self' data:; object-src 'none'; media-src 'self'; frame-src 'self';"
      />
      
      {/* Additional security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default SEOHelmet; 