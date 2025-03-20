import React, { useState } from 'react';
import styled from 'styled-components';
import { sendFormDataToEmail, FormData as EmailFormData } from '../../services/emailService';

const FormContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const RequiredText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const CheckboxInput = styled.input`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
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

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error}20;
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

interface ContactFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
  interests: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({ className, title, subtitle, onSubmit }) => {
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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          interests: [...prev.interests, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send form data to the specified email
      const result = await sendFormDataToEmail(formData);
      
      // Call the onSubmit prop if provided
      if (onSubmit) {
        onSubmit(formData);
      }
      
      if (result.success) {
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
        setSubmitError(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      
      <FormContainer>
        <RequiredText>"*" indicates required fields</RequiredText>
        
        <form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <FormLabel htmlFor="firstName">First Name*</FormLabel>
              <FormInput 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="lastName">Last Name*</FormLabel>
              <FormInput 
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
              <FormLabel htmlFor="phone">Phone*</FormLabel>
              <FormInput 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <FormInput 
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
            <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
            <FormInput 
              type="text" 
              id="zipCode" 
              name="zipCode" 
              value={formData.zipCode}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>I'm Interested In:</FormLabel>
            <CheckboxContainer>
              <CheckboxLabel>
                <CheckboxInput 
                  type="checkbox" 
                  name="interests" 
                  value="solar-batteries" 
                  checked={formData.interests.includes('solar-batteries')}
                  onChange={handleChange}
                />
                <span style={{ color: 'inherit' }}>Solar/Batteries</span>
              </CheckboxLabel>
              
              <CheckboxLabel>
                <CheckboxInput 
                  type="checkbox" 
                  name="interests" 
                  value="adding-batteries" 
                  checked={formData.interests.includes('adding-batteries')}
                  onChange={handleChange}
                />
                <span style={{ color: 'inherit' }}>Adding Batteries</span>
              </CheckboxLabel>
              
              <CheckboxLabel>
                <CheckboxInput 
                  type="checkbox" 
                  name="interests" 
                  value="true-up" 
                  checked={formData.interests.includes('true-up')}
                  onChange={handleChange}
                />
                <span style={{ color: 'inherit' }}>True-Up</span>
              </CheckboxLabel>
            </CheckboxContainer>
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </SubmitButton>
          
          {isSubmitted && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          
          {submitError && (
            <ErrorMessage>
              {submitError}
            </ErrorMessage>
          )}
        </form>
      </FormContainer>
    </div>
  );
};

export default ContactForm; 