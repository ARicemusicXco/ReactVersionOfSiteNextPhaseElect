import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  width: 100%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1400px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
  }
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const InfoItem = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 100%;
  }
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FormSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
  background-color: #f5f5f5;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-image: linear-gradient(rgba(245, 245, 245, 0.9), rgba(245, 245, 245, 0.9)), url('/NextPhaseElectMediaLibrary/AdobeStock_187018505.jpeg');
  background-size: cover;
  background-position: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: 1;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  margin-top: ${({ theme }) => theme.spacing.md};
  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.success}20;
  color: ${({ theme }) => theme.colors.success};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const MapContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  height: 400px;
  background-image: url('/NextPhaseElectMediaLibrary/AdobeStock_199164585.jpeg');
  background-size: cover;
  background-position: center;
`;

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
  interests: string[];
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zipCode: '',
    interests: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const interestValue = value;
      setFormData((prev) => {
        const currentInterests = [...prev.interests];
        if (checked) {
          currentInterests.push(interestValue);
        } else {
          const index = currentInterests.indexOf(interestValue);
          if (index > -1) {
            currentInterests.splice(index, 1);
          }
        }
        return {
          ...prev,
          interests: currentInterests,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        zipCode: '',
        interests: [],
      });
    }, 1500);
  };

  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>

      <ContactInfo>
        <InfoItem>
          <InfoIcon>📧</InfoIcon>
          <InfoTitle>Email</InfoTitle>
          <InfoText>info@nextphaseelect.com</InfoText>
        </InfoItem>

        <InfoItem>
          <InfoIcon>📞</InfoIcon>
          <InfoTitle>Phone</InfoTitle>
          <InfoText>661.878.7576</InfoText>
        </InfoItem>

        <InfoItem>
          <InfoIcon>📍</InfoIcon>
          <InfoTitle>Address</InfoTitle>
          <InfoText>5409 Aldrin Ct, Bakersfield, CA 93313</InfoText>
        </InfoItem>
      </ContactInfo>

      <FormSection>
        <SectionTitle>Get a No Obligation Quote</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label htmlFor="phone">Phone*</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email*</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>I'm Interested In:</Label>
            <CheckboxGroup>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  name="interests" 
                  value="solar"
                  checked={formData.interests.includes('solar')}
                  onChange={handleChange}
                />
                Solar
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  name="interests" 
                  value="roofing"
                  checked={formData.interests.includes('roofing')}
                  onChange={handleChange}
                />
                Roofing
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  name="interests" 
                  value="landscape"
                  checked={formData.interests.includes('landscape')}
                  onChange={handleChange}
                />
                Landscape
              </CheckboxLabel>
            </CheckboxGroup>
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </SubmitButton>
          
          {isSubmitted && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
        </Form>
      </FormSection>

      <MapContainer />
    </ContactContainer>
  );
};

export default Contact; 