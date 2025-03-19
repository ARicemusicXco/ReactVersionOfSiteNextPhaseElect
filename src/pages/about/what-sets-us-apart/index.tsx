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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: white;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const StatCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
`;

const WhatSetsUsApart: React.FC = () => {
  return (
    <Container>
      <PageTitle>What Sets Us Apart</PageTitle>
      
      <Section>
        <Text>
          At Next Phase Electric, we pride ourselves on delivering exceptional service and innovative 
          solutions in electrical and solar energy. Our commitment to excellence, coupled with our 
          experienced team and customer-first approach, makes us the preferred choice for residential 
          and commercial electrical needs.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Our Core Values</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <IconContainer>⚡</IconContainer>
            <FeatureTitle>Expertise</FeatureTitle>
            <FeatureText>
              Our team consists of highly trained and certified professionals with years of experience 
              in electrical and solar installations. We stay current with the latest industry 
              developments and technologies.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>🌟</IconContainer>
            <FeatureTitle>Quality</FeatureTitle>
            <FeatureText>
              We use only the highest quality materials and equipment, backed by industry-leading 
              warranties. Our workmanship is guaranteed to meet or exceed industry standards.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>🤝</IconContainer>
            <FeatureTitle>Customer Service</FeatureTitle>
            <FeatureText>
              We prioritize clear communication and exceptional service throughout every project. 
              Our team is always available to answer questions and provide support.
            </FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      <Section>
        <SectionTitle>Our Impact</SectionTitle>
        <StatsGrid>
          <StatCard>
            <StatNumber>1000+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>98%</StatNumber>
            <StatLabel>Customer Satisfaction</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>25+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Emergency Service</StatLabel>
          </StatCard>
        </StatsGrid>
      </Section>

      <Section>
        <SectionTitle>Our Commitment</SectionTitle>
        <Text>
          We are committed to providing sustainable energy solutions that help our clients reduce 
          their carbon footprint while saving money. Our team works closely with each client to 
          understand their specific needs and design customized solutions that deliver optimal results.
        </Text>
        <Text>
          Whether it's a residential solar installation, commercial electrical project, or emergency 
          repair, we approach every job with the same level of dedication and professionalism. Our 
          goal is not just to meet expectations, but to exceed them consistently.
        </Text>
      </Section>
    </Container>
  );
};

export default WhatSetsUsApart; 