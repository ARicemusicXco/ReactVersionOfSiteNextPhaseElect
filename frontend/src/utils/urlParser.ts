/**
 * Parses a URL slug to extract the search term and location
 * Format expected: search-term-location (e.g., backup-battery-delano)
 */
export const parseSlug = (slug: string): { searchTerm: string; location: string; serviceKey: string } | null => {
  if (!slug) return null;
  
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