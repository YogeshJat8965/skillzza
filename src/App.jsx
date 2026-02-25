import React from 'react'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import SkillzzaEcosystem from './components/SkillzzaEcosystem'
import SolutionSkillStudio from './components/SolutionSkillStudio'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondNavbar />
      <Hero />
      <Challenge />
      <SkillzzaEcosystem />
      <SolutionSkillStudio />
      {/* Other sections will be added here */}
    </div>
  )
}

export default App
