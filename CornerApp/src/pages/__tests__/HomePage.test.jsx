import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('HomePage', () => {
  test('renders Hero component correctly', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    expect(
      screen.getByText('Welcome to Component Corner')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Find the best components for your next project.')
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Shop Now' })).toBeInTheDocument()

    const image = screen.getByAltText('Hero')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics'
    )
  })
})
