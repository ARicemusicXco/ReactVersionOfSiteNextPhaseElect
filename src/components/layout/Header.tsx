import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderContainerProps {
  $isTransparent?: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1400px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 35px;
  }
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-left: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs};
  font-size: 1.5rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem; /* 25% smaller than 1.5rem */
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface NavLinkProps {
  $isTransparent?: boolean;
  to?: string;
  isButton?: boolean;
}

const NavLink = styled(({ isButton, ...props }) => 
  isButton ? <button {...props} /> : <Link {...props} />
)<NavLinkProps>`
  color: #222;
  font-weight: 600;
  font-size: 1rem;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  display: flex;
  align-items: center;
  text-shadow: none;
  background: none;
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

interface DropdownIndicatorProps {
  $isTransparent?: boolean;
}

const DropdownIndicator = styled.span<DropdownIndicatorProps>`
  font-size: 0.7rem;
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: inherit;
  transition: transform 0.2s ease-in-out;
  
  ${NavItem}:hover & {
    transform: rotate(180deg);
  }
`;

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  z-index: 101;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  margin-top: ${({ theme }) => theme.spacing.xs};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-10px')});
  transition: opacity ${({ theme }) => theme.transitions.fast}, 
              transform ${({ theme }) => theme.transitions.fast};
`;

const ServicesDropdownContainer = styled(DropdownContainer)`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 800px;
  padding: ${({ theme }) => theme.spacing.md};
  left: 50%;
  transform: translateX(-50%) translateY(${({ $isOpen }) => ($isOpen ? '0' : '-10px')});
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 700px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 100%;
    left: 0;
    transform: translateX(0) translateY(${({ $isOpen }) => ($isOpen ? '0' : '-10px')});
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightGray};
    outline: none;
  }
`;

const DropdownSection = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const DropdownSectionTitle = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropdownSectionIcon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const ServicesDropdownColumns = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const ServicesDropdownColumn = styled.div`
  flex: 1;
`;

const AdditionalServicesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const AdditionalServiceLink = styled(DropdownLink)`
  display: flex;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
`;

interface MobileMenuButtonProps {
  $isTransparent?: boolean;
}

const MobileMenuButton = styled.button<MobileMenuButtonProps>`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: #222;
  cursor: pointer;
  text-shadow: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 99;
  max-height: 80vh;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const MobileNavSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MobileNavSubMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const MobileNavButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileSubNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.xl}`};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;

interface HeaderProps {
  isTransparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  
  // Desktop dropdown states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  
  // Refs for dropdown navigation
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Timeout refs to track and clear dropdown close timers
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Handle services dropdown
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };
  
  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200); // 200ms delay before closing (reduced from 300ms)
  };
  
  // Handle resources dropdown
  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setResourcesOpen(true);
  };
  
  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 200); // 200ms delay before closing (reduced from 300ms)
  };
  
  // Handle about dropdown
  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    setAboutOpen(true);
  };
  
  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 200); // 200ms delay before closing (reduced from 300ms)
  };
  
  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current && 
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      
      if (
        resourcesRef.current && 
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
      
      if (
        aboutRef.current && 
        !aboutRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      
      // Clear any existing timeouts on unmount
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    };
  }, []);
  
  // Handle keyboard navigation
  const handleKeyDown = (
    e: React.KeyboardEvent, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean
  ) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(!isOpen);
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <HeaderContainer $isTransparent={isTransparent}>
      <HeaderContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LogoContainer to="/">
            <LogoImage src="/NextPhaseElectMediaLibrary/SiteLogoInTitle.png" alt="NextPhaseElect Logo" />
          </LogoContainer>
          <PhoneLink href="tel:+16618787576">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            661.878.7576
          </PhoneLink>
        </div>
        <Nav>
          {/* Services Dropdown */}
          <NavItem 
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <NavLink 
              isButton={true}
              onClick={() => setServicesOpen(!servicesOpen)}
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, setServicesOpen, servicesOpen)}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              $isTransparent={isTransparent}
            >
              Services
              <DropdownIndicator $isTransparent={isTransparent}>▼</DropdownIndicator>
            </NavLink>
            <ServicesDropdownContainer 
              $isOpen={servicesOpen}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <ServicesDropdownColumns>
                {/* Residential Solar Column */}
                <ServicesDropdownColumn>
                  <DropdownSectionTitle to="/services/residential-solar">
                    <DropdownSectionIcon>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </DropdownSectionIcon>
                    Residential Solar
                  </DropdownSectionTitle>
                  <DropdownLink to="/services/residential-solar/our-process">Our Process</DropdownLink>
                  <DropdownLink to="/services/residential-solar/system-upgrades">System Upgrades</DropdownLink>
                  <DropdownLink to="/services/residential-solar/ev-chargers">EV Chargers</DropdownLink>
                  <DropdownLink to="/services/residential-solar/batteries">Batteries</DropdownLink>
                </ServicesDropdownColumn>
                
                {/* Commercial Electric Column */}
                <ServicesDropdownColumn>
                  <DropdownSectionTitle to="/services/commercial-electric">
                    <DropdownSectionIcon>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 3H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 3L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </DropdownSectionIcon>
                    Commercial Electric
                  </DropdownSectionTitle>
                  <DropdownLink to="/services/commercial-electric/our-process">Our Process</DropdownLink>
                  <DropdownLink to="/services/commercial-electric/new-construction">New Construction</DropdownLink>
                  <DropdownLink to="/services/commercial-electric/solar">Solar</DropdownLink>
                  <DropdownLink to="/services/commercial-electric/remodels">Remodels</DropdownLink>
                </ServicesDropdownColumn>
              </ServicesDropdownColumns>
              
              {/* Additional Services */}
              <AdditionalServicesSection>
                <AdditionalServiceLink to="/services/oil-gas">
                  <DropdownSectionIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </DropdownSectionIcon>
                  Oil & Gas
                </AdditionalServiceLink>
                <AdditionalServiceLink to="/services/agriculture">
                  <DropdownSectionIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </DropdownSectionIcon>
                  Agriculture
                </AdditionalServiceLink>
                <AdditionalServiceLink to="/services/general-electric">
                  <DropdownSectionIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </DropdownSectionIcon>
                  General Electrical
                </AdditionalServiceLink>
              </AdditionalServicesSection>
            </ServicesDropdownContainer>
          </NavItem>
          
          {/* Resources Dropdown */}
          <NavItem 
            ref={resourcesRef}
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            <NavLink 
              isButton={true}
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, setResourcesOpen, resourcesOpen)}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              $isTransparent={isTransparent}
            >
              Resources
              <DropdownIndicator $isTransparent={isTransparent}>▼</DropdownIndicator>
            </NavLink>
            <DropdownContainer 
              $isOpen={resourcesOpen}
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <DropdownSection>
                <DropdownLink to="/resources/blog">Blog</DropdownLink>
                <DropdownLink to="/resources/financing">Financing</DropdownLink>
                <DropdownLink to="/resources/faq">FAQ</DropdownLink>
              </DropdownSection>
            </DropdownContainer>
          </NavItem>
          
          {/* About Us Dropdown */}
          <NavItem
            ref={aboutRef}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <NavLink 
              isButton={true}
              onClick={() => setAboutOpen(!aboutOpen)}
              onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, setAboutOpen, aboutOpen)}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
              $isTransparent={isTransparent}
            >
              About Us
              <DropdownIndicator $isTransparent={isTransparent}>▼</DropdownIndicator>
            </NavLink>
            <DropdownContainer 
              $isOpen={aboutOpen}
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <DropdownSection>
                <DropdownLink to="/about/what-sets-us-apart">What Sets Us Apart</DropdownLink>
                <DropdownLink to="/about/partners">Partners</DropdownLink>
                <DropdownLink to="/about/areas-we-serve">Areas We Serve</DropdownLink>
                <DropdownLink to="/about/careers">Careers</DropdownLink>
              </DropdownSection>
            </DropdownContainer>
          </NavItem>
          
          {/* Contact (No Dropdown) */}
          <NavItem ref={contactRef}>
            <NavLink to="/contact" $isTransparent={isTransparent}>Contact</NavLink>
          </NavItem>
        </Nav>
        <MobileMenuButton 
          aria-label="Menu" 
          onClick={toggleMobileMenu}
          $isTransparent={isTransparent}
        >
          ☰
        </MobileMenuButton>
      </HeaderContent>
      <MobileMenu $isOpen={mobileMenuOpen}>
        {/* Services Section */}
        <MobileNavSection>
          <MobileNavButton onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
            Services {mobileServicesOpen ? '▲' : '▼'}
          </MobileNavButton>
          <MobileNavSubMenu $isOpen={mobileServicesOpen}>
            {/* Residential Solar */}
            <MobileSubNavLink 
              to="/services/residential-solar" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ paddingLeft: '2rem', fontWeight: 'bold' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Residential Solar
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/residential-solar/our-process" onClick={() => setMobileMenuOpen(false)}>
              Our Process
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/residential-solar/system-upgrades" onClick={() => setMobileMenuOpen(false)}>
              System Upgrades
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/residential-solar/ev-chargers" onClick={() => setMobileMenuOpen(false)}>
              EV Chargers
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/residential-solar/batteries" onClick={() => setMobileMenuOpen(false)}>
              Batteries
            </MobileSubNavLink>
            
            {/* Commercial Electric */}
            <MobileSubNavLink 
              to="/services/commercial-electric" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ paddingLeft: '2rem', fontWeight: 'bold' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 3H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 3L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Commercial Electric
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/commercial-electric/our-process" onClick={() => setMobileMenuOpen(false)}>
              Our Process
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/commercial-electric/new-construction" onClick={() => setMobileMenuOpen(false)}>
              New Construction
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/commercial-electric/solar" onClick={() => setMobileMenuOpen(false)}>
              Solar
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/commercial-electric/remodels" onClick={() => setMobileMenuOpen(false)}>
              Remodels
            </MobileSubNavLink>
            
            {/* Additional Services */}
            <MobileSubNavLink to="/services/oil-gas" onClick={() => setMobileMenuOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Oil & Gas
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/agriculture" onClick={() => setMobileMenuOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Agriculture
            </MobileSubNavLink>
            <MobileSubNavLink to="/services/general-electric" onClick={() => setMobileMenuOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              General Electrical
            </MobileSubNavLink>
          </MobileNavSubMenu>
        </MobileNavSection>
        
        {/* Resources Section */}
        <MobileNavSection>
          <MobileNavButton onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}>
            Resources {mobileResourcesOpen ? '▲' : '▼'}
          </MobileNavButton>
          <MobileNavSubMenu $isOpen={mobileResourcesOpen}>
            <MobileSubNavLink to="/resources/blog" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </MobileSubNavLink>
            <MobileSubNavLink to="/resources/financing" onClick={() => setMobileMenuOpen(false)}>
              Financing
            </MobileSubNavLink>
            <MobileSubNavLink to="/resources/faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </MobileSubNavLink>
          </MobileNavSubMenu>
        </MobileNavSection>
        
        {/* About Us Section */}
        <MobileNavSection>
          <MobileNavButton onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
            About Us {mobileAboutOpen ? '▲' : '▼'}
          </MobileNavButton>
          <MobileNavSubMenu $isOpen={mobileAboutOpen}>
            <MobileSubNavLink to="/about/what-sets-us-apart" onClick={() => setMobileMenuOpen(false)}>
              What Sets Us Apart
            </MobileSubNavLink>
            <MobileSubNavLink to="/about/partners" onClick={() => setMobileMenuOpen(false)}>
              Partners
            </MobileSubNavLink>
            <MobileSubNavLink to="/about/areas-we-serve" onClick={() => setMobileMenuOpen(false)}>
              Areas We Serve
            </MobileSubNavLink>
            <MobileSubNavLink to="/about/careers" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </MobileSubNavLink>
          </MobileNavSubMenu>
        </MobileNavSection>
        
        {/* Contact (No Dropdown) */}
        <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 