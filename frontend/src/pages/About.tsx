import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1400px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HeroSection = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/NextPhaseElectMediaLibrary/AdobeStock_187018505.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
`;

const HeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

const HeroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform ${({ theme }) => theme.transitions.medium}, box-shadow ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const Avatar = styled.div<{ $image: string }>`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
`;

const MemberName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MemberRole = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const MemberBio = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const ValuesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>About Next Phase Electric</HeroTitle>
          <HeroText>
            California's #1 source for energy solutions
          </HeroText>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <AboutText>
          At Next Phase Electric, we're dedicated to providing cost-effective energy solutions for homes, roofs, and landscaping firms across California. Our commitment extends beyond mere installations—we focus on delivering comprehensive solutions tailored to meet the unique needs of each homeowner and business.
        </AboutText>
        <AboutText>
          Founded on principles of integrity, quality, and an unwavering commitment to customer satisfaction, we prioritize delivering not just projects, but optimal solutions for our clients. Our transparent communication and dedication to honesty set us apart in the industry.
        </AboutText>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesSection>
          <ValueCard>
            <ValueIcon>✓</ValueIcon>
            <ValueTitle>Integrity</ValueTitle>
            <ValueDescription>
              We conduct our business with honesty, transparency, and ethical practices in every interaction.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>★</ValueIcon>
            <ValueTitle>Quality</ValueTitle>
            <ValueDescription>
              We deliver exceptional workmanship and use only the highest quality materials and equipment.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>♥</ValueIcon>
            <ValueTitle>Customer Satisfaction</ValueTitle>
            <ValueDescription>
              We prioritize our customers' needs and strive to exceed their expectations in every project.
            </ValueDescription>
          </ValueCard>
        </ValuesSection>
      </Section>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <AboutText>
          Our team of experienced professionals is dedicated to providing the highest quality service and expertise in the electrical and energy industry.
        </AboutText>

        <TeamGrid>
          <TeamMember>
            <Avatar $image="/NextPhaseElectMediaLibrary/TeamImage1.jpg" />
            <MemberName>John Davis</MemberName>
            <MemberRole>Founder & CEO</MemberRole>
            <MemberBio>
              John has over 15 years of experience in the electrical and renewable energy industry.
            </MemberBio>
          </TeamMember>

          <TeamMember>
            <Avatar $image="/NextPhaseElectMediaLibrary/TeamImage2.jpg" />
            <MemberName>Sarah Johnson</MemberName>
            <MemberRole>Operations Manager</MemberRole>
            <MemberBio>
              Sarah oversees all operations and ensures projects are completed efficiently and to the highest standards.
            </MemberBio>
          </TeamMember>

          <TeamMember>
            <Avatar $image="/NextPhaseElectMediaLibrary/TeamImage3.jpg" />
            <MemberName>Michael Rodriguez</MemberName>
            <MemberRole>Lead Electrician</MemberRole>
            <MemberBio>
              Michael specializes in complex electrical systems and has extensive experience in both residential and commercial projects.
            </MemberBio>
          </TeamMember>

          <TeamMember>
            <Avatar $image="/NextPhaseElectMediaLibrary/TeamImage5.jpg" />
            <MemberName>Emily Chen</MemberName>
            <MemberRole>Solar Energy Specialist</MemberRole>
            <MemberBio>
              Emily is an expert in solar energy systems and helps clients find the most efficient and cost-effective solutions.
            </MemberBio>
          </TeamMember>
        </TeamGrid>
      </Section>
    </AboutContainer>
  );
};

export default About; 