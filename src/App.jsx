import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Navbar/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/services.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      
    </div>
  )
}

export default App
