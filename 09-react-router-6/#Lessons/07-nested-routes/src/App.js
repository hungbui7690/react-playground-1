/*
  Nested Routes
  - with this setup, we have these routes:
    > /
    > /about
    > /products
    > /dashboard
    > /dashboard/stats

  *** but the problem with this setup is, whenever we go to:
    >> /, /about, /products: it always show the content of Home page

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
          {/* *** nested everything under home page */}
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
        {/* nested */}
        <Route path='dashboard' element={<div>dashboard</div>}>
          <Route path='stats' element={<div>stats</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
