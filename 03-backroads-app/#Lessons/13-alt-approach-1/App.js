/*
  Alternative Approach (optional)
  - we can see that in the Navbar & Footer >> we use the same links and icons 
    >> we can setup components >> then import in both place to use
    >> though the style is different >> we still can set the styles as prop 

  - in components create PageLinks.js
  - import pageLinks
  - return the entire list and replace current setup in Navbar, Footer
  - "gotcha"
    > the more "moving parts" you will have the harder it's going to be to manage
    > my personal preference, if possible just use data

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
