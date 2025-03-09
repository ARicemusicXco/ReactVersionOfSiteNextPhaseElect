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
    url('/NextPhaseElectMediaLibrary/AdobeStock_169955027.jpeg');
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

const ResidentialSolar: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Residential Solar Solutions</HeroTitle>
          <HeroSubtitle>Powering homes across California with clean, renewable energy.</HeroSubtitle>
          <CallToActionButton to="/contact">Get a Free Quote</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Sustainable Energy Solutions for Your Home</SectionTitle>
        <SectionContent>
          <Paragraph>
            Next Phase Electric is your trusted partner for residential solar solutions. We provide comprehensive 
            solar services designed to reduce your energy costs, increase your property value, and contribute to 
            a more sustainable future. Our expert team handles everything from initial consultation to installation 
            and ongoing maintenance.
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Our Process</FeatureTitle>
              <FeatureText>
                Our streamlined solar installation process makes going solar simple. From the initial consultation 
                to system design, permitting, installation, and activation, we handle every step with precision and care.
              </FeatureText>
              <FeatureLink to="/services/residential-solar/our-process">Learn More</FeatureLink>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>System Upgrades</FeatureTitle>
              <FeatureText>
                Enhance your existing solar system with our upgrade services. Whether you need additional panels, 
                improved inverters, or integration with new technologies, we can optimize your system for maximum efficiency.
              </FeatureText>
              <FeatureLink to="/services/residential-solar/system-upgrades">Learn More</FeatureLink>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>EV Chargers</FeatureTitle>
              <FeatureText>
                Combine your solar system with an electric vehicle charging station for a complete clean energy solution. 
                We install and configure EV chargers that integrate seamlessly with your solar setup.
              </FeatureText>
              <FeatureLink to="/services/residential-solar/ev-chargers">Learn More</FeatureLink>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Batteries</FeatureTitle>
              <FeatureText>
                Store excess solar energy with our battery storage solutions. Ensure power during outages and maximize 
                your energy independence with cutting-edge battery technology installed by our experts.
              </FeatureText>
              <FeatureLink to="/services/residential-solar/batteries">Learn More</FeatureLink>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Ready to Harness the Power of the Sun?</CTATitle>
        <CTAText>
          Take the first step toward energy independence and sustainability. Contact us today for a free consultation 
          and discover how residential solar can benefit your home and budget.
        </CTAText>
        <CTAButton to="/contact">Contact Us Today</CTAButton>
      </CTASection>
    </>
  );
};

export default ResidentialSolar; 