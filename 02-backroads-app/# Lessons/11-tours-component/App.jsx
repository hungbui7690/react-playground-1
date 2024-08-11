/*
  Tours
  - refactor repeating code

************************

  1. data.js
  2. Tours.jsx

************************

  🎍 REMEMBER: for images, we need to import images in data.js before creating array of objects


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
