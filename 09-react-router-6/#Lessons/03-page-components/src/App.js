/*
  Page Components

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' // (1)
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* (2) set element to the page we want */}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
