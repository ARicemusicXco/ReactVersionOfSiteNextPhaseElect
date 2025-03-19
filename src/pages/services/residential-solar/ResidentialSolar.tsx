import React, { useEffect, useState, useRef } from 'react';
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
    url('/NextPhaseElectMediaLibrary/AdobeStock_169955027.jpeg');
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
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
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
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const CallToActionButton = styled(Link)<{ $visible: boolean }>`
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
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '20px')});
  transition: background-color 0.3s, color 0.3s, opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s;
  
  &:hover {
    background-color: white;
    color: #0a3d62;
  }
`;

// Intro Section Styles
const IntroSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: white;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const IntroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const IntroContent = styled.div`
  flex: 1;
`;

const IntroTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  text-transform: none;
  letter-spacing: -0.5px;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const IntroHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const IntroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const IntroLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Content Section Styles
const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: #f9f9f9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
  text-align: center;
  position: relative;
  text-transform: none;
  letter-spacing: -0.5px;
  
  &:after {
    content: none;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Feature Box Styles
const FeatureBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FeatureBox = styled.div<{ $visible: boolean }>`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform ${({ theme }) => theme.transitions.fast}, 
              opacity 0.8s ease-out,
              transform 0.8s ease-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  
  &:hover {
    transform: translateY(-5px);
    
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 3px;
    background-color: #e74c3c;
    transform: scaleX(0);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #e74c3c; /* Red color for icons */
  svg {
    width: 60px;
    height: 60px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
  text-align: center;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  text-align: center;
`;

const FeatureHighlight = styled.span`
  color: #e74c3c; /* Red color for highlighted text */
  font-weight: 600;
`;

const LearnMoreButton = styled.div`
  display: inline-block;
  background-color: #e74c3c; /* Red button */
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: none;
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: #c0392b; /* Darker red on hover */
  }
`;

// Solar Plan Section Styles
const SolarPlanSection = styled.div<{ $visible: boolean }>`
  background-color: #111;
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  position: relative;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const SolarPlanContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  text-align: center;
  }
`;

const SolarPlanIconContainer = styled.div`
  flex: 0 0 auto;
  
  svg {
    width: 100px;
    height: 100px;
    color: #e74c3c;
    stroke-width: 1.5;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    svg {
      width: 80px;
      height: 80px;
    }
  }
`;

const SolarPlanContent = styled.div`
  flex: 1;
`;

const SolarPlanTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SolarPlanText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SolarPlanButton = styled(Link)`
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: #c0392b;
  }
`;

// New Expert Section Styles
const ExpertSection = styled.section<{ $visible: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: #f5f5f5; // Light gray background
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const ExpertContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const ExpertContent = styled.div`
  flex: 1;
`;

const ExpertTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  text-transform: none;
  letter-spacing: -0.5px;
`;

const ExpertText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// New Financing Section Styles
const FinancingSection = styled.section<{ $visible: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: white;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const FinancingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const FinancingContent = styled.div`
  flex: 1;
`;

const FinancingTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  text-transform: none;
  letter-spacing: -0.5px;
`;

const FinancingText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Add new styles for the Estimate section
const EstimateSection = styled.section<{ $visible: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: #f5f5f5;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : '30px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const EstimateContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const EstimateContent = styled.div`
  flex: 1;
  text-align: center;
`;

const EstimateTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #222;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
  text-transform: none;
  letter-spacing: -0.5px;
`;

const EstimateText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const EstimateForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormField = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #ddd;
  background: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: #555;
  font-size: 0.9rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  color: #555;
`;

const SubmitButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: #c0392b;
  }
`;

const ResidentialSolar: React.FC = () => {
  const [elementsVisible, setElementsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false, false, false]);
  const [solarPlanVisible, setSolarPlanVisible] = useState(false);
  const [expertSectionVisible, setExpertSectionVisible] = useState(false);
  const [financingSectionVisible, setFinancingSectionVisible] = useState(false);
  const [estimateSectionVisible, setEstimateSectionVisible] = useState(false);
  
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const solarPlanRef = useRef<HTMLDivElement>(null);
  const expertSectionRef = useRef<HTMLDivElement>(null);
  const financingSectionRef = useRef<HTMLDivElement>(null);
  const estimateSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set a small timeout to ensure the animation starts after the page loads
    const timer = setTimeout(() => {
      setElementsVisible(true);
    }, 100);
    
    // Create an intersection observer for the feature cards
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleCardIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        // Stagger the animation of each card
        setTimeout(() => setCardsVisible([true, false, false, false]), 100);
        setTimeout(() => setCardsVisible([true, true, false, false]), 300);
        setTimeout(() => setCardsVisible([true, true, true, false]), 500);
        setTimeout(() => setCardsVisible([true, true, true, true]), 700);
        
        // Unobserve after animation is triggered
        if (featureCardsRef.current) {
          cardObserver.unobserve(featureCardsRef.current);
        }
      }
    };
    
    const handleSolarPlanIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setSolarPlanVisible(true);
        
        // Unobserve after animation is triggered
        if (solarPlanRef.current) {
          solarPlanObserver.unobserve(solarPlanRef.current);
        }
      }
    };
    
    const handleExpertSectionIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setExpertSectionVisible(true);
        
        // Unobserve after animation is triggered
        if (expertSectionRef.current) {
          expertObserver.unobserve(expertSectionRef.current);
        }
      }
    };
    
    const handleFinancingSectionIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setFinancingSectionVisible(true);
        
        // Unobserve after animation is triggered
        if (financingSectionRef.current) {
          financingObserver.unobserve(financingSectionRef.current);
        }
      }
    };
    
    const handleEstimateSectionIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setEstimateSectionVisible(true);
        if (estimateSectionRef.current) {
          estimateObserver.unobserve(estimateSectionRef.current);
        }
      }
    };
    
    const cardObserver = new IntersectionObserver(handleCardIntersection, observerOptions);
    const solarPlanObserver = new IntersectionObserver(handleSolarPlanIntersection, observerOptions);
    const expertObserver = new IntersectionObserver(handleExpertSectionIntersection, observerOptions);
    const financingObserver = new IntersectionObserver(handleFinancingSectionIntersection, observerOptions);
    const estimateObserver = new IntersectionObserver(handleEstimateSectionIntersection, observerOptions);
    
    // Store the current value of the refs in variables
    const currentFeatureCardsRef = featureCardsRef.current;
    const currentSolarPlanRef = solarPlanRef.current;
    const currentExpertSectionRef = expertSectionRef.current;
    const currentFinancingSectionRef = financingSectionRef.current;
    const currentEstimateSectionRef = estimateSectionRef.current;
    
    if (currentFeatureCardsRef) {
      cardObserver.observe(currentFeatureCardsRef);
    }
    
    if (currentSolarPlanRef) {
      solarPlanObserver.observe(currentSolarPlanRef);
    }
    
    if (currentExpertSectionRef) {
      expertObserver.observe(currentExpertSectionRef);
    }
    
    if (currentFinancingSectionRef) {
      financingObserver.observe(currentFinancingSectionRef);
    }
    
    if (currentEstimateSectionRef) {
      estimateObserver.observe(currentEstimateSectionRef);
    }
    
    return () => {
      clearTimeout(timer);
      if (currentFeatureCardsRef) {
        cardObserver.unobserve(currentFeatureCardsRef);
      }
      if (currentSolarPlanRef) {
        solarPlanObserver.unobserve(currentSolarPlanRef);
      }
      if (currentExpertSectionRef) {
        expertObserver.unobserve(currentExpertSectionRef);
      }
      if (currentFinancingSectionRef) {
        financingObserver.unobserve(currentFinancingSectionRef);
      }
      if (currentEstimateSectionRef) {
        estimateObserver.unobserve(currentEstimateSectionRef);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle $visible={elementsVisible}>Residential Solar Solutions</HeroTitle>
          <HeroSubtitle $visible={elementsVisible}>Powering homes across California with clean, renewable energy.</HeroSubtitle>
          <CallToActionButton to="/contact" $visible={elementsVisible}>Get a Free Quote</CallToActionButton>
        </HeroContent>
      </HeroSection>
      
      {/* New Intro Section */}
      <IntroSection>
        <IntroContainer>
          <IntroContent>
            <IntroTitle>The #1 Source for Residential Solar Design, Installation, and Upgrades</IntroTitle>
            <IntroText>
              At Next Phase Electric, we take pride in being the ultimate source for <IntroHighlight>residential solar solutions</IntroHighlight> in <IntroHighlight>California</IntroHighlight>. Our commitment to excellence shines through in every aspect of our work—from meticulous design to flawless installation and thoughtful <IntroLink to="/services/residential-solar/system-upgrades">upgrades</IntroLink>. Explore the possibilities of harnessing solar power for your home with Next Phase Electric.
            </IntroText>
          </IntroContent>
          <IntroImageContainer>
            <IntroImage 
              src="/images/AdobeStock_187616108-overlay.jpeg" 
              alt="Solar panel installation with laptop" 
            />
          </IntroImageContainer>
        </IntroContainer>
      </IntroSection>
      
      <Section>
        <SectionTitle>Explore Our Residential Energy Solutions</SectionTitle>
        <SectionContent>
          <FeatureBoxContainer ref={featureCardsRef}>
            <FeatureBox $visible={cardsVisible[0]}>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Our Solar Plan and Installation Process</FeatureTitle>
              <FeatureText>
                Our solar journey begins with a comprehensive plan and installation process designed to deliver unmatched quality and efficiency. From the initial consultation to the final connection, <FeatureHighlight>our team</FeatureHighlight> ensures a seamless experience. We take your unique needs into account, providing a <FeatureHighlight>tailored solar solution</FeatureHighlight> that maximizes energy production and minimizes environmental impact.
              </FeatureText>
              <Link to="/services/residential-solar/our-process">
                <LearnMoreButton>Learn More</LearnMoreButton>
              </Link>
            </FeatureBox>
            
            <FeatureBox $visible={cardsVisible[1]}>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>System Upgrades and Expansions</FeatureTitle>
              <FeatureText>
                Already have a solar system? Enhance its performance and capacity with our expert system upgrades and expansions. Our team assesses your current setup, identifies areas for improvement, and implements upgrades that optimize your solar investment. Experience increased energy efficiency and a higher return on your solar system.
              </FeatureText>
              <Link to="/services/residential-solar/system-upgrades">
                <LearnMoreButton>Learn More</LearnMoreButton>
              </Link>
            </FeatureBox>
            
            <FeatureBox $visible={cardsVisible[2]}>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>EV Charger Installation</FeatureTitle>
              <FeatureText>
                Embrace the future of sustainable transportation with our EV charger installation services. Power your electric vehicle with clean energy from your solar system. Our experts seamlessly integrate EV chargers into your residential setup, offering a convenient and eco-friendly solution for your electric vehicle charging needs.
              </FeatureText>
              <Link to="/services/residential-solar/ev-chargers">
                <LearnMoreButton>Learn More</LearnMoreButton>
              </Link>
            </FeatureBox>
            
            <FeatureBox $visible={cardsVisible[3]}>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H12C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 9L21 12L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>Batteries & Residential Energy Storage</FeatureTitle>
              <FeatureText>
                Take control of your energy usage with our residential energy storage solutions. Our battery installations allow you to store excess solar energy, providing power during peak usage times or outages. Enhance your energy independence and reduce costly reliance on the grid with Next Phase Electric's cutting-edge battery technology.
              </FeatureText>
              <Link to="/services/residential-solar/batteries">
                <LearnMoreButton>Learn More</LearnMoreButton>
              </Link>
            </FeatureBox>
          </FeatureBoxContainer>
        </SectionContent>
      </Section>
      
      <SolarPlanSection ref={solarPlanRef} $visible={solarPlanVisible}>
        <SolarPlanContainer>
          <SolarPlanIconContainer>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SolarPlanIconContainer>
          <SolarPlanContent>
            <SolarPlanTitle>Let's Form Your Next Solar Plan</SolarPlanTitle>
            <SolarPlanText>
              Ready to embark on your solar journey? Let Next Phase Electric guide you through the process. From initial design to installation and beyond, our team is dedicated to delivering exceptional residential solar solutions tailored to your unique requirements.
            </SolarPlanText>
            <SolarPlanButton to="/contact">Let's Get Started</SolarPlanButton>
          </SolarPlanContent>
        </SolarPlanContainer>
      </SolarPlanSection>
      
      <ExpertSection ref={expertSectionRef} $visible={expertSectionVisible}>
        <ExpertContainer>
          <ExpertContent>
            <ExpertTitle>Join Forces With an Energy Expert Motivated By Your Satisfaction</ExpertTitle>
            <ExpertText>
              Choosing Next Phase Electric means joining forces with an energy expert who is motivated by your satisfaction. Our commitment to quality, integrity, and customer happiness sets us apart. Experience peace of mind knowing that your residential solar project is in the hands of dedicated professionals passionate about delivering excellence.
            </ExpertText>
          </ExpertContent>
        </ExpertContainer>
      </ExpertSection>
      
      <FinancingSection ref={financingSectionRef} $visible={financingSectionVisible}>
        <FinancingContainer>
          <FinancingContent>
            <FinancingTitle>Take Advantage of Versatile Financing, From Residential Solar Leases to PPAs</FinancingTitle>
            <FinancingText>
              Financial considerations should never stand in the way of going solar. At Next Phase Electric, we offer versatile financing options, including residential solar leases and Power Purchase Agreements (PPAs). Our goal is to make solar energy accessible to every homeowner, ensuring a smooth and affordable transition to cleaner, more sustainable power.
            </FinancingText>
          </FinancingContent>
        </FinancingContainer>
      </FinancingSection>
      
      <EstimateSection ref={estimateSectionRef} $visible={estimateSectionVisible}>
        <EstimateContainer>
          <EstimateContent>
            <EstimateTitle>Get a Free Estimate Today</EstimateTitle>
            <EstimateText>
              Ready to take the next step toward energy efficiency and quality electrical solutions? Contact us for a free estimate, and let's light up the path to a brighter, more cost-effective future together.
            </EstimateText>
            <ContactForm 
              onSubmit={(formData) => {
                console.log('Form submitted:', formData);
                // Add your form submission logic here
              }}
            />
          </EstimateContent>
        </EstimateContainer>
      </EstimateSection>
    </>
  );
};

export default ResidentialSolar; 