import './ProductCard.css';

function ProductCard({ name, image, price, info, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{info}</p>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}
export default ProductCard;