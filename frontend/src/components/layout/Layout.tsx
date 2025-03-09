import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main<{ $isHomePage: boolean }>`
  flex: 1;
  width: 100%;
  padding: ${({ $isHomePage }) => $isHomePage ? '0' : 'inherit'};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ $isHomePage, theme }) => $isHomePage ? '0' : `${theme.spacing.lg} 0`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ $isHomePage, theme }) => $isHomePage ? '0' : `${theme.spacing.lg} ${theme.spacing.md}`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ $isHomePage, theme }) => $isHomePage ? '0' : `${theme.spacing.md} ${theme.spacing.sm}`};
  }
`;

const MainContent = styled.div<{ $isHomePage: boolean }>`
  max-width: ${({ $isHomePage }) => $isHomePage ? '100%' : '1200px'};
  width: 100%;
  margin: 0 auto;
  padding: ${({ $isHomePage }) => $isHomePage ? '0' : 'inherit'};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ $isHomePage }) => $isHomePage ? '100%' : '1400px'};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServicePage = location.pathname.includes('/services/');
  
  return (
    <LayoutContainer>
      <Header isTransparent={false} />
      <Main $isHomePage={isHomePage || isServicePage}>
        <MainContent $isHomePage={isHomePage || isServicePage}>{children}</MainContent>
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout; 