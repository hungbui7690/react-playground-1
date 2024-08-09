/*
  Components
  - in src create components folder
  - in the components create following files
    > Navbar.js
    > Hero.js
    > About.js
    > Services.js
    > Tours.js
    > Footer.js

  - setup components with default export (snippet - rafce)
  - carefully move the code from App.js into components (files)
    > hint - look for navbar, footer and section tags
    
  - App.js should be empty
  - import and render all components in App.js (try auto imports)
  - result is going to be the same, it's just easier to manage the code
  - again, it's just my preference to split up code in such way.
    >> You can split it up in any way that makes the most sense to you.  
  

*/

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  // ***
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
