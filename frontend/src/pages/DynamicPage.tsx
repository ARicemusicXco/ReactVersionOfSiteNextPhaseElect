import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Utils
import { parseSlug } from '../utils/urlParser';
import { loadPageContent, PageContent } from '../utils/pageContentLoader';

// Hero Section Styles (similar to existing pages)
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: calc(100vh - 80px);
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-transform: none;
  letter-spacing: -0.5px;
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const CallToActionButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 2px solid white;
  border-radius: 0;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color: #222;
  }
`;

// Content Section Styles
const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

interface ContentSectionProps {
  $reverse?: boolean;
}

const ContentSection = styled.div<ContentSectionProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: ${(props) => props.$reverse ? 'row-reverse' : 'row'};
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = React.useState<PageContent | null>(null);
  
  useEffect(() => {
    if (!slug) {
      navigate('/not-found');
      return;
    }
    
    // Parse the slug to get search term and location
    const parsedSlug = parseSlug(slug);
    if (!parsedSlug) {
      navigate('/not-found');
      return;
    }
    
    // Load the page content with location substitution
    const content = loadPageContent(parsedSlug.serviceKey, parsedSlug.location);
    if (!content) {
      navigate('/not-found');
      return;
    }
    
    setPageContent(content);
  }, [slug, navigate]);
  
  if (!pageContent) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>{pageContent.pageTitle} | Next Phase Electric</title>
        <meta name="description" content={pageContent.metaDescription} />
        {/* Add more meta tags for SEO as needed */}
      </Helmet>
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>{pageContent.pageTitle}</HeroTitle>
          <HeroSubtitle>Expert solutions by Next Phase Electric</HeroSubtitle>
          <CallToActionButton href="/contact">Contact Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      {pageContent.sections.map((section, index) => (
        <Section key={index}>
          <ContentContainer>
            <ContentSection $reverse={index % 2 === 1}>
              <TextContent>
                <SectionTitle>{section.header}</SectionTitle>
                <Paragraph>{section.paragraph}</Paragraph>
              </TextContent>
              <ImageContainer>
                <Image src={section.imagePath} alt={section.imageAlt} />
              </ImageContainer>
            </ContentSection>
          </ContentContainer>
        </Section>
      ))}
    </>
  );
};

export default DynamicPage; 