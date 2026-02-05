import { render, screen, fireEvent } from '@testing-library/react'
import CartItem from '../CartItem'

describe('CartItem', () => {
  const item = { name: 'Test Product', price: 19.99 }
  const onRemove = vi.fn()

  beforeEach(() => onRemove.mockClear())

  test('renders item name and price', () => {
    render(<CartItem item={item} onRemove={onRemove} />)

    expect(screen.getByText('Test Product')).toBeTruthy()
    expect(screen.getByText('Price: $19.99')).toBeTruthy()
  })

  test('calls onRemove when Remove button is clicked', () => {
    render(<CartItem item={item} onRemove={onRemove} />)

    fireEvent.click(screen.getByText('Remove'))
    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
