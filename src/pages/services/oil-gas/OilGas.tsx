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
    url('/NextPhaseElectMediaLibrary/AdobeStock_101665287.jpeg');
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

const OilGas: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Bakersfield's Leading Oilfield Electricians</HeroTitle>
          <HeroSubtitle>Work with electrical contractors with a strong background in O&G electric.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Electrical Contractors in Bakersfield With a Wealth of Experience</SectionTitle>
        <SectionContent>
          <Paragraph>
            Navigating the complexities of the oil and gas industry requires a specialized skill set. At Next Phase Electric, 
            our electrical contractors bring a wealth of experience, ensuring a deep understanding of the industry's diverse 
            power types, equipment, and wire sizes. Trust us to deliver reliable and efficient solutions for your oilfield 
            electrical needs.
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>A Track Record of Success Working With Oil and Gas Companies Across California</FeatureTitle>
              <FeatureText>
                Next Phase Electric boasts a proven track record of success, collaborating with oil and gas companies across 
                California. Our commitment to excellence and industry-specific knowledge positions us as the go-to choice for 
                electrical services in the oilfield sector. Count on us for reliable and efficient solutions that power your success.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Pulling From a Long-Standing Background in the Oil and Gas Industry</FeatureTitle>
              <FeatureText>
                Many of our electricians at Next Phase Electric come from the oil and gas industry, bringing invaluable expertise 
                to our team. With a strong background in the intricacies of the O&G sector, our professionals are well-versed in 
                safety protocols, industry-specific requirements, and the nuanced demands of oilfield operations.
              </FeatureText>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Get High-Quality, Specialized Industrial Electrical Services</CTATitle>
        <CTAText>
          Are you in the oil and gas industry and need top-tier electrical services tailored to your unique requirements? 
          NPE's team of specialized oilfield electricians brings a wealth of experience and expertise to address the complex 
          needs of the oil and gas sector.
        </CTAText>
        <CTAButton to="/contact">Reach Out Today</CTAButton>
      </CTASection>
      
      <FAQSection>
        <SectionTitle>Oil and Gas Electrical Service FAQs</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: How does Next Phase Electric ensure safety compliance in oil and gas electrical projects?</FAQQuestion>
            <FAQAnswer>
              A: Safety is our top priority. Our electricians, with a background in the oil and gas industry, are well-acquainted 
              with safety protocols. We adhere to stringent safety standards, ensuring compliance and a secure working environment 
              in every project.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: Can Next Phase Electric handle the diverse power types encountered in the oilfield industry?</FAQQuestion>
            <FAQAnswer>
              A: Absolutely. Our experienced team is familiar with the wide variety of power types present in the oil and gas sector. 
              We bring the expertise needed to navigate and provide solutions for the unique power requirements of oilfield projects.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: How can I request a specialized industrial electrical service for my oilfield project?</FAQQuestion>
            <FAQAnswer>
              A: Requesting our specialized industrial electrical services is simple. Reach out to us through our website or contact 
              us directly. Our team will promptly respond, understanding your specific needs and tailoring our services to ensure 
              optimal solutions for your oilfield project.
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

export default OilGas; 