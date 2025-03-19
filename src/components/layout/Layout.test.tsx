import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import Layout from './Layout'

describe('Layout', () => {
  it('renders children within layout structure', () => {
    render(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    )
    
    // Check that header and footer are present
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    
    // Check that children are rendered in the main content area
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })
}) 