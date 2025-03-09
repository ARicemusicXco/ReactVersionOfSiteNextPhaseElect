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
    url('/NextPhaseElectMediaLibrary/AdobeStock_164972173.jpeg');
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

const HighlightBox = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  
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

// Add these custom styled components for the black section
const BlackSectionTitle = styled(SectionTitle)`
  color: white;
  
  &:after {
    background-color: white;
  }
`;

const WhiteOutlineButton = styled(CallToActionButton)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ResidentialSolarProcess: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>How We Install Complete Solar Systems for Homes</HeroTitle>
          <HeroSubtitle>A residential solar installer with integrity.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <ContentContainer>
          <SectionTitle>A California Solar Installer With Integrity</SectionTitle>
          <TextContent>
            <Paragraph>
              At Next Phase Electric, we approach solar system installations with unwavering integrity. 
              Our commitment to service, quality, and getting our customers the greatest value possible 
              sets us apart as a trusted California solar installer. When you choose us, you're selecting 
              a partner dedicated to delivering top-tier solutions with honesty and transparency.
            </Paragraph>
          </TextContent>
          
          <FeatureGrid>
            <FeatureBox>
              <FeatureTitle>Dedicated to Service, Quality, and Satisfaction</FeatureTitle>
              <Paragraph>
                Our dedication to service goes beyond installing solar panels. We prioritize quality 
                craftsmanship and your satisfaction at every step. From the initial consultation to the 
                final inspection, we ensure that your solar system not only meets but exceeds your expectations.
              </Paragraph>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Solar Complete Systems for the Community</FeatureTitle>
              <Paragraph>
                Next Phase Electric is deeply rooted in the community we serve. Our mission goes beyond 
                business—we're here to uplift our community through sustainable, cost-effective energy 
                solutions. When you work with us, you're supporting a local company committed to making 
                a positive impact on the environment and the lives of our neighbors.
              </Paragraph>
            </FeatureBox>
          </FeatureGrid>
        </ContentContainer>
      </Section>
      
      <HighlightSection style={{ 
        padding: '3rem', 
        margin: '2rem 0', 
        backgroundColor: '#000000',
        color: 'white'
      }}>
        <ContentContainer>
          <BlackSectionTitle>Work With a Solar Pro That Cares</BlackSectionTitle>
          <TextContent>
            <Paragraph style={{ textAlign: 'center', color: 'white' }}>
              Ready to experience a solar installation process with a professional who genuinely cares? 
              Reach out to Next Phase Electric today. Our team is passionate about empowering homeowners 
              with clean and efficient energy solutions.
            </Paragraph>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <WhiteOutlineButton to="/contact">Reach Out Today</WhiteOutlineButton>
            </div>
          </TextContent>
        </ContentContainer>
      </HighlightSection>
      
      <Section>
        <ContentContainer>
          <SectionTitle>Take Control of Your Energy Bill With Whole Home Solar</SectionTitle>
          <TextContent>
            <Paragraph>
              Unleash the efficiency of whole home solar solutions from Next Phase Electric, providing 
              comprehensive coverage to power every corner of your residence. With a focus on efficiency, 
              Our solar solutions ensures self-sufficiency and maximizes savings by significantly reducing 
              dependence on unreliable external power sources. As a green and eco-friendly choice, it not 
              only benefits your wallet but also contributes to a sustainable future by minimizing your 
              carbon footprint.
            </Paragraph>
          </TextContent>
          
          <HighlightBox>
            <HighlightTitle>Discover Our Financing Tools and Other Resources</HighlightTitle>
            <Paragraph>
              Financing your solar project is made easy with Next Phase Electric. Take advantage of our 
              financing tools and resources designed to make your transition to solar energy smooth and 
              affordable. We're here to guide you through the financial aspects, ensuring you access the 
              benefits of solar energy without unnecessary hurdles.
            </Paragraph>
          </HighlightBox>
        </ContentContainer>
      </Section>
      
      <FAQSection>
        <SectionTitle>FAQs About Our Process</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: How long does the solar installation process take?</FAQQuestion>
            <FAQAnswer>
              A: The duration of the solar installation process depends on various factors, including 
              system size and complexity. Our team provides a detailed timeline during the initial 
              consultation, keeping you informed at every stage.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Q: What maintenance is required after the solar system is installed?</FAQQuestion>
            <FAQAnswer>
              A: Solar systems generally require minimal maintenance. Regular cleaning and occasional 
              inspections are recommended to ensure optimal performance. Our team provides guidance on 
              maintenance practices to maximize your system's lifespan.
            </FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Q: Can I monitor the performance of my solar system?</FAQQuestion>
            <FAQAnswer>
              A: Yes, you can monitor your solar system's performance through our user-friendly monitoring 
              tools. We provide information on accessing and interpreting the data, allowing you to stay 
              informed about your system's energy production.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
      
      <ContactSection>
        <SectionTitle>Get a Free Estimate Today</SectionTitle>
        <ContactContainer>
          <Paragraph style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Ready to take the next step toward energy efficiency and quality electrical solutions? 
            Contact us for a free estimate, and let's light up the path to a brighter, more 
            cost-effective future together.
          </Paragraph>
          <FormContainer>
            <RequiredText>"*" indicates required fields</RequiredText>
            <form>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="firstName">First Name*</FormLabel>
                  <FormInput type="text" id="firstName" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="lastName">Last Name*</FormLabel>
                  <FormInput type="text" id="lastName" required />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone*</FormLabel>
                  <FormInput type="tel" id="phone" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email*</FormLabel>
                  <FormInput type="email" id="email" required />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
                  <FormInput type="text" id="zipCode" />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <FormLabel>I'm Interested In</FormLabel>
                <CheckboxGroup>
                  <CheckboxLabel>
                    <CheckboxInput type="checkbox" name="interests" value="solar" />
                    Solar
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <CheckboxInput type="checkbox" name="interests" value="roofing" />
                    Roofing
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <CheckboxInput type="checkbox" name="interests" value="landscape" />
                    Landscape
                  </CheckboxLabel>
                </CheckboxGroup>
              </FormGroup>
              <FormSubmitButton type="submit">Submit</FormSubmitButton>
            </form>
          </FormContainer>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default ResidentialSolarProcess; 