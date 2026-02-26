import React from 'react'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import SchoolOfTechnology from './components/SchoolOfTechnology'
import Partnerships from './components/Partnerships'
import OurPartners from './components/OurPartners'
import PartnerForm from './components/PartnerForm'
import Insights from './components/Insights'
import SkillzzaEcosystem from './components/SkillzzaEcosystem'
import SolutionSkillStudio from './components/SolutionSkillStudio'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondNavbar />
      <Hero />
      <Challenge />
      <SchoolOfTechnology />
      <Partnerships />
      <OurPartners />
      <PartnerForm />
      <Insights />
      <SkillzzaEcosystem />
      <SolutionSkillStudio />
      {/* Other sections will be added here */}
    </div>
  )
}

export default App
