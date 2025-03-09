import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service Pages
import ResidentialSolar from './pages/services/residential-solar/ResidentialSolar';
import ResidentialSolarProcess from './pages/services/residential-solar/OurProcess';
import SystemUpgrades from './pages/services/residential-solar/SystemUpgrades';
import EVChargers from './pages/services/residential-solar/EVChargers';
import Batteries from './pages/services/residential-solar/Batteries';
import CommercialElectric from './pages/services/commercial-electric/CommercialElectric';
import CommercialElectricProcess from './pages/services/commercial-electric/OurProcess';
import CommercialElectricNewConstruction from './pages/services/commercial-electric/NewConstruction';
import CommercialSolar from './pages/services/commercial-electric/Solar';
import CommercialRemodels from './pages/services/commercial-electric/Remodels';
import OilGas from './pages/services/oil-gas/OilGas';
import Agriculture from './pages/services/agriculture/Agriculture';
import GeneralElectric from './pages/services/general-electric/GeneralElectric';

// Resource Pages
import Blog from './pages/resources/blog';
import Financing from './pages/resources/financing';
import FAQ from './pages/resources/faq';

// About Pages
import WhatSetsUsApart from './pages/about/what-sets-us-apart';
import Partners from './pages/about/partners';
import AreasWeServe from './pages/about/areas-we-serve';
import Careers from './pages/about/careers';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Routes */}
            <Route path="/services/residential-solar" element={<ResidentialSolar />} />
            <Route path="/services/residential-solar/our-process" element={<ResidentialSolarProcess />} />
            <Route path="/services/residential-solar/system-upgrades" element={<SystemUpgrades />} />
            <Route path="/services/residential-solar/ev-chargers" element={<EVChargers />} />
            <Route path="/services/residential-solar/batteries" element={<Batteries />} />
            <Route path="/services/commercial-electric" element={<CommercialElectric />} />
            <Route path="/services/commercial-electric/our-process" element={<CommercialElectricProcess />} />
            <Route path="/services/commercial-electric/new-construction" element={<CommercialElectricNewConstruction />} />
            <Route path="/services/commercial-electric/solar" element={<CommercialSolar />} />
            <Route path="/services/commercial-electric/remodels" element={<CommercialRemodels />} />
            <Route path="/services/oil-gas" element={<OilGas />} />
            <Route path="/services/agriculture" element={<Agriculture />} />
            <Route path="/services/general-electric" element={<GeneralElectric />} />
            
            {/* Resource Routes */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/financing" element={<Financing />} />
            <Route path="/resources/faq" element={<FAQ />} />
            
            {/* About Routes */}
            <Route path="/about/what-sets-us-apart" element={<WhatSetsUsApart />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/areas-we-serve" element={<AreasWeServe />} />
            <Route path="/about/careers" element={<Careers />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
