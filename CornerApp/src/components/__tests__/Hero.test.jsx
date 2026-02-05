import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from '../Hero'

describe('Hero', () => {
  const props = {
    title: 'Welcome to Component Corner',
    subtitle: 'Find the best components for your next project.',
    ctaText: 'Shop Now',
    image: 'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics',
  }

  test('renders title, subtitle, button, and image', () => {
    render(
      <MemoryRouter>
        <Hero {...props} />
      </MemoryRouter>
    )

    expect(screen.getByText('Welcome to Component Corner')).toBeTruthy()

    expect(screen.getByText('Find the best components for your next project.')).toBeTruthy()

    expect(screen.getByText('Shop Now')).toBeTruthy()

    const image = screen.getByAltText('Hero')
    expect(image).toBeTruthy()
    expect(image.getAttribute('src')).toBe(
      'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics'
    )
  })
})
