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
    url('/NextPhaseElectMediaLibrary/AdobeStock_214337983.jpeg');
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

const GeneralElectric: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Emergency Electric Services</HeroTitle>
          <HeroSubtitle>Next Phase Electric is your all-in-one electric contractor.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>An All-in-One Commercial and Residential Electric Contractor</SectionTitle>
        <SectionContent>
          <Paragraph>
            Are you facing electrical emergencies or in need of general commercial or home electrical services? 
            Next Phase Electric is Kern County's #1 electrical partner, offering comprehensive solutions for 
            emergencies and general electrical needs. Catering to both commercial and residential needs, our 
            experienced team is equipped to handle a wide range of services, ensuring you receive prompt and 
            effective solutions for your electrical requirements.
          </Paragraph>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Have Emergency Electric Needs? Let's Get in Touch</CTATitle>
        <CTAText>
          If you're facing an electrical emergency, don't hesitate to reach out. Contact us, and our team will 
          swiftly respond to your emergency electric needs, providing the necessary assistance to restore safety 
          and functionality to your facility.
        </CTAText>
        <CTAButton to="/contact">Reach Out Today</CTAButton>
      </CTASection>
      
      <Section>
        <SectionTitle>From Home Electrical Services to Electrical Construction, NPE Does it All</SectionTitle>
        <SectionContent>
          <Paragraph>
            Our services encompass a broad spectrum, addressing both residential and commercial requirements. 
            Next Phase Electric is your one-stop solution for various electrical needs, offering expertise in the following areas:
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Total Solar Solutions</FeatureTitle>
              <FeatureText>
                Explore the benefits of solar energy with our total solar solutions. We design, install, and maintain 
                solar systems for both residential and commercial properties, contributing to energy efficiency and sustainability.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Financing Assistance</FeatureTitle>
              <FeatureText>
                Navigating the financial aspects of electrical projects can be challenging. Our team provides financing 
                assistance, helping you explore available options and choose a solution that aligns with your budget and goals.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Your Residential Remodel Electrician</FeatureTitle>
              <FeatureText>
                Enhance your home with our residential remodeling services. From upgrading electrical systems to incorporating 
                energy-efficient solutions, we transform your living space to meet modern electrical standards.
              </FeatureText>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <FAQSection>
        <SectionTitle>General and Emergency Electric Service FAQs</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: How quickly can Next Phase Electric respond to emergency electrical issues?</FAQQuestion>
            <FAQAnswer>
              A: Next Phase Electric understands the urgency of electrical emergencies. Our dedicated team strives to respond 
              promptly to emergency service requests. The exact response time may vary based on your location and the nature 
              of the emergency. For immediate assistance, please contact us directly, and we'll prioritize your needs.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: What types of residential electrical services do you offer for remodeling projects?</FAQQuestion>
            <FAQAnswer>
              A: Our residential electrical services for remodeling projects are comprehensive. We cover various aspects, 
              including upgrading electrical panels, installing new fixtures, wiring upgrades, and integrating energy-efficient 
              solutions. Whether you're renovating a single room or undergoing a full home remodel, Next Phase Electric has the 
              expertise to enhance your residential electrical systems.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: Can Next Phase Electric assist with financing options for large-scale electrical projects?</FAQQuestion>
            <FAQAnswer>
              A: Yes, we understand that large-scale electrical projects may come with financial considerations. Next Phase Electric 
              is committed to helping our clients navigate financing options. Our team can provide guidance on available financing 
              solutions, ensuring that you make informed decisions that align with your budget and project requirements. Contact us 
              to discuss financing assistance tailored to your specific needs.
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

export default GeneralElectric; 