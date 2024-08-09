/*
  Smooth Scroll
  - html/css feature

  (1) index.css

///////////////////////////////

  Page Links
  - refactor repeating code

  - figure out which data is repeating hint (href, text )
  - in src create data.js and setup a structure
    > [ 
        { id: 1, href: '#home', text: 'home' },
      ]
  - export/import 
    > iterate over the list
    > return elements and inject data
  
  (2) create data.js 
  
  *** REMEMBER: use map() >> don't use forEach() >> since forEach() does not return new array

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
