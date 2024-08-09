/*
  Link Components
  - used to navigate around our project
    > internal links

  - if we want to go to external links >> use <a> tag

  (1) pages/Home.js

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

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
