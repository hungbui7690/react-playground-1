/*
  useNavigate
  - (?.) or Optional Chaining Explained: https://youtu.be/PuEGrylM1x8
  

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './SharedLayout'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />

          {/* (1a) pass setUser */}
          <Route path='login' element={<Login setUser={setUser} />} />

          {/* (1b) pass user >> pages/Login */}
          <Route path='dashboard' element={<Dashboard user={user} />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
