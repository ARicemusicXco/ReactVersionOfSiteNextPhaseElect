import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ResidentialSolarProcess from './pages/services/residential-solar/OurProcess';
import SystemUpgrades from './pages/services/residential-solar/SystemUpgrades';
import EVChargers from './pages/services/residential-solar/EVChargers';
import Batteries from './pages/services/residential-solar/Batteries';
import CommercialElectricProcess from './pages/services/commercial-electric/OurProcess';
import CommercialElectricNewConstruction from './pages/services/commercial-electric/NewConstruction';
import CommercialSolar from './pages/services/commercial-electric/Solar';
import CommercialRemodels from './pages/services/commercial-electric/Remodels';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/residential-solar/our-process" element={<ResidentialSolarProcess />} />
            <Route path="/services/residential-solar/system-upgrades" element={<SystemUpgrades />} />
            <Route path="/services/residential-solar/ev-chargers" element={<EVChargers />} />
            <Route path="/services/residential-solar/batteries" element={<Batteries />} />
            <Route path="/services/commercial-electric/our-process" element={<CommercialElectricProcess />} />
            <Route path="/services/commercial-electric/new-construction" element={<CommercialElectricNewConstruction />} />
            <Route path="/services/commercial-electric/solar" element={<CommercialSolar />} />
            <Route path="/services/commercial-electric/remodels" element={<CommercialRemodels />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
