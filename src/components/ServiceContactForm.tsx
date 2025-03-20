import React from 'react';
import styled from 'styled-components';
import ContactForm from './forms/ContactForm';
import { FormData } from '../services/emailService';

const ContactSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background-color: #f9f9f9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

interface ServiceContactFormProps {
  className?: string;
  title?: string;
  description?: string;
  onSubmit?: (formData: FormData) => void;
}

/**
 * A standardized contact form for service pages that sends form submissions to arice@xco.energy
 */
const ServiceContactForm: React.FC<ServiceContactFormProps> = ({ 
  className,
  title = 'Get a Free Estimate Today',
  description = 'Ready to take the next step toward energy efficiency and quality electrical solutions? Contact us for a free estimate, and let\'s light up the path to a brighter, more cost-effective future together.',
  onSubmit
}) => {
  
  const handleSubmit = async (formData: FormData) => {
    // The actual submission logic is handled in the ContactForm component
    console.log('Service form submitted with data:', formData);
    
    // Call the parent's onSubmit if it exists
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  
  return (
    <ContactSection className={className}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ContactForm onSubmit={handleSubmit} />
      </Container>
    </ContactSection>
  );
};

export default ServiceContactForm; 