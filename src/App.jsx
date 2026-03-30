import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import Footer from './components/Footer'

// Import Pages
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import XperiencePlatformPage from './pages/XperiencePlatformPage'
import AIHackNexPage from './pages/AIHackNexPage'
import OurPathwayPage from './pages/OurPathwayPage'
import AboutPage from './pages/AboutPage'
import PartnerCollaborationPage from './pages/PartnerCollaborationPage'
import JobSimulationPage from './pages/JobSimulationPage'
import InsightsPage from './pages/InsightsPage'

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
          <Route path="/products/ai-hacknex" element={<AIHackNexPage />} />
          <Route path="/company/our-pathway" element={<OurPathwayPage />} />
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/company/partner-collaboration" element={<PartnerCollaborationPage />} />
          <Route path="/explore/job-simulation" element={<JobSimulationPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
        
        {/* Footer stays on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
