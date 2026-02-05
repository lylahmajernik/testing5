import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import './App.css'

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header storeName="Component Corner" cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage cart={cart} setCart={setCart} />} />
          <Route path="/product_details/:product" element={<ProductDetailsPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer
          storeName="Component Corner"
          address="123 Main Street, Pittsburgh, PA"
          email="info@componentcorner.com"
          phone="(123) 456-7890"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
