import { describe, it, expect } from 'vitest'
import { render, screen } from './test/utils'
import React, { useState } from 'react'

// Test component with basic React functionality
const TestComponent = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <button data-testid="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div data-testid="count">{count}</div>
    </div>
  )
}

describe('React Basic Tests', () => {
  it('renders component correctly', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('count')).toBeInTheDocument()
    expect(screen.getByTestId('increment')).toBeInTheDocument()
  })

  it('updates state correctly', () => {
    render(<TestComponent />)
    const incrementButton = screen.getByTestId('increment')
    const countDisplay = screen.getByTestId('count')
    
    expect(countDisplay.textContent).toBe('0')
    incrementButton.click()
    expect(countDisplay.textContent).toBe('1')
  })
}) 