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
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.1rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const BenefitCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: white;
  font-size: 1.5rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const benefits = [
  {
    icon: "💰",
    title: "Competitive Pay",
    description: "Industry-leading compensation packages with regular performance reviews and raises."
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    description: "Comprehensive medical, dental, and vision coverage for you and your family."
  },
  {
    icon: "💪",
    title: "401(k) Match",
    description: "Generous 401(k) matching program to help secure your financial future."
  },
  {
    icon: "📚",
    title: "Training & Growth",
    description: "Ongoing professional development and certification opportunities."
  },
  {
    icon: "⏰",
    title: "Work-Life Balance",
    description: "Flexible scheduling options and paid time off."
  },
  {
    icon: "🎯",
    title: "Career Growth",
    description: "Clear career paths and opportunities for advancement."
  }
];

const Careers: React.FC = () => {
  return (
    <Container>
      <PageTitle>Join Our Team</PageTitle>
      
      <Section>
        <Text>
          At Next Phase Electric, we're more than just an electrical and solar company – we're a team 
          of dedicated professionals working together to create a sustainable future. We're always 
          looking for talented individuals who share our passion for excellence and innovation.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Why Work With Us?</SectionTitle>
        <BenefitsGrid>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title}>
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <Text>{benefit.description}</Text>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>

      <Section>
        <SectionTitle>Open Positions</SectionTitle>
        <Text>
          No positions are currently available at this time. Please check back later for future opportunities or contact us to submit your resume for consideration.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Our Culture</SectionTitle>
        <Text>
          We foster a culture of innovation, collaboration, and continuous learning. Our team members 
          enjoy a supportive work environment where their ideas are valued and their growth is 
          encouraged. We believe in maintaining a healthy work-life balance and celebrating our 
          successes together.
        </Text>
        <Text>
          As a growing company in the renewable energy sector, we offer excellent opportunities for 
          career advancement and professional development. We invest in our team's success through 
          ongoing training, mentorship programs, and clear career progression paths.
        </Text>
      </Section>
    </Container>
  );
};

export default Careers; 