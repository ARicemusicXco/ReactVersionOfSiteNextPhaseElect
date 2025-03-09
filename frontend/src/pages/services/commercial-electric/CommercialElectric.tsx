import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Hero Section Styles
const HeroSection = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
    url('/NextPhaseElectMediaLibrary/AdobeStock_187018505.jpeg');
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

const CallToActionButton = styled(Link)`
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
  
  &:hover {
    background-color: white;
    color: #0a3d62;
  }
`;

// Content Section Styles
const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
  text-align: center;
  position: relative;
  text-transform: none;
  letter-spacing: -0.5px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #0a3d62;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

// Feature Box Styles
const FeatureBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FeatureBox = styled.div`
  background-color: #f9f9f9;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #0a3d62;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const FeatureLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    text-decoration: underline;
  }
`;

// CTA Section Styles
const CTASection = styled.section`
  background-color: #0a3d62;
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #0a3d62;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border-radius: 0;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const CommercialElectric: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Commercial Electric Services</HeroTitle>
          <HeroSubtitle>Powering businesses with reliable, efficient electrical solutions.</HeroSubtitle>
          <CallToActionButton to="/contact">Request a Consultation</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Comprehensive Commercial Electrical Solutions</SectionTitle>
        <SectionContent>
          <Paragraph>
            Next Phase Electric delivers expert commercial electrical services designed to meet the unique needs of 
            businesses across California. From new construction to renovations, our team of licensed professionals 
            ensures your electrical systems are safe, efficient, and compliant with all regulations. We pride ourselves 
            on quality workmanship, timely project completion, and exceptional customer service.
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Our Process</FeatureTitle>
              <FeatureText>
                Our commercial electrical process is built on thorough planning, precise execution, and rigorous quality control. 
                We work closely with your team to understand your requirements and deliver solutions that exceed expectations.
              </FeatureText>
              <FeatureLink to="/services/commercial-electric/our-process">Learn More</FeatureLink>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>New Construction</FeatureTitle>
              <FeatureText>
                For new commercial construction projects, we provide comprehensive electrical design and installation services. 
                Our team works with architects and contractors to implement efficient electrical systems from the ground up.
              </FeatureText>
              <FeatureLink to="/services/commercial-electric/new-construction">Learn More</FeatureLink>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Solar</FeatureTitle>
              <FeatureText>
                Reduce your business's energy costs and environmental impact with our commercial solar solutions. 
                We design and install custom solar systems tailored to your facility's energy needs and space constraints.
              </FeatureText>
              <FeatureLink to="/services/commercial-electric/solar">Learn More</FeatureLink>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Remodels</FeatureTitle>
              <FeatureText>
                Updating your commercial space? Our remodel electrical services ensure your renovated facility has 
                modern, code-compliant electrical systems that support your business operations efficiently.
              </FeatureText>
              <FeatureLink to="/services/commercial-electric/remodels">Learn More</FeatureLink>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Ready to Power Your Business?</CTATitle>
        <CTAText>
          Partner with Next Phase Electric for reliable commercial electrical services that keep your business running smoothly. 
          Contact us today to discuss your project needs and receive a customized solution.
        </CTAText>
        <CTAButton to="/contact">Contact Our Team</CTAButton>
      </CTASection>
    </>
  );
};

export default CommercialElectric; 