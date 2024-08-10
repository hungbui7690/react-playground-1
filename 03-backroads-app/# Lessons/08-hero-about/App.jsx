/*
  Hero
  - change title or text (optional)
  - fix the image (path in css)


*************************

  1. index.css
    -> line 209

  2. About.js
    -> fix the image (hint - just like with logo in the navbar)


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
