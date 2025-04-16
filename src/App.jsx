import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OverView from './components/OverView'
import Timeline from './components/TimeLine'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <OverView/>
      <Timeline/>
    </div>
  )
}

export default App
