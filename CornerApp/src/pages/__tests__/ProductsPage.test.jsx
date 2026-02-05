import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import ProductsPage from '../ProductsPage'

describe('ProductsPage', () => {
  let cart
  let setCart

  beforeEach(() => {
    cart = []
    setCart = vi.fn((newCart) => {
      cart = newCart
    })
  })

  test('renders all product names and details links', () => {
    render(
      <MemoryRouter>
        <ProductsPage cart={cart} setCart={setCart} />
      </MemoryRouter>
    )

    expect(screen.getByText('Wireless Headphones')).toBeTruthy()
    expect(screen.getByText('Smart Watch')).toBeTruthy()

    const links = screen.getAllByText('View Details')
    expect(links.length).toBe(6)
  })

  test('clicking "Add to Cart" calls setCart', () => {
    render(
      <MemoryRouter>
        <ProductsPage cart={cart} setCart={setCart} />
      </MemoryRouter>
    )

    const addButtons = screen.getAllByText('Add to Cart')
    expect(addButtons.length).toBe(6)

    fireEvent.click(addButtons[0])

    expect(setCart).toHaveBeenCalledTimes(1)
    const addedCart = setCart.mock.calls[0][0]
    expect(addedCart[0].name).toBe('Wireless Headphones')
  })
})
