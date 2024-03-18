import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import React from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App