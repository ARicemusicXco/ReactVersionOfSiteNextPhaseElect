import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.1rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ServiceIcon = styled.span`
  font-size: 1.5rem;
`;

const LocationsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
  columns: 2;
  column-gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    columns: 1;
  }
`;

const LocationItem = styled.li`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  break-inside: avoid;

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const CTAButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const serviceAreas = {
  residential: [
    "Bakersfield",
    "Shafter",
    "Wasco",
    "Delano",
    "McFarland",
    "Arvin",
    "Lamont",
    "Tehachapi",
    "California City",
    "Taft",
    "Maricopa",
    "Frazier Park",
    "Lake Isabella"
  ],
  commercial: [
    "Kern County",
    "Kings County",
    "Tulare County",
    "San Luis Obispo County",
    "Santa Barbara County",
    "Ventura County",
    "Los Angeles County"
  ],
  agricultural: [
    "Central Valley",
    "San Joaquin Valley",
    "Kern County Farmlands",
    "Kings County Agricultural Areas",
    "Tulare County Farmlands"
  ]
};

const AreasWeServe: React.FC = () => {
  return (
    <Container>
      <PageTitle>Areas We Serve</PageTitle>
      
      <Section>
        <Text>
          Next Phase Electric provides comprehensive electrical and solar services throughout 
          California's Central Valley and beyond. Our team of experienced professionals is ready 
          to serve residential, commercial, and agricultural clients in multiple counties.
        </Text>
      </Section>

      <Section>
        <ServicesGrid>
          <ServiceCard>
            <ServiceTitle>
              <ServiceIcon>🏠</ServiceIcon>
              Residential Service Areas
            </ServiceTitle>
            <Text>
              We provide residential electrical and solar services to homes throughout Kern County 
              and surrounding areas.
            </Text>
            <LocationsList>
              {serviceAreas.residential.map((location) => (
                <LocationItem key={location}>{location}</LocationItem>
              ))}
            </LocationsList>
          </ServiceCard>

          <ServiceCard>
            <ServiceTitle>
              <ServiceIcon>🏢</ServiceIcon>
              Commercial Service Areas
            </ServiceTitle>
            <Text>
              Our commercial electrical services extend throughout multiple counties in Central 
              California.
            </Text>
            <LocationsList>
              {serviceAreas.commercial.map((location) => (
                <LocationItem key={location}>{location}</LocationItem>
              ))}
            </LocationsList>
          </ServiceCard>

          <ServiceCard>
            <ServiceTitle>
              <ServiceIcon>🌾</ServiceIcon>
              Agricultural Service Areas
            </ServiceTitle>
            <Text>
              We serve agricultural businesses throughout California's major farming regions.
            </Text>
            <LocationsList>
              {serviceAreas.agricultural.map((location) => (
                <LocationItem key={location}>{location}</LocationItem>
              ))}
            </LocationsList>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      <Section>
        <SectionTitle>Service Coverage</SectionTitle>
        <Text>
          Our headquarters in Bakersfield allows us to efficiently serve clients throughout the 
          Central Valley. We maintain a large fleet of service vehicles and employ local technicians 
          to ensure prompt response times and reliable service across our coverage area.
        </Text>
        <Text>
          For commercial and agricultural projects, we're equipped to handle jobs of any size 
          throughout California. Our team has extensive experience working in various environments 
          and can adapt to meet the specific needs of each location.
        </Text>
      </Section>

      <CTASection>
        <Text>
          Not sure if we serve your area? Contact us to discuss your project needs.
        </Text>
        <CTAButton onClick={() => window.location.href = '/contact'}>
          Contact Us Today
        </CTAButton>
      </CTASection>
    </Container>
  );
};

export default AreasWeServe; 