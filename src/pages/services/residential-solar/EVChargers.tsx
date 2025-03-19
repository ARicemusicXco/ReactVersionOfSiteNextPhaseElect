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
    url('/NextPhaseElectMediaLibrary/AdobeStock_164449269.jpeg');
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

const EVChargers: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>EV Charger Installers for Kern County</HeroTitle>
          <HeroSubtitle>Power up your electric vehicle with Next Phase Electric's certified EV charger installation services.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Get a Certified Electrician EV Charger Installation</SectionTitle>
          <TextContent>
            <Paragraph>
              Are you a homeowner considering making the switch to an electric vehicle? Next Phase Electric is your trusted partner for EV charger installation in Kern County. Our certified electricians ensure a seamless and efficient installation process, providing you with a reliable and convenient charging solution for any electric vehicle.
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
                Looking to Install an EV Charger at Home? Reach Out to NPE Today
              </BlackSectionTitle>
              <Paragraph style={{ 
                textAlign: 'center',
                color: 'white'
              }}>
                Ready to make the move to electric? Contact us today, and our expert team will guide you through the process of installing an EV charger at your home.
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
          <SectionTitle>The Benefits of Installing a Solar EV Charger With NPE</SectionTitle>
          
          <FeatureGrid>
            <FeatureBox>
              <FeatureTitle>Cost Savings</FeatureTitle>
              <Paragraph>
                When you choose Next Phase Electric for your EV charger installation, you're not only investing in sustainable energy but also saving on your electricity bills. Our solar-powered EV chargers harness the sun's energy, providing a cost-effective and eco-friendly way to charge your electric vehicle.
              </Paragraph>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Environmental Impact</FeatureTitle>
              <Paragraph>
                By opting for a solar EV charger installation, you contribute to a greener planet. Harnessing energy from the sun reduces your reliance on conventional power sources, lowering your carbon footprint and supporting a cleaner environment.
              </Paragraph>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Convenience</FeatureTitle>
              <Paragraph>
                Our solar EV chargers offer the convenience of charging your electric vehicle at home. No more trips to public charging stations or concerns about finding a suitable place to charge. Enjoy the ease of having your own charging station right at home.
              </Paragraph>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Increased Home Value</FeatureTitle>
              <Paragraph>
                Installing a solar EV charger enhances the value of your home. As sustainable and energy-efficient features become increasingly desirable, having a solar-powered EV charger is an attractive asset for potential homebuyers. It's a smart investment that pays off both now and in the future.
              </Paragraph>
            </FeatureBox>
          </FeatureGrid>
        </ContentContainer>
      </Section>
      
      <FAQSection>
        <ContentContainer>
          <SectionTitle>EV Charger Installation FAQs</SectionTitle>
          <FAQContainer>
            <FAQItem>
              <FAQQuestion>How Long Does an EV Charger Installation Take?</FAQQuestion>
              <FAQAnswer>
                The duration of an EV charger installation can vary based on factors like the charger model, your home's electrical setup, and local regulations. Typically, our experienced team completes installations in one day, but your requested charger and home's electrical setup may prolong the process.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Can I Install an EV Charger Without Solar Panels?</FAQQuestion>
              <FAQAnswer>
                Yes, absolutely. While we specialize in solar-powered solutions, our EV charger installations are not dependent on solar panels. You can benefit from the convenience of an EV charger regardless of whether you have a solar energy system at home.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>What Kind of Vehicles Are Compatible With NPE's Chargers?</FAQQuestion>
              <FAQAnswer>
                Our EV chargers are designed to be compatible with a wide range of electric vehicles, including popular makes and models. Whether you drive a Tesla, Nissan Leaf, Chevrolet Bolt, or any other electric vehicle, our chargers offer versatile compatibility.
              </FAQAnswer>
            </FAQItem>
          </FAQContainer>
        </ContentContainer>
      </FAQSection>
      
      <ContactSection>
        <ContactContainer>
          <SectionTitle>Get My Free Estimate Today</SectionTitle>
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

export default EVChargers; 