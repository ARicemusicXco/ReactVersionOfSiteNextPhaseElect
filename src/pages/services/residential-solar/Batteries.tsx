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

// Add this new styled component for the black section title
const BlackSectionTitle = styled(SectionTitle)`
  color: white;
  
  &:after {
    background-color: white;
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

const FeatureBox = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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

const CheckboxContainer = styled.div`
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

const Batteries: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Home Power Backups & Storage</HeroTitle>
          <HeroSubtitle>Cut down energy costs and secure your home's power with NPE.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Invest in Battery Backup Systems for Your Home</SectionTitle>
          <TextContent>
            <Paragraph>
              In today's dynamic energy landscape, investing in battery backup systems is a smart choice for homeowners. If you're looking for a backup battery installer near you, Next Phase Electric offers advanced solutions that go beyond traditional backup systems. Our batteries are designed to efficiently store excess solar energy, providing you with cost savings and security. We utilize trusted brands and models in home backup batteries, including Tesla Powerwall 3, Enphase IQ Battery 5P, FranklinWH aPower, and more.
            </Paragraph>
          </TextContent>
          
          <FeatureBox>
            <FeatureTitle>Save Money During Peak Usage Hours Under NEM</FeatureTitle>
            <Paragraph>
              With evolving regulations like NEM3, it's more economical than ever to invest in a battery backup system. Our solutions allow you to save money during peak usage hours by strategically using stored solar energy. Benefit from NEM3 incentives and stay off the grid when energy costs are at their highest, contributing to significant savings.
            </Paragraph>
          </FeatureBox>
          
          <FeatureBox>
            <FeatureTitle>Secure Your Home Against Outages</FeatureTitle>
            <Paragraph>
              While grid reliability is generally high, unforeseen outages can still occur. Our battery backup systems act as a safeguard, ensuring that your home remains powered during unexpected outages. Enjoy uninterrupted electricity supply and peace of mind, knowing that your home is secure against disruptions.
            </Paragraph>
          </FeatureBox>
          
          <HighlightSection style={{ 
            padding: '3rem', 
            margin: '2rem 0', 
            backgroundColor: '#000000',
            color: 'white'
          }}>
            <TextContent style={{ textAlign: 'center', margin: '0' }}>
              <BlackSectionTitle style={{ marginBottom: '1.5rem' }}>
                Get a Battery Backup / Storage System Today
              </BlackSectionTitle>
              <Paragraph style={{ 
                textAlign: 'center',
                color: 'white'
              }}>
                Invest in your home's security and reliability with Next Phase Electric's advanced battery backup systems. Our solutions are tailored to keep your home powered with cost-effective energy during outages and peak usage hours. Don't let unexpected disruptions or shifting prices affect your daily life. Contact us today to explore the best battery backup options for your home.
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
          <SectionTitle>Install the Tesla Powerwall 3 with Next Phase Electric</SectionTitle>
          <TextContent>
            <Paragraph>
              If you're looking for a top-notch battery backup system, the Tesla Powerwall 3 is an excellent choice. This advanced technology offers enhanced energy storage and efficiency, making it a standout option for homeowners. Next Phase Electric is here to help you take full advantage of the Powerwall 3 with expert installation and support.
            </Paragraph>
            <Paragraph>
              The Tesla Powerwall 3 is designed to optimize your energy use. It stores excess solar energy generated during the day, which can then be used during peak hours or outages. Its sleek, modern design and advanced performance features ensure reliable and efficient energy storage, making it a smart investment for any home.
            </Paragraph>
          </TextContent>
          
          <FeatureBox>
            <FeatureTitle>Leverage Seamless Installation From Next Phase Electric</FeatureTitle>
            <Paragraph>
              At Next Phase Electric, we pride ourselves on providing a seamless installation experience for home backup battery systems. Our experienced team handles every aspect of the installation process with precision and care. We start with a thorough assessment of your home's energy needs and proceed with a customized installation plan that ensures optimal performance of your battery system.
            </Paragraph>
            <Paragraph>
              From initial consultation to final setup, we manage all the details, including integrating the battery system with your existing solar system. Our goal is to make the transition as smooth as possible, so you can start enjoying the benefits of enhanced energy storage right away.
            </Paragraph>
          </FeatureBox>
        </ContentContainer>
      </Section>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Providing the Best Battery Systems in Bakersfield</SectionTitle>
          <TextContent>
            <Paragraph>
              Next Phase Electric takes pride in delivering the best battery systems in Bakersfield, Kern County, and the surrounding areas. Our expertise lies in offering tailored solutions that align with the changing energy landscape. From grid-tied batteries to solar-exclusive setups, we provide options that suit your specific needs, backed by cutting-edge technology.
            </Paragraph>
          </TextContent>
        </ContentContainer>
      </Section>
      
      <FAQSection>
        <ContentContainer>
          <SectionTitle>Home Power Backup FAQs</SectionTitle>
          <FAQContainer>
            <FAQItem>
              <FAQQuestion>How does a battery backup system benefit me during peak usage hours under NEM?</FAQQuestion>
              <FAQAnswer>
                Our battery backup systems are strategically designed to save excess solar energy, allowing you to stay off the grid during peak usage hours. By utilizing stored energy when electricity costs are highest, you can significantly reduce your energy expenses and maximize the benefits of California's NEM3 regulations.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>What makes Next Phase Electric's battery systems the best choice for Bakersfield homeowners?</FAQQuestion>
              <FAQAnswer>
                Next Phase Electric stands out by offering cutting-edge battery systems that prioritize cost savings and efficiency. Our systems are tailored to the changing energy landscape in California, providing homeowners with reliable backup power and the flexibility to capitalize on NEM3 benefits. We ensure that our solutions align with the latest regulations and optimize your energy usage.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Are home battery backups mainly for power outages, or do they serve other purposes?</FAQQuestion>
              <FAQAnswer>
                While home battery backups offer security during outages, the majority of users are motivated by cost savings. With the evolving energy market in California, our battery systems empower homeowners to stay off the grid during peak hours, minimizing reliance on traditional power sources and reducing overall energy expenses.
              </FAQAnswer>
            </FAQItem>
          </FAQContainer>
        </ContentContainer>
      </FAQSection>
      
      <ContactSection>
        <ContactContainer>
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
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Batteries; 