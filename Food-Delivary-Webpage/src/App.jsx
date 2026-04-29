import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
//import { ArrowUpRight } from 'lucide-react'  where need we can use this 
const App = () => {
  return (
    <>
    
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
      <FeatureSection/>
    </div>
    </>
  )
}

export default App
