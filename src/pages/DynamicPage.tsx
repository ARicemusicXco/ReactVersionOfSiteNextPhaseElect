import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SEOHelmet from '../components/common/SEOHelmet';

// Utils
import { parseSlug } from '../utils/urlParser';
import { loadPageContent, PageContent } from '../utils/pageContentLoader';
import { sanitizeString, sanitizeUrl } from '../utils/securityUtils';

// Create styled components with default values to avoid theme access errors
const HeroSection = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
    url('/NextPhaseElectMediaLibrary/AdobeStock_212443355.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  margin-top: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.md || '992px'}) {
    height: calc(100vh - 80px);
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
  padding: 0 2rem;
  z-index: 2;
  
  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing?.xl || '2rem'};
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-transform: none;
  letter-spacing: -0.5px;
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.md || '992px'}) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.md || '992px'}) {
    font-size: 1.25rem;
  }
`;

const CallToActionButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: white;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border: 2px solid white;
  border-radius: 0;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color: #222;
  }
`;

// Content Section Styles with fallback values
const Section = styled.section`
  padding: 3rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.md || '992px'}) {
    padding: 2rem 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors?.secondary || '#1a232e'};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.md || '992px'}) {
    font-size: 2rem;
  }
`;

interface ContentSectionProps {
  $reverse?: boolean;
}

const ContentSection = styled.div<ContentSectionProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints?.lg || '1200px'}) {
    flex-direction: ${(props) => props.$reverse ? 'row-reverse' : 'row'};
    align-items: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors?.text || '#333333'};
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints?.lg || '1200px'}) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Error handling components
const ErrorContainer = styled.div`
  padding: 3rem;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1a232e; /* hardcoded secondary color */
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = React.useState<PageContent | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  
  useEffect(() => {
    if (!slug) {
      setError('No page specified');
      setLoading(false);
      return;
    }
    
    try {
      // Parse the slug to get search term and location
      const parsedSlug = parseSlug(slug);
      if (!parsedSlug) {
        setError('Page not found');
        setLoading(false);
        return;
      }
      
      // Load the page content with location substitution
      const content = loadPageContent(parsedSlug.serviceKey, parsedSlug.location);
      if (!content) {
        setError(`We couldn't find specific information about ${parsedSlug.searchTerm} in ${parsedSlug.location}`);
        setLoading(false);
        return;
      }
      
      setPageContent(content);
      setLoading(false);
    } catch (err) {
      console.error('Error loading dynamic page:', err);
      setError('An error occurred while loading this page');
      setLoading(false);
    }
  }, [slug, navigate]);
  
  // Show loading state
  if (loading) {
    return (
      <>
        <SEOHelmet 
          title="Loading..."
          description="Please wait while we load your content."
          noIndex={true} 
        />
        <ErrorContainer data-testid="loading-state">
          <ErrorTitle>Loading...</ErrorTitle>
        </ErrorContainer>
      </>
    );
  }
  
  // Show error message if there's an error
  if (error) {
    return (
      <>
        <SEOHelmet 
          title="Content Not Available" 
          description="We couldn't find the content you were looking for."
          noIndex={true}
        />
        <ErrorContainer data-testid="error-state">
          <ErrorTitle>Content Not Available</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
          <CallToActionButton href="/contact">Contact Us For More Information</CallToActionButton>
        </ErrorContainer>
      </>
    );
  }
  
  // Show 404 if no page content
  if (!pageContent) {
    return (
      <>
        <SEOHelmet 
          title="Page Not Found" 
          description="The page you are looking for does not exist."
          noIndex={true}
        />
        <ErrorContainer data-testid="page-not-found">
          <ErrorTitle>Page Not Found</ErrorTitle>
          <ErrorMessage>The page you are looking for does not exist.</ErrorMessage>
          <CallToActionButton href="/">Return to Home</CallToActionButton>
        </ErrorContainer>
      </>
    );
  }
  
  // Sanitize all content before rendering
  const safeTitle = sanitizeString(pageContent.pageTitle);
  const safeDescription = sanitizeString(pageContent.metaDescription);
  const safeCanonicalUrl = sanitizeUrl(window.location.href);
  
  return (
    <>
      <SEOHelmet
        title={safeTitle}
        description={safeDescription}
        canonicalUrl={safeCanonicalUrl}
        keywords={`solar, electric, ${safeTitle}`}
        image="/NextPhaseElectMediaLibrary/AdobeStock_212443355.jpeg"
      />
      
      <HeroSection data-testid="dynamic-page">
        <HeroContent>
          <HeroTitle>{safeTitle}</HeroTitle>
          <HeroSubtitle>{safeDescription}</HeroSubtitle>
          <CallToActionButton href="/contact">Get a Free Quote</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Our Services</SectionTitle>
          
          {pageContent.sections.map((section, index: number) => (
            <ContentSection key={index} $reverse={index % 2 === 1}>
              <TextContent>
                <h3>{sanitizeString(section.header)}</h3>
                <Paragraph>{sanitizeString(section.paragraph)}</Paragraph>
              </TextContent>
              <ImageContainer>
                <Image 
                  src={sanitizeUrl(section.imagePath)} 
                  alt={sanitizeString(section.imageAlt)} 
                />
              </ImageContainer>
            </ContentSection>
          ))}
        </ContentContainer>
      </Section>
    </>
  );
};

export default DynamicPage; 