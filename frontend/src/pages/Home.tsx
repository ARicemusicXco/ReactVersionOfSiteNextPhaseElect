import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IntegratedHeader from '../components/home/IntegratedHeader';

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

const ServiceCard = styled.div`
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
  width: 90%;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => `${theme.colors.primary}20`};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: height ${({ theme }) => theme.transitions.medium};
  }
  
  &:hover:before {
    height: 100%;
  }
`;

const ServiceIcon = styled.img`
  width: 58px;
  height: 58px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform ${({ theme }) => theme.transitions.medium};
  
  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceTitle = styled.h3`
  font-size: calc(${({ theme }) => theme.fontSizes.large} * 0.9);
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 36px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
  flex-grow: 1;
  font-size: calc(${({ theme }) => theme.fontSizes.medium} * 0.9);
`;

const ServiceLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  font-size: calc(${({ theme }) => theme.fontSizes.medium} * 0.9);
  
  &:hover {
    background-color: rgba(227, 27, 35, 0.1);
    text-decoration: none;
    padding-left: ${({ theme }) => theme.spacing.md};
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
  background-color: white;
  text-align: center;
  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/NextPhaseElectMediaLibrary/AdobeStock_195146171.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const ContactFormSection = styled(Section)`
  background-color: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: 1;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Home: React.FC = () => {
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
        <SectionTitle>Explore Our Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_197235973.jpeg" alt="Home Energy" />
            <ServiceTitle>Home Energy</ServiceTitle>
            <ServiceDescription>
              Discover a new era of energy efficiency for your home with our residential solutions. From solar plans and installations to system upgrades and energy storage, we provide comprehensive services designed to make your home more sustainable and cost-effective.
            </ServiceDescription>
            <ServiceLink to="/services/home-energy">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_164972173.jpeg" alt="Commercial Electric" />
            <ServiceTitle>Commercial Electric</ServiceTitle>
            <ServiceDescription>
              Navigate the complex landscape of commercial electrical needs with Next Phase Electric. Our services cover everything from electrical remodeling to solar solutions, ensuring that businesses receive tailored, efficient, and reliable electrical systems.
            </ServiceDescription>
            <ServiceLink to="/services/commercial-electric">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_214337983.jpeg" alt="Oil & Gas" />
            <ServiceTitle>Oil & Gas</ServiceTitle>
            <ServiceDescription>
              Next Phase Electric specializes in meeting the unique electrical requirements of the oil & gas industry. Our experienced team of oilfield electricians ensures that your operations are powered with precision, safety, and efficiency.
            </ServiceDescription>
            <ServiceLink to="/services/oil-gas">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon src="/NextPhaseElectMediaLibrary/AdobeStock_216576096.jpeg" alt="Agricultural" />
            <ServiceTitle>Agricultural</ServiceTitle>
            <ServiceDescription>
              For agricultural facilities across California, we offer specialized electrical services. From solar farms to general electrical needs, Next Phase Electric is your single-source agricultural electrical contractor.
            </ServiceDescription>
            <ServiceLink to="/services/agricultural">Learn More</ServiceLink>
          </ServiceCard>

          <ServiceCard>
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
        <SectionTitle>Integrity, Quality, and a Commitment to Satisfaction</SectionTitle>
        <IntroText>
          Next Phase Electric is founded on principles of integrity, quality, and an unwavering commitment to customer satisfaction. We prioritize delivering not just projects, but optimal solutions for our clients. Our transparent communication and dedication to honesty set us apart in the industry.
        </IntroText>
        <Button as={Link} to="/about" style={{ marginTop: '2rem' }}>Learn More</Button>
      </ValuesSection>

      <ContactFormSection>
        <SectionTitle>Get a No Obligation Quote</SectionTitle>
        <Form>
          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">First Name*</Label>
              <Input type="text" id="firstName" name="firstName" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">Last Name*</Label>
              <Input type="text" id="lastName" name="lastName" required />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label htmlFor="phone">Phone*</Label>
              <Input type="tel" id="phone" name="phone" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email*</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input type="text" id="zipCode" name="zipCode" />
          </FormGroup>
          <FormGroup>
            <Label>I'm Interested In:</Label>
            <CheckboxGroup>
              <CheckboxLabel>
                <Checkbox type="checkbox" name="interests" value="solar" />
                Solar
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" name="interests" value="roofing" />
                Roofing
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" name="interests" value="landscape" />
                Landscape
              </CheckboxLabel>
            </CheckboxGroup>
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </ContactFormSection>
    </HomeContainer>
  );
};

export default Home; 