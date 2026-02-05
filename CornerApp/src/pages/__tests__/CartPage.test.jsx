import { render, screen, fireEvent } from '@testing-library/react'
import CartPage from '../CartPage'

describe('CartPage', () => {
  const items = [
    { id: 1, name: 'Item A', price: 10 },
    { id: 2, name: 'Item B', price: 20 },
  ]
  let cart
  let setCart

  beforeEach(() => {
    cart = [...items]
    setCart = vi.fn((newCart) => {
      cart = newCart
    })
  })

  test('renders all cart items', () => {
    render(<CartPage cart={cart} setCart={setCart} />)

    // Check that each item's name and price appears
    expect(screen.getByText('Item A')).toBeTruthy()
    expect(screen.getByText('Price: $10')).toBeTruthy()
    expect(screen.getByText('Item B')).toBeTruthy()
    expect(screen.getByText('Price: $20')).toBeTruthy()
  })

  test('displays empty cart message when cart is empty', () => {
    render(<CartPage cart={[]} setCart={setCart} />)

    expect(screen.getByText('Your cart is empty.')).toBeTruthy()
  })

  test('removes only one instance of an item when Remove is clicked', () => {
    render(<CartPage cart={cart} setCart={setCart} />)

    const removeButtons = screen.getAllByText('Remove')
    expect(removeButtons.length).toBe(2)

    // Click the first remove button
    fireEvent.click(removeButtons[0])

    // setCart should have been called with new cart
    expect(setCart).toHaveBeenCalled()
    const newCart = setCart.mock.calls[0][0]
    expect(newCart.length).toBe(1)
    expect(newCart[0].name).toBe('Item B')
  })
})
