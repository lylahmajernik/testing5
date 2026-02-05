import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage({ cart, setCart }) {
  const { product } = useParams();

  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://placehold.co/600x400", description: "Premium noise-cancelling headphones with 30-hour battery life" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "https://placehold.co/600x400", description: "Fitness tracker with heart rate monitor and GPS" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/600x400", description: "Portable waterproof speaker with 360-degree sound" },
    { id: 4, name: "Laptop Stand", price: 49.99, image: "https://placehold.co/600x400", description: "Ergonomic aluminum stand for laptops and tablets" },
    { id: 5, name: "Webcam", price: 129.99, image: "https://placehold.co/600x400", description: "4K webcam with auto-focus and noise reduction" },
    { id: 6, name: "Mechanical Keyboard", price: 159.99, image: "https://placehold.co/600x400", description: "RGB backlit keyboard with custom switches" }
  ];

  const selectedProduct = products.find(p => p.id.toString() === product);

  if (!selectedProduct) return <p>Product not found.</p>;

  const addToCart = () => setCart([...cart, selectedProduct]);

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      <p><strong>Price:</strong> ${selectedProduct.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetailsPage;
