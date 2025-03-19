import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import DynamicPage from './DynamicPage'
import { createXSSPayload } from '../test/utils.tsx'
import * as urlParserModule from '../utils/urlParser'
import * as pageContentLoaderModule from '../utils/pageContentLoader'

// Mock utilities used by DynamicPage
vi.mock('../utils/urlParser', () => ({
  parseSlug: vi.fn().mockImplementation((slug) => {
    if (slug === 'backup-battery-bakersfield') {
      return {
        searchTerm: 'backup battery',
        location: 'Bakersfield',
        serviceKey: 'backup-battery'
      }
    }
    if (slug.includes('script')) {
      // For XSS testing
      return {
        searchTerm: 'xss test',
        location: 'Test Location',
        serviceKey: 'xss-test'
      }
    }
    return null
  })
}))

vi.mock('../utils/pageContentLoader', () => ({
  loadPageContent: vi.fn().mockImplementation((serviceKey, location) => {
    if (serviceKey === 'backup-battery') {
      return {
        pageTitle: `Backup Battery Services in ${location}`,
        metaDescription: `Professional backup battery services in ${location} by Next Phase Electric.`,
        sections: [
          {
            header: `Backup Battery Services in ${location}`,
            paragraph: `We provide reliable backup battery solutions in ${location}.`,
            imagePath: '/images/battery-service.jpg',
            imageAlt: `Backup battery installation in ${location}`
          }
        ]
      }
    }
    return null
  })
}))

// Mock the Helmet component to test SEO
vi.mock('react-helmet', () => ({
  Helmet: vi.fn().mockImplementation(({ children }) => <div data-testid="helmet-mock">{children}</div>)
}))

describe('DynamicPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it('renders content for valid slug', async () => {
    render(
      <MemoryRouter initialEntries={['/backup-battery-bakersfield']}>
        <Routes>
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: undefined }
    )
    
    // Wait for content to be loaded and rendered
    await waitFor(() => {
      // Use getAllByText instead of getByText to handle multiple elements with the same text
      const titleElements = screen.getAllByText(/Backup Battery Services in Bakersfield/i);
      expect(titleElements.length).toBeGreaterThan(0);
    })
    
    // Check if meta information is rendered
    expect(screen.getByTestId('helmet-mock')).toBeInTheDocument()
  })
  
  it('shows 404 content for invalid slug', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid-slug-format']}>
        <Routes>
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: undefined }
    )
    
    // Wait for component to render the 404 message
    await waitFor(() => {
      expect(screen.getByText(/page not found/i)).toBeInTheDocument()
    })
  })
  
  it('displays content when service exists but no specific page content', async () => {
    // Mock loadPageContent to return null even for valid service
    const { loadPageContent } = pageContentLoaderModule as { loadPageContent: any }
    vi.mocked(loadPageContent).mockReturnValueOnce(null)
    
    render(
      <MemoryRouter initialEntries={['/backup-battery-bakersfield']}>
        <Routes>
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: undefined }
    )
    
    // Should show some kind of fallback or generic content
    await waitFor(() => {
      expect(screen.getByText(/We couldn't find specific information/i)).toBeInTheDocument()
    })
  })
  
  // Security tests
  it('safely handles potentially malicious slugs', async () => {
    const xssPayload = createXSSPayload()
    
    render(
      <MemoryRouter initialEntries={[`/${xssPayload}`]}>
        <Routes>
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: undefined }
    )
    
    // Wait for the page to render - it should either show 404 or sanitized content
    await waitFor(() => {
      const content = document.body.textContent
      expect(content).not.toContain('alert("XSS")')
    })
    
    // Check if the script tag was actually executed (it should not be)
    const wasScriptExecuted = document.querySelector('script[data-testid="xss-executed"]')
    expect(wasScriptExecuted).toBeNull()
  })
  
  it('sanitizes location names in rendered content', async () => {
    // Mock parseSlug to return malicious content in the location name
    const { parseSlug } = urlParserModule as { parseSlug: any }
    vi.mocked(parseSlug).mockReturnValueOnce({
      searchTerm: 'test service',
      location: '<script>document.body.setAttribute("data-xss-executed", "true")</script>',
      serviceKey: 'test-service'
    })
    
    render(
      <MemoryRouter initialEntries={['/test-service-malicious']}>
        <Routes>
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: undefined }
    )
    
    // Wait for the page to render
    await waitFor(() => {
      // The location text should be displayed as text, not executed as HTML
      expect(document.body).not.toHaveAttribute('data-xss-executed')
    })
  })
}) 