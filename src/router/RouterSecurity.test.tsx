import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/utils'
import { Routes, Route, Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'

// Mock components for testing
const HomePage = () => <div data-testid="home-page">Home Page</div>
const UserPage = () => <div data-testid="user-page">User Page</div>

describe('Router Security Tests', () => {
  it('renders home page correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  it('renders user page correctly', () => {
    render(
      <MemoryRouter initialEntries={['/user/123']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })
}) 