import React from 'react';
import styled from 'styled-components';

const FinancingContainer = styled.div`
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

const FinancingOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FinancingCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  line-height: 1.6;

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
  }
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
  margin-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Financing: React.FC = () => {
  return (
    <FinancingContainer>
      <PageTitle>Solar Financing Options</PageTitle>
      
      <Section>
        <Text>
          At Next Phase Electric, we understand that investing in solar energy is a significant decision. 
          That's why we offer various financing options to make solar power accessible to everyone. 
          Our financing solutions are designed to fit different budgets and preferences, ensuring you can 
          start saving on energy costs while contributing to a sustainable future.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Available Financing Options</SectionTitle>
        <FinancingOptionsGrid>
          <FinancingCard>
            <CardTitle>Cash Purchase</CardTitle>
            <List>
              <ListItem>Maximum long-term savings</ListItem>
              <ListItem>Immediate return on investment</ListItem>
              <ListItem>Full ownership of the system</ListItem>
              <ListItem>Eligible for all tax incentives and rebates</ListItem>
              <ListItem>No monthly payments or interest</ListItem>
            </List>
          </FinancingCard>

          <FinancingCard>
            <CardTitle>Solar Loan</CardTitle>
            <List>
              <ListItem>Low monthly payments</ListItem>
              <ListItem>Fixed interest rates</ListItem>
              <ListItem>Terms from 5 to 20 years</ListItem>
              <ListItem>No down payment options available</ListItem>
              <ListItem>Keep tax incentives and rebates</ListItem>
            </List>
          </FinancingCard>

          <FinancingCard>
            <CardTitle>Solar Lease/PPA</CardTitle>
            <List>
              <ListItem>No upfront costs</ListItem>
              <ListItem>Predictable monthly payments</ListItem>
              <ListItem>Includes maintenance and monitoring</ListItem>
              <ListItem>Performance guarantee</ListItem>
              <ListItem>Option to purchase system later</ListItem>
            </List>
          </FinancingCard>
        </FinancingOptionsGrid>
      </Section>

      <Section>
        <SectionTitle>Why Finance With Us?</SectionTitle>
        <List>
          <ListItem>Competitive interest rates and flexible terms</ListItem>
          <ListItem>Simple application process</ListItem>
          <ListItem>Quick approval decisions</ListItem>
          <ListItem>Expert guidance throughout the process</ListItem>
          <ListItem>Transparent terms and no hidden fees</ListItem>
        </List>
        <CTAButton onClick={() => window.location.href = '/contact'}>
          Contact Us to Learn More
        </CTAButton>
      </Section>
    </FinancingContainer>
  );
};

export default Financing; 