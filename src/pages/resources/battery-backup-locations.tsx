import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const LocationCard = styled(Link)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const LocationName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BatteryBackupLocations: React.FC = () => {
  const locations = [
    { name: 'Delano', slug: 'backup-battery-delano' },
    { name: 'Bakersfield', slug: 'backup-battery-bakersfield' },
    { name: 'Maricopa', slug: 'backup-battery-maricopa' },
    { name: 'Ridgecrest', slug: 'backup-battery-ridgecrest' },
    { name: 'Shafter', slug: 'backup-battery-shafter' },
    { name: 'Taft', slug: 'backup-battery-taft' },
    { name: 'Tehachapi', slug: 'backup-battery-tehachapi' },
    { name: 'Wasco', slug: 'backup-battery-wasco' },
    { name: 'Oildale', slug: 'backup-battery-oildale' },
    { name: 'Rosamond', slug: 'backup-battery-rosamond' },
    { name: 'California City', slug: 'backup-battery-california-city' },
    { name: 'Mojave', slug: 'backup-battery-mojave' },
    { name: 'Frazier Park', slug: 'backup-battery-frazier-park' },
    { name: 'Lake Isabella', slug: 'backup-battery-lake-isabella' }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Backup Battery Solutions in Kern County | Next Phase Electric</title>
        <meta name="description" content="Find reliable backup battery solutions in Kern County. Next Phase Electric offers expert installation and maintenance services for home backup power systems in Delano, Bakersfield, and more." />
      </Helmet>
      
      <PageTitle>Backup Battery Solutions in Kern County</PageTitle>
      
      <IntroText>
        Next Phase Electric provides reliable backup battery solutions throughout Kern County. 
        Our expert team offers professional installation and maintenance services for home backup power systems, 
        ensuring your home stays powered during outages. Select your city below to learn more about our services in your area.
      </IntroText>
      
      <LocationsGrid>
        {locations.map((location) => (
          <LocationCard key={location.slug} to={`/${location.slug}`}>
            <LocationName>{location.name}</LocationName>
            <p>Backup Battery Solutions</p>
          </LocationCard>
        ))}
      </LocationsGrid>
    </PageContainer>
  );
};

export default BatteryBackupLocations; 