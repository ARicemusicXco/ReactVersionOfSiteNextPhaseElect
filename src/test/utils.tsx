import { render as rtlRender } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Re-export everything from testing-library/react
export * from '@testing-library/react'

// Helper function to wait for all promises to resolve
export const waitForPromises = () => new Promise(resolve => setTimeout(resolve, 0))

// Helper function to create XSS payloads for testing
export const createXSSPayload = () => {
  const payloads = [
    '<script>alert("XSS")</script>',
    '<img src="x" onerror="alert(\'XSS\')">',
    '<svg onload="alert(\'XSS\')">',
    'javascript:alert("XSS")',
    'data:text/html,<script>alert("XSS")</script>',
    '<div onmouseover="alert(\'XSS\')">hover me</div>'
  ]
  return payloads[Math.floor(Math.random() * payloads.length)]
}

// Custom render function that wraps components with necessary providers
export const render = (
  ui: React.ReactElement,
  { withRouter = true, ...renderOptions } = {}
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {withRouter ? (
          <BrowserRouter>
            {children}
          </BrowserRouter>
        ) : (
          children
        )}
      </ThemeProvider>
    )
  }

  return rtlRender(ui, { wrapper: AllTheProviders, ...renderOptions })
}

// Export everything
export {
  screen,
  waitFor,
  userEvent
} 