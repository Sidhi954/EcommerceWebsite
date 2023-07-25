import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './e-commerce/ProductList';
import Cart from './e-commerce/Cart';
import Home from './e-commerce/Home';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  const removeFromCart = (productToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productToRemove.id)
    );
  };

  return (
    <>
        <div className='main'>
          <nav className='nav-bar'>
            <ul>
              <li>
                <Link to="/EcommerceWebsite">Home</Link>
              </li>
              <li>
                <Link to="/productlist">ProductList</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
        <Route
            path="/EcommerceWebsite"
            element={<Home addToCart={addToCart} />} 
          />
          <Route
            path="/productlist"
            element={<ProductList addToCart={addToCart} />}
          />
         <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        </Routes>
    </>
  );
}
