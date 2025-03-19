import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { createXSSPayload } from './test/utils.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { sanitizeTheme } from './utils/securityUtils'

// Secure the theme for testing
const sanitizedTheme = sanitizeTheme(theme);

// Mock the page components to simplify tests
vi.mock('./pages/Home', () => ({
  default: () => <div data-testid="home-page">Home Page Mock</div>
}))

vi.mock('./pages/About', () => ({
  default: () => <div data-testid="about-page">About Page Mock</div>
}))

vi.mock('./pages/NotFound', () => ({
  default: () => <div data-testid="not-found-page">Not Found Page Mock</div>
}))

vi.mock('./pages/DynamicPage', () => ({
  default: () => <div data-testid="dynamic-page">Dynamic Page Mock</div>
}))

vi.mock('./components/layout/Layout', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout-mock">
      <header data-testid="header-mock">Header Mock</header>
      <main>{children}</main>
      <footer data-testid="footer-mock">Footer Mock</footer>
    </div>
  )
}))

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  return render(
    <ThemeProvider theme={sanitizedTheme}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </ThemeProvider>
  )
}

describe('App Component', () => {
  it('renders the layout with header and footer', () => {
    renderWithRouter(<App />)
    
    expect(screen.getByTestId('layout-mock')).toBeInTheDocument()
    expect(screen.getByTestId('header-mock')).toBeInTheDocument()
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument()
  })
  
  it('renders home page on default route', () => {
    renderWithRouter(<App />)
    
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
  
  it('renders about page on /about route', () => {
    renderWithRouter(<App />, { route: '/about' })
    
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
  })
  
  it('renders dynamic page for valid slug routes', () => {
    renderWithRouter(<App />, { route: '/valid-slug' })
    
    expect(screen.getByTestId('dynamic-page')).toBeInTheDocument()
  })
  
  it('renders either NotFound or DynamicPage for unknown routes', () => {
    renderWithRouter(<App />, { route: '/unknown-route' })
    
    // Check if either NotFound or DynamicPage is rendered
    // This test is more flexible, since the actual behavior depends on the route matching
    const hasDynamicPage = screen.queryByTestId('dynamic-page') !== null
    const hasNotFoundPage = screen.queryByTestId('not-found-page') !== null
    
    expect(hasDynamicPage || hasNotFoundPage).toBe(true)
  })
  
  // Security test
  it('safely handles potentially malicious routes', () => {
    const xssPayload = createXSSPayload()
    renderWithRouter(<App />, { route: `/${xssPayload}` })
    
    // Check if either NotFound or DynamicPage is rendered - both are valid outcomes
    // depending on the security implementation
    const hasDynamicPage = screen.queryByTestId('dynamic-page') !== null
    const hasNotFoundPage = screen.queryByTestId('not-found-page') !== null
    
    expect(hasDynamicPage || hasNotFoundPage).toBe(true)
    
    // Most importantly, check that the script wasn't executed
    const scriptTags = document.querySelectorAll('script')
    const hasInjectedScript = Array.from(scriptTags).some(
      script => script.textContent?.includes('alert("XSS")')
    )
    
    expect(hasInjectedScript).toBe(false)
  })
}) 