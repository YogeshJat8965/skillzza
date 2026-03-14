import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import Footer from './components/Footer'

// Import Pages
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import XperiencePlatformPage from './pages/XperiencePlatformPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navbar stays on all pages */}
        <Navbar />
        <SecondNavbar />
        
        {/* Routes - different pages show based on URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/xperience-platform" element={<XperiencePlatformPage />} />
        </Routes>
        
        {/* Footer stays on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
