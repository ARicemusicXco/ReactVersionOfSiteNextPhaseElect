import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  margin-top: auto;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 100%;
  }
`;

const FooterHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: white;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: #cccccc;
  transition: color ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: #cccccc;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #cccccc;
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1400px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
  }
`;

const LogoContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>About Us</FooterHeading>
          <FooterText>
            Next Phase Electric is California's #1 source for energy solutions. From homeowners interested in cost-effective solar panels to business owners looking for an electrical expert, we can help.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Services</FooterHeading>
          <FooterLink to="/services/home-energy">Home Energy</FooterLink>
          <FooterLink to="/services/oil-gas">Oil & Gas</FooterLink>
          <FooterLink to="/services/roofing">Roofing</FooterLink>
          <FooterLink to="/services/landscape">Landscape</FooterLink>
          <FooterLink to="/services/commercial-electric">Commercial Electric</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Areas We Serve</FooterHeading>
          <FooterLink to="/areas/bakersfield">Bakersfield</FooterLink>
          <FooterLink to="/areas/fresno">Fresno</FooterLink>
          <FooterLink to="/areas/visalia">Visalia</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Get in Touch</FooterHeading>
          <FooterText>Address: 5409 Aldrin Ct, Bakersfield, CA 93313</FooterText>
          <FooterText>Phone: 661.878.7576</FooterText>
          <FooterText>Email: info@nextphaseelect.com</FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        Website by Abstrakt Marketing Group © 2025
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 