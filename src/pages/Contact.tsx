import React, { useState } from 'react';
import styled from 'styled-components';
import { validateFormField, sanitizeString } from '../utils/securityUtils';
import { sendFormDataToEmail } from '../services/emailService';

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

interface InputProps {
  $hasError?: boolean;
}

const Input = styled.input<InputProps>`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ $hasError, theme }) => 
    $hasError ? theme.colors.error : theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) => 
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ $hasError, theme }) => 
      $hasError ? `${theme.colors.error}20` : `${theme.colors.primary}20`};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 4px;
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

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  zipCode?: string;
}

// Secure list of allowed interests
const ALLOWED_INTERESTS = ['solar-batteries', 'adding-batteries', 'true-up'];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zipCode: '',
    interests: [],
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Hidden token to prevent CSRF attacks
  const [csrfToken] = useState(`${Date.now()}-${Math.random().toString(36).substring(2)}`);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate first name
    const firstNameResult = validateFormField(formData.firstName, 'name');
    if (!firstNameResult.isValid) {
      newErrors.firstName = 'Please enter a valid first name';
    }
    
    // Validate last name
    const lastNameResult = validateFormField(formData.lastName, 'name');
    if (!lastNameResult.isValid) {
      newErrors.lastName = 'Please enter a valid last name';
    }
    
    // Validate phone
    const phoneResult = validateFormField(formData.phone, 'phone');
    if (!phoneResult.isValid) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Validate email
    const emailResult = validateFormField(formData.email, 'email');
    if (!emailResult.isValid) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate zip code if provided
    if (formData.zipCode) {
      const zipResult = validateFormField(formData.zipCode, 'zipCode');
      if (!zipResult.isValid) {
        newErrors.zipCode = 'Please enter a valid zip code';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const interestValue = sanitizeString(value);
      
      // Only allow interests from the predefined list
      if (!ALLOWED_INTERESTS.includes(interestValue)) {
        console.error('Invalid interest value detected:', interestValue);
        return;
      }
      
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
      // For regular text inputs, update form data and remove any existing errors
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      // Clear the error for this field if it exists
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submitting
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare sanitized data for submission
    const sanitizedData = {
      firstName: sanitizeString(formData.firstName),
      lastName: sanitizeString(formData.lastName),
      phone: sanitizeString(formData.phone),
      email: sanitizeString(formData.email),
      zipCode: sanitizeString(formData.zipCode),
      interests: formData.interests.filter(interest => ALLOWED_INTERESTS.includes(interest)),
      csrfToken: csrfToken // Include CSRF token
    };

    // Simulate API call with rate limiting (only allow one submission per 5 seconds)
    const storedTime = localStorage.getItem('lastSubmitTime');
    const currentTime = Date.now();
    const lastSubmitTime = storedTime ? parseInt(storedTime, 10) : 0;
    
    if (currentTime - lastSubmitTime < 5000) {
      setTimeout(() => {
        setIsSubmitting(false);
        setErrors({ 
          email: 'Please wait a few seconds before submitting again' 
        });
      }, 1000);
      return;
    }
    
    // Store current time for rate limiting
    localStorage.setItem('lastSubmitTime', currentTime.toString());
    
    try {
      // Send the form data to the specified email
      const result = await sendFormDataToEmail(sanitizedData);
      
      if (result.success) {
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
      } else {
        setIsSubmitting(false);
        setErrors({
          email: result.message
        });
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setIsSubmitting(false);
      setErrors({
        email: 'Failed to send form data. Please try again later.'
      });
    }
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
          {/* Hidden CSRF token field */}
          <input type="hidden" name="csrfToken" value={csrfToken} />
          
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
                $hasError={!!errors.firstName}
              />
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
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
                $hasError={!!errors.lastName}
              />
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
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
                $hasError={!!errors.phone}
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
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
                $hasError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
              $hasError={!!errors.zipCode}
            />
            {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>I'm Interested In:</Label>
            <CheckboxGroup>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  name="interests" 
                  value="solar-batteries"
                  checked={formData.interests.includes('solar-batteries')}
                  onChange={handleChange}
                />
                Solar/Batteries
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  name="interests" 
                  value="adding-batteries"
                  checked={formData.interests.includes('adding-batteries')}
                  onChange={handleChange}
                />
                Adding Batteries
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  name="interests" 
                  value="true-up"
                  checked={formData.interests.includes('true-up')}
                  onChange={handleChange}
                />
                True-Up
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