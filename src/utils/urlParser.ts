/**
 * Parses a URL slug to extract the search term and location
 * Format expected: search-term-location (e.g., backup-battery-delano)
 */
import { sanitizeString, sanitizeUrl } from './securityUtils';

export const parseSlug = (slug: string): { searchTerm: string; location: string; serviceKey: string } | null => {
  if (!slug) return null;
  
  // Sanitize the slug first to prevent XSS
  slug = sanitizeString(slug);
  
  // Split the slug by hyphens
  const parts = slug.split('-');
  if (parts.length < 2) return null;
  
  // Handle special cases for multi-word city names
  let location = '';
  let serviceKey = '';
  
  if (slug.includes('california-city')) {
    location = 'California City';
    serviceKey = slug.replace('-california-city', '');
  } else if (slug.includes('frazier-park')) {
    location = 'Frazier Park';
    serviceKey = slug.replace('-frazier-park', '');
  } else if (slug.includes('lake-isabella')) {
    location = 'Lake Isabella';
    serviceKey = slug.replace('-lake-isabella', '');
  } else {
    // Standard case: last part is the location
    location = parts.pop() || '';
    location = location.charAt(0).toUpperCase() + location.slice(1);
    serviceKey = parts.join('-');
  }
  
  // The search term is the service key with spaces instead of hyphens
  const searchTerm = serviceKey.replace(/-/g, ' ');
  
  return { 
    searchTerm, 
    location,
    serviceKey
  };
};

/**
 * Parses query parameters safely
 * @param url URL or query string to parse
 * @returns An object containing sanitized query parameters
 */
export const parseQueryParams = (url: string): Record<string, string> => {
  const result: Record<string, string> = {};
  
  try {
    // Extract the query string if a full URL is provided
    const queryString = url.includes('?') ? url.split('?')[1] : url;
    
    // If no query string, return empty object
    if (!queryString) return result;
    
    // Split the query string by & and process each parameter
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=');
      if (key && value !== undefined) {
        // Decode and sanitize both key and value
        const decodedKey = sanitizeString(decodeURIComponent(key));
        const decodedValue = sanitizeString(decodeURIComponent(value));
        
        // Store the sanitized values
        result[decodedKey] = decodedValue;
      }
    });
  } catch (error) {
    // If any error occurs during parsing, return empty result
    console.error('Error parsing query parameters:', error);
  }
  
  return result;
};

/**
 * Creates a safe URL by sanitizing the base URL and query parameters
 * @param baseUrl The base URL
 * @param params Query parameters to add
 * @returns A sanitized URL with encoded query parameters
 */
export const createSafeUrl = (baseUrl: string, params: Record<string, string>): string => {
  // Sanitize the base URL
  const safeBaseUrl = sanitizeUrl(baseUrl);
  
  // If the base URL is invalid, return a safe default
  if (safeBaseUrl === '#') return '#';
  
  // Build query string with sanitized and encoded parameters
  const queryParts: string[] = [];
  
  for (const key in params) {
    const safeKey = sanitizeString(key);
    const safeValue = sanitizeString(params[key]);
    
    // Add to query parts if both key and value are non-empty after sanitization
    if (safeKey && safeValue) {
      queryParts.push(`${encodeURIComponent(safeKey)}=${encodeURIComponent(safeValue)}`);
    }
  }
  
  // If no valid query parameters, return just the base URL
  if (queryParts.length === 0) return safeBaseUrl;
  
  // Determine the proper separator (? or &)
  const separator = safeBaseUrl.includes('?') ? '&' : '?';
  
  // Return the complete URL
  return `${safeBaseUrl}${separator}${queryParts.join('&')}`;
}; 