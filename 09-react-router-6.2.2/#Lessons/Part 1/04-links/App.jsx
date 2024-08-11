/*
  Link Components
  - Link -> used to navigate around our project
    -> internal links
  - <a> -> external link


*************************

  1. pages/Home.js


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './src/pages/Home'
import About from './src/pages/About'
import Products from './src/pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
