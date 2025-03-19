import { describe, it, expect, vi } from 'vitest'
import { render, screen, userEvent } from '../test/utils'
import Contact from './Contact'

// Mock form submission
const mockSubmit = vi.fn()
vi.mock('../utils/formSubmission', () => ({
  submitContactForm: mockSubmit
}))

describe('Contact Page', () => {
  it('renders contact form with required fields', () => {
    render(<Contact />)
    
    // Check for form fields
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })
  
  it('validates required fields', async () => {
    render(<Contact />)
    
    // Try to submit without filling fields
    const submitButton = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(submitButton)
    
    // Check for error messages
    expect(screen.getByText(/Please enter a valid first name/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter a valid last name/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    expect(screen.getByText(/Please enter a valid phone number/i)).toBeInTheDocument()
    
    // Check that form wasn't submitted
    expect(mockSubmit).not.toHaveBeenCalled()
  })
  
  it('submits form with valid data', async () => {
    render(<Contact />)
    
    // Fill out the form
    await userEvent.type(screen.getByLabelText(/First Name/i), 'John')
    await userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe')
    await userEvent.type(screen.getByLabelText(/Email/i), 'john.doe@example.com')
    await userEvent.type(screen.getByLabelText(/Phone/i), '555-123-4567')
    await userEvent.type(screen.getByLabelText(/Zip Code/i), '12345')
    await userEvent.click(screen.getByLabelText(/Solar\/Batteries/i))
    await userEvent.click(screen.getByLabelText(/Adding Batteries/i))
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(submitButton)
    
    // Check that form was submitted with correct data
    expect(mockSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-123-4567',
      zipCode: '12345',
      interests: ['solar-batteries', 'adding-batteries']
    })
  })

  it('validates email format', async () => {
    render(<Contact />)
    
    // Fill out other required fields
    await userEvent.type(screen.getByLabelText(/First Name/i), 'John')
    await userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe')
    await userEvent.type(screen.getByLabelText(/Phone/i), '555-123-4567')
    await userEvent.type(screen.getByLabelText(/Zip Code/i), '12345')
    
    // Enter invalid email
    await userEvent.type(screen.getByLabelText(/Email/i), 'invalid-email')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(submitButton)
    
    // Check for email error message
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    
    // Check that form wasn't submitted
    expect(mockSubmit).not.toHaveBeenCalled()
  })
}) 