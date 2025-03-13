import dynamicPagesData from '../data/dynamicPages.json';

/**
 * Interface for a content section
 */
export interface ContentSection {
  header: string;
  paragraph: string;
  imagePath: string;
  imageAlt: string;
}

/**
 * Interface for page content
 */
export interface PageContent {
  pageTitle: string;
  metaDescription: string;
  sections: ContentSection[];
}

/**
 * Replace all occurrences of {location} with the actual location name
 */
const replaceLocationPlaceholders = (content: any, location: string): any => {
  if (typeof content === 'string') {
    return content.replace(/\{location\}/g, location);
  }
  
  if (Array.isArray(content)) {
    return content.map(item => replaceLocationPlaceholders(item, location));
  }
  
  if (typeof content === 'object' && content !== null) {
    const result: Record<string, any> = {};
    for (const key in content) {
      result[key] = replaceLocationPlaceholders(content[key], location);
    }
    return result;
  }
  
  return content;
};

/**
 * Loads page content for a specific service and location
 */
export const loadPageContent = (serviceKey: string, location: string): PageContent | null => {
  // Type assertion to help TypeScript understand the structure
  const pages = dynamicPagesData as Record<string, PageContent>;
  
  // Check if the service exists in our data
  if (pages[serviceKey]) {
    // Get the template content
    const templateContent = pages[serviceKey];
    
    // Replace all location placeholders with the actual location
    const localizedContent = replaceLocationPlaceholders(templateContent, location) as PageContent;
    
    return localizedContent;
  }
  
  return null;
}; 