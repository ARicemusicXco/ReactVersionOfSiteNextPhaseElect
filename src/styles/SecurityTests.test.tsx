import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/utils'
import styled from 'styled-components'

// Test styled component
const TestDiv = styled.div`
  color: blue;
  padding: 10px;
`

describe('Styled Components Basic Tests', () => {
  it('renders styled component correctly', () => {
    render(<TestDiv data-testid="test-div">Test Content</TestDiv>)
    const element = screen.getByTestId('test-div')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Test Content')
  })
}) 