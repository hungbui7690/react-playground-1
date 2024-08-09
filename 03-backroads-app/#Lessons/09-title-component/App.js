/*
  Title Component
  - check the About, Services section (ABOUT US, OUR SERVICES, FEATURED TOURS) 
    >> we can see a lot of duplication 
    - in components create Title.js
    - get the structure from one of the sections
    - setup two props
    - replace in About, Services, Tours

*/

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  )
}

export default App
