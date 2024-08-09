/*
  Footer
  - refactor repeating code
  - re-use page and social links
  - in the <span id="date"> provide current year (hint - {})

  (1) Footer.js

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
