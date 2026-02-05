import './CartItem.css'

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
