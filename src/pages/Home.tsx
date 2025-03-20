import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IntegratedHeader from '../components/home/IntegratedHeader';
import ContactForm from '../components/forms/ContactForm';
import { sendFormDataToEmail, FormData as EmailFormData } from '../services/emailService';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
  position: relative;
  
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

const IntroSection = styled(Section)`
  background-color: white;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesSection = styled(Section)`
  background-color: #f9f9f9;
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ServicesTitle = styled(SectionTitle)`
  &:after {
    display: none;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1100px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1300px;
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

interface AnimatedProps {
  $isVisible: boolean;
}

const ServiceCard = styled.div<AnimatedProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all ${({ theme }) => theme.transitions.medium};
  border: 1px solid #f0f0f0;
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transform: ${props => (props.$isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ServiceIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  position: relative;
  
  &:after {
    display: none;
  }
`;

const ServiceDescription = styled.p`
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const ServiceLink = styled(Link)`
  color: white;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:hover {
    background-color: #c01820;
    color: white;
    text-decoration: none;
  }
  
  &:after {
    content: '→';
    margin-left: ${({ theme }) => theme.spacing.xs};
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover:after {
    transform: translateX(3px);
  }
`;

const ValuesSection = styled(Section)`
  background-color: #000000;
  text-align: center;
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
`;

const ValuesSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
  position: relative;
  text-align: center;
`;

const ValuesText = styled.p`
  font-size: 1rem;
  color: white;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-left: auto;
  margin-right: auto;
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: #c01820;
    text-decoration: none;
  }
`;

const ContactFormSection = styled(Section)`
  background-color: #000000;
  color: white;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
`;

const QuoteTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
  position: relative;
  text-align: center;
`;

const Home: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            // Add a slight delay for each card for a cascade effect
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
            
            // Once the animation is triggered, we can stop observing this element
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all card refs that exist
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Clean up the observer when component unmounts
      observer.disconnect();
    };
  }, []);

  // Function to set refs for each card
  const setCardRef = (element: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = element;
  };

  const handleFormSubmit = async (formData: EmailFormData) => {
    try {
      const result = await sendFormDataToEmail(formData);
      console.log(result.message);
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <HomeContainer>
      <IntegratedHeader />
      
      <IntroSection>
        <SectionTitle>Providing Cost-Effective, Reliable Electrical Solutions</SectionTitle>
        <IntroText>
          Next Phase Electric specializes in delivering comprehensive electrical services for residential, commercial, and industrial clients. With a focus on quality workmanship and customer satisfaction, we handle projects of all sizes with the same level of dedication and expertise.
        </IntroText>
      </IntroSection>

      <ServicesSection>
        <ServicesTitle>Explore Our Services</ServicesTitle>
        <ServicesGrid>
          <ServiceCard 
            ref={(el) => setCardRef(el, 0)} 
            $isVisible={visibleCards[0]}
          >
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_197235973.jpeg" alt="Home Energy" />
            <ServiceTitle>Home Energy</ServiceTitle>
            <ServiceDescription>
              Discover a new era of energy efficiency for your home with our residential solutions. From solar plans and installations to system upgrades and energy storage, we provide comprehensive services designed to make your home more sustainable and cost-effective.
            </ServiceDescription>
            <ServiceLink to="/services/home-energy">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard 
            ref={(el) => setCardRef(el, 1)} 
            $isVisible={visibleCards[1]}
          >
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_164972173.jpeg" alt="Commercial Electric" />
            <ServiceTitle>Commercial Electric</ServiceTitle>
            <ServiceDescription>
              Navigate the complex landscape of commercial electrical needs with Next Phase Electric. Our services cover everything from electrical remodeling to solar solutions, ensuring that businesses receive tailored, efficient, and reliable electrical systems.
            </ServiceDescription>
            <ServiceLink to="/services/commercial-electric">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard 
            ref={(el) => setCardRef(el, 2)} 
            $isVisible={visibleCards[2]}
          >
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_214337983.jpeg" alt="Oil & Gas" />
            <ServiceTitle>Oil & Gas</ServiceTitle>
            <ServiceDescription>
              Next Phase Electric specializes in meeting the unique electrical requirements of the oil & gas industry. Our experienced team of oilfield electricians ensures that your operations are powered with precision, safety, and efficiency.
            </ServiceDescription>
            <ServiceLink to="/services/oil-gas">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard 
            ref={(el) => setCardRef(el, 3)} 
            $isVisible={visibleCards[3]}
          >
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_216576096.jpeg" alt="Agricultural" />
            <ServiceTitle>Agricultural</ServiceTitle>
            <ServiceDescription>
              For agricultural facilities across California, we offer specialized electrical services. From solar farms to general electrical needs, Next Phase Electric is your single-source agricultural electrical contractor.
            </ServiceDescription>
            <ServiceLink to="/services/agricultural">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard 
            ref={(el) => setCardRef(el, 4)} 
            $isVisible={visibleCards[4]}
          >
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_210408987.jpeg" alt="General Electric" />
            <ServiceTitle>General Electric</ServiceTitle>
            <ServiceDescription>
              Our general electrical services encompass a wide range of needs, including emergency services, home power backups, and electrical construction. Trust Next Phase Electric for all your general electrical requirements.
            </ServiceDescription>
            <ServiceLink to="/services/general-electric">Learn More</ServiceLink>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ValuesSection>
        <ValuesSectionTitle>Integrity, Quality, and a Commitment to Satisfaction</ValuesSectionTitle>
        <ValuesText>
          Next Phase Electric is <HighlightedText>founded on principles of integrity, quality, and an unwavering commitment to customer satisfaction</HighlightedText>. We prioritize delivering not just projects, but optimal solutions for our clients. Our transparent communication and dedication to honesty set us apart in the industry.
        </ValuesText>
        <LearnMoreButton to="/about">LEARN MORE</LearnMoreButton>
      </ValuesSection>

      <ContactFormSection>
        <QuoteTitle>Get a No Obligation Quote</QuoteTitle>
        <ContactForm 
          onSubmit={handleFormSubmit}
        />
      </ContactFormSection>
    </HomeContainer>
  );
};

export default Home; 