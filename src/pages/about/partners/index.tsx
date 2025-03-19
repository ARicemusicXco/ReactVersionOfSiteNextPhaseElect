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

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PartnerCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PartnerLogo = styled.img`
  width: 200px;
  height: 100px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PartnerName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const PartnerDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const TestimonialSection = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TestimonialText = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.8;
  position: relative;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  &:before, &:after {
    content: '"';
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    opacity: 0.2;
  }

  &:before {
    left: 0;
    top: -20px;
  }

  &:after {
    right: 0;
    bottom: -60px;
  }
`;

const TestimonialAuthor = styled.div`
  text-align: right;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const partners = [
  {
    name: "SunPower",
    logo: "/NextPhaseElectMediaLibrary/partner-logos/sunpower.png",
    description: "Leading manufacturer of high-efficiency solar panels and complete solar solutions for homes and businesses."
  },
  {
    name: "Tesla",
    logo: "/NextPhaseElectMediaLibrary/partner-logos/tesla.png",
    description: "Revolutionary energy storage solutions and electric vehicle charging systems."
  },
  {
    name: "Enphase",
    logo: "/NextPhaseElectMediaLibrary/partner-logos/enphase.png",
    description: "Advanced microinverter technology for improved solar system performance and monitoring."
  },
  {
    name: "LG",
    logo: "/NextPhaseElectMediaLibrary/partner-logos/lg.png",
    description: "Premium solar panels and energy solutions with industry-leading efficiency and reliability."
  }
];

const Partners: React.FC = () => {
  return (
    <Container>
      <PageTitle>Our Partners</PageTitle>
      
      <Section>
        <Text>
          At Next Phase Electric, we partner with industry-leading manufacturers and suppliers to ensure 
          our clients receive the highest quality products and solutions. Our strategic partnerships 
          allow us to offer cutting-edge technology, competitive pricing, and reliable support.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Featured Partners</SectionTitle>
        <PartnersGrid>
          {partners.map((partner) => (
            <PartnerCard key={partner.name}>
              <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} />
              <PartnerName>{partner.name}</PartnerName>
              <PartnerDescription>{partner.description}</PartnerDescription>
            </PartnerCard>
          ))}
        </PartnersGrid>
      </Section>

      <Section>
        <SectionTitle>Partner Testimonials</SectionTitle>
        <TestimonialSection>
          <TestimonialText>
            Next Phase Electric has consistently demonstrated their commitment to excellence and 
            customer satisfaction. Their team's expertise in solar installations and electrical 
            services makes them one of our most valued partners in the region.
          </TestimonialText>
          <TestimonialAuthor>
            - John Smith, Regional Director, SunPower
          </TestimonialAuthor>
        </TestimonialSection>
        <TestimonialSection>
          <TestimonialText>
            The dedication to quality and attention to detail shown by Next Phase Electric aligns 
            perfectly with our values. They have proven to be an exceptional partner in delivering 
            advanced energy solutions to their customers.
          </TestimonialText>
          <TestimonialAuthor>
            - Sarah Johnson, Partnership Manager, Tesla
          </TestimonialAuthor>
        </TestimonialSection>
      </Section>

      <Section>
        <SectionTitle>Why Partner With Us?</SectionTitle>
        <Text>
          Our commitment to excellence and customer satisfaction has made us a preferred partner for 
          leading manufacturers and suppliers in the industry. We maintain high standards in 
          installation quality, customer service, and after-sales support.
        </Text>
        <Text>
          Through our partnerships, we can offer our clients:
        </Text>
        <ul>
          <li>Access to the latest technology and innovations</li>
          <li>Competitive pricing and exclusive offers</li>
          <li>Extended warranties and comprehensive support</li>
          <li>Certified installation and maintenance services</li>
        </ul>
      </Section>
    </Container>
  );
};

export default Partners; 