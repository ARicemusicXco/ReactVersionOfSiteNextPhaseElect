import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/forms/ContactForm';

// Hero Section Styles
const HeroSection = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
    url('/NextPhaseElectMediaLibrary/Solar-panels-on-a-corrugated-metal-roof-reflecting-sunlight.jpg');
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
    color: #222;
  }
`;

// Add this new styled component for the white button on black background
const WhiteOutlineButton = styled(CallToActionButton)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: white;
    color: black;
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
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.8;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 400;
`;

const HighlightSection = styled(Section)`
  background-color: #f9f9f9;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  letter-spacing: -0.3px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

// FAQ Section Styles
const FAQSection = styled(Section)`
  background-color: white;
`;

const FAQContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

const FAQAnswer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkGray};
`;

// Contact Form Styles
const ContactSection = styled(Section)`
  background-color: #f9f9f9;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const FormSubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const RequiredText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  cursor: pointer;
`;

// Add this new styled component for the black section title
const BlackSectionTitle = styled(SectionTitle)`
  color: white;
  
  &:after {
    background-color: white;
  }
`;

const SystemUpgrades: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Solar Panel Upgrades</HeroTitle>
          <HeroSubtitle>Upgrade your existing solar system with NPE's expertise.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Kern County's Source for Replacement Solar Panels and Upgrades</SectionTitle>
          <TextContent>
            <Paragraph>
              Are your solar panels showing signs of wear, or are you looking to enhance your system's performance? 
              Next Phase Electric is Kern County's trusted source for replacement solar panels and expert upgrades. 
              Elevate your energy production and slash your energy bill with our tailored solutions.
            </Paragraph>
          </TextContent>
          
          <HighlightSection style={{ 
            padding: '3rem', 
            margin: '2rem 0', 
            backgroundColor: '#000000',
            color: 'white'
          }}>
            <TextContent style={{ textAlign: 'center', margin: '0' }}>
              <BlackSectionTitle style={{ marginBottom: '1.5rem' }}>
                Start Your Electrical Upgrade Today
              </BlackSectionTitle>
              <Paragraph style={{ 
                textAlign: 'center',
                color: 'white'
              }}>
                Ready to enhance your solar system? Start your electrical upgrade today with Next Phase Electric. 
                Our experienced team ensures a seamless process, from assessing your current setup to implementing 
                cutting-edge upgrades that align with your energy goals.
              </Paragraph>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <WhiteOutlineButton to="/contact">Reach Out Today</WhiteOutlineButton>
              </div>
            </TextContent>
          </HighlightSection>
        </ContentContainer>
      </Section>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Why Work With Next Phase Electric?</SectionTitle>
          
          <FeatureGrid>
            <FeatureBox>
              <FeatureTitle>Community Roots</FeatureTitle>
              <Paragraph>
                As a local company, we understand the unique energy needs of Kern County residents. 
                Our community roots drive our commitment to delivering top-notch solar panel upgrades 
                that not only meet industry standards but exceed the expectations of our neighbors.
              </Paragraph>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Dedication to Quality</FeatureTitle>
              <Paragraph>
                At Next Phase Electric, quality is non-negotiable. We are dedicated to providing solar 
                panel upgrades that stand the test of time. From the products we use to the craftsmanship 
                of our installations, our commitment to quality ensures your solar system operates at peak performance.
              </Paragraph>
            </FeatureBox>
          </FeatureGrid>
        </ContentContainer>
      </Section>
      
      <HighlightSection>
        <ContentContainer>
          <SectionTitle>Power Up With a Main Panel Upgrade</SectionTitle>
          <TextContent>
            <Paragraph>
              Consider a main panel upgrade for your solar system to unleash its full potential. 
              Our experts assess your electrical infrastructure, identifying opportunities for improvement. 
              A main panel upgrade optimizes energy distribution, allowing you to harness the maximum 
              power from your solar panels.
            </Paragraph>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <CallToActionButton to="/contact">Get an Upgrade</CallToActionButton>
            </div>
          </TextContent>
        </ContentContainer>
      </HighlightSection>
      
      <FAQSection>
        <SectionTitle>Solar Panel Upgrade FAQs</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: Why should I consider upgrading my solar panels?</FAQQuestion>
            <FAQAnswer>
              A: Upgrading solar panels can enhance energy production, improve efficiency, and ensure your 
              system remains at the forefront of technological advancements. It's a smart investment for 
              long-term savings and sustainable energy use.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Q: How do I know if my solar panels need an upgrade?</FAQQuestion>
            <FAQAnswer>
              A: Signs such as reduced energy production, visible wear on panels, or outdated technology 
              are indicators that your solar panels might benefit from an upgrade. Our experts can assess 
              your system to determine the best course of action.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Q: What benefits can I expect from a main panel upgrade for my solar system?</FAQQuestion>
            <FAQAnswer>
              A: A main panel upgrade optimizes energy distribution, reducing the risk of electrical issues 
              and ensuring your solar panels contribute efficiently to your power needs. It's a crucial step 
              to maximize the performance and longevity of your solar investment.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
      
      <ContactSection>
        <SectionTitle>Get a Free Estimate Today</SectionTitle>
        <Paragraph style={{ textAlign: 'center' }}>
          Ready to take the next step toward energy efficiency and quality electrical solutions? Contact us for a free estimate, and let's light up the path to a brighter, more cost-effective future together.
        </Paragraph>
        
        <ContactForm 
          onSubmit={(formData) => {
            console.log('Form submitted:', formData);
            // Add your form submission logic here
          }}
        />
      </ContactSection>
    </>
  );
};

export default SystemUpgrades; 