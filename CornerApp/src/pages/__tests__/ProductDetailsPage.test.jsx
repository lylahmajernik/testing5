import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { vi } from 'vitest'
import ProductDetailsPage from '../ProductDetailsPage'

describe('ProductDetailsPage', () => {
  let cart
  let setCart

  beforeEach(() => {
    cart = []
    setCart = vi.fn((newCart) => {
      cart = newCart
    })
  })

  test('renders product details correctly', () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Routes>
          <Route path="/products/:product" element={<ProductDetailsPage cart={cart} setCart={setCart} />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Wireless Headphones')).toBeTruthy()
    expect(screen.getByText('Premium noise-cancelling headphones with 30-hour battery life')).toBeTruthy()
    expect(screen.getByText('Price:')).toBeTruthy()
    expect(screen.getByText('$99.99')).toBeTruthy()

    const img = screen.getByAltText('Wireless Headphones')
    expect(img).toBeTruthy()
    expect(img.getAttribute('src')).toBe('https://placehold.co/600x400')
  })

  test('adds product to cart when button clicked', () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Routes>
          <Route path="/products/:product" element={<ProductDetailsPage cart={cart} setCart={setCart} />} />
        </Routes>
      </MemoryRouter>
    )

    const button = screen.getByText('Add to Cart')
    fireEvent.click(button)

    expect(setCart).toHaveBeenCalledTimes(1)
    expect(setCart.mock.calls[0][0]).toEqual([
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://placehold.co/600x400',
        description: 'Premium noise-cancelling headphones with 30-hour battery life',
      },
    ])
  })

  test('shows "Product not found" for invalid id', () => {
    render(
      <MemoryRouter initialEntries={['/products/999']}>
        <Routes>
          <Route path="/products/:product" element={<ProductDetailsPage cart={cart} setCart={setCart} />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Product not found.')).toBeTruthy()
  })
})
