import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = plant => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === plant.id);
      if (exists) return prev.map(item => item.id === plant.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...plant, qty: 1 }];
    });
  };

  return (
    <Router>
      <Header cartCount={cartItems.reduce((a, b) => a + b.qty, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
}