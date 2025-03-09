import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  min-height: 60vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1400px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 4rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;

const ErrorDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const HomeButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

const NotFoundImage = styled.div`
  width: 300px;
  height: 200px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background-image: url('/NextPhaseElectMediaLibrary/AdobeStock_101750714.jpeg');
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 250px;
    height: 170px;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundImage />
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </ErrorDescription>
      <HomeButton to="/">Back to Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound; 