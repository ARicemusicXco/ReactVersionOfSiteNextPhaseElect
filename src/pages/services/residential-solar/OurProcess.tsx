import React, { useState, useEffect } from 'react';
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

const HeroTitle = styled.h1<{ $visible: boolean }>`
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-transform: none;
  letter-spacing: -0.5px;
  line-height: 1.1;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p<{ $visible: boolean }>`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const CallToActionButton = styled(Link)<{ $visible?: boolean }>`
  display: inline-block;
  background-color: transparent;
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 2px solid white;
  border-radius: 0;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible = true }) => ($visible ? 0 : '30px')});
  transition: background-color 0.3s, color 0.3s, opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s;
  
  &:hover {
    background-color: white;
    color: #222;
  }
`;

// Content Section Styles
const Section = styled.section<{ $visible?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible = true }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 600;
  text-align: left;
  position: relative;
  text-transform: none;
  letter-spacing: -0.3px;
  line-height: 1.2;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TextContent = styled.div<{ $visible?: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible = true }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 400;
  letter-spacing: 0.2px;
`;

const HighlightSection = styled(Section)`
  background-color: #f9f9f9;
`;

const HighlightBox = styled.div<{ $visible?: boolean }>`
  background-color: transparent;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible = true }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const HighlightTitle = styled.h3`
  font-size: 1.75rem;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.3px;
  line-height: 1.2;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeatureGrid = styled.div<{ $visible?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible = true }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 1.75rem;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
  position: relative;
  padding-left: 0;
  letter-spacing: -0.3px;
  line-height: 1.2;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
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
const GearIcon = styled.svg`
  width: 100px;
  height: 100px;
  color: #e74c3c;
  stroke-width: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
  }
`;

const BlackSection = styled(Section)`
  background-color: #000000;
  color: white;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
`;

const BlackSectionContent = styled(TextContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const BlackSectionTitle = styled(SectionTitle)`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:after {
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
  }
`;

const WhiteText = styled(Paragraph)`
  color: white;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const WhiteOutlineButton = styled(CallToActionButton)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xxl}`};
  font-size: 1rem;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ResidentialSolarProcess: React.FC = () => {
  const [elementsVisible, setElementsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [highlightVisible, setHighlightVisible] = useState(false);
  const [blackSectionVisible, setBlackSectionVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setElementsVisible(true);
    }, 100);
    
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
    const highlightTimer = setTimeout(() => {
      setHighlightVisible(true);
    }, 500);
    
    const blackSectionTimer = setTimeout(() => {
      setBlackSectionVisible(true);
    }, 700);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
      clearTimeout(highlightTimer);
      clearTimeout(blackSectionTimer);
    };
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle $visible={elementsVisible}>How We Install Complete Solar Systems for Homes</HeroTitle>
          <HeroSubtitle $visible={elementsVisible}>A residential solar installer with integrity.</HeroSubtitle>
          <CallToActionButton to="/contact" $visible={elementsVisible}>Call Us Today</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      <Section $visible={contentVisible}>
        <ContentContainer>
          <SectionTitle>A California Solar Installer With Integrity</SectionTitle>
          <TextContent $visible={contentVisible}>
            <Paragraph>
              At Next Phase Electric, we approach solar system installations with unwavering integrity. 
              Our commitment to service, quality, and getting our customers the greatest value possible 
              sets us apart as a trusted California solar installer. When you choose us, you're selecting 
              a partner dedicated to delivering top-tier solutions with honesty and transparency.
            </Paragraph>
          </TextContent>
          
          <FeatureGrid $visible={contentVisible}>
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
      
      <BlackSection $visible={contentVisible}>
        <ContentContainer>
          <BlackSectionContent $visible={contentVisible}>
            <GearIcon viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" />
            </GearIcon>
            <BlackSectionTitle>Work With a Solar Pro That Cares</BlackSectionTitle>
            <WhiteText>
              Ready to experience a solar installation process with a professional who genuinely cares? 
              Reach out to Next Phase Electric today. Our team is passionate about empowering homeowners 
              with clean and efficient energy solutions.
            </WhiteText>
            <WhiteOutlineButton to="/contact">Reach Out Today</WhiteOutlineButton>
          </BlackSectionContent>
        </ContentContainer>
      </BlackSection>
      
      <HighlightSection $visible={highlightVisible}>
        <ContentContainer>
          <SectionTitle>Take Control of Your Energy Bill With Whole Home Solar</SectionTitle>
          <TextContent $visible={highlightVisible}>
            <Paragraph>
              Unleash the efficiency of whole home solar solutions from Next Phase Electric, providing 
              comprehensive coverage to power every corner of your residence. With a focus on efficiency, 
              Our solar solutions ensures self-sufficiency and maximizes savings by significantly reducing 
              dependence on unreliable external power sources. As a green and eco-friendly choice, it not 
              only benefits your wallet but also contributes to a sustainable future by minimizing your 
              carbon footprint.
            </Paragraph>
          </TextContent>
          
          <HighlightBox $visible={highlightVisible}>
            <HighlightTitle>Discover Our Financing Tools and Other Resources</HighlightTitle>
            <Paragraph>
              Financing your solar project is made easy with Next Phase Electric. Take advantage of our 
              financing tools and resources designed to make your transition to solar energy smooth and 
              affordable. We're here to guide you through the financial aspects, ensuring you access the 
              benefits of solar energy without unnecessary hurdles.
            </Paragraph>
          </HighlightBox>
        </ContentContainer>
      </HighlightSection>
      
      <Section>
        <ContentContainer>
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
        </ContentContainer>
      </Section>
      
      <ContactSection>
        <SectionTitle>Contact Us Today</SectionTitle>
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

export default ResidentialSolarProcess; 