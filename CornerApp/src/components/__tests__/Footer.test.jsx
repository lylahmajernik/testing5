import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  const props = {
    storeName: 'Component Corner',
    address: '123 Main St',
    email: 'info@componentcorner.com',
    phone: '555-1234',
  }

  test('renders all footer information', () => {
    render(<Footer {...props} />)

    expect(screen.getByText('Component Corner')).toBeTruthy()
    expect(screen.getByText('123 Main St')).toBeTruthy()
    expect(screen.getByText('Email: info@componentcorner.com')).toBeTruthy()
    expect(screen.getByText('Phone: 555-1234')).toBeTruthy()
  })
})
