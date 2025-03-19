import { describe, it, expect, vi, beforeEach } from 'vitest'
import { loadPageContent } from './pageContentLoader'

// Mock the dynamic pages data
vi.mock('../data/dynamicPages.json', () => ({
  default: {
    'backup-battery': {
      pageTitle: 'Backup Battery Services in {location}',
      metaDescription: 'Professional backup battery services in {location} by Next Phase Electric.',
      sections: [
        {
          header: 'Backup Battery Services in {location}',
          paragraph: 'We provide reliable backup battery solutions in {location}.',
          imagePath: '/images/battery-service.jpg',
          imageAlt: 'Backup battery installation in {location}'
        }
      ]
    }
  }
}))

describe('pageContentLoader utilities', () => {
  beforeEach(() => {
    // Clear mocks between tests
    vi.clearAllMocks()
  })

  describe('loadPageContent', () => {
    it('returns null when service key does not exist', () => {
      const result = loadPageContent('non-existent-service', 'Bakersfield')
      expect(result).toBeNull()
    })

    it('properly loads page content for existing service key', () => {
      const result = loadPageContent('backup-battery', 'Bakersfield')
      expect(result).not.toBeNull()
      expect(result?.pageTitle).toBe('Backup Battery Services in Bakersfield')
      expect(result?.metaDescription).toBe('Professional backup battery services in Bakersfield by Next Phase Electric.')
    })

    it('properly replaces all location placeholders in nested objects', () => {
      const result = loadPageContent('backup-battery', 'Delano')
      expect(result?.sections[0].header).toBe('Backup Battery Services in Delano')
      expect(result?.sections[0].paragraph).toBe('We provide reliable backup battery solutions in Delano.')
      expect(result?.sections[0].imageAlt).toBe('Backup battery installation in Delano')
    })
    
    // Security tests
    it('handles location names with potential XSS content safely', () => {
      const xssPayload = '<script>alert("XSS")</script>'
      const result = loadPageContent('backup-battery', xssPayload)
      
      // The content should either contain the script tag as text, or escaped versions
      // Both are secure as long as the script isn't executed
      expect(result).not.toBeNull()
      
      // Make sure we have some content with the location
      expect(result?.pageTitle).toContain('Backup Battery Services in')
      
      // Check that the script tags are treated as text, not HTML
      // We don't care exactly how it's escaped as long as it's not executable
      const scriptElement = document.createElement('div')
      scriptElement.innerHTML = result?.pageTitle || ''
      const scriptWasExecuted = scriptElement.querySelector('script') !== null
      expect(scriptWasExecuted).toBe(false)
    })
  })
}) 