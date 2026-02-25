import React from 'react'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import Hero from './components/Hero'
import Challenge from './components/Challenge'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondNavbar />
      <Hero />
      <Challenge />
      {/* Other sections will be added here */}
    </div>
  )
}

export default App
