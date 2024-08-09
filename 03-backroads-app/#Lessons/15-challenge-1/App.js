/*
  Challenge - Alternative Approach
  - create more components (essentially, split up the code more)
  - find all map methods and move elements to separate components
  - By the end of the video you should have four additional components
    > Tour.js >> no (s) >> single
    > Service.js >> no (s) >> single
    > SocialLink.js
    > PageLink.js

  (1) create Service.js

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
