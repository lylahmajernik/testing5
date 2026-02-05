import React from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function ProductsPage({ cart, setCart }) {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://placehold.co/600x400", description: "Premium noise-cancelling headphones with 30-hour battery life" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "https://placehold.co/600x400", description: "Fitness tracker with heart rate monitor and GPS" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/600x400", description: "Portable waterproof speaker with 360-degree sound" },
    { id: 4, name: "Laptop Stand", price: 49.99, image: "https://placehold.co/600x400", description: "Ergonomic aluminum stand for laptops and tablets" },
    { id: 5, name: "Webcam", price: 129.99, image: "https://placehold.co/600x400", description: "4K webcam with auto-focus and noise reduction" },
    { id: 6, name: "Mechanical Keyboard", price: 159.99, image: "https://placehold.co/600x400", description: "RGB backlit keyboard with custom switches" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <main className="products-page">
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
            info={product.description}
            onAddToCart={() => addToCart(product)}
          />
          <Link to={`/product_details/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </main>
  );
}

export default ProductsPage;
