import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

// New styles for dynamic content sections
const DynamicServiceSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const LocationCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const LocationCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const LocationCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const LocationCardText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1rem;
`;

const LocationCardLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: underline;
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

// Locations for dynamic pages
const locations = [
  { name: 'Delano', slug: 'delano' },
  { name: 'Bakersfield', slug: 'bakersfield' },
  { name: 'Maricopa', slug: 'maricopa' },
  { name: 'Ridgecrest', slug: 'ridgecrest' },
  { name: 'Shafter', slug: 'shafter' },
  { name: 'Taft', slug: 'taft' },
  { name: 'Tehachapi', slug: 'tehachapi' },
  { name: 'Wasco', slug: 'wasco' },
  { name: 'Oildale', slug: 'oildale' },
  { name: 'Rosamond', slug: 'rosamond' },
  { name: 'California City', slug: 'california-city' },
  { name: 'Mojave', slug: 'mojave' },
  { name: 'Frazier Park', slug: 'frazier-park' },
  { name: 'Lake Isabella', slug: 'lake-isabella' }
];

// Service types for dynamic pages
const serviceTypes = [
  { 
    name: 'Backup Battery', 
    slug: 'backup-battery', 
    icon: '🔋',
    description: 'Reliable backup power solutions to keep your home running during outages and help you save on energy costs.'
  },
  { 
    name: 'True-Up Billing', 
    slug: 'trueup', 
    icon: '📊',
    description: 'Understand and optimize your solar True-Up billing to maximize savings and get the most from your solar investment.'
  },
  { 
    name: 'Home Energy', 
    slug: 'home-energy', 
    icon: '🏠',
    description: 'Comprehensive home energy solutions including audits, efficiency upgrades, and renewable energy systems.'
  },
  { 
    name: 'Energy Saving', 
    slug: 'energy-saving', 
    icon: '💡',
    description: 'Effective strategies to reduce your energy consumption and lower your utility bills while maintaining comfort.'
  },
  { 
    name: 'Solar Installation', 
    slug: 'solar-installer', 
    icon: '☀️',
    description: 'Professional solar panel installation with quality components and expert workmanship for optimal performance.'
  },
  { 
    name: 'Solar Contracting', 
    slug: 'solar-contractor', 
    icon: '🔧',
    description: 'Full-service solar contracting from consultation and design to installation, permitting, and ongoing support.'
  },
  { 
    name: 'Solar PG&E', 
    slug: 'solar-pge', 
    icon: '⚡',
    description: 'Navigate PG&E solar programs, interconnection processes, and maximize benefits under current utility policies.'
  },
  { 
    name: 'Sunrun Alternatives', 
    slug: 'sunrun', 
    icon: '🌞',
    description: 'Local alternatives to Sunrun with competitive pricing, personalized service, and flexible financing options.'
  },
  { 
    name: 'Sanova Alternatives', 
    slug: 'sanova', 
    icon: '🏭',
    description: 'Local alternatives to Sanova with comprehensive energy services, personalized approach, and quality workmanship.'
  },
  { 
    name: 'Energy Discounts', 
    slug: 'energy-discount', 
    icon: '💰',
    description: 'Access utility discounts, rebates, and incentives to reduce energy costs for your home or business.'
  },
  { 
    name: 'CARE Program', 
    slug: 'care', 
    icon: '📝',
    description: 'Get assistance with the California Alternate Rates for Energy (CARE) program to reduce your utility bills.'
  },
  { 
    name: 'Electric Vehicle', 
    slug: 'electric-vehicle', 
    icon: '🚗',
    description: 'Comprehensive electric vehicle solutions including home charging installation, electrical upgrades, and solar integration.'
  },
  { 
    name: 'EV Charging', 
    slug: 'ev-charging', 
    icon: '🔌',
    description: 'Professional installation of residential and commercial EV charging stations for all electric vehicle models.'
  },
  { 
    name: 'Solar Tax Credits', 
    slug: 'solar-tax-credits', 
    icon: '💵',
    description: 'Maximize your solar investment by understanding and claiming federal, state, and local solar incentives and tax credits.'
  },
  { 
    name: 'SunPower Alternatives', 
    slug: 'sunpower', 
    icon: '🌟',
    description: 'High-efficiency solar solutions that rival SunPower with competitive pricing, local expertise, and personalized service.'
  }
];

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

      {/* Dynamic Service Sections */}
      {serviceTypes.map((service) => (
        <DynamicServiceSection key={service.slug}>
          <SectionTitle>
            <ServiceIcon>{service.icon}</ServiceIcon> {service.name} Solutions
          </SectionTitle>
          <Text>
            Next Phase Electric offers {service.name.toLowerCase()} solutions throughout Kern County and surrounding areas. 
            {service.description} Explore our {service.name.toLowerCase()} services in your area below.
          </Text>
          
          <LocationCardsGrid>
            {locations.map((location) => (
              <LocationCard key={`${service.slug}-${location.slug}`}>
                <LocationCardTitle>{location.name}</LocationCardTitle>
                <LocationCardText>
                  Learn more about our {service.name.toLowerCase()} solutions in {location.name}. 
                  We provide specialized services tailored to the specific needs of {location.name} residents.
                </LocationCardText>
                <LocationCardLink to={`/${service.slug}-${location.slug}`}>
                  View {service.name} Services in {location.name} →
                </LocationCardLink>
              </LocationCard>
            ))}
          </LocationCardsGrid>
        </DynamicServiceSection>
      ))}

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