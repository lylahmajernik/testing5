import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const product = {
    name: 'Test Product',
    image: 'https://placehold.co/200x200',
    price: 29.99,
    info: 'This is a test product',
  }
  const onAddToCart = vi.fn()

  beforeEach(() => onAddToCart.mockClear())

  test('renders product details correctly', () => {
    render(<ProductCard {...product} onAddToCart={onAddToCart} />)

    // Name
    expect(screen.getByText('Test Product')).toBeTruthy()
    // Info
    expect(screen.getByText('This is a test product')).toBeTruthy()
    // Price
    expect(screen.getByText('$29.99')).toBeTruthy()
    // Image
    const img = screen.getByAltText('Test Product')
    expect(img).toBeTruthy()
    expect(img.getAttribute('src')).toBe('https://placehold.co/200x200')
    // Button
    expect(screen.getByText('Add to Cart')).toBeTruthy()
  })

  test('calls onAddToCart when button is clicked', () => {
    render(<ProductCard {...product} onAddToCart={onAddToCart} />)

    fireEvent.click(screen.getByText('Add to Cart'))
    expect(onAddToCart).toHaveBeenCalledTimes(1)
  })
})
