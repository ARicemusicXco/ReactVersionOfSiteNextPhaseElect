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
    url('/NextPhaseElectMediaLibrary/AdobeStock_195719968.jpg');
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

// FAQ Section Styles
const FAQSection = styled.section`
  background-color: #f5f5f5;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  color: #0a3d62;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

// Contact Section Styles
const ContactSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const FormNote = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const FormCheckbox = styled.input`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  color: #555;
`;

const SubmitButton = styled.button`
  background-color: #0a3d62;
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    background-color: #0c2461;
  }
`;

const Agriculture: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Ag Electrical Services Across California</HeroTitle>
          <HeroSubtitle>Your single-source agricultural electrical contractor.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Serving Agricultural Facilities Across the San Joaquin Valley</SectionTitle>
        <SectionContent>
          <Paragraph>
            Are you in the agricultural industry, seeking reliable electrical services in Kern County and beyond? 
            Look no further than Next Phase Electric, your single-source agricultural electrical contractor dedicated 
            to meeting the unique needs of agricultural facilities. We understand the critical role electricity plays 
            in modern agriculture. Our services extend from Fresno to Bakersfield, covering a wide geographical area 
            to meet the diverse needs of agricultural operations.
          </Paragraph>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Need Ag Electrical Services? Let's Get Started</CTATitle>
        <CTAText>
          Ready to enhance your agricultural electrical systems? Reach out to us today to get started on acquiring 
          top-notch electrical services tailored for your agricultural facility.
        </CTAText>
        <CTAButton to="/contact">Reach Out Today</CTAButton>
      </CTASection>
      
      <Section>
        <SectionTitle>From Solar Farms to Agrovoltaics, NPE Is Equipped to Handle Your Electrical Needs</SectionTitle>
        <SectionContent>
          <Paragraph>
            Whether you're managing a vast solar farm or exploring the innovative field of agrovoltaics, Next Phase Electric 
            is well-equipped to handle your diverse electrical needs in the agricultural sector. Our leadership team makes 
            sure to stay abreast of the latest advancements in solar technology and agricultural practices to offer cutting-edge solutions.
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Install, Upgrade, or Maintain Your Solar Panel Field With Us</FeatureTitle>
              <FeatureText>
                Our expertise extends to the installation, upgrading, and maintenance of solar panel fields. We understand 
                the significance of sustainable and renewable energy sources in agriculture. Count on us to optimize the 
                efficiency and performance of your solar initiatives, helping you reduce costs and minimize environmental impact.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Turn to NPE for General Electrical Needs, From Pump and Motor Work to Maintenance</FeatureTitle>
              <FeatureText>
                Beyond solar solutions, we offer comprehensive electrical services for general agricultural needs. From pump 
                and motor work essential for irrigation systems to routine maintenance, our experienced team is ready to support 
                the uninterrupted operation of your agricultural facility. We recognize the critical role reliable electrical 
                systems play in maintaining a thriving agricultural business.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Work With an Electrical Contractor With Integrity</FeatureTitle>
              <FeatureText>
                Integrity is at the core of our service. We take pride in being a trusted electrical contractor in the agricultural 
                industry, committed to delivering reliable and efficient solutions with the utmost integrity. Our team understands 
                the unique challenges and demands of agriculture, and we approach every project with professionalism and dedication.
              </FeatureText>
            </FeatureBox>
          </FeatureBoxContainer>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CallToActionButton to="/about" style={{ display: 'inline-block' }}>More About Us</CallToActionButton>
          </div>
        </SectionContent>
      </Section>
      
      <FAQSection>
        <SectionTitle>Ag Electrical Service FAQs</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: How do I schedule electrical services for my agricultural facility?</FAQQuestion>
            <FAQAnswer>
              A: Scheduling electrical services with Next Phase Electric is straightforward. Contact us through our website 
              or give us a call, and our team will promptly assist you in setting up the services your agricultural operation requires.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: What types of agricultural electrical services do you provide?</FAQQuestion>
            <FAQAnswer>
              A: Our services cover a broad spectrum, including solar panel installations and upgrades, pump and motor work, 
              routine maintenance, and more. We offer comprehensive electrical solutions tailored to the specific needs of agricultural facilities.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: How can I benefit from agrovoltaics, and can NPE assist in implementing this technology?</FAQQuestion>
            <FAQAnswer>
              A: Agrovoltaics combines agriculture with solar energy production. Next Phase Electric can help you explore and 
              implement agrovoltaic solutions, maximizing the use of your land for both agricultural and energy purposes.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
      
      <ContactSection>
        <SectionTitle>Get a Free Estimate Today</SectionTitle>
        <ContactContainer>
          <ContactText>
            Ready to take the next step toward energy efficiency and quality electrical solutions? Contact us for a free estimate, 
            and let's light up the path to a brighter, more cost-effective future together.
          </ContactText>
          
          <FormNote>"*" indicates required fields</FormNote>
          
          <form>
            <FormGrid>
              <FormGroup>
                <FormLabel htmlFor="firstName">First Name*</FormLabel>
                <FormInput type="text" id="firstName" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="lastName">Last Name*</FormLabel>
                <FormInput type="text" id="lastName" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone*</FormLabel>
                <FormInput type="tel" id="phone" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email*</FormLabel>
                <FormInput type="email" id="email" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
                <FormInput type="text" id="zipCode" />
              </FormGroup>
            </FormGrid>
            
            <FormGroup>
              <FormLabel>I'm Interested In:</FormLabel>
              <CheckboxContainer>
                <CheckboxGroup>
                  <FormCheckbox type="checkbox" id="solar-batteries" />
                  <CheckboxLabel htmlFor="solar-batteries">Solar/Batteries</CheckboxLabel>
                </CheckboxGroup>
                
                <CheckboxGroup>
                  <FormCheckbox type="checkbox" id="adding-batteries" />
                  <CheckboxLabel htmlFor="adding-batteries">Adding Batteries</CheckboxLabel>
                </CheckboxGroup>
                
                <CheckboxGroup>
                  <FormCheckbox type="checkbox" id="true-up" />
                  <CheckboxLabel htmlFor="true-up">True-Up</CheckboxLabel>
                </CheckboxGroup>
              </CheckboxContainer>
            </FormGroup>
            
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Agriculture; 