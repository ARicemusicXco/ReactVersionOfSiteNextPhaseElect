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
    url('/NextPhaseElectMediaLibrary/AdobeStock_199164585.jpeg');
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
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
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
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  background-color: #f8f9fa;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #0a3d62;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #0a3d62;
  }
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
`;

// CTA Section Styles
const CTASection = styled.section`
  background-color: #0a3d62;
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
  text-transform: none;
  letter-spacing: -0.5px;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #0a3d62;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 2px solid white;
  border-radius: 0;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: transparent;
    color: white;
  }
`;

// FAQ Section Styles
const FAQSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: #f8f9fa;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FAQItem = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  color: #0a3d62;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
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
  line-height: 1.8;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const FormNote = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 0.9rem;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FormCheckbox = styled.input`
  margin: 0;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #333;
`;

const SubmitButton = styled.button`
  background-color: #0a3d62;
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    background-color: #0c2461;
  }
`;

const CommercialRemodels: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Electrical Remodeling Services</HeroTitle>
          <HeroSubtitle>Get commercial electrical upgrades with NPE's expertise.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Overhaul Your Business With an Electrical Service Upgrade</SectionTitle>
        <SectionContent>
          <Paragraph>
            Revitalize your business space with Next Phase Electric's comprehensive electrical remodeling services. 
            Our expert team specializes in overhauling commercial interiors, providing state-of-the-art electrical 
            upgrades that enhance your business's presentation and cut costs through efficient energy solutions.
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Enhance Your Business's Presentation</FeatureTitle>
              <FeatureText>
                Upgrade your commercial space to reflect professionalism and efficiency. Our electrical remodeling 
                services include the installation of new walls, cables, lighting, and electrical systems, transforming 
                your workspace into a more functional and visually appealing environment.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Cut Costs With Efficient Energy Solutions</FeatureTitle>
              <FeatureText>
                At Next Phase Electric, we prioritize energy efficiency. Our remodeling and electrical renovations 
                cut costs by implementing energy-efficient systems and technologies, reducing your environmental 
                impact and operational expenses.
              </FeatureText>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Let's Amp Up Your Electrical</CTATitle>
        <CTAText>
          Ready to transform your commercial space? Contact Next Phase Electric today for a consultation and let's 
          discuss how our electrical remodeling services can upgrade your business to new heights.
        </CTAText>
        <CTAButton to="/contact">Reach Out Today</CTAButton>
      </CTASection>
      
      <Section>
        <SectionTitle>Working for a Wide Range of Businesses Across Kern County</SectionTitle>
        <SectionContent>
          <Paragraph>
            Our electrical remodeling services cater to a diverse range of businesses across Kern County. 
            Whether you're a retail store, office space, or industrial facility, we have the expertise to 
            meet your unique electrical remodeling needs.
          </Paragraph>
        </SectionContent>
      </Section>
      
      <FAQSection>
        <SectionTitle>Electrical Remodeling Service FAQs</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: Why should I consider electrical remodeling for my commercial space?</FAQQuestion>
            <FAQAnswer>
              A: Electrical remodeling enhances your commercial space by updating its infrastructure, improving 
              energy efficiency, and providing a modern aesthetic. Whether you want to create a more inviting 
              environment for clients or improve the functionality of your workspace, our services can cater to 
              your specific needs.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: How disruptive is the electrical remodeling process to my business operations?</FAQQuestion>
            <FAQAnswer>
              A: We understand the importance of minimizing disruptions to your business. Our team works efficiently 
              to ensure the least possible interference with your daily operations. We plan the remodeling process 
              meticulously to streamline the transition, allowing you to continue running your business smoothly.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: What types of businesses can benefit from electrical remodeling services?</FAQQuestion>
            <FAQAnswer>
              A: Our electrical remodeling services are versatile and suitable for various businesses, including 
              retail stores, offices, and industrial facilities. Whether you're looking to create a more modern 
              ambiance, upgrade your electrical systems for efficiency, or comply with the latest safety standards, 
              our team is equipped to handle diverse commercial needs.
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

export default CommercialRemodels; 