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
    url('/NextPhaseElectMediaLibrary/AdobeStock_164973953.jpg');
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
  line-height: 1.8;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
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

// Testimonials Section Styles
const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TestimonialBox = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const TestimonialTitle = styled.h3`
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

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LearnMoreLink = styled(Link)`
  display: inline-block;
  color: #0a3d62;
  text-decoration: none;
  font-weight: 600;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: #1a5d82;
  }
`;

// FAQ Section Styles
const FAQSection = styled.section`
  background-color: #f8f9fa;
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
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid #eee;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  color: #0a3d62;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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
  line-height: 1.8;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  font-size: 0.9rem;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const FormCheckbox = styled.input`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #444;
`;

const SubmitButton = styled.button`
  display: inline-block;
  background-color: #0a3d62;
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  margin-top: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    background-color: #1a5d82;
    transform: translateY(-2px);
  }
`;

const CommercialElectricNewConstruction: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Commercial Electrical Contractors</HeroTitle>
          <HeroSubtitle>Get to know your next new build electrician.</HeroSubtitle>
          <CallToActionButton to="/contact">Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>The Authority on Commercial Electrical Work in Kern County</SectionTitle>
        <SectionContent>
          <Paragraph>
            When it comes to new construction electrical work in Kern County and beyond, Next Phase Electric stands as the authority. 
            Our experienced team of commercial electrical contractors is well-versed in handling projects of varying scales, 
            ensuring that your new build receives top-notch electrical solutions.
          </Paragraph>
          
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Get a Free, No-Obligation Job Walk</FeatureTitle>
              <FeatureText>
                Embarking on a new construction project? Let our experts conduct a free, no-obligation job walk to assess your electrical needs. 
                This personalized approach allows us to tailor our services to the unique requirements of your project, 
                ensuring a seamless and efficient electrical system installation.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Commercial Electrical Design, Installation, and Beyond</FeatureTitle>
              <FeatureText>
                At Next Phase Electric, we offer comprehensive services beyond new construction. 
                Whether you're planning a remodel or require commercial electrical design and installation, 
                our skilled team is ready to assist. Count on us for a full spectrum of electrical solutions tailored to your business needs.
              </FeatureText>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <CTASection>
        <CTATitle>Reach Out Today</CTATitle>
        <CTAText>
          Ready to discuss your commercial electrical project? Our team is standing by to provide expert guidance and solutions tailored to your specific needs.
        </CTAText>
        <CTAButton to="/contact">Contact Us</CTAButton>
      </CTASection>
      
      <Section>
        <SectionTitle>Why We're the Ultimate New Build Electrician</SectionTitle>
        <SectionContent>
          <FeatureBoxContainer>
            <FeatureBox>
              <FeatureTitle>Expertise</FeatureTitle>
              <FeatureText>
                With years of experience in the industry, our skilled electricians bring unparalleled expertise to every new construction project.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Quality</FeatureTitle>
              <FeatureText>
                We prioritize the use of top-quality materials and adhere to industry standards, ensuring the longevity and reliability of our electrical work.
              </FeatureText>
            </FeatureBox>
            
            <FeatureBox>
              <FeatureTitle>Efficiency</FeatureTitle>
              <FeatureText>
                Our team is committed to delivering timely and efficient electrical solutions, minimizing disruptions to your construction timeline.
              </FeatureText>
            </FeatureBox>
          </FeatureBoxContainer>
          
          <Paragraph style={{ marginTop: '2rem' }}>
            Explore our additional commercial electrical and solar services. From energy-efficient lighting installations to solar panel solutions, 
            discover the comprehensive offerings that set us apart as a leader in the industry.
          </Paragraph>
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Serving Businesses From Starbucks and Raising Cane's to Industrial Faciltiies</SectionTitle>
        <SectionContent>
          <Paragraph>
            Next Phase Electric takes pride in serving a diverse range of businesses across California. 
            Our portfolio includes projects for renowned establishments like Starbucks and Raising Cane's, 
            as well as contributions to the dynamic oil & gas industry, agricultural industry, and beyond. 
            Learn more about the areas we serve below.
          </Paragraph>
          
          <TestimonialsContainer>
            <TestimonialBox>
              <TestimonialTitle>Areas We Serve</TestimonialTitle>
              <TestimonialText>
                We provide our commercial electrical services throughout Kern County and beyond, 
                including Bakersfield, Fresno, Visalia, and surrounding areas. 
                No matter where your business is located, we're ready to deliver exceptional electrical solutions.
              </TestimonialText>
              <LearnMoreLink to="/contact">Contact Us</LearnMoreLink>
            </TestimonialBox>
            
            <TestimonialBox>
              <TestimonialTitle>Our Services</TestimonialTitle>
              <TestimonialText>
                From new construction electrical work to remodels and retrofitting, 
                Next Phase Electric offers a comprehensive range of services to meet your business needs. 
                Explore our service offerings and discover how we can help your business thrive.
              </TestimonialText>
              <LearnMoreLink to="/services/commercial-electric/our-process">Learn More</LearnMoreLink>
            </TestimonialBox>
          </TestimonialsContainer>
        </SectionContent>
      </Section>
      
      <FAQSection>
        <SectionTitle>Commercial Electrical Contractor Work FAQs</SectionTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>Q: How do I schedule a free job walk for my new construction project?</FAQQuestion>
            <FAQAnswer>
              A: Scheduling a free job walk with Next Phase Electric is easy. Simply reach out to our team through our website or contact us directly. 
              We'll promptly set up a convenient time to assess your project, discuss your electrical needs, and provide a no-obligation job walk.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: What types of businesses do you typically work with for new construction electrical projects?</FAQQuestion>
            <FAQAnswer>
              A: Next Phase Electric has extensive experience working with various businesses across California. 
              Our portfolio includes projects for commercial establishments such as Starbucks and Raising Cane's, 
              as well as contributions to the oil and gas industry. We cater to a diverse range of businesses, 
              bringing expertise to each unique project.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Q: Can you handle both electrical design and installation for new construction projects?</FAQQuestion>
            <FAQAnswer>
              A: Absolutely. Our team of commercial electrical contractors is skilled in both design and installation aspects. 
              From creating tailored electrical designs to seamlessly executing the installation process, 
              we offer end-to-end solutions for new construction projects.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>
      
      <ContactSection>
        <SectionTitle>Get a Free Estimate Today</SectionTitle>
        <ContactContainer>
          <ContactText>
            Ready to take the next step toward energy efficiency and quality electrical solutions? 
            Contact us for a free estimate, and let's light up the path to a brighter, more cost-effective future together.
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

export default CommercialElectricNewConstruction; 