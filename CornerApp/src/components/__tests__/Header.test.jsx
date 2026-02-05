import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header'

describe('Header', () => {
  const props = {
    storeName: 'Component Corner',
    cartCount: 3,
  }

  test('renders store name and navigation links', () => {
    render(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>
    )

    expect(screen.getByText('Component Corner')).toBeTruthy()

    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Products')).toBeTruthy()
    expect(screen.getByText('Category')).toBeTruthy()

    expect(screen.getByText('🛒')).toBeTruthy()
    expect(screen.getByText('3')).toBeTruthy()
  })
})
