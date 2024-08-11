/*
  Shared Layout
  - <Outlet/>


*****************************

  1. create /components/Navbar.jsx
  2. pages/Home.js


*****************************

  - /about & /products now are nested under / (Home)
  - if we setup <Outlet/> in Home page 
    -> it will show the content of About & Products pages if we go to /about, /products


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
