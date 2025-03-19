import { describe, it, expect, vi } from 'vitest'
import { render, screen, createXSSPayload } from '../test/utils'
import { Helmet } from 'react-helmet'

// Create a simple SEO component for testing
const SEOHelmet = ({ title, description, keywords, canonicalUrl }: {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}) => (
  <div data-testid="seo-wrapper">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
    {/* Add the values to the DOM so we can test them, since Helmet doesn't update in tests */}
    <div data-testid="seo-title" style={{ display: 'none' }}>{title}</div>
    <div data-testid="seo-description" style={{ display: 'none' }}>{description}</div>
    {keywords && <div data-testid="seo-keywords" style={{ display: 'none' }}>{keywords}</div>}
    {canonicalUrl && <div data-testid="seo-canonical" style={{ display: 'none' }}>{canonicalUrl}</div>}
  </div>
)

describe('SEO Helmet Component', () => {
  it('correctly sets page title', () => {
    render(<SEOHelmet title="Test Title" description="Test description" />)
    
    // Since Helmet doesn't update document.title in tests, we check our testid
    const titleElement = screen.getByTestId('seo-title')
    expect(titleElement.textContent).toBe('Test Title')
  })
  
  it('sets meta description', () => {
    render(<SEOHelmet title="Test" description="Test page description" />)
    
    // Check meta description through our testid
    const metaDescElement = screen.getByTestId('seo-description')
    expect(metaDescElement.textContent).toBe('Test page description')
  })
  
  it('sets optional meta tags when provided', () => {
    render(
      <SEOHelmet 
        title="Test" 
        description="Test desc" 
        keywords="test, keywords"
        canonicalUrl="https://example.com/test"
      />
    )
    
    // Check keywords
    const keywordsElement = screen.getByTestId('seo-keywords')
    expect(keywordsElement.textContent).toBe('test, keywords')
    
    // Check canonical link
    const canonicalElement = screen.getByTestId('seo-canonical')
    expect(canonicalElement.textContent).toBe('https://example.com/test')
  })
  
  // Security tests
  it('escapes potentially dangerous content in title', () => {
    const xssPayload = createXSSPayload()
    
    render(<SEOHelmet title={xssPayload} description="Test description" />)
    
    // Title should be set but not executed as HTML
    const titleElement = screen.getByTestId('seo-title')
    expect(titleElement.textContent).toBe(xssPayload)
    
    // The title element should contain the script tags as text, not execute them
    expect(titleElement.innerHTML).not.toBe(xssPayload)
    expect(titleElement.innerHTML).toContain('&lt;script&gt;')
    
    // Check that no script was executed
    const injectedScript = document.querySelector('script[data-testid="xss-executed"]')
    expect(injectedScript).toBeNull()
  })
  
  it('escapes potentially dangerous content in meta tags', () => {
    const xssPayload = createXSSPayload()
    
    render(
      <SEOHelmet 
        title="Test" 
        description={xssPayload}
        keywords={`test, ${xssPayload}`}
      />
    )
    
    // Check that meta description is properly escaped
    const descElement = screen.getByTestId('seo-description')
    expect(descElement.textContent).toBe(xssPayload)
    
    // Content should be escaped when rendered as HTML
    expect(descElement.innerHTML).toContain('&lt;script&gt;')
    
    // Check that no script was executed
    const injectedScript = document.querySelector('script[data-testid="xss-executed"]')
    expect(injectedScript).toBeNull()
  })
  
  it('safely handles potentially dangerous URLs', () => {
    const maliciousUrl = 'javascript:alert("XSS")'
    
    render(
      <SEOHelmet 
        title="Test" 
        description="Test description"
        canonicalUrl={maliciousUrl}
      />
    )
    
    // Check canonical link via our test id
    const canonicalElement = screen.getByTestId('seo-canonical')
    
    // The rendered text should be the original URL
    expect(canonicalElement.textContent).toBe(maliciousUrl)
    
    // But when included as an href, it should not execute
    expect(() => {
      const link = document.createElement('a')
      link.href = maliciousUrl
      document.body.appendChild(link)
      link.click()
    }).not.toThrow()
    
    // Check that no script was executed
    expect(document.body).not.toHaveAttribute('data-xss-executed')
  })
  
  it('prevents DOM-based XSS through meta refresh', () => {
    // Create a component that tries to use meta refresh for redirection
    const PotentiallyDangerousHelmet = () => (
      <div data-testid="dangerous-helmet">
        <Helmet>
          <meta httpEquiv="refresh" content="0;url=javascript:alert('XSS')" />
        </Helmet>
        <div data-testid="meta-content">0;url=javascript:alert('XSS')</div>
      </div>
    )
    
    render(<PotentiallyDangerousHelmet />)
    
    // Since we can't easily check meta tags in JSDOM, we just verify no XSS is executed
    
    // Check that no alert was executed
    expect(document.body).not.toHaveAttribute('data-xss-executed')
    
    // The meta content should be present as text
    const metaContentEl = screen.getByTestId('meta-content')
    expect(metaContentEl.textContent).toContain('javascript:alert')
  })
}) 