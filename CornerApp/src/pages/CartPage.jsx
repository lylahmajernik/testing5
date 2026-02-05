import React from "react";
import CartItem from "../components/CartItem";

function CartPage({ cart, setCart }) {
  const removeFromCart = (id) => {
    /* I did have chatgpt help me bc it was removing all instances of an item instead of just the first*/
    const index = cart.findIndex(item => item.id === id);
    if (index === -1) return;
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-list">
      <h2>Your Cart</h2>
      {cart.map((item, idx) => (
        <CartItem
          key={idx}
          item={item}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}
    </div>
  );
}

export default CartPage;
