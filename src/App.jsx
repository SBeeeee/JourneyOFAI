import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OverView from './components/OverView'
import Timeline from './components/TimeLine'
import BackgroundEffect from './components/BackgroundEffect'
import EnvironmentalImpactSection from './components/EnvironmentalImpactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative">
      <BackgroundEffect/>
      <Navbar/>
      <HeroSection/>
      <OverView/>
      <Timeline/>
   <EnvironmentalImpactSection/>
    <Footer/>
    </div>
  )
}

export default App
