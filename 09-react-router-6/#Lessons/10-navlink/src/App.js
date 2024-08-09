/*
  NavLink
  - we don't use <Link> but <NavLink>
  
  *** we can see that when the link is active, color changes to purple 
    > this works because we have .active class in css file by default 

  *** we can also add custom styles to NavLink as well


*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
